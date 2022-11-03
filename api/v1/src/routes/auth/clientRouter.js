const express = require('express')
const router = express.Router()
const controller = require('../../controllers/clientController')
const auth = require('../../middlewares/auth')

router.post('/clients', auth, controller.create)


module.exports = router

