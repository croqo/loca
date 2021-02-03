const 
  path = require('path'),
  webpack = require('webpack'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  source = path.resolve(__dirname, '_src'),
  public = path.resolve(__dirname, '_build')
;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    path.join(source, 'app.js'),
    path.join(source, 'style.sass')
  ],

  output: {
    path: public
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    // new MiniCssExtractPlugin({ filename:'style.css' }),
    new HtmlWebpackPlugin({
              template: path.join(source, 'index.html')
            })
  ],

  module: {
    rules:
    [
      // {
      //   test: /\.(js|jsx)$/,
      //   include: [path.resolve(__dirname, '_src')],
      //   loader: 'babel-loader'
      // }, 
      {
        test: /.(sa|sc|c)ss$/,

        use: [
          // {
          // loader: MiniCssExtractPlugin.loader
          // },
         {
          loader: "css-loader",

          options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader",

          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(png|jpg|jp?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
            filename: '[file]'
        }
      },
      {
        test: /\.(ttf|eot|woff(2)?|svg)$/,
        type: "asset/resource",
        generator: {
            filename: 'fonts/[name][ext]'
        }
      }
    ]
  }
}