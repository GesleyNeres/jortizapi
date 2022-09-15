const jwt = require('../utils/token')

module.exports = async (req, res, next)=>{
    if (req.headers.authorization) {
        const token = String(req.headers.authorization).replace('Bearer ','')
        
        if(jwt.verify(token)) {
            return next()    
        }
        
        return res.status(401).json(
            {
                error: "Not Authorized to proceed. Please, try again."
            }
        )
    }else{
        console.log('nao tem header auth')
        return res.status(400).json(
            {
                error: "Bad request. Please, try again."
            }
        )
    }
}