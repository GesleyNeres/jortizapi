const database = require('../lib/database.js')
const token = require('../utils/token')

exports.login = async (req, res, next) => {
    try {
        console.log(req.headers)
        const client = req.body

        const anonymous = await database.query(`select * from vw_users_logins where email = "${client.email}"`)


        if (anonymous[0][0].email === client.email && anonymous[0][0].password === client.password) {


            const jwt = token.sign(anonymous[0][0])

            const user_token = await database.query(`UPDATE app_users SET tokens = "${jwt}" where email ="${anonymous[0][0].email}"`)

            if (user_token) {

                delete anonymous[0][0].password

                return res.status(200).json(
                    {

                        data: anonymous[0][0],
                        token: jwt

                    }
                )
            }

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


exports.session = async (req, res, next) => {

    try {

        const client_token = String(req.headers.authorization).replace("Bearer ", "")

        const anonymous = await database.query(`select * from vw_users_logins where tokens = "${client_token}"`)
        console.log(anonymous[0][0])
        
        if (anonymous[0][0]) {
            delete anonymous[0][0].password

            return res.status(200).json(
                {

                    data: anonymous[0][0]

                }
            )
        }

        return res.status(401).json(
            {

                error: "Token is invalid or expired."

            }
        )

    } catch (error) {
        return next(error)
    }
}