const express = require('express')
const router = express.Router()
const controller = require('../../controllers/employeeController')
const auth = require('../../middlewares/auth')

router.post('/employees', auth, controller.create)


module.exports = router

