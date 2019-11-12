class GenericError extends Error {
  constructor(...params) {
    super(...params)

    if (Error.captureStackTrace) Error.captureStackTrace(this, GenericError)

    this.name = 'GenericError'
    this.date = new Date()
  }
}

module.exports = {
  GenericError: GenericError
}
