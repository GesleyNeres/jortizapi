require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
const routes = require('../routes/index')
const handler = require('../utils/handler')
const {logger} = require('../utils/logger')
const crypt = require('../utils/crypt')



server.use(cors(
    {
        origin: '*'
    }
))

logger.info(`Server CORS started | '${__filename}'`)

server.use(express.json())
logger.info(`Server JSON started | '${__filename}'`)

server.use(routes)
logger.info(`Server ROUTES started | '${__filename}'`)

server.use(handler)
logger.info(`Server ERROR HANDLER started | '${__filename}'`)

module.exports = server