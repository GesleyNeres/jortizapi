const database = require('../lib/database.js')
const token = require('../utils/token')
const validator = require('../utils/validator')
const {logger, loggerusr} = require('../utils/logger')
const crypt = require('../utils/crypt')
// Do user login
exports.login = async (req, res, next) => {
    try {

        let client = {}

        if (validator.isEmail(req.body.email)) {
            client = req.body
        }

        const anonymous = await database.query(`select * from vw_users_logins where email = "${client.email}"`)
        
        
        anonymous[0].forEach(element => {
            element.name = crypt.decrypt(element.name)
        });

        if (anonymous[0][0].email === client.email &&  crypt.compareHash(client.password,anonymous[0][0].password)) {


            const jwt = token.sign(anonymous[0][0])

            anonymous[0][0].tokens = jwt

            const user_token = await database.query(`UPDATE app_users SET tokens = "${jwt}" where email ="${anonymous[0][0].email}"`)

            if (user_token) {
                loggerusr.info(`User '${anonymous[0][0].email}' logged successfully. | '${__filename}' | '${req.token}'`)
                delete anonymous[0][0].password

                return res.status(200).json(
                    {

                        data: anonymous[0][0]

                    }
                )
            }

        }
        
        loggerusr.info(`User '${anonymous[0][0].email}' tried to log without success. | '${__filename}' | '${req.token}'`)
        return res.status(401).json(
            {
                error: "Please, check your credentials."
            }
        )

    } catch (error) {
        logger.error(`Application error for login as '${error}' | '${__filename}' | '${req.token}' `)
        return next(error)
    }
}

// Load user session
exports.session = async (req, res, next) => {

    try {

        const client_token = String(req.headers.authorization).replace("Bearer ", "")

        const anonymous = await database.query(`select * from vw_users_logins where tokens = "${client_token}"`)
        
        anonymous[0].forEach(element => {
            element.name = crypt.decrypt(element.name)
        });

        if (anonymous[0][0]) {
            delete anonymous[0][0].password
            loggerusr.info(`User '${anonymous[0][0].email}' session loaded successfully. | '${__filename}' | '${req.token}'`)
            return res.status(200).json(
                {

                    data: anonymous[0][0]

                }
            )
        }
        loggerusr.info(`User '${anonymous[0][0].email}' tried to load session without success. | '${__filename}' | '${req.token}'`)
        return res.status(401).json(
            {

                error: "Token is invalid or expired."

            }
        )

    } catch (error) {
        logger.error(`Application error for session load as '${error}' | '${__filename}' | '${req.token}'`)
        return next(error)
    }
}