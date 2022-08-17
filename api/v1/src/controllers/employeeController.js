const database = require('../lib/database.js')

exports.readAll = async(req, res, next)=>{
    try {
        
        const app_employee = await database.query(`select * from vw_employees`)


        if (app_employee[0]) {
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
        return next(error)
    }
}