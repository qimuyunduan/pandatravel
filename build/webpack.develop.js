
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const htmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const friendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseWebpackConfig, {

    devtool: '#cheap-module-eval-source-map',
    devServer:{
        historyApiFallback: true,
        inline: true,
        contentBase: path.resolve(__dirname,"../dist"),
        port: 3000,
        stats: { colors: true },
        hot:true,
        proxy: {
            '/api/*':{
                // target: 'http://www.pandatravel.club:4000',
                target:'http://localhost:4000',
                pathRewrite: {"^/api" : ""},
                // changeOrigin:true,
                secure: false
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new optimizeCssAssetsPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'../index.html'),
            inject: true
        }),
        new friendlyErrorsPlugin(),

        new OpenBrowserPlugin({ url: 'http://localhost:3000/' })
    ]
});

