var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlwebPackagePlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
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
    }),
    new ExtractTextPlugin('bundle.[hash].css'),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: APP_PATH,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpg|png)$/,
        loaders: [{ loader: 'url-loader?limit=40000' }],
        include: APP_PATH
      }
    ]
  }
}
