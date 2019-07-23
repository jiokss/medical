// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import Vuex from 'vuex'
import Mockjs from '../src/mock/mock'
import Preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import Calendar from 'vue-mobile-calendar'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(Preview)
Vue.use(Calendar)
Vue.use(Vuex)
//自定义指令
Vue.directive('lfcous', function(el, pra, a) {

  let oInput = el.querySelector('input');
  oInput.onfocus = function() {
         //创建focus的事件
         console.log(document.body.clientHeight)

  };

  oInput.onblur = function() {
        //同时创建blur事件
  };
})

//全局挂载axios
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
