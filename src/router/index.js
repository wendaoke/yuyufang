import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)
const diaodianlst = r => require.ensure([], () => r(require('@/page/diaodian/list')), 'diaodianlst')
const diaodiandetail = r => require.ensure([], () => r(require('@/page/diaodian/detail')), 'diaodiandetail')
const home = r => require.ensure([], () => r(require('@/page/home/index')), 'home')
export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },        
        {
            path: '/diaodianlst',
            component: diaodianlst
        },
        {
        	name:'diaodiandetail',
            path: '/diaodiandetail',
            component: diaodiandetail
        },                
        ]
    }
  ]
})
