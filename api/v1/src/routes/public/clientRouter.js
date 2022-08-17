const express = require('express')
const router = express.Router()
const controller = require('../../controllers/clientController.js')

router.get('/clients', controller.readAll)

module.exports = router