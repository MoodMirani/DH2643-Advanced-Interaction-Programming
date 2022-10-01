const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(path.resolve(), "../dist"),
    },
    port: 3000,
    http2: true,
    https: {
      key: fs.readFileSync("../backend/cert/localhost-key.pem"),
      cert: fs.readFileSync("../backend/cert/localhost.pem"),
    },
  },
});
