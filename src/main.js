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
import VueRouter from "vue-router";
import { sync } from "vuex-router-sync";
import progressBar from "nprogress";
import "normalize.css";
import "nprogress/nprogress.css";
import "./assets/css/root.css";
import "./assets/js/iconfont";

import routes from "./routes/routes";
import store from "./store/index";

Vue.use(VueRouter);
// Object.defineProperty(Vue.prototype, "$ajax", { value: axios });
progressBar.configure({
    trickleSpeed: 10,
    showSpinner: false,
});

const router = new VueRouter({
    mode:"history",
    routes
});

window.$router = router;

router.beforeEach((to,from,next) => {

    progressBar.start();
    next();
    setTimeout(function () {
        progressBar.done();
        progressBar.remove();
    },2000);
});

/* debug mode */
Vue.config.debug = true;


sync(store, router);


new Vue({
    router,
    store,
}).$mount("#app");

