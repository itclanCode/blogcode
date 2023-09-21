<template>
    <div>
        <div>
            <div class="el-input-wrap">
                <el-input class="el-input"  size="small" clearable  placeholder="请输入中文或英文" v-model="inputVal">
                    <el-button slot="append" size="small"  icon="el-icon-search" @click="handleBtnFind" :disabled="isBtnDisabled">查询</el-button>
                </el-input>
                <el-button type="primary" size="small"  icon="el-icon-setting" @click="handleBtnReset">重置</el-button>
            </div>
            <!-- 查询结果 -->
            <div v-if="result == ''?false:true">
                <p><strong>查询关键词：</strong>{{ content }}</p>
                <p><strong>翻译结果：</strong>{{ result }}</p>
            </div>
            <el-empty v-if="isResultNull == true?true:false" description="暂无数据">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
            </el-empty>
            <div class="footer-btn">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import secret  from "../serect.js"
    export default {
        name: 'dmTranslation',
        data() {
            return {
                inputVal: '',
                isBtnDisabled: false,
                content: '',  // 查询的关键词
                result: '',   // 翻译的结果
                isResultNull: false,
            }
        },

        methods: {
            async handleBtnFind() {
                if(this.inputVal) {
                    let key = secret.damiTranslateApiKey;
                    let development = process.env.NODE_ENV == 'development' ? true : false;
                    console.log(development, 'development'); //true的时候为开发环境
                    if (development) {
                    this.url = '/damitranslateapi';
                    } else {
                    this.url = 'https://api.qqsuu.cn';
                    }
                    const params = {
                        apiKey:key,
                        text: this.inputVal
                    }
                    let res = await this.$axios.get(`${this.url}/api/dm-translation`,{params});
                    console.log(res, 'res');
                    if(res.status == 200 && res.data.code == 200) {
                        const data = res.data;
                        const {content, result} = data;
                        this.content = content;
                        this.result = result;
                    }else {
                        this.isResultNull = true;
                        this.$message.error("查询失败"); 
                    }
                }else {
                    this.$message.error('输入框内容不能为空');
                }
               
            },

            handleBtnReset() {
                this.inputVal = '';
                this.result = '';
            },

            handleJinQueFind(url) {
                window.open(url,'_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.el-input-wrap {
    display:flex;
    justify-content: start;
}

.el-input {
    width: 60%;
    margin-right: 5px;
}

.footer-btn {
    margin-top: 20px;
}
</style>