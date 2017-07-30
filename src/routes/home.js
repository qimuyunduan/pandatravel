/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/11 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/11 上午11:39
 * @version
 *
 */
/* website index */

export default {
    path: "/",
    components:{
        main:resolve => {
            /*eslint-disable no-undef */
            require.ensure(["../components/loader.vue"], () => {
                resolve(require("../components/loader.vue"));
            });
        }
    },
    name:"loader"
};
