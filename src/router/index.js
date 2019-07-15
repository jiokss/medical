import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/login'
import Content from '@/view/content'
import Test from '@/view/test'
import Service from '@/view/service'

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
      redirect: '/content/test',
      children:[
        {
          path: 'test',
          name: 'test',
          component: Test,
        },
        {
          path: 'service',
          name: 'service',
          component: Service,
        }
      ]
    }
  ]
})
