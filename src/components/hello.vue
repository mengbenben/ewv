<template>
    <div class="hello">
        {{ msg }}
        <!--<div>foo</div>
        <a href="/demo">/demo</a>-->
        <router-link to='/' tag='li'><a href="/">back</a></router-link>
    </div>
</template>

<script>
    export default {
        name: "hello",
        data (){
            return {
                msg: 'SPA hello page!'
            }
        }
    }
</script>

<style scoped>
    .hello {
        color: #69ff35;
    }
</style>
