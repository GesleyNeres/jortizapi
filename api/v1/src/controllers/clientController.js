const database = require('../lib/database.js')

exports.readAll = async(req, res, next)=>{
    try {
        
        const app_clients = await database.query(`select * from vw_clients`)


        if (app_clients[0]) {
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
        return next(error)
    }
}