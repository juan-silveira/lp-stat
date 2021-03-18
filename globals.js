const { resolve } = require('path')

// Use the following variables in src/views and src/js. They are made available in
// build-tools/ejs-to-html.js in the 'transformer' function and in webpcak.config.js

module.exports.PP = ''
module.exports.DEV_PATH = __dirname
module.exports.SITE_TITLE = 'LP STAT'
module.exports.SITE_NAME = 'lp-stat.web.app'
module.exports.DESCRIPTION = 'Retrieve a complete information about farms in a DeFi protocol'
module.exports.SITE_URL = 'https://lap-stat.web.app'
module.exports.DEVELOPER_NAME = 'Juan Silveira'
module.exports.DEVELOPER_URL = 'https://github.com/juan-silveira'
    // module.exports.GOOGLE_ANALYTICS_ID = ''

module.exports.Dir = {
    dist: resolve(__dirname, 'dist'),
    src: resolve(__dirname, 'src'),
    css: resolve(__dirname, 'src', 'css'),
    js: resolve(__dirname, 'src', 'js'),
    utils: resolve(__dirname, 'src', 'js', 'utils'),
    static: resolve(__dirname, 'src', 'static'),
    favicons: resolve(__dirname, 'src', 'favicons'),
    images: resolve(__dirname, 'src', 'static', 'images'),
    videos: resolve(__dirname, 'src', 'static', 'videos'),
    vendor: resolve(__dirname, 'src', 'vendor'),
    views: resolve(__dirname, 'src', 'views'),
    pages: resolve(__dirname, 'src', 'views', 'pages'),
    partials: resolve(__dirname, 'src', 'views', 'partials')
}