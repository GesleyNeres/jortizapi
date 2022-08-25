module.exports = async (req, res) => {

    return res.status(500).json(
        {
            error: 'Internal error'
        }
    );
}