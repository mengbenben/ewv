<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <ul>
            <router-link to='/demo' tag='el-button'><a href="/demo">demo</a></router-link>
            <router-link to='/hello' tag='el-button'><a href="/hello">hello</a></router-link>
            <router-link to='/redis' tag='el-button'><a href="/hello">redis</a></router-link>
            <router-link to='/element' tag='el-button'><a href="/element">element</a></router-link>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "app",
        data (){
            return {
                msg: 'ibutterfly',
            }
        },
        methods: {

        }
    }
</script>

<style>
    .app{
        //background: aliceblue;
    }
    .app h1{
        background: linear-gradient(to right, red, blue);
        -webkit-background-clip: text;
        color: transparent;
        width: 200px;
        margin-left: 35px;
    }
</style>
