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

export default {
    path: "/about",
    components:{
        main:resolve => {
            /*eslint-disable no-undef*/
            require.ensure(["../pages/about.vue"], () => {
                resolve(require("../pages/about.vue"));
            });
        }
    },
    name:"about"
};
