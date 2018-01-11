var express = require('express')
var router = express.Router()
var controller = require('../controllers').article

router.post('/', controller.create)
router.put('/', controller.update)
router.delete('/:id', controller.delete)
router.get('/getList', controller.getList)
router.get('/getArchived', controller.getArchived)
router.get('/getExcellent', controller.getExcellent)
router.get('/getVoting', controller.getVoting)

module.exports = router
