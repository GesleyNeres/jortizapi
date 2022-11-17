const database = require('../lib/database.js')
const crypt = require('../utils/crypt')
const {logger, loggerusr} = require('../utils/logger')
const ClientModel = require('../models/clientModel')

// Load all clients
exports.readAll = async(req, res, next)=>{
    try {

        const app_clients = await database.query(`select * from vw_clients`)

        app_clients[0].forEach(element => {
            element.name = crypt.decrypt(element.name),
            element.phone= crypt.decrypt(element.phone),
            element.address= crypt.decrypt(element.address),
            element.city= crypt.decrypt(element.city),
            element.state= crypt.decrypt(element.state),
            element.cost=crypt.decrypt(element.cost),
            element.total_revenue= crypt.decrypt(element.total_revenue),
            element.email= crypt.decrypt(element.email),
            element.details= crypt.decrypt(element.details)
        });
        
        if (app_clients[0]) {
            loggerusr.info(`Clients successfully loaded. | '${__filename}' | '${req.token}'`)
            return res.status(200).json(
                {
                    data: app_clients[0]
                }
            )
        }

        return res.status(404).json(
            {
                error: "Clients not found."
            }
        )

    } catch (error) {
        logger.error(`Application error to load all clients as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}

// Save Client
exports.create = async (req, res, next) => {

    try {
        
        const client = req.body
        
        const response = await ClientModel.create(client)

        if (response) {
            loggerusr.info(`Client successfully created.`)
            return res.status(201).json(
                {
                    data: response.uuid
                }
            )
        }

        return res.status(200).json(
            {
                data: "Client could not be created."
            }
        )

    } catch (error) {
        console.log("Deu erro aqui", error)
        logger.error(`Application error to create a client as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}