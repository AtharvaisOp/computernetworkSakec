let recallStudying=false,legacyQuizView=/^#flashcards\/m[34]$/.test(location.hash);
let recallFocus:HTMLElement|null=null,swipeStart:{x:number;y:number}|null=null;
const networkRecallDecks:RecallDeck[]=Object.entries(quizTopics).map(([sy,title])=>{
 const cards=quizCards.filter(c=>c.topic===sy&&c.id.startsWith('m'+sy[0]+'-')).map(c=>({
  id:'cn-'+c.id,question:c.question,answer:c.choices[0]+' '+c.explanation
 }));
 return {id:'cn-'+sy.replace('.','-'),title,module:Number(sy[0]),requires:[sy],cards};
}).filter(d=>d.cards.length);
const networkQuickIds=['m3-01','m3-07','m3-14','m3-20','m3-27','m3-43','m4-02','m4-12','m4-27','m4-41'].map(id=>'cn-'+id);
const recallDecksFor=(subject:LearningSubject)=>subject==='cd'?compilerContent.decks:networkRecallDecks;
const recallQuickFor=(subject:LearningSubject)=>subject==='cd'?compilerContent.quick:networkQuickIds.flatMap(id=>networkRecallDecks.flatMap(d=>d.cards.filter(c=>c.id===id)));
const recallCardsFor=(subject:LearningSubject)=>[...new Map(recallDecksFor(subject).flatMap(d=>d.cards).concat(recallQuickFor(subject)).map(c=>[c.id,c])).values()];
const availableDecks=(subject:LearningSubject)=>new Set(recallDecksFor(subject).filter(d=>requirementsMet(deckRequirements(subject,d,state))).map(d=>d.id));
function announceNewDecks(previous:Set<string>,subject:LearningSubject){
 const unlocked=recallDecksFor(subject).filter(d=>!previous.has(d.id)&&requirementsMet(deckRequirements(subject,d,state)));
 if(unlocked.length){
  const key=unlockKey(subject), newest=unlocked.map(d=>d.id);
  void changed(patchValue(key,[...new Set([...newest,...state[key]])].slice(0,20)));
  feedback(unlocked.length===1?'Deck unlocked: '+unlocked[0].title:unlocked.length+' decks unlocked');
 }
}
function eligibleRecallCards(subject:LearningSubject){
 const unlocked=availableDecks(subject);
 return [...new Map(recallQuickFor(subject).concat(recallDecksFor(subject).filter(d=>unlocked.has(d.id)).flatMap(d=>d.cards)).map(c=>[c.id,c])).values()];
}
function recallStats(subject:LearningSubject){
 const all=recallCardsFor(subject), eligible=eligibleRecallCards(subject), at=Date.now();
 return {
  due:eligible.filter(c=>{const r=state[recallKey(subject,c.id)];return r&&r.nextReview<=at}),
  missed:eligible.filter(c=>state[recallKey(subject,c.id)]?.rating==='Again'),
  mastered:all.filter(c=>state[recallKey(subject,c.id)]?.mastery==='mastered').length,
  total:all.length
 };
}
function renderSubjectSummary(subject:StudySubject){
 const all=subject.modules.map(id=>studyModules[id]), key=all[0].subjectId;
 const progress=all.map(m=>{const r=viewingSummary(m,state);
  return {done:r.coreDone,total:r.coreTotal,seconds:r.seconds};
 });
 const done=progress.reduce((sum,r)=>sum+r.done,0),total=progress.reduce((sum,r)=>sum+r.total,0);
 const marks=progress.reduce((sum,r,i)=>sum+(r.total?r.done/r.total*all[i].marks:0),0);
 const stats=recallStats(key), unlocked=availableDecks(key), list=recallDecksFor(key);
 const decks=state[unlockKey(key)].filter(id=>unlocked.has(id)).map(id=>list.find(d=>d.id===id)).filter((d):d is RecallDeck=>Boolean(d));
 const seconds=progress.reduce((sum,r)=>sum+r.seconds,0), speed=state[speedKey(activeModule)];
 const duration=(min:number)=>Math.floor(min/60)+'h '+min%60+'m';
 const host=$('subjectStats');
 host.innerHTML='<section class="block subjectOverview"><h2>'+esc(subject.label)+' overview</h2><div class="subjectSummaryGrid">'+
  '<div><strong>'+progressPercent(done,total)+'%</strong><small>'+(key==='cd'?'Core lecture progress':'Preparation progress')+'</small></div>'+
  '<div><strong>'+Number(marks.toFixed(1))+' / 60</strong><small>'+(key==='cd'?'Estimated coverage from lectures':'Estimated marks coverage')+'</small></div>'+
  '<div><strong>'+duration(Math.ceil(seconds/60/speed))+'</strong><small>Subject video time at '+speed+'×</small></div>'+
  '<div><strong>'+stats.mastered+' mastered · '+stats.due.length+' due</strong><small>Flashcard review</small></div></div>'+
  '<p class="info">Priority: '+all.map(m=>'M'+m.number).join(', ')+' · '+(decks.length?esc(decks.slice(0,2).map(d=>d.title).join(' · '))+' recently unlocked':unlocked.size?unlocked.size+' topic decks available':'No topic decks unlocked yet')+'</p>'+
  '<label class="summarySpeed">Playback speed <select data-subject-speed aria-label="Subject viewing speed">'+options(speeds,speed,'×')+'</select></label>'+
  '<button class="quiet" type="button" data-subject-quick>Start Quick 10</button>'+
  (key==='cd'?'<button class="quiet" type="button" data-ll-revision>Optional LL(1) refresher</button>':'')+'</section>';
 host.querySelector<HTMLSelectElement>('[data-subject-speed]')!.onchange=e=>{void changed(patchValue(speedKey(activeModule),Number(inputValue(e))));render();$('subjectStats').querySelector<HTMLSelectElement>('[data-subject-speed]')?.focus()};
 host.querySelector<HTMLButtonElement>('[data-subject-quick]')!.onclick=()=>{legacyQuizView=false;openPage('Flashcards');startRecall(key,'Quick 10',recallQuickFor(key))};
 host.querySelector<HTMLButtonElement>('[data-ll-revision]')?.addEventListener('click',()=>{
  const c=revisionConcepts(studyModules['cd-m1']).find(t=>t.syllabus.includes('1.5'));
  if(c)jumpToRequirement({label:c.title,module:'cd-m1',ref:c.id,done:false});
 });
}
function compilerNotesPanel(study:StudyModule){
 return '<div class="conceptGrid">'+revisionConcepts(study).map(c=>'<article class="block conceptCard"><small>'+esc(c.syllabus)+'</small><h3>'+esc(c.title)+'</h3><button type="button" class="quiet" data-revision-reading="'+esc(c.id)+'">Read revision note</button><button class="quiet" type="button" data-concept-note="'+esc(c.id)+'">Personal notes'+(state[conceptNoteKey(c.id)]?' · Saved':'')+'</button></article>').join('')+'</div>';
}
function openRevisionReading(id:string){
 const c=compilerContent.concepts.find(x=>x.id===id);if(!c)return;
 const tracked=studyModules[('cd-m'+c.module) as CompilerModuleId].revisionOnly;
 modal('<p class="eyebrow">'+esc(c.syllabus)+' · REVISION NOTE</p><h2>'+esc(c.title)+'</h2><p>'+esc(c.note)+'</p>'+
  (tracked?'<button type="button" id="doneReading">Done reading</button>':''));
 const done=document.getElementById('doneReading');
 if(done)done.onclick=()=>{
  const before=availableDecks('cd'), delta=revisionReadPatch(id,state);
  if(delta){void changed(delta);announceNewDecks(before,'cd')}
  $('dialog').close();
 };
}
function openConceptNote(id:string){
 const c=compilerContent.concepts.find(x=>x.id===id);if(!c)return;
 modal('<h2>Personal notes</h2><label>'+esc(c.title)+'<textarea id="memo" maxlength="8000" placeholder="Write your notes…"></textarea></label><small>Changes save as you type.</small>');
 $('memo').value=state[conceptNoteKey(id)];$('memo').oninput=e=>void changed(patchValue(conceptNoteKey(id),inputValue(e)));
}
function currentRecallSubject():LearningSubject{return activeSubject==='cd'?'cd':'cn'}
function recallButton(action:string,label:string,style='quiet'){
 return '<button type="button" class="'+style+'" data-recall="'+esc(action)+'">'+esc(label)+'</button>';
}
function startRecall(subject:LearningSubject,title:string,cards:RecallCard[],shuffle=false){
 if(!cards.length)return;
 const old=state[recallSessionKey(subject)];
 if(old&&old.index<old.cards.length&&!confirm('Replace the unfinished session? Reviews already saved will be kept.'))return;
 const session:RecallSession={title,cards:(shuffle?shuffled(cards):cards).map(c=>c.id),index:0,flipped:false};
 recallStudying=true;void changed(patchValue(recallSessionKey(subject),session));render();focusRecall('[data-recall="flip"]');
}
function focusRecall(selector:string){$('panel').querySelector<HTMLElement>(selector)?.focus({preventScroll:true})}
function recallHome(subject:LearningSubject){
 const items=recallDecksFor(subject), stats=recallStats(subject), session=state[recallSessionKey(subject)];
 const decks=items.map(d=>{const rs=deckRequirements(subject,d,state), done=rs.filter(r=>r.done).length, enabled=requirementsMet(rs);
  return '<article class="block recallDeck"><small>M'+d.module+' · '+d.cards.length+' cards</small><h3>'+esc(d.title)+'</h3>'+(subject==='cn'?'<p>'+done+' / '+rs.length+' prerequisites complete</p>'+bar(done,Math.max(1,rs.length)):'')+
  (enabled?recallButton('deck:'+d.id,'Study deck','quizPrimary')+recallButton('shuffle:'+d.id,'Shuffle'):
   recallButton('locked:'+d.id,subject==='cd'?(studyModules[('cd-m'+d.module) as CompilerModuleId].revisionOnly?'Review notes to unlock':'Go to remaining lecture'):'Locked · view prerequisites'))+'</article>';
 }).join('');
 return '<div class="eyebrow"><span class="tick"></span> '+esc(subjectFor(subject)?.label??subject)+'</div><h1>Flashcards</h1><p class="sub">Recall an answer before flipping, then rate how well you knew it.</p>'+
  '<article class="quizLaunch"><div><h2>Quick 10</h2><p>Ten high-yield cards, always unlocked.</p><p>'+stats.mastered+' of '+stats.total+' mastered · '+stats.due.length+' due for review</p></div><div class="quizActions">'+
  (session&&session.index<session.cards.length?recallButton('resume','Resume previous session','quizPrimary'):'')+
  recallButton('quick','Start Quick 10','quizPrimary')+recallButton('quickShuffle','Shuffle Quick 10')+
  (stats.due.length?recallButton('due','Review due · '+stats.due.length):'')+(stats.missed.length?recallButton('missed','Review missed · '+stats.missed.length):'')+
  '</div></article><div class="panelHead"><h2>Topic decks</h2></div><div class="recallGrid">'+decks+'</div>'+
  '<p class="info">'+esc(sync)+'. Reviews are included in your progress backup.</p>'+
  (subject==='cn'?recallButton('legacy','Classic multiple-choice practice and past results'):'');
}
function renderRecall(subject:LearningSubject){
 const panel=$('panel'),r=state[recallSessionKey(subject)];
 const eligible=new Set(eligibleRecallCards(subject).map(c=>c.id));
 const nextId=r?.cards[r.index], card=nextId&&recallCardsFor(subject).find(c=>c.id===nextId);
 const html=recallStudying&&r?(card&&eligible.has(card.id)?'<div class="quizTop">'+recallButton('home','Pause & view decks')+'<span>'+esc(r.title)+'</span></div>'+
 '<article class="quizPaper"><div class="quizCounter">Card '+(r.index+1)+' of '+r.cards.length+'</div>'+bar(r.index,r.cards.length)+
 '<button type="button" class="recallFace '+(r.flipped?'flipped':'')+'" data-recall="flip" aria-pressed="'+r.flipped+'"><span>'+esc(card.question)+'</span><small>'+(r.flipped?'Hide answer':'Show answer')+'</small></button>'+
 (r.flipped?'<section class="quizExplanation" role="status"><b>Answer</b><p>'+esc(card.answer)+'</p></section><div class="quizActions">'+recallRatings.map((a,i)=>recallButton('rate:'+a,(i+1)+'. '+a,i===2?'quizPrimary':'quiet')).join('')+'</div>':'')+
 '<p class="info">Space flips. Keys 1–4 rate the answer. Swipe right to reveal or left to hide.</p></article>':
 '<article class="quizPaper"><h2>'+(card?'This deck is locked again':'Session complete')+'</h2><p>'+(card?'Complete its prerequisites to resume. Your reviews are kept.':'Your review ratings are saved.')+'</p>'+recallButton('home','Back to flashcards','quizPrimary')+'</article>'):recallHome(subject);
 if(panel.dataset.recallView===html&&panel.querySelector('[data-recall]'))return;
 panel.dataset.recallView=html;panel.innerHTML=html;
}
function showLocked(subject:LearningSubject,deck:RecallDeck){
 const rs=deckRequirements(subject,deck,state), missing=rs.filter(r=>!r.done);
 if(subject==='cd'){
  const next=missing[0];if(!next)return;
  if(studyModules[next.module].revisionOnly)openRevisionReading(next.ref);
  else jumpToRequirement(next);
  return;
 }
 modal('<h2>'+esc(deck.title)+'</h2><p>'+deck.cards.length+' cards · '+(rs.length-missing.length)+' of '+rs.length+' prerequisites complete</p>'+
 '<ul class="missingList">'+missing.map((r,i)=>'<li><button class="quiet" type="button" data-jump="'+i+'">'+esc(r.label)+'</button></li>').join('')+'</ul>');
 $('dialogBody').querySelectorAll<HTMLButtonElement>('[data-jump]').forEach(b=>b.onclick=()=>{
  $('dialog').close();jumpToRequirement(missing[Number(b.dataset.jump)]);
 });
}
function recallAction(action:string,source?:HTMLElement){
 const subject=currentRecallSubject(), key=recallSessionKey(subject), r=state[key], decks=recallDecksFor(subject);
 if(action==='legacy'&&subject==='cn'){legacyQuizView=true;render();return}
 if(action==='home'){recallStudying=false;render();return}
 if(action==='resume'&&r){recallStudying=true;render();focusRecall('[data-recall="flip"]');return}
 if(action==='quick'||action==='quickShuffle'){startRecall(subject,'Quick 10',recallQuickFor(subject),action==='quickShuffle');return}
 if(action==='due'||action==='missed'){startRecall(subject,action==='due'?'Due for review':'Review missed',recallStats(subject)[action]);return}
 const [kind,id]=action.split(':');
 if(['deck','shuffle','locked'].includes(kind)){
  const d=decks.find(v=>v.id===id);if(!d)return;
  if(!requirementsMet(deckRequirements(subject,d,state))){recallFocus=source??null;showLocked(subject,d);return}
  startRecall(subject,d.title,d.cards,kind==='shuffle');return;
 }
 if(!recallStudying||!r||!r.cards[r.index])return;
 const cid=r.cards[r.index];if(!eligibleRecallCards(subject).some(c=>c.id===cid))return;
 if(action==='flip'){
  void changed(patchValue(key,{...r,flipped:!r.flipped}));render();focusRecall('[data-recall="flip"]');return;
 }
 if(kind==='rate'&&r.flipped&&recallRatings.includes(id as RecallRating)){
  const cardKey=recallKey(subject,cid);
  const review=scheduleRecall(state[cardKey],id as RecallRating,Date.now(),account||'guest',cid);
  void changed({...patchValue(cardKey,review),...patchValue(key,{...r,index:r.index+1,flipped:false})});
  render();focusRecall('[data-recall="flip"],[data-recall="home"]');
 }
}
document.addEventListener('click',e=>{const b=eventElement(e)?.closest<HTMLElement>('[data-recall]');if(b&&page==='Flashcards')recallAction(b.dataset.recall??'',b)});
document.addEventListener('keydown',e=>{
 if(page!=='Flashcards'||!recallStudying||$('dialog').open||e.repeat||e.metaKey||e.altKey||e.ctrlKey||eventElement(e)?.closest('input,textarea,select'))return;
 if(e.code==='Space'&&!eventElement(e)?.closest('button')){e.preventDefault();recallAction('flip')}
 if(/^[1-4]$/.test(e.key)){e.preventDefault();recallAction('rate:'+recallRatings[Number(e.key)-1])}
});
document.addEventListener('touchstart',e=>{const p=e.changedTouches[0];swipeStart=p&&eventElement(e)?.closest('.recallFace')?{x:p.clientX,y:p.clientY}:null},{passive:true});
document.addEventListener('touchend',e=>{
 const start=swipeStart;swipeStart=null;const p=e.changedTouches[0];
 if(!start||!p||Math.abs(p.clientY-start.y)>50||Math.abs(p.clientX-start.x)<55||page!=='Flashcards')return;
 const r=state[recallSessionKey(currentRecallSubject())];
 if(r&&r.flipped!==(p.clientX>start.x))recallAction('flip');
},{passive:true});
document.getElementById('dialog')!.addEventListener('close',()=>{if(recallFocus?.isConnected)recallFocus.focus();recallFocus=null});
