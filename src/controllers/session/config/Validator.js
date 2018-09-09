const Validator = require('api-request-validator')

const ERRORS = require('./ERRORS')

const validations = {

}

class ConfigControllerValidator extends Validator {
  constructor(req, options = {}) {
    super(validations, PAYLOAD, { 
      mainError: ERRORS.MAIN,
      filter: true
    })
  }
}

module.exports = ConfigControllerValidator