const URLS = require('./URLS')

const ROUTES = [
  {
    endpoint: URLS.session.auth,
    method: 'post',
    Controller: require('../features/session/controllers/auth/Controller')
  }
]

module.exports = ROUTES