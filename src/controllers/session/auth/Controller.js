const Controller = require('../../../core/Controller')
const Validator = require('./Validator')
const User = require('../../../models/user')

class AuthController extends Controller {
  constructor() {
    super(...arguments)
    this.Validator = Validator
  }

  async work() {
    const { body } = this.req
    const user = await User.findActiveByEmail(body.email)
    if (!user)
      return this.throwError(ERRORS.EMAIL_UNKNOWN)
    const passwordMatch = await user.comparePassword(body.password)
    if (!passwordMatch)
      return this.throwError(ERRORS.PASSWORD_WRONG)
    await this.logIn(user)

    this.response = await this.format(user)

    this.respond()
  }
}

module.exports = AuthController