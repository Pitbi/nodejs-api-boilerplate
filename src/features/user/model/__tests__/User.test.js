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
  it('Schema validations: required fiels', async () => {
    const user = new User({})
    let error
    try {
      await user.validate()
    } catch (err) {
      error = err
    }
    expect(error.errors).toBeDefined()
    expect(error.errors.firstName.message === 'UserSchema - firstName is required')
    expect(error.errors.lastName.message === 'UserSchema - lastName is required')
    expect(error.errors.email.message === 'UserSchema - email is required')
    expect(error.errors.password.message === 'UserSchema - password is required')
  })
})