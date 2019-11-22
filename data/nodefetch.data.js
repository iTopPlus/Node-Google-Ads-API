const fetch = require('node-fetch')
const { FetchError } = require('../errors')

const FETCH = async (endpoint, option) => {
  try {
    const response = await fetch(endpoint, option)
    return response
  } catch (err) {
    throw new FetchError(err)
  }
}

module.exports = {
  FETCH: FETCH
} 
