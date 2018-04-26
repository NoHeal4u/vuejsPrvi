import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Bar from './pages/Bar.vue'
import Foo from './pages/Foo.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
	{path: '/', component : Foo},
	{path: '/bar', component : Bar}
]

const router = new VueRouter({
	routes
})


new Vue({
  router,	
  render: h => h(App)
}).$mount('#app')
