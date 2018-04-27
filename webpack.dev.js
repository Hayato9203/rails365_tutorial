const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    // 开发服务器dev server
    devServer: {
        contentBase: './dist'
    }
})