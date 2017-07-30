<style scoped>
    div.menu {
        position: relative;
        left: 50%;
        margin-left: -60px;
        color: #000;
        width: 120px;
        border: solid 1px #ccc;
        border-radius: 5px;
        background-color: #FFF;
    }
    div.menu span  {
        display: block;
        padding: 10px 20px;
        margin: 0;
    }
    div.menu span:hover {
        background-color: #ccc;
    }
</style>

<template>
    <div class="menu">
        <span @click="push({name:'homepage',params:{name:'qimu'}})">{{fisSelection}}</span>
        <span @click="showInfo()">{{secSelection}}</span>
        <span @click="push({name:'index'})">{{thirdSelection}}</span>
    </div>
</template>

<script>
    import {push} from "../utilities";
    export default {
        data(){
            return {
                fisSelection:"个人主页",
                secSelection:"修改资料",
                thirdSelection:"退出登录"
            };
        },
        methods:{
            push,
            showInfo(){
                this.$emit('showInfo');
            }
        }
    }
</script>
