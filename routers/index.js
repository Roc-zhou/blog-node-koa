const Router = require('koa-router')
const router = new Router()
const { formatDate } = require('rz-methods').default

router.get('/', async (ctx, next) => {

  const data = await ctx.db.select('user', ['name', 'slot_code', 'password'])
  console.log(data);
  // 新增用户
  /* const result = await ctx.db.insertData('user', {
    name: '张三',
    slot_code: 'hrDRSSw3',
    password: 'e541712884db325657f383244c2aca54',
    create_time: formatDate(new Date())
  })
  console.log(result); */

  await ctx.render('home', {
    title: 'Blog'
  })
})

// router.use(user.routes(), user.allowedMethods());


module.exports = router