const { logger } = require('../utils/logger')

module.exports = async (error, req, res, next) => {
    let message = ''
    let status = 500
    switch (error.name) {
        case 'APPLICATION_ERROR':
            status = 400
            message = error.message
            break;
        case 'SequelizeForeignKeyConstraintError':
            message = 'Please, check object keys. It seems the keys are not valid in database.'
            break;
        default:
            status = 500
            logger.error(`Application error as '${message}'`)
            message = 'Internal error. Please, contact application owner'
            break;
    }
    
    return res.status(status).json(
        {
            error: message
        }
    );
}