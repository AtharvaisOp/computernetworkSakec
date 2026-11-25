const quizModules = ['m3','m4'];
const cardPattern = /^m[34]-(0[1-9]|[1-4][0-9]|50)$/;
const roundKey = mod => 'quiz/'+mod+'/round';
const markKey = id => 'quiz/card/'+id;
const trackKey = mod => 'quiz/'+mod+'/history';
const whole = value => Number.isSafeInteger(value) && value >= 0;
function isRound(value,mod,strict) {
 if(value===null) return true;
 if(!value || typeof value!=='object' || !Array.isArray(value.cards) || !Array.isArray(value.answers)) return false;
 const count=value.cards.length;
 if(strict&&(Object.keys(value).length!==3||!['index','answers','cards'].every(key=>Object.hasOwn(value,key))))return false;
 return count>=1 && count<=50 && new Set(value.cards.map(c=>c?.id)).size===count &&
 value.cards.every(c=>c && (!strict||(Object.keys(c).length===2 && Object.hasOwn(c,'id') && Object.hasOwn(c,'order') && typeof c.id==='string')) && cardPattern.test(c.id) && c.id.startsWith(mod+'-') && ['012','021','102','120','201','210'].includes(c.order)) &&
 whole(value.index) && value.index<=count && value.answers.length>=value.index &&
 value.answers.length<=Math.min(count,value.index+1) && value.answers.every(a=>[0,1,2].includes(a));
}
function validQuizValue(k,v,strict) {
 if(k.startsWith('quiz/card/')) return Array.isArray(v)&&v.length===3&&whole(v[0])&&whole(v[1])&&v[1]<=v[0]&&typeof v[2]==='boolean';
 if(k.endsWith('/round')) return isRound(v,k.split('/')[1],strict);
 return Array.isArray(v)&&v.length<=20&&v.every(r=>Array.isArray(r)&&r.length===3&&whole(r[0])&&r[0]<=8640000000000000&&whole(r[1])&&whole(r[2])&&r[2]>=1&&r[2]<=50&&r[1]<=r[2]);
}
for(const mod of quizModules) {
 defaults[roundKey(mod)]=null;defaults[trackKey(mod)]=[];
 for(let i=1;i<=50;i++)defaults[markKey(mod+'-'+String(i).padStart(2,'0'))]=[0,0,false];
}
