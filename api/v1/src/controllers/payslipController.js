const database = require('../lib/database.js')
const PayslipModel = require('../models/payslipModel')
const crypt = require('../utils/crypt')
const validator = require('../utils/validator')
const { logger, loggerusr } = require('../utils/logger')

// Load all payslips
exports.readAll = async (req, res, next) => {

    try {

        const app_payslip = await database.query('select * from vw_payslips')

        app_payslip[0].forEach(element => {
            element.client = crypt.decrypt(element.client)
            element.employee = crypt.decrypt(element.employee)
        })

        if (app_payslip[0]) {
            loggerusr.info(`Payslips successfully loaded. | '${__filename}' | '${req.token}'`)
            return res.status(200).json(
                {
                    data: app_payslip[0]
                }
            )
        }

        return res.status(404).json(
            {
                error: "Payslips not found."
            }
        )

    } catch (error) {
        logger.error(`Application error to load all payslips as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}

// Load all payslips based on range date of report
exports.readAllReport = async (req, res, next) => {

    try {

        let requested_date = {}

        if (validator.isHumanName(req.query.employeeName) &&
            validator.isDate(req.query.startDate) &&
            validator.isDate(req.query.endDate)) {
            requested_date = req.query
        }

        const app_payslip = await database.query(`select * from vw_payslips where (date between '${requested_date.startDate}' and '${requested_date.endDate}')`)

        if (app_payslip[0][0]) {
            const requested_payslip = []

            app_payslip[0].forEach(element => {
                element.client = crypt.decrypt(element.client)
                element.employee = crypt.decrypt(element.employee)
            })

            app_payslip[0].forEach(element => {
                if (element.employee === requested_date.employeeName) {
                    requested_payslip.push(element)
                    return
                }
            })


            if (requested_payslip[0]) {
                loggerusr.info(`Payslips successfully loaded.`)
                return res.status(200).json(
                    {
                        data: requested_payslip
                    }
                )
            }
        }

        return res.status(404).json(
            {
                error: "Payslips not found."
            }
        )

    } catch (error) {
        logger.error(`Application error to load payslips as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}

// Creates a payslip entry
exports.create = async (req, res, next) => {

    try {
        
        const payslip = req.body

        const response = await PayslipModel.create(payslip)

        if (response) {
            loggerusr.info(`Payslip successfully created.`)
            return res.status(201).json(
                {
                    data: "Payslip created."
                }
            )
        }

        return res.status(200).json(
            {
                data: "Payslip could not be created."
            }
        )

    } catch (error) {
        logger.error(`Application error to create a payslip as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}