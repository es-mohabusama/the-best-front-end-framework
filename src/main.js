import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Hello from './components/Hello'
import reverse from './components/reverseWords'


const routes = [
	{ path: '/', component: Hello },
	{ path: '/reverse', component: reverse }

]


const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')