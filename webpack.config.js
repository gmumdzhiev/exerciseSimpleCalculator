/* eslint-env node */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    publicPath: ASSET_PATH,
  },

  plugins: [
    // Generates default index.html
    new HtmlWebpackPlugin({
      title: 'crel-redux',
      template: 'src/index.ejs',
    })
  ],

  module: {
    rules: [
      // allows us to import css files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },

  // these settings are used by webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  }
}