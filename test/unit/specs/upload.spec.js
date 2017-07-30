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
import {createTest,destroyVM} from "../utils";
import upload from "../../../src/components/upload.vue";

describe("upload.vue",()=>{
    let vm;
    afterEach(()=>{
        destroyVM(vm);
    });
    it("测试元素内容",()=>{
        vm=createTest(upload,true);
        let span = vm.$el.querySelector('.pull-right');
        expect(span.innerText).equal(vm.cancel);
    });
    it("测试元素属性值",()=>{
        vm=createTest(upload,true);
        let footer_input = vm.$el.querySelector('.uploadFooter').querySelector("input");
        expect(footer_input.getAttribute("placeholder")).to.equal('顺便说一句话吧');
        expect(footer_input.getAttribute('maxLength')).equal('30');
    });
    it("测试cancelUpload函数",()=>{
        vm=createTest(upload,true);
        let cancelSpy = sinon.spy(vm,"cancelUpload");
        vm.$el.querySelector('.pull-right').click();
        expect(cancelSpy).to.have.been.called;
        expect(cancelSpy).to.have.been.calledOnce;
        cancelSpy.restore();
    });
});
