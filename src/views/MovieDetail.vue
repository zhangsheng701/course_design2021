<template>
    <div class="md-container">
        <Header>
            <template v-slot:header-right>
                <span style="color:white" v-if="isLogin">登录</span>
                <span v-else style="color:white;font-size:20px">欢迎你<i class="el-icon-user" style="color:white;font-size:30px"></i>{{username}}</span>
                
            </template>
        </Header>
        <div class="md-center">
            <div class="md-center-detail" v-for="(value,index) in mvdetail" :key="index">
                <h2 style="margin-left:80px;padding-bottom:10px">{{value.name}} <span>({{value.year}})</span></h2>
                <div class="md-center-detail-top">
                    <img :src="value.imgurl" alt="" srcset="">
                    <table class="md-center-detail-top-table">
                        <tr>
                            <td>导演</td>
                            <td>{{value.author}}</td>
                        </tr>
                        <tr>
                            <td>主演</td>
                            <td>{{value.zhuyan}}</td>
                        </tr>
                        <tr>
                            <td>类型</td>
                            <td>{{value.leixing}}</td>
                        </tr>
                        <tr>
                            <td>制片国家/地区</td>
                            <td>{{value.guojia}}</td>
                        </tr>
                        <tr>
                            <td>语言</td>
                            <td>{{value.language}}</td>
                        </tr>
                        <tr>
                            <td>片长</td>
                            <td>{{value.time}}</td>
                        </tr>
                    </table>
                    <div style="width:320px;height:320px;position:absolute;right:20px;top:30px;">
                        <h3 style="padding:20px">相似推荐</h3>
                        <el-carousel height="400px" direction="vertical" :autoplay="true">
                            <el-carousel-item v-for="(item,value) in imgList" :key="value">
                            <img :src="item.imgPath" alt="" srcset="" style="border-radius:10px;">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="md-sore">
                    <el-rate
                        v-model="value.score"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}"
                        :max=10>
                    </el-rate>
                </div>
                <div class="md-detail-text">
                    <h3 style="padding:20px">影片-{{value.name}}--剧情简介</h3>
                    <span style="font-size:19px" >{{value.detailtext}}</span>
                </div>
            </div>
        </div>

        <bottom></bottom>
    </div>
    
</template>

<script>
    import Header from '../components/Header.vue'
    import Bottom from '../components/Bottom.vue'
    export default {
        components:{Header,Bottom},
        data() {
            return {
                isLogin:false,
                username:"",
                mvdetail:[{name:'大学',year:"2021",
                author:"孙虹",zhuyan:"迁移/财政",leixing:"纪录片",
                guojia:"中国大陆",language:"普通话",time:"110分钟",
            imgurl:require('../assets/img/movie1.webp'),score:8.0,
        detailtext:"　在清华园里，有四个人正站在自己人生的路口。他们之中，有刚历经高考、一波三折地考入心仪学府的第一代“00”后大学生，有即将离开象牙塔、面临艰难抉择的博士毕业生，有旅美归来入职清华、满怀“观天”理想却挑战重重的青年教师，有耄耋之年、荣休后依然坚持站立三尺讲台的老院士。影片以三年的悠悠光景，诉说了四个清华人一生的理想，以及在他们身后属于这所大学的永恒青春。 "}],
        imgList:[{
                    name:'明日之战',
                    imgPath:require('../assets/img/index1.webp')
                },{
                    name:'夏日友情',
                    imgPath:require("../assets/img/index6.webp")
                },{
                    name:'你的婚礼',
                    imgPath:require("../assets/img/index7.webp")
                },],
            }
        },
        created() {
            const username = localStorage.getItem("user")
            if(username){
                this.isLogin = false;
            }
            else {
                this.isLogin = true;
                this.username = ""
            }
        },
    }
</script>

<style  scoped>
    .md-container {
        width: 100vw;
        height: 100vh;
    }
    .md-center {
        position: relative;
        width: 1040px;
        /* height: 100%; */
        /* background: url('../assets/img/zirang.webp'); */
        /* background-position: center; */
        background-color: rgb(210, 248, 248);
        padding: 20px 15px;
        left: 50%;
        margin-left: -520px;
        border-radius: 20px;
    }
    .md-center-detail-top {
        display: flex;
    }
    .md-center-detail-top img{
        width: 260px;
        vertical-align: top;
        border-radius: 2px;
    }
    .md-center-detail-top table {
        /* background-color: royalblue; */
        height: 280px;
        margin-top: 30px;
        margin-left: 20px;
        border-spacing:10px
    }
    .md-center-detail {
        margin-top: 30px;
    }
    img:hover {
        cursor: pointer;
    }

    .md-detail-text {
        background-color: rgb(200, 243, 207);
        padding: 10px 20px;
        border-radius: 20px;
        margin-top: 20px;
    }
</style>