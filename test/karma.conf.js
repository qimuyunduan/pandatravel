/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/11 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/11 下午4:48
 * @version
 *
 */

const karma_webpack = require("../build/karma-webpack-config");
const path = require('path');


module.exports = function(config) {
    config.set({

        basePath: __dirname,
        plugins: [
            'karma-coverage-istanbul-reporter',
            'karma-mocha',
            'karma-chai',
            'karma-sinon-chai',
            'karma-webpack',
            'karma-spec-reporter',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            // 'karma-phantomjs-launcher'
        ],
        frameworks: ['mocha','sinon-chai'],
        files: ['unit/index.js'],
        exclude: ['/assets'],
        preprocessors: {
            './unit/index.js': ['webpack','sourcemap']
        },
        reporters: ['spec', 'coverage-istanbul'],
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text-summary'],
            dir: path.resolve(__dirname,'./coverage'),
            fixWebpackSourcePaths: true,
            'report-config': {
                html: {
                    subdir: 'html'
                }
            }
        },
        port: 9999,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        concurrency: Infinity,
        webpackMiddleware: {
            noInfo: true
        },
        webpack: karma_webpack
    })
};
