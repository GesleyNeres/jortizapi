const { v4: uuidv4 } = require('uuid');

exports.genUUID = ()=>{
    return uuidv4();
}