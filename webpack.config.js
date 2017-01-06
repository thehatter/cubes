var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    path: './bin',
    filename: "bundle.js"
  },
  module: {
    loaders: [
        // Extract css files
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
