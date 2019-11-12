'use strict';

const GoogleAdsAuthenication = require('./authenication')

class GoogleAdsAPIReport {

    constructor(credential, version) {
        this.credential = credential
        this.version = version
        this.authen = new GoogleAdsAuthenication(credential, version)
    }

    setOauthHeader(accessToken) {
        return {
            'User-Agent': googleAuth.userAgent,
            'Content-Type': 'application/json',
            charset: 'utf-8',
            Accept: 'application/json',
            Authorization: `Bearer  ${accessToken}`,
            'developer-token': googleAuth.developerToken,
            'login-customer-id': '2942965080'
        }
    }

    async getReport(cid, query) {
        if (!cid) throw new Error('CID Not Found')
        if (!query) throw new Error('Must Provide Query')
        cid = cid.replace(/-/g, '')
        const accesstoken = accessToken
        const header = setOauthHeader(accesstoken)

        const endpoint = `https://googleads.googleapis.com/customers/${cid}/googleAds:search`
        const response = await NodeFetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({ query: query }),
            headers: header
        })

        const json = await response.json()
        return json
    }


}
module.exports = GoogleAdsAPIReport  