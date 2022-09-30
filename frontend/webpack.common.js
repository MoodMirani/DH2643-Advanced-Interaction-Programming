import path from "path";

const loaders = [];
loaders.push({
  test: /\.jsx?$/,
  exclude: "/node_modules",
  use: "babel-loader",
});

loaders.push({
  test: /\.(ts|tsx)$/,
  use: "ts-loader",
  exclude: /node_modules/,
});

export default {
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
