var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes')
var db = require('./models/db')
var app = express()

routes(app)
app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlLencoded({ extended: false }))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
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

// production error handler
// no stacktraces leaked to user
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
