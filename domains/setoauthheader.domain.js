const { userAgent, accessToken, developerToken } = require('../config')

const getOauthHeader = () => {
  return {
    'User-Agent': userAgent,
    'Content-Type': 'application/json',
    charset: 'utf-8',
    Accept: 'application/json',
    Authorization: `Bearer  ${accessToken}`,
    'developer-token': developerToken,
    'login-customer-id': ''
  }
}

module.exports = { getOauthHeader: getOauthHeader }
