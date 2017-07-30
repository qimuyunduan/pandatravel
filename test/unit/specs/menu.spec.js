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
import menu from "../../../src/components/menu.vue";

describe("menu.vue",()=>{
    let vm;
    afterEach(()=>{
        destroyVM(vm);
    });

    it("测试vue实例data值",()=>{
        vm = createTest(menu,true);
        expect(vm.fisSelection).equal('个人主页');
        expect(vm.$el.querySelectorAll('span')[1].innerText).equal(vm.secSelection);
    });

    it("测试vue实例的click函数",()=>{
        vm=createTest(menu,true);
        let spy = sinon.spy(vm,'showInfo');
        vm.$el.querySelectorAll('span')[1].click();
        expect(spy.calledOnce);
    });

});
