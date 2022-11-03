const { logger } = require('../utils/logger')

module.exports = async (error, req, res, next) => {
    let message = ''
    switch (error.name) {
        case 'APPLICATION_ERROR':
            message = error.message
            break;
        case 'SequelizeForeignKeyConstraintError':
            message = 'Please, check object keys. It seems the keys are not valid in database.'
            break;
        default:
            console.log("Error: ", error)
            logger.error(`Application error as '${message}'`)
            message = 'Internal error. Please, contact application owner'
            break;
    }
    return res.status(500).json(
        {
            error: message
        }
    );
}