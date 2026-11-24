import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
const assets={};
for(const name of ['index.html','style.css','data.js','schema.js','quiz-schema.js','cards.js','quiz.js','app.js'])assets['/'+name]=await readFile('src/'+name,'utf8');
await mkdir('dist/server',{recursive:true});
await mkdir('dist/.openai',{recursive:true});
await writeFile('dist/server/index.js',['const assets='+JSON.stringify(assets)+';',assets['/data.js'],assets['/schema.js'],assets['/quiz-schema.js'],await readFile('worker.mjs','utf8')].join('\n'));
await copyFile('.openai/hosting.json','dist/.openai/hosting.json');
