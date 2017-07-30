/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/15 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/15 下午6:28
 * @version
 *
 */
import {createTest,destroyVM} from "../utils";
import main_index from "../../../src/components/main_index.vue";

describe("main_index.vue",()=>{
    let vm;
    afterEach(()=>{
        destroyVM(vm);
    });
    it("测试vue实例的值",()=>{
        vm=createTest(main_index,true);
        expect(vm.title).to.equal('SHARE YOUR DREAM');
    });
    it("测试元素属性的值",()=>{
        vm = createTest(main_index,true);
        expect(vm.$el.querySelector('.icon').querySelector('use').getAttribute('xlink:href')).equal('#icon-chat');
    });
});
