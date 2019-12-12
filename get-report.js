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

  async getReport(cid, query) {
    if (!cid) throw new Error("CID Not Found");
    if (!query) throw new Error("Must Provide Query");
    cid = cid.replace(/-/g, "");

    try {
      const header = this.setOauthHeader();
      const endpoint = `https://googleads.googleapis.com/${this.version}/customers/${cid}/googleAds:search`;
      const option = {
        method: "POST",
        body: JSON.stringify({ query: query }),
        headers: header
      };
      const response = await NodeFetch(endpoint, option);
      const json = await response.json();

      return json;
    } catch (err) {
      console.log("err ::>", err);
      throw new Error(err.message);
    }
  }

  async getResourceMetadata(type) {
    try {
      const header = this.setOauthHeader('ACCESS_TOKEN');
      const endpoint = `https://googleads.googleapis.com/${this.version}/googleAdsFields/${type}`;
      const option = {
        method: "GET",
        headers: header
      };
      const response = await NodeFetch(endpoint, option);
      const json = await response.json();
      return json;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = GoogleAdsReport;
