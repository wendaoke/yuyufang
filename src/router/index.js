import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)
const home = r => require.ensure([], () => r(require('@/page/home/index')), 'home')
const diaodianlst = r => require.ensure([], () => r(require('@/page/diaodian/list')), 'diaodianlst')
const diaodianadd = r => require.ensure([], () => r(require('@/page/diaodian/add')), 'diaodianadd')
const diaodiandetail = r => require.ensure([], () => r(require('@/page/diaodian/detail')), 'diaodiandetail')
const secondhandlst = r => require.ensure([], () => r(require('@/page/secondhand/list')), 'secondhandlst')
const mysecondhandlst = r => require.ensure([], () => r(require('@/page/secondhand/mylist')), 'mysecondhandlst')
const secondhandadd = r => require.ensure([], () => r(require('@/page/secondhand/add')), 'secondhandadd')
const secondhanddetail = r => require.ensure([], () => r(require('@/page/secondhand/detail')), 'secondhanddetail')
const secondhandedit = r => require.ensure([], () => r(require('@/page/secondhand/edit')), 'secondhandedit')
const diaojilst = r => require.ensure([], () => r(require('@/page/diaoji/list')), 'diaojilst')
const diaojiadd = r => require.ensure([], () => r(require('@/page/diaoji/add')), 'diaojiadd')
const diaojidetail = r => require.ensure([], () => r(require('@/page/diaoji/detail')), 'diaojidetail')
const diaohuolst = r => require.ensure([], () => r(require('@/page/diaohuo/list')), 'diaohuolst')
const diaohuoadd = r => require.ensure([], () => r(require('@/page/diaohuo/add')), 'diaohuoadd')
const diaohuodetail = r => require.ensure([], () => r(require('@/page/diaohuo/detail')), 'diaohuodetail')
const aboutme = r => require.ensure([], () => r(require('@/page/aboutme/index')), 'aboutme')
const myinfo = r => require.ensure([], () => r(require('@/page/aboutme/myinfo')), 'myinfo')
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
                path: '/secondhand/detail',
                component: secondhanddetail
            },
            {
                name: 'secondhandadd',
                path: '/secondhand/add',
                component: secondhandadd
            },
            {
                name: 'secondhandedit',
                path: '/secondhand/edit',
                component: secondhandedit
            },
            {
                name: 'mysecondhandlst',
                path: '/secondhand/mylst',
                component: mysecondhandlst
            },
            {
                path: '/diaoji/',
                component: diaojilst,
                children: [{
                        path: '',
                        redirect: 'list'
                    },
                    {
                        path: 'list',
                        component: diaojilst,
                    },

                ]
            },
            {
                path: '/diaoji/detail',
                component: diaojidetail,
            },
            {
                path: '/diaohuo/',
                component: diaohuolst,
                children: [{
                        path: '',
                        redirect: 'list'
                    },
                    {
                        path: 'list',
                        component: diaohuolst,
                    },

                ]
            },
            {
                path: '/diaohuo/detail',
                component: diaohuodetail,
            },
            {
                path: '/aboutme',
                component: aboutme,
            },
            {
                path: '/aboutme/myinfo',
                component: myinfo,
            },
        ]
    }]
})