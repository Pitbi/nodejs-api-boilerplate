const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  created: { type: Date, default: Date.now },
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, lowercase: true },
  active: { type: Boolean, default: true },
  validated: { type: Boolean, default: false }
})

module.exports = userSchema