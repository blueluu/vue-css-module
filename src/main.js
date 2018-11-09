import Vue from 'vue'
import App from './App.vue'
import global from './style/custom/global.module.css'; 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
