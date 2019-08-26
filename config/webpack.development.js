let merge = require('webpack-merge');
let common = require('./webpack.common.js')
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        progress: true,
        contentBase: './dist',
        open: true,
        hot: true
    },
    devtool: 'source-map'
})