/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/15 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/15 下午6:25
 * @version
 *
 */

import {createTest,destroyVM} from "../utils";
import footer from "../../../src/components/footer.vue";

describe('footer.vue',()=>{
    let vm;
    afterEach(()=>{
        destroyVM(vm);
    });
    it("测试Vue的data值",()=>{
        vm=createTest(footer,true);
        const lis = vm.$el.querySelectorAll('li');
        expect(lis[0].innerText).equal(vm.firstPartial);
        expect(lis[lis.length-1].innerText).equal(vm.finalPartial);
        expect(lis[lis.length-1].classList.contains('col-lg-2'));
    });
});
