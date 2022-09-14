const express = require('express')
const router = express.Router()
const controller = require('../../controllers/employeeController.js')
const auth = require('../../middlewares/auth')

router.get('/employees', auth, controller.readAll)

module.exports = router