import Vue from 'vue'
import App from './App'
import store from './store/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
