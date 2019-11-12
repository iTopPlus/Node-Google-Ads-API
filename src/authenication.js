'use strict';

const { OAuth2Client } = require('google-auth-library');

const { NodeFetch } = require('../library/node-fetch')
const { GenericError } = require('../errors')

class GoogleAdsAuthenication {
    constructor(credential, version) {
        this.version = version;
        this.credential = credential;
    }

    generateAccessTokenFromRefreshToken() {
        return 'Access_Token'
    }

    async generateAccessToken() {
        const endpoint = `https://www.googleapis.com/oauth2/${this.version}/token`
        try {
            const response = await NodeFetch(endpoint, {
                'Content-Type': 'application/json',
                method: 'POST',
                body: JSON.stringify({
                    client_id: this.credential.clientId,
                    client_secret: this.credential.clientSecret,
                    refresh_token: this.credential.refreshToken,
                    grant_type: 'refresh_token'
                })
            })
            const json = await response.json()
            if ('access_token' in json) {
                return json.access_token
            } else throw new GenericError(response.error)
        } catch (err) {
            throw new Error(err)
        }
    }
    
    generateOauthAccessToken() {
        const scopes = [
            `https://www.googleapis.com/`,
        ];

        const auth = new OAuth2Client(this.credential.clientId, this.credential.clientSecret, 'http://localhost:4000')
        return auth.generateAuthUrl({
            access_type: 'offline',
            scope: scopes
        }) 
    }
}

module.exports = GoogleAdsAuthenication

