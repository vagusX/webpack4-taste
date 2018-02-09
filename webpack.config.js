const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              options: {
                name (file) {
                  if (process.env.NODE_ENV === 'development') {
                    return '[path][name].[ext]'
                  }

                  return 'static/media/[name].[hash:8].[ext]'
                },
                outputPath: 'images/',
                publicPath: 'assets/'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
