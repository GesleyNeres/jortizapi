const crypto = require('crypto-js')
const sha512 = require("crypto-js/sha512");
const hmacSHA512 = require("crypto-js/hmac-sha512");
const Base64 = require('crypto-js/enc-base64')

exports.encrypt = (data) => {
    let secret = crypto.AES.encrypt(data, process.env.APP_TOKEN_AES_KEY).toString();
    return secret
}


exports.decrypt = (data) => {
    let bytes = crypto.AES.decrypt(data, process.env.APP_TOKEN_AES_KEY);
    return bytes.toString(crypto.enc.Utf8)
}

exports.hash = (data) => {
    const hashDigest = sha512(data);
    const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, process.env.APP_TOKEN_HASH_KEY));
    return hmacDigest
}

exports.compareHash = (data, hash) => {
    console.log('Dado: ', data, ' Hash:', hash)
    const hashDigest = sha512(data);
    const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, process.env.APP_TOKEN_HASH_KEY));
    if (hmacDigest === hash) {
        return true
    }else{
        return false
    }
}