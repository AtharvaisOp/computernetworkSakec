const lectures=sections.flatMap(s=>s.rows);
const speeds=[1,1.25,1.5,1.75,2];
const stages=['Not started','Practising','Mastered'];
const defaults={theme:'light',speed:1};
const key=(lecture,field)=>'m3/'+lecture.id+'/'+field;
const pk=p=>'m3/practice/'+p.toLowerCase().replace(/[^a-z0-9]+/g,'-');
for(const l of lectures){defaults[key(l,'done')]=false;defaults[key(l,'revision')]=false;defaults[key(l,'note')]=''}
for(const p of practice)defaults[pk(p)]=stages[0];
function valid(data){return data && typeof data==='object' && !Array.isArray(data) && Object.entries(data).every(([k,v])=>Object.hasOwn(defaults,k)&&(k.startsWith('quiz/')?validQuizValue(k,v):k==='theme'?['dark','light'].includes(v):k==='speed'?speeds.includes(v):k.includes('/practice/')?stages.includes(v):k.endsWith('/note')?typeof v==='string'&&v.length<=8000:typeof v==='boolean'))}
