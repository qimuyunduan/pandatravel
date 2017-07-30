<style scoped>
    footer {
        position: fixed;
        bottom: 100px;
        width: 100%;
        z-index: 10;
    }
    footer ul {
        text-decoration: none;
        text-align: center;
        padding: 5px;
        margin: 0;

    }
    footer ul li {
        display: inline;
        font-size: 12px;
        color: #fff;

    }
    footer ul li:last-child {
        text-align: left;
        font-size: 10px;
    }

</style>

<template>
    <footer>
        <div class="container">
            <ul class="row">
                <li class="col-lg-1 col-md-1 col-sm-2"><span @click="push({name:'about',hash:'#tos'})">{{firstPartial}}</span></li>
                <li class="col-lg-1 col-md-1 col-sm-2"><span @click="push({name:'about',hash:'#cn'})">{{secondPartial}}</span></li>
                <li class="col-lg-1 col-md-1 col-sm-2"><span @click="push({name:'about',hash:'#au'})">{{thirdPartial}}</span></li>
                <li class="col-lg-1 col-md-1 col-sm-2"><span @click="push({name:'about',hash:'#cu'})">{{fourthPartial}}</span></li>
                <li class="col-lg-2 col-md-2 col-sm-3"> {{finalPartial}}</li>
            </ul>
        </div>
    </footer>

</template>

<script>
   import {push} from "../utilities/";
    export default {

        data(){
            return {
                firstPartial:"服务条款",
                secondPartial:"社区规范",
                thirdPartial:"关于我们",
                fourthPartial:"联系我们",
                finalPartial:"2017 all right reserved"
            };
        },

        computed:{

        },
        methods:{
            push,
        }
    };
</script>
