var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  name_cn: {
    type: String,
    default: ''
  },
  score: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('user', UserSchema)
