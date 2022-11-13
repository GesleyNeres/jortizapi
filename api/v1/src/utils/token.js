const jwt = require('jsonwebtoken')

exports.sign = (data) => {
    var token = jwt.sign({ hue: data.email, hur: data.role }, process.env.APP_TOKEN_KEY, {expiresIn: "2h"})
    return token
}

exports.verify = (token) => {
    return jwt.verify(token, process.env.APP_TOKEN_KEY, function (err, decoded) {
        if(err) return false
        if (decoded) return true
    })
}
