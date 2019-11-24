const Report = require("../controllers/report");

const connectionTransportor = (accessToken, config) => {
  console.log("accessToken ::>", accessToken);
  console.log("config ::>", config);

  return {
    Report
  };
};

module.exports = { connectionTransportor };
