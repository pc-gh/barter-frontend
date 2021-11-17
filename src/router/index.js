import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Head from '@/components/Head'
import Foot from '@/components/Foot'
import Main from '@/components/Main'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/index',
      name: 'Test',
      component: Test
    },
    {
      path:'/head',
      name:'Head',
      component: Head
    },
    {
      path:'/foot',
      name:'Foot',
      component: Foot

    }
  ]
})
