module.exports = (err, req, res) => {
    
    console.log('Error: ', err)
    
    return res.status(500).json(
        {
            error: "Error. Check logs!"
        }
    )
}