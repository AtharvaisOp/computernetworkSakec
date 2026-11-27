function $<K extends keyof StudyElementById>(id:K):StudyElementById[K];
function $(id:string):HTMLElement;
function $(id:string):HTMLElement{
 const element=document.getElementById(id);
 if(!element)throw Error('Missing planner element: '+id);
 return element;
}
function mustQuery<E extends HTMLElement>(selector:string,root:ParentNode=document):E{
 const node=root.querySelector<E>(selector);
 if(!node)throw Error('Missing planner element: '+selector);
 return node;
}
const eventElement=(event:Event)=>event.target instanceof Element?event.target:null;
const inputValue=(event:Event)=>(event.target as HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement).value;
const shapes:Record<string,string>={account:'M10 17l5-5-5-5 M15 12H3 M13 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6',exit:'M14 7l5 5-5 5 M19 12H7 M11 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6',book:'M3 4q4-1 9 2 5-3 9-2v15q-5-1-9 2-4-3-9-2z M12 6v15',road:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',list:'M9 6h12 M9 12h12 M9 18h12 M3 6l1 1 2-3 M3 12h2 M3 18h2',practice:'M5 3h14v18H5z M8 7h8 M8 12h2 M14 12h2 M8 16h2 M14 16h2',flag:'M6 21V4h12l-3 5 3 5H6',settings:'M4 7h16 M4 17h16 M9 4v6 M15 14v6',file:'M6 2h8l4 4v16H6z M9 11h6 M9 15h6',play:'m7 4 13 8-13 8z',clock:'M12 3a9 9 0 1 0 .01 0 M12 7v6l4 2',check:'m4 12 5 5L20 6',chart:'M3 20h18 M6 16v-4 M12 16V8 M18 16V4',find:'M10 3a7 7 0 1 0 .01 0 M15 15l6 6',down:'m6 9 6 6 6-6',right:'m9 6 6 6-6 6',bookmark:'M6 3h12v18l-6-4-6 4z',note:'M4 4h16v12l-5 5H4z M8 9h8 M8 13h5',moon:'M20 15A9 9 0 0 1 9 3a9 9 0 1 0 11 12z',sun:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M12 3v2 M12 19v2 M3 12h2 M19 12h2 M5.6 5.6l1.5 1.5 M17 17l1.5 1.5 M5.6 18.4l1.5-1.5 M17 7l1.5-1.5'};
const icon=(n:string)=>'<svg aria-hidden="true" viewBox="0 0 24 24"><path d="'+shapes[n]+'"/></svg>';
document.querySelectorAll<HTMLElement>('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon!));
const escapeChars:Record<string,string>={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};
const esc=(s:unknown)=>String(s).replace(/[&<>"']/g,c=>escapeChars[c]);
const guestKey='network-notebook:v1';
const account=mustQuery<HTMLMetaElement>('meta[name="notebook-account"]').content;
const storageKey=account?guestKey+':account:'+account:guestKey;
const accountLink=$('accountLink');
const returnPath=encodeURIComponent(location.pathname+location.hash);
accountLink.href=(account?'/signout-with-chatgpt':'/signin-with-chatgpt')+'?return_to='+returnPath;
accountLink.classList.toggle('signOut',Boolean(account));
const accountLabel=account?'Sign out':'Sign in with ChatGPT';
accountLink.innerHTML=icon(account?'exit':'account')+'<span class="railLabel">'+accountLabel+'</span>';
accountLink.title=accountLabel;accountLink.setAttribute('aria-label',accountLabel);
let state:ProgressState={...defaults},pending:ProgressPatch={},localOK=true,sync='Checking account storage…',busy=false;
try{let raw=JSON.parse(localStorage.getItem(storageKey)??'null');if(raw){raw.data=migrate(raw.data);raw.pending=migrate(raw.pending)}if(raw&&valid(raw.data)&&valid(raw.pending)){Object.assign(state,raw.data);pending=raw.pending}}catch{localOK=false}
function persist(){try{localStorage.setItem(storageKey,JSON.stringify({data:state,pending}));localOK=true}catch{localOK=false}}
function changed(delta:ProgressPatch){Object.assign(state,delta);Object.assign(pending,delta);persist();return flush()}
function patchValue<K extends keyof ProgressState>(k:K,v:ProgressState[K]):ProgressPatch{
 const patch:ProgressPatch={};patch[k]=v;return patch;
}
async function flush(){
 if(!account){
  sync=localOK?'Saved in this browser · sign in to sync':'Storage unavailable · export a backup before leaving';
  if(!localOK){$('storageWarning').hidden=false;$('storageWarning').textContent=sync}
  {const status=document.getElementById('sync');if(status)status.textContent=sync};
  return;
 }
 if(busy)return;busy=true;
 try{do{const batch={...pending},has=Object.keys(batch).length;const res=await fetch('/progress',has?{method:'PATCH',headers:{'Content-Type':'application/json','X-Notebook-Account':account},body:JSON.stringify(batch)}:{cache:'no-store',headers:{'X-Notebook-Account':account}});if(!res.ok)throw Error();const remote=migrate(await res.json());if(!valid(remote))throw Error();for(const k of Object.keys(batch) as (keyof ProgressState)[])if(pending[k]===batch[k])delete pending[k];state=Object.assign({...defaults},remote,pending);persist()}while(Object.keys(pending).length);sync='Saved to your account'}catch{sync=localOK?'Saved in this browser · account storage unavailable':'Storage unavailable · export a backup before leaving'}finally{busy=false;{const status=document.getElementById('sync');if(status)status.textContent=sync};if(!$('dialog').open)render();if(!localOK){$('storageWarning').hidden=false;$('storageWarning').textContent=sync+' · Browser storage unavailable.'}}}
window.addEventListener('online',flush);window.addEventListener('focus',()=>{if(!$('dialog').open)flush()});
const roadmapHash=()=>location.hash.startsWith('#computer-networks')||location.hash.startsWith('#lectures/');
let page:Page=location.hash.startsWith('#flashcards')?'Flashcards':roadmapHash()?'Lecture roadmap':'Exam planner';
type StudySubject = {key:string;label:string;compact?:string;modules:ModuleId[];preparationOrder?:[number,string][]};
const studySubjects:StudySubject[]=[
 {key:'cn',label:'Computer Networks',compact:'CN',modules:['m3','m4'],preparationOrder:[[3,'Network Layer'],[4,'Transport Layer'],[2,'Data Link Layer'],[1,'Intro to Networking']]},
 {key:'cd',label:'Compiler Design',compact:'CD',modules:['cd-m2','cd-m4','cd-m1','cd-m3'],preparationOrder:[[2,'Bottom Up Parsing'],[4,'Code Generation'],[1,'Compiler Basics and Top Down Parsing'],[3,'Intermediate Code Generation']]},
 ...examSchedule.filter(e=>!['C.N.','C.D.'].includes(e.code)).map(e=>({key:e.code.toLowerCase().replace(/[^a-z]/g,''),label:e.label,modules:[]}))
];
const subjectFor=(id:string)=>studySubjects.find(s=>s.key===id);
const hashParts=location.hash.split('/');
let activeSubject=location.hash.startsWith('#computer-networks')||/^#flashcards\/m[34]$/.test(location.hash)?'cn':
 subjectFor(hashParts[1])?.key??subjectFor(state.lastSubject)?.key??'cn';
let activeModule:ModuleId=hashParts[0]==='#computer-networks'&&hashParts[1]==='m4'?'m4':
 subjectFor(activeSubject)?.modules.find(m=>m===hashParts[2])??subjectFor(activeSubject)?.modules[0]??'m3';
function selectStudySubject(id:string){
 const subject=subjectFor(id);if(!subject)return;
 if(id!==activeSubject){activeSubject=id;activeModule=subject.modules[0]??'m3'}
 if(state.lastSubject!==id)void changed({lastSubject:id});
 if(id==='cn'&&(activeModule==='m3'||activeModule==='m4'))quizModule=activeModule;
 playingQuiz=false;
}
function jumpToRequirement(req:Requirement){
 selectStudySubject(studyModules[req.module].subjectId);
 activeModule=req.module;openPage('Lecture roadmap');
 const lecture=currentStudy().lectures.find(l=>l.uid===req.ref);
 if(lecture){
  const section=currentStudy().sections.find(s=>s.rows.includes(lecture));
  if(section){collapsed.delete(section.name);roadmapManuallyChanged=true;render()}
 }
 if(!lecture&&studyModules[req.module].revisionOnly){openRevisionReading(req.ref);return}
 const el=[...document.querySelectorAll<HTMLElement>('[data-done]')].find(n=>n.dataset.done===req.ref);
 el?.scrollIntoView({block:'center'});el?.focus({preventScroll:true});
}
let filter='All',query='',collapsed=new Set<string>(),roadmapManuallyChanged=false,conceptDetailsOpen=false;
const currentStudy=()=>studyModules[activeModule];
const prefersReducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
function resetRoadmap(){
 roadmapManuallyChanged=false;filter='All';query='';conceptDetailsOpen=false;
}
function animateStudyView(){
 if(prefersReducedMotion.matches)return;
 const target=page==='Exam planner'?$('examPlanner'):$('studyWorkspace');
 target.getAnimations().forEach(animation=>animation.cancel());
 target.animate([{opacity:.68,transform:'translateY(5px)'},{opacity:1,transform:'none'}],{duration:185,easing:'cubic-bezier(.2,.7,.2,1)'});
}
const pages:Record<Page,string>={'Exam planner':'clock','Lecture roadmap':'road','Flashcards':'book','Syllabus coverage':'list','Numerical practice':'practice','Study priorities':'flag'};
const get=<F extends LectureField>(l:Lecture,k:F):ProgressState[ReturnType<typeof key<F>>]=>state[key(l,k)];
const link=(l:Lecture)=>youtubeWatch(l);
const options=<T extends string|number>(values:readonly T[],current:T,suffix='')=>values.map(v=>'<option '+(v===current?'selected':'')+' value="'+esc(v)+'">'+esc(v)+suffix+'</option>').join('');
const bar=(n:number,total:number)=>'<div class="bar"><i style="width:'+100*n/total+'%"></i></div>';
const topicMatch=(l:Lecture,id:string)=>l.topicIds.includes(id);
const ringVisits=new Map<string,{started:number,value:number}>();
function progressRing(module:ModuleId,done:number,total:number){
 const value=progressPercent(done,total);
 let visit=ringVisits.get(module);
 if(page==='Lecture roadmap'&&value>0&&!visit){
  visit={started:performance.now(),value};
  ringVisits.set(module,visit);
 }
 const visual=!prefersReducedMotion.matches&&visit?.value===value
  ?progressFrame(value,performance.now()-visit.started):value;
 return '<div class="progressRing" data-ring-module="'+module+'" role="progressbar" aria-label="Overall progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+value+'" style="--percent:'+visual+'%"><strong aria-hidden="true">'+visual+'%</strong></div>';
}
function animateProgressRing(){
 const ring=$('stats').querySelector<HTMLElement>('.progressRing');
 if(!ring||page!=='Lecture roadmap'||prefersReducedMotion.matches)return;
 const value=Number(ring.getAttribute('aria-valuenow')), visit=ringVisits.get(ring.dataset.ringModule??'');
 if(!visit||visit.value!==value)return;
 const activeRing=ring, started=visit.started;
 function paint(now:number){
  if(!activeRing.isConnected)return;
  const elapsed=now-started, visual=prefersReducedMotion.matches?value:progressFrame(value,elapsed);
  activeRing.style.setProperty('--percent',visual+'%');mustQuery<HTMLElement>('strong',activeRing).textContent=visual+'%';
  if(visual<value)requestAnimationFrame(paint);
 }
 requestAnimationFrame(paint);
}

function renderPreparationOrder(subject:StudySubject|undefined){
 const order=subject?.preparationOrder??[];
 const block=$('prepOrder');if(!block)return;
 block.hidden=!order.length;
 $('modules').innerHTML=order.map(([n,name])=>'<div class="module"><b>'+String(n).padStart(2,'0')+'</b>'+esc(name)+'</div>').join('');
}
const pageLabel=(p:string)=>p==='Lecture roadmap'?'Lectures':p==='Exam planner'?'Schedule':p;
$('nav').innerHTML=Object.keys(pages).map(p=>'<button data-page="'+p+'" title="'+pageLabel(p)+'" aria-label="'+pageLabel(p)+'">'+icon(pages[p as Page])+'<span class="railLabel">'+pageLabel(p)+'</span></button>').join('');
const sidebarToggle=$('pageMenu');
function togglePageMenu(open:boolean){
 const label=open?'Collapse sidebar':'Expand sidebar';
 sidebarToggle.setAttribute('aria-expanded',String(open));sidebarToggle.setAttribute('aria-label',label);sidebarToggle.title=label;
 document.body.classList.toggle('sidebarExpanded',open);
}
sidebarToggle.onclick=()=>togglePageMenu(sidebarToggle.getAttribute('aria-expanded')!=='true');
$('plannerSidebar').addEventListener('click',event=>{
 // Do not override the dedicated toggle or cancel a control's own click.
 if(!event.composedPath().includes(sidebarToggle)&&sidebarToggle.getAttribute('aria-expanded')!=='true')togglePageMenu(true);
});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&sidebarToggle.getAttribute('aria-expanded')==='true'&&!$('dialog').open){togglePageMenu(false);sidebarToggle.focus()}
});
let timerGhost:HTMLElement|null=null,timerReveal:Animation|null=null;
type TimerMorph = {box:DOMRect;ghost:HTMLElement;target:HTMLElement};
function timerMorphOrigin(nextPage:Page):TimerMorph|null{
 if(timerGhost){timerGhost.remove();timerGhost=null}
 if(timerReveal){timerReveal.cancel();timerReveal=null}
 if(prefersReducedMotion.matches)return null;
 const from=page==='Exam planner'&&nextPage!=='Exam planner'?$('examSpotlight'):
  page!=='Exam planner'&&nextPage==='Exam planner'?$('studyTimer'):null;
 if(!from||from.hidden||!from.getClientRects().length)return null;
 const box=from.getBoundingClientRect();
 if(box.top>=innerHeight||box.bottom<=0)return null;
 const ghost=from.cloneNode(true) as HTMLElement;
 ghost.removeAttribute('id');ghost.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
 ghost.inert=true;ghost.setAttribute('aria-hidden','true');
 ghost.classList.add('timerGhost');
 Object.assign(ghost.style,{top:box.top+'px',left:box.left+'px',width:box.width+'px',height:box.height+'px'});
 document.body.append(ghost);timerGhost=ghost;
 return {box,ghost,target:from===$('examSpotlight')?$('studyTimer'):$('examSpotlight')};
}
function morphTimer(from:TimerMorph){
 const {box,ghost,target}=from, to=target.getBoundingClientRect();
 if(!to.width||!to.height){ghost.remove();if(timerGhost===ghost)timerGhost=null;return}
 const offset='translate('+(to.left-box.left)+'px,'+(to.top-box.top)+'px) scale('+(to.width/box.width)+','+(to.height/box.height)+')';
 const settings={duration:330,easing:'cubic-bezier(.22,.8,.26,1)'};
 const flight=ghost.animate([
  {transform:'translate(0,0) scale(1)',opacity:1},
  {opacity:.8,offset:.45},
  {transform:offset,opacity:0}
 ],settings);
 timerReveal=target.animate([{opacity:0},{opacity:.18,offset:.42},{opacity:1}],settings);
 flight.onfinish=()=>{ghost.remove();if(timerGhost===ghost)timerGhost=null};
}
function openPage(nextPage:Page,moveFocus=false){
 const from=timerMorphOrigin(nextPage);
 if(nextPage==='Lecture roadmap')resetRoadmap();
 page=nextPage;
 const hash=page==='Flashcards'?'#flashcards/'+activeSubject+(activeSubject==='cd'?'/'+activeModule:''):page==='Exam planner'?'':activeSubject==='cn'?
  '#computer-networks'+(activeModule==='m4'?'/m4':''):'#lectures/'+activeSubject+(studyModules[activeModule].subjectId===activeSubject?'/'+activeModule:'');
 history.replaceState(null,'',location.pathname+location.search+hash);
 accountLink.href=(account?'/signout-with-chatgpt':'/signin-with-chatgpt')+'?return_to='+encodeURIComponent(location.pathname+location.search+hash);
 render();window.scrollTo(0,0);if(from)morphTimer(from);else animateStudyView();
 if(moveFocus){
  const heading=document.querySelector<HTMLElement>(page==='Exam planner'?'#examHeading':page==='Lecture roadmap'?'#studyWorkspace:not(.emptySubject) #moduleTitle, .emptySubject #panel h2':'#panel h1, #panel h2');
  if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}
 }
}
$('nav').onclick=e=>{const b=eventElement(e)?.closest<HTMLButtonElement>('button');if(b){
 if(b.dataset.page==='Flashcards'){legacyQuizView=false;if(activeModule==='m3'||activeModule==='m4')quizModule=activeModule;playingQuiz=false;recallStudying=false;}
 openPage(b.dataset.page as Page,true);
}};
const subjectSelect=$('subjectSelect');
subjectSelect.innerHTML=studySubjects.map(s=>'<option value="'+s.key+'" aria-label="'+esc(s.label)+'">'+esc(s.compact??s.label)+'</option>').join('');
subjectSelect.onchange=()=>{selectStudySubject(subjectSelect.value);recallStudying=false;openPage(page==='Flashcards'?'Flashcards':'Lecture roadmap');subjectSelect.focus({preventScroll:true})};
$('moduleSwitch').onclick=e=>{
 const button=eventElement(e)?.closest<HTMLButtonElement>('button[data-module]');if(!button||button.dataset.module===activeModule)return;
 const mod=subjectFor(activeSubject)?.modules.find(m=>m===button.dataset.module);if(!mod)return;
 activeModule=mod;resetRoadmap();openPage(page);$('moduleSwitch').querySelector<HTMLButtonElement>('[data-module="'+mod+'"]')?.focus({preventScroll:true});
};
const studyButton=mustQuery<HTMLButtonElement>('[data-open-study]');
studyButton.onclick=(()=>{
 const subject=studySubjects.find(s=>s.key===studyButton.dataset.subject);
 if(!subject)return;
 selectStudySubject(subject.key);openPage('Lecture roadmap');
 const heading=subject.modules.length?$('moduleTitle'):$('panel').querySelector('h2');
 if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true})}
});
let selectedDeadline='';
const examPlannerView=mountExamPlanner($('examPlanner'),()=>selectedDeadline,code=>{
 selectedDeadline=code;examPlannerView.update();studyTimer.update();
});
const studyTimer=mountStudyTimer($('studyTimer'),()=>selectedDeadline);
$('studyTimerExam').onclick=()=>{openPage('Exam planner');const heading=$('examHeading');heading.tabIndex=-1;heading.focus({preventScroll:true})};
function syncStudyTimer(){
 const round=state[roundKey(quizModule)];
 const recall=state[recallSessionKey(activeSubject==='cd'?'cd':'cn')];
 const activeTest=page==='Flashcards'&&((playingQuiz&&round&&round.index<round.cards.length)||(recallStudying&&recall&&recall.index<recall.cards.length));
 $('studyTimer').hidden=page==='Exam planner'||!!activeTest;
 studyTimer.update();
}
function render(){document.documentElement.classList.toggle('dark',state.theme==='dark');const themeLabel=state.theme==='light'?'Switch to dark mode':'Switch to light mode';$('theme').setAttribute('aria-label',themeLabel);$('theme').title=themeLabel;document.querySelectorAll<HTMLButtonElement>('[data-page]').forEach(b=>{b.classList.toggle('active',b.dataset.page===page);b.setAttribute('aria-current',b.dataset.page===page?'page':'false')});
 const planner=page==='Exam planner';
 const masteryButton=mustQuery<HTMLButtonElement>('[data-page="Numerical practice"]',$('nav'));
 masteryButton.hidden=activeSubject==='cd';
 renderPreparationOrder(studySubjects.find(s=>s.key===activeSubject));
 $('examPlanner').hidden=!planner;$('studyWorkspace').hidden=planner;
 syncStudyTimer();
 document.body.classList.toggle('quizzing', page==='Flashcards');
 document.body.classList.toggle('sectionView',!planner&&page!=='Lecture roadmap'&&page!=='Flashcards');
 if(planner){examPlannerView.update();return}
 const subject=subjectFor(activeSubject)??studySubjects[0];
 const study=currentStudy(), moduleSpeed=speedKey(study.id), lectures=study.lectures;
 const emptySubject=!subject.modules.length;
 $('subjectChooser').hidden=false;
 subjectSelect.value=activeSubject;
 $('subjectStats').hidden=page!=='Lecture roadmap'||emptySubject;
 if(page==='Lecture roadmap'&&!emptySubject)renderSubjectSummary(subject);
 if(page==='Flashcards'){
  $('studyWorkspace').classList.remove('emptySubject');
  if(emptySubject){$('panel').innerHTML='<h2>Flashcards</h2><p class="empty">No flashcards have been added for this subject yet.</p>';return}
  if(activeSubject==='cn'&&legacyQuizView){renderQuiz();return}
  renderRecall(activeSubject==='cd'?'cd':'cn');return;
 }
 $('moduleSwitch').hidden=emptySubject;
 const switchHTML='<span title="'+esc(subject.label)+'">'+esc(subject.compact??subject.label)+'</span>'+subject.modules.map(id=>'<button type="button" data-module="'+id+'">'+String(studyModules[id].number).padStart(2,'0')+' · '+esc(studyModules[id].name)+'</button>').join('');
 if($('moduleSwitch').dataset.subject!==subject.key){$('moduleSwitch').innerHTML=switchHTML;$('moduleSwitch').dataset.subject=subject.key}
 $('studyWorkspace').classList.toggle('emptySubject',emptySubject);
 if(emptySubject){
  $('panel').innerHTML='<div class="panelHead"><h2>'+esc(subject.label)+'</h2></div><p class="empty">No lecture resources have been added for this subject yet.</p>';
  return;
 }
 document.querySelectorAll<HTMLButtonElement>('[data-module]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.module===study.id)));
 $('moduleEyebrow').innerHTML='<span class="tick"></span> MODULE 0'+study.number+' · '+study.weight+' estimated';
 $('moduleTitle').textContent=study.name;
 $('moduleDescription').textContent=(study.revisionOnly?'Revision notes and flashcards · ':lectures.length+' lectures · '+study.sections.length+' sections · ')+study.marks+' of 60 marks (estimated)';
 mustQuery('.railLabel',masteryButton).textContent=study.practiceLabel;
 masteryButton.title=study.practiceLabel;masteryButton.setAttribute('aria-label',study.practiceLabel);
 if(page==='Lecture roadmap'&&!roadmapManuallyChanged){
  const initial=initialLectureSection(study,state);
  collapsed=new Set(study.sections.filter(s=>s.name!==initial).map(s=>s.name));
 }
 const {remaining,done,covered,minutes,unknown,coreDone,coreTotal}=viewingSummary(study,state);
 const isRevision=Boolean(study.revisionOnly);
 mustQuery<HTMLElement>('.hero').hidden=isRevision;
 $('stats').hidden=isRevision;
 if(isRevision){
  $('stats').replaceChildren();
  $('overviewSummary').textContent='Mid-semester revision · no full lecture playlist';
  renderPanel();return;
 }
 const next=nextLecture(lectures,state,state[`${study.id}/lastActive`]);
 $('nextTitle').textContent=next?next.title:'Roadmap completed';
 $('nextMeta').textContent=next?'Lecture '+String(next.n).padStart(2,'0')+' · '+next.educator+' · '+lectureDuration(next):'All '+lectures.length+' lectures completed';
 $('resume').style.display=next?'inline-flex':'none';if(next)$('resume').href=link(next);
 updateThumbnail(next);
 $('resume').dataset.watch=$('previewLink').dataset.watch=next?.uid||'';
 $('overviewSummary').textContent=covered+' / '+study.topics.length+' syllabus topics complete'+(study.subjectId==='cn'?' · '+study.practice.filter(p=>state[pk(p,study.id)]==='Mastered').length+' / '+study.practice.length+' '+study.masteryLabel+' mastered':'');
 $('stats').innerHTML='<div class="stat progressStat"><div class="statHead">'+icon('chart')+(coreTotal===lectures.length?'Overall progress':'Core lecture progress')+'</div>'+progressRing(study.id,coreDone,coreTotal)+'</div><div class="stat"><div class="statHead">'+icon('check')+'Lectures completed</div><strong>'+done+' <span class="count">/ '+lectures.length+'</span></strong><small>'+remaining.length+' remaining</small></div><div class="stat"><div class="statHead">'+icon('clock')+'Viewing time <select aria-label="Playback speed" id="speed">'+options(speeds,state[moduleSpeed],'×')+'</select></div><strong>'+Math.floor(minutes/60)+'h '+minutes%60+'m</strong><small>Remaining at selected speed'+(study.subjectId==='cd'&&unknown?' · '+unknown+' unknown':'')+'</small></div>';
 animateProgressRing();
 $('speed').onchange=e=>{changed(patchValue(moduleSpeed,Number(inputValue(e))));render()};renderPanel()}
function updateThumbnail(lecture:Lecture|undefined) {
 const frame=$('previewLink'),image=$('previewImage'),fallback=mustQuery('.previewFallback',frame);
 frame.hidden=!lecture;
 if(!lecture)return;
 frame.href=link(lecture);
 frame.setAttribute('aria-label','Watch '+lecture.title+' on YouTube');
 if(frame.dataset.video===lecture.id)return;
 frame.dataset.video=lecture.id;
 image.hidden=false;fallback.hidden=true;
 const video=lecture.id;
 const sources=['maxresdefault','sddefault','hqdefault','mqdefault'];
 let attempt=0;
 function loadNext(){
  if(frame.dataset.video!==video)return;
  if(attempt===sources.length){image.hidden=true;fallback.hidden=false;return}
  image.src='https://i.ytimg.com/vi/'+video+'/'+sources[attempt++]+'.jpg';
 }
 image.onerror=loadNext;
 image.onload=()=>{if(image.naturalWidth<=120)loadNext()};
 loadNext();
}
function matches(l:Lecture){return (filter==='All'||filter==='Completed'&&get(l,'done')||filter==='Incomplete'&&!get(l,'done')||filter==='Revision'&&get(l,'revision'))&&[l.title,l.videoTitle,l.educator,l.sy].join(' ').toLowerCase().includes(query.toLowerCase().trim())}
function lectureDuration(l:Lecture){return (l.startSeconds!=null?'Chapter · ':'')+(l.time||'Duration unknown')}
function groups(){return currentStudy().sections.map((s,i)=>{let rows=s.rows.filter(matches);if(!rows.length)return '';let count=s.rows.filter(l=>get(l,'done')).length,open=!collapsed.has(s.name);
 return '<article class="group"><button class="groupHead" data-section="'+i+'" aria-expanded="'+open+'"><span class="num">'+String(i+1).padStart(2,'0')+'</span><strong>'+esc(s.name)+'</strong>'+bar(count,s.rows.length)+'<span class="count">'+count+' / '+s.rows.length+'</span>'+icon(open?'down':'right')+'</button>'+(open?rows.map(l=>'<div class="row '+(get(l,'done')?'done':'')+'"><input type="checkbox" data-done="'+l.uid+'" aria-label="Completed: '+esc(l.title)+'" '+(get(l,'done')?'checked':'')+'><div class="details"><img class="lectureThumb" loading="lazy" alt="" src="https://i.ytimg.com/vi/'+l.id+'/mqdefault.jpg"><a data-watch="'+l.uid+'" href="'+link(l)+'" target="_blank" rel="noopener" title="'+esc(l.videoTitle)+'">'+esc(l.title)+'</a><small>'+esc(l.sy)+(l.workedExample||(currentStudy().subjectId==='cd'&&/(?:example|solved)/i.test(l.title))?' · Worked example':'')+(l.topicIds.some(t=>['3.3','3.4','3.5','3.8','3.9','3.10'].includes(t))?' · Numerical practice':'')+' · '+esc(l.educator)+' · '+lectureDuration(l)+' · <a class="watchText" data-watch="'+l.uid+'" href="'+link(l)+'">Watch</a></small></div>'+action(l,'note','Personal notes',!!get(l,'note'))+action(l,'revision','Mark for revision',get(l,'revision'))+'</div>').join(''):'')+'</article>'}).join('')||'<p class="empty">No lectures match this view.</p>'}
function action(l:Lecture,field:'note'|'revision',label:string,on:boolean){return '<button class="icon '+(on?'on':'')+'" data-'+field+'="'+l.uid+'" aria-label="'+label+' for '+esc(l.title)+'" title="'+label+'" '+(field==='revision'?'aria-pressed="'+on+'"':'')+'>'+icon(field==='revision'?'bookmark':'note')+'</button>'}
function topicDetail(id:string,matched:Lecture[]){
 const n=topicNotes[id]??m4Notes[id];
 if(!n)return '';
 const personal=matched.filter(l=>get(l,'note')).map(l=>'<p><b>'+esc(l.title)+'</b><br>'+esc(get(l,'note'))+'</p>').join('');
 return '<details class="quizReview"><summary>Revision notes · '+id+'</summary><p>'+esc(n.summary)+'</p><p>'+esc(n.formula)+'</p><p>'+esc(n.diagram)+'</p><p><b>'+esc(n.question)+'</b><br>'+esc(n.answer)+'</p>'+personal+'</details>';
}
function renderPanel(){const study=currentStudy(),{topics,practice,stages,lectures}=study;let html='<div class="panelHead"><h2>'+(page==='Numerical practice'?study.practiceLabel:page)+'</h2></div>';
 if(study.subjectId==='cd'&&(page==='Numerical practice'||page==='Syllabus coverage'||(page==='Lecture roadmap'&&study.revisionOnly))){
  $('panel').innerHTML='<div class="panelHead"><h2>'+(page==='Syllabus coverage'?'Syllabus and revision notes':'Revision notes')+'</h2></div>'+compilerNotesPanel(study);return;
 }
 if(study.subjectId==='cd'&&page==='Study priorities'){
  $('panel').innerHTML=html+'<div class="block"><h3>Estimated preparation priority</h3><p>M2 and M4 cover new content (42 of 60 marks). M1 and M3 cover mid-semester revision (18 of 60 marks). Individual marks are estimates, not official paper weightage.</p>'+
   (subjectFor('cd')?.modules??[]).map(id=>{const m=studyModules[id];return '<div class="setting"><span>M'+m.number+' · '+esc(m.name)+'</span><strong>'+m.marks+' marks · '+[8,8,7,7][m.number-1]+' hours</strong></div>'}).join('')+'</div>';return;
 }
 if(page==='Lecture roadmap'){html+='<div class="tools"><div class="chips">'+['All','Incomplete','Completed','Revision'].map(f=>'<button data-filter="'+f+'" aria-pressed="'+(f===filter)+'" class="'+(f===filter?'active':'')+'">'+f+'</button>').join('')+'</div><label class="search">'+icon('find')+'<input aria-label="Search lectures" id="search" placeholder="Search lectures…" value="'+esc(query)+'"></label></div><div id="groups">'+groups()+'</div>'+(study.subjectId==='cd'?'<details class="block compilerExtra"'+(conceptDetailsOpen?' open':'')+'><summary>Concise topic notes</summary>'+compilerNotesPanel(study)+'</details>':'')}
 if(page==='Syllabus coverage')html+='<p class="info">Coverage follows lectures marked complete. Track mastery independently in '+study.practiceLabel+'.</p><div class="block">'+topics.map((t,i)=>{let sy=study.number+'.'+(i+1),ls=lectures.filter(l=>topicMatch(l,sy)),n=ls.filter(l=>get(l,'done')).length;return '<div class="setting"><span><b>'+sy+'</b> '+esc(t)+'</span><small>'+n+'/'+ls.length+' · '+(n===0?'Not started':n===ls.length?'Completed':'In progress')+'</small></div>'+topicDetail(sy,ls)}).join('')+'</div>';
 if(page==='Numerical practice')html+='<p class="info">'+(study.id==='m4'?'Track what you can explain or apply without your notes.':'Update each skill after solving problems independently.')+'</p><div class="block">'+practice.map(p=>'<label class="setting">'+esc(p)+'<select data-practice="'+pk(p,study.id)+'">'+options(stages,state[pk(p,study.id)])+'</select></label>').join('')+'</div>';
 if(page==='Study priorities')html+=(study.id==='m3'?'<div class="block"><h3>Recommended study effort</h3>'+['IPv4, CIDR, subnetting and supernetting','Routing algorithms','NAT, IPv6 and network protocols','Fundamentals and congestion control'].map((t,i)=>'<div class="setting">'+t+'<b>'+[40,30,20,10][i]+'%</b></div>').join('')+'</div>':'')+'<div class="block"><h3>Estimated exam weight · 60 marks</h3>'+['03 · Network Layer','04 · Transport Layer','02 · Data Link Layer','01 · Introduction to Networking'].map((t,i)=>'<div class="setting">'+t+'<span>'+['22.4 marks · 37.33%','19.6 marks · 32.67%','9.6 marks · 16%','8.4 marks · 14%'][i]+'</span></div>').join('')+'</div>';
 $('panel').innerHTML=html;const extra=$('panel').querySelector<HTMLDetailsElement>('.compilerExtra');if(extra)extra.ontoggle=()=>{if(extra.isConnected)conceptDetailsOpen=extra.open};if(document.getElementById('search'))$('search').oninput=e=>{query=inputValue(e);roadmapManuallyChanged=true;collapsed.clear();$('groups').innerHTML=groups()} }
$('panel').onclick=e=>{const b=eventElement(e)?.closest<HTMLButtonElement|HTMLInputElement>('button,input');if(!b)return;const d=b.dataset;
 if(d.revisionReading){openRevisionReading(d.revisionReading);return}
 if(d.conceptNote){openConceptNote(d.conceptNote);return}
 const {sections,lectures}=currentStudy();if(page==='Lecture roadmap')roadmapManuallyChanged=true;if(d.filter){filter=d.filter;collapsed.clear()}else if(d.section!==undefined){const name=sections[+d.section].name;collapsed.has(name)?collapsed.delete(name):collapsed.add(name)}else if(d.done||d.revision){const l=lectures.find(l=>l.uid===(d.done||d.revision));if(!l)return;const k=key(l,d.done?'done':'revision');const sub=currentStudy().subjectId, before=availableDecks(sub);changed(patchValue(k,!state[k]));announceNewDecks(before,sub)}else if(d.note){const lecture=lectures.find(l=>l.uid===d.note);if(lecture)note(lecture);return}else return;render();if(d.done)document.querySelector('[data-done="'+d.done+'"]')?.closest('.row')?.classList.add('toggled');if(b.dataset.done||b.dataset.revision||b.dataset.section!==undefined||d.filter){const attr=Object.keys(d)[0];(attr?document.querySelector<HTMLElement>('[data-'+attr+'="'+d[attr]+'"]'):null)?.focus({preventScroll:true})}};
$('panel').onchange=e=>{const select=eventElement(e);if(select instanceof HTMLSelectElement&&select.dataset.practice)changed(patchValue(select.dataset.practice as `${ModuleId}/practice/${string}`,select.value))};
function modal(html:string){$('dialogBody').innerHTML=html;$('dialog').showModal()}
function note(l:Lecture){modal('<h2>Lecture notes</h2><label>'+esc(l.title)+'<textarea id="memo" maxlength="8000" placeholder="Write your notes…"></textarea></label><small>Changes save as you type.</small>');$('memo').value=get(l,'note');$('memo').oninput=e=>changed(patchValue(key(l,'note'),inputValue(e)))}
$('close').onclick=()=>$('dialog').close();$('dialog').onclose=render;
$('theme').onclick=()=>{changed({theme:state.theme==='light'?'dark':'light'});render()};
function openProgressBackup(){
 modal('<h2>Progress backup</h2><p>Download a JSON copy of your notes, progress and settings. Anyone with the file can read its contents. Keep it somewhere private.</p><button id="export" type="button">Download backup</button> <button id="import" type="button">Restore from file</button><input id="backup" type="file" accept=".json,application/json" hidden><p id="notice" role="status"></p>');
 const notice=$('notice'),restore=$('import');
 $('export').onclick=()=>{
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify({version:1,data:state},null,2)],{type:'application/json'}));
  a.download='network-notebook-backup.json';a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),2000);
 };
 restore.onclick=()=>$('backup').click();
 $('backup').onchange=async e=>{
  const input=e.target as HTMLInputElement,file=input.files?.[0];if(!file)return;
  restore.disabled=true;
  try{
   if(file.size>1500000)throw Error();
   const backup=JSON.parse(await file.text()), data=migrate(backup?.data);
   if(backup?.version!==1||!valid(data,true)||!Object.keys(data).length)throw Error();
   if(!confirm('Restore this backup? It replaces the progress, notes and settings contained in the file. Download a current backup first if you want to keep them.'))return;
   await changed(data);
   notice.textContent=account&&Object.keys(pending).length
    ?(localOK?'Backup applied in this browser. Changes have not yet synced to your account.':'Backup applied for this session. Changes are not saved yet.')
    :account?'Backup restored to your account.':localOK?'Backup restored in this browser.':'Backup applied for this session. Browser storage is unavailable.';
  }catch{notice.textContent='Invalid backup. Your progress is unchanged.'}
  finally{input.value='';restore.disabled=false}
 };
}
$('progressBackup').onclick=openProgressBackup;

let feedbackTimer:number|undefined;
function feedback(message:string) {
 const toast = $('feedback');
 toast.textContent = message;
 toast.classList.add('visible');
 clearTimeout(feedbackTimer);
 feedbackTimer = window.setTimeout(() => toast.classList.remove('visible'), 1800);
}
document.addEventListener('click', event => {
 const button = eventElement(event)?.closest<HTMLElement>('button, #resume, input[data-done]');
 if (!button) return;
 const id = button.dataset.done || button.dataset.revision;
 if (id) {
  const marked = button.dataset.done ? (button as HTMLInputElement).checked : button.getAttribute('aria-pressed') !== 'true';
  feedback(button.dataset.done ? (marked ? 'Lecture completed' : 'Marked incomplete') : (marked ? 'Added to revision' : 'Removed from revision'));
 }
}, true);
render();persist();flush();
function guestProgress(){
 try{
  const saved=JSON.parse(localStorage.getItem(guestKey)??'null');
  if(saved)saved.data=migrate(saved.data);
  if(!saved || !valid(saved.data))return {};
  return Object.fromEntries(Object.entries(saved.data).filter(([k,v])=>JSON.stringify(v)!==JSON.stringify(defaults[k as keyof ProgressState])));
 }catch{return {}}
}
if(account && Object.keys(guestProgress()).length){
 const notice=document.createElement('div');
 notice.className='guestImport';
 notice.innerHTML='<span>This browser has guest progress.</span> <button type="button">Add missing progress to my account</button><small role="status"></small>';
 mustQuery('main').prepend(notice);
 const button=mustQuery<HTMLButtonElement>('button',notice),label=mustQuery('small',notice);
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
