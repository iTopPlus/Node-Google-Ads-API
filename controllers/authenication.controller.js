'use strict';

const { AuthHandler } = require('./controllerhandler')
const { validateInput } = require('../schemas/validate-authen-input')
const { validateGenerateAccessTokenResponse } = require('../schemas/authenication/validate-generate-access-token.schema')

const { generateAccessToken } = require('../services/authenication')

/**
 * @typedef {object} credential
 * @property {string} developerToken
 * @property {string} userAgent
 * @property {string} clientId
 * @property {string} clientSecret
 * @property {string} refreshToken
*/

/**
 * @param {credential} credential 
 * @param {string} version 
 */
const generateAccessTokenHandler = async (credential, version) => {
    console.log('credential ::>', credential);
    console.log('version ::>', version);
    var validRequest = validateInput({ credential, version })
    var response = await generateAccessToken(validRequest)
    return response
}
// const generateOauthAccessTokenHandler = async (root, args, context) => {
//     var validRequest = validateInput(args)
//     var response = await getGoogleAdsSerachService(validRequest)
//     return response
// }


module.exports = {
    generateAccessToken: AuthHandler({
        handler: generateAccessTokenHandler,
        validator: validateGenerateAccessTokenResponse
    }),
    // generateOauthAccessToken: controllerHandler({
    //     handler: getGoogleAdsSearchHandler,
    //     validator: validateGraphQLResponse
    // })
}
