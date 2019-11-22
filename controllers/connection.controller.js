'use strict';

const { AuthHandler } = require('./controllerhandler')
const { validateInput } = require('../schemas/validate-authen-input')
const { connectionResponse } = require('../schemas/connection/connection.schema')

const { GoogleAdsConnection } = require('../services/connection/google-ads-connection.service')

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
const connectionHandler = async (credential, version) => {
    var validRequest = validateInput({ credential, version })
    var response = await GoogleAdsConnection(validRequest)
    console.log('response ::>',response);
    return response
}

module.exports = {
    GoogleAdsConnection: AuthHandler({
        handler: connectionHandler,
        validator: connectionResponse
    }),
}
