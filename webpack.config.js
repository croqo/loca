/*jshint esversion: 6 */

const 
  path = require('path'),
  webpack = require('webpack'),

  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
  // FTPUploadWebpackPlugin = require('ftp-upload-webpack-plugin'),

  source = path.resolve(__dirname, '_src'),
  public = path.resolve(__dirname, '_build')
;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = 
{
  mode: 'development',
  context: path.resolve(__dirname, ''),
  entry: [
    path.join(source, 'app.js'),
    path.join(source, 'style.sass')
  ],

  output: {
    path: public,
    publicPath: ''
  },
  module: 
  {
    rules:
    [
      {
        test: /.(sa|sc|c)ss$/,
        use: 
        [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jp?g|gif)$/i,
        type: "asset/resource",
        generator: {
            filename: 'image/[name][ext]'
        }
      },
      {
        test: /\.(ttf|eot|woff(2)?|svg)$/,
        type: "asset/resource",
        generator: {
            filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(webm|mp3)$/i,
        type: "asset/resource",
        generator: {
          filename: 'sound/[name][ext]'
        }
      },
      {
        test: /\.(json)$/i,
        type: "asset/source"
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename:'style.css' }),
    new HtmlWebpackPlugin({
              template: path.join(source, 'index.html')
            }),
  ],

  watchOptions: 
  {
    // aggregateTimeout: 600,
    poll: 1200
  },    
  // optimization: 
  // {
  //   minimize: true,
  //   minimizer: 
  //   [
  //       `...`,
  //       new TerserPlugin(),
  //       new CssMinimizerPlugin()
  //   ]
  // }
};