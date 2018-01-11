import initData from '../initData/user'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  id: { // 用户id
    type: String
  },
  username: { // 用户名
    type: String,
    required: true,
    unique: true
  },
  password: { // 密码
    type: String,
    required: true
  },
  role: { // 角色
    type: Number,
    default: 0 // 0 :普通, 1:管理员
  },
  score: { // 总分
    type: Number,
    default: 0
  }
})

var userModel = mongoose.model('user', UserSchema)

initData.forEach(item => {
  userModel.create(item)
})

module.exports = userModel
