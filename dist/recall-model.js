"use strict";
const networkRecallIds = Array.from({ length: 100 }, (_, i) => 'cn-m' + (i < 50 ? '3' : '4') + '-' + String(i % 50 + 1).padStart(2, '0'));
const recallIds = {
    cn: new Set(networkRecallIds), cd: new Set(compilerContent.quick.concat(compilerContent.decks.flatMap(d => d.cards)).map(c => c.id))
};
const storedCompilerRecallIds = new Set([...recallIds.cd, retiredCompilerCard]);
function migrateRetiredRecall(data) {
    const key = recallSessionKey('cd'), saved = data[key];
    if (!saved || !isRecallSession(saved, storedCompilerRecallIds))
        return;
    const session = saved;
    const retiredIndex = session.cards.indexOf(retiredCompilerCard);
    if (retiredIndex === -1)
        return;
    const cards = session.cards.filter(id => id !== retiredCompilerCard);
    data[key] = cards.length ? { ...session, cards, index: session.index - Number(retiredIndex < session.index),
        flipped: retiredIndex === session.index ? false : session.flipped } : null;
}
const unlockKey = (subject) => `recall/${subject}/unlockedRecent`;
function validateRecallValue(key, value) {
    const [, subject, kind, id] = key.split('/');
    if (kind === 'unlockedRecent') {
        const ids = new Set(subject === 'cd' ? compilerContent.decks.map(d => d.id) : Array.from({ length: 12 }, (_, i) => 'cn-3-' + (i + 1)).concat(Array.from({ length: 7 }, (_, i) => 'cn-4-' + (i + 1))));
        return Array.isArray(value) && value.length <= 20 && new Set(value).size === value.length && value.every(id => typeof id === 'string' && ids.has(id));
    }
    return kind === 'card' ? (subject === 'cd' ? storedCompilerRecallIds : recallIds.cn).has(id) && isRecallReview(value, id) : kind === 'session' && isRecallSession(value, recallIds[subject]);
}
for (const subject of ['cn', 'cd']) {
    defaults[recallSessionKey(subject)] = null;
    defaults[unlockKey(subject)] = [];
    for (const id of recallIds[subject])
        defaults[recallKey(subject, id)] = null;
}
defaults[recallKey('cd', retiredCompilerCard)] = null;
const conceptNoteKey = (id) => `concept/${id}/note`;
for (const concept of compilerContent.concepts) {
    defaults[conceptKey(concept.id)] = false;
    defaults[conceptNoteKey(concept.id)] = '';
}
// The M3 playlist augments revision notes. Finishing either path preserves deck access.
const hasRevisionPrerequisites = (mod) => mod.subjectId === 'cd' && (mod.revisionOnly || mod.id === 'cd-m3');
function revisionPrerequisiteMet(mod, id, record) {
    if (record[conceptKey(id)] === true)
        return true;
    const matches = mod.lectures.filter(l => !l.workedExample && l.conceptIds?.includes(id));
    return matches.length > 0 && matches.every(l => record[key(l, 'done')] === true);
}
function deckRequirements(subject, deck, record) {
    const module = (subject === 'cn' ? 'm' + deck.module : 'cd-m' + deck.module), mod = studyModules[module];
    if (subject === 'cd' && hasRevisionPrerequisites(mod)) {
        return deck.requires.flatMap(id => {
            const topic = compilerContent.concepts.find(c => c.id === id);
            return topic ? [{ label: topic.title, module, ref: topic.id, done: revisionPrerequisiteMet(mod, topic.id, record) }] : [];
        });
    }
    return mod.lectures.filter(l => deck.requires.includes(l.uid) || (!l.workedExample && [...l.topicIds, ...(l.conceptIds ?? [])].some(id => deck.requires.includes(id))))
        .map(l => ({ label: l.title, module, ref: l.uid, done: record[key(l, 'done')] === true }));
}
const requirementsMet = (items) => items.length > 0 && items.every(x => x.done);
// Keep the original keys so existing backups, note completion, and deck eligibility are preserved.
function revisionReadPatch(id, record) {
    const c = compilerContent.concepts.find(concept => concept.id === id), key = conceptKey(id);
    if (!c || !hasRevisionPrerequisites(studyModules[('cd-m' + c.module)]) || record[key])
        return;
    const delta = {};
    delta[key] = true;
    return delta;
}
