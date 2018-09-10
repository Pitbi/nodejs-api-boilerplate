const {
  expectIsNotValidAndErrors,
  expectIsValid
} = require('../../../../../../test-support/helpers/validators')

const Validator = require('../Validator')

const email = 'email@mail.com'
const password = '123456'
const mainError = 'error_user_creation_payload_validation'

describe('Auth validator', () => {
  it('Not valid: empty payload', async () => {
    const validator = new Validator({
      body: {} 
    })
    await validator.run()
    expectIsNotValidAndErrors(validator, {
      mainError,
      errors: {
        firstName: ['error_user_creation_first_name_missing'],
        lastName: ['error_user_creation_last_name_missing'],
        email: ['error_user_creation_email_missing'],
        password: ['error_user_creation_password_missing']
      }
    })
  })
  it('Not valid: invalid attribtues values', async () => {
    const validator = new Validator({
      body: {
        firstName: 'x',
        lastName: 'y',
        email: 'wrong',
        password: 'az'
      } 
    })
    await validator.run()
    console.log(validator.errors)
    expectIsNotValidAndErrors(validator, {
      mainError,
      errors: {
        firstName: ['error_user_creation_first_name_invalid'],
        lastName: ['error_user_creation_last_name_invalid'],
        email: ['error_user_creation_email_invalid'],
        password: ['error_user_creation_password_invalid']
      }
    })
  })
})
