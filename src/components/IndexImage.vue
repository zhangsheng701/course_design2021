<template>
    <div class="movie">
        <div class="movie-left">
            <img :src="imgShow" alt=""/>
            <div class="moive-content">
                {{curimgName}}
            </div>
            <button class="moive-change"  @click="changeImage">
                <svg t="1625899219713" class="icon" viewBox="0 0 1546 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7119" width="32" height="32"><path d="M296.30252863 557.70384765H1130.12174963L902.27529663 784.69819165a62.772006 62.772006 0 0 0-0.61747 88.137676 61.006042 61.006042 0 0 0 87.125026 0.654519l333.730218-332.557026a62.747308 62.747308 0 0 0-0.345783-89.125629L988.41237063 124.27691265a61.080138 61.080138 0 0 0-87.125026 1.333735 62.784356 62.784356 0 0 0 1.333735 88.112978l223.437717 219.313017H296.30252863C262.26757863 433.03664265 234.66666663 460.93393965 234.66666663 495.37641965s27.600912 62.327428 61.635862 62.327428z m0 0" p-id="7120" fill="#1296db"></path></svg>
            </button>
        </div>
        <div class="movie-mid">
            <img src="../assets/img/index1.webp" alt=""/>
            <div class="moive-content">
                {{curimgName}}
            </div>
            <button class="moive-change">
                <svg t="1625899219713" class="icon" viewBox="0 0 1546 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7119" width="32" height="32"><path d="M296.30252863 557.70384765H1130.12174963L902.27529663 784.69819165a62.772006 62.772006 0 0 0-0.61747 88.137676 61.006042 61.006042 0 0 0 87.125026 0.654519l333.730218-332.557026a62.747308 62.747308 0 0 0-0.345783-89.125629L988.41237063 124.27691265a61.080138 61.080138 0 0 0-87.125026 1.333735 62.784356 62.784356 0 0 0 1.333735 88.112978l223.437717 219.313017H296.30252863C262.26757863 433.03664265 234.66666663 460.93393965 234.66666663 495.37641965s27.600912 62.327428 61.635862 62.327428z m0 0" p-id="7120" fill="#1296db"></path></svg>
            </button>
            
        </div>
        <div class="movie-right">
            <img src="../assets/img/index1.webp" alt=""/>
            <div class="moive-content">
                {{curimgName}}
            </div>
            <button class="moive-change">
                <svg t="1625899219713" class="icon" viewBox="0 0 1546 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7119" width="32" height="32"><path d="M296.30252863 557.70384765H1130.12174963L902.27529663 784.69819165a62.772006 62.772006 0 0 0-0.61747 88.137676 61.006042 61.006042 0 0 0 87.125026 0.654519l333.730218-332.557026a62.747308 62.747308 0 0 0-0.345783-89.125629L988.41237063 124.27691265a61.080138 61.080138 0 0 0-87.125026 1.333735 62.784356 62.784356 0 0 0 1.333735 88.112978l223.437717 219.313017H296.30252863C262.26757863 433.03664265 234.66666663 460.93393965 234.66666663 495.37641965s27.600912 62.327428 61.635862 62.327428z m0 0" p-id="7120" fill="#1296db"></path></svg>
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
        background: url("../assets/img/index5.jpeg") center;
        display: flex;
        justify-content: space-around;
        // margin-bottom: 20px;
    }
    .movie-left,
    .movie-mid,
    .movie-right {
        position: relative;
        width: 25%;
        height: 90%;
        background-color: black;
        margin-top: 20px;
        text-align: center;
    }
    img {
        width: 100%;
        height: 100%;
        transition: all ease 0.5s;
    }
    img:hover {
        scale: 1.05;
        cursor: pointer;
    }
    .moive-change {
        position: absolute;
        right:20px;
        bottom: 20px;
        background-color: transparent;
        border-style: none;
    }
    svg:hover {
        scale: 1.3;
    }
    .moive-change:hover {
        cursor: pointer;
    }
    .moive-content {
        position: absolute;
        font-family: 'kaiti';
        font-size: 19px;
        font-weight: 900;
        left: 50%;
        margin-left: -40px;
        background-color: white;
        bottom: 10px;
        opacity: 0.8;
        border-radius: 10px;
    }

</style>