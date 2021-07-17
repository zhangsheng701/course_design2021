<template>
    <div class="index-container">
      <header-link>
        <template v-slot:header-right>
            <button class="header-login-btn">
                <i class="iconfont icon-denglu header-login-btn-icon"></i>
                <a class="header-login-btn-content">
                  <router-link to="/login">登录</router-link>
                </a>
            </button>
            </template>
      </header-link>
      <index-image></index-image>
      <bottom></bottom>
    </div>
  </template>
  
<script>
  
  import HeaderLink from '../components/Header.vue'
  import IndexImage from '../components/IndexImage.vue'
  import Bottom from '../components/Bottom.vue'
  import axios from 'axios'

    export default {
      components:{
        HeaderLink
        ,IndexImage,
        Bottom
      },
      data() {
        return {
          msg:"hello"
        }
      },
      created() {
        axios.get("http://localhost:8081/ebook").then((response)=>{
          console.log(response);
        })
      },
      methods: {

    },
    }
</script>
  
  <style lang="scss" scoped>
    .index-container {
      width: 100vw;
      height: 100vh;
    }
  </style>