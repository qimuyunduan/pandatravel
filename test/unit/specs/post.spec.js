/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/15 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/15 下午6:29
 * @version
 *
 */
import {createVue,destroyVM} from "../utils";
import post from "../../../src/components/post.vue";

describe('post.vue',()=>{
    let vm;
    afterEach(()=>{
        destroyVM(vm);
    });
    it("测试vue实例的属性",()=>{
        vm=createVue(post,false);
        vm.isLove = 1;
        vm.$nextTick(()=>{
            expect(vm.iconLove).equal('#icon-love-enabled');
        });
    });
});
