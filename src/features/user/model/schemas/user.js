const mongoose = require('mongoose')
const { schemaRegexpValidation } = require('../../../../helpers/models')
const REGEXP = require('../../../../constants/REGEXP')

const userSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  firstName: {
    type: String,
    trim: true,
    required: [true, 'UserSchema - firstName is required'],
    validate: {
      validator: schemaRegexpValidation.bind(null, REGEXP.validations.userName, 'UserSchema - firstName is invalid')
    }
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'UserSchema - lastName is required']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'UserSchema - email is required'],
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'UserSchema - password is required']
  },
  active: {
    type: Boolean,
    default: true
  },
  validated: {
    type: Boolean,
    default: false
  },
  tokens: {
    accountValidation: {
      type: String
    }
  }
})

module.exports = userSchema