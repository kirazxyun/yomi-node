const mongoose = require('mongoose')
const config = require('../config/db.config')

mongoose.connect(config.url, { useMongoClient: true })

const db = mongoose.connection

db.once('open', function () {
  console.log('数据库连接成功')
})
db.on('error', function (err) {
  console.error('连接数据库出错：' + err)
  mongoose.disconnect()
})
db.on('close', function () {
  console.log('数据库断开连接，重新连接数据库')
  mongoose.connect(config.url, {
    server: {
      auto_reconnect: true
    }
  })
})

module.exports = db
