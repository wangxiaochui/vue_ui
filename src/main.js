import './third/flexible/flexible_css'
import './third/flexible/flexible'
import Vue from 'vue'
//import ElementUi from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'

//Vue.use(ElementUi)

import router from './js/router'
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
