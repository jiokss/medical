import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/login'
import Content from '@/view/content'
import Test from '@/view/test'
import Service from '@/view/service'
import Mine from '@/view/mine'
import ChangePhone from '@/view/changePhone'
import Consultation from '@/view/consultation'

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
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine,
        }

      ]
    },
    {
      path: '/changePhone',
      name: 'changePhone',
      component: ChangePhone,
    },
    {
      path: '/consultation',
      name: 'consultation',
      component: Consultation,
    }
  ]
})
