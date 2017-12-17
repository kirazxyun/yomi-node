var express = require('express')
var controller = require('../controllers').admin
var router = express.Router()

router.post('/login', controller.login)
router.post('/register', controller.register)
router.get('/logout', controller.logout)

module.exports = router
