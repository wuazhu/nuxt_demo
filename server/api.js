const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router({
  prefix: '/api/users'
})

const users = [
  {
    name: 'tom',
    id: 1
  },
  {
    name: 'wuazhu',
    id: 2
  }
]

router.get('/:userId', ctx => {
  console.log(ctx)
  const user = users.find(u => u.id == Number(ctx.params.userId))
  console.log(user)
  if (user) {
    ctx.body = {
      code: 1,
      user
    }
  } else {
    ctx.body = {
      code: 0
    }
  }
})

app.use(router.routes())
app.listen(3001)
console.log(`api running at http://localhost:3001`)