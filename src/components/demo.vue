<template>
    <div class="demo">{{ msg }}</div>
</template>

<script>
    export default {
        name: "demo",
        data (){
            return {
                msg: 'SPA demo'
            }
        }
    }
</script>

<style scoped>
    .demo {
        color: red;
    }
</style>
