/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/11 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/11 上午11:42
 * @version
 *
 */
/* personal homepage */

const header = resolve => {
    /*eslint-disable no-undef */
    require.ensure(["../components/login_header.vue"], () => {
        resolve(require("../components/login_header.vue"));
    });
};

const main = resolve => {
    /*eslint-disable no-undef */
    require.ensure(["../pages/home.vue"], () => {
        resolve(require("../pages/home.vue"));
    });
};


export default {

    path: "/:name",
    name: "homepage",
    components:{
        topHeader:header,
        main:main
    }
};
