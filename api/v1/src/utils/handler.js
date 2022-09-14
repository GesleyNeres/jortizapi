module.exports = async (error, req, res, next) => {
    console.log("Error from Handler", error)
    return res.status(500).json(
        {
            error: 'Internal error. Please, check logs.'
        }
    );
}