<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Login_screen />
    <br/>
    <br/>
    <hr/>
    <el-button @click="goInfoUpdateForm">基本資料編集</el-button>
    <hr/>
    <router-view/>
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
  methods:{
    goInfoUpdateForm(){
      this.$router.push('/InfoUpdateForm')
    }
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
