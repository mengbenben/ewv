<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <ul>
            <router-link to='/demo' tag='li'><a href="/demo">demo</a></router-link>
            <router-link to='/hello' tag='li'><a href="/hello">hello</a></router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "app",
        data (){
            return {
                msg: 'app page!'
            }
        }
    }
</script>
