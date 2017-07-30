<style scoped>
    div.unloginHeader {
        height: 60px;
        width: 100%;
        z-index: 10;
    }

    div.unloginHeader div.container {
        height: 100%;
        text-align: center;
        color: #fff;
    }

    div.unloginHeader div.container ul {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        text-decoration: none;

    }

    div.unloginHeader div.container ul li {
        display: inline-block;
        margin-top: 15px;

    }

    div.unloginHeader div.container ul li span {

        display: inline-block;
        vertical-align: middle;
    }
</style>


<template>
    <div :style="{backgroundColor:headerBgColor,position:headerPosition}" class="unloginHeader">
        <div class="container">
            <ul class="row">
                <li class="col-lg-2 col-md-2 ">
                <span @click="responseIndex()">
                    <svg class="icon-small" aria-hidden="true">
                        <use :xlink:href="headerFirstIcon"></use>
                    </svg>
                </span>
                    <span>{{firstOption}}</span>
                </li>
                <li class="col-lg-2 col-md-2 ">
                <span @click="responseLatest()">
                    <svg class="icon-small" aria-hidden="true">
                        <use :xlink:href="headerSecondIcon"></use>
                    </svg>
                </span>
                    <span>{{secondOption}}</span>
                </li>
                <li class="col-lg-2 col-md-2 pull-right">
                <span @click="responseLogin()">
                    <svg class="icon-small" aria-hidden="true">
                        <use :xlink:href="headerThirdIcon"></use>
                    </svg>
                </span>
                    <span>{{thirdOption}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import {push} from "../utilities";

    export default {

        data(){
            return {
                firstOption: "主页",
                secondOption: "最新",
                thirdOption: "登录/注册",
                headerFirstIcon: "#icon-homepage-enabled",
                headerSecondIcon: "#icon-hot-disabled",
                headerThirdIcon: "#icon-login-disabled",
                headerBgColor: "transparent",
                headerPosition: "fixed"
            };
        },
        beforeRouteEnter(to,from,next){

            next(vm=>{
                if(to.name === 'latest'){
                    vm.headerBgColor = '#36465d';
                }

            });
        },
        created(){

        },
        mounted(){

        },
        methods: {
            responseIndex(){
                this.headerFirstIcon = "#icon-homepage-enabled";
                this.headerSecondIcon = "#icon-hot-disabled";
                this.headerThirdIcon = "#icon-login-disabled";
                this.headerBgColor = "transparent";
                this.headerPosition = "fixed";

                push({name: "index"});

            },
            responseLatest(){
                this.headerFirstIcon = "#icon-homepage-disabled";
                this.headerSecondIcon = "#icon-hot-enabled";
                this.headerThirdIcon = "#icon-login-disabled";
                this.headerBgColor = "#36465d";
                this.headerPosition = "relative";
                push({name: "latest"});
            },
            responseLogin(){
                this.headerFirstIcon = "#icon-homepage-disabled";
                this.headerSecondIcon = "#icon-hot-disabled";
                this.headerThirdIcon = "#icon-login-enabled";
                this.headerBgColor = "transparent";
                push({name: "login"});
            }
        }
    };

</script>
