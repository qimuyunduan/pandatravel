<style scoped>
    div {
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -100px;
        padding: 0;
        width: 100%;
        height: 200px;

    }

    div p {
        padding: 0;
        margin: 0;
        font-size: 6rem;
        text-align: center;
        line-height: 200px;
        color: #727c87;
    }
</style>

<template>
    <div>
        <p>
        <span>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-404"></use>
            </svg>
        </span>
            {{notFoundHint}}
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                notFoundHint:"sorry,page not found"
            };
        },
        mounted(){
            setTimeout(function () {
                window.$router.push({name:"index"});
            },2000);
        }
    };
</script>

