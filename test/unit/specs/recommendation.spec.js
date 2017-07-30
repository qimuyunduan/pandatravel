/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/15 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/15 下午6:30
 * @version
 *
 */
import {createTest,destroyVM} from "../utils";
import recommendation from "../../../src/components/recommendation.vue";
import axios from "axios";
import db from "../../data/db.json";
import promise from "bluebird";
describe("recommendation.vue",()=>{

    let vm;
    afterEach(()=>{
        destroyVM(vm);
    });
    it("测试模拟axios的get方法的stub",()=>{

        let stub = sinon.stub(axios,'get');
        stub.withArgs('/api/recommendations').callsFake(function () {
            return promise.resolve({data:db.recommendations});
        });
        vm = createTest(recommendation,true);
        vm.$nextTick(()=>{
            expect(vm.recommendations.length).equal(5);
        });
        stub.restore();
    });
});
