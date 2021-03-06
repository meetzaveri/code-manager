import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new-code-snippet',
      name: 'New Code Snippet',
      component: Home
    }
  ]
})
