const path = require('path');

module.exports = {
    publicPath: '/vue-calculator/',
    outputDir: path.resolve(__dirname, 'docs'),
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'Calculator';
            return args;
        })
    }
};