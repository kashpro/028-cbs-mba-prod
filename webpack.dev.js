const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// console.log(process.env);
module.exports = merge(common, {
  /*==============================================================================*/
  mode: "development",
  /*==============================================================================*/
  output: {
    publicPath: process.env.NODE_PUBLIC_PATH, // при офлайне "./", для дев-сервера (для несуществующих маршрутов) "/"
  },
  /*==============================================================================*/
  devtool: "source-map",
  /*==============================================================================*/
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    overlay: true,
    index: 'index.html',
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  /*==============================================================================*/
});