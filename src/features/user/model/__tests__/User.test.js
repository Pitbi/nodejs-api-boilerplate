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
})