<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderMenu_screen/>
    <Employee_screen/>
    <!-- <Administrator_screen/> -->
    <!-- <Login_screen/> -->

    <router-view></router-view>
  </div>
</template>

<script>
// import Administrator_screen from './components/Administrator_screen.vue';
import Employee_screen from './components/Employee_screen.vue';
import HeaderMenu_screen from './components/HeaderMenu_screen.vue';
// import Login_screen from './components/Login_screen.vue';

export default {
  name: 'App',
  components: {
    // Login_screen,
    HeaderMenu_screen,
    // Administrator_screen,
    Employee_screen,
}
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
