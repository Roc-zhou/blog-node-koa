const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {

  const data = await ctx.db.select('user', ['name', 'password'])
  console.log(data);

  await ctx.render('home', {
    title: 'Roc-zhou Blog'
  })
})

// router.use(user.routes(), user.allowedMethods());


module.exports = router