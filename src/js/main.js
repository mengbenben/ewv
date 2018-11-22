require('../css/style.css');
//document.body.innerHTML="webpack";
import Vue from 'vue';

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

