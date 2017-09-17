import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import store from '../store/store'
import * as types from '../store/types'

Vue.use(VueRouter)
const home = r => require.ensure([], () => r(require('@/page/home/index')), 'home')
const login = r => require.ensure([], () => r(require('@/page/home/login')), 'login')
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
const routes = [{
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
            meta: {
                requireAuth: true,
            },
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
            path: '/diaodian/detail/:diaodianid',
            meta: {
                requireAuth: true,
            },
            component: diaodiandetail
        },
        {
            name: 'diaodianadd',
            path: '/diaodian/add',
            meta: {
                requireAuth: true,
            },
            component: diaodianadd
        },
        {
            path: '/secondhand/',
            component: secondhandlst,
            meta: {
                requireAuth: true,
            },
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
            meta: {
                requireAuth: true,
            },
            component: secondhanddetail
        },
        {
            name: 'secondhandadd',
            path: '/secondhand/add',
            meta: {
                requireAuth: true,
            },
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
            meta: {
                requireAuth: true,
            },
            component: mysecondhandlst
        },
        {
            path: '/diaoji/',
            component: diaojilst,
            meta: {
                requireAuth: true,
            },
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
            name: 'diaojidetail',
            path: '/diaoji/detail/:diaoJiId',
            component: diaojidetail,
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/diaohuo/',
            component: diaohuolst,
            meta: {
                requireAuth: true,
            },
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
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/aboutme',
            component: aboutme,
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/aboutme/myinfo',
            component: myinfo,
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/login',
            component: login,
        },
    ]
}];


// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

if (window.localStorage.getItem('diaodianquerytxt')) {
    store.commit(types.DIAODIAN_QUERY_TEXT, window.localStorage.getItem('diaodianquerytxt'))
}

if (window.localStorage.getItem('diaojiquerytxt')) {
    store.commit(types.DIAOJI_QUERY_TEXT, window.localStorage.getItem('diaojiquerytxt'))
}


const router = new VueRouter({
    routes
});


router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        console.log(store.state.token);
        if (store.state.token) {
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next();
    }
})

export default router;