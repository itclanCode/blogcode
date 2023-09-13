<template>
    <div>
        <el-button type="primary" @click="handleBtnGetJoke" :disabled="isDisabled">请求数据</el-button>
        <el-button type="danger" @click="handleBtnClearData" v-if="aDatas.length > 0?true:false">清空数据</el-button>
        <ul v-if="aDatas.length > 0?true:false">
            <li class="joke-list" v-for="item in aDatas"
                                  :key="item.hashId">{{ item.content }}
            </li>
            <div class="loading" v-if="aDatas.length > 0?true:false"> 
                <el-button size="mini"  type="primary" @click="handleBtnLoading" >加载</el-button>
            </div>
        </ul> 
    </div>
</template>

<script>
    import axios from 'axios';
    import fetchJsonp from 'fetch-jsonp'
    export default {
        name: 'vuepressAxios',
        data() {
            return {
               aDatas: [],
               isDisabled: false,
               page: 1,
               pagesize: 5,
               url: ''
            }
        },
        methods: {
            async handleBtnGetJoke() {
                let development = process.env.NODE_ENV == 'development' ? true : false;
                console.log(development, 'development'); //true的时候为开发环境
                if (development) {
                   this.url = '/api/'
                } else {
                   this.url = 'https://v.juhe.cn/';
                }
                this.isDisabled = true;
                const params = {
                    key: "aa1b7ad08be2a09a4e0d2d46897e2dc8",
                    page: this.page,
                    pagesize: this.pagesize,
                }
                // const response = await axios.get('/api/joke/content/text.php',{params});
                //const response = await this.$axios.get(`${this.url}joke/content/text.php`,{params});
                const response = await fetchJsonp(`${this.url}joke/content/text.php?key=${params.key}&page=${params.page}&pagesize=${params.pagesize}`,{method: 'get'})
                                       .then(res => res.json());
                console.log(response);
                // if(response.status === 200) {
                //     this.isDisabled = false;
                //     this.$message.success('数据请求成功');
                //     const { data } = response;
                //     this.aDatas = this.aDatas.concat(data.result.data);
                // }else {
                //     this.$message.error('数据请求失败');
                // }

                if(response.reason == 'Success') {
                    this.isDisabled = false;
                    this.$message.success('数据请求成功');
                    const  data  = response.result.data;
                    this.aDatas = this.aDatas.concat(data);
                }else {
                    this.$message.error('数据请求失败');
                }
               
            },

            handleBtnClearData() {
                this.aDatas = [];
            },

            handleBtnLoading() {
                this.page++;
                this.handleBtnGetJoke();
            }
        }
    }
</script>

<style lang="scss" scoped>
.joke-list {
    list-style-type: decimal;
    list-style-position: outside;
    padding: 5px 0;
    border-bottom: dashed 1px #ccc;
}

.loading {
    margin: 0 auto;
    text-align:center;
}
</style>