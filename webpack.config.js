var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  // エントリーポイントとなるJSファイル
  entry: './src/index.jsx',
  // 出力設定
  output: {
    // 基本的な出力設定
    path: path.join(__dirname, 'public'),
    //publicPath: '/public/',
    filename: 'bundle.js',

  },
  // 使用モジュール設定
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        loader: 'babel-loader',
        exclude: "/node_modules/"
      }
    ]
  },
  devServer: {
    contentBase: 'public',
    port: 3000
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'

  module.exports.plugins = (module.exports.plugins || []).concat([
    // jsファイル内で　process.env.NODE_ENV === 'production'　で分岐させるために変数を定義
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ])
}
