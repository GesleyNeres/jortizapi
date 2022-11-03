exports.message = (message)=>{
    let internal = new Error(message)
    internal.name = 'APPLICATION_ERROR'
    throw internal
}