const { setOauthHeader } = require('../domains/setoauthheader.domain')

const { FETCH } = require('./nodefetch.data')

const googleAdsSearch = async (cid, query, accesstoken) => {
  try {
    cid = cid.replace(/-/g, '')
    const header = setOauthHeader(accesstoken)
    const endpoint = `https://googleads.googleapis.com/customers/${cid}/googleAds:search`
    const response = await FETCH(endpoint, {
      method: 'POST',
      body: JSON.stringify({ query: query }),
      headers: header
    })

    const json = await response.json()
    return json
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = { googleAdsSearch: googleAdsSearch }
 