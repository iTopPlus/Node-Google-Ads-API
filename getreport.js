"use strict";

const GoogleAdsAuth = require("./get-auth");
const { FETCH } = require("./data/nodefetch.data");

class GoogleAdsReport {
  constructor(configs) {
    this.configs = configs;
    this.version = "v2";
    this.auth = new GoogleAdsAuth(configs);
  }

  setOauthHeader(accessToken) {
    return {
      "User-Agent": this.configs.userAgent,
      "Content-Type": "application/json",
      charset: "utf-8",
      Accept: "application/json",
      Authorization: `Bearer  ${accessToken}`,
      "developer-token": this.configs.developerToken,
      "login-customer-id": ""
    };
  }

  async getReport(cid, query) {
    console.log("this.auth ::>", this.auth);
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
      const response = await FETCH(endpoint, option);
      const json = await response.json();

      console.log("json ::>", json);
      return json;
    } catch (err) {
      console.log("err ::>", err);
      throw new Error(err.message);
    }
  }

  async getResourceMetadata(type) {
    type = "campaign";
    try {
      const header = this.setOauthHeader('ACCESS_TOKEN');
      const endpoint = `https://googleads.googleapis.com/${this.version}/googleAdsFields/${type}`;
      const option = {
        method: "GET",
        headers: header
      };
      const response = await FETCH(endpoint, option);
      const json = await response.json();
      return json;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = GoogleAdsReport;
