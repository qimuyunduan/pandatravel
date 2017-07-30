<style scoped>
    p {
        padding: 0;
        margin:0;
        width: 100%;
        height: 50px;
        color: #000;
    }
    p:hover {
        background-color: #ccc;
    }
    p span {
        display: inline-block;
        padding: 0;
        margin-top:0;
        margin-left: -4px;
        height: 100%;
        vertical-align: middle;
    }
    p span:first-of-type {
        width: 25%;
        text-align: center;
    }
    p span:first-of-type img {
        width: 30px;
        height: 30px;
        margin-top: 10px;
        border:solid 1px #ff0000;
        border-radius: 15px;
    }
    p span:nth-of-type(2) {
        width: 50%;
        padding-top: 1em;
        text-align: left;
        text-overflow: ellipsis;
    }
    p span:last-of-type {
        width: 25%;
        padding-top: 1em;
        text-align: center;
    }
</style>

<template>
    <p>
        <span><img :src="avatarUrl" alt="avatar"></span>
        <span>{{notificationContent}}</span>
        <span>{{time}}</span>
    </p>
</template>

<script>
    export  default {
        data(){
            return {
                notificationContent:''
            };
        },
        created(){
            switch(parseInt(this.notificationType)) {
                case 1:
                    this.notificationContent = this.personName + '评论了你';
                    break;
                case 2:this.notificationContent = this.personName + '给你点了赞';
                    break;
                default: break;
            }
        },
        props:{
            avatarUrl:String,
            personName:String,
            notificationType:[String,Number],
            time:[String,Object]
        }
    }
</script>
