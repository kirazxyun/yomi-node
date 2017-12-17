var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    default: 0 // 0 :普通, 1:管理员
  },
  score: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('user', UserSchema)
