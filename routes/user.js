var express = require('express')
var router = express.Router()
var controller = require('../controllers').user

router.get('/getList', controller.getList)

module.exports = router
