const { Campaign } = require('./campaign')
module.exports = { Campaign: Campaign }


const conn = GoogleAdsConnection()

conn.Campaign()