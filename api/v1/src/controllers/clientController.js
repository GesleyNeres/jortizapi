const database = require('../lib/database.js')
const crypt = require('../utils/crypt')

exports.readAll = async(req, res, next)=>{
    try {
        
        const app_clients = await database.query(`select * from vw_clients`)

        app_clients[0].forEach(element => {
            element.name = crypt.decrypt(element.name)
            element.email = crypt.decrypt(element.email)
            element.phone = crypt.decrypt(element.phone)
        });

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