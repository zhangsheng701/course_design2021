<template>
    <div class="login-container">
        <Header>

    </Header>
<div class = 'login'>

<div class="login-cracel">
    <el-carousel :interval="4000" type="card" height="400px" class="le">
        <el-carousel-item v-for="(item) in imgList" :key="item">
        <img :src="item.imgPath" alt="" @click="mt">
        </el-carousel-item>
    </el-carousel>
</div>

<transition enter-active-class = "animate__animated animate__flipInY"
        leave-active-class = "animate__animated animate__flipOutY" mode="out-in">
    <div class="login-text" v-if="isLogin">
    <!-- <canvas id="canv" width="1576" height="743"> -->
        <span class="login-text-title">登录</span>
        <span style="color:white;display:block;position:absolute;right:10%;font-size:18px;top:80px;font-family:heiti;color:yellow;background-color:black">{{loginmsg}}</span>

        <div class="login-text-username">
            <i class="el-icon-user"></i>
            <el-input v-model="username" placeholder="请输入用户名" class="login-text-user"></el-input>
            <!-- <input type="text" class="login-text-user" placeholder="请输入用户名"> -->
        </div>
        <div class="login-text-pwd">
            <i class="el-icon-key"></i>
            <el-input placeholder="请输入密码" v-model="password" show-password class="login-text-pwd-text"></el-input>
            <img src="http://localhost:9090/" alt="" srcset="">
        </div>
        <el-input v-model="keycode" placeholder="验证码" style="width:120px;height:50px;display:block;margin-top:20px;position:absolute;font-size:17px;left:50%;transform:translate(-70%)"></el-input>
        <!-- <input type="text" placeholder="验证码" style="width:120px;height:50px;display:block;margin-top:20px;position:absolute;right:20px;"> -->
        <button type="button" class="login-btn" @click="loginClick">登录</button>
        <div class="hasUser" @click="isLogin=!isLogin">还未注册，点此注册</div>       

    <!-- </canvas> -->
</div>

<div class="login-text" v-else>
    <!-- <canvas id="canv" width="1576" height="743"> -->
        <span class="login-text-title">注册</span>
        <span style="color:white;display:block;position:absolute;right:10%;font-size:18px;top:80px;font-family:heiti;color:yellow;background-color:black">{{loginmsg}}</span>

        <div class="login-text-username">
            <span style="color:white;font-size:25px;font-family:kaiti;line-height:40px;margin-right:23px">用户名:</span>
            <el-input v-model="username" placeholder="请输入用户名" class="login-text-user"></el-input>
            <!-- <input type="text" class="login-text-user" placeholder="请输入用户名"> -->
        </div>
        <div class="login-text-pwd">
            <span style="color:white;font-size:25px;font-family:kaiti;line-height:40px;margin-right:32px">密 码:</span>
            <el-input placeholder="请输入密码" v-model="password" show-password class="login-text-pwd-text"></el-input>
        </div>        
        <div class="login-text-pwd">
            <span style="color:white;font-size:25px;font-family:kaiti;line-height:40px">确认密码:</span>
            <el-input placeholder="请输入密码" v-model="repassword" show-password class="login-text-pwd-text"></el-input>
        </div>
            <span style="color:yellow;font-size:23px;font-family:kaiti;margin-left:160px">{{pswdDif}}</span>
        <button type="button" class="login-btn" @click="loginClick" style="margin-top:20px">注册</button>
        <div class="hasUser" @click="isLogin=!isLogin">已经有账号了，点此登录</div>       
    <!-- </canvas> -->
</div>
</transition>



</div>
<bottom></bottom>
    </div>

</template>

<script>
    import Header from '../components/Header.vue'
    import Bottom from '../components/Bottom.vue';
    import axios from 'axios'
    // import('../assets/js/bg')
    export default {
        components:{
            Header,
            Bottom
        },
        data() {
            return {
                isLogin:false,
                pswdDif:"",
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
                password:"",
                username:"",
                keycode:"",
                repassword:"",
                loginmsg:"用户名或密码错误",
            }
        },
        methods: {
            mt(){
                console.log('111');
            },
            loginClick(){
                console.log(111);
                axios.post('http://localhost:8001/login',{'username':this.username,'passoword':this.password,'code':this.keycode}).then((resp)=>{
                    console.log(resp);
                })
                console.log(this.username);
                console.log(this.password);
                console.log(this.keycode);
            }
        },
        watch:{
            repassword(){
                this.pswdDif = (this.password===this.repassword)?"":"两次密码输入不一致"
            }
        },
        created() {
            axios.defaults.withCredentials = true;
            axios.get("http://localhost:9090/captcha").then((res)=>{
                console.log(res);
            })
        },
    }
</script>

<style lang="scss" scoped>
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
    // background-color: rebeccapurple;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: transparent;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: transparent;
  }

  .le {
      background-color: black;
      text-align: center;
      opacity: 0.9;
      border-radius: 20px;
  }


  .login-container {
      width: 100vw;
      height: 100vh;
      min-height: 700px;
      min-width: 1480px;
  }
  .login {
      width: 100%;
      height: 80%;
    //   background-color: red;
      position: relative;
     background: url("../assets/img/headerBg.jpg");
  }
  .login-cracel {
      position: absolute;
      width: 50%;
      height: 500px;
      top: 50%;
      margin-top: -180px;
    //   background-color: black;
    //   opacity: 1;
    
  }
  .login-text {
      position: absolute;
      width: 26%;
      height: 80%;
    //   background-color: black;
      background: url("../assets/img/loginbg2.webp");
      right: 130px;
      top: 50%;
      margin-top: -230px;
      border-radius: 20px;
      opacity: 0.9;
      box-shadow: 3px 3px 30px 1px skyblue;
    //   display: flex;
    //   justify-content: space-around;
    //   align-items: center;
    //   flex-direction: column;
  }
  .login-text-title {
      font-family: kaiti;
      display: block;
      width: 100%;
      font-size: 30px;
      text-align: center;
      margin-top: 40px;
      color: white;
  }
  .login-text-user {
      display: block;
      width: 250px;
      height: 40px;
      border-style: none;
      outline-style: none;
      border-radius: 5px;
  }
  .login-text-pwd {
      display: block;
      width: 250px;
      height: 40px;
  }

  .login-text-username {
      display: flex;
    //   background-color: green;
      justify-content: center;
      margin-top: 40px;
  }
  .login-text-pwd {
      display: flex;
    //   background-color: green;
      justify-content: center;
      width: 100%;
      margin-top: 40px;
  }
  .login-text-pwd-text {
      width: 250px;
  }
  i {
      font-size: 35px;
      color: white;
  }
  .login-btn {
      position: absolute;
      width: 65px;
      height: 45px;
      left: 50%;
      margin-top: 80px;
      transform: translate(-50%);
      border-radius: 15px;
      outline-style: none;
      border-style: none;
      font-size: 25px;
      font-family: kaiti;
  }
  .login-btn:hover {
      cursor: pointer;
      background: url('../assets/img/loginbg2.webp') ceil($number: 0);
      color: white;
  }
  input::-webkit-input-placeholder {
        color: black;
      }
      input::-moz-input-placeholder {
        color: black;
      }
      input::-ms-input-placeholder {
        color: black;
      }
    .hasUser:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
    .hasUser {
        color:yellow;
        font-size:23px;
        font-family:kaiti;
        position:absolute;
        bottom:30px;
        right:10px;
        border-radius: 5px;
    }
</style>