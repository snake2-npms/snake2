let BaseController = require('./BaseController')
class UsersController extends BaseController {
  constructor () {
    super({prefix: '/admin/users'})

    this.get('/', async (ctx, next) => {
      ctx.body = [1, 2, 3]
    })

    this.post('/', async (ctx, next) => {
      ctx.body = ctx.params
    })
  }
}
module.exports = UsersController