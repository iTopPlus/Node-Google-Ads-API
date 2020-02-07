"use strict";

const GoogleAdsAuth = require("./get-auth");
const { NodeFetch } = require("./library/node-fetch");

class GoogleAdsReport {
    /**
     * @param {object} configs 
     * @property {string} developerToken
     * @property {string} userAgent
     * @property {string} clientId
     * @property {string} clientSecret
     * @property {string} refreshToken
     * @property {string} loginCustomerId
     * @param {string} accessToken 
     */
    constructor(configs, accessToken) {
        this.configs = configs;
        this.accessToken = accessToken
        this.version = "v2";
        this.auth = new GoogleAdsAuth(configs);
    }

    setOauthHeader() {
        return {
            "User-Agent": this.configs.userAgent,
            "Content-Type": "application/json",
            charset: "utf-8",
            Accept: "application/json",
            Authorization: `Bearer  ${this.accessToken}`,
            "developer-token": this.configs.developerToken,
            "login-customer-id": this.configs.loginCustomerId
        };
    }

    /**
     * 
     * @param {*} cid 
     * @param {*} operations 
     */
    async customerCreateAccount(cid, operations) {
        if (!cid) throw new Error("CID Not Found");
        if (!operations) throw new Error("Must Provide Operations");
        cid = cid.replace(/-/g, "");

        try {
            const header = this.setOauthHeader();
            // Docs : https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v2.services#google.ads.googleads.v2.services.CreateCustomerClientRequest
            const endpoint = `https://googleads.googleapis.com/${this.version}/customers/${cid}:createCustomerClient`;
            const option = {
                method: "POST",
                body: JSON.stringify(operations),
                headers: header
            };
            const response = await NodeFetch(endpoint, option);
            const json = await response.json();

            return json;
        } catch (err) {
            console.log("Error ::>", err);
            throw new Error(err.message);
        }
    }
}

module.exports = GoogleAdsReport;
