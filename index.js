module.exports = {
  GoogleAdsAuth: require("./get-auth"),
  GoogleAdsReport: require("./getreport"),

  createConnection: require("./controllers/connection.controller")
    .createConnection
};
