const Controller = require('../../../core/Controller')
const Validator = require('./Validator')

class UserController extends Controller {
  constructor() {
    super(...arguments)
    this.Validator = Validator
  }
}

module.exports = UserController