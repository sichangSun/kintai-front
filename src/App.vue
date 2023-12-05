<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Login_screen />
<!--    基本資料編集テスト用-->
<!--    <br/>-->
<!--    <br/>-->
<!--    <hr/>-->
<!--    <el-button @click="toggleInfoUpdateForm">基本資料編集</el-button>-->
<!--    <hr/>-->
<!--    <router-view/>-->
  </div>
</template>

<script>
import Login_screen from './components/Login_screen.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Login_screen
  },
  methods: {
    // 基本資料編集用Toggle
    // toggleInfoUpdateForm() {
    //   // 获取当前路由路径
    //   const currentRoute = this.$router.currentRoute.path;
    //
    //   // 如果当前路由是 InfoUpdateForm，则关闭表单
    //   if (currentRoute === '/InfoUpdateForm') {
    //     this.$router.push('/'); // 返回到首页或其他适当的路由
    //   } else {
    //     this.$router.push('/InfoUpdateForm'); // 打开表单
    //   }
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
