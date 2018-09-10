const UserWorker = require('./Worker')

class RegisterUserWorker extends UserWorker {
  constructor(user, attributes, options) {
    super(...arguments)
  }

  async work() {
    this.user.set(this.attributes)
    await this.saveUser()
  }
}

module.exports = RegisterUserWorker