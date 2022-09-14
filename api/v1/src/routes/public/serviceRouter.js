const express = require('express')
const router = express.Router()
const controller = require('../../controllers/serviceController.js')
const auth = require('../../middlewares/auth')

router.get('/services', auth, controller.readAll)

module.exports = router