const assert=require('node:assert/strict');
const {readFileSync}=require('node:fs');
const {test}=require('node:test');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const ctx=vm.createContext({URL,URLSearchParams});
for(const f of ['data.js','m4-data.js','schema.js','quiz-schema.js','cards.js','m4-notes.js']){
 vm.runInContext(readFileSync(path.join(root,'src',f),'utf8'),ctx,{filename:f});
}
const read=s=>vm.runInContext(s,ctx);
const normalize=x=>JSON.parse(JSON.stringify(x));
test('Module 4 has all 16 stable lectures in 6 sections mapped to seven official topics',()=>{
 assert.equal(read('m4Sections.length'),6);
 assert.equal(read('m4Topics.length'),7);
 assert.equal(read('m4Concepts.length'),15);
 assert.deepEqual(normalize(read('m4Rows.map(l=>l.uid)')),Array.from({length:16},(_,i)=>'m4-l'+String(i+1).padStart(2,'0')));
 assert.deepEqual(normalize(read('Array.from(new Set(m4Rows.flatMap(l=>l.topicIds)))')),Array.from({length:7},(_,i)=>'4.'+(i+1)));
 assert.equal(read('Object.keys(m4Notes).length'),7);
 assert.ok(read('m4Rows.every(l=>/^[a-zA-Z0-9_-]{11}$/.test(l.id))'));
});
test('chapters sharing a video produce independent progress and timestamped links',()=>{
 assert.ok(read(`(()=>{
  const a=m4Rows[1],b=m4Rows[10],data={[key(a,'done')]:true,[key(a,'position')]:34676,[key(b,'position')]:42724};
  const embed=new URL(youtubeEmbed(a,'https://planner.test',0)),watch=new URL(youtubeWatch(b));
  return a.id===b.id&&key(a,'done')!==key(b,'done')&&valid(data)&&!data[key(b,'done')]
   &&embed.searchParams.get('start')==='34576'&&embed.searchParams.get('end')==='35015'
   &&new URL(youtubeEmbed(b,'https://planner.test',0)).searchParams.get('end')==='43076'
   &&watch.searchParams.get('t')==='42712s'&&playbackStart(a,34676)===34676&&playbackStart(a,35015)===34576;
 })()`));
});
test('mixed state preserves legacy keys, module independence, mastery and module speeds',()=>{
 const record=normalize(read(`migrate({
  'm3/mCo7Zg_0PP0/done':true,'m3/lastActive':'m3-l19',speed:1.25,
  'm4/lastActive':'m4-l11','m4/speed':1.5,'m4/m4-l11/note':'Record types',
  'm4/practice/tcp-timers':'Learning','quiz/card/m4-01':[3,1,true]
 })`));
 assert.equal(record['m3/m3-l19/done'],true);
 assert.equal(record['m4/m4-l11/note'],'Record types');
 assert.ok(read('valid('+JSON.stringify(record)+')'));
 assert.equal(read("valid({'m4/lastActive':'m3-l19'})"),false);
 assert.equal(read("valid({'m3/practice/ipv6-compression-and-expansion':'Learning'})"),false);
});
test('overview excludes unknown runtimes and uses unfinished last lecture without changing its completion',()=>{
 assert.ok(read(`(()=>{
  const m=studyModules.m4,a=m.lectures[0],b=m.lectures[1],c=m.lectures[10];
  const s={[key(a,'done')]:true,[key(b,'done')]:true,'m4/lastActive':c.uid,'m4/speed':2};
  const result=viewingSummary(m,s);
  return result.done===2&&result.remaining.length===14&&result.covered===1
   &&result.unknown===result.remaining.filter(l=>!l.time).length&&result.minutes>0&&result.minutes<180
   &&nextLecture(m.lectures,s,s['m4/lastActive']).uid===c.uid&&s[key(c,'done')]===undefined;
 })()`));
});
test('authenticated progress API merges Module 4 changes without overwriting Module 3 or other accounts',async()=>{
 const code=readFileSync(path.join(root,'dist/server/index.js')).toString('base64');
 const {default:worker}=await import('data:text/javascript;base64,'+code);
 const rows=new Map([['progress/v1/alice',{'m3/m3-l01/done':true,speed:1.25}],['progress/v1/bob',{'m4/m4-l02/done':true}]]);
 const env={BUCKET:{async get(key){return rows.has(key)?{etag:'same',json:async()=>rows.get(key)}:null},async put(key,body){rows.set(key,JSON.parse(body));return {etag:'new'}}}};
 const headers={'oai-authenticated-user-id':'alice','X-Notebook-Account':'alice',origin:'https://planner.test'};
 const patch=await worker.fetch(new Request('https://planner.test/progress',{method:'PATCH',headers,body:JSON.stringify({'m4/m4-l11/done':true,'m4/practice/tcp-timers':'Mastered','m4/speed':2})}),env);
 assert.equal(patch.status,200);
 const get=await worker.fetch(new Request('https://planner.test/progress',{headers}),env);
 assert.deepEqual(await get.json(),{'m3/m3-l01/done':true,speed:1.25,'m4/m4-l11/done':true,'m4/practice/tcp-timers':'Mastered','m4/speed':2});
 assert.deepEqual(rows.get('progress/v1/bob'),{'m4/m4-l02/done':true});
});
