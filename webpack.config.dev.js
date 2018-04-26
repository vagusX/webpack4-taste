const merge = require('webpack-merge')
const path = require('path')
const threadLoader = require('thread-loader')

const baseConfig = require('./webpack.config')

threadLoader.warmup({}, [
  'babel-loader',
  '@babel/preset-env'
])

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, './.cache')
            }
          },
          {
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus().length
            }
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
  ]
})
