var formidable = require('formidable')
var articleModel = require('../models').article

module.exports = {
  create: function (req, res, next) {
    var index = Math.random(100)
    articleModel.create({
      title: 'test' + index,
      recommend_name: 'name' + index,
      recommend_reason: 'reason' + index
    }, function (err, record) {
      if (err) {
        res.send({
          success: false,
          msg: '参数有误'
        })

        return
      }
      res.send({
        success: true,
        data: record
      })
    })
  },

  update: function (req, res, next) {
    console.log('update')
    res.end()
  },

  delete: function (req, res, next) {
    console.log('delete')
    res.end()
  },

  get: function (req, res, next) {
    // var form = formidable.IncomingForm()
    // form.parse(req, function (err, fields, files) {
    //   if (err) {
    //     res.send({
    //       success: false,
    //       msg: '参数有误'
    //     })

    //     return
    //   }

    const status = req.query.status
    const conditions = {}

    if (status || status === 0) {
      conditions.status = status
    }
    articleModel.find(conditions, function (err, documents) {
      if (err) {
        res.send({
          success: false,
          msg: '数据库查询出错'
        })

        return
      }

      res.send({
        success: true,
        data: {
          rows: documents
        }
      })
    })
    // })
  }
}
