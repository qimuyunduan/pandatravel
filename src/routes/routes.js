/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/9 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/9 下午5:00
 * @version
 *
 */

import about from "./about";
// import launch from "./home";
import homepage from "./homepage";
import latest from "./hot";
import notFound from "./not_found";
import login from "./login";
import main from "./main";
import index from "./index";

const notFoundRedirect = {
    path: '*',
    redirect: '404'
};
const routes = [index,about,main,latest,login,homepage,notFound,notFoundRedirect];

export default routes;
