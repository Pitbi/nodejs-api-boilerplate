const schemaRegexpValidation = (regexp, message) => ({
  validator: (value) => regexp.test(value),
  message: props => message
})

module.exports = {
  schemaRegexpValidation
}