const URLS = require('./URLS')

const ROUTES = [
  {
    endpoint: URLS.session.auth,
    method: 'post',
    Controller: require('../controllers/session/auth/Controller')
  }
]

module.exports = ROUTES