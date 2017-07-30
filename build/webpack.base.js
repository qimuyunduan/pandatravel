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
const path = require('path');
const webpack = require('webpack');
const srcPath = path.resolve(__dirname, '../src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname,"../src/main.js")
    },
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: 'js/[name].js',
        publicPath: "/"
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.vue$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: srcPath,
                exclude: ["/node_modules/","/assets"],
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: srcPath,
                exclude: ["/node_modules/","/assets"]
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                include: srcPath,
                exclude: ["/node_modules/","/assets"]
            },
            {
                test: /\.html$/,
                loader: 'vue-html-loader',
                include: srcPath,
                exclude: ["/node_modules/","/assets"]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:base64:7].[ext]'
                },
                include: srcPath,
                exclude: ["/node_modules/","/assets"]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].[chunkhash].css',
            allChunks: true,
        }),
    ],

};
