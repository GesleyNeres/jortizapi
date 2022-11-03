const express = require('express')
const router = express.Router()
const controller = require('../../controllers/serviceController')
const auth = require('../../middlewares/auth')

router.post('/services', auth, controller.create)


module.exports = router

