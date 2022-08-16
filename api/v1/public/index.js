const server = require('../src/lib/server')

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    console.log("Server is up and running!")
})