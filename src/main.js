import Vue from 'vue'
import App from './App.vue'
// ElementUI導入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/input.css'

Vue.config.productionTip = false

// ElementUI導入
Vue.use(ElementUI);

new Vue({
  el:'#app',
  render: h => h(App),
}).$mount('#app')
