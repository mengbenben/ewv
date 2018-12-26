require('../css/style.css');
//document.body.innerHTML="webpack";
import Vue from 'vue';
// 导入 vue 组件
import demo from '../components/demo.vue';
import hello from '../components/hello.vue';
import app from '../components/app.vue';
import redis from '../components/redis.vue';
import element from '../components/element.vue';

//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// 1 导入 路由模块
import VueRouter from 'vue-router'
// 2 调用use方法使用插件
Vue.use(VueRouter)
// 3 创建路由对象
const router = new VueRouter({
    routes: [
        { path: '/', component: app },
        { path: '/demo', component: demo },
        { path: '/hello', component: hello },
        { path: '/element', component: element },
        { path: '/redis', component: redis }
    ]
})

const vm = new Vue({
    el: '#app',
    //render: c => c(demo),
    // 4 挂载到 vue 实例中
    router
})


// 配合 webpack 使用方式如下：
import axios from 'axios';
// 将 axios 添加到 Vue.prototype 中
Vue.prototype.$axios = axios;


// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 所有请求之前都要执行的操作
    console.log('req请求拦截器***************');
    return config;
}, function (error) {
    // 错误处理

    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 所有请求完成后都要执行的操作
    return response;
}, function (error) {
    // 错误处理
    return Promise.reject(error);
});

