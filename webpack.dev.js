const { merge } = require("webpack-merge");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: `.env.development` });
dotenv.config({ path: `.env.development.local`, override: true });

// Loading is sequentials so this must be after dotenv
// so that process.env is populated
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    client: {
      logging: "info",
      overlay: true,
      reconnect: 2,
    },

    historyApiFallback: true,

    compress: true,
    port: 5050,
    hot: true,
  },
});
