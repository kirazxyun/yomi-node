var express = require('express')
var cors = require('cors')
var path = require('path')
var routes = require('./routes')

require('./models/db')

var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

routes(app)

// 404
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// 错误处理

// 开发环境出错：打印错误堆栈
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    console.log(err)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}
app.use(function (req) {})

// 生产环境出错：只返回错误信息
app.use(function (err, req, res) {
  res.status(err.status || 500)
  console.log(err)
  if (req.xhr === true) {
    res.json({
      success: false,
      msg: err.message
    })
  } else {
    res.render('error', {
      message: err.message,
      error: {}
    })
  }
})

module.exports = app
