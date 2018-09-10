const bcrypt = require('bcryptjs')
const SALT_WORK_FACTOR = 10

class UserClass {
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  get label() {
    return `${this.firstName} ${this.lastName}`
  }

  get shortFullName() {
    return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
  }

  get initials() {
    return `${this.firstName[0].toUpperCase()}${this.lastName[0].toUpperCase()}`
  }

  static async findActiveByEmail(email) {
    return await this.findOne({
      email,
      active: true
    })
  }

  async preSave() {
    if (this.isModified('password'))
      await this.setPassword()
  }

  async setPassword(password = this.password) {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
    const hash = await bcrypt.hash(password, salt)
    this.password = hash
  }

  async comparePassword(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
  }
}

module.exports = UserClass