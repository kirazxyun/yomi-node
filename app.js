var express = require('express')
var app = express()
var routes = require('./routes')
var db = require('./models/db')

routes(app)
app.use(express.static('./public'))

module.exports = app
