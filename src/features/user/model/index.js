const mongoose = require('mongoose')
const userSchema = require('./schemas/user')
const UserClass = require('./User')

userSchema.loadClass(UserClass)

userSchema.pre('save', async function () {
  await this.preSave()
})

const User = mongoose.model('User', userSchema)

module.exports = User