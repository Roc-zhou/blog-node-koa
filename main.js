const Koa = require('koa')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const Router = require('koa-router')
const router = new Router();
const Query = require('rz-mysql')
const db = new Query(require('./config/index').dbConfig) 

// mysql
db && (app.context.db = db)

// load template
app.use(views(path.join(__dirname, '/views'), {
  extension: 'ejs'
}));
// static
app.use(static(
  path.join(__dirname, './assets')
))

app
  .use(require('./routers/index').routes())
  .use(router.allowedMethods())



app.listen(3000, () => console.log('Server run 3000'))