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
import notification_item from "../../../src/components/notification_item.vue";

describe("notification_item.vue",()=>{
    let vm;
    afterEach(()=>{
        destroyVM(vm);
    });
    it("测试notificationType分支",()=>{
        vm = createTest(notification_item,{personName:'this is a test',notificationType:1},false);
        expect(vm.notificationContent).equal(vm.personName+'评论了你');
        vm.notificationType = 2;
        vm.$nextTick(()=>{
            expect(vm.notificationContent).equal(vm.personName + '给你点了赞');
        })
    });

});
