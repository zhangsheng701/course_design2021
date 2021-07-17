<template>
    <div class="mv-container">
        <Header></Header>
        <div class="mv-center">
            <div class="mv-center-title" style="font-size:37px;padding-left:20px">电影筛选</div>
            <div class="mv-center-divide">
                
                <div class="mv-div">
                    <span>分类</span>
                    <a v-for="value in classifyList" :key="value" href="#">{{value}}</a>
                </div>
                <div class="mv-div">
                    <span>地区</span>
                    <a v-for='value in area' :key="value" href="#">{{value}}</a>
                </div>                
                <div class="mv-div">
                    <span>年份</span>
                    <a v-for='value in years' :key="value" href="#">{{value}}</a>
                </div>
            </div>

            <div class="sort-check">
                <span v-for="(value,index) in sort_check_list" :key="value" :class="{'active':sort_check===index}" @click="sortChangeBtn(index)">{{value}}</span>
            </div>
            <div class="mv-content">
                <a v-for="(value,index) in imgPathList" :key="index" href="/login">
                    <img :src="value" alt="" srcset="" >
                    <p>你的婚礼</p>
                </a>
               
            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Bottom from '../components/Bottom.vue'
    export default {
        components:{Header,Bottom},
        data() {
            return {
                classifyList:['剧情','喜剧','动作','爱情','科幻','音乐','歌舞','武侠'],
                area:['中国大陆','中国台湾','中国香港','日本','韩国','美国'],
                years:['2021','2020','2019','2018','2017'],
                sort_check_list:['按时间排序','按评分排序','按人气排序'],
                sort_check:0,
                imgPathList:[require('../assets/img/index1.webp'),
                require('../assets/img/index6.webp'),
                require('../assets/img/index7.webp'),
                require('../assets/img/index7.webp'),
                require('../assets/img/index7.webp'),
                require('../assets/img/index7.webp'),
                require('../assets/img/index7.webp'),
                require('../assets/img/index7.webp'),
                require('../assets/img/index7.webp'),
                require('../assets/img/index7.webp'),
                require('../assets/img/index7.webp'),
                require('../assets/img/index7.webp')],
            }
        },
        methods: {
            sortChangeBtn(index){
                this.sort_check=index
                // console.log(typeof index);
                // console.log(this.sort_check===index);
            }
        },
    }
</script>

<style scoped>
    .mv-container {
        width: 100vw;
        height: 100vh;
        min-width: 500px;
    }
    .mv-center {
        width: 1280px;
        background-color: whitesmoke;
        position: relative;
        margin: 20px auto;
        border-radius: 10px;
    }
    .mv-center-divide {
        padding-left: 40px;
        margin-top: 20px;
    }
    .mv-center-divide a{
        list-style: none;
        margin-left: 30px;
        text-decoration: none;
        font-size: 18px;
    }
    .mv-div {
        height: 30px;
    }
    .mv-center-divide span {
        font-size: 20px;
    }
    .sort-check {
        padding-left: 30px;
        margin-top:20px
    }
    .sort-check span {
        margin-left: 20px;
        font-size: 20px;
        display: inline-block;
        padding: 5px;
        border-radius: 5px;
    }
    .sort-check span:hover {
        cursor: pointer;
    }
    .active {
        background-color: blue;
    }
    .mv-content {
        display: flex;
        flex-wrap: wrap;
    }
    .mv-content img {
        width: 200px;
        margin-left: 45px;
        margin-top: 20px;
        border-radius: 5px;
    }
    .mv-content a {
        text-decoration: none;
        text-align: center;
        display: inline-block;
    }
    .mv-content p {
        font-size: 20px;
    }
</style>