const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
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
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack'
          }
        ]
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ESLintPlugin()],
  devServer: {
    static: path.resolve('./public'),
    hot: true
  }
}
