/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/5/31 .
 * Revise person：qimuyunduan
 * Revise Time：2017/5/31 上午10:50
 * @version
 *
 */

import Vue from "vue/dist/vue";
import Vuex from "vuex";

import state from "./states";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    /* eslint-disable */
    // strict: process.env.NODE_ENV !== "production"
});
