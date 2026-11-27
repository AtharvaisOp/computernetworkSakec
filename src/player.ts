/* Uses the same dialog as notes and backups, so account refreshes respect the player. */
const lecturePlayer = (() => {
  type PlayerSession={lecture:Lecture;frame:HTMLIFrameElement;ready:boolean;played:boolean;player?:YTPlayer;timer?:number};
  let active:PlayerSession|null = null;
  let apiReady:Promise<YTAPI>|undefined;
  let returnLink:HTMLAnchorElement|null|undefined;

  function stableId(lecture:Lecture) {
    return lecture.uid;
  }

  function loadAPI():Promise<YTAPI> {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (apiReady) return apiReady;
    apiReady = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try { previous?.(); } finally { if(window.YT)resolve(window.YT);else reject(new Error('YouTube player did not initialize')); }
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
    if (!active?.ready || !active.player) return;
    let time;
    try { time = Math.floor(active.player.getCurrentTime()); } catch { return; }
    if(active.lecture.endSeconds!=null)time=Math.min(time,active.lecture.endSeconds);
    if(time<(active.lecture.startSeconds??0))return;
    if (Number.isFinite(time) && time >= 0 && (time > 0 || active.played) &&
        time !== get(active.lecture, 'position')) {
      changed(patchValue(key(active.lecture,'position'),time));
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

  function open(lecture:Lecture|undefined) {
    if(!lecture)return;
    const mod=studyModules[lectureModule(lecture)];
    const lectures=mod.lectures;
    if(!lectures.includes(lecture))return;
    const dialog = $('dialog');
    if (!dialog.open) returnLink = document.activeElement?.closest<HTMLAnchorElement>('a[data-watch]');
    stop();
    const index = lectures.indexOf(lecture);
    const saved=get(lecture,'position');
    changed(patchValue(`${mod.id}/lastActive`,stableId(lecture)));
    const body = $('dialogBody');
    body.innerHTML = '<div class="eyebrow" id="playerMeta"></div><h2 id="playerTitle" tabindex="-1"></h2>' +
      '<iframe id="lectureFrame" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>' +
      '<p role="status" id="playerStatus" hidden></p><p><a id="youtubeFallback" class="quiet" target="_blank" rel="noopener">Open on YouTube</a></p>' +
      '<div class="playerTools"><button id="previousLecture" type="button">Previous lecture</button><button id="nextLecture" type="button">Next lecture</button></div>';
    $('playerMeta').textContent = 'Lecture ' + (index + 1) + ' of ' + lectures.length + ' · ' + lecture.educator;
    $('playerTitle').textContent = lecture.title;
    const frame = $('lectureFrame');
    frame.title = lecture.title + ' · YouTube video player';
    frame.src=youtubeEmbed(lecture,location.origin,saved);
    $('youtubeFallback').href=youtubeWatch(lecture,saved);
    if(lecture.verificationStatus==='playback-unverified'){
      $('playerStatus').hidden=false;
      $('playerStatus').textContent='Playback has not been independently confirmed. If it does not start here, try opening it on YouTube.';
    }
    if(lecture.endSeconds!=null){
      const metadata=$('playerMeta');metadata.append(' · Chapter ends at '+new Date(lecture.endSeconds*1000).toISOString().slice(11,19));
      $('youtubeFallback').after(document.createTextNode(' · YouTube opens at the chapter start or saved position; stop at the chapter end.'));
    }
    const previous = $('previousLecture'), next = $('nextLecture');
    previous.disabled = index === 0;
    next.disabled = index === lectures.length - 1;
    previous.onclick = () => open(lectures[index - 1]);
    next.onclick = () => open(lectures[index + 1]);
    dialog.classList.add('playerDialog');
    dialog.setAttribute('aria-labelledby', 'playerTitle');
    if (!dialog.open) dialog.showModal();
    $('playerTitle').focus({preventScroll:true});

    const session:PlayerSession = {lecture, frame, ready:false, played:false};
    active = session;
    loadAPI().then(YT => {
      if (active !== session) return;
      session.player = new YT.Player(frame, {events:{
        onReady() {
          if(active!==session)return;
          session.ready=true;
          const preferred=state[speedKey(mod.id)]||1;
          if(session.player?.getAvailablePlaybackRates().includes(preferred))session.player.setPlaybackRate(preferred);
        },
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
      session.timer = window.setInterval(savePosition, 10000);
    }).catch(() => {
      if (active !== session) return;
      $('playerStatus').hidden = false;
      $('playerStatus').textContent = 'Automatic playback position saving is unavailable for this session.';
    });
  }

  document.addEventListener('click', event => {
    const anchor = eventElement(event)?.closest<HTMLAnchorElement>('a[data-watch]');
    if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const ref = anchor.dataset.watch;
    const lecture = currentStudy().lectures.find(item => stableId(item) === ref);
    if (!lecture) return;
    event.preventDefault();
    open(lecture);
  });

  document.getElementById('dialog')!.addEventListener('close', () => {
    if (!active) return;
    stop();
    $('dialog').classList.remove('playerDialog');
    $('dialog').removeAttribute('aria-labelledby');
    const target = returnLink?.isConnected ? returnLink :
      Array.from(document.querySelectorAll<HTMLAnchorElement>('a[data-watch]')).find(a => a.dataset.watch === returnLink?.dataset.watch);
    target?.focus({preventScroll:true});
    returnLink = null;
  });
  window.addEventListener('pagehide', savePosition);
  document.addEventListener('visibilitychange', () => { if (document.hidden) savePosition(); });
  return {open};
})();

function watchLecture(lecture:Lecture|undefined) { lecturePlayer.open(lecture); }
