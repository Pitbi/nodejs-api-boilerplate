const UserController = require('../Controller')
const Validator = require('./Validator')
const User = require('../../model')

class CreateUserController extends UserController {
  constructor() {
    super(...arguments)
    this.Validator = Validator
  }

  async work() {
    const user = await User.register(this.req.body)
    this.response.user = this.formatUser(user)
    this.respond()
  }
}

module.exports = CreateUserController