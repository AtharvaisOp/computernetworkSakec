/* Uses the same dialog as notes and backups, so account refreshes respect the player. */
const lecturePlayer = (() => {
  let active = null;
  let apiReady;
  let returnLink;

  function videoId(lecture) {
    return lecture.id;
  }

  function stableId(lecture) {
    return lecture.uid;
  }

  function loadAPI() {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (apiReady) return apiReady;
    apiReady = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try { previous?.(); } finally { resolve(window.YT); }
      };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.onerror = () => {
        script.remove();
        window.onYouTubeIframeAPIReady = previous;
        apiReady = undefined;
        reject(new Error('YouTube playback tracking is unavailable'));
      };
      document.head.append(script);
    });
    return apiReady;
  }

  function savePosition() {
    if (!active?.ready) return;
    let time;
    try { time = Math.floor(active.player.getCurrentTime()); } catch { return; }
    if (Number.isFinite(time) && time >= 0 && (time > 0 || active.played) &&
        time !== get(active.lecture, 'position')) {
      changed({[key(active.lecture, 'position')]: time});
    }
  }

  function stop() {
    if (!active) return;
    savePosition();
    const old = active;
    active = null;
    clearInterval(old.timer);
    old.player?.destroy();
    old.frame.remove();
  }

  function open(lecture) {
    if (!lecture || !lectures.includes(lecture)) return;
    const dialog = $('dialog');
    if (!dialog.open) returnLink = document.activeElement?.closest('a[data-watch]');
    stop();
    const id = videoId(lecture);
    const index = lectures.indexOf(lecture);
    const start = Math.max(0, Math.floor(Number(get(lecture, 'position')) || 0));
    changed({'m3/lastActive': stableId(lecture)});
    const body = $('dialogBody');
    body.innerHTML = '<div class="eyebrow" id="playerMeta"></div><h2 id="playerTitle" tabindex="-1"></h2>' +
      '<iframe id="lectureFrame" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>' +
      '<p role="status" id="playerStatus" hidden></p><p><a id="youtubeFallback" class="quiet" target="_blank" rel="noopener">Open on YouTube</a></p>' +
      '<div class="playerTools"><button id="previousLecture" type="button">Previous lecture</button><button id="nextLecture" type="button">Next lecture</button></div>';
    $('playerMeta').textContent = 'Lecture ' + (index + 1) + ' of ' + lectures.length + ' · ' + lecture.educator;
    $('playerTitle').textContent = lecture.title;
    const frame = $('lectureFrame');
    frame.style.cssText = 'display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:10px;background:#111';
    frame.title = lecture.title + ' · YouTube video player';
    const embed = new URL('https://www.youtube.com/embed/' + encodeURIComponent(id));
    embed.search = new URLSearchParams({enablejsapi:'1',origin:location.origin,playsinline:'1',start:String(start)}).toString();
    frame.src = embed.href;
    const fallback = new URL('https://www.youtube.com/watch');
    fallback.searchParams.set('v', id);
    if (start) fallback.searchParams.set('t', start + 's');
    $('youtubeFallback').href = fallback.href;
    const previous = $('previousLecture'), next = $('nextLecture');
    previous.disabled = index === 0;
    next.disabled = index === lectures.length - 1;
    previous.onclick = () => open(lectures[index - 1]);
    next.onclick = () => open(lectures[index + 1]);
    dialog.style.width = 'min(760px, calc(100vw - 24px))';
    dialog.style.maxWidth = 'calc(100vw - 24px)';
    dialog.classList.add('playerDialog');
    dialog.setAttribute('aria-labelledby', 'playerTitle');
    if (!dialog.open) dialog.showModal();
    $('playerTitle').focus({preventScroll:true});

    const session = {lecture, frame, ready:false, played:false};
    active = session;
    loadAPI().then(YT => {
      if (active !== session) return;
      session.player = new YT.Player(frame, {events:{
        onReady() { if (active === session) session.ready = true; },
        onStateChange(event) {
          if (active !== session) return;
          if (event.data === YT.PlayerState.PLAYING) session.played = true;
          if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) savePosition();
        },
        onError() {
          if (active !== session) return;
          $('playerStatus').hidden = false;
          $('playerStatus').textContent = 'The embedded video could not play. Open it on YouTube to continue.';
        }
      }});
      session.timer = setInterval(savePosition, 10000);
    }).catch(() => {
      if (active !== session) return;
      $('playerStatus').hidden = false;
      $('playerStatus').textContent = 'Automatic playback position saving is unavailable for this session.';
    });
  }

  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[data-watch]');
    if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const ref = anchor.dataset.watch;
    const lecture = lectures.find(item => stableId(item) === ref || videoId(item) === ref) ||
      lectures.find(item => new URL(anchor.href, location.href).searchParams.get('v') === videoId(item));
    if (!lecture) return;
    event.preventDefault();
    open(lecture);
  });

  document.getElementById('dialog').addEventListener('close', () => {
    if (!active) return;
    stop();
    $('dialog').style.removeProperty('width');
    $('dialog').style.removeProperty('max-width');
    $('dialog').classList.remove('playerDialog');
    $('dialog').removeAttribute('aria-labelledby');
    const target = returnLink?.isConnected ? returnLink :
      Array.from(document.querySelectorAll('a[data-watch]')).find(a => a.dataset.watch === returnLink?.dataset.watch);
    target?.focus({preventScroll:true});
    returnLink = null;
  });
  window.addEventListener('pagehide', savePosition);
  document.addEventListener('visibilitychange', () => { if (document.hidden) savePosition(); });
  return {open};
})();

function watchLecture(lecture) { lecturePlayer.open(lecture); }
