const express = require('express')
const router = express.Router()
const controller = require('../../controllers/employeeController.js')

router.get('/employees', controller.readAll)

module.exports = router