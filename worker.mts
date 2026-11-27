// These names are supplied by the generated build preamble, not the hosting environment.
declare const assets:Readonly<Record<string,string>>;
declare const assetAliases:Readonly<Record<string,string>>;
interface ProgressObject {etag:string;json():Promise<unknown>}
type Match = {etagMatches:string}|{etagDoesNotMatch:'*'};
interface ProgressBucket {
 get(key:string):Promise<ProgressObject|null>;
 put(key:string,value:string,options:{onlyIf:Match}):Promise<{etag:string}|null>;
}
interface Environment {BUCKET?:ProgressBucket}
type BodyResult = {status:400|413;data?:never}|{data:unknown;status?:never};
// Build injects the assets and the same validation used by the dashboard.
const progressByteLimit=1500000;
const pagePolicy=[
 "default-src 'none'",
 "script-src 'self' https://www.youtube.com",
 "style-src 'self' 'unsafe-inline'",
 "img-src 'self' https://i.ytimg.com",
 "connect-src 'self'",
 "frame-src https://www.youtube.com",
 "object-src 'none'",
 "base-uri 'none'",
 "form-action 'none'"
].join('; ');
const safeHeaders={'x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin'};
async function readProgressJSON(request:Request):Promise<BodyResult>{
 const reader=request.body?.getReader();
 if(!reader)return {status:400};
 const decoder=new TextDecoder('utf-8',{fatal:true});
 let bytes=0,text='';
 try{
  while(true){
   const {value,done}=await reader.read();
   if(done)break;
   bytes+=value.byteLength;
   if(bytes>progressByteLimit){
    await reader.cancel().catch(()=>{});
    return {status:413};
   }
   text+=decoder.decode(value,{stream:true});
  }
  return {data:JSON.parse(text+decoder.decode())};
 }catch{
  await reader.cancel().catch(()=>{});
  return {status:400};
 }finally{reader.releaseLock()}
}
export default {async fetch(request:Request,env:Environment):Promise<Response>{
 const url=new URL(request.url);
 const user=request.headers.get('oai-authenticated-user-id')||'';
 if(url.pathname!=='/progress'){
  if(!['GET','HEAD'].includes(request.method))return new Response(null,{status:405,headers:{...safeHeaders,allow:'GET, HEAD'}});
  const path=url.pathname==='/'?'/index.html':(assetAliases[url.pathname]??url.pathname);
  if(!Object.hasOwn(assets,path))return new Response('Page not found',{status:404,headers:safeHeaders});
  const type=path.endsWith('.js')?'text/javascript':path.endsWith('.css')?'text/css':'text/html';
  if(path==='/index.html'){
   const html=assets[path].replace('name="notebook-account" content=""','name="notebook-account" content="'+encodeURIComponent(user)+'"');
   return new Response(request.method==='HEAD'?null:html,{headers:{...safeHeaders,'content-type':'text/html; charset=utf-8','cache-control':'private, no-store','content-security-policy':pagePolicy}});
  }
  return new Response(request.method==='HEAD'?null:assets[path],{headers:{...safeHeaders,'content-type':type+'; charset=utf-8','cache-control':'no-cache'}})
 }
 const reply=(value:unknown,status=200)=>Response.json(value,{status,headers:{...safeHeaders,'cache-control':'private, no-store'}});

 if(!user)return reply({error:'Sign-in required'},401);
 if(request.headers.get('X-Notebook-Account')!==encodeURIComponent(user))return reply({error:'Account changed'},409);
 if(!env.BUCKET)return reply({error:'Storage unavailable'},503);
 const objectKey='progress/v1/'+encodeURIComponent(user);
 try{
  if(request.method==='GET'){const obj=await env.BUCKET.get(objectKey);return reply(migrate(obj?await obj.json():{}))}
  if(request.method!=='PATCH')return reply({},405);
  if(request.headers.get('origin')!==url.origin)return reply({},403);
  if(request.headers.get('content-type')?.split(';',1)[0].trim().toLowerCase()!=='application/json')return reply({},415);
  const suppliedLength=request.headers.get('content-length');
  if(suppliedLength&&Number(suppliedLength)>progressByteLimit)return reply({},413);
  const body=await readProgressJSON(request);
  if(body.status)return reply({},body.status);
  const delta=migrate(body.data);
  if(!valid(delta,true))return reply({},400);
  for(const [key,value] of Object.entries(delta))if(key.startsWith('recall/')&&key.includes('/card/')&&value&&typeof value==='object'&&'userId' in value)
   value.userId=encodeURIComponent(user);
  for(let i=0;i<5;i++){
   const obj=await env.BUCKET.get(objectKey);
   const prior=migrate(obj?await obj.json():{});
   const source=prior as Record<string,unknown>|null;
   const merged=request.headers.get('X-Import-Guest')==='1'?{...delta,...source}:{...source,...delta};
   const saved=await env.BUCKET.put(objectKey,JSON.stringify(merged),{onlyIf:obj?{etagMatches:obj.etag}:{etagDoesNotMatch:'*'}});
   if(saved)return reply(merged)
  }return reply({},409)
 }catch{return reply({error:'Storage unavailable'},503)}
}}
