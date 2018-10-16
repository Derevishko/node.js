const koa = require('koa');
const app = new koa();
let map = new Map();

map.set('/',async function(){
  return `Hello Koa!!!`
})

map.set('/favicon.ico',async function(){
  return `no image`
})
map.set('undefined', async function(){
  return `error 404 not found`
})

app.use( async function(ctx, next) {
  let url = ctx.request.url;
  (map.has(url) ?  map.get(url)() : map.get('undefined')()).then((message)=>{ctx.body = message});
});

app.listen(3000)
