const express = require('express')
const router = express.Router()
const controller = require('../../controllers/serviceController.js')

router.get('/services', controller.readAll)

module.exports = router