// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Vuex from 'vuex'
import store from './store'


// Vue.use(Vuex)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
// Vue.use(store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
