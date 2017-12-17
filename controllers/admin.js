var formidable = require('formidable')
var userModel = require('../models').user
var config = require('../config')
var form = formidable.IncomingForm()
var login = function (req, res, next) {
  res.send({
    status: 1,
    success: '登录成功'
  })
}
var register = function (req, res, next) {
  res.send({
    status: 1,
    success: '注册成功'
  })
}
var logout = function (req, res, next) {
  var logoutUrl = config.cas.logout + '?service' + encodeURIComponent('http://localhost:3000')
  res.redirect(logoutUrl)
}
module.exports = {
  login: function (req, res, next) {
    form.parse(req, function (err, fields, files) {
      var name = fields.name
      var password = fields.password
      userModel.findOne({
        name: name
      }, function (err, document) {
        if (err) {
          res.send({
            status: 0,
            type: 'USER_NOT_FOUND',
            message: '用户找不到'
          })
        } else {
          if (password !== document.password) {
            res.send({
              status: 0,
              type: 'PASSWORD_UNCATCH',
              message: '密码有误'
            })
          } else {
            login(req, res, next)
          }
        }
      })
      if (err) {
        res.send({
          status: 0,
          type: 'FORM_DATA_ERROR',
          message: '表单信息错误'
        })

        return
      }
      login(req, res, next)
    })
  },
  register: function (req, res, next) {
    form.parse(req, function (err, fields, files) {
      if (err) {
        res.send({
          status: 0,
          type: 'FORM_DATA_ERROR',
          message: '表单信息错误'
        })

        return
      }
      register(req, res, next)
    })
  },
  logout: function (req, res, next) {
    if (req.session) {
      req.session = null
      logout(req, res, next)
    } else {
      res.redirect('http://localhost:3000')
    }
  }
}
