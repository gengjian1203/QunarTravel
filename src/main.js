// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 修复部分机型点击延迟300毫秒的bug
import fastclick from 'fastclick'
// 重置CSS样式
import './assets/style/reset.css'
// 修复1像素边框的bug
import './assets/style/border.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
