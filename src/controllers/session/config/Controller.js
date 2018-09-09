const Controller = require('../../../core/Controller')
const Validator = require('./Validator')

class ConfigController extends Controller {
  constructor(req, res, next, options) {
    super(...arguments)
    this.Validator = Validator
  }

  async work() {
    
  }
}

module.exports = ConfigController