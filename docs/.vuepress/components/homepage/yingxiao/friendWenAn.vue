<template>
    <div>
          <div v-if="content == ''?false:true">
            <p>{{ content }}</p>
            <p><strong>作者:&nbsp;&nbsp;</strong>{{ source }}</p>
          </div>
        
          <el-empty v-if="isResultNull == true?true:false" description="暂无数据,今日接口数据查询已上限,请明日来查询">
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
           async  getPyqwenan() {
                let key = 'abcb8b58b2e07cc98781a1b918d7d369';
                let development = process.env.NODE_ENV == 'development' ? true : false;
                console.log(development, 'development'); //true的时候为开发环境
                if (development) {
                   this.url = '/pyqwenanapi';
                } else {
                   this.url = 'https://apis.juhe.cn';
                }
                const params = {
                    key,
                }
                let res = await this.$axios.get(`${this.url}/fapigx/pyqwenan/query`,{params});
                console.log(res, 'res');
                if(res.status == 200 && res.data.error_code == 0) {
                    const data = res.data.result;
                    const { content, source} = data;
                    this.content = content;
                    this.source = source;

                } else {
                    this.isResultNull = true;
                    this.$message.error("今日接口数据查询已上限,请明日来查询");
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