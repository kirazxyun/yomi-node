var express = require('express')
var controller = require('../controllers').admin
var router = express.Router()

router.post('/login', controller.login)
router.post('/register', controller.register)
router.get('/logout', controller.logout)
router.get('/all', controller.getAllAdmin)
router.get('/info', controller.getAdminInfo)
router.post('/update/avatar/:admin_id', controller.updatevatar)

module.exports = router
