const express = require('express')
const router = express.Router()
const controller = require('../../controllers/payslipController')

router.post('/payslips', controller.create)


module.exports = router

