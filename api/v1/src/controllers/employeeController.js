const database = require('../lib/database.js')
const crypt = require('../utils/crypt')

exports.readAll = async(req, res, next)=>{
    try {
        
        const app_employee = await database.query(`select * from vw_employees`)

        app_employee[0].forEach(element => {
            element.name = crypt.decrypt(element.name)
            element.phone = crypt.decrypt(element.phone)
        });

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