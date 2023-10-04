<template>
    <div>
          <div v-if="content == ''?false:true">
            <p>{{ content }}</p>
            <p><strong>作者:&nbsp;&nbsp;</strong>{{ source }}</p>
          </div>
        
          <el-empty v-if="isResultNull == true?true:false" description="暂无数据">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
            </el-empty>
        <div class="footer-btn">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'friendWenAn',
        data() {
            return {
                content: '',
                source: '',
                isResultNull: false,
            }
        },

        mounted() {
            this.getPyqwenan();
        },
        methods: {
         async getPyqwenan() {
            let key = 'f230bf0f801951fcaae1e6e1034a3ce3';
            let development = process.env.NODE_ENV == 'development' ? true : false;
            console.log(development, 'development'); //true的时候为开发环境
            if (development) {
                this.url = '/pyqwenanapi';
            } else {
                this.url = 'https://api.qqsuu.cn';
            }
            const params = {
                apiKey:key,
            }
            
            // let paramsUrl = `key=${params.apiKey}`;
            //     this.$fetchJsonp(`${this.url}/api/dm-pyqwenan?apiKey=${params.apiKey}`,{
            //         jsonpCallback: 'callback',
            //         timeout: 10000,
            //     })
            //    .then(res => res.json())
            //    .then(data => {
            //       console.log(data, 'data');
            //    })
            //    .catch(err => console.error(err));
                                 
                let res = await this.$axios.get(`${this.url}/api/dm-pyqwenan`,{params});
                console.log(res);
                if(res.status == 200 && res.data.code == 200) {
                    const data = res.data.data;
                    const { content, source} = data;
                    this.content = content;
                    this.source = source;

                } else {
                    this.isResultNull = true;
                }
            },

            handleJinQueFind(url) {
                window.open(url,'_blank');
            }
        }

    }
</script>

<style lang="scss" scoped>
.footer-btn {
    margin-top: 20px;
}
</style>