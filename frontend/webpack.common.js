const path = require("path");

const loaders = [];
loaders.push({
    test: /\.jsx?$/,
    exclude: '/node_modules',
    use: 'babel-loader'
})

loaders.push({
  test: /\.(ts|tsx)$/,
  loader: "ts-loader",
  exclude: /node_modules/,
  options: {
    configFile: "tsconfig.client.json",
  },
})

loaders.push({
<<<<<<< Updated upstream
  test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
})


=======
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
})
>>>>>>> Stashed changes
;

module.exports = {
  entry: {
    app: "./src/App.tsx",
  },
  module: {
    rules: loaders,
  },
  resolve: {
<<<<<<< Updated upstream
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css", ".scss"],
=======
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
>>>>>>> Stashed changes
  },
  output: {
    filename: "main.bundle.js",
    path: path.resolve(path.resolve(), "../dist"),
  },
};
