const User = require('../User')

describe('User model', () => {
  it('Virtuals', async () => {
    const user = new User({
      firstName: 'pit',
      lastName: 'bi'
    })
    expect(user.fullName).toBe('pit bi')
    expect(user.label).toBe('pit bi')
    expect(user.shortFullName).toBe('P. bi')
    expect(user.initials).toBe('PB')
  })
  it('Schema validations: required fields', async () => {
    const user = new User({})
    let error
    try {
      await user.validate()
    } catch (err) {
      error = err
    }
    expect(error.errors).toBeDefined()
    expect(error.errors.firstName.message).toBe('user_validation_firstName_required')
    expect(error.errors.lastName.message).toBe('user_validation_lastName_required')
    expect(error.errors.email.message).toBe('user_validation_email_required')
    expect(error.errors.password.message).toBe('user_validation_password_required')
  })
  it('Schema validations: invalid data', async () => {
    const user = new User({
      email: 'wrong',
      firstName: 'A',
      lastName: 'B',
      password: '123'
    })
    let error
    try {
      await user.validate()
    } catch (err) {
      error = err
    }
    expect(error.errors).toBeDefined()
    expect(error.errors.firstName.message).toBe('user_validation_firstName_invalid')
    expect(error.errors.lastName.message).toBe('user_validation_lastName_invalid')
    expect(error.errors.email.message).toBe('user_validation_email_invalid')
    expect(error.errors.password.message).toBe('user_validation_password_invalid')
  })
})