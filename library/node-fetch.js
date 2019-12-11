const fetch = require('node-fetch')

const NodeFetch = async (endpoint, option) => {
  try {
    const response = await fetch(endpoint, option)
    return response
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  NodeFetch: NodeFetch
}
