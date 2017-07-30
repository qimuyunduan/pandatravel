<style scoped>
    div.container {
        padding-top: 100px;
    }
</style>
<template>
    <div class="container" v-if="posts.length > 0 ">
        <recommendation></recommendation>

        <post
            v-for="item in posts"
            :key="item.id"
            :name="item.name"
            :avatarUrl="item.avatarUrl"
            :postTime="item.postTime"
            :videoUrl="item.videoUrl"
            :bigImgsUrl="item.bigImgsUrl"
            :miniImgsUrl="item.miniImgsUrl"
            :imgCount="item.imgCount"
            :comments="item.comments"
            :text="item.text"
        >

        </post>

    </div>
</template>

<script>
    import post from "../components/post.vue";
    import recommendation from "../components/recommendation.vue";
    import axios from "axios";

    export default {

        data(){
            return {
                posts:[]
            };
        },
        created(){
            this.loadPosts();
        },
        methods:{

            loadPosts(){
                axios.get("api/qimu/main")
                    .then(response => {
                        this.posts = response.data;
                    })
                    .catch(()=>{
                        this.posts = [];
                    })
            }
        },
        components:{
            post,
            recommendation
        }
    }
</script>
