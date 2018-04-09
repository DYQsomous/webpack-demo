var path = require('path');
var HtmlwebPackagePlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEMP_PATH = path.resolve(APP_PATH, 'templates');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    mobile: path.resolve(APP_PATH, 'mobile.js'),
    vendors: ['jquery', 'moment']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      moment: 'moment'
    }),
    new HtmlwebPackagePlugin ({
      title: 'Hello Word App',
      template: path.resolve(TEMP_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ['app', 'vendors']
    }),
    new HtmlwebPackagePlugin ({
      title: 'Hello Modile App',
      template: path.resolve(TEMP_PATH, 'mobile.html'),
      filename: 'mobile.html',
      chunks: ['mobile', 'vendors']
    })

  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader'}],
        include: APP_PATH
      },
      {
        test: /\.(jpg|png)$/,
        loaders: [{ loader: 'url-loader?limit=40000' }],
        include: APP_PATH
      }
    ]
  }
}
