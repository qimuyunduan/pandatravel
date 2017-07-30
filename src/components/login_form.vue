<style scoped>

    form {
        position: relative;
        top:20%;
        left:66.666%;
        width: 500px;
        padding: 30px;
        margin-left: -250px;
        border-radius: 20px;
        background-color: #fff;

    }
    div.form-header {
        position: relative;
        height: 60px;
    }
    div.form-header span {
        display: inline-block;
    }
    div.form-header span.pull-left img {
        width: 60px;
        height: 100%;
    }
    div.form-header span.pull-right {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .spanClicked {
        border-bottom: solid 2px #ff0000;
    }
    div.form-body {
        width: 100%;
        text-align: center;
    }
    div.form-content-block {
        width: 100%;
        margin-top: 20px;
    }
    div.form-content-block input {
        width: 60%;
        height: 40px;
        border-radius: 20px;
        border: solid 1px #ff0000;
        padding-left: 20px;
        text-align: left;
    }
    div.form-content-block input:focus {
        outline: none;
    }

    div.form-content-block input.input-left {

        width: 25%;
        height: 40px;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 20px;
        margin: 0;
        text-align: left;
        border: solid 1px #ff0000;
        border-right: none;
        border-radius: 20px 0 0 20px;
        color: #ff0000;
        background-color: #fff;
    }
    div.form-content-block input.input-right {

        width: 35%;
        height: 40px;
        margin-left: -5px;
        text-align: left;
        border:solid 1px #ff0000;
        border-left:none;
        border-radius: 0 20px 20px 0;
    }

    div.form-content-block input.text-center {

        text-align: center;
        background-color: #ff0000;
        color: #fff;
    }
</style>

<template>

    <form action="">
        <div class="form-header">
            <span class="pull-left"><img src="../assets/image/logo.png" alt="logo" @click="push({name:'index'})"></span>
            <span class="pull-right">
                <span @click="showLogin()" :class = "{spanClicked:loginActived}">{{firstNabValue}}</span>
                <span @click="showRegister()" :class = "{spanClicked:registerActived}">{{secondNabValue}}</span>
                <span @click="showFP()" :class = "{spanClicked:fPPhaseOneActived || fPPhaseTwoActived}" >{{thirdNabValue}}</span>
            </span>
        </div>
        <div class="form-body">
            <div v-show="loginActived">
                <div class="form-content-block">
                    <input type="text" placeholder="手机号或邮箱" :value="loginName" @input="updateLoginName($event)">
                </div>
                <div class="form-content-block">
                    <input type="password" placeholder="密码" :value="password" @input="updatePassword($event)">
                </div>
                <div class="form-content-block">
                    <input type="button" value="登录" class="text-center" @click="login()" >
                </div>
            </div>
            <div v-show="registerActived">
                <div class="form-content-block">
                    <input type="text" placeholder="手机号或邮箱">
                </div>
                <div class="form-content-block">
                    <input type="button" value="获取验证码" class="input-left">
                    <input type="text" placeholder="输入验证码" class="input-right">
                </div>
                <div class="form-content-block">
                    <input type="text" placeholder="密码">
                </div>
                <div class="form-content-block">
                    <input type="button" value="注册" class="text-center">
                </div>
            </div>
            <div v-show="fPPhaseOneActived">
                <div class="form-content-block">
                    <input type="text" placeholder="手机号或邮箱">
                </div>

                <div class="form-content-block">
                    <input type="button" value="下一步" class="text-center" @click="showNextStep()">
                </div>
            </div>
            <div v-show="fPPhaseTwoActived" >
                <div class="form-content-block">
                    <input type="text" placeholder="验证码">
                </div>
                <div class="form-content-block">
                    <input type="text" placeholder="新密码">
                </div>
                <div class="form-content-block">
                    <input type="text" placeholder="新密码确认">
                </div>
                <div class="form-content-block">
                    <input type="button" value="确认" class="text-center">
                </div>
            </div>
        </div>
    </form>

</template>

<script>
    import {push} from "../utilities";
    export default {
        data(){
            return {
                loginName:"",
                password:"",
                firstNabValue:"登录",
                secondNabValue:"注册",
                thirdNabValue:"忘记密码",
                loginActived:true,
                registerActived:false,
                fPPhaseOneActived:false,
                fPPhaseTwoActived:false,
                loginFocused:true
            };
        },
        computed: {

        },
        methods: {
            push,
            login(){

                if(this.loginName.length < 6){
                    this.loginName = "手机号或邮箱不对";
                    setTimeout(()=>{
                        this.loginName = "";
                    },1500);
                    return false;
                }
                if(this.password.length < 6){
                    this.loginName = "密码不对";
                    setTimeout(()=>{
                        this.loginName = "";
                    },1500);
                    return false;
                }
                push({name:"main"});
            },
            updateLoginName(event){
                this.loginName = event.target.value;
            },
            updatePassword(event){
                this.password = event.target.value;
            },
            showLogin(){
                if(!this.loginActived) {
                    this.loginActived = true;
                    this.registerActived = false;
                    this.fPPhaseOneActived = false;
                    this.fPPhaseTwoActived = false;
                }
            },
            showRegister(){
                if(!this.registerActived){
                    this.registerActived = true;
                    this.loginActived = false;
                    this.fPPhaseTwoActived = false;
                    this.fPPhaseOneActived = false;
                }

            },
            showFP(){
                if(!this.fPPhaseOneActived){
                    this.fPPhaseOneActived = true;
                    this.loginActived = false;
                    this.registerActived = false;
                    this.fPPhaseTwoActived = false;
                }
            },
            showNextStep(){
                if(!this.fPPhaseTwoActived){
                    this.fPPhaseTwoActived = true;
                    this.loginActived = false;
                    this.registerActived = false;
                    this.fPPhaseOneActived = false;
                }
            }
        },
        components: {},
    }
</script>
