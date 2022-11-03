const express = require('express')
const router = express.Router()
const controller = require('../../controllers/payslipController.js')
const auth = require('../../middlewares/auth')

router.get('/payslips', auth, controller.readAll)

router.get('/payslips/report', auth, controller.readAllReport)


module.exports = router