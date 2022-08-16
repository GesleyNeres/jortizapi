const database = require('../lib/database.js')

exports.login = async (req, res, next) => {
    try {
        return res.status(200).json(
            {

                email: 'admin@app.com',
                name: 'App Amdministrator',
                token: 'abc'

            }
        )
    } catch (error) {
        return next(error)
    }
}