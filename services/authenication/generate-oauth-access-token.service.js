'use strict';

const { OAuth2Client } = require('google-auth-library');
const { GenericError } = require('../../errors')

const generateOauthAccessToken = (credential) => {
    const scopes = [
        `https://www.googleapis.com/`,
    ];
    try {

        const auth = new OAuth2Client(credential.clientId, credential.clientSecret, 'http://localhost:4000')
        return auth.generateAuthUrl({
            access_type: 'offline',
            scope: scopes
        })
    } catch (err) {
        throw new GenericError(err)
    }
}

module.exports = { generateOauthAccessToken }