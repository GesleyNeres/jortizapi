const database = require('../lib/database.js')
const {logger, loggerusr} = require('../utils/logger')
const ServiceModel = require('../models/serviceModel')

// Load all services
exports.readAll = async(req, res, next)=>{
    try {
        
        const app_services = await database.query(`select * from vw_services`)


        if (app_services[0]) {
            loggerusr.info(`Services successfully loaded. | '${__filename}' | '${req.token}'`)
            return res.status(200).json(
                {
                    data: app_services[0]
                }
            )
        }

        return res.status(404).json(
            {
                error: "Services not found."
            }
        )

    } catch (error) {
        logger.error(`Application error to load all services as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}

// Save Employee
exports.create = async (req, res, next) => {

    try {
        
        const service = req.body

        const response = await ServiceModel.create(service)

        if (response) {
            loggerusr.info(`Service successfully created.`)
            return res.status(201).json(
                {
                    data: "Service created."
                }
            )
        }

        return res.status(200).json(
            {
                data: "Service could not be created."
            }
        )

    } catch (error) {
        logger.error(`Application error to create a service as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}