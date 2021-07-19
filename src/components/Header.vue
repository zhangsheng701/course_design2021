<template>
    <div class="header-container">
        <div class="header-left">
            <img src="../assets/img/indexbg2.webp" alt="" srcset="" style="height:55px;width:55px;border-radius:50%" >
            <span style="color:white;line-height:50px;font-size:20px;margin-left:10px" class="stext">搜你所想</span>
        </div>
        <div class="header-search-container">
            <input type="text" class="header-center-search" placeholder="电影搜索" style="padding-left:20px" v-model="scontent">
            <!-- <input type="button" class="header-search-btn" value="搜索"> -->
            <button class="header-search-btn" @click="sclick">
                <i class="iconfont icon-sousuo"></i>
            </button>
        </div>
        <div class="header-right">
            <slot name="header-right"></slot>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                scontent:""
            }
        },
        methods: {
            sclick(){
                console.log(`http://localhost:8081/ebook/name?name=${this.scontent}`);
                axios.get(`http://localhost:8081/ebook/name?name=${this.scontent}`).then((resp)=>{
                    console.log(resp);
                })
            }
        },
    }
</script>

<style>
    .header-container {
        position: relative;
        width: 100%;
        height: 8%;
        display: flex;
        justify-content: space-between;
        background-color: black;
        opacity: 0.8;
        align-content: center;
    }
    .header-left {
        width: 20%;
        height: 100%;
        /* background-color: blue; */
    }
    .header-search-container {
        flex: 1;
        height: 100%;
        /* background-color: green; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-center-search {
        height: 40px;
        width: 50%;
    }
    .header-search-btn {
        display: flex;
        height: 40px;
        /* background-color: blue; */
        width: 50px;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        outline-style: none;
        border-style: none;
        border: solid 1px black;
        background-color: white;
    }
    .header-search-btn:hover {
        cursor: pointer;
        background-color: skyblue;
    }
    .header-search-btn li {
        height: 50px;
        color: blue;
    }
    .header-right {
        width: 10%;
        height: 100%;
        /* background-color: blue; */
        display: flex;
        align-items: center;

    }
    .header-login-btn {
        width: 70px;
        height: 40px;
        border-style: none;
        outline-style: none;
        background-color: white;
        border-radius: 10px;
    }
    .header-login-btn:hover {
        cursor: pointer;
        background-color: skyblue;
    }
    .header-login-btn-content {
        display: inline-block;
        margin-left: 5px;
        font-family: kaiti;
        font-size: 19px;
        color: blue;
    }
    .header-login-btn-icon {
        color: blue;
    }

    /* 设置span图标后的字体 */
    .stext {
        font: 700 100px "Comic Sans MS";
    color: white;
    text-shadow: 0 0 20px skyblue,
            10px -10px 30px skyblue,
            20px -20px 40px skyblue,
            -20px -60px 50px skyblue,
            0px -80px 60px skyblue,
            10px -40px 70px skyblue;
    }
</style>