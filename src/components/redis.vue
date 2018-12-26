<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <ul>
            <router-link to='/demo' tag='i-button'><a href="/demo">demo</a></router-link>
            <router-link to='/hello' tag='i-button'><a href="/hello">hello</a></router-link>
        </ul>

        <div>
            <Input v-model="redisSetKey" placeholder="redis key..." style="width: 300px" />
            <Input v-model="redisSetVal" placeholder="redis val..." style="width: 300px" />
            <i-button @click="setRedisVal">
                set
            </i-button>

            <br/>

            <Input v-model="redisKey" placeholder="redis key..." style="width: 300px" />
            <Input v-model="redisVal" placeholder="redis value..." style="width: 300px"/>
            <i-button @click="getRedisVal">
                get
            </i-button>
            <i-button @click="clear">
                clear
            </i-button>

            <br/>
        </div>
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            Classic film
        </p>

        <Upload
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>Click or drag files here to upload</p>
            </div>
        </Upload>

    </div>
</template>

<script>
    export default {
        name: "app",
        data (){
            return {
                msg: 'ibutterfly',
                redisKey: '',
                redisVal: '',
                redisSetKey: '',
                redisSetVal: ''
            }
        },
        methods: {
            getRedisVal(){
                if(this.redisKey){
                    this.$axios.get('/redisGetStrTest?key='+this.redisKey)
                        .then(res => {
                            /*console.log('get----------------');
                            console.log(res.data);*/
                            this.redisVal = JSON.stringify(res.data);
                        })
                        .catch(err => {
                            console.log(err.toString())
                        })
                } else{
                    this.$Message.warning('please input key');
                }
            },
            clear(){
                this.redisVal = '';
            },
            setRedisVal(){
                if(this.redisSetKey && this.redisSetVal){
                    this.$axios.post('/redisSetStrTest?key='+this.redisSetKey+'&value='+this.redisSetVal)
                        .then(res => {
                            /*console.log('post----------------');
                            console.log(res.data);*/
                            //this.redisVal = JSON.stringify(res.data);
                            this.$Message.info('success!');
                        })
                        .catch(err => {
                            console.log(err.toString())
                        })
                } else{
                    this.$Message.info('please input key & val');
                }
            }

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
