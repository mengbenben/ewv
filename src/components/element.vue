<template>
    <div class="demo">
        {{ msg }}


        <el-input v-model="input" placeholder="请输入内容"></el-input>


        <el-switch
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949">
        </el-switch>


        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>




    </div>
</template>

<script>
    export default {
        name: "demo",
        data (){
            return {
                msg: 'element !',
                input: '',
                value1: true,
                value2: true
            }
        }
    }
</script>

<style scoped>
    .demo {
        color: red;
    }
</style>
