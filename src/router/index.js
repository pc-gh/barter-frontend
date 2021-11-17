import Vue from 'vue'
import Router from 'vue-router'
import HeadPart from '@/components/Head'
import FootPart from '@/components/Foot'
import Main from '@/components/Main'
import Look from '@/components/Look'
import Main2 from '@/components/Main2'
import Mine from '@/components/Mine'
import Upload from '@/components/Upload'



Vue.use(Router)

export default new Router({
  routes: [
{
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path:'/head',
      name:'HeadPart',
      component: HeadPart
    },
    {
      path:'/foot',
      name:'FootPart',
      component: FootPart

    },
    {
      path:'/look',
      name:'Look',
      component:Look


    },{
      path:'/main2',
      name:'Main2',
      component:Main2

    },
    {
      path:'/upload',
      name:'Upload',
      component:Upload

    },
    {
      path:'/mine',
      nmae:'Mine',
      component:Mine


    }

  ]
})
