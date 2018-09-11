const Worker = require('../../../../core/Worker')

class UserWorker extends Worker {
  constructor(user, attributes, options) {
    super()
    this.user = user
    this.attributes = attributes
    this.options = options
  }

  async saveUser() {
    this.user.save()
  }

  async sendEmail(options = {}) {
    options.to = this.user.email
    /*TODO*/
    await super.sendEmail()
  }
}

module.exports = UserWorker