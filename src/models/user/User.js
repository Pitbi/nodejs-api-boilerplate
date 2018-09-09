const bcrypt = require('bcryptjs')

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

  async comparePassword(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
  }
}

module.exports = UserClass