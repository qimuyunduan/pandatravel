<style scoped>

    .top {
        display: block;
        width: 20px;
        height: 100%;
        position: absolute;
        left: 50%;
        margin-left: -10px;
        z-index: 2;
    }

    .top-arrow1,
    .top-arrow2 {
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5;
        border: dashed 10px transparent;
        overflow: hidden;
    }

    .top-arrow1 {
        border-bottom: 10px gray solid;
    }

    .top-arrow2 {
        top: 1px;
        border-bottom: 10px white solid;
    }

</style>

<template>

    <b class="top">
        <i class="top-arrow1"></i>
        <i class="top-arrow2"></i>
    </b>

</template>

<script>
    export default {

    }
</script>
