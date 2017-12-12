module.exports = {
  create: function (req, res, next) {
    console.log('create')
    res.end()
  },

  update: function (req, res, next) {
    console.log('update')
    res.end()
  },

  delete: function (req, rs, next) {
    console.log('delete')
    res.end()
  },

  get: function (req, res, next) {
    console.log('get')
    res.end()
  }
}