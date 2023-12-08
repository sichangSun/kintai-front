import Vue from 'vue';
import Router from 'vue-router'
import Login from './components/Login_screen.vue'
import HeaderMenu from './components/HeaderMenu_screen.vue'
import Employee from './components/Employee_screen.vue';
import Administrator from './components/Administrator_screen.vue';
import PasswordChange from './components/PasswordChange_screen.vue'; 
import MemberManage from './components/MemberManage_screen.vue'; 
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'Login', component: Login},
        { path: '/HeaderMenu', name: 'HeaderMenu', component: HeaderMenu },
        { path: '/Employee', name: 'Employee', component: Employee },
        { path: '/Administrator', name: 'Administrator', component: Administrator },
        { path: '/PasswordChange', name: 'PasswordChange', component: PasswordChange },
        { path: '/MemberManage', name: 'MemberManage', component: MemberManage },
    ]
})