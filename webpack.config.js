var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './src/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-1']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};