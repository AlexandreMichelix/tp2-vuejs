import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import vTitle from 'vuejs-title'
Vue.use(vTitle);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
