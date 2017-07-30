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
import info from "../../../src/components/info.vue";

describe('info.vue',() => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });
    it("测试元素的属性值",()=>{
        vm = createTest(info,true);
        let divs = vm.$el.querySelectorAll('div');
        let lastDiv = divs[divs.length-1];
        let span = lastDiv.querySelectorAll('span');
        let useEl = span[0].querySelector('use');
        expect(useEl.getAttribute('xlink:href')).equal('#icon-sure');
    });
    it("测试icon click",()=>{
        vm = createTest(info,true);
        let icons = vm.$el.querySelectorAll('.icon');
        let lastSpan = icons[icons.length-1].parentNode;
        let spy = sinon.spy(vm,"close");
        lastSpan.click();
        expect(spy).to.have.been.calledOnce;
        spy.restore();

    });
});
