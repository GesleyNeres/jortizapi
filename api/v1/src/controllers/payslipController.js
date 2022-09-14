const database = require('../lib/database.js')
const PayslipModel = require('../models/payslipModel')
const crypt = require('../utils/crypt')

exports.readAll = async (req, res, next) => {
    
    try {

        const app_payslip = await database.query('select * from vw_payslips')

        app_payslip[0].forEach(element => {
            element.client = crypt.decrypt(element.client)
            element.employee = crypt.decrypt(element.employee)
        })

        if (app_payslip[0]) {
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
        return next(error)
    }
}

exports.create = async (req, res, next) => {
    try {
        const payslip = req.body

        const response = await PayslipModel.create(payslip)

        if (response) {
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
        return next(error)
    }
}