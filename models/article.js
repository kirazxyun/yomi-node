import initData from '../initData/article'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  id: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    default: 0
  },
  status: {
    type: Number,
    default: 0 // 0: 推荐状态，1: 评选状态，2: 归档状态
  },
  isExcellent: {
    type: Boolean,
    default: false
  }
})

var articleModel = mongoose.model('article', ArticleSchema)

initData.forEach(item => {
  articleModel.create(item)
})

module.exports = articleModel
