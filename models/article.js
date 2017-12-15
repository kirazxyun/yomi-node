var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  title: {
    type: String,
    default: ''
  },
  time: {
    type: Date,
    default: Date.now
  },
  recommend_name: {
    type: String,
    default: ''
  },
  recommend_reason: {
    type: String,
    default: ''
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
