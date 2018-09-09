const sinon = require('sinon')

const {
  constructorAttributes
} = require('../../../test-support/helpers/controller')
const {
  mockValidator
} = require('../../../test-support/helpers/validator')

const Controller = require('../Controller')

global.__DEV = true

describe('Core Controller', () => {
  test('worker methods order', async () => {
    const controller = new Controller(...constructorAttributes())
    controller.Validator = mockValidator()
    const preWorkSpy = sinon.spy(controller, 'preWork')
    const workSpy = sinon.spy(controller, 'work')
    const ensureLoginSpy = sinon.spy(controller, 'ensureLogin')
    const validatePayloadSpy = sinon.spy(controller, 'validatePayload')
    const preValidateSpy = sinon.spy(controller, 'preValidate')
    await controller.run()
    sinon.assert.callOrder(preWorkSpy, ensureLoginSpy, validatePayloadSpy, preValidateSpy, workSpy)
    expect(workSpy.callCount).toBe(1)
  })
  test('validator error', async () => {
    const controller = new Controller(...constructorAttributes())
    controller.Validator = mockValidator({ fakeValidaton: true })
    await controller.run()
    expect(controller.response.ok).toBe(0)
    expect(controller.response.error).toBe('main_error')
    expect(controller.response.errors).toHaveProperty('fake')
    expect(controller.response.errors.fake[0].error).toEqual('fake_validator_error')
  })
  test('validator warning', async () => {
    const controller = new Controller(...constructorAttributes())
    controller.Validator = mockValidator({ fakeWarning: true })
    await controller.run()
    controller.respond()
    expect(controller.response.ok).toBe(1)
    expect(controller.response.APIWarnings[0].warning).toEqual('fake_validator_warning')
    expect(controller.response.APIWarnings[0].info).toEqual('Fake warning')
  })
  test('login', async () => {
    const controller = new Controller(...constructorAttributes())
    await controller.logIn('user')
    expect(controller.user).toBe('user')
    expect(controller.req.user).toBe('user')
  })
})
