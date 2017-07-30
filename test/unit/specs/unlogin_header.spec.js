/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/12 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/12 下午3:09
 * @version
 *
 */


import { destroyVM, createTest } from '../utils';
import unloginHeader from '../../../src/components/unlogin_header.vue';

describe('unloginHeader.vue', () => {
    let vm;

    afterEach(() => {
        destroyVM(vm);
    });

    it('测试获取元素内容', () => {

        vm = createTest(unloginHeader, true);
        expect(vm.$el.style.backgroundColor).equal('transparent');
        expect(vm.$el.style.position).equal('fixed')
    });

    it('测试获取Vue对象中数据', () => {
        vm = createTest(unloginHeader, true);
        const lis = vm.$el.querySelectorAll('li');
        expect(lis.length).equal(3);
        const fisli_span=lis[0].querySelectorAll('span');
        expect(vm.firstOption).equal(fisli_span[fisli_span.length-1].innerHTML);
        expect(vm.secondOption).equal('最新');
        expect(vm.headerFirstIcon).equal('#icon-homepage-enabled');
    });

    it('测试获取element中是否存在某个class', () => {
        vm = createTest(unloginHeader, true);
        const lis = vm.$el.querySelectorAll('li');
        expect(lis[lis.length-1].classList.contains('pull-right')).to.be.true;
    });
    it('测试按钮点击事件',()=>{
        vm=createTest(unloginHeader,true);
        const li_span = vm.$el.querySelectorAll('li')[1].querySelector('span');
        li_span.click();
        vm.$nextTick(()=>{
            expect(vm.headerSecondIcon).equal("#icon-hot-enabled");
        })
    });
});
