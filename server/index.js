require('./ignore.js')();

import Koa from 'koa';
const app = new Koa();
const port = process.env.port || 3001;

app.use( async ( ctx ) => {
  ctx.body = 'hello 131231'
})

app.listen(port);
console.log(`[demo] start-quick is starting at ${port}`);
