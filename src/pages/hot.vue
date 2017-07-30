<style scoped>

    div.post-box {
        position: relative;
        padding: 0;

    }

</style>

<template>

        <div class="post-box" ref="container" v-if="posts.length > 0">
            <hot v-for="item in posts"
                 :key="item.id"
                 :name="item.name"
                 :avatarUrl="item.avatarUrl"
                 :postTime="item.postTime"
                 :commentCount="item.commentCount"
                 :likeCount="item.likeCount"
                 :shareCount="item.shareCount"
                 :videoUrl="item.videoUrl"
                 :imgCount="item.imgCount"
                 :bigImgsUrl="item.bigImgsUrl"
                 :miniImgsUrl="item.miniImgsUrl"
                 @loaded="addLoadedItemCount()"
                 ref="post"
            >

            </hot>
        </div>

</template>

<script>
    import hot from "../components/latest_post.vue";
    import {throttle,debounce} from "throttle-debounce";
    import Api from "../api";

    export default {

        data(){
            return {
                posts: [],
                itemLoaded: 0,
                resourcesLength:0
            };
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {

            });
        },
        beforeCreate(){

        },
        created(){
            this.fetchHotData();
            const that = this;
            window.onresize = debounce(200,(()=>{
                return ()=>{
                    console.log("resizing .........");
                    that.waterfall();
                }
            })());

            window.onscroll = throttle(200,(()=>{
                return ()=>{
                    if(this.canLoadData()){
                        console.log("can load data");
                    }
                    console.log("scrolling");
                }
            })());
        },
        beforeMount(){

        },
        mounted(){

        },
        methods: {

            fetchHotData(){
                Api.getHotData()
                    .then(response => {
                        const data = response.data;
                        this.posts = data;
                        for(let res of data){
                            if(res.videoUrl === ''){
                                this.resourcesLength+=parseInt(res.imgCount);
                            }else{
                                this.resourcesLength+=1;
                            }

                        }
                    })
                    .catch(()=>{
                        this.posts = [];
                    })
            },
            addLoadedItemCount(){
                this.itemLoaded += 1;
            },
            canLoadData(){
                const num = this.posts.length;
                const topLen = this.$refs.post[num-1].$el.offsetTop+Math.floor(this.$refs.post[num-1].$el.offsetHeight/2);
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                const viewPortHeight = document.documentElement.clientHeight || document.body.clientHeight;
                return(topLen < (viewPortHeight+scrollTop)) ;
            },
            getMinIndex(arr, min){

                for (let i = 0, len = arr.length; i < len; i++) {
                    if (arr[i] === min) {
                        return i
                    }
                }
            },
            waterfall() {

                const containerEl = this.$refs.container;
                const postWidth = this.$refs.post[0].$el.offsetWidth;
                const postNumber = this.posts.length;
                const col = Math.floor((document.body.clientWidth || document.documentElement.clientWidth ) / postWidth);
                containerEl.style.width = col * postWidth + "px";
                containerEl.style.margin = "0 auto";
                const colHeight = [];

                for (let i = 0; i < postNumber; i++) {
                    if (i < col) {
                        colHeight.push(this.$refs.post[i].$el.offsetHeight);
                    } else {

                        let minHeight = Math.min(...colHeight);
                        let minIndex = this.getMinIndex(colHeight, minHeight);
                        this.$refs.post[i].$el.style.position = "absolute";
                        this.$refs.post[i].$el.style.top = minHeight + "px";
                        this.$refs.post[i].$el.style.left = this.$refs.post[minIndex].$el.offsetLeft + "px";
                        colHeight[minIndex] += this.$refs.post[i].$el.offsetHeight;
                    }
                }


            }
        },
        components: {
            hot
        },
        watch: {
            itemLoaded(newValue) {
                if (newValue === this.resourcesLength) {
                   this.waterfall();
                }
            }
        }

    }
</script>
