module.exports = async (req, res, next)=>{
    if (req.headers.authorization) {
        return next()
    }else{
        return res.status(400).json(
            {
                error: "Bad request. Please, try again."
            }
        )
    }
}