<style scoped>

    div.col-lg-3 {
        height: auto;

    }
    img.miniBackground {
        display: block;
        width: 100%;
        height: 150px;
        margin-top: 20px;
        border-radius: 5px 5px 0 0;
    }
    div.col-lg-3 div {
        margin: 0;
        padding-left: 20px;
        width: 100%;
        height: 150px;
        background-color: #343946;
        color: #FFFFFF;
        border-radius: 0 0 5px 5px ;
    }
    .avatar {
        position: relative;
        width: 40px;
        height: 40px;
        border: solid 2px #fff;
        border-radius: 20px;
        margin-top: -20px;
    }
    div.col-lg-3 div p {
        text-align: left;
        line-height: 30px;
    }
    div.col-lg-3 div p span {
        display: inline-block;
        padding-right: 20px;
    }
    div.col-lg-3 div p span svg {
        margin-bottom: -8px;
    }
</style>

<template>
    <div class="col-lg-3 col-md-4 col-sm-4">
        <img :src="miniBgUrl" alt="background" class="miniBackground">
        <div>
            <img :src="avatarUrl" alt="avatar" class="avatar">
            <p>
                <span>{{name}}</span>

                <span>{{joinTime}}</span>
                <span>
                    <svg class="icon-small" aria-hidden="true">
                        <use :xlink:href="genderIcon"></use>
                    </svg>
                </span>
            </p>
            <p>
                {{cancelFollow}}
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                cancelFollow:"取消关注",
                genderIcon:""
            };
        },
        created(){

            if(parseInt(this.gender) === 1 ){
                this.genderIcon = "#icon-female";
            }else{
                this.genderIcon = "#icon-male";
            }
        },
        props:{

            miniBgUrl:String,
            avatarUrl:String,
            name:String,
            joinTime:[String,Object],
            gender:[String,Number]
        }
    }
</script>
