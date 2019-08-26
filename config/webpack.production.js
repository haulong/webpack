let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
let UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
let merge = require('webpack-merge');
let common = require('./webpack.common.js')
module.exports =  merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ],  
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new UglifyjsWebpackPlugin({
               sourceMap: true 
            })
        ]
    }
})