/*jshint esversion: 6 */

const 
  path = require('path'),
  webpack = require('webpack'),
  App = require('./package.json'),

  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),

  source = path.resolve(__dirname, '_src'),
  public = path.resolve(__dirname, 'www')

;

module.exports = 
{
  // mode: 'development',
  mode: 'production',
  context: path.resolve(__dirname, ''),
  entry: 
    [
      path.join(source, 'app.js')
    ]
  ,
  output: {
    filename: `build_v${App.version}.js`,
    path: public,
    publicPath: '',
    clean: true
  },
  externals: {
    jquery: [
      "window.jQuery", "jQuery", 
      "window.$", "$"
    ]
  },
  resolve: {
    extensions: [
      ".js", ".json", ".sass", "css", ".html"
  ]},
  module: 
  {
    rules:
    [
      // {
      //   test: /\.handlebars$/,
      //   loader: 'handlebars-loader'
      // },
      {
        test: /.(sa|sc|c)ss$/,
        use: 
        [
          MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader'
          },
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
            filename: 'font/[name][ext]'
        }
      },
      // {
      //   test: /\.(webm|mp3)$/i,
      //   type: "asset/resource",
      //   generator: {
      //     filename: 'sound/[name][ext]'
      //   }
      // },
      {
        test: /\.(json)$/,
        type: "asset/source"
      },
    ]
  },
  plugins: [
    new webpack.ProgressPlugin({
      percentBy: 'entries'
    }),
    new webpack.ProvidePlugin({
      // license: path.join(source, '.licence.json')
    }),
    new MiniCssExtractPlugin({ filename:`build_v${App.version}.css` }),
    new HtmlWebpackPlugin({
      title: `— ${App.name} ( v${App.version} ) —`,
      template: path.join(source, "html"),
      filename: 'index.html',
      inject: true
    }),
  ],
  stats: {
    builtAt: true,
    colors: true,
    timings: true
  },

  optimization: 
  {
    minimize: true,
    minimizer: 
    [
        `...`,
        new TerserPlugin(),
        new CssMinimizerPlugin()
    ]
  }
};