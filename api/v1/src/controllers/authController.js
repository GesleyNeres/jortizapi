const database = require('../lib/database.js')
const token = require('../utils/token')

exports.login = async (req, res, next) => {
    try {

        const client = req.body

        const anonymous = await database.query(`select * from vw_users_logins where email = "${client.email}"`)


        if (anonymous[0][0].email === client.email && anonymous[0][0].password === client.password) {
            
            anonymous[0][0].token = token.sign(anonymous[0][0])
            
            delete anonymous[0][0].password

            return res.status(200).json(
                {

                    data: anonymous[0][0]

                }
            )

        }

        return res.status(401).json(
            {
                error: "Please, check your credentials."
            }
        )

    } catch (error) {
        return next(error)
    }
}