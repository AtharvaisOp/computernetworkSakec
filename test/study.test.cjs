const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const scripts = ['data.js', 'm4-data.js', 'schema.js', 'quiz-schema.js', 'cards.js'];
const study = vm.createContext({});
for (const name of scripts) {
  vm.runInContext(readFileSync(path.join(root, 'src', name), 'utf8'), study, {filename: name});
}
const read = expression => vm.runInContext(expression, study);

test('Module 3 has 28 ordered lectures in seven sections with stable, unique identifiers', () => {
  assert.equal(read('sections.length'), 7);
  assert.deepEqual(Array.from(read('lectures.map(l => l.n)')), Array.from({length: 28}, (_, i) => i + 1));
  assert.equal(read('new Set(lectures.map(l => l.uid)).size'), 28);
  assert.ok(read('lectures.every(l => /^[A-Za-z0-9_-]{11}$/.test(l.id))'));
  assert.equal(read('lectures.find(l => l.uid === "m3-l19").id'), '6gx9cmqJZ_g');
});

test('legacy IPv6 progress follows lecture 19 when its video changes', () => {
  const migrated = read(`(() => {
    const lecture = lectures.find(l => l.uid === 'm3-l19');
    const old = {
      'm3/mCo7Zg_0PP0/done': true,
      'm3/mCo7Zg_0PP0/revision': true,
      'm3/mCo7Zg_0PP0/note': 'Practise expanding the longest zero run',
      speed: 1.5
    };
    const data = migrate(old);
    return [data[key(lecture,'done')], data[key(lecture,'revision')], data[key(lecture,'note')], data.speed];
  })()`);
  assert.deepEqual(Array.from(migrated), [true, true, 'Practise expanding the longest zero run', 1.5]);
});

test('resume prefers the selected unfinished lecture and falls back in syllabus order', () => {
  assert.ok(read(`(() => {
    const items = lectures.slice(0, 3);
    const progress = {[key(items[0], 'done')]: true};
    const last = items[2].uid;
    if (nextLecture(items, progress, last) !== items[2]) return false;
    progress[key(items[2], 'done')] = true;
    if (nextLecture(items, progress, last) !== items[1]) return false;
    progress[key(items[1], 'done')] = true;
    return nextLecture(items, progress, last) == null;
  })()`));
});

test('each quiz bank has 50 distinct, explained questions with three different answers', () => {
  for (const module of ['m3', 'm4']) {
    const cards = read('quizCards').filter(card => card.id.startsWith(module + '-'));
    assert.equal(cards.length, 50);
    assert.equal(new Set(cards.map(card => card.id)).size, 50);
    assert.equal(new Set(cards.map(card => card.question)).size, 50);
    for (const card of cards) {
      assert.equal(card.choices.length, 3);
      assert.equal(new Set(card.choices).size, 3);
      assert.ok(card.explanation && card.ref);
    }
  }
});

test('the built worker serves the dashboard and denies anonymous account storage', async () => {
  const source = readFileSync(path.join(root, 'dist/server/index.js'));
  const {default: worker} = await import('data:text/javascript;base64,' + source.toString('base64'));
  const response = await worker.fetch(new Request('https://notebook.test/'), {});
  assert.equal(response.status, 200);
  assert.match(await response.text(), /id="resume"/);
  const progress = await worker.fetch(new Request('https://notebook.test/progress'), {});
  assert.equal(progress.status, 401);
});

test('each syllabus topic is mapped and the CIDR numerical lecture counts once overall', () => {
  const mappedTopics = Array.from(read('new Set(lectures.flatMap(l => l.topicIds))'));
  const syllabus = Array.from({length: 12}, (_, i) => '3.' + (i + 1));
  assert.deepEqual(mappedTopics.sort(), syllabus.sort());
  assert.deepEqual(Array.from(read('lectures.find(l => l.n === 14).topicIds')).sort(), ['3.4', '3.5']);
  assert.equal(read('lectures.filter(l => l.n === 14).length'), 1);
});

test('migrating a mixed-version backup retains newer progress and unrelated quiz data', () => {
  assert.ok(read(`(() => {
    const lecture = lectures.find(l => l.uid === 'm3-l19');
    const newNote = key(lecture, 'note');
    const data = migrate({
      'm3/mCo7Zg_0PP0/note': 'old',
      [newNote]: 'edited after migration',
      'quiz/card/m4-01': [4, 3, true],
      [pk('Variable Length Subnet Masking (VLSM)')]: 'Practising'
    });
    return valid(data) && data[newNote] === 'edited after migration'
      && data['quiz/card/m4-01'][1] === 3
      && data[pk('Variable Length Subnet Masking (VLSM)')] === 'Practising'
      && JSON.stringify(migrate(data)) === JSON.stringify(data);
  })()`));
});

test('serves the ordinary public page with its scoped browser policy and backup entry', async () => {
 const source=readFileSync(path.join(root,'dist/server/index.js'));
 const {default:worker}=await import('data:text/javascript;base64,'+source.toString('base64'));
 const response=await worker.fetch(new Request('https://notebook.test/'),{});
 assert.equal(response.headers.get('x-content-type-options'),'nosniff');
 assert.equal(response.headers.get('referrer-policy'),'strict-origin-when-cross-origin');
 assert.match(response.headers.get('cache-control'),/private, no-store/);
 const policy=response.headers.get('content-security-policy');
 assert.match(policy,/default-src 'none'/);
 assert.match(policy,/script-src 'self' https:\/\/www\.youtube\.com/);
 assert.match(policy,/object-src 'none'/);
 assert.match(await response.text(),/id="progressBackup"/);
});

test('new quiz writes use the supported shape and ordinary older reads stay compatible',()=>{
 assert.ok(read(`(() => {
  const validRound={index:0,answers:[],cards:[{id:'m3-01',order:'012'}]};
  const olderRound={...validRound,legacyLabel:'previous round'};
  return valid({'quiz/m3/round':validRound},true)&&valid({'quiz/m3/round':olderRound})&&!valid({'quiz/m3/round':olderRound},true);
 })()`));
});
