/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/16 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/16 下午2:42
 * @version
 *
 */


export function replace(route) {
    window.$router.replace(route);
}

export function push(route) {

    window.$router.push(route);
}

export function go(step) {
    if(Number.isInteger(step) && step !== 0){
        window.$router.go(step);
    }else if(parseInt(step) && parseInt(step) !== 0){
        window.$router.go(parseInt(step));
    }
    return false;
}
