<style scoped>

    #header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        border-bottom: solid 1px #ccc;
        z-index: 10;
        background-color: #FFF;

    }
    #search:focus + label[for="search"] {
        display: none;
    }
    div.container {
        padding: 0;
        height: 100%;
    }

    div.row {
        padding: 0;
        height: 100%;
    }

    div.row div:first-of-type {

        height: 100%;
        padding: 0;
        text-align: center;
    }

    div.row div:first-of-type img {

        margin-top: 10px;
        width: 40px;
        height: 40px;
    }

    div.row div.col-lg-offset-1 {
        position: relative;
        height: 100%;
        padding: 0;
        text-align: left;
    }

    div.row div.col-lg-offset-1 label {

        position: absolute;
        top: 10px;
        right: 0;
        height: 40px;
        margin-right: 20px;
    }

    div.row div.col-lg-offset-1 label svg {
        margin-top: -5px;
        width: 30px;
        height: 30px;
    }

    div.row div.col-lg-offset-1 input {
        display: inline-block;
        margin-top: 10px;
        padding-left: 20px;
        width: 100%;
        height: 40px;
        border: solid 1px #ff0000;
        border-radius: 20px;
    }

    div.row div.col-lg-offset-1 input:focus {
        outline: none;
    }

    div.row span {
        display: inline-block;
        margin-top: 10px;
        height: 40px;
        text-align: center;
    }

    #notification {
        height: 100%;
        text-align: center;
    }

    #notification div.arrow,
    #avatarMenu div.arrow {
        display: none;
        position: relative;
        height: 20px;
        width: 100%;
        margin-top: -10px;
        background-color: transparent;
    }
    #notification div.arrow {
        display: block;
    }

    #avatarMenu:hover div.hidden {
        display: block;
    }

    div.row div.col-lg-1:last-of-type {
        display: inline-block;
        position: relative;
        text-align: center;
    }

    div.row div.col-lg-1:last-of-type img {
        margin-top: 10px;
        width: 40px;
        height: 40px;
        border: solid 1px #ff0000;
        border-radius: 20px;
    }

</style>

<template>
    <div id="header">
        <div class="container" v-if="selfInfo">
            <div class="row">
                <div class="col-lg-1 col-md-1 col-sm-2">
                    <img src="../assets/image/logo.png" alt="logo" @click = "push({name:'index'})" >
                </div>
                <div class="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-2">
                    <input type="search" id="search">
                    <label for="search">
                        <span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-search"></use>
                            </svg>
                        </span>
                    </label>
                </div>

                <span class="col-lg-1 col-lg-offset-4 col-md-1 col-md-offset-4 ">
                    <svg class="icon" aria-hidden="true" @click="showUpload()">
                        <use xlink:href="#icon-write"></use>
                    </svg>
                </span>
                <upload v-show="isShowUpload" @cancel="hideUpload()"></upload>

                <div class="col-lg-1 col-md-1 col-sm-2" id="notification">
                    <span @click="showNotificationMenu()">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-notify"></use>
                        </svg>
                    </span>
                    <div v-show="isShowNotificationMenu">
                        <div class="arrow" >
                            <arrow-up></arrow-up>
                        </div>
                        <notification-menu></notification-menu>
                    </div>
                </div>
                <div class="col-lg-1 col-md-1 col-sm-2" id="avatarMenu">
                    <img :src="selfInfo.avatarUrl" alt="avatar">
                    <div class="arrow hidden">
                        <arrow-up></arrow-up>
                    </div>
                    <personal-menu class="hidden" @showInfo = "showInfo()" ></personal-menu>
                    <info
                        v-show="isShowInfo"
                        @close="hideInfo()"
                        :avatarUrl="selfInfo.avatarUrl"
                        :gender = "selfInfo.gender"
                        :email = "selfInfo.email"
                        :cellphone="selfInfo.cellphone"
                        :name="selfInfo.name"
                    >
                    </info>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import personalMenu from "./menu.vue";
    import notificationMenu from "./notification.vue";
    import arrowUp from "./arrow_top.vue";
    import upload from "./upload.vue";
    import {push} from "../utilities";
    import info from "./info.vue";
    import axios from "axios";

    export default {

        data(){
            return {
                isShowNotificationMenu:false,
                selfInfo:null,
                isShowUpload:false,
                isShowInfo:false
            };
        },
        created(){
            this.getInfo();
        },
        methods: {
            push,
            getInfo(){
                axios.get("/api/qimu/info")
                    .then(response=>{
                        this.selfInfo = response.data;
                    })
                    .catch(()=>{
                        this.selfInfo = null;
                    })
            },
            showNotificationMenu(){
                this.isShowNotificationMenu = !this.isShowNotificationMenu;
            },
            showUpload(){
                this.isShowUpload = !this.isShowUpload;
            },
            hideUpload(){
                this.showUpload.call(this);
            },
            showInfo(){

                this.isShowInfo = !this.isShowInfo;
            },
            hideInfo(){
                this.showInfo.call(this);
            }
        },
        components: {
            personalMenu,
            notificationMenu,
            arrowUp,
            upload,
            info
        }
    }
</script>
