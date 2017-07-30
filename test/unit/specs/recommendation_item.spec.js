/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/15 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/15 下午6:33
 * @version
 *
 */
import {createTest,destroyVM} from "../utils";
import recommendation_item from "../../../src/components/recommendation_item.vue";

describe("recommendation_item.vue",()=>{
    let vm;
    afterEach(()=>{
        destroyVM(vm);
    });
    it("测试某元素包含某类",()=>{
        vm=createTest(recommendation_item,true);
        let span = vm.$el.querySelector('span.pull-right');
        expect(span.classList.contains('follow'));
    });
    it("测试元素属性值",()=>{
        vm=createTest(recommendation_item,{gender:1},true);
        let svg = vm.$el.querySelector('.icon-small').querySelector('use');
        expect(svg.getAttribute('xlink:href')).equal('#icon-female');
    });
});
