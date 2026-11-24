const $=id=>document.getElementById(id);
const shapes={book:'M3 4q4-1 9 2 5-3 9-2v15q-5-1-9 2-4-3-9-2z M12 6v15',road:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',list:'M9 6h12 M9 12h12 M9 18h12 M3 6l1 1 2-3 M3 12h2 M3 18h2',practice:'M5 3h14v18H5z M8 7h8 M8 12h2 M14 12h2 M8 16h2 M14 16h2',flag:'M6 21V4h12l-3 5 3 5H6',settings:'M4 7h16 M4 17h16 M9 4v6 M15 14v6',file:'M6 2h8l4 4v16H6z M9 11h6 M9 15h6',play:'m7 4 13 8-13 8z',clock:'M12 3a9 9 0 1 0 .01 0 M12 7v6l4 2',check:'m4 12 5 5L20 6',chart:'M3 20h18 M6 16v-4 M12 16V8 M18 16V4',find:'M10 3a7 7 0 1 0 .01 0 M15 15l6 6',down:'m6 9 6 6 6-6',right:'m9 6 6 6-6 6',bookmark:'M6 3h12v18l-6-4-6 4z',note:'M4 4h16v12l-5 5H4z M8 9h8 M8 13h5',moon:'M20 15A9 9 0 0 1 9 3a9 9 0 1 0 11 12z'};
const icon=n=>'<svg aria-hidden="true" viewBox="0 0 24 24"><path d="'+shapes[n]+'"/></svg>';
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const guestKey='network-notebook:v1';
const account=document.querySelector('meta[name="notebook-account"]').content;
const storageKey=account?guestKey+':account:'+account:guestKey;
const accountLink=$('accountLink');
const returnPath=encodeURIComponent(location.pathname+location.hash);
accountLink.href=(account?'/signout-with-chatgpt':'/signin-with-chatgpt')+'?return_to='+returnPath;
accountLink.textContent=account?'Sign out':'Sign in with ChatGPT';
accountLink.title=account?'Signed in with ChatGPT':'Save progress across devices with ChatGPT';
let state={...defaults},pending={},localOK=true,sync='Checking account storage…',busy=false;
try{let raw=JSON.parse(localStorage.getItem(storageKey));if(raw&&valid(raw.data)&&valid(raw.pending)){Object.assign(state,raw.data);pending=raw.pending}}catch{localOK=false}
function persist(){try{localStorage.setItem(storageKey,JSON.stringify({data:state,pending}));localOK=true}catch{localOK=false}}
function changed(delta){Object.assign(state,delta);Object.assign(pending,delta);persist();flush()}
async function flush(){
 if(!account){
  sync=localOK?'Saved in this browser · sign in to sync':'Storage unavailable · export a backup before leaving';
  if(!localOK){$('storageWarning').hidden=false;$('storageWarning').textContent=sync}
  if($('sync'))$('sync').textContent=sync;
  return;
 }
 if(busy)return;busy=true;
 try{do{const batch={...pending},has=Object.keys(batch).length;const res=await fetch('/progress',has?{method:'PATCH',headers:{'Content-Type':'application/json','X-Notebook-Account':account},body:JSON.stringify(batch)}:{cache:'no-store',headers:{'X-Notebook-Account':account}});if(!res.ok)throw Error();const remote=await res.json();if(!valid(remote))throw Error();for(const k of Object.keys(batch))if(pending[k]===batch[k])delete pending[k];state={...defaults,...remote,...pending};persist()}while(Object.keys(pending).length);sync='Saved to your account'}catch{sync=localOK?'Saved in this browser · account storage unavailable':'Storage unavailable · export a backup before leaving'}finally{busy=false;if($('sync'))$('sync').textContent=sync;if(!$('dialog').open)render();if(!localOK){$('storageWarning').hidden=false;$('storageWarning').textContent=sync+' · Browser storage unavailable.'}}}
window.addEventListener('online',flush);window.addEventListener('focus',()=>{if(!$('dialog').open)flush()});
let page=location.hash.startsWith('#flashcards')?'Flashcards':'Lecture roadmap',filter='All',query='',collapsed=new Set(sections.slice(1).map(s=>s.name));
const pages={'Lecture roadmap':'road','Flashcards':'book','Syllabus coverage':'list','Numerical practice':'practice','Study priorities':'flag'};
const get=(l,k)=>state[key(l,k)];
const link=l=>'https://www.youtube.com/watch?v='+l.id;
const options=(values,current,suffix='')=>values.map(v=>'<option '+(v===current?'selected':'')+' value="'+esc(v)+'">'+esc(v)+suffix+'</option>').join('');
const bar=(n,total)=>'<div class="bar"><i style="width:'+100*n/total+'%"></i></div>';
const topicMatch=(l,id)=>l.sy.split('–').includes(id);
$('modules').innerHTML=['Network Layer','Transport Layer','Data Link Layer','Intro to Networking'].map((t,i)=>'<div class="module"><b>0'+[3,4,2,1][i]+'</b>'+t+'</div>').join('');
$('nav').innerHTML=Object.keys(pages).map(p=>'<button data-page="'+p+'">'+icon(pages[p])+p+'</button>').join('');
const mobileMenu=$('pageMenu');
function togglePageMenu(open){
 mobileMenu.setAttribute('aria-expanded',String(open));
 $('nav').classList.toggle('menuOpen',open);
}
mobileMenu.onclick=()=>togglePageMenu(mobileMenu.getAttribute('aria-expanded')!=='true');
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&mobileMenu.getAttribute('aria-expanded')==='true'){togglePageMenu(false);mobileMenu.focus()}
});
$('nav').onclick=e=>{const b=e.target.closest('button');if(b){page=b.dataset.page;togglePageMenu(false);history.replaceState(null,'',page==='Flashcards'?'#flashcards':location.pathname);render();if(mobileMenu.offsetWidth){mobileMenu.focus({preventScroll:true});window.scrollTo(0,0)}}};
function render(){$('currentPage').textContent=page;document.documentElement.classList.toggle('dark',state.theme==='dark');$('theme').innerHTML=icon('moon')+(state.theme==='light'?'Dark mode':'Light mode');document.querySelectorAll('[data-page]').forEach(b=>{b.classList.toggle('active',b.dataset.page===page);b.setAttribute('aria-current',b.dataset.page===page?'page':'false')});
 document.body.classList.toggle('quizzing', page==='Flashcards');
 document.body.classList.toggle('sectionView',page!=='Lecture roadmap' && page!=='Flashcards');
 if(page==='Flashcards'){renderQuiz();return}
 const remaining=lectures.filter(l=>!get(l,'done')),next=remaining[0],done=lectures.length-remaining.length,unknown=remaining.filter(l=>!l.time).length;
 $('nextTitle').textContent=next?next.title:'Roadmap completed';$('nextMeta').textContent=next?'Lecture '+String(next.n).padStart(2,'0')+'  ·  '+next.educator+'  ·  '+(next.time||'Duration unknown'):'All 28 lectures watched';$('resume').style.display=next?'inline-flex':'none';if(next)$('resume').href=link(next);
 updateThumbnail(next);
 const minutes=Math.ceil(remaining.reduce((s,l)=>{const [m,t]=l.time.split(':').map(Number);return s+(m*60+(t||0))},0)/60/state.speed);
 $('stats').innerHTML='<div class="stat progressStat" style="--percent:'+(done/lectures.length*100)+'%"><div class="statHead">'+icon('chart')+'Overall progress</div><strong>'+Math.round(done/lectures.length*100)+'%</strong>'+bar(done,lectures.length)+'</div><div class="stat"><div class="statHead">'+icon('check')+'Lectures completed</div><strong>'+done+' <span class="count">/ '+lectures.length+'</span></strong><small>'+remaining.length+' remaining</small></div><div class="stat"><div class="statHead">'+icon('clock')+'Viewing time <select aria-label="Playback speed" id="speed">'+options(speeds,state.speed,'×')+'</select></div><strong>'+Math.floor(minutes/60)+'h '+minutes%60+'m</strong><small>'+(unknown?unknown+' unknown durations excluded':'Remaining at selected speed')+'</small></div>';
 $('speed').onchange=e=>{changed({speed:Number(e.target.value)});render()};renderPanel()}
function updateThumbnail(lecture) {
 const frame=$('previewLink'),image=$('previewImage'),fallback=frame.querySelector('.previewFallback');
 frame.hidden=!lecture;
 if(!lecture || frame.dataset.video===lecture.id)return;
 frame.dataset.video=lecture.id;
 frame.href=link(lecture);
 frame.setAttribute('aria-label','Watch '+lecture.title+' on YouTube');
 image.hidden=false;fallback.hidden=true;
 const sources=['maxresdefault','sddefault','hqdefault','mqdefault'];
 let attempt=0;
 function loadNext(){
  if(frame.dataset.video!==lecture.id)return;
  if(attempt===sources.length){image.hidden=true;fallback.hidden=false;return}
  image.src='https://i.ytimg.com/vi/'+lecture.id+'/'+sources[attempt++]+'.jpg';
 }
 image.onerror=loadNext;
 image.onload=()=>{if(image.naturalWidth<=120)loadNext()};
 loadNext();
}
function matches(l){return (filter==='All'||filter==='Completed'&&get(l,'done')||filter==='Incomplete'&&!get(l,'done')||filter==='Revision'&&get(l,'revision'))&&[l.title,l.videoTitle,l.educator,l.sy].join(' ').toLowerCase().includes(query.toLowerCase().trim())}
function groups(){return sections.map((s,i)=>{let rows=s.rows.filter(matches);if(!rows.length)return '';let count=s.rows.filter(l=>get(l,'done')).length,open=!collapsed.has(s.name);
 return '<article class="group"><button class="groupHead" data-section="'+i+'" aria-expanded="'+open+'"><span class="num">'+String(i+1).padStart(2,'0')+'</span><strong>'+esc(s.name)+'</strong>'+bar(count,s.rows.length)+'<span class="count">'+count+' / '+s.rows.length+'</span>'+icon(open?'down':'right')+'</button>'+(open?rows.map(l=>'<div class="row '+(get(l,'done')?'done':'')+'"><input type="checkbox" data-done="'+l.id+'" aria-label="Completed: '+esc(l.title)+'" '+(get(l,'done')?'checked':'')+'><div class="details"><a href="'+link(l)+'" target="_blank" rel="noopener" title="'+esc(l.videoTitle)+'">'+esc(l.title)+'</a><small>'+esc(l.sy)+' · '+esc(l.educator)+' · '+(l.time||'Duration unknown')+'</small></div>'+action(l,'note','Personal notes',!!get(l,'note'))+action(l,'revision','Mark for revision',get(l,'revision'))+'</div>').join(''):'')+'</article>'}).join('')||'<p class="empty">No lectures match this view.</p>'}
function action(l,field,label,on){return '<button class="icon '+(on?'on':'')+'" data-'+field+'="'+l.id+'" aria-label="'+label+' for '+esc(l.title)+'" title="'+label+'" '+(field==='revision'?'aria-pressed="'+on+'"':'')+'>'+icon(field==='revision'?'bookmark':'note')+'</button>'}
function renderPanel(){let html='<div class="panelHead"><h2>'+page+'</h2>'+(page==='Lecture roadmap'?'<button class="quiet" id="expand">'+(collapsed.size?'Expand all':'Collapse all')+'</button>':'')+'</div>';
 if(page==='Lecture roadmap'){html+='<div class="tools"><div class="chips">'+['All','Incomplete','Completed','Revision'].map(f=>'<button data-filter="'+f+'" aria-pressed="'+(f===filter)+'" class="'+(f===filter?'active':'')+'">'+f+'</button>').join('')+'</div><label class="search">'+icon('find')+'<input aria-label="Search lectures" id="search" placeholder="Search lectures…" value="'+esc(query)+'"></label></div><div id="groups">'+groups()+'</div>'}
 if(page==='Syllabus coverage')html+='<p class="info">Coverage follows lectures watched. Record your problem-solving mastery in Numerical practice.</p><div class="block">'+topics.map((t,i)=>{let sy='3.'+(i+1),ls=lectures.filter(l=>topicMatch(l,sy)),n=ls.filter(l=>get(l,'done')).length;return '<div class="setting"><span><b>'+sy+'</b> '+esc(t)+'</span><small>'+n+'/'+ls.length+' · '+(n===0?'Not started':n===ls.length?'Completed':'In progress')+'</small></div>'}).join('')+'</div>';
 if(page==='Numerical practice')html+='<p class="info">Update each skill after solving problems independently.</p><div class="block">'+practice.map(p=>'<label class="setting">'+esc(p)+'<select data-practice="'+pk(p)+'">'+options(stages,state[pk(p)])+'</select></label>').join('')+'</div>';
 if(page==='Study priorities')html+='<div class="block"><h3>Recommended study effort</h3>'+['IPv4, CIDR, subnetting and supernetting','Routing algorithms','NAT, IPv6 and network protocols','Fundamentals and congestion control'].map((t,i)=>'<div class="setting">'+t+'<b>'+[40,30,20,10][i]+'%</b></div>').join('')+'</div><div class="block"><h3>Estimated exam weight · 60 marks</h3>'+['03 · Network Layer','04 · Transport Layer','02 · Data Link Layer','01 · Introduction to Networking'].map((t,i)=>'<div class="setting">'+t+'<span>'+['22.4 marks · 37.33%','19.6 marks · 32.67%','9.6 marks · 16%','8.4 marks · 14%'][i]+'</span></div>').join('')+'</div>';
 $('panel').innerHTML=html;if($('search'))$('search').oninput=e=>{query=e.target.value;collapsed.clear();$('groups').innerHTML=groups();$('expand').textContent='Collapse all'} }
$('panel').onclick=e=>{const b=e.target.closest('button,input');if(!b)return;const d=b.dataset;if(d.filter){filter=d.filter;collapsed.clear()}else if(b.id==='expand'){collapsed=collapsed.size?new Set():new Set(sections.map(s=>s.name))}else if(d.section!==undefined){const name=sections[+d.section].name;collapsed.has(name)?collapsed.delete(name):collapsed.add(name)}else if(d.done||d.revision){const l=lectures.find(l=>l.id===(d.done||d.revision)),k=key(l,d.done?'done':'revision');changed({[k]:!state[k]})}else if(d.note){note(lectures.find(l=>l.id===d.note));return}else return;render();if(b.dataset.done||b.dataset.revision||b.dataset.section!==undefined||d.filter||b.id==='expand'){const attr=Object.keys(d)[0];(attr?document.querySelector('[data-'+attr+'="'+d[attr]+'"]'):$('expand'))?.focus({preventScroll:true})}};
$('panel').onchange=e=>{if(e.target.dataset.practice)changed({[e.target.dataset.practice]:e.target.value})};
function modal(html){$('dialogBody').innerHTML=html;$('dialog').showModal()}
function note(l){modal('<h2>Lecture notes</h2><label>'+esc(l.title)+'<textarea id="memo" maxlength="8000" placeholder="Write your notes…"></textarea></label><small>Changes save as you type.</small>');$('memo').value=get(l,'note');$('memo').oninput=e=>changed({[key(l,'note')]:e.target.value})}
$('close').onclick=()=>$('dialog').close();$('dialog').onclose=render;
$('theme').onclick=()=>{changed({theme:state.theme==='light'?'dark':'light'});render()};
$('settings').onclick=()=>{modal('<h2>Backup &amp; settings</h2><p id="sync" role="status"></p><p>Export a JSON copy of your lectures, notes, practice and preferences.</p><button id="export">Export backup</button><button id="import">Import backup</button><input id="backup" type="file" accept=".json,application/json" hidden><p id="notice" role="status"></p><button id="reset">Reset Module 3 progress</button>');$('sync').textContent=sync;
 $('export').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify({version:1,data:state},null,2)],{type:'application/json'}));a.download='network-notebook-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000)};
 $('import').onclick=()=>$('backup').click();$('backup').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;if(f.size>1500000)throw Error();const b=JSON.parse(await f.text());if(b.version!==1||!valid(b.data)||!Object.keys(b.data).length)throw Error();if(confirm('Restore the saved fields from this backup?')){changed(b.data);$('notice').textContent='Backup restored.'}}catch{$('notice').textContent='Invalid backup. Your progress is unchanged.'}e.target.value=''};
 $('reset').onclick=()=>{if(confirm('Clear all Module 3 completion, revision marks, notes and numerical practice?')){changed(Object.fromEntries(Object.entries(defaults).filter(([k])=>k.startsWith('m3/'))));$('notice').textContent='Module 3 progress cleared.'}}};

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let feedbackTimer;
function feedback(message) {
 const toast = $('feedback');
 toast.textContent = message;
 toast.classList.add('visible');
 clearTimeout(feedbackTimer);
 feedbackTimer = setTimeout(() => toast.classList.remove('visible'), 1800);
}
document.addEventListener('click', event => {
 const button = event.target.closest('button, #resume, input[data-done]');
 if (!button) return;
 const id = button.dataset.done || button.dataset.revision;
 if (id) {
  const marked = button.dataset.done ? button.checked : button.getAttribute('aria-pressed') !== 'true';
  feedback(button.dataset.done ? (marked ? 'Lecture completed' : 'Marked incomplete') : (marked ? 'Added to revision' : 'Removed from revision'));
 }
 if (!reducedMotion.matches && button.dataset.page) {
  $('panel').animate([{opacity:.35, transform:'translateY(7px)'},{opacity:1, transform:'translateY(0)'}],{duration:200});
 }
}, true);
render();persist();flush();
function guestProgress(){
 try{
  const saved=JSON.parse(localStorage.getItem(guestKey));
  if(!saved || !valid(saved.data))return {};
  return Object.fromEntries(Object.entries(saved.data).filter(([k,v])=>JSON.stringify(v)!==JSON.stringify(defaults[k])));
 }catch{return {}}
}
if(account && Object.keys(guestProgress()).length){
 const notice=document.createElement('div');
 notice.className='guestImport';
 notice.innerHTML='<span>This browser has guest progress.</span> <button type="button">Add missing progress to my account</button><small role="status"></small>';
 document.querySelector('header').after(notice);
 const button=notice.querySelector('button'),label=notice.querySelector('small');
 try{if(localStorage.getItem(storageKey+':imported')===JSON.stringify(guestProgress()))notice.hidden=true}catch{}
 button.onclick=async()=>{
  button.disabled=true;
  const delta=guestProgress();
  try{
   const response=await fetch('/progress',{method:'PATCH',headers:{'Content-Type':'application/json','X-Notebook-Account':account,'X-Import-Guest':'1'},body:JSON.stringify(delta)});
   if(!response.ok)throw Error();
   try{localStorage.setItem(storageKey+':imported',JSON.stringify(delta))}catch{}
   button.hidden=true;label.textContent='Imported. Existing account entries were kept.';
   await flush();
  }catch{button.disabled=false;label.textContent='Could not import yet. Your browser copy is saved.'}
 };
}
window.addEventListener('pageshow',e=>{if(e.persisted)location.reload()});
