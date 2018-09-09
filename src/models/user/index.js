const mongoose = require('mongoose')
const userSchema = require('./schemas/user')
const UserClass = require('./User')

userSchema.loadClass(UserClass)

const User = mongoose.model('User', userSchema)

module.exports = User