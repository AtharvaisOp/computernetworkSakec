"use strict";
const compilerModules = ['cd-m1', 'cd-m2', 'cd-m3', 'cd-m4'];
const compilerDefinitions = [
    ['Compiler Basics and Top Down Parsing', 10, ['System software', 'Compiler phases', 'Lexical analysis and finite automata', 'Tokens, LEX/FLEX and symbol tables', 'Top-down parsing and LL(1)']],
    ['Bottom Up Parsing', 22, ['Handles, handle pruning and operator precedence', 'Shift-reduce and LR parsing tables']],
    ['Intermediate Code Generation', 8, ['Semantic analysis, SDDs and attributes', 'Evaluation order, S-attributed and L-attributed definitions', 'Intermediate code representations']],
    ['Code Generation', 20, ['Optimization techniques', 'Basic blocks and flow graphs', 'Liveness analysis', 'Code generator design and algorithms']],
];
const compilerSectionLayout = {
    'cd-m2': [['Handles and shift-reduce parsing', [1, 2, 3]], ['Operator precedence', [4, 5, 6]], ['LR families and parsing tables', [7, 8, 9, 10, 11]]],
    'cd-m4': [['Code optimization', [1, 2, 3, 4, 5]], ['Control flow and liveness', [6, 7]], ['Generating target code', [8, 9]]],
};
const compilerModuleData = Object.fromEntries(compilerModules.map((id, index) => {
    const [name, marks, topics] = compilerDefinitions[index], number = index + 1;
    const sections = (compilerSectionLayout[id] ?? []).map(([name, order]) => ({ name, rows: order.flatMap(n => {
            const row = compilerRows.find(r => r.id === id + '-l' + String(n).padStart(2, '0'));
            if (!row)
                return [];
            const seconds = row.durationSeconds;
            return [{ n, title: row.title, sy: row.syllabusRef, educator: row.educator, id: row.videoId, uid: row.id,
                    topicIds: [row.syllabusRef], conceptIds: row.conceptIds, time: seconds === null ? null : Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0'),
                    videoTitle: row.title, durationSeconds: seconds, verificationStatus: row.playback.watch === 'verified' && row.playback.embed === 'verified' ? 'verified' : 'playback-unverified', verificationDate: row.verificationDate }];
        }) }));
    const value = { id, name, marks, weight: (100 * marks / 60).toFixed(2) + '%', sections, topics: [...topics], practice: [],
        practiceLabel: 'Concept checklist', masteryLabel: 'concepts', stages: ['Not started', 'Mastered'], lectures: [], subjectId: 'cd', number,
        revisionOnly: number === 1 || number === 3 };
    return [id, value];
}));
const revisionConcepts = (mod) => mod.subjectId === 'cd' ? compilerContent.concepts.filter(c => c.module === mod.number) : [];
const conceptKey = (id) => `concept/${id}/done`;
const recallKey = (subject, id) => `recall/${subject}/card/${id}`;
const recallSessionKey = (subject) => `recall/${subject}/session`;
const validTimestamp = (v) => typeof v === 'number' && Number.isSafeInteger(v) && v >= 0 && v <= 8640000000000000;
const recallRatings = ['Again', 'Hard', 'Good', 'Easy'];
function scheduleRecall(old, rating, now, userId, cardId) {
    const day = 86400000, previous = old ? Math.max(1, (old.nextReview - old.lastReviewed) / day) : 0;
    const interval = rating === 'Again' ? 600000 : rating === 'Hard' ? day * Math.min(60, Math.max(1, previous * 1.2)) : rating === 'Good' ? day * Math.min(180, Math.max(2, previous * 2)) : day * Math.min(365, Math.max(4, previous * 2.8));
    return { userId, cardId, rating, reviewCount: Math.min(1000000, (old?.reviewCount ?? 0) + 1), lastReviewed: now, nextReview: Math.round(now + interval), mastery: rating === 'Again' ? 'learning' : interval >= day * 14 ? 'mastered' : 'reviewing' };
}
function isRecallReview(value, cardId) {
    if (value === null)
        return true;
    if (!value || typeof value !== 'object' || Array.isArray(value))
        return false;
    const v = value;
    return Object.keys(v).length === 7 && v.cardId === cardId && typeof v.userId === 'string' && v.userId.length <= 256 &&
        recallRatings.includes(v.rating) && typeof v.reviewCount === 'number' && Number.isSafeInteger(v.reviewCount) && v.reviewCount > 0 && v.reviewCount <= 1000000 &&
        validTimestamp(v.lastReviewed) && validTimestamp(v.nextReview) && v.nextReview >= v.lastReviewed &&
        ['learning', 'reviewing', 'mastered'].includes(v.mastery ?? '');
}
function isRecallSession(value, ids) {
    if (value === null)
        return true;
    if (!value || typeof value !== 'object' || Array.isArray(value))
        return false;
    const s = value;
    return Object.keys(s).length === 4 && typeof s.title === 'string' && s.title.length <= 120 && typeof s.flipped === 'boolean' &&
        Array.isArray(s.cards) && s.cards.length > 0 && s.cards.length <= 160 && new Set(s.cards).size === s.cards.length && s.cards.every(id => typeof id === 'string' && ids.has(id)) &&
        typeof s.index === 'number' && Number.isSafeInteger(s.index) && s.index >= 0 && s.index <= s.cards.length;
}
