const UserController = require('../Controller')
const Validator = require('./Validator')

class CreateUserController extends UserController {
  constructor(req, res, next, options) {
    super(...arguments)
    this.Validator = Validator
  }

  async work() {
    
  }
}

module.exports = CreateUserController