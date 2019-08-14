import Koa from 'koa';
import logger from 'koa-logger';
import router from './routes';
const views = require('koa-views');
const path = require('path');
const koaStatic = require('koa-static');
const staticCache = require('koa-static-cache');

const app = new Koa();

const port = process.env.port || 3001;

app.use(logger());

app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs',
}));

const staticPath = './../build/static';

app.use(koaStatic(
  path.join(__dirname,  staticPath)
))

// app.use(koaStatic(__dirname + '../build'));
app.use(staticCache (path.resolve(__dirname,'../build'),{
  maxAge: 365 * 24 * 60 * 60,
  gzip:true
}));

// routes
app.use(router.routes(), router.allowedMethods());

console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
app.listen(port);


