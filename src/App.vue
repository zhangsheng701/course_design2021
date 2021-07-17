<template>
  <div>
    <!-- <router-link to="/login">login</router-link>
    <router-link to="/">index</router-link> -->
    <router-view></router-view>
    <!-- <home></home> -->
  </div>
</template>

<script>
  import Home from './views/Home.vue'
  export default {
    components:{
      Home
    }
  }
</script>

<style lang="scss" scoped>

</style>