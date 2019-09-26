const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
  await ctx.render('home', {
    title: 'Roc-zhou Blog'
  })
})

// router.use(user.routes(), user.allowedMethods());


module.exports = router