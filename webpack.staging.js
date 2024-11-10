const { merge } = require("webpack-merge");

const dotenv = require("dotenv");
dotenv.config({ path: `.env.staging` });
dotenv.config({ path: `.env.staging.local`, override: true });

// Loading is sequentials so this must be after dotenv
// so that process.env is populated
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
});
