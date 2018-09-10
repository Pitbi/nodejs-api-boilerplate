const Controller = require('../../../core/Controller')
const Validator = require('./Validator')

class UserController extends Controller {
  constructor() {
    super(...arguments)
    this.Validator = Validator
  }

  formatUser(user) {
    if (user.toObject)
      user = user.toObject()
    delete user.password
    return user
  }
}

module.exports = UserController