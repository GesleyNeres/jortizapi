const express = require('express')
const router = express.Router()
const controller = require('../../controllers/payslipController.js')

router.get('/payslips', controller.readAll)

router.get('/payslips/employees/:name', controller.readEmployee)

router.get('/payslips/clients/:name', controller.readClient)

router.get('/payslips/services/:name', controller.readService)

module.exports = router