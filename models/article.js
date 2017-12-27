var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true
  // },
  title: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  recommend_name: {
    type: String,
    required: true
  },
  recommend_reason: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    default: 0
  },
  status: {
    type: Number,
    default: 0
  } // 0: 推荐状态，1: 评选状态，2: 归档状态
})

module.exports = mongoose.model('article', ArticleSchema)
