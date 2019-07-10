import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/login'
import Content from '@/view/content'
import Test from '@/view/test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/content',
      name: 'Content',
      component: Content,
      children:[
        {
          path: 'test',
          name: 'test',
          component: Test,
        }
      ]
    }
  ]
})
