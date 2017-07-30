<style scoped>

    form {
        position: fixed;
        width: 460px;
        height: 360px;
        top: 50%;
        left: 50%;
        padding: 0;
        margin-left: -230px;
        margin-top: -180px;
        border-radius: 5px;
        border: solid 1px #ccc;
        z-index: 100;
        text-align: left;
        background-color: #fff;
    }

    form div {
        width: 100%;
        margin-bottom: 20px;
        padding: 0 80px;
    }
    form div input[type="text"] {
        border:none;
        width: 200px;
        height: 30px;
    }
    form div input[type="text"]:focus {
        outline: none;
    }
    form div:first-of-type {
        position: relative;
        text-align: center;

    }
    form div:first-of-type img {
        margin-top: 20px;
        width: 60px;
        height: 60px;
        border: solid 1px #ff0000;
        border-radius: 30px;
    }
    form div:last-of-type {
        padding-right: 30px;
    }
    form div:last-of-type span {
        float: right;
    }


</style>

<template>

        <form action="">
            <div>
                <img :src="avatarUrl" alt="avatar">
            </div>

            <div>
                <label for="name">{{nameLabel}}</label>
                <input type="text" id="name" :value="name">
            </div>
            <div>
                <span>{{genderLabel}}</span>
                <label for="gender_man">{{male}}</label>
                <input type="radio" id="gender_man" name="gender" value="1" :checked="parseInt(gender) === 1">
                <label for="gender_woman">{{female}}</label>
                <input type="radio" id="gender_woman" name="gender" value="0" :checked="parseInt(gender) === 0">
            </div>
            <div>
                <label for="cellphone">{{cellphoneLabel}}</label>
                <input type="text" id="cellphone" :value="cellphone">
            </div>
            <div>
                <label for="email">{{emailLabel}}</label>
                <input type="text" id="email" :value="email">
            </div>
            <div>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sure"></use>
                    </svg>
                </span>
                <span @click="close()">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </span>
            </div>
        </form>

</template>

<script>
    export default {

        data(){
            return {
                nameLabel:"姓名:",
                genderLabel:"性别:",
                male:"男",
                female:"女",
                emailLabel:"邮箱:",
                cellphoneLabel:"手机:"

            };
        },
        props:{
            avatarUrl:String,
            name:String,
            gender:[String,Number],
            email:String,
            cellphone:String
        },
        methods:{
            close(){
                this.$emit("close");
            }
        }
    };
</script>
