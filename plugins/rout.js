export default (ctx) => {
  // console.log(ctx)
  ctx.app.router.beforeEach((to, from, next) => {
    next()
  })
}
