const database = require('../lib/database.js')
const crypt = require('../utils/crypt')
const { logger, loggerusr } = require('../utils/logger')
const ClientModel = require('../models/clientModel')
const EmployeeModel = require('../models/employeeModel')
const ServiceModel = require('../models/serviceModel')
const PayslipModel = require('../models/payslipModel')
// Load all clients
exports.readAll = async (req, res, next) => {
    try {

        const count_clients = await database.query(`select count(*) as clients from vw_clients`)
        const count_employees = await database.query(`select count(*) as employees from vw_employees`)
        const count_services = await database.query(`select count(*) as services from vw_services`)
        const count_payslips = await database.query(`select count(*) as payslips from vw_payslips`)

        loggerusr.info(`Application Metrics successfully loaded. | '${__filename}' | '${req.token}'`)
        
        return res.status(200).json(
            {
                data: {
                    clients_count: count_clients[0][0].clients || 0,
                    employees_count: count_employees[0][0].employees || 0,
                    services_count: count_services[0][0].services || 0,
                    payslips_count: count_payslips[0][0].payslips || 0,
                }
            }
        )

    } catch (error) {
        logger.error(`Application error to load all application metrics as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}
