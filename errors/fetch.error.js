class FetchError extends Error {
  constructor (...params) {
    super(...params)
    if (Error.captureStackTrace) Error.captureStackTrace(this, FetchError)
    this.name = 'FetchError'
    this.date = new Date()
  }
}

module.exports = {
  FetchError: FetchError
}
