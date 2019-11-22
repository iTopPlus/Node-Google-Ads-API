function errorHandler(err) {
    const errType = err.name
    switch (errType) {
        // case 'CredentialInputError':{
        //     throw new Error(err.message)
        // }
        default:
            throw new Error(err.message)
    }
}

module.exports = {
    errorHandler
}
  