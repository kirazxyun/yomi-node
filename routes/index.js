module.exports = function (app) {
  app.use('/article', require('./article'))
  app.use('/login', require('./login'))
}
