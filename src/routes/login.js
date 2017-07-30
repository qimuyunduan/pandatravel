/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/11 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/11 上午11:37
 * @version
 *
 */

export default {
    path: "/login",
    components:{
        main:resolve => {
            /*eslint-disable no-undef*/
            require.ensure(["../pages/login.vue"], () => {
                resolve(require("../pages/login.vue"));
            });
        }
    },
    name: "login"
};
