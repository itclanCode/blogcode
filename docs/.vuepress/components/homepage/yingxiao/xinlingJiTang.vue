<template>
    <div>
        <p v-if="msg ==''?false:true">{{ msg }}</p>
        <el-empty v-if="isResultNull == true?true:false" description="暂无数据">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
            </el-empty>
        <div class="footer-btn">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
        </div>
    </div>
</template>

<script>
import secret  from "../serect.js"
    export default {
        name: 'xinlingJiTang',
        data() {
            return {
                msg: '',
                isResultNull: false,
            }
        },

        mounted() {
            this.getDaMiDujitang();
        },

        methods: {
            async getDaMiDujitang() {
                let key = secret.damidujiTangApiKey;
                let development = process.env.NODE_ENV == 'development' ? true : false;
                console.log(development, 'development'); //true的时候为开发环境
                if (development) {
                   this.url = '/damidujitangapi';
                } else {
                   this.url = 'https://api.qqsuu.cn';
                }
                const params = {
                    apiKey:key
                }
                let res = await this.$axios.get(`${this.url}/api/dm-dujitang`,{params});
                console.log(res, 'res');
                if(res.status == 200 && res.data.coe == 200) {
                    const {msg } = res.data;
                    this.msg = msg;
                }else {
                    this.$message.error("接口调用失败");
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