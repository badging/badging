const { merge } = require("webpack-merge");

const dotenv = require("dotenv");
dotenv.config({ path: `.env.production` });
dotenv.config({ path: `.env.production.local`, override: true });

// Loading is sequentials so this must be after dotenv
// so that process.env is populated
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
});
