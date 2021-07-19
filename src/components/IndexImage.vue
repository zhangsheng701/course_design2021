<template>
    <div class="movie">
        <div class="movie-top">
            <a href="#">新时代</a>
        <a href="#">新理念</a>
        <a href="#">新发展理念</a>
        <a href="#">新安全观</a>
        <a href="#">新时期</a>
        <a href="#">新思想</a>
        <a href="#">新征程</a>
        <a href="#">新胜利</a>
        <a href="#">新气象</a>
        <a href="#">新辉煌</a>
        <a href="#">新战略</a>
        <a href="#">新征程</a>
        <a href="#">新常态</a>
        <a href="#">新体制</a>
        <a href="#">新增长点</a>
        <a href="#">新局面</a>
        <a href="#">新成果</a>
        <a href="#">新平台</a>
        <a href="#">新机制</a>
        <a href="#">新进展</a>
        <a href="#">新作为</a>
        <a href="#">新常态</a>
        <a href="#">新动能</a>
        <a href="#">新要求</a>
        <a href="#">新模式</a>
        <a href="#">新形势</a>
        <a href="#">新格局</a>
        <a href="#">新期待</a>
        <a href="#">新动力</a>
        <a href="#">新业态</a>
        </div>
        <div class="movie-left">
            <router-link to="/">
                <img :src="imgShow" alt=""/>
            </router-link>
            
            <div class="moive-content">
                {{curimgName}}
            </div>
            <button class="moive-change"  @click="changeImage">
                <i class="el-icon-arrow-right icon"></i>
            </button>
        </div>
        <div class="movie-mid">
            <router-link to="/">
                <img :src="imgShow" alt=""/>
            </router-link>
            
            <div class="moive-content">
                {{curimgName}}
            </div>
            <button class="moive-change">
                <i class="el-icon-arrow-right icon"></i>
            </button>
            
        </div>
        <div class="movie-right">
            <router-link to="/">
                <img :src="imgShow" alt=""/>
            </router-link>
            <div class="moive-content">
                {{curimgName}}
            </div>
            <button class="moive-change">
                <i class="el-icon-arrow-right icon"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgPathList:[require('../assets/img/index1.webp'),require('../assets/img/index6.webp'),require('../assets/img/index7.webp')],
                imgName:['明日之战','夏日晴天','你的婚礼'],
                imgShow:require('../assets/img/index1.webp'),
                curPathNuj:0,
                curimgName:'明日之战'
            }
        },
        methods: {
            changeImage(){
                
                if(this.curPathNuj>=this.imgPathList.length-1){
                    console.log(true);
                    this.curPathNuj = 0;
                }
                else {
                    this.curPathNuj++;
                }
                this.imgShow = this.imgPathList[this.curPathNuj]
                this.curimgName = this.imgName[this.curPathNuj]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .movie {
        height: 80%;
        width: 100%;
        background: url("../assets/img/indexbg3.webp") center;
        display: flex;
        justify-content: space-around;
        // margin-bottom: 20px;
    }
    .movie-left,
    .movie-mid,
    .movie-right {
        position: relative;
        width: 300px;
        // background-color: black;
        margin-top: 90px;
        text-align: center;
        margin-bottom: 30px;
    }
    img {
        position: absolute;
        left: 0;
        bottom: 0;
        // display: none;
        width: 300px;
        height: 440px;
        transition: all ease 0.5s;
        border-radius: 10px;
    }
    img:hover {
        scale: 1.05;
        cursor: pointer;
    }
    .moive-change {
        position: absolute;
        right:0px;
        top: 50%;
        background-color: transparent;
        border-style: none;
        transition: all 0.5s;
    }
    svg:hover {
        scale: 1.3;
    }
    .moive-change:hover {
        scale: 1.2;
        cursor: pointer;
    }
    .moive-content {
        position: absolute;
        font-family: 'kaiti';
        font-size: 25px;
        font-weight: 900;
        left: 50%;
        margin-left: -40px;
        background-color: white;
        bottom: -30px;
        border-radius: 10px;
    }
    .moive-change:hover {
        scale: 1.2;
        cursor: pointer;
    }
    .moive-change {
        background-color:rgba(0, 0, 0, 0.432);
        border-radius: 10px;
    }
    .icon {
        font-size: 60px;
        color: rgb(141, 141, 248);
        font-weight:700;
        transition: all 0.5s;
    }
    .icon:hover {
        scale: 1.1;
    }
    .movie-top {
        position: absolute;
        width: 1280px;
        height: 130px;
        background: white;
        border-radius: 10px;
    }
</style>