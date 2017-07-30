/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/11 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/11 下午5:28
 * @version
 *
 */
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');
// require 所有的测试文件 *.spec.js
const  testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require 需要统计覆盖率的源码文件
const srcContext = require.context('../../src', true, /\.\/(?!(assets\/js\/iconfont)(\.js)?$)/);

srcContext.keys().forEach(srcContext);

