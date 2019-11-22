const { generateAccessToken } = require('./generate-access-token.service')
const { generateOauthAccessToken } = require('./generate-oauth-access-token.service')

module.exports = {
    generateAccessToken,
    generateOauthAccessToken
}