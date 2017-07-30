<style scoped>
    div.recommendation {
        padding: 0;
        border:solid 1px #ccc;
        border-bottom: none;
        border-radius: 5px;
    }
    @media (max-width:767px) {
        div.recommendation {
            display: none;
        }
    }
    div.recommendationHeader {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        width: 100%;

    }
    div.recommendationHeader span:first-of-type {
        font-size: 1.2em;
    }
    div.recommendationHeader span:last-of-type {
        font-size: 0.8em;
        float: right;
    }
</style>

<template>
    <div class="recommendation pull-right col-lg-3 col-md-4" v-if="recommendations.length > 0">
        <div class="recommendationHeader">
            <span>{{recommendation}}</span>
            <span>{{nextGroup}}</span>
        </div>
        <recommendation-item
            v-for="item in recommendations"
            :key="item.id"
            :name="item.name"
            :gender="item.gender"
            :avatarUrl="item.avatarUrl"
        >

        </recommendation-item>
    </div>
</template>

<script>
    import recommendationItem from "../components/recommendation_item.vue";
    import axios from "axios";
    export default {

        data(){
            return {
                recommendation:"为你推荐",
                nextGroup:"换一组",
                recommendations:[]
            };
        },
        created(){

            this.getRecommendations();
        },
        methods:{
            getRecommendations(){
                axios.get("/api/recommendations")
                    .then(response=>{
                        this.recommendations = response.data;
                    })
                    .catch(()=>{
                        this.recommendations = [];
                    })
            }
        },
        components:{
            recommendationItem
        }
    }
</script>
