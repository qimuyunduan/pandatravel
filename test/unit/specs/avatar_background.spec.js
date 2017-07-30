/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/7/15 .
 * Revise person：qimuyunduan
 * Revise Time：2017/7/15 下午6:24
 * @version
 *
 */
import { destroyVM, createTest } from '../utils';
import avatar_background from '../../../src/components/avatar_background.vue';

describe('avatar_background.vue', () => {
    let vm;

    afterEach(() => {
        destroyVM(vm);
    });

    it('测试vue对象的props值',()=>{
        vm = createTest(avatar_background,{avatarBg:'img/care.jpg'},true);
        expect(vm.avatarBg).equal('img/care.jpg');
        const img = vm.$el.querySelector('img');
        expect(vm.avatarBg).equal(img.getAttribute('src'));
    });

});
