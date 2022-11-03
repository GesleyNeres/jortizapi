const server = require('../src/lib/server')
const {logger} = require('../src/utils/logger')

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    logger.info(`Server started at port ${port} | ${__filename}`)
    console.log("Server is up and running!")
})