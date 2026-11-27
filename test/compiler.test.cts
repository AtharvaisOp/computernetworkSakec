export {};
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {test} from 'node:test';
import {createContext,runInContext} from 'node:vm';
const root=join(__dirname,'../..');
const ctx=createContext({URL,URLSearchParams});
for(const x of ['data','m4-data','compiler-content','compiler-lectures','compiler','schema','recall-model','quiz-schema','cards']){
 const filename=join(root,'.build/src',x+'.js');
 runInContext(readFileSync(filename,'utf8'),ctx,{filename});
}
const read=(code:string)=>runInContext(code,ctx);
const plain=<T,>(x:T):T=>JSON.parse(JSON.stringify(x));
test('Compiler Design covers the entire syllabus in the intended order without playlist-only revision topics',()=>{
 assert.deepEqual(plain(read("compilerModules.map(id=>studyModules[id].lectures.length)")),[0,11,0,9]);
 assert.deepEqual(plain(read("compilerModules.map(id=>studyModules[id].marks)")),[10,22,8,20]);
 assert.deepEqual(plain(read("compilerModules.map(id=>studyModules[id].topics.length)")),[5,2,3,4]);
 assert.deepEqual(plain(read("compilerModules.filter(id=>studyModules[id].revisionOnly)")),['cd-m1','cd-m3']);
 assert.equal(read("new Set(compilerContent.concepts.flatMap(c=>c.syllabus.split(','))).size"),14);
 assert.equal(read("new Set(compilerRows.map(l=>l.id)).size"),20);
 assert.equal(read("compilerRows.every(l=>l.durationSeconds===null||Number.isInteger(l.durationSeconds)&&l.durationSeconds>0)"),true);
 assert.equal(read('compilerRows.every(l=>new URL(l.watchUrl).searchParams.get("v")===l.videoId)'),true);
 assert.equal(read('compilerRows.every(l=>l.conceptIds.every(id=>compilerContent.concepts.some(c=>c.id===id)))'),true);
 assert.equal(read('studyModules["cd-m2"].lectures.every((l,i)=>l.n===i+1)&&studyModules["cd-m4"].lectures.every((l,i)=>l.n===i+1)'),true);
});
test('Compiler Design has 150 unique topic cards and 10 always-available cards (3 midsem, 7 new)',()=>{
 assert.deepEqual(plain(read("compilerModules.map((_,i)=>compilerContent.decks.filter(d=>d.module===i+1).reduce((n,d)=>n+d.cards.length,0))")),[25,52,25,48]);
 assert.equal(read("recallIds.cd.size"),160);
 assert.equal(read("compilerContent.quick.filter(c=>[1,3].includes(c.module)).length"),3);
 assert.equal(read("compilerContent.decks.every(d=>d.cards.every(c=>c.question&&c.answer))"),true);
});
test('Revision decks unlock and relock from concepts without altering past ratings',()=>{
 assert.ok(read(`(()=>{
 const deck=compilerContent.decks.find(d=>d.id==='fundamentals'), req=(s)=>requirementsMet(deckRequirements('cd',deck,s));
 const cid=deck.cards[0].id,k=recallKey('cd',cid),data={[k]:scheduleRecall(null,'Good',1000000000,'guest',cid)};
 if(req(data)||!valid(data,true))return false;
 for(const id of deck.requires)data[conceptKey(id)]=true;
 if(!req(data))return false;
 data[conceptKey(deck.requires[0])]=false;
 return !req(data)&&data[k].reviewCount===1&&valid(data,true);
 })()`));
});
test('Playlist decks depend on matching lectures, not review state or unrelated topics',()=>{
 assert.ok(read(`(()=>{
 const deck=compilerContent.decks.find(d=>d.id==='precedence'), req=(s)=>deckRequirements('cd',deck,s);
 const list=req({}), data={};
 if(list.map(x=>x.ref).join(',')!=='cd-m2-l04,cd-m2-l05,cd-m2-l06')return false;
 for(const l of studyModules['cd-m2'].lectures)data[key(l,'done')]=list.some(x=>x.ref===l.uid);
 const network=deckRequirements('cn',{module:4,requires:['4.4']},{});
 return requirementsMet(req(data))&&network.length===1&&network[0].ref==='m4-l08'&&!requirementsMet(network);
 })()`));
});
test('Review rating intervals, session resumption and strict cross-subject validation',()=>{
 assert.ok(read(`(()=>{
 const now=1000000000,cid=compilerContent.quick[0].id,k=recallKey('cd',cid);
 const a=scheduleRecall(null,'Again',now,'guest',cid),b=scheduleRecall(null,'Hard',now,'guest',cid),c=scheduleRecall(null,'Good',now,'guest',cid),d=scheduleRecall(null,'Easy',now,'guest',cid);
 const slot=recallSessionKey('cd'),sess={title:'Quick 10',cards:[cid],index:0,flipped:true};
 return a.nextReview-now===600000&&a.nextReview<b.nextReview&&b.nextReview<c.nextReview&&c.nextReview<d.nextReview&&
  scheduleRecall(d,'Easy',d.nextReview,'guest',cid).reviewCount===2&&valid({[k]:a,[slot]:sess,lastSubject:'cd'},true)&&
  !valid({[recallSessionKey('cn')]:sess},true)&&!valid({[k]:{...a,cardId:'other'}},true);
 })()`));
});
test('Viewing time omits unknown runtimes and Compiler Design cannot overwrite CN lectures',()=>{
 assert.ok(read(`(()=>{
 const m=studyModules['cd-m2'], r0=viewingSummary(m,{}), l=m.lectures[0];
 const record={[key(l,'done')]:true,'cd-m2/speed':2,'m3/m3-l01/done':true,'quiz/card/m3-01':[2,1,true]};
 const r=viewingSummary(m,migrate(record));
 return valid(record,true)&&r.seconds===r0.seconds-l.durationSeconds&&r.minutes===Math.ceil(r.seconds/120)&&r.done===1&&nextLecture(m.lectures,record,'')===m.lectures[1]&&!valid({'cd-m2/m3-l01/done':true});
 })()`));
});
test('Hosted writes preserve legacy CN records, isolate subjects and authenticate each user',async()=>{
 const bundle=readFileSync(join(root,'dist/server/index.js'),'utf8');
 const {default:worker}=await import('data:text/javascript;base64,'+Buffer.from(bundle).toString('base64'));
 const db=new Map<string,{etag:string;json():Promise<unknown>}>();
 const env={BUCKET:{get:async(k:string)=>db.get(k)??null,put:async(k:string,v:string)=>{const obj={etag:String(db.size+1),json:async()=>JSON.parse(v)};db.set(k,obj);return obj}}};
 const origin='https://planner.test';
 const send=(user:string, method:string,data?:unknown)=>worker.fetch(new Request(origin+'/progress',{method,
 headers:{origin,'content-type':'application/json','oai-authenticated-user-id':user,'x-notebook-account':encodeURIComponent(user)},
 ...(data?{body:JSON.stringify(data)}:{})}),env);
 assert.equal((await send('alice','PATCH',{'m3/m3-l01/done':true,'quiz/card/m4-01':[4,2,true]})).status,200);
 const cid=read("compilerContent.quick[0].id"), review=plain(read("scheduleRecall(null,'Easy',1000000000,'guest',compilerContent.quick[0].id)"));
 const r=await send('alice','PATCH',{'cd-m2/cd-m2-l01/done':true,[`recall/cd/card/${cid}`]:review,lastSubject:'cd'});
 assert.equal(r.status,200);
 const state=await (await send('alice','GET')).json();
 assert.equal(state['m3/m3-l01/done'],true);
 assert.deepEqual(state['quiz/card/m4-01'],[4,2,true]);
 assert.equal(state['cd-m2/cd-m2-l01/done'],true);
 assert.equal(state[`recall/cd/card/${cid}`].userId,'alice');
 assert.deepEqual(await (await send('bob','GET')).json(),{});
 assert.equal((await send('','GET')).status,401);
});
