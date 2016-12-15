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
        // Optionally extract less files
        // or any other compile-to-css language
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }
        // You could also use other loaders the same way. I. e. the autoprefixer-loader
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
