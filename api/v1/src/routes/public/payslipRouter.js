const express = require('express')
const router = express.Router()
const controller = require('../../controllers/payslipController.js')

router.get('/payslips', controller.readAll)

router.get('/payslips/employees/:name', controller.read)

module.exports = router