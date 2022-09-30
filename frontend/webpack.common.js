const path = require("path");

const loaders = [];
loaders.push({
  test: /\.jsx?$/,
  exclude: "/node_modules",
  use: "babel-loader",
});

loaders.push({
  test: /\.(ts|tsx)$/,
  loader: "ts-loader",
  exclude: /node_modules/,
  options: {
    configFile: "tsconfig.client.json",
  },
});

module.exports = {
  entry: {
    app: "./src/app.tsx",
  },
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "main.bundle.js",
    path: path.resolve(path.resolve(), "../dist"),
  },
};
