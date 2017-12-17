var mongoose = require('mongoose')
var config = require('../config/db.config')
var db = mongoose.connect(config.url, {
  useMongoClient: true
})
var connection = db.connection

connection.once('open', function () {
  console.log('数据库连接成功')
})
connection.on('error', function (err) {
  console.error('连接数据库出错：' + err)
  mongoose.disconnect()
})
connection.on('close', function () {
  console.log('数据库断开连接，重新连接数据库')
  mongoose.connect(config.url, {
    server: {
      auto_reconnect: true
    }
  })
})

module.exports = db
