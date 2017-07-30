/**
 *
 * ProjectName：pandatravel
 * Description：
 * Created by qimuyunduan on 2017/6/27 .
 * Revise person：qimuyunduan
 * Revise Time：2017/6/27 上午10:06
 * @version
 *
 */
import axios from "axios";

const host = "http://www.pandatravel.com:4000",prefix = "/api";

const Api = {
    /**
     * @description user interface for login
     * @param userName eg:cellphone || email
     * @param password
     */
    login(userName,password) {

    },
    /**
     * @description interface for register
     * @param userName
     * @param password
     * @param code eg:smsCode
     */
    register(userName,password,code){

    },
    /**
     * @description get user information
     * @param userId
     * @returns {AxiosPromise}
     */
    getInfo(userId) {
        return axios.get(`${host}${prefix}/${userId}/info`);
    },
    /**
     * @description get notifications  of userId
     * @param userId
     * @returns {AxiosPromise}
     */
    getNotifications(userId) {
        return axios.get(`${host}${prefix}/${userId}/notifications`);
    },
    /**
     * @description get notificationSetting of userId
     * @param userId
     * @returns {AxiosPromise}
     */
    getNotificationSetting(userId) {
        return axios.get(`${host}${prefix}/${userId}/notificationSettings`);
    },
    /**
     * @description get recommendations of userId
     * @param userId
     * @returns {AxiosPromise}
     */
    getRecommendations(userId) {
        return axios.get(`${host}${prefix}/${userId}/recommendations`);
    },
    /**
     * @description get personal info of userId
     * @param userId
     * @returns {AxiosPromise}
     */
    getPersonalInfo(userId) {
        return axios.get(`${host}${prefix}/${userId}`);
    },
    /**
     * @description get latest posts of userId
     * @param userId
     * @returns {AxiosPromise}
     */
    getPosts(userId){
        return axios.get(`${host}${prefix}/${userId}/posts`);
    },
    /**
     * @description get fans data of userId
     * @param userId
     * @returns {AxiosPromise}
     */
    getFans(userId){
        return axios.get(`${host}${prefix}/${userId}/loves`);
    },
    /**
     * @description get followers of userId
     * @param userId
     * @returns {AxiosPromise}
     */
    getFollowers(userId){
        return axios.get(`${host}${prefix}/${userId}/followers`);
    }

};

export default Api;
