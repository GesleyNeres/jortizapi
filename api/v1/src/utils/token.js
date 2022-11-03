const jwt = require('jsonwebtoken')

exports.sign = (data) => {
    console.log('inside token sign')
    var token = jwt.sign({ hue: data.email, hur: data.role }, "abc123")
    return token
}

exports.verify = (token) => {
    return jwt.verify(token, "abc123", function (err, decoded) {
        
        if(err) return false
        if (decoded) return true
    })
}
