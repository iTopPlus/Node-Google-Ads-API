const { googleAdsSearch } = require('../../../data/googleadssearch.data')

const Campaign = async (cid, fields, filters, isLegacy, accessToken) => {
    if (!isLegacy) {
        try {
            const query = fields
            return await googleAdsSearch(cid, query, accessToken)
        } catch (err) {
            throw new Error(err)
        }
    } else {
        // return 'LEGACY MODE '
        throw new Error('LEGACY MODE NOT READY YET')
    }
}

module.exports = { Campaign: Campaign }