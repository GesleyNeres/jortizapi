require('dotenv').config()
const express = require('express')
const server = express()
const routes = require('../routes/index')
const handler = require('../utils/handler')

const cors = require('cors')
server.use(cors())

server.use(express.json())

server.use(routes)

server.use(handler)


module.exports = server