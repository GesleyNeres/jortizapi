const jwt = require('../utils/token')
const {logger, loggerusr} = require('../utils/logger')

module.exports = async (req, res, next)=>{
    if (req.headers.authorization) {

        const token = String(req.headers.authorization).replace('Bearer ','')
        
        if(jwt.verify(token)) {
            loggerusr.info(`User successfully requested. | '${token}'`)
            req.token = token
            return next()    
        }
        
        logger.warn(`Attempt to consume API without a valid token. | '${token}'`)
        return res.status(401).json(
            {
                error: "Not Authorized to proceed. Please, try again."
            }
        )
    }else{
        logger.warn(`Attempt to consume API without token.`)
        return res.status(400).json(
            {
                error: "Bad request. Please, try again."
            }
        )
    }
}