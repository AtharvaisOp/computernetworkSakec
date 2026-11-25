"use strict";
// Confirmed exam windows in IST (24-hour format).
const examSchedule = [
    { code: 'C.D.', label: 'C.D.', date: '2026-11-28', startTime: '14:00', endTime: '16:00' },
    { code: 'C.N.', label: 'Computer Networks', date: '2026-11-30', startTime: '14:00', endTime: '16:00' },
    { code: 'M.A.D.', label: 'M.A.D.', date: '2026-12-05', startTime: '09:00', endTime: '11:00' },
    { code: 'B.I.', label: 'B.I.', date: '2026-12-08', startTime: '11:30', endTime: '13:30' },
    { code: 'N.L.P.', label: 'N.L.P.', date: '2026-12-10', startTime: '14:00', endTime: '16:00' },
    { code: 'M.L.', label: 'M.L.', date: '2026-12-12', startTime: '09:00', endTime: '11:00' }
];
const examDayMs = 86400000;
const examDateFormatter = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata', weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
});
function examDayStart(date) {
    return Date.parse(date + 'T00:00:00+05:30');
}
function examStart(exam) {
    return exam.startTime ? Date.parse(exam.date + 'T' + exam.startTime + ':00+05:30') : examDayStart(exam.date);
}
function examEnd(exam) {
    return exam.endTime ? Date.parse(exam.date + 'T' + exam.endTime + ':00+05:30') : examDayStart(exam.date) + examDayMs;
}
function getExamPlan(now, schedule = examSchedule) {
    const today = schedule.filter(exam => now >= examStart(exam) && now < examEnd(exam));
    const next = schedule.find(exam => now < examStart(exam)) ?? null;
    const seconds = next ? Math.max(0, Math.ceil((examStart(next) - now) / 1000)) : 0;
    return { today, next, seconds, rows: schedule.map(exam => {
            const remainingDays = Math.ceil((examStart(exam) - now) / examDayMs);
            return { ...exam, status: now >= examEnd(exam) ? 'Past' : now >= examStart(exam) ? (exam.startTime ? 'Underway' : 'Today') : exam === next ? 'Next' : remainingDays + ' ' + (remainingDays === 1 ? 'day' : 'days') };
        }) };
}
function examClockValues(seconds) {
    return [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
}
function deadlineSubjectKey(exam) {
    return exam.code.toLowerCase().replace(/[^a-z]/g, '');
}
function examFocus(plan, code, now) {
    const exam = code ? plan.rows.find(row => row.code === code) : (plan.today[0] ?? plan.next);
    if (!exam)
        return { exam: null, status: 'complete', seconds: 0 };
    if (now < examStart(exam))
        return { exam, status: 'upcoming', seconds: Math.ceil((examStart(exam) - now) / 1000) };
    if (now < examEnd(exam))
        return { exam, status: exam.startTime ? 'underway' : 'today', seconds: 0 };
    return { exam, status: 'past', seconds: 0 };
}
const reminderMinutes = [1440, 120, 60];
const reminderFormatter = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
});
function examReminderPrompt(exam, minutes, now) {
    if (!exam?.startTime || !reminderMinutes.includes(minutes))
        return '';
    const start = examStart(exam), remindAt = start - minutes * 60000;
    if (!Number.isFinite(start) || remindAt <= now)
        return '';
    const format = (time) => reminderFormatter.format(time) + ' IST (Asia/Kolkata)';
    return 'Create a one-time reminder for ' + format(remindAt) + ' that my ' + exam.label +
        ' exam starts on ' + format(start) + '. Please confirm the scheduled date, time, and time zone.';
}
function mountExamReminders(root) {
    const el = (id) => mustQuery('#' + id, root);
    const details = el('examReminders'), subject = el('reminderExam'), lead = el('reminderLead'), prompt = el('reminderPrompt');
    const copy = el('copyReminder'), status = el('reminderStatus'), preview = el('reminderPreview');
    let listKey = '', lastPrompt = '';
    function update(preferred) {
        if (!details.open)
            return;
        const now = Date.now(), upcoming = examSchedule.filter(exam => reminderMinutes.some(minutes => examReminderPrompt(exam, minutes, now)));
        const key = upcoming.map(exam => exam.code).join('|');
        if (listKey !== key) {
            const previous = subject.value;
            subject.replaceChildren(...upcoming.map(exam => new Option(exam.label, exam.code)));
            subject.value = upcoming.some(exam => exam.code === previous) ? previous : (upcoming[0]?.code ?? '');
            listKey = key;
        }
        if (preferred && upcoming.some(exam => exam.code === preferred))
            subject.value = preferred;
        subject.disabled = lead.disabled = !upcoming.length;
        const exam = upcoming.find(item => item.code === subject.value);
        for (const option of lead.options)
            option.disabled = Boolean(exam) && !examReminderPrompt(exam, Number(option.value), now);
        if (exam && lead.selectedOptions[0]?.disabled)
            lead.value = [...lead.options].find(option => !option.disabled)?.value ?? lead.value;
        const value = examReminderPrompt(exam, Number(lead.value), now);
        if (prompt.value !== value)
            prompt.value = value;
        preview.hidden = !value;
        if (!value || value !== lastPrompt)
            status.textContent = upcoming.length ? '' : 'No reminder times remain for the listed exams.';
        lastPrompt = value;
    }
    details.addEventListener('toggle', () => update());
    subject.onchange = lead.onchange = () => update();
    copy.onclick = async () => {
        update();
        if (!prompt.value)
            return;
        try {
            await navigator.clipboard.writeText(prompt.value);
            status.textContent = 'Copied. Paste it into your ChatGPT chat to set the reminder.';
        }
        catch {
            prompt.focus();
            prompt.select();
            status.textContent = 'Select and copy the prompt manually.';
        }
    };
    return update;
}
function mountExamPlanner(root, getSelection = () => '', onSelect = () => { }) {
    const el = (id) => mustQuery('#' + id, root);
    const timeFormatter = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true });
    const formatTime = (exam) => exam.startTime ? (exam.endTime ? timeFormatter.formatRange(examStart(exam), examEnd(exam)) : timeFormatter.format(examStart(exam))) + ' IST' : '';
    const displayDate = (exam) => [examDateFormatter.format(examDayStart(exam.date)), formatTime(exam)].filter(Boolean).join(' · ');
    const list = el('examList'), clock = el('examClock'), kicker = el('examKicker');
    const title = el('examNextTitle'), date = el('examNextDate'), hint = el('examClockHint');
    const updateReminders = mountExamReminders(root);
    const cta = mustQuery('[data-open-study]', root), defaultButton = el('defaultDeadline');
    defaultButton.onclick = () => onSelect('');
    list.onclick = e => {
        const button = eventElement(e)?.closest('button[data-deadline]');
        if (!button)
            return;
        const code = button.dataset.deadline;
        if (!code)
            return;
        onSelect(code);
        updateReminders(code);
        [...list.querySelectorAll('button[data-deadline]')].find(el => el.dataset.deadline === code)?.focus({ preventScroll: true });
    };
    let signature = '', clockParts = [];
    function update() {
        if (root.hidden)
            return;
        const now = Date.now(), plan = getExamPlan(now), selected = getSelection();
        updateReminders();
        const { exam: next, status, seconds } = examFocus(plan, selected, now);
        const sig = JSON.stringify([selected, next?.code, status, plan.rows]);
        if (signature !== sig) {
            signature = sig;
            kicker.textContent = ({ underway: 'EXAM UNDERWAY', today: 'EXAM TODAY', past: 'EXAM COMPLETE', complete: 'TIMETABLE COMPLETE', upcoming: selected ? 'SELECTED EXAM' : 'NEXT EXAM' })[status];
            title.textContent = next ? next.label : 'All listed exam dates have passed';
            date.textContent = next ? displayDate(next) : 'Your study materials are still available.';
            clock.replaceChildren();
            clockParts = status === 'upcoming' ? ['days', 'hrs', 'min', 'sec'].map(unit => {
                const item = document.createElement('div'), value = document.createElement('strong'), label = document.createElement('span');
                label.textContent = unit;
                item.append(value, label);
                clock.append(item);
                return value;
            }) : [];
            hint.textContent = status === 'today' ? 'Start time not listed.' : status === 'upcoming' && !next?.startTime ? 'Counts down to the start of exam day (IST).' : '';
            defaultButton.setAttribute('aria-pressed', String(!selected));
            cta.hidden = !next;
            if (next) {
                cta.dataset.subject = deadlineSubjectKey(next);
                cta.textContent = cta.dataset.subject === 'cn' ? 'Open CN study materials' : 'View ' + next.label + ' study page';
            }
            list.replaceChildren(...plan.rows.map(exam => {
                const item = document.createElement('li'), choice = document.createElement('button'), text = document.createElement('span');
                const name = document.createElement('strong'), when = document.createElement('time'), status = document.createElement('span');
                name.textContent = exam.label;
                when.dateTime = exam.startTime ? exam.date + 'T' + exam.startTime + ':00+05:30' : exam.date;
                when.textContent = displayDate(exam);
                status.textContent = exam.status;
                status.className = 'examStatus';
                if (['Today', 'Next', 'Underway'].includes(exam.status))
                    item.dataset.state = exam.status.toLowerCase();
                else if (exam.status === 'Past')
                    item.dataset.state = 'past';
                choice.type = 'button';
                choice.className = 'examChoice';
                choice.dataset.deadline = exam.code;
                choice.setAttribute('aria-pressed', String(next?.code === exam.code));
                text.append(name, when);
                choice.append(text, status);
                item.append(choice);
                return item;
            }));
        }
        examClockValues(seconds).forEach((v, i) => {
            const output = clockParts[i], label = String(v).padStart(2, '0');
            if (output && output.textContent !== label)
                output.textContent = label;
        });
    }
    window.setInterval(update, 1000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden)
        update(); });
    return { update };
}
// A separate presentation of the same timetable logic; no independent exam state.
function mountStudyTimer(root, getSelection = () => '') {
    const label = mustQuery('#studyTimerLabel', root), title = mustQuery('#studyTimerTitle', root);
    const clock = mustQuery('#studyTimerClock', root), digits = Array.from(clock.querySelectorAll('b'));
    let snapshot = '';
    function update() {
        if (root.hidden)
            return;
        const now = Date.now(), plan = getExamPlan(now), selected = getSelection();
        const { exam, status, seconds } = examFocus(plan, selected, now);
        const text = ({ underway: 'Exam underway', today: 'Exam today', past: 'Exam complete', complete: 'Timetable complete', upcoming: selected ? 'Selected exam' : 'Next exam' })[status];
        const name = exam?.label ?? 'No upcoming exams';
        const state = text + '|' + name;
        if (snapshot !== state) {
            snapshot = state;
            label.textContent = text;
            title.textContent = name;
            clock.hidden = status !== 'upcoming';
        }
        if (!clock.hidden)
            examClockValues(seconds).forEach((v, i) => {
                const value = String(v).padStart(2, '0');
                if (digits[i].textContent !== value)
                    digits[i].textContent = value;
            });
    }
    window.setInterval(update, 1000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden)
        update(); });
    return { update };
}
