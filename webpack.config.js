var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/index.dev',
  output: {
    path: __dirname,
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: /\.js?$/,
        query: {
          presets: ['es2015'],
        }
      }
    ]
  }
};
