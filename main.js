const Koa = require('koa')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const koaLogger = require('koa-logger')
const Router = require('koa-router')
const router = new Router();
const Query = require('rz-mysql')
const db = require('./utils/db-utils')


// mysql
db && (app.context.db = db)

// load template
app.use(views(path.join(__dirname, '/views'), {
  extension: 'ejs'
}));

// static
app.use(static(__dirname, './assets'))

// logger
app.use(koaLogger())

app
  .use(require('./routers/index').routes())
  .use(router.allowedMethods())



app.listen(3000, () => console.log('Server run 3000'))