var model = require('../models').user
module.exports = {
  find: function (name) {
    model.findOne({
      name: name
    })
  }
}
