import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const assets:Record<string,string>={},assetAliases:Record<string,string>={};
for(const name of ['index.html','style.css','data.js','m4-data.js','compiler-content.js','compiler-lectures.js','compiler.js','schema.js','recall-model.js','quiz-schema.js','cards.js','quiz.js','topic-notes.js','m4-notes.js','player.js','exams.js','recall-ui.js','app.js'])assets['/'+name]=await readFile((name.endsWith('.js')?'.build/src/':'src/')+name,'utf8');
// New documents select the exact scripts and CSS for this build across a rolling deploy.
assets['/index.html']=assets['/index.html'].replace(/((?:src|href)=")(\/(?:[-a-z0-9]+\.js|style\.css))(")/g,(match,open,url,close)=>{
 if(!(url in assets))return match;
 const digest=createHash('sha256').update(assets[url]).digest('hex').slice(0,12);
 const versioned=url.replace(/\.(js|css)$/,'-' + digest + '.$1');
 assetAliases[versioned]=url;
 return open+versioned+close;
});
await mkdir('dist',{recursive:true});
for(const [path,body] of Object.entries(assets))await writeFile('dist'+path,body);
await mkdir('dist/server',{recursive:true});
await mkdir('dist/.openai',{recursive:true});
await writeFile('dist/server/index.js',['const assets='+JSON.stringify(assets)+';const assetAliases='+JSON.stringify(assetAliases)+';',assets['/data.js'],assets['/m4-data.js'],assets['/compiler-content.js'],assets['/compiler-lectures.js'],assets['/compiler.js'],assets['/schema.js'],assets['/recall-model.js'],assets['/quiz-schema.js'],await readFile('.build/worker.mjs','utf8')].join('\n'));
await copyFile('.openai/hosting.json','dist/.openai/hosting.json');
