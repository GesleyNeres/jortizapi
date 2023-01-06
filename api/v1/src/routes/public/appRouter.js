const express = require('express')
const router = express.Router()
const controller = require('../../controllers/appController.js')
const auth = require('../../middlewares/auth')

router.get('/application', auth, controller.readAll) 

module.exports = router