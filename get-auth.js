"use strict";

const { OAuth2Client } = require("google-auth-library");

class GoogleAdsAuth {
  /**
 * @param {object} configs 
 * @property {string} developerToken
 * @property {string} userAgent
 * @property {string} clientId
 * @property {string} clientSecret
 * @property {string} refreshToken
 * @property {string} loginCustomerId
 */
  constructor(configs) {
    this.configs = configs;

    this.client = this.getOauth2Client(
      this.configs.clientId,
      this.configs.clientSecret
    );
    this.setRefreshToken(this.configs.refreshToken);
    this.accessToken = this.getAccessToken()
  }

  getOauth2Client(clientId, clientSecret) {
    return new OAuth2Client({
      clientId,
      clientSecret
    });
  }

  setRefreshToken(refreshToken) {
    const credentials = {
      refresh_token: refreshToken
    };
    this.client.setCredentials(credentials);
  }

  async getAccessToken() {
    try {
      const { token } = await this.client.getAccessToken();
      return token;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = GoogleAdsAuth;
