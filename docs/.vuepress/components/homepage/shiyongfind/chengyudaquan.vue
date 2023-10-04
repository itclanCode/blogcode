<template>
    <div>
        <div class="chenyudaquan-wrap">
            <div class="el-input-wrap">
                <el-input class="el-input" @input="handleCheckInput" size="small" clearable  :placeholder="placeholder" v-model="inputVal">
                    <el-button slot="append" size="small"  icon="el-icon-search" @click="handleBtnFind" :disabled="isBtnDisabled">查询</el-button>
                </el-input>
                <el-button type="primary" size="small"  icon="el-icon-setting" @click="handleBtnReset">重置</el-button>
            </div>
            <!-- 结果展示 -->
            <div class="result-content" v-if="result.name == ''?false:true">
                  <p><strong>查询的成语：</strong><span>{{ result.name }}</span></p>
                  <p><strong>成语拼音：</strong><span>{{ result.pinyin }}</span></p>
                  <p><strong>成语出处：</strong><span>{{ result.chuchu }}</span></p>
                  <ul>
                      <li class="jbsy" v-for="(jbsyitem,index) in result.jbsy" :key="index">
                          <span>{{jbsyitem}}</span>
                      </li>
                  </ul>
                  <ul>
                      <li class="xxsy" v-for="(xxsyitem,index) in result.xxsy" :key="index">
                            <p>{{ xxsyitem }}</p>
                      </li>
                  </ul>

                  <ul class="jyc-wrap">
                     <li class="jyc" v-for="(jycsitem,index) in result.jyc" :key="index">
                           <span>{{ jycsitem }}</span>
                     </li>
                  </ul>

                  <ul class="fyc-wrap">
                     <li class="fyc" v-for="(fycsitem,index) in result.fyc" :key="index">
                           <span>{{ fycsitem }}</span>
                     </li>
                  </ul>
            </div>
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
        name: 'chengyudaquan',
        data() {
            return {
                placeholder: '请输入成语',
                inputVal: '',
                isBtnDisabled: false,
                isResultNull: false,
                result: {
                    name: '',  // 查询的成语
                    pinyin: '',  // 拼音
                    jbsy: [],   // 基本释义
                    xxsy: [],   // 详细释义
                    chuchu: '', // 出处
                    jyc: [],   // 近义词
                    fyc: [],   // 反义词
                },
            }
        },

        methods: {
            async handleBtnFind() {
                if(this.inputVal.trim()) {
                        this.isBtnDisabled = true;
                        let development = process.env.NODE_ENV == 'development' ? true : false;
                        console.log(development, 'development'); //true的时候为开发环境
                        if (development) {
                        this.url = '/chengyudaquanapi';
                        } else {
                        this.url = 'https://apis.juhe.cn';
                        }
                        const params = {
                            key: "d2f1e72bbc200cb406388ff42e72cc2c",
                            wd: this.inputVal,
                        }
                        let res = await this.$axios.get(`${this.url}/idioms/query`,{params});
                        console.log(res);
                        if(res.status == 200 && res.data.error_code == 0) {
                            this.isBtnDisabled = false;
                            this.$message.success('成语查询成功');
                            const data = res.data.result;
                            const {name, pinyin, jbsy, xxsy, chuchu, jyc, fyc} = data;
                            this.result.name = name;
                            this.result.pinyin = pinyin;
                            this.result.jbsy = jbsy;
                            this.result.xxsy = xxsy;
                            this.result.chuchu = chuchu;
                            this.result.jyc = jyc;
                            this.result.fyc = fyc;
                        }else {
                            this.isResultNull = true;
                            this.$message.error("今日接口数据查询已上限,请明日来查询");
                        }
                }else {
                    this.$message.error('输入框内容不能为空');
                }
                       
            },
            handleCheckInput(value) {
                let regChinese = /[\u4e00-\u9fa5]+$/ig;  // 中文
                if(regChinese.test(value)) {
                    this.inputVal = value;
                }else {
                    this.inputVal = '';
                    this.placeholder = '输入内容含有非中文字符,请输入中文';
                }

             
            },
            // 重置
            handleBtnReset() {
                this.inputVal = ''
                this.isBtnDisabled = false;
                this.result.name = '';
            },

            handleJinQueFind(url) {
                window.open(url,'_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.el-input-wrap {
    display: flex;
    justify-content: start;
}

.el-input-wrap .el-input {
    width: 42%;
    margin-right: 5px;
}

.result-content {
    margin:5px auto;
}

.result-content p {
    border-bottom: 1px dashed #ccc;
}

.result-content ul {
    padding-left:0;
}
.result-content ul li {
    padding-left: 0;
}

.result-content ul li p{
    border-bottom:none;
}
.result-content ul li {
    border-bottom: 1px dashed #ccc;
}

.result-content ul li.jbsy:before {
    content: '基本释义';
    display:inline-block;
    font-weight:bold;
    margin-right: 5px;
}

.result-content ul li.xxsy:first-child::before {
    content: '详细释义';
    display:inline-block;
    font-weight:bold;
    margin-right: 5px;
}

.result-content ul li.jyc:first-child::before {
    content: '近义词:';
    display:inline-block;
    font-weight:bold;
    margin-right: 5px;
}

.result-content ul li.jyc::after {
    content: ',';
    display:inline-block;
    font-weight:bold;
    margin-right: 5px;
}

.result-content ul.jyc-wrap,ul.fyc-wrap {
    display: flex;
    justify-self: start;
    margin-right: 10px;
    flex: 1;
    flex-wrap: wrap;
}

.result-content ul li.fyc:first-child::before {
    content: '反义词:';
    display:inline-block;
    font-weight:bold;
    margin-right: 5px;
}


.result-content ul li.fyc:after {
    content: ',';
    display:inline-block;
    font-weight:bold;
    margin-right: 5px;
}

.footer-btn {
    margin-top: 20px;
}

</style>