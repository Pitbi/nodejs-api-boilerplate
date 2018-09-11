const Controller = require('../../../core/Controller')

class UserController extends Controller {
  constructor() {
    super(...arguments)
  }

  formatUser(user) {
    if (user.toObject)
      user = user.toObject()
    delete user.password
    return user
  }
}

module.exports = UserController