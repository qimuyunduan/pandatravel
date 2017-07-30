/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/11 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/11 下午2:06
 * @version
 *
 */

export default {
    path: "/404",
    components: {
        main: resolve => {
            /*eslint-disable no-undef*/
            require.ensure(["../pages/not_found.vue"], () => {
                resolve(require("../pages/not_found.vue"));
            });
        }
    },
    name:"404"
};
