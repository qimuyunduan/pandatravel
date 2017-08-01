/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/12 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/12 上午11:08
 * @version
 *
 */

const webpack = require('webpack');
const path = require('path');
const srcPath = path.resolve(__dirname, '../src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: '#inline-source-map',
    output: {
        path: __dirname + '../lib',
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: ["/node_modules/","/assets"],
                include:srcPath
            },
            {
                test: /\.(js)$/,
                loader: 'istanbul-instrumenter-loader',
                exclude: ["/node_modules/","/assets"],
                include: srcPath,
                enforce: 'post',
                options: {
                    esModules: true
                }
            },
            // {
            //     test: /\.(js|vue)$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/,
            //     include: /src|packages/,
            //     enforce: 'pre',
            //     options: {
            //         eslint: {
            //             configFile: '../.eslintrc.json'
            //         }
            //     }
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
                        }),
                        preLoaders: {
                            js: 'istanbul-instrumenter-loader?esModules=true'
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|jpeg)(\?t=\d+)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:base64:7].[ext]'
                },
                include: srcPath,
                exclude: ["/node_modules/","/assets"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    devServer: {
        stats: "errors-only"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new ExtractTextPlugin({
        filename: 'css/[name].[chunkhash].css',
        allChunks: true,
        })
    ]

};
