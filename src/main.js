import Vue from 'vue'
import App from './App.vue'
// ElementUI導入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/input.css'
// Router導入
import VueRouter from "vue-router";
// Component導入
import InfoUpdateForm from "@/components/InfoUpdateForm.vue";


Vue.config.productionTip = false

// ElementUI導入
Vue.use(ElementUI);
// Router
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes:[
      {
        path:'/InfoUpdateForm',
        component:InfoUpdateForm
      }
      ]
})

new Vue({
  router,
  el:'#app',
  render: h => h(App),
}).$mount('#app')
