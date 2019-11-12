'use strict';

const GoogleAdsAuthenication = require('./authenication')

class GoogleAdsAPIService {
    constructor(credential, version) {
        this.credential = credential
        this.version = version
        this.authen = new GoogleAdsAuthenication(credential, version)
    }

    getService() {
        return 'WORKING IN PROGRESS'
    }


}
module.exports = GoogleAdsAPIService