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
import latest_post from "../../../src/components/latest_post.vue";

describe("latest_post.vue",()=>{
    let vm;
    afterEach(()=>{
        destroyVM(vm);
    });
    it("测试包含某类",()=>{
        vm = createTest(latest_post,true);
        expect(vm.$el.classList.contains('post'));
    });

});
