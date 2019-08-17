const path = require("path");

module.exports = {
  mode: process.NODE_ENV || "development",
  entry: "./src",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.node$/,
        loader: "native-ext-loader",
        options: {
          rewritePath: "./dist"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
