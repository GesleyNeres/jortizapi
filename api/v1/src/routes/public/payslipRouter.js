const express = require('express')
const router = express.Router()
const controller = require('../../controllers/payslipController.js')
const auth = require('../../middlewares/auth')

router.get('/payslips', auth, controller.readAll)


module.exports = router