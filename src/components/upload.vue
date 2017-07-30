<style scoped>
    .upload {
        position: fixed;
        width: 500px;
        height: auto;
        top: 50%;
        left: 50%;
        margin-left: -250px;
        margin-top: -220px;
        border: solid 1px #ccc;
        border-radius: 5px;
        background-color: #fff;
    }

    div.uploadHeader {
        width: 100%;
        height: 60px;
        padding: 0 20px;
    }

    .file {
        position: relative;
        display: inline-block;
        margin-top: 10px;
        overflow: hidden;
        text-decoration: none;
    }

    .file input {
        position: absolute;
        font-size: 40px;
        right: 0;
        top: 0;
        opacity: 0;
    }

    div.uploadHeader span.pull-right {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 30px;
        margin-top: 15px;
        color: #ff0000;
        border: solid 1px #ff0000;
        border-radius: 5px;
        background-color: #fff;
    }

    div.uploadHeader span.pull-right:last-of-type {
        margin-right: 20px;
    }

    div.uploadBody {

        width: 100%;
        padding: 0 10px;
        /*border-bottom: solid 1px #ccc;*/
        /*border-top: solid 1px #ccc;*/
    }

    div.uploadBody div span {
        display: inline-block;
        margin-right: -5px;
    }

    div.uploadBody div span img {
        width: 140px;
        height: 140px;
        border: solid 1px #ccc;
        border-radius: 5px;
        margin: 10px;
    }

    div.uploadFooter {
        width: 100%;
        height: 40px;
        padding-left: 20px;
    }

    div.uploadFooter input {
        display: inline-block;
        padding: 0;
        margin-top: 0;
        width: 100%;
        height: 100%;
        border: none;
        text-align: left;
        text-overflow: clip;
    }

    div.uploadFooter input:focus {
        outline: none;
    }
</style>

<template>
    <form action="" class="upload">

        <div class="uploadHeader">
            <a href="javascript:" class="file">
                <input type="file" name="" id="">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-photo"></use>
                    </svg>
                </span>
            </a>

            <span class="pull-right" @click="cancelUpload()">
                {{cancel}}
            </span>
            <span class="pull-right">
                {{confirm}}
                </span>
        </div>
        <div class="uploadBody">
            <div ref="imgPreview">
                <!--<span>-->
                    <!--<img src="../assets/image/logo.png" alt="">-->
                <!--</span>-->
            </div>
        </div>
        <div class="uploadFooter">
            <input type="text" placeholder="顺便说一句话吧" maxlength="30">
        </div>

    </form>

</template>

<script>
    export default {
        data(){
            return {
                cancel: "取消",
                confirm: "确认"
            };
        },
        methods: {
            cancelUpload(){
                this.$emit('cancel');
            }
        }
    };
</script>
