const webpack = require('webpack')
const express = require('express')

const webpackConf = require('./webpack.config.dev')

const compiler = webpack(webpackConf)

const app = express()

const port = Number(process.env.PORT) || 8010

require('webpack-hot-client')(compiler, {
  port: port + 10
})

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConf.output.publicPath,
  noInfo: true,
  quiet: true,
  stats: {
    colors: true,
    modules: false
  }
}))

app.listen(port, () => console.log('App listening on port ', port))
