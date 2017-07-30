<style scoped>
    div.notificationMenu {
        display: block;
        position: relative;
        left: 50%;
        width: 350px;
        min-height: 300px;
        max-height: 500px;
        margin-left: -175px;
        border: solid 1px #ccc;
        border-radius: 5px;
        background-color: #fff;
        text-align: center;
    }

    div.notificationMenuHeader {
        height: 30px;
    }

    div.notificationMenuHeader span {
        padding: 0;
        margin: 0;
        height: 100%;
    }
</style>

<template>
    <div class="notificationMenu">
        <div class="notificationMenuHeader">
            <span class="pull-left" @click="showNotificationItems()" v-show="isShowNotificationBack">
                <svg class="icon-small" aria-hidden="true">
                    <use xlink:href="#icon-back"></use>
                </svg>
            </span>
            <span class="pull-right" @click="showNotificationSetting()" v-show="isShowNotificationItems">
                <svg class="icon-small" aria-hidden="true">
                    <use xlink:href="#icon-setting"></use>
                </svg>
            </span>
        </div>
        <div>
            <div v-show="isShowNotificationItems">
                <notification-item

                    v-for="item in notifications"
                    :key="item.id"
                    :avatarUrl="item.avatarUrl"
                    :personName="item.personName"
                    :notificationType="item.type"
                    :time="item.notificationTime"
                >

                </notification-item>
            </div>
            <notification-setting v-show="isShowNotificationBack"></notification-setting>
        </div>
    </div>
</template>

<script>

    import notificationItem from "./notification_item.vue";
    import notificationSetting from "./notification_setting.vue";
    import Api from "../api";
    export default {
        data() {
            return {
                notifications:[],
                isShowNotificationBack:false,
                isShowNotificationItems:true
            };
        },
        created(){
            this.getNotifications();
        },
        methods:{
            getNotifications(){
                Api.getNotifications('qimu')
                    .then(response => {
                        this.notifications = response.data;
                    })
                    .catch(()=>{
                        this.notifications = [];
                    })
            },
            showNotificationSetting() {
                this.isShowNotificationItems = !this.isShowNotificationItems ;
                this.isShowNotificationBack = !this.isShowNotificationBack;
            },
            showNotificationItems() {
                this.isShowNotificationItems = !this.isShowNotificationItems ;
                this.isShowNotificationBack = !this.isShowNotificationBack;
            }
        },
        components: {
            notificationItem,
            notificationSetting
        }
    }
</script>
