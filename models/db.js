var mongoose = require('mongoose')
var config = require('../config/db.config')
var db = mongoose.connect(config.url, {
  useMongoClient: true
})
var connection = db.connection

connection.on('error', function (err) {
  console.error('connection error')
})
connection.once('open', function (err, db) {
  console.log('数据库连接成功')
})

module.exports = db
