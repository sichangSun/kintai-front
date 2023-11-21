import Vue from 'vue';
import Router from 'vue-router'
import Login from './components/Login_screen.vue'
import HeaderMenu from './components/HeaderMenu_screen.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
        },
        {
            path: '/HeaderMenu',
            name: 'HeaderMenu',
            component: HeaderMenu,
        }
    ]
})