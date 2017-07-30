/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/11 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/11 上午11:38
 * @version
 *
 */


const header = resolve => {
    /*eslint-disable no-undef */
    require.ensure(["../components/unlogin_header.vue"], () => {
        resolve(require("../components/unlogin_header.vue"));
    });
};

const hot = resolve => {
    /*eslint-disable no-undef */
    require.ensure(["../pages/hot.vue"], () => {
        resolve(require("../pages/hot.vue"));
    });
};



export default {
    path: "/latest",
    components:{
        topHeader:header,
        main:hot
    },
    name: "latest"
};
