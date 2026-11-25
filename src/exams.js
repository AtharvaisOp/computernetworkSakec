// Confirmed exam windows in IST (24-hour format).
const examSchedule = [
  { code:'C.D.', label:'C.D.', date:'2026-11-28', startTime:'14:00', endTime:'16:00' },
  { code:'C.N.', label:'Computer Networks', date:'2026-11-30', startTime:'14:00', endTime:'16:00' },
  { code:'M.A.D.', label:'M.A.D.', date:'2026-12-05', startTime:'09:00', endTime:'11:00' },
  { code:'B.I.', label:'B.I.', date:'2026-12-08', startTime:'11:30', endTime:'13:30' },
  { code:'N.L.P.', label:'N.L.P.', date:'2026-12-10', startTime:'14:00', endTime:'16:00' },
  { code:'M.L.', label:'M.L.', date:'2026-12-12', startTime:'09:00', endTime:'11:00' }
];
const examDayMs = 86400000;
const examDateFormatter = new Intl.DateTimeFormat('en-IN',{
  timeZone:'Asia/Kolkata',weekday:'short',day:'numeric',month:'short',year:'numeric'
});
function examDayStart(date) {
  return Date.parse(date+'T00:00:00+05:30');
}
function examStart(exam) {
  return exam.startTime ? Date.parse(exam.date+'T'+exam.startTime+':00+05:30') : examDayStart(exam.date);
}
function examEnd(exam) {
  return exam.endTime ? Date.parse(exam.date+'T'+exam.endTime+':00+05:30') : examDayStart(exam.date)+examDayMs;
}
function getExamPlan(now, schedule=examSchedule) {
  const today=schedule.filter(exam=>now>=examStart(exam)&&now<examEnd(exam));
  const next=schedule.find(exam=>now<examStart(exam))??null;
  const seconds=next?Math.max(0,Math.ceil((examStart(next)-now)/1000)):0;
  return {today,next,seconds,rows:schedule.map(exam=>{
    const remainingDays=Math.ceil((examStart(exam)-now)/examDayMs);
    return {...exam,status:now>=examEnd(exam)?'Past':now>=examStart(exam)?(exam.startTime?'Underway':'Today'):exam===next?'Next':remainingDays+' '+(remainingDays===1?'day':'days')};
  })};
}
function examClockValues(seconds) {
  return [Math.floor(seconds/86400),Math.floor(seconds/3600)%24,Math.floor(seconds/60)%60,seconds%60];
}
function mountExamPlanner(root) {
  const el=id=>root.querySelector('#'+id);
  const timeFormatter=new Intl.DateTimeFormat('en-IN',{timeZone:'Asia/Kolkata',hour:'numeric',minute:'2-digit',hour12:true});
  const formatTime=exam=>exam.startTime?(exam.endTime?timeFormatter.formatRange(examStart(exam),examEnd(exam)):timeFormatter.format(examStart(exam)))+' IST':'';

  const displayDate=exam=>[examDateFormatter.format(examDayStart(exam.date)),formatTime(exam)].filter(Boolean).join(' · ');
  const list=el('examList'), clock=el('examClock'), kicker=el('examKicker');
  const title=el('examNextTitle'), date=el('examNextDate'), hint=el('examClockHint');
  let signature='',clockParts=[];
  function update() {
    if(root.hidden)return;
    const plan=getExamPlan(Date.now()), next=plan.today[0]??plan.next;
    const sig=JSON.stringify([plan.today.length,plan.rows]);
    if(signature!==sig){
      signature=sig;
      kicker.textContent=plan.today.length?(next.startTime?'EXAM UNDERWAY':'EXAM TODAY'):next?'NEXT EXAM':'TIMETABLE COMPLETE';
      title.textContent=next?next.label:'All listed exam dates have passed';
      date.textContent=next?displayDate(next):'Your study materials are still available.';
      clock.replaceChildren();
      clockParts=(!plan.today.length&&next)?['days','hrs','min','sec'].map(unit=>{
        const item=document.createElement('div'), value=document.createElement('strong'), label=document.createElement('span');
        label.textContent=unit;item.append(value,label);clock.append(item);return value;
      }):[];
      hint.textContent=plan.today.length?(next.startTime?'':'Start time not listed.'):next&&!next.startTime?'Counts down to the start of exam day (IST).':'';
      list.replaceChildren(...plan.rows.map(exam=>{
        const item=document.createElement('li'), text=document.createElement('div');
        const name=document.createElement('strong'), when=document.createElement('time'), status=document.createElement('span');
        name.textContent=exam.label;when.dateTime=exam.startTime?exam.date+'T'+exam.startTime+':00+05:30':exam.date;
        when.textContent=displayDate(exam);status.textContent=exam.status;
        status.className='examStatus';
        if(['Today','Next','Underway'].includes(exam.status))item.dataset.state=exam.status.toLowerCase();
        else if(exam.status==='Past')item.dataset.state='past';
        text.append(name,when);item.append(text,status);return item;
      }));
    }
    examClockValues(plan.seconds).forEach((v,i)=>{
      const output=clockParts[i], label=String(v).padStart(2,'0');
      if(output&&output.textContent!==label)output.textContent=label;
    });
  }
  window.setInterval(update,1000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)update()});
  return {update};
}
