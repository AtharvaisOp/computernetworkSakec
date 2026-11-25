const lectures=sections.flatMap(s=>s.rows);
const speeds=[1,1.25,1.5,1.75,2];
const stages=['Not started','Practising','Mastered'];
const defaults={theme:'light',speed:1,'m3/lastActive':''};
const key=(lecture,field)=>'m3/'+lecture.uid+'/'+field;
const pk=p=>'m3/practice/'+p.toLowerCase().replace(/[^a-z0-9]+/g,'-');
for(const l of lectures){defaults[key(l,'done')]=false;defaults[key(l,'revision')]=false;defaults[key(l,'note')]='';defaults[key(l,'position')]=0}
for(const p of practice)defaults[pk(p)]=stages[0];
function valid(data){return data && typeof data==='object' && !Array.isArray(data) && Object.entries(data).every(([k,v])=>Object.hasOwn(defaults,k)&&(k.startsWith('quiz/')?validQuizValue(k,v):k==='m3/lastActive'?v===''||lectures.some(l=>l.uid===v):k.endsWith('/position')?Number.isFinite(v)&&v>=0&&v<86400:k==='theme'?['dark','light'].includes(v):k==='speed'?speeds.includes(v):k.includes('/practice/')?stages.includes(v):k.endsWith('/note')?typeof v==='string'&&v.length<=8000:typeof v==='boolean'))}

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
