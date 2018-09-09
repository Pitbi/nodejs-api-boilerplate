const makeTypeError = (feature = '', key = '', validType = '', validTypes = []) => ({
  error: `type_error_${feature}_${key}`,
  info: `The ${key} attribute must be a ${validType}`,
  code: 422
})

const makeError = (feature = '', error = '', code = 422, info) => ({
  error: `error_${feature}_${error}`,
  code,
  info
})

const makeWarning = (feature = '', warning = '', info) => ({
  warning: `warning_${feature}_${warning}`,
  info
})

module.exports = {
  makeTypeError,
  makeError,
  makeWarning
}