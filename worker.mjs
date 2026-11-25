// Build injects the assets and the same validation used by the dashboard.
export default {async fetch(request,env){
 const url=new URL(request.url);
 const user=request.headers.get('oai-authenticated-user-id')||'';
 if(url.pathname!=='/progress'){
  const path=url.pathname==='/'?'/index.html':(assetAliases[url.pathname]??url.pathname);
  if(!Object.hasOwn(assets,path))return new Response('Page not found',{status:404});
  const type=path.endsWith('.js')?'text/javascript':path.endsWith('.css')?'text/css':'text/html';
  if(path==='/index.html'){
   const html=assets[path].replace('name="notebook-account" content=""','name="notebook-account" content="'+encodeURIComponent(user)+'"');
   return new Response(html,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'private, no-store'}});
  }
  return new Response(assets[path],{headers:{'content-type':type+'; charset=utf-8','cache-control':'no-cache','x-content-type-options':'nosniff'}})
 }
 const reply=(value,status=200)=>Response.json(value,{status,headers:{'cache-control':'no-store'}});

 if(!user)return reply({error:'Sign-in required'},401);
 if(request.headers.get('X-Notebook-Account')!==encodeURIComponent(user))return reply({error:'Account changed'},409);
 if(!env.BUCKET)return reply({error:'Storage unavailable'},503);
 const objectKey='progress/v1/'+encodeURIComponent(user);
 try{
  if(request.method==='GET'){const obj=await env.BUCKET.get(objectKey);return reply(migrate(obj?await obj.json():{}))}
  if(request.method!=='PATCH')return reply({},405);
  if(request.headers.get('origin')!==url.origin)return reply({},403);
  const body=await request.text();if(body.length>1500000)return reply({},413);
  let delta;try{delta=migrate(JSON.parse(body))}catch{return reply({},400)}
  if(!valid(delta))return reply({},400);
  for(let i=0;i<5;i++){
   const obj=await env.BUCKET.get(objectKey);
   const prior=migrate(obj?await obj.json():{});
   const merged=request.headers.get('X-Import-Guest')==='1'?{...delta,...prior}:{...prior,...delta};
   const saved=await env.BUCKET.put(objectKey,JSON.stringify(merged),{onlyIf:obj?{etagMatches:obj.etag}:{etagDoesNotMatch:'*'}});
   if(saved)return reply(merged)
  }return reply({},409)
 }catch{return reply({error:'Storage unavailable'},503)}
}}
