require('../css/style.css');
//document.body.innerHTML="webpack";
import Vue from 'vue';
// 导入 vue 组件
import demo from '../components/demo.vue';
import hello from '../components/demo.vue';


// 1 导入 路由模块
import VueRouter from 'vue-router'
// 2 调用use方法使用插件
Vue.use(VueRouter)
// 3 创建路由对象
const router = new VueRouter({
    routes: [
        { path: '/demo', component: demo },
        { path: '/hello', component: hello }
    ]
})

const vm = new Vue({
    el: '#spa-app',
    render: c => c(demo),
    // 4 挂载到 vue 实例中
    router
})

/*// 1. 定义（路由）组件。
// 也可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const spaApp = new Vue({
    router
}).$mount('#spa-app')*/


// 配合 webpack 使用方式如下：
import axios from 'axios';
// 将 axios 添加到 Vue.prototype 中
Vue.prototype.$axios = axios;

var app = new Vue({
    el:'#app',
    data:{
        title:'hello vue'
    }
});

var contentApp = new Vue({
    el:'#contentApp',
    data:{
        content:'first vue page',
        message:''
    },
    methods: {
        getData(){
            this.$axios.get('/users/queryAll')
                .then(res => {
                    //console.log('get'+ JSON.stringify(res.data));
                    console.log('get----------------');
                    console.log(res.data);
                    contentApp.message = res.data[0].user_address;
                })
                .catch(err => {
                    console.log(err.toString())
                })
        },
        postData(){
            this.$axios.post('/users/queryAll', {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }).then(function (res) {
                console.log('post'+ res.data);
                contentApp.message = res.data[0].user_nickname;
            }).catch(function (err) {
                console.log(err.toString());
            });
        }
    }
})





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

/*
// url和参数分离，使用对象
axios.get('/user', {
    params: {
        id: 12345
    }
})*/

