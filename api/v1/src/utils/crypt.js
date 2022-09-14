const crypto = require('crypto-js')

exports.encrypt = (data)=>{
    let secret = crypto.AES.encrypt(data, process.env.APP_SECRET_KEY_DATA).toString();
    return secret
}


exports.decrypt = (data)=>{
    let bytes = crypto.AES.decrypt(data, process.env.APP_SECRET_KEY_DATA);
    return bytes.toString(crypto.enc.Utf8)
}