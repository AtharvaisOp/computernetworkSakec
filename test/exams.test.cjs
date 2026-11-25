const assert=require('node:assert/strict');
const {readFileSync}=require('node:fs');
const path=require('node:path');
const {test}=require('node:test');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const ctx=vm.createContext({});
vm.runInContext(readFileSync(path.join(root,'src/exams.js'),'utf8'),ctx);
const read=body=>vm.runInContext(body,ctx);
const plan=when=>read('getExamPlan(Date.parse('+JSON.stringify(when)+'))');

test('all six dates are distinct and match the timetable order',()=>{
 const dates=Array.from(read('examSchedule.map(exam=>exam.date)'));
 assert.equal(dates.length,6);
 assert.deepEqual(dates,['2026-11-28','2026-11-30','2026-12-05','2026-12-08','2026-12-10','2026-12-12']);
 assert.deepEqual(Array.from(read('examSchedule.map(exam=>exam.startTime+"-"+exam.endTime)')),['14:00-16:00','14:00-16:00','09:00-11:00','11:30-13:30','14:00-16:00','09:00-11:00']);
 assert.equal(new Set(dates).size,6);
 assert.deepEqual(dates,[...dates].sort());
 assert.deepEqual(Array.from(read('examSchedule.map(exam=>exam.code)')),['C.D.','C.N.','M.A.D.','B.I.','N.L.P.','M.L.']);
});
test('next exam timer reaches the scheduled IST start independent of browser timezone',()=>{
 const p=plan('2026-11-30T08:29:59Z');
 assert.equal(p.next.code,'C.N.');
 assert.equal(p.seconds,1);
 assert.equal(p.today.length,0);
});
test('exam is underway from the exact start and rolls forward at the exact end',()=>{
 const p=plan('2026-11-30T08:30:00Z');
 assert.equal(p.today[0].code,'C.N.');
 assert.equal(p.next.code,'M.A.D.');
 assert.equal(p.rows[1].status,'Underway');
 assert.equal(p.rows[2].status,'Next');
 const after=plan('2026-11-30T10:30:00Z');
 assert.equal(after.today.length,0);
 assert.equal(after.rows[1].status,'Past');
 assert.equal(after.next.code,'M.A.D.');
});
test('post-season state finishes without inventing a later exam',()=>{
 const p=plan('2026-12-31T18:30:00Z');
 assert.equal(p.next,null);
 assert.equal(p.seconds,0);
 assert.ok(p.rows.every(row=>row.status==='Past'));
});
test('worker serves the rebrand, exam script and old study interface',async()=>{
 const source=readFileSync(path.join(root,'dist/server/index.js'));
 const {default:worker}=await import('data:text/javascript;base64,'+source.toString('base64'));
 const request=async p=>worker.fetch(new Request('https://planner.test'+p),{});
 const response=await request('/');
 const html=await response.text();
 assert.match(html,/<title>Exam Planner/);
 assert.match(html,/id="examClock"/);
 assert.match(html,/id="studyWorkspace"/);
 assert.match(html,/src="\/exams.js"/);
 const script=await request('/exams.js');
 assert.equal(script.status,200);
 assert.match(await script.text(),/Asia\/Kolkata/);
});
test('a confirmed start time later on exam day replaces midnight as the countdown target',()=>{
 const expr=`getExamPlan(Date.parse('2026-11-28T03:30:00Z'),[{code:'C.D.',date:'2026-11-28',startTime:'10:00'}])`;
 const p=read(expr);
 assert.equal(p.next.code,'C.D.');
 assert.equal(p.seconds,3600);
 assert.equal(p.today.length,0);
 assert.equal(read(expr.replace('03:30','04:30')).today[0].code,'C.D.');
});

test('date-only fallback reaches midnight IST and remains Today for the full date',()=>{
 const sample=`[{code:'C.D.',date:'2026-11-28'}]`;
 assert.equal(read(`getExamPlan(Date.parse('2026-11-27T18:29:59Z'),${sample})`).seconds,1);
 assert.equal(read(`getExamPlan(Date.parse('2026-11-27T18:30:00Z'),${sample})`).rows[0].status,'Today');
 assert.equal(read(`getExamPlan(Date.parse('2026-11-28T18:30:00Z'),${sample})`).rows[0].status,'Past');
});
