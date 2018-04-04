var path = require('path');
var HtmlwebPackagePlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bunld.js'
  },
  plugins: [
    new HtmlwebPackagePlugin ({
      title: 'Hello Word App'
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
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
