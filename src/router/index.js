import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const diaodianlst = r => require.ensure([], () => r(require('@/page/diaodian/list')), 'diaodianlst')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'diaodianlst',
      component: diaodianlst
    }
  ]
})
