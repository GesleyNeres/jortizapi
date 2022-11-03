const database = require('../lib/database.js')
const crypt = require('../utils/crypt')
const {logger, loggerusr} = require('../utils/logger')
const EmployeeModel = require('../models/employeeModel')

// Load all employees
exports.readAll = async(req, res, next)=>{
    try {
        
        const app_employee = await database.query(`select * from vw_employees`)

        app_employee[0].forEach(element => {
            element.name = crypt.decrypt(element.name)
            element.phone = crypt.decrypt(element.phone)
        });

        if (app_employee[0]) {
            loggerusr.info(`Employees successfully loaded. | '${__filename}' | '${req.token}'`)
            return res.status(200).json(
                {
                    data: app_employee[0]
                }
            )
        }

        return res.status(404).json(
            {
                error: "Employee not found."
            }
        )

    } catch (error) {
        logger.error(`Application error to load all employees as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}

// Save Employee
exports.create = async (req, res, next) => {

    try {
        
        const employee = req.body

        const response = await EmployeeModel.create(employee)

        if (response) {
            loggerusr.info(`Employee successfully created.`)
            return res.status(201).json(
                {
                    data: "Employee created."
                }
            )
        }

        return res.status(200).json(
            {
                data: "Employee could not be created."
            }
        )

    } catch (error) {
        logger.error(`Application error to create a employee as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}