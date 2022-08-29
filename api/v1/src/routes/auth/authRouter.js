const express = require('express')
const router = express.Router()
const controller = require('../../controllers/authController')
const auth = require('../../middlewares/auth')

router.post('/auth/login', controller.login)

router.get('/auth/session', auth, controller.session)

module.exports = router