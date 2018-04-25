const merge = require('webpack-merge')
const webpack = require('webpack')

const baseConfig = require('./webpack.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  output: {
    filename: './static/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin()
  ]
})
