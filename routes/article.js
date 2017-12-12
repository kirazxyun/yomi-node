var express = require('express')
var router = express.Router()
var controller = require('../controllers').article

router.post('/', controller.create)
router.put('/', controller.update)
router.delete('/', controller.delete)
router.get('/', controller.get)

module.exports = router
