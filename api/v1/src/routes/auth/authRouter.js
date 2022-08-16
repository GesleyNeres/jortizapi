const express = require('express')
const router = express.Router()
const controller = require('../../controllers/authController')
const { route } = require('../../lib/server')

router.post('/auth/login', controller.login)

module.exports = router