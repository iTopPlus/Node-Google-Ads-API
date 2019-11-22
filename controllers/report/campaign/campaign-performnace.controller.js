'use strict';

const { ReportHandler } = require('../../controllerhandler')
const { validateReportInput } = require('../../../schemas/validate-report-input')
const { campaignValidateResponse } = require('../../../schemas/report/campaign/campaign-response.schema')

const { Campaign } = require('../../../services/report/campaign/')

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

const campaignHandler = async (credential, version) => {
    var validRequest = validateReportInput({ credential, version })
    var response = await Campaign(validRequest)
    return response
}
module.exports = {
    Campaign: ReportHandler({
        handler: campaignHandler,
        validator: campaignValidateResponse
    }),
    // CampaignAudienceView:controllerHandler({})
    // CampaignBidModifier:controllerHandler({})
    // CampaignBudget:controllerHandler({})
}
