const jwt = require('../utils/token')

module.exports = async (req, res, next)=>{
    if (req.headers.authorization) {
        /* const token = String(req.headers.authorization).replace('Bearer ','') */
        return next()
        /* if(jwt.verify(token)) {
            return next()    
        }
        
        return res.status(403).json(
            {
                error: "Invalid token. Please, try again."
            }
        ) */

    }else{
        return res.status(400).json(
            {
                error: "Bad request. Please, try again."
            }
        )
    }
}