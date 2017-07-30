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
import follower from "../../../src/components/follower.vue";

describe("follower.vue",() => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });
    it("测试vue的data值",() => {
        vm=createTest(follower,true);
        const lastP = vm.$el.querySelectorAll('p')[1];
        expect(lastP.innerText).to.equal(vm.cancelFollow);
        expect(vm.cancelFollow).to.equal('取消关注');
    });
    it("测试某元素是否含有某类",() => {
        vm = createTest(follower,true);
        const fisImg = vm.$el.querySelector('img');
        expect(fisImg.classList.contains('miniBackground'));
    });
});
