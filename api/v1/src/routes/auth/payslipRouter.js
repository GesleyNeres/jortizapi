const express = require('express')
const router = express.Router()
const controller = require('../../controllers/payslipController')
const auth = require('../../middlewares/auth')

router.post('/payslips', auth, controller.create)


module.exports = router

