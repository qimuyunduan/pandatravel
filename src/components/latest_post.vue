<style scoped>

    div.post {
        padding-top: 20px;
        padding-left: 10px;
        margin: 0;
        float: left;
        height: auto;
        background-color: #fff;
    }

    div.main-content {
        position: relative;
        padding: 10px;
        border-radius: 5px;
    }

    div.main-content img.big {
        display: block;
        width: 400px;
        height: auto;
        max-height: 600px;
        border-radius: 5px;
    }
    @media (max-width:767px) {
        div.main-content img.big {
            width: 300px;
        }
    }

    div.main-content div.video {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    div.main-content div.video video {
        display: block;
        width: 400px;
        height: auto;
        border-radius: 5px;
        max-height: 600px;
    }
    @media (max-width:767px) {
        div.main-content div.video video {
            width: 300px;
        }
    }
    div.main-content div.video div.icon-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    div.main-content div.icon-video span {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -20px;
        margin-left: -20px;
    }

    div.post-header {
        position: relative;
        width: 100%;
        padding: 0 20px;
    }

    div.post-header span {
        width: 33.333%;
        display: inline-block;
        padding: 0;
        margin-right: -5px;
        vertical-align: middle;
        text-align: center;
    }

    div.post-header img.avatar {
        width: 30px;
        height: 30px;
        border: solid 1px #ff0000;
        border-radius: 15px;
    }

    div.post-header span:first-of-type {
        text-align: left;
    }

    div.post-header span:last-of-type {
        text-align: right;
    }

    div.post-footer {
        height: 40px;
        padding-left: 20px;
        padding-right: 20px;
    }

    div.post-footer span {

        display: inline-block;
        margin-right: -5px;
        vertical-align: middle;
    }

    div.post-footer span.icon-span {
        width: 33.333%;
        text-align: center;
    }

    div.post-footer span.icon-span:first-of-type {
        text-align: left;
    }

    div.post-footer span.icon-span:last-of-type {
        text-align: right;
    }

    .text-span {
        line-height: 40px;
    }

    div.cover-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        border-radius: 5px;
        margin-top: 20px;
        color: #fff;
    }

    div.cover-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
        margin-bottom: 20px;
        border-radius: 5px;
        color: #fff;
    }

    div.main-content:hover div.cover-top,
    div.main-content:hover div.cover-bottom {
        display: block;
    }

    div.main-content:hover {
        background-color: lightgray;
        opacity: .8;
    }
</style>

<template>

    <div class="post">
        <div class="main-content">
            <div v-if="videoUrl === '' ">
                <img v-for="itemUrl in bigImgsUrl" :src="itemUrl" alt="post image" class="big" @load="emitLoaded()">
            </div>

            <div v-else class="video">
                <video :src="videoUrl" ref="videoPlayer" @loadedmetadata="emitLoaded()">{{unsupportVideo}}</video>
                <div class="icon-video" ref="iconVideo">
                    <span @click="playVideo()">
                        <svg class="icon-small" aria-hidden="true">
                            <use xlink:href="#icon-video"></use>
                        </svg>
                    </span>
                </div>
            </div>

            <div class="cover-top post-header hidden">
                <span><img :src="avatarUrl" alt="avatar" class="avatar"></span>
                <span>{{name}}</span>
                <span>{{postTime}}</span>
            </div>
            <div class="cover-bottom hidden">

                <div class="post-footer">
                    <span class="icon-span">
                    <span>
                    <svg class="icon-small" aria-hidden="true">
                        <use xlink:href="#icon-comment-enabled"></use>
                    </svg>
                    </span>
                    <span class="text-span">{{commentCount}}</span>
                    </span>
                    <span class="icon-span">
                <span>
                    <svg class="icon-small" aria-hidden="true">
                        <use xlink:href="#icon-love-enabled"></use>
                    </svg>
                </span>
                <span class="text-span">{{likeCount}}</span>
            </span>
                    <span class="icon-span">
                <span>
                    <svg class="icon-small" aria-hidden="true">
                        <use xlink:href="#icon-share-enabled"></use>
                    </svg>
                </span>
                <span class="text-span">{{shareCount}}</span>
            </span>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
    export default {

        data(){
            return {
                unsupportVideo: "你的浏览器不支持video标签"
            };
        },
        methods: {
            emitLoaded(){
                this.$emit("loaded");
            },
            hideIconVideo(){
                this.$refs.iconVideo.style.display = "none";
            },
            showIconVideo(){
                this.$refs.iconVideo.style.display = "inline-block";
            },
            playVideo(){
                const videoPlayer = this.$refs.videoPlayer;
                videoPlayer.play();
                //hide icon
                this.hideIconVideo();
                //add play ended event
                videoPlayer.addEventListener('ended', this.showIconVideo);
            }
        },
        beforeCreate(){},
        created(){},
        props: {
            name: String,
            avatarUrl: String,
            postTime: [String, Object],
            commentCount: [String, Number],
            likeCount: [String, Number],
            shareCount: [String, Number],
            videoUrl: [String],
            imgCount: [String, Number],
            bigImgsUrl: Array,
            miniImgsUrl: Array
        }
    };
</script>
