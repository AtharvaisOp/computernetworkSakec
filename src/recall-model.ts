const networkRecallIds=Array.from({length:100},(_,i)=>'cn-m'+(i<50?'3':'4')+'-'+String(i%50+1).padStart(2,'0'));
const recallIds:Record<LearningSubject,Set<string>>={
 cn:new Set(networkRecallIds),cd:new Set(compilerContent.quick.concat(compilerContent.decks.flatMap(d=>d.cards)).map(c=>c.id))
};
const storedCompilerRecallIds=new Set([...recallIds.cd,retiredCompilerCard]);
function migrateRetiredRecall(data:Record<string,unknown>){
 const key=recallSessionKey('cd'), saved=data[key];
 if(!saved||!isRecallSession(saved,storedCompilerRecallIds))return;
 const session=saved as RecallSession;
 const retiredIndex=session.cards.indexOf(retiredCompilerCard);
 if(retiredIndex===-1)return;
 const cards=session.cards.filter(id=>id!==retiredCompilerCard);
 data[key]=cards.length?{...session,cards,index:session.index-Number(retiredIndex<session.index),
  flipped:retiredIndex===session.index?false:session.flipped}:null;
}
const unlockKey=(subject:LearningSubject)=>`recall/${subject}/unlockedRecent` as const;
function validateRecallValue(key:string,value:unknown){
 const [,subject,kind,id]=key.split('/') as [string,LearningSubject,string,string];
 if(kind==='unlockedRecent'){
  const ids=new Set(subject==='cd'?compilerContent.decks.map(d=>d.id):Array.from({length:12},(_,i)=>'cn-3-'+(i+1)).concat(Array.from({length:7},(_,i)=>'cn-4-'+(i+1))));
  return Array.isArray(value)&&value.length<=20&&new Set(value).size===value.length&&value.every(id=>typeof id==='string'&&ids.has(id));
 }
 return kind==='card'?(subject==='cd'?storedCompilerRecallIds:recallIds.cn).has(id)&&isRecallReview(value,id):kind==='session'&&isRecallSession(value,recallIds[subject]);
}
for(const subject of ['cn','cd'] as const){
 defaults[recallSessionKey(subject)]=null;
 defaults[unlockKey(subject)]=[];
 for(const id of recallIds[subject])defaults[recallKey(subject,id)]=null;
}
defaults[recallKey('cd',retiredCompilerCard)]=null;
const conceptNoteKey=(id:string)=>`concept/${id}/note` as const;
for(const concept of compilerContent.concepts){defaults[conceptKey(concept.id)]=false;defaults[conceptNoteKey(concept.id)]=''}

interface Requirement {label:string;module:ModuleId;ref:string;done:boolean}
function deckRequirements(subject:LearningSubject,deck:RecallDeck,record:ProgressPatch):Requirement[]{
 const module=(subject==='cn'?'m'+deck.module:'cd-m'+deck.module) as ModuleId, mod=studyModules[module];
 if(subject==='cd'&&mod.revisionOnly){
  return deck.requires.flatMap(id=>{
   const topic=compilerContent.concepts.find(c=>c.id===id);
   return topic?[{label:topic.title,module,ref:topic.id,done:record[conceptKey(topic.id)]===true}]:[];
  });
 }
 return mod.lectures.filter(l=>deck.requires.includes(l.uid)||(!l.workedExample&&[...l.topicIds,...(l.conceptIds??[])].some(id=>deck.requires.includes(id))))
  .map(l=>({label:l.title,module,ref:l.uid,done:record[key(l,'done')]===true}));
}
const requirementsMet=(items:Requirement[])=>items.length>0&&items.every(x=>x.done);

// Keep the original keys so existing backups, note completion, and deck eligibility are preserved.
function revisionReadPatch(id:string,record:ProgressPatch):ProgressPatch|undefined{
 const c=compilerContent.concepts.find(concept=>concept.id===id), key=conceptKey(id);
 if(!c||!studyModules[('cd-m'+c.module) as CompilerModuleId]?.revisionOnly||record[key])return;
 const delta:ProgressPatch={};delta[key]=true;return delta;
}
