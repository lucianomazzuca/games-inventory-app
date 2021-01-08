// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      purgecss({
        content: [
          './views/**/*.ejs',
          './public/**/javascripts/*.js'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:]+/g) || []
      })
    ]
  }
