/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/5 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/5 下午3:34
 * @version
 *
 */

const webpack = require('webpack');
const path  = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const htmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.resolve(__dirname,'../dist');


module.exports = merge(baseWebpackConfig, {

    output: {
        path: distPath,
        publicPath:'./',
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),

        new htmlWebpackPlugin({
            filename:'index.html',
            template: path.resolve(__dirname,'../index.html'),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),

    ],
    devtool:"#cheap-module-source-map"
});
