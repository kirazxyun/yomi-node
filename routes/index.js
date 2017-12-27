module.exports = function (app) {
  app.all(function (req, res, next) {
    console.log(req)
    next()
  })
  app.use('/article', require('./article'))
  app.use('/admin', require('./admin'))
}
