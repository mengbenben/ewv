<template>
    <div class="demo">
        {{ msg }}
        <!--<div>foo</div>
        <a href="/demo">/demo</a>-->
    </div>
</template>

<script>
    export default {
        name: "demo",
        data (){
            return {
                msg: 'SPA demo page!'
            }
        }
    }
</script>

<style scoped>
    .demo {
        color: red;
    }
</style>
