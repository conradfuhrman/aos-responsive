let mix = require('laravel-mix');

mix.js('src/index.js', 'dist/js')
  .setPublicPath('dist');
