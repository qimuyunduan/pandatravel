/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/12 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/12 下午10:01
 * @version
 *
 */

const header = resolve => {
    /*eslint-disable no-undef */
    require.ensure(["../components/login_header.vue"], () => {
        resolve(require("../components/login_header.vue"));
    });
};

const main = resolve => {
    /*eslint-disable no-undef */
    require.ensure(["../pages/main.vue"], () => {
        resolve(require("../pages/main.vue"));
    });
};
export default {
    path: "/main",
    components:{
        topHeader:header,
        main:main
    },
    name: "main"
};
