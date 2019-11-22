'use strict';

const Config = require('../../config')

const { NodeFetch } = require('../../library/node-fetch')
const { GenericError } = require('../../errors')
const Report = require('../../controllers/report/')


const GoogleAdsConnection = async (params) => {
    console.log('params ::>', params);
    const endpoint = `https://www.googleapis.com/oauth2/${params.version}/token`
    try {
        const response = await NodeFetch(endpoint, {
            'Content-Type': 'application/json',
            method: 'POST',
            body: JSON.stringify({
                client_id: params.credential.clientId,
                client_secret: params.credential.clientSecret,
                refresh_token: params.credential.refreshToken,
                grant_type: 'refresh_token'
            })
        })
        const json = await response.json()
        if ('access_token' in json) {
            Config.credential = params.credential
            Config.accessToken = json.access_token

            return {
                Report
            }
            
        } else {
            throw new GenericError(response.error)
        }
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = { GoogleAdsConnection }