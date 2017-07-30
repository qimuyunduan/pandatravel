<style scoped>
    div {
        padding: 0;
        margin: 0;
        width: 100%;
        background-size:cover;
    }

</style>

<template>
    <!--<transition-->

        <!--v-on:before-enter="beforeEnter"-->
        <!--v-on:enter="enter"-->
        <!--v-on:after-enter="afterEnter"-->
        <!--v-on:enter-cancelled="enterCancelled"-->
        <!--v-on:before-leave="beforeLeave"-->
        <!--v-on:leave="leave"-->
        <!--v-on:after-leave="afterLeave"-->
        <!--v-on:leave-cancelled="leaveCancelled"-->
        <!--v-bind:css="false"-->
    <!--&gt;-->
        <div :style="{height:backgroundHeight,'background-image':'url(' + backgroundUrl + ')'}">
            <login-form></login-form>
        </div>
    <!--</transition>-->
</template>

<script>
    import loginForm from "../components/login_form.vue";
    export default {
        data() {
            return {
                backgroundHeight:'',
                backgroundUrl:'',
                backgroundArr:['background1.png','background2.png','background3.png','background0.png']
            };
        },
        computed:{

        },
        methods:{
//            beforeEnter: function (el) {
//                el.style.opacity = 0;
//            },
//
//            enter: function (el, done) {
//                el.style.opacity = 1
//                done()
//            },
//            leave: function (el, done) {
//                // ...
//                done()
//            }
        },
        beforeMount(){
            // init background and div height
            this.backgroundHeight = (window.innerHeight || document.body.clientHeight) + 'px';
            const backgroundIndex = parseInt(Math.random() * 10) % 4;
            this.backgroundUrl = '/img/' + this.backgroundArr[backgroundIndex];
        },
        mounted(){
            window.onresize = (() => {
                return (() => {
                    this.backgroundHeight = (window.innerHeight || document.body.clientHeight) + 'px';
                });
            })();
            setInterval(() => {
                const that = this;
                const backgroundIndex = parseInt(Math.random() * 10) % 4;
                that.backgroundUrl = '/img/' + that.backgroundArr[backgroundIndex];
            },5000);
        },
        components:{
            loginForm
        }
    }
</script>
