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
        test: /\.(json)$/,
        type: "asset/source"
      }
    ]
  }
});
mix.setResourceRoot(
      path.resolve(__dirname, 'node_modules')
    );
mix.setPublicPath('assets');
mix.js(
  '_src/index.js', `js`
  );