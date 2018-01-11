import { articleModel } from '../models'
var formidable = require('formidable')

function findArticle (params, res) {
  articleModel.find(params, function (err, documents) {
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
}

function findArticleById (id, res) {
  return new Promise((resolve, reject) => {
    articleModel.findOne({
      id: id
    }, (err, document) => {
      if (err) {
        res.send({
          success: false,
          msg: '数据库查询出错'
        })
        reject(err)

        return
      }

      if (!document) {
        res.send({
          success: false,
          msg: '查无此对象'
        })
        reject(err)

        return
      }

      resolve(document)
    })
  })
}

// 修改记录
// mongooseModel.update(conditions, update, options, callback);
// var conditions = { username: 'model_demo_username' };
// var update = { $set: { age: 27, title: 'model_demo_title_update' } };
// var options = { upsert: true };
// mongooseModel.update(conditions, update, options, function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('update ok!');
//   }
//   //关闭数据库链接
//   db.close();
// });
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
    const id = req.params.id

    if (!id) {
      res.send({
        success: false,
        msg: '请提供操作对象'
      })
    } else {
      articleModel.remove({
        id: id
      }, err => {
        if (err) {
          res.send({
            success: false,
            msg: '数据库查询出错'
          })
        } else {
          res.send({
            success: true,
            msg: '删除成功'
          })
        }
      })
    }
  },

  getList: function (req, res, next) {
    findArticle(req.query, res)
  },

  getArchived: function (req, res, next) {
    findArticle({
      status: 2
    }, res)
  },

  getExcellent: function (req, res, next) {
    findArticle({
      status: 2,
      isExcellent: true
    }, res)
  },

  getVoting: function (req, res, next) {
    findArticle({
      status: 1
    }, res)
  }
}
