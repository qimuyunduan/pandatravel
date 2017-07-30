/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/16 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/16 下午9:07
 * @version
 *
 */


const topHeader = resolve => {
    /*eslint-disable no-undef */
    require.ensure(["../components/unlogin_header.vue"], () => {
        resolve(require("../components/unlogin_header.vue"));
    });
};

const main = resolve => {
    /*eslint-disable no-undef */
    require.ensure(["../components/main_index.vue"], () => {
        resolve(require("../components/main_index.vue"));
    });
};

const bottomFooter = resolve => {
    /*eslint-disable no-undef */
    require.ensure(["../components/footer.vue"], () => {
        resolve(require("../components/footer.vue"));
    });
};



export default {
    path: "/",
    components:{ 
        topHeader,
        main,
        bottomFooter
    },
    name: "index"
};
