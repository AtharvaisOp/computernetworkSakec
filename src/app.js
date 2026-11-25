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
try{let raw=JSON.parse(localStorage.getItem(storageKey));if(raw){raw.data=migrate(raw.data);raw.pending=migrate(raw.pending)}if(raw&&valid(raw.data)&&valid(raw.pending)){Object.assign(state,raw.data);pending=raw.pending}}catch{localOK=false}
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
 try{do{const batch={...pending},has=Object.keys(batch).length;const res=await fetch('/progress',has?{method:'PATCH',headers:{'Content-Type':'application/json','X-Notebook-Account':account},body:JSON.stringify(batch)}:{cache:'no-store',headers:{'X-Notebook-Account':account}});if(!res.ok)throw Error();const remote=migrate(await res.json());if(!valid(remote))throw Error();for(const k of Object.keys(batch))if(pending[k]===batch[k])delete pending[k];state={...defaults,...remote,...pending};persist()}while(Object.keys(pending).length);sync='Saved to your account'}catch{sync=localOK?'Saved in this browser · account storage unavailable':'Storage unavailable · export a backup before leaving'}finally{busy=false;if($('sync'))$('sync').textContent=sync;if(!$('dialog').open)render();if(!localOK){$('storageWarning').hidden=false;$('storageWarning').textContent=sync+' · Browser storage unavailable.'}}}
window.addEventListener('online',flush);window.addEventListener('focus',()=>{if(!$('dialog').open)flush()});
const roadmapHash=()=>location.hash.startsWith('#computer-networks')||location.hash.startsWith('#lectures/');
let page=location.hash.startsWith('#flashcards')?'Flashcards':roadmapHash()?'Lecture roadmap':'Exam planner';
const studySubjects=[{key:'cn',label:'CN',modules:['m3','m4']},...examSchedule.filter(e=>e.code!=='C.N.').map(e=>({key:e.code.toLowerCase().replace(/[^a-z]/g,''),label:e.label,modules:[]}))];
let activeModule=location.hash.endsWith('/m4')?'m4':'m3';
let activeSubject=studySubjects.find(s=>s.key===location.hash.split('/')[1])?.key||'cn';
let filter='All',query='',collapsed=new Set(),roadmapManuallyChanged=false;
const currentStudy=()=>studyModules[activeModule];
const prefersReducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
function resetRoadmap(){
 roadmapManuallyChanged=false;filter='All';query='';
}
function animateStudyView(){
 if(prefersReducedMotion.matches)return;
 const target=page==='Exam planner'?$('examPlanner'):$('studyWorkspace');
 target.getAnimations().forEach(animation=>animation.cancel());
 target.animate([{opacity:.68,transform:'translateY(5px)'},{opacity:1,transform:'none'}],{duration:185,easing:'cubic-bezier(.2,.7,.2,1)'});
}
const pages={'Exam planner':'clock','Lecture roadmap':'road','Flashcards':'book','Syllabus coverage':'list','Numerical practice':'practice','Study priorities':'flag'};
const get=(l,k)=>state[key(l,k)];
const link=l=>youtubeWatch(l);
const options=(values,current,suffix='')=>values.map(v=>'<option '+(v===current?'selected':'')+' value="'+esc(v)+'">'+esc(v)+suffix+'</option>').join('');
const bar=(n,total)=>'<div class="bar"><i style="width:'+100*n/total+'%"></i></div>';
const topicMatch=(l,id)=>l.topicIds.includes(id);
$('modules').innerHTML=['Network Layer','Transport Layer','Data Link Layer','Intro to Networking'].map((t,i)=>'<div class="module"><b>0'+[3,4,2,1][i]+'</b>'+t+'</div>').join('');
$('nav').innerHTML=Object.keys(pages).map(p=>'<button data-page="'+p+'">'+icon(pages[p])+(p==='Lecture roadmap'?'Lectures':p)+'</button>').join('');
const mobileMenu=$('pageMenu');
function togglePageMenu(open){
 mobileMenu.setAttribute('aria-expanded',String(open));
 $('nav').classList.toggle('menuOpen',open);document.querySelector('aside').classList.toggle('openMenu',open);
}
mobileMenu.onclick=()=>togglePageMenu(mobileMenu.getAttribute('aria-expanded')!=='true');
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&mobileMenu.getAttribute('aria-expanded')==='true'){togglePageMenu(false);mobileMenu.focus()}
});
function openPage(nextPage,moveFocus=false){
 if(nextPage==='Lecture roadmap')resetRoadmap();
 page=nextPage;togglePageMenu(false);
 const hash=page==='Flashcards'?'#flashcards'+(playingQuiz?'/'+quizModule:''):page==='Exam planner'?'':page==='Lecture roadmap'&&activeSubject!=='cn'?'#lectures/'+activeSubject:'#computer-networks'+(activeModule==='m4'?'/m4':'');
 history.replaceState(null,'',location.pathname+location.search+hash);
 render();animateStudyView();window.scrollTo(0,0);
 if(moveFocus&&mobileMenu.offsetWidth)mobileMenu.focus({preventScroll:true});
}
$('nav').onclick=e=>{const b=e.target.closest('button');if(b){
 if(b.dataset.page==='Flashcards'){quizModule=activeModule;playingQuiz=false;}
 if(b.dataset.page==='Numerical practice')activeSubject='cn';
 openPage(b.dataset.page,true);
}};
const subjectSelect=$('subjectSelect');
subjectSelect.innerHTML=studySubjects.map(s=>'<option value="'+s.key+'">'+esc(s.label)+'</option>').join('');
subjectSelect.onchange=()=>{activeSubject=subjectSelect.value;openPage('Lecture roadmap');subjectSelect.focus({preventScroll:true})};
$('moduleSwitch').onclick=e=>{
 const button=e.target.closest('button[data-module]');if(!button||button.dataset.module===activeModule)return;
 activeSubject='cn';activeModule=button.dataset.module;resetRoadmap();
 openPage(page);button.focus({preventScroll:true});
};
document.querySelector('[data-open-study]').onclick=()=>{activeSubject='cn';openPage('Lecture roadmap');const heading=$('moduleTitle');heading.tabIndex=-1;heading.focus({preventScroll:true})};
const examPlannerView=mountExamPlanner($('examPlanner'));
const studyTimer=mountStudyTimer($('studyTimer'));
$('studyTimerExam').onclick=()=>{openPage('Exam planner');const heading=$('examHeading');heading.tabIndex=-1;heading.focus({preventScroll:true})};
function syncStudyTimer(){
 const round=state[roundKey(quizModule)];
 const activeTest=page==='Flashcards'&&playingQuiz&&round&&round.index<round.cards.length;
 $('studyTimer').hidden=page==='Exam planner'||!!activeTest;
 studyTimer.update();
}
function render(){$('currentPage').textContent=page;document.documentElement.classList.toggle('dark',state.theme==='dark');$('theme').innerHTML=icon('moon')+(state.theme==='light'?'Dark mode':'Light mode');document.querySelectorAll('[data-page]').forEach(b=>{b.classList.toggle('active',b.dataset.page===page);b.setAttribute('aria-current',b.dataset.page===page?'page':'false')});
 const planner=page==='Exam planner';
 $('examPlanner').hidden=!planner;$('studyWorkspace').hidden=planner;
 syncStudyTimer();
 document.body.classList.toggle('quizzing', page==='Flashcards');
 document.body.classList.toggle('sectionView',!planner&&page!=='Lecture roadmap'&&page!=='Flashcards');
 if(planner){examPlannerView.update();return}
 if(page==='Flashcards'){$('studyWorkspace').classList.remove('emptySubject');renderQuiz();return}
 const subject=studySubjects.find(s=>s.key===activeSubject);
 const study=currentStudy(), moduleSpeed=speedKey(study.id), lectures=study.lectures;
 const emptySubject=page==='Lecture roadmap'&&!subject.modules.length;
 $('moduleSwitch').hidden=emptySubject;
 $('subjectChooser').hidden=page!=='Lecture roadmap';
 subjectSelect.value=activeSubject;
 $('studyWorkspace').classList.toggle('emptySubject',emptySubject);
 if(emptySubject){
  $('panel').innerHTML='<div class="panelHead"><h2>'+esc(subject.label)+'</h2></div><p class="empty">No lecture resources have been added for this subject yet.</p>';
  return;
 }
 document.querySelectorAll('[data-module]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.module===study.id)));
 $('moduleEyebrow').innerHTML='<span class="tick"></span> MODULE 0'+study.id[1]+' · '+study.weight+' estimated';
 $('moduleTitle').textContent=study.name;
 $('moduleDescription').textContent=lectures.length+' lectures · '+study.sections.length+' sections · '+study.marks+' of 60 marks (estimated)';
 const masteryButton=$('nav').querySelector('[data-page="Numerical practice"]');
 masteryButton.innerHTML=icon('practice')+study.practiceLabel;
 if(page==='Lecture roadmap'&&!roadmapManuallyChanged){
  const initial=initialLectureSection(study,state);
  collapsed=new Set(study.sections.filter(s=>s.name!==initial).map(s=>s.name));
 }
 const {remaining,done,unknown,covered,minutes}=viewingSummary(study,state);
 const next=nextLecture(lectures,state,state[study.id+'/lastActive']);
 $('nextTitle').textContent=next?next.title:'Roadmap completed';
 $('nextMeta').textContent=next?'Lecture '+String(next.n).padStart(2,'0')+' · '+next.educator+' · '+lectureDuration(next):'All '+lectures.length+' lectures watched';
 $('resume').style.display=next?'inline-flex':'none';if(next)$('resume').href=link(next);
 updateThumbnail(next);
 $('resume').dataset.watch=$('previewLink').dataset.watch=next?.uid||'';
 $('overviewSummary').textContent=covered+' / '+study.topics.length+' syllabus topics complete · '+study.practice.filter(p=>state[pk(p,study.id)]==='Mastered').length+' / '+study.practice.length+' '+study.masteryLabel+' mastered';
 $('stats').innerHTML='<div class="stat progressStat" style="--percent:'+(done/lectures.length*100)+'%"><div class="statHead">'+icon('chart')+'Overall progress</div><strong>'+Math.round(done/lectures.length*100)+'%</strong>'+bar(done,lectures.length)+'</div><div class="stat"><div class="statHead">'+icon('check')+'Lectures completed</div><strong>'+done+' <span class="count">/ '+lectures.length+'</span></strong><small>'+remaining.length+' remaining</small></div><div class="stat"><div class="statHead">'+icon('clock')+'Viewing time <select aria-label="Playback speed" id="speed">'+options(speeds,state[moduleSpeed],'×')+'</select></div><strong>'+Math.floor(minutes/60)+'h '+minutes%60+'m</strong><small>'+(unknown?unknown+' unknown durations excluded':'Remaining at selected speed')+'</small></div>';
 $('speed').onchange=e=>{changed({[moduleSpeed]:Number(e.target.value)});render()};renderPanel()}
function updateThumbnail(lecture) {
 const frame=$('previewLink'),image=$('previewImage'),fallback=frame.querySelector('.previewFallback');
 frame.hidden=!lecture;
 if(!lecture)return;
 frame.href=link(lecture);
 frame.setAttribute('aria-label','Watch '+lecture.title+' on YouTube');
 if(frame.dataset.video===lecture.id)return;
 frame.dataset.video=lecture.id;
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
function lectureDuration(l){return (l.startSeconds!=null?'Chapter · ':'')+(l.time||'Duration unknown')}
function groups(){return currentStudy().sections.map((s,i)=>{let rows=s.rows.filter(matches);if(!rows.length)return '';let count=s.rows.filter(l=>get(l,'done')).length,open=!collapsed.has(s.name);
 return '<article class="group"><button class="groupHead" data-section="'+i+'" aria-expanded="'+open+'"><span class="num">'+String(i+1).padStart(2,'0')+'</span><strong>'+esc(s.name)+'</strong>'+bar(count,s.rows.length)+'<span class="count">'+count+' / '+s.rows.length+'</span>'+icon(open?'down':'right')+'</button>'+(open?rows.map(l=>'<div class="row '+(get(l,'done')?'done':'')+'"><input type="checkbox" data-done="'+l.uid+'" aria-label="Completed: '+esc(l.title)+'" '+(get(l,'done')?'checked':'')+'><div class="details"><img class="lectureThumb" loading="lazy" alt="" src="https://i.ytimg.com/vi/'+l.id+'/mqdefault.jpg"><a data-watch="'+l.uid+'" href="'+link(l)+'" target="_blank" rel="noopener" title="'+esc(l.videoTitle)+'">'+esc(l.title)+'</a><small>'+esc(l.sy)+(l.topicIds.some(t=>['3.3','3.4','3.5','3.8','3.9','3.10'].includes(t))?' · Numerical practice':'')+' · '+esc(l.educator)+' · '+lectureDuration(l)+' · <a class="watchText" data-watch="'+l.uid+'" href="'+link(l)+'">Watch</a></small></div>'+action(l,'note','Personal notes',!!get(l,'note'))+action(l,'revision','Mark for revision',get(l,'revision'))+'</div>').join(''):'')+'</article>'}).join('')||'<p class="empty">No lectures match this view.</p>'}
function action(l,field,label,on){return '<button class="icon '+(on?'on':'')+'" data-'+field+'="'+l.uid+'" aria-label="'+label+' for '+esc(l.title)+'" title="'+label+'" '+(field==='revision'?'aria-pressed="'+on+'"':'')+'>'+icon(field==='revision'?'bookmark':'note')+'</button>'}
function topicDetail(id,matched){
 const n=topicNotes[id]??m4Notes[id];
 if(!n)return '';
 const personal=matched.filter(l=>get(l,'note')).map(l=>'<p><b>'+esc(l.title)+'</b><br>'+esc(get(l,'note'))+'</p>').join('');
 return '<details class="quizReview"><summary>Revision notes · '+id+'</summary><p>'+esc(n.summary)+'</p><p>'+esc(n.formula)+'</p><p>'+esc(n.diagram)+'</p><p><b>'+esc(n.question)+'</b><br>'+esc(n.answer)+'</p>'+personal+'</details>';
}
function renderPanel(){const study=currentStudy(),{topics,practice,stages,lectures}=study;let html='<div class="panelHead"><h2>'+(page==='Numerical practice'?study.practiceLabel:page)+'</h2></div>';
 if(page==='Lecture roadmap'){html+='<div class="tools"><div class="chips">'+['All','Incomplete','Completed','Revision'].map(f=>'<button data-filter="'+f+'" aria-pressed="'+(f===filter)+'" class="'+(f===filter?'active':'')+'">'+f+'</button>').join('')+'</div><label class="search">'+icon('find')+'<input aria-label="Search lectures" id="search" placeholder="Search lectures…" value="'+esc(query)+'"></label></div><div id="groups">'+groups()+'</div>'}
 if(page==='Syllabus coverage')html+='<p class="info">Coverage follows lectures marked complete. Track mastery independently in '+study.practiceLabel+'.</p><div class="block">'+topics.map((t,i)=>{let sy=study.id[1]+'.'+(i+1),ls=lectures.filter(l=>topicMatch(l,sy)),n=ls.filter(l=>get(l,'done')).length;return '<div class="setting"><span><b>'+sy+'</b> '+esc(t)+'</span><small>'+n+'/'+ls.length+' · '+(n===0?'Not started':n===ls.length?'Completed':'In progress')+'</small></div>'+topicDetail(sy,ls)}).join('')+'</div>';
 if(page==='Numerical practice')html+='<p class="info">'+(study.id==='m4'?'Track what you can explain or apply without your notes.':'Update each skill after solving problems independently.')+'</p><div class="block">'+practice.map(p=>'<label class="setting">'+esc(p)+'<select data-practice="'+pk(p,study.id)+'">'+options(stages,state[pk(p,study.id)])+'</select></label>').join('')+'</div>';
 if(page==='Study priorities')html+=(study.id==='m3'?'<div class="block"><h3>Recommended study effort</h3>'+['IPv4, CIDR, subnetting and supernetting','Routing algorithms','NAT, IPv6 and network protocols','Fundamentals and congestion control'].map((t,i)=>'<div class="setting">'+t+'<b>'+[40,30,20,10][i]+'%</b></div>').join('')+'</div>':'')+'<div class="block"><h3>Estimated exam weight · 60 marks</h3>'+['03 · Network Layer','04 · Transport Layer','02 · Data Link Layer','01 · Introduction to Networking'].map((t,i)=>'<div class="setting">'+t+'<span>'+['22.4 marks · 37.33%','19.6 marks · 32.67%','9.6 marks · 16%','8.4 marks · 14%'][i]+'</span></div>').join('')+'</div>';
 $('panel').innerHTML=html;if($('search'))$('search').oninput=e=>{query=e.target.value;roadmapManuallyChanged=true;collapsed.clear();$('groups').innerHTML=groups()} }
$('panel').onclick=e=>{const b=e.target.closest('button,input');if(!b)return;const d=b.dataset,{sections,lectures}=currentStudy();if(page==='Lecture roadmap')roadmapManuallyChanged=true;if(d.filter){filter=d.filter;collapsed.clear()}else if(d.section!==undefined){const name=sections[+d.section].name;collapsed.has(name)?collapsed.delete(name):collapsed.add(name)}else if(d.done||d.revision){const l=lectures.find(l=>l.uid===(d.done||d.revision)),k=key(l,d.done?'done':'revision');changed({[k]:!state[k]})}else if(d.note){note(lectures.find(l=>l.uid===d.note));return}else return;render();if(d.done)document.querySelector('[data-done="'+d.done+'"]')?.closest('.row')?.classList.add('toggled');if(b.dataset.done||b.dataset.revision||b.dataset.section!==undefined||d.filter){const attr=Object.keys(d)[0];(attr?document.querySelector('[data-'+attr+'="'+d[attr]+'"]'):null)?.focus({preventScroll:true})}};
$('panel').onchange=e=>{if(e.target.dataset.practice)changed({[e.target.dataset.practice]:e.target.value})};
function modal(html){$('dialogBody').innerHTML=html;$('dialog').showModal()}
function note(l){modal('<h2>Lecture notes</h2><label>'+esc(l.title)+'<textarea id="memo" maxlength="8000" placeholder="Write your notes…"></textarea></label><small>Changes save as you type.</small>');$('memo').value=get(l,'note');$('memo').oninput=e=>changed({[key(l,'note')]:e.target.value})}
$('close').onclick=()=>$('dialog').close();$('dialog').onclose=render;
$('theme').onclick=()=>{changed({theme:state.theme==='light'?'dark':'light'});render()};
$('settings').onclick=()=>{modal('<h2>Backup &amp; settings</h2><p id="sync" role="status"></p><p>Export a JSON copy of your lectures, notes, practice and preferences.</p><button id="export">Export backup</button><button id="import">Import backup</button><input id="backup" type="file" accept=".json,application/json" hidden><p id="notice" role="status"></p><button id="reset">Reset Module 3 progress</button>');$('sync').textContent=sync;
 $('export').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify({version:1,data:state},null,2)],{type:'application/json'}));a.download='network-notebook-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000)};
 $('import').onclick=()=>$('backup').click();$('backup').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;if(f.size>1500000)throw Error();const b=JSON.parse(await f.text());b.data=migrate(b.data);if(b.version!==1||!valid(b.data)||!Object.keys(b.data).length)throw Error();if(confirm('Restore the saved fields from this backup?')){changed(b.data);$('notice').textContent='Backup restored.'}}catch{$('notice').textContent='Invalid backup. Your progress is unchanged.'}e.target.value=''};
 $('reset').onclick=()=>{if(confirm('Clear all Module 3 completion, revision marks, notes and numerical practice?')){changed(Object.fromEntries(Object.entries(defaults).filter(([k])=>k.startsWith('m3/'))));$('notice').textContent='Module 3 progress cleared.'}}};

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
}, true);
render();persist();flush();
function guestProgress(){
 try{
  const saved=JSON.parse(localStorage.getItem(guestKey));
  if(saved)saved.data=migrate(saved.data);
  if(!saved || !valid(saved.data))return {};
  return Object.fromEntries(Object.entries(saved.data).filter(([k,v])=>JSON.stringify(v)!==JSON.stringify(defaults[k])));
 }catch{return {}}
}
if(account && Object.keys(guestProgress()).length){
 const notice=document.createElement('div');
 notice.className='guestImport';
 notice.innerHTML='<span>This browser has guest progress.</span> <button type="button">Add missing progress to my account</button><small role="status"></small>';
 document.querySelector('main').prepend(notice);
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
