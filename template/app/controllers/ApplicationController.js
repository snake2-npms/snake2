const { SnakeController } = require('snake2-core')
class ApplicationController extends SnakeController {
  constructor () {
    super(...arguments)
    // this.use(this.authorize)
  }

  async authorize (ctx, next) {
    await next()
  }
}
module.exports = ApplicationController