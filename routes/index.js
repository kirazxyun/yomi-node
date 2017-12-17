module.exports = function (app) {
  app.use('/article', require('./article'))
  app.use('/admin', require('./admin'))
}
