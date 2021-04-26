const 
    mix = require('laravel-mix'), 
    path = require('path'), 
    package = require('./package.json')
;
mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.(webm|mp3)$/i,
        type: "asset",
        generator: {
          filename: 'sound/[name][ext]'
        }
      },
      {
        test: /\.(png|jpg|jp?g|gif)$/i,
        type: "asset",
        generator: {
            filename: 'images/[path][name][ext]'
        }
      },
      {
        test: /\.(ttf|eot|woff(2)?|svg)$/,
        type: "asset",
        generator: {
            filename: 'fonts/[path][name][ext]'
        }
      },
      {
        test: /\.(json)$/,
        type: "asset/source"
      }
    ]
  },
  stats: {
    children: true
  }
});
mix.setResourceRoot(
      path.resolve(__dirname, 'node_modules')
    );
mix.setPublicPath('assets');


mix.js(
    '_src/index.js', `js`
  );

mix.sass(
    '_src/index.sass', 'css'
  );
mix.combine('_src/css/*.css', 'style.css');