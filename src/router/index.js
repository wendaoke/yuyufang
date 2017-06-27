import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)
const home = r => require.ensure([], () => r(require('@/page/home/index')), 'home')
const diaodianlst = r => require.ensure([], () => r(require('@/page/diaodian/list')), 'diaodianlst')
const diaodianadd = r => require.ensure([], () => r(require('@/page/diaodian/add')), 'diaodianadd')
const diaodiandetail = r => require.ensure([], () => r(require('@/page/diaodian/detail')), 'diaodiandetail')
const secondhandlst = r => require.ensure([], () => r(require('@/page/secondhand/list')), 'secondhandlst')
const secondhandadd = r => require.ensure([], () => r(require('@/page/secondhand/add')), 'secondhandadd')
const secondhanddetail = r => require.ensure([], () => r(require('@/page/secondhand/detail')), 'secondhanddetail')
export default new Router({
    routes: [{
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
                path: '/diaodian/',
                component: diaodianlst,
                children: [{
                        path: '',
                        redirect: 'list'
                    },
                    {
                        path: 'list',
                        component: diaodianlst,
                    },

                ]
            },
            {
                name: 'diaodiandetail',
                path: '/diaodian/detail',
                component: diaodiandetail
            },
            {
                name: 'diaodianadd',
                path: '/diaodian/add',
                component: diaodianadd
            },
            {
                path: '/secondhand/',
                component: secondhandlst,
                children: [{
                        path: '',
                        redirect: 'list'
                    },
                    {
                        path: 'list',
                        component: secondhandlst,
                    },

                ]
            },
            {
                name: 'secondhanddetail',
                path: '/secondhand/detail/:id',
                component: secondhanddetail
            },
            {
                name: 'secondhandadd',
                path: '/secondhand/add',
                component: secondhandadd
            },
        ]
    }]
})