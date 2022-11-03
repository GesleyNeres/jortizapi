const validator = require('validator');
const error = require('./error')

// Returns true if email is valid
exports.isEmail = (value)=>{
    if(validator.isEmail(value))
    {
        return  value
    }
    return error.message("Email is invalid.")
}

// Return true if password is strong enough
exports.isStrongPassword = (value)=>{
    if(validator.isStrongPassword(value, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}))
    {
        return  value
    }
    return error.message("Password has issues.")
}

// Returns true if value is a date
exports.isDate = (value) =>{
    if (validator.isDate(value, {format:'YYYY/MM/DD',tricdelimiters:['/', '-']})) {
        return true
    }
    return error.message("Date is not a valid format.")
}

// Returns true if value is a JSON object
exports.isJSON = (value) =>{
    if (validator.isJSON(value,{ allow_primitives: false })) {
        return true
    }
    return error.message("JSON is not a valid format.")
}

// Returns true if value is a Person Name String 
exports.isHumanName = (value) =>{
    if (validator.isAlpha(value,'pt-BR',{ignore:'-s'})) {
        return true
    }
    return error.message("Name value is not a valid format. Allowed only letters.")
}