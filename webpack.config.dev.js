const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
