import { userModel } from '../models'

var formidable = require('formidable')
var config = require('../config')

var login = function (req, res, next) {
  res.send({
    success: true,
    msg: '登录成功'
  })
}
var register = function (req, res, next) {
  res.send({
    success: true,
    msg: '注册成功'
  })
}
var logout = function (req, res, next) {
  var logoutUrl = config.cas.logout + '?service' + encodeURIComponent('http://localhost:3000')
  res.redirect(logoutUrl)
}

module.exports = {
  login: function (req, res, next) {
    var form = formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
      if (err) {
        res.send({
          success: false,
          msg: '参数有误'
        })

        return
      }

      var username = fields.username
      var password = fields.password
      userModel.findOne({
        username: username
      }, function (err, document) {
        if (err) {
          res.send({
            success: false,
            msg: '数据库查询出错'
          })

          return
        }
        if (!document) {
          res.send({
            success: false,
            msg: '用户不存在'
          })

          return
        }
        if (password !== document.password) {
          res.send({
            success: false,
            msg: '密码有误'
          })

          return
        }
        login(req, res, next)
      })
    })
  },

  register: function (req, res, next) {
    var form = formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
      if (err) {
        res.send({
          success: false,
          msg: '参数有误'
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
