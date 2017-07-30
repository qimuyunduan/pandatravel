/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/15 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/15 下午6:26
 * @version
 *
 */
import {createTest,destroyVM} from "../utils";
import login_form from "../../../src/components/login_form.vue";

describe("login_form.vue",() => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });
    it("测试vue的data值",() => {
        vm=createTest(login_form,true);

        expect(vm.loginName).to.equal('');
        expect(vm.firstNabValue).to.equal('登录');
        expect(vm.loginActived).have.to.be.true;
    });
    it("测试某元素属性值",() => {
        vm = createTest(login_form,true);
        const fisImg = vm.$el.querySelector('.form-header .pull-left img');
        expect(fisImg.getAttribute('alt')).to.equal('logo');
    });
    it("测试点击click",()=>{
        vm = createTest(login_form,true);
        const spans = vm.$el.querySelector('.pull-right').querySelectorAll('span');
        spans[0].click();
        vm.$nextTick(()=>{
            expect(vm.loginActived).to.be.true;
            const div = vm.$el.querySelector('.form-body').querySelector('div');
            expect(getComputedStyle(div,null).display).equal('none');
            expect(vm.registerActived).equal(false);
            expect(vm.fPPhaseOneActived).equal(false);
            expect(vm.fPPhaseTwoActived).equal(false);
        });
        spans[1].click();
        vm.$nextTick(()=>{
            expect(vm.loginActived).to.be.false;
            expect(vm.registerActived).equal(true);
            expect(vm.fPPhaseOneActived).equal(false);
            expect(vm.fPPhaseTwoActived).equal(false);
        });
    });
});
