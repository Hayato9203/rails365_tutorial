const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    // 开发服务器dev server
    devServer: {
        contentBase: './dist',
        compress: true
    },
    plugins: []
})