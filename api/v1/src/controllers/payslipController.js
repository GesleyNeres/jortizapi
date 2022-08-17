const database = require('../lib/database.js')

exports.readAll = async(req, res, next)=>{
    try {
        
        const app_payslip = await database.query(`select * from vw_payslips`)


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

exports.read = async(req, res, next)=>{
    try {
        console.log('REQ ', req)
        
        const param = String(req.params.name).replace("+"," ")

        const app_payslip = await database.query(`select * from vw_payslips where employee = "${param}"`)


        if (app_payslip[0][0]) {
            return res.status(200).json(
                {
                    data: app_payslip[0][0]
                }
            )
        }

        return res.status(404).json(
            {
                error: "Payslip not found."
            }
        )

    } catch (error) {
        return next(error)
    }
}