// import router from 'koa-router';
const Router = require('koa-router');
import render from '../render/index.js';
console.log('render', render);
const route = new Router().get('*', render);
// const route = new Router().get('*', async (ctx, next) => {
//   let title = 'hello! ejs';
//   let arr = ['111', '222', '333'];
//   await ctx.render('index', {
//     title,
//     arr,
//   })
// });

export default route;
