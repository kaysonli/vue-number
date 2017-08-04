import Vue from 'vue'
import App from './App.vue'
import VueNumeric from './index.js'
Vue.use(VueNumeric)
new Vue({
  el: '#app',
  render: h => h(App)
});
