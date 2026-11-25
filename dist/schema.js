const studyModules={
 m3:{id:'m3',name:'Network Layer',marks:22.4,weight:'37.33%',sections,topics,practice,practiceLabel:'Numerical practice',masteryLabel:'numerical skills',stages:['Not started','Practising','Mastered']},
 m4:{id:'m4',name:'Transport Layer',marks:19.6,weight:'32.67%',sections:m4Sections,topics:m4Topics,practice:m4Concepts,practiceLabel:'Concept mastery',masteryLabel:'concepts',stages:['Not started','Learning','Practising','Mastered']}
};
for(const mod of Object.values(studyModules))mod.lectures=mod.sections.flatMap(s=>s.rows);
const lectures=studyModules.m3.lectures;
const speeds=[1,1.25,1.5,1.75,2];
const defaults={theme:'light',speed:1};
const lectureModule=l=>l.uid.slice(0,2);
const key=(lecture,field)=>lectureModule(lecture)+'/'+lecture.uid+'/'+field;
const pk=(p,mod='m3')=>mod+'/practice/'+p.toLowerCase().replace(/[^a-z0-9]+/g,'-');
const speedKey=mod=>mod==='m3'?'speed':mod+'/speed';
for(const mod of Object.values(studyModules)){
 defaults[mod.id+'/lastActive']='';
 defaults[speedKey(mod.id)]=1;
 for(const l of mod.lectures){
  defaults[key(l,'done')]=false;defaults[key(l,'revision')]=false;defaults[key(l,'note')]='';defaults[key(l,'position')]=0;
 }
 for(const p of mod.practice)defaults[pk(p,mod.id)]=mod.stages[0];
}
function valid(data){return data && typeof data==='object' && !Array.isArray(data) && Object.entries(data).every(([k,v])=>{
 if(!Object.hasOwn(defaults,k))return false;
 if(k.startsWith('quiz/'))return validQuizValue(k,v);
 if(k==='theme')return ['dark','light'].includes(v);
 if(k==='speed'||k.endsWith('/speed'))return speeds.includes(v);
 const mod=studyModules[k.split('/')[0]];
 if(k.endsWith('/lastActive'))return v===''||mod.lectures.some(l=>l.uid===v);
 if(k.endsWith('/position'))return Number.isFinite(v)&&v>=0&&v<86400;
 if(k.includes('/practice/'))return mod.stages.includes(v);
 if(k.endsWith('/note'))return typeof v==='string'&&v.length<=8000;
 return typeof v==='boolean';
})}
const aliases=new Map();
for(const l of lectures)for(const id of [l.id,l.legacyVideo].filter(Boolean))
 for(const field of ['done','revision','note'])aliases.set('m3/'+id+'/'+field,key(l,field));
function migrate(data){
 if(!data||typeof data!=='object'||Array.isArray(data))return data;
 const result={...data};
 for(const [old,current] of aliases)if(Object.hasOwn(result,old)){
  if(!Object.hasOwn(result,current))result[current]=result[old];
  delete result[old];
 }
 return result;
}
function nextLecture(items,record,last){
 return items.find(l=>l.uid===last&&!record[key(l,'done')])||items.find(l=>!record[key(l,'done')]);
}
function initialLectureSection(mod,record){
 const next=nextLecture(mod.lectures,record,record[mod.id+'/lastActive']);
 return next?mod.sections.find(section=>section.rows.some(lecture=>lecture.uid===next.uid))?.name??null:null;
}
function viewingSummary(mod,record) {
 const remaining=mod.lectures.filter(l=>!record[key(l,'done')]);
 const unknown=remaining.filter(l=>!l.time).length;
 const seconds=remaining.reduce((sum,l)=>{
  const parts=String(l.time||'0').split(':').map(Number);
  return sum+parts.reduce((acc,p)=>acc*60+p,0);
 },0);
 const covered=mod.topics.filter((_,i)=>{
  const id=mod.id[1]+'.'+(i+1), matches=mod.lectures.filter(l=>l.topicIds.includes(id));
  return matches.length&&matches.every(l=>record[key(l,'done')]);
 }).length;
 return {remaining,unknown,covered,minutes:Math.ceil(seconds/60/(record[speedKey(mod.id)]||1)),done:mod.lectures.length-remaining.length};
}
function playbackStart(l,position){
 const start=l.startSeconds??0,end=l.endSeconds??Infinity;
 const saved=Math.floor(Number(position)||0);
 return saved>=start && saved<end-1?saved:start;
}
function youtubeWatch(l,position=0){
 const url=new URL('https://www.youtube.com/watch');
 url.searchParams.set('v',l.id);
 const start=playbackStart(l,position);
 if(start)url.searchParams.set('t',start+'s');
 return url.href;
}
function youtubeEmbed(l,origin,position=0){
 const url=new URL('https://www.youtube.com/embed/'+encodeURIComponent(l.id));
 url.search=new URLSearchParams({enablejsapi:'1',origin,playsinline:'1',start:String(playbackStart(l,position))}).toString();
 if(l.endSeconds!=null)url.searchParams.set('end',String(l.endSeconds));
 return url.href;
}
