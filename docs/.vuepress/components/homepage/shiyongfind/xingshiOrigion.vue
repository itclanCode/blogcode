<template>
    <div>
        <div class="xingshiorigin-wrap">
            <div class="el-input-wrap">
                <el-input class="el-input" @input="handleCheckInput" size="small" clearable  placeholder="请输入梦到的关键词仅支持中文" v-model="inputVal">
                    <el-button slot="append" size="small"  icon="el-icon-search" @click="handleBtnFind" :disabled="isBtnDisabled">查询</el-button>
                </el-input>
                <el-button type="primary" size="small"  icon="el-icon-setting" @click="handleBtnReset">重置</el-button>
            </div>
            <!-- 结果内容展示 -->
            <ul class="result-ul" v-if="result.xing == ''?false:true">
                 <li><strong>姓氏：</strong><span>{{ result.xing }}</span></li>
                 <li class="content" v-html="result.content"></li>
            </ul>
            <el-empty v-if="isResultNull == true?true:false" description="暂无数据,今日接口数据查询已上限,请明日来查询">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/aiqingddp/?spread=tui&dhid=720')">更精确缘分测试查询</el-button>
            </el-empty>
            <div class="footer-btn">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/aiqingddp/?spread=tui&dhid=720')">更精确缘分测试查询</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'xingshiOrigion',
        data() {
            return {
                isBtnDisabled: false,
                isResultNull: false,
                inputVal: '',
                regex: /[^\u4e00-\u9fa5\w]+$/g,
                result: {
                    xing: '',
                    content: ''
                }

            }
        },

        methods: {

            async handleBtnFind() {
                if(this.inputVal) {
                    this.isBtnDisabled = true;
                    let development = process.env.NODE_ENV == 'development' ? true : false;
                    console.log(development, 'development'); //true的时候为开发环境
                    if (development) {
                      this.url = '/xingshioriginapi'
                    } else {
                    this.url = 'https://apis.juhe.cn';
                    }
                    const params = {
                        key: "eadb4c45cdcd1fd7c4680c7572daa0a4",
                        xing: this.inputVal,
                    }
                    let res = await this.$axios.get(`${this.url}/fapigx/surname/query`,{params})
                    console.log(res);
                    if(res.status == 200) {
                        if(res.data.result) {
                             this.isBtnDisabled = false;
                             this.$message.success("姓氏起源数据查询成功");
                             const {xing,content} = res.data.result;
                             this.result.xing = xing;
                             this.result.content = content;
                            
                        }else {
                            this.isResultNull = true;
                            this.$message.error("今日接口数据查询已上限,请明日来查询");
                        }
                       
                    }else {
                        this.$message.error("请输入姓氏且只支持中文");
                    }
                }else {
                    this.$message.error("输入框内容不能为空且只能输入中文");
                }
                

            },

            handleCheckInput(val) {
                if(!this.regex.test(val)) {
                    this.inputVal = this.inputVal.replace(/[^\u4e00-\u9fa5\w]+/g, '');
                }
            },

            handleBtnReset() {
                this.result.xing = '';
                this.isBtnDisabled = false;
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

.el-input-wrap .el-input {
    width: 38%;
    margin-right: 5px;
}

.result-ul p {
    border-bottom: 1px dashed #ccc;
}

result-ul li.content:before {
    content:'起源';
    display:inline-block;
    font-weight: bold;
}

.footer-btn {
    margin-top: 20px;
}
</style>