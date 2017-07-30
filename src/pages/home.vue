<style scoped>
    .icon {
        display: inline-block;
        vertical-align: middle;
    }

    #homepage {
        width: 100%;
        background-color: #EEEEEE;
    }

    div.col-lg-3 {
        height: 200px;
        text-align: center;
    }

    div.col-lg-3 img {

        width: 200px;
        height: 200px;
        border: solid 5px #fff;
        border-radius: 100px;
        margin-top: -100px;
    }
    div.col-lg-6.selfIntro {
        padding: 0;
    }
    div.col-lg-6 ul {
        padding: 0;
        margin: 0;
        text-decoration: none;
        height: 100px;
        text-align: center;
    }

    div.col-lg-6 ul:first-of-type {
        border-bottom: solid 1px #ccc;
    }

    div.col-lg-6 ul li {
        display: inline-block;
        margin-right: -5px;
        width: 25%;
        height: 100%;
        font-size: 1.2em;
        line-height: 100px;
    }

    div.col-lg-6 ul:first-of-type li:last-of-type span {

        padding: 5px 40px;
        border-radius: 5px;
        border: solid 1px #ff0000;
        color: #ff0000;
    }
    li span.clicked {
        border-bottom: solid 1px #ff0000;
    }
</style>

<template>
    <div id="homepage" v-if="info">
        <avatar-background :avatarBg="info.backgroundUrl"></avatar-background>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <img :src="info.avatarUrl" alt="avatar">
                </div>

                <div class="col-lg-6 selfIntro">
                    <ul>
                        <li>{{info.name}}</li>
                        <li>{{info.joinTime}}</li>
                        <li>
                            <span>
                               <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-male" v-if="parseInt(info.gender === 1)"></use>
                                   <use xlink:href="#icon-female" v-else></use>
                               </svg>
                            </span>
                        </li>
                        <li>
                            <span>{{follow}}</span>
                        </li>
                    </ul>
                    <ul>
                        <li >
                            <span @click="showPosts()" :class="{clicked:showPostsClicked}">
                                {{prints}}
                                {{info.postSum}}
                            </span>

                        </li>
                        <li >
                            <span @click="showLoves()" :class="{clicked:showLovesClicked}">
                                {{like}}
                                {{info.loveSum}}
                            </span>
                        </li>
                        <li >
                            <span @click="showFollowers()" :class="{clicked:showFollowersClicked}">
                                {{followers}}
                                {{info.followerSum}}
                            </span>

                        </li>
                        <li >
                            <span @click="showFans()" :class="{clicked:showFansClicked}">
                                {{fans}}
                                {{info.fansSum}}
                            </span>

                        </li>
                    </ul>
                </div>

                <post
                    v-for="item in posts"
                    v-show="showPostsClicked"
                    :key="item.id"
                    :name="item.name"
                    :avatarUrl="item.avatarUrl"
                    :postTime="item.postTime"
                    :videoUrl="item.videoUrl"
                    :bigImgsUrl="item.bigImgsUrl"
                    :imgCount="item.imgCount"
                    :comments="item.comments"
                    :text="item.text"
                >
                </post>

                <post
                    v-for="item in loves"
                    v-show="showLovesClicked"
                    :key="item.id"
                    :name="item.name"
                    :avatarUrl="item.avatarUrl"
                    :postTime="item.postTime"
                    :videoUrl="item.videoUrl"
                    :bigImgsUrl="item.bigImgsUrl"
                    :imgCount="item.imgCount"
                    :comments="item.comments"
                    :text="item.text"
                    :isLove="item.isLove"
                >
                </post>

                <div class="row" v-show="showFollowersClicked">
                    <follower

                            v-for="item in myFollowers"
                            :key="item.id"
                            :miniBgUrl="item.miniBgUrl"
                            :avatarUrl="item.avatarUrl"
                            :name="item.name"
                            :joinTime="item.joinTime"
                            :gender="item.gender"
                    >
                    </follower>
                </div>
                <div class="row" v-show="showFansClicked">
                    <follower

                        v-for="item in myFans"
                        :key="item.id"
                        :miniBgUrl="item.miniBgUrl"
                        :avatarUrl="item.avatarUrl"
                        :name="item.name"
                        :joinTime="item.joinTime"
                        :gender="item.gender"
                    >
                    </follower>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import avatarBackground from "../components/avatar_background.vue";
    import post from "../components/post.vue";
    import follower from "../components/follower.vue";
    import axios from "axios";
    export default {
        data(){
            return {
                info:null,
                myFans:[],
                myFollowers:[],
                loves:[],
                posts:[],
                follow: "关注",
                prints: "足迹",
                like: "喜欢",
                followers: "关注",
                fans: "粉丝",
                showPostsClicked:false,
                showLovesClicked:false,
                showFollowersClicked:false,
                showFansClicked:false
            };
        },
        created(){
            this.getInfo();
            this.showPosts();
        },
        mounted(){

        },
        methods:{
            showPosts(){
                this.getPosts();
                this.showPostsClicked = true;
                this.showFollowersClicked = false;
                this.showFansClicked = false;
                this.showLovesClicked = false;
            },
            showFollowers(){
                this.getFollowers();
                this.showFollowersClicked = true;
                this.showPostsClicked = false;
                this.showFansClicked = false;
                this.showLovesClicked = false;
            },
            showFans(){
                this.getFans();
                this.showFansClicked = true;
                this.showPostsClicked = false;
                this.showFollowersClicked = false;
                this.showLovesClicked = false;
            },
            showLoves(){
                this.getLoves();
                this.showLovesClicked = true;
                this.showPostsClicked = false;
                this.showFollowersClicked = false;
                this.showFansClicked = false;
            },
            getInfo(){
                axios.get("/api/qimu")
                    .then(response => {
                        this.info = response.data;
                    })
                    .catch(()=>{
                        this.info = null;
                    })
            },
            getPosts(){
                axios.get("/api/qimu/posts")
                    .then(response=>{
                        this.posts = response.data;
                    })
                    .catch(()=>{
                        this.posts = null;
                    })
            },
            getLoves(){
                axios.get("/api/qimu/loves")
                    .then(response=>{
                        this.loves = response.data;
                    })
                    .catch(()=>{
                        this.loves = null;
                    })
            },
            getFollowers(){
                axios.get("/api/qimu/followers")
                    .then(response=>{
                        this.myFollowers = response.data;
                    })
                    .catch(()=>{
                        this.myFollowers = null;
                    })
            },
            getFans(){
                axios.get("/api/qimu/followers")
                    .then(response=>{
                        this.myFans = response.data;
                    })
                    .catch(()=>{
                        this.myFans = null;
                    })
            }
        },
        components: {
            avatarBackground,
            post,
            follower
        }
    }
</script>
