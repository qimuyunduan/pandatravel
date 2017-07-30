<style scoped>
    div {
        height: 500px;
        width: 100%;
    }
    div img {
        width: 100%;
        height: 100%;
    }
</style>

<template>

    <div>
        <img :src="avatarBg" alt="avatar background" >
    </div>

</template>

<script>
    export default {
        props:{
            avatarBg:String
        }
    }
</script>
