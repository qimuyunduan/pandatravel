<style scoped>
    .icon-small {
        margin-top: 10px;
    }
    span.settingHeader {
        width: 100%;
        padding-left: 30px;
        display: inline-block;
        text-align: left;
    }
    p {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 50px;
        color: #000;
    }

    div p:hover p {
        background-color: #ccc;
        color: #ff0000;
    }

    p span {
        display: inline-block;
        padding: 0;
        margin-top: 0;
        margin-left: -4px;
        height: 100%;
        vertical-align: middle;
    }

    p span:first-of-type {
        width: 25%;
        text-align: center;
    }

    p span:nth-of-type(2) {
        width: 50%;
        padding-top: 1em;
        text-align: left;
        text-overflow: ellipsis;
    }

    p span:last-of-type {
        width: 25%;
        text-align: center;
    }
</style>

<template>
    <div v-if="setting.length > 0">
        <span class="settingHeader">{{allowType}}</span>
        <p v-for="item in setting">
            <span v-if="parseInt(item.notificationType) === 1">
                <svg class="icon-small" aria-hidden="true">
                    <use :xlink:href="iconLove"></use>
                </svg>
            </span>
            <span v-else>
                <svg class="icon-small" aria-hidden="true">
                    <use :xlink:href="iconComment"></use>
                </svg>
            </span>
            <span>
                {{item.notificationDescription}}
            </span>
            <span @click="disableNotification()" v-if="parseInt(item.notificationResult) === 1">
            <svg class="icon-small" aria-hidden="true">
                <use :xlink:href="on"></use>
            </svg>
            </span>
            <span @click="enableNotification()" v-else>
            <svg class="icon-small" aria-hidden="true">
                <use :xlink:href="off"></use>
            </svg>
            </span>
        </p>

    </div>

</template>

<script>

    import  axios from "axios";
    export default {

        data(){
            return {
                setting:[],
                iconLove:"#icon-love-enabled",
                iconComment:"#icon-comment-enabled",
                on:"#icon-switch-on",
                off:"#icon-switch-off",
                allowType:"允许以下通知:"
            };
        },
        created(){
            this.getNotificationSetting();
        },
        methods:{
            getNotificationSetting(){
                axios.get("/api/qimu/notificationSettings")
                    .then(response => {
                        this.setting = response.data;
                    })
                    .catch(()=>{
                        this.setting = [];
                    })
            },
            enableNotification(){

                this.off = this.on;
            },
            disableNotification(){
                this.on = this.off;
            }
        }
    };
</script>
