<style scoped>
    main {
        position: relative;
        width: 100%;
    }

    #videoIntro {
        position: relative;
        width: 100%;
    }
    #videoIntro video {
        display: block;
        padding: 0;
        margin: 0;
        width: 100%;
        min-height: 600px;
    }
    #videoIntro div {
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -150px;
        width: 100%;
        padding: 0;
        height: 300px;
        text-align: center;
        color: #FFF;

    }
    #videoIntro div h1 {
        font-size: 6rem;
    }
    #videoIntro div h3 {

        margin-top: 50px;

        font-size: 3rem;

    }
    #firstPartial {
        height: 600px;
    }
    #firstPartial div:first-of-type {
        margin-top: -150px;
        text-align: left;
        max-height: 100%;
    }
    #firstPartial div.pull-right {
        margin-top: 200px;
        font-size: 3rem;
        color: #FFF;
    }
    #firstPartial div.pull-right span:first-of-type {
        float: left;
        padding-right: 30px;
    }

    #secondPartial {
        height: 600px;
    }
    #secondPartial div.pull-right {
        text-align: center;
        max-height: 100%;
        margin-top: -50px;
    }
    #secondPartial div:first-of-type {
        margin-top: 100px;
        font-size: 3rem;
        color: #FFF;
    }
    #secondPartial div:first-of-type span:first-of-type {
        float: left;
        padding-right: 30px;
    }

    #thirdPartial {
        height: 600px;
    }
    #thirdPartial div.pull-right {
        margin-top: 200px;
        font-size: 3rem;
        color: #FFF;
    }
    #thirdPartial div:first-of-type {
        text-align: center;
        margin-top: -150px;
    }
    #thirdPartial div.pull-right span:first-of-type {
        float: left;
        padding-right: 30px;
    }
    #firstContainer {
        background: #FFCC99;
        background: -webkit-linear-gradient(left,#FFCC99,#FFCC66);
        background: -o-linear-gradient(left,#FFCC99,#FFCC66);
        background: -moz-linear-gradient(left,#FFCC99,#FFCC66);
        background: linear-gradient(to right,#FFCC99,#FFCC66);
    }
    #secondContainer {
        background: #FFCCFF;
        background: -webkit-linear-gradient(left,#FFCC66,#FFCCCC);
        background: -o-linear-gradient(left,#FFCC66,#FFCCCC);
        background: -moz-linear-gradient(left,#FFCC66,#FFCCCC);
        background: linear-gradient(to right,#FFCC66,#FFCCCC);
    }
    #thirdContainer {
        background: #FFCCCC;
        background: -webkit-linear-gradient(left,#FFCC99,#FFCCCC);
        background: -o-linear-gradient(left,#FFCC99,#FFCCCC);
        background: -moz-linear-gradient(left,#FFCC99,#FFCCCC);
        background: linear-gradient(to right,#FFCC99,#FFCCCC);
    }
</style>

<template>
    <main>
        <div id="videoIntro">
            <video src="/intro.mp4" autoplay loop></video>
            <div>
                <h1 class="row"> {{title}}</h1>
                <h3 class="row">{{subtitle}}</h3>
            </div>
        </div>
        <div id="firstContainer">
            <div class="container">
                <div id="firstPartial" class="row">
                    <div class="col-lg-5 col-md-5 pull-left">
                        <img src="../assets/image/rightone.png" alt="picture two">
                    </div>
                    <div class="col-lg-5 col-md-5  pull-right">
                        <span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-chat"></use>
                            </svg>
                        </span>
                        <span>
                        {{firstIntro}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div id="secondContainer">
            <div class="container">
                <div id="secondPartial" class="row">

                    <div class="col-lg-5 col-md-5 ">
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-follow"></use>
                    </svg>
                </span>
                        <span>
                    {{secondIntro}}
                    </span>
                    </div>
                    <div class="col-lg-5 col-md-5 pull-right">
                        <img src="../assets/image/leftone.png" alt="picture one">
                    </div>

                </div>
            </div>
        </div>
        <div id="thirdContainer">
            <div class="container">
                <div id="thirdPartial" class="row">
                    <div class="col-lg-5 col-md-5 ">
                        <img src="../assets/image/lefttwo.png" alt="picture three">
                    </div>
                    <div class="col-lg-5 col-md-5 pull-right">
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-share"></use>
                        </svg>
                    </span>
                        <span>
                    {{thirdIntro}}
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {

        data(){
            return {
                title:"SHARE YOUR DREAM",
                subtitle:"And find the perfect partner to fullfill it",
                firstIntro:"旅行怎能没有社交，与志同道合的一起聊天，才有意思。",
                secondIntro:"订阅并查看感兴趣的内容，精彩不容错过。",
                thirdIntro:"多个分享渠道，让你的讯息及时传达到朋友的手里。"
            };
        },
        computed:{

        },
        methods:{

        }
    };
</script>
