const jwt = require('jsonwebtoken')

exports.sign = (data) => {
    var token = jwt.sign({ hue: data.email, hur: data.role }, "abc123")
    return token
}

exports.verify = (token) => { 
    jwt.verify(token, "abc123", function (err, decoded) {
        if(err) return false
        if(decoded) return true
    })
}