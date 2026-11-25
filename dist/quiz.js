"use strict";
const deckNames = { m3: 'Network Layer', m4: 'Transport Layer' };
const quizTopics = {
    '3.1': 'Packet delivery', '3.2': 'Delivery modes', '3.3': 'Classful IPv4', '3.4': 'CIDR', '3.5': 'Subnet design', '3.6': 'NAT', '3.7': 'IPv6', '3.8': 'Shortest paths', '3.9': 'Link state', '3.10': 'Distance vector', '3.11': 'Network protocols', '3.12': 'Congestion',
    '4.1': 'Transport services', '4.2': 'UDP and TCP', '4.3': 'Connection management', '4.4': 'TCP timers', '4.5': 'DNS', '4.6': 'HTTP and email', '4.7': 'Telnet and FTP'
};
let quizModule = location.hash.endsWith('/m4') ? 'm4' : 'm3';
let playingQuiz = /^#flashcards\/m[34]$/.test(location.hash);
const cardsById = new Map(quizCards.map(c => [c.id, c]));
function shuffled(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
function deckCards(mod) { return quizCards.filter(c => c.id.startsWith(mod + '-')); }
function newRound(cards) {
    return { index: 0, answers: [], cards: cards.map(c => ({ id: c.id, order: shuffled([0, 1, 2]).join('') })) };
}
function gotoQuiz(active) {
    playingQuiz = active;
    history.replaceState(null, '', '#flashcards' + (active ? '/' + quizModule : ''));
    renderQuiz();
}
function quizFeedbackFocus(selector) {
    const el = document.querySelector(selector);
    if (el)
        el.focus({ preventScroll: true });
    const card = document.querySelector('.quizPaper');
    if (card && !matchMedia('(prefers-reduced-motion: reduce)').matches)
        card.animate([{ opacity: .45, transform: 'translateY(5px) rotateX(-2deg)' }, { opacity: 1, transform: 'none' }], { duration: 190, easing: 'ease-out' });
}
function startQuiz(mode) {
    const mod = quizModule;
    const current = state[roundKey(mod)];
    if (current && current.index < current.cards.length && !confirm('Replace the unfinished round? Your answered cards still count toward your performance.'))
        return;
    let pool = deckCards(mod);
    if (mode === 'missed')
        pool = pool.filter(c => state[markKey(c.id)][2]);
    if (!pool.length)
        return;
    const round = newRound(shuffled(pool).slice(0, mode === 'quick' ? 10 : 50));
    changed(patchValue(roundKey(mod), round));
    gotoQuiz(true);
    quizFeedbackFocus('.quizPrompt');
}
function answerQuiz(choice) {
    const r = state[roundKey(quizModule)];
    if (!r || r.index >= r.cards.length || r.answers.length !== r.index || ![0, 1, 2].includes(choice))
        return;
    const id = r.cards[r.index].id, [tries, correct] = state[markKey(id)];
    changed({ ...patchValue(roundKey(quizModule), { ...r, answers: [...r.answers, choice] }), ...patchValue(markKey(id), [tries + 1, correct + Number(choice === 0), choice !== 0]) });
    renderQuiz();
    quizFeedbackFocus('.quizExplanation');
}
function advanceQuiz() {
    const r = state[roundKey(quizModule)];
    if (!r || r.index >= r.answers.length)
        return;
    const next = { ...r, index: r.index + 1 };
    const delta = patchValue(roundKey(quizModule), next);
    if (next.index === next.cards.length)
        delta[trackKey(quizModule)] = [[Date.now(), next.answers.filter(a => a === 0).length, next.cards.length], ...state[trackKey(quizModule)]].slice(0, 20);
    changed(delta);
    renderQuiz();
    quizFeedbackFocus('.quizPrompt');
}
function quizButton(action, label, style = '') { return '<button type="button" data-quiz="' + action + '" class="' + style + '">' + label + '</button>'; }
function homeQuiz() {
    const mod = quizModule, list = deckCards(mod), active = state[roundKey(mod)], recent = state[trackKey(mod)];
    const scores = list.map(c => state[markKey(c.id)]);
    const tries = scores.reduce((v, r) => v + r[0], 0), correct = scores.reduce((v, r) => v + r[1], 0), missed = scores.filter(r => r[2]).length;
    const topicsMap = new Map();
    for (const c of list) {
        const bucket = topicsMap.get(c.topic) || [0, 0], mark = state[markKey(c.id)];
        bucket[0] += mark[0];
        bucket[1] += mark[1];
        topicsMap.set(c.topic, bucket);
    }
    const byTopic = [...topicsMap].filter(([, v]) => v[0]).sort((a, b) => a[1][1] / a[1][0] - b[1][1] / b[1][0]);
    return '<div class="eyebrow"><span class="tick"></span> COMPUTER NETWORKS</div><h1>Flashcards</h1><p class="sub">Make the design call, then check your reasoning against the notes.</p><div class="deckGrid">' + quizModules.map(m => '<button data-quiz="' + m + '" aria-pressed="' + (m === mod) + '" class="deckTile ' + (m === mod ? 'chosen' : '') + '"><span class="deckEyebrow">MODULE 0' + m[1] + '</span><strong>' + deckNames[m] + '</strong><small>50 scenario cards</small><i aria-hidden="true" class="deckGlyph">' + icon(m === 'm3' ? 'road' : 'chart') + '</i></button>').join('') + '</div><article class="quizLaunch"><div><span class="deckEyebrow">PRACTICE ROUND</span><h2>' + deckNames[mod] + '</h2><p>Shuffled questions and choices. Each answer includes a worked explanation.</p></div><div class="quizActions">' + (active && active.index < active.cards.length ? quizButton('resume', 'Resume round · ' + (active.index + 1) + ' of ' + active.cards.length, 'quizPrimary') : '') + quizButton('quick', 'Quick 10', 'quizPrimary') + quizButton('full', 'Full deck · 50') + (missed ? quizButton('missed', 'Retry missed · ' + missed) : '') + '</div></article><div class="panelHead"><h2>Your performance</h2></div><div class="stats">' +
        [['Cards attempted', scores.filter(r => r[0]).length + ' / 50'], ['Answer accuracy', tries ? Math.round(correct / tries * 100) + '%' : '—'], ['Correct answers', correct + ' / ' + tries]].map(([label, value]) => '<div class="stat"><div class="statHead">' + label + '</div><strong>' + value + '</strong></div>').join('') + '</div>' +
        (byTopic.length ? '<div class="block"><h3>Topic accuracy</h3>' + byTopic.map(([topic, [total, right]]) => '<div class="setting"><span>' + topic + ' · ' + esc(quizTopics[topic]) + '</span><strong>' + right + ' / ' + total + '</strong></div>').join('') + '</div>' : '') +
        '<p class="info">' + esc(sync) + '. JSON backups include your quiz results.</p><div class="block"><h3>Recent rounds</h3>' + (recent.length ? recent.map(([timestamp, right, total]) => '<div class="setting"><span>' + esc(new Date(timestamp).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })) + '</span><strong>' + right + ' / ' + total + ' · ' + Math.round(right / total * 100) + '%</strong></div>').join('') : '<p class="info">Finish a round to see its score here.</p>') + '</div>';
}
function roundQuiz(r) {
    if (r.index === r.cards.length) {
        const correct = r.answers.filter(a => a === 0).length;
        const review = r.cards.map((slot, i) => {
            const c = cardsById.get(slot.id), picked = r.answers[i];
            return '<details class="quizReview"><summary>' + (picked === 0 ? 'Correct' : 'Missed') + ' · ' + esc(c.question) + '</summary><p><b>Your choice</b> · ' + esc(c.choices[picked]) + '</p>' + (picked !== 0 ? '<p><b>Correct choice</b> · ' + esc(c.choices[0]) + '</p>' : '') + '<p>' + esc(c.explanation) + '</p><small>Module ' + quizModule[1] + ' notes · ' + esc(c.ref) + '</small></details>';
        }).join('');
        return '<div class="eyebrow">MODULE 0' + quizModule[1] + ' · ' + deckNames[quizModule] + '</div><article class="quizPaper"><p class="deckEyebrow">ROUND COMPLETE</p><h1 class="quizPrompt" tabindex="-1">' + correct + ' / ' + r.cards.length + '</h1><p>' + Math.round(correct / r.cards.length * 100) + '% accuracy this round</p><div class="quizActions">' + quizButton('home', 'View performance', 'quizPrimary') + (correct < r.cards.length ? quizButton('missed', 'Practise missed cards') : '') + '</div></article><div class="block"><h3>Review this round</h3>' + review + '</div>';
    }
    const slot = r.cards[r.index], card = cardsById.get(slot.id), picked = r.answers[r.index], graded = picked !== undefined;
    const buttons = [...slot.order].map((v, i) => {
        const idx = Number(v);
        let result = '';
        if (graded && idx === 0)
            result = 'Correct answer';
        else if (graded && idx === picked)
            result = 'Your answer';
        return '<button class="answerOption ' + (result ? (idx === 0 ? 'right' : 'wrong') : '') + '" data-answer="' + idx + '" ' + (graded ? 'disabled' : '') + '><b>' + String.fromCharCode(65 + i) + '</b><span>' + esc(card.choices[idx]) + '</span>' + (result ? '<small>' + result + '</small>' : '') + '</button>';
    }).join('');
    return '<div class="quizTop">' + quizButton('home', 'Pause & view decks', 'quiet') + '<span>' + deckNames[quizModule] + ' · Module ' + quizModule[1] + '</span></div><article class="quizPaper"><div class="quizCounter"><span class="deckEyebrow">CARD ' + (r.index + 1) + ' OF ' + r.cards.length + '</span><span>' + card.topic + ' · ' + esc(quizTopics[card.topic]) + '</span></div>' + bar(r.answers.length, r.cards.length) + '<h2 class="quizPrompt" tabindex="-1">' + esc(card.question) + '</h2><div class="answerList">' + buttons + '</div>' +
        (graded ? '<section class="quizExplanation" tabindex="-1"><b>' + (picked === 0 ? 'Correct' : 'Review the reasoning') + '</b><p>' + esc(card.explanation) + '</p><small>Module ' + quizModule[1] + ' notes · ' + esc(card.ref) + '</small></section><div class="quizActions">' + quizButton('next', r.index === r.cards.length - 1 ? 'See results' : 'Next card', 'quizPrimary') + '</div>' : '') + '</article>';
}
function renderQuiz() {
    syncStudyTimer();
    const panel = $('panel'), round = state[roundKey(quizModule)];
    const html = playingQuiz && round ? roundQuiz(round) : homeQuiz();
    if (panel.dataset.quizView === html && panel.querySelector('[data-quiz]'))
        return;
    panel.dataset.quizView = html;
    panel.innerHTML = html;
}
document.addEventListener('click', e => {
    const b = eventElement(e)?.closest('button[data-quiz],button[data-answer]');
    if (!b || b.disabled)
        return;
    if (b.hasAttribute('data-answer')) {
        answerQuiz(Number(b.dataset.answer));
        return;
    }
    const action = b.dataset.quiz;
    if (!action)
        return;
    if (quizModules.includes(action)) {
        quizModule = action;
        gotoQuiz(false);
        document.querySelector('[data-quiz="' + action + '"]')?.focus({ preventScroll: true });
    }
    else if (action === 'home' || action === 'resume')
        gotoQuiz(action === 'resume');
    else if (action === 'next')
        advanceQuiz();
    else if (['quick', 'full', 'missed'].includes(action))
        startQuiz(action);
});
