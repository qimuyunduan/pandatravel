<style scoped>
    div.post-container {
        border: solid 1px #ccc;
        border-radius: 5px;
        background-color: #fff;
        margin-bottom: 20px;
    }

    div.header {
        height: 60px;
        margin-left: -10px;
        margin-right: -10px;
    }

    div.header span {

        padding: 0;
        width: 25%;
        display: inline-block;
        vertical-align: middle;
        font-size: 1.2em;
        margin-right: -5px;
    }

    div.header span:first-of-type {
        padding-left: 20px;
        text-align: left;
        height: 100%;
    }

    div.header span:nth-of-type(2) {
        text-align: left;
    }

    div.header span:nth-of-type(3) {
        text-align: right;
    }

    div.header span:last-of-type {

        height: 100%;
        padding-right: 20px;
        text-align: right;
    }

    div.header span:first-of-type img {
        width: 40px;
        height: 40px;
        margin-top: 10px;
        border-radius: 20px;
        border: solid 1px #ff0000;
    }

    div.header span:last-of-type svg {
        margin-top: 10px;
    }

    div.main {
        padding: 0;
        margin-left: -10px;
        margin-right: -10px;
    }

    div.main img {
        display: block;
        width: 100%;
        height: auto;
        padding: 0;
        margin-bottom: 5px;
    }

    div.main div.video {
        width: 100%;
        height: auto;
    }

    div.main div.video video {
        position: relative;
        display: block;
        width: 100%;
        height: auto;
    }

    div.comment {
        margin-left: -10px;
        margin-right: -10px;
        padding-left: 20px;
        border-bottom: solid 1px #ccc;
    }

    div.comment p {
        text-align: left;
        color: #000;
        text-overflow: ellipsis;
    }

    div.comment p img {

        width: 40px;
        height: 40px;
        vertical-align: middle;
        border: solid 1px #ff0000;
        border-radius: 20px;
    }

    div.comment p span:first-of-type {
        padding-left: 10px;
    }

    div.comment p span:last-of-type {
        padding-left: 30px;
    }

    div.bottom {
        margin-left: -10px;
        margin-right: -10px;
        text-align: left;
        height: 60px;
    }

    div.bottom span {
        margin-right: -5px;
    }

    div.bottom span:first-of-type {

        width: 20%;
        padding-left: 20px;
        margin-top: 10px;
        display: inline-block;
        vertical-align: middle;
        border: none;
    }

    div.bottom span input {
        display: inline-block;
        height: 40px;
        width: 80%;
        margin-top: 10px;
        padding-left: 10px;
        border: none;
        text-overflow: ellipsis;

    }

    div.bottom span input:focus {
        outline: none;
    }
</style>

<template>
    <div class="post-container col-lg-5 col-lg-offset-3 col-md-5 col-md-offset-2 col-sm-6 col-sm-offset-3">
        <div class="header">
            <span><img :src="avatarUrl" alt="avatar"></span>
            <span>{{name}}</span>
            <span>{{postTime}}</span>
            <span>
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="iconShare"></use>
                </svg>
            </span>
        </div>
        <div class="main">
            <div v-if="videoUrl === '' ">
                <img v-for="imgUrl in bigImgsUrl" :src="imgUrl" alt="post image">
            </div>
            <div v-else class="video">
                <video :src="videoUrl" ref="videoPlayer" autoplay>{{unSupportHint}}</video>
            </div>
        </div>

        <div class="comment" v-if="comments.length > 0 || text !== '' ">
            <p v-if=" text !== '' ">
                <img :src="avatarUrl" alt="avatar">
                <span>{{name}}</span>
                <span>{{text}}</span>
            </p>
            <p v-if="comments.length > 0" v-for="comment in comments">
                <img :src="comment.avatarUrl" alt="avatar">
                <span>{{comment.name}}</span>
                <span>{{comment.comment}}</span>
            </p>
        </div>

        <div class="bottom">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="iconComment"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="iconLove"></use>
                </svg>
            </span>
            <span>
                <input type="text" placeholder="发表评论">
            </span>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return {
                iconShare: "#icon-share-disabled",
                iconComment: "#icon-comment-disabled",
                iconLove: "#icon-love-disabled",
                unSupportHint: "你的浏览器不支持video标签"
            };
        },
        created(){
            if(this.isLove && parseInt(this.isLove) === 1){
                this.iconLove = "#icon-love-enabled";
            }
        },
        methods: {},
        props: {
            avatarUrl: String,
            name: String,
            postTime: [String, Object],
            videoUrl: String,
            bigImgsUrl: Array,
            imgCount: [String, Number],
            comments: Array,
            text: String,
            isLove:[String,Number]
        }
    }
</script>
