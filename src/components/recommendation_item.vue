<style scoped>

    div.recommendationItem {
        width: 100%;
        height: 50px;
        padding-left: 20px;
        padding-right: 20px;
        border-bottom: solid 1px #ccc;
        margin: 0;
    }
    div.recommendationItem span {
        display: inline-block;
    }
    div.recommendationItem:hover {
        background-color: #ccc;
    }
    div.recommendationItem img {
        display: inline-block;
        height: 30px;
        width: 30px;
        margin-top: 10px;
        border: solid 1px #ff0000;
        border-radius: 15px;
    }
    div.pull-right {
        display: inline-block;
        height: 100%;
    }
    span.span-name {

        display: inline-block;
        height: 30px;
        margin-top: 10px;
        padding-left:20px;
        line-height: 30px;
    }
    span.span-gender {
        padding-right: 20px;
        height: 30px;
        margin-top: 10px;
        margin-right: 0;
    }
    span.follow {

        height: 30px;
        margin-top: 10px;
        padding: 0 30px;
        line-height: 30px;
        color: #fff;
        background-color: #ff0000;
    }
</style>

<template>
    <div class="recommendationItem">
        <img :src="avatarUrl" alt="avatar" class="pull-left">
        <span class="pull-left span-name">{{name}}</span>
        <div class="pull-right">

            <span v-if="parseInt(gender) === 1" class="span-gender">
            <svg class="icon-small" aria-hidden="true">
                <use xlink:href="#icon-female"></use>
            </svg>
            </span>
            <span v-else class="span-gender">
            <svg class="icon-small" aria-hidden="true">
                <use xlink:href="#icon-male"></use>
            </svg>
            </span>
            <span class="pull-right follow">{{follow}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                follow:"关注"
            };
        },
        props:{
            avatarUrl:String,
            name:String,
            gender:[String,Number]
        }
    }
</script>
