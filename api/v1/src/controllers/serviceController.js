const database = require('../lib/database.js')

exports.readAll = async(req, res, next)=>{
    try {
        
        const app_services = await database.query(`select * from vw_services`)


        if (app_services[0]) {
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
        return next(error)
    }
}