// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate, { Validator } from 'vee-validate'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'weui/dist/style/weui.min.css'


Vue.config.productionTip = false

Validator.updateDictionary({
    zh_CN: {
        messages: {
            required: () => '该处不能为空'
        }
    }
});

const config = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
};

Vue.use(VeeValidate, config)
Vue.use(ElementUI)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
    template: '<App/>',
    components: { App }
})