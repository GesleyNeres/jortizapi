const express = require('express')
const server = express()
const routes = require('../routes/index')

server.use(express.json())

server.use(routes)

module.exports = server