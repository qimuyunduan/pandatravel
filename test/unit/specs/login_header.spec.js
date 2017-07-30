/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/15 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/15 下午6:27
 * @version
 *
 */
import {createTest,destroyVM} from "../utils";
import login_header from "../../../src/components/login_header.vue";
import db from "../../data/db.json";
import promise from "bluebird";
import axios from "axios";
describe("login_header.vue",()=>{
    let vm;
    afterEach(()=>{
        destroyVM(vm);
    });
    it("测试替代vue的getInfo方法",()=>{


        let stub = sinon.stub(axios,'get');
        stub.withArgs('/api/qimu/info').callsFake(function () {
            return promise.resolve({data:db.info});
        });
        vm=createTest(login_header,true);
        vm.$nextTick(()=>{
            expect(vm.selfInfo).equal(db.info);
        });
        stub.restore();
    });
});
