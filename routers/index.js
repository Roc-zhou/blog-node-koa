const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {

  const val = {
    name: '123'
  }
  const data = await ctx.db.updateData('user', val, 23)
  console.log(data);



  await ctx.render('home', {
    title: 'Roc-zhou Blog'
  })
})

// router.use(user.routes(), user.allowedMethods());


module.exports = router