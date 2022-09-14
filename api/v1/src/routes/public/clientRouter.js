const express = require('express')
const router = express.Router()
const controller = require('../../controllers/clientController.js')
const auth = require('../../middlewares/auth')

router.get('/clients', auth, controller.readAll)

module.exports = router