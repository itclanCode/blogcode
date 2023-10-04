<template>
    <div>
        <div class="zhougongjiemeng-wrap">
                   <div>
                      <el-input class="el-input" @input="handleCheckInput" size="small" clearable  placeholder="请输入梦到的关键词仅支持中文" v-model="inputVal">
                            <el-button slot="append" size="small"  icon="el-icon-search" @click="handleBtnFind" :disabled="isBtnDisabled">查询</el-button>
                      </el-input>
                      <el-button type="primary" size="small"  icon="el-icon-setting" @click="handleBtnReset">重置</el-button>
                   </div>
                   
                   <ul class="result-ul">
                       <li class="result-li" v-for="item in aMengResults" :key="item.id">
                           <p v-for="(resultlist,index) in item.list" :key="index">{{ resultlist }} </p>
                       </li>
                   </ul>
                   <el-empty v-if="isResultNull == true?true:false" description="暂无数据,请缩短或替换关键词再次查询">
                    <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.net/bzzsy/?spread=tui&dhid=720')">精准测算终身运程</el-button>
                   </el-empty>
                   <div class="footer-btn">
                    <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.net/bzzsy/?spread=tui&dhid=720')">精准测算终身运程</el-button>
                 </div>
        </div>
    </div>
</template>

<script>
import fetchJsonp from 'fetch-jsonp';
import fetch from 'cross-fetch';
    export default {
        name: 'zhougongJieMeng',
        data() {
            return {
                isBtnDisabled: false,
                inputVal: '',
                aMengResults: [],
                regex: /[^\u4e00-\u9fa5\w]+$/g,
                isResultNull: false
            }
        },

        mounted() {
           
        },

        methods: {
           async handleBtnFind() {
                if(this.inputVal) {
                    this.isBtnDisabled = true;
                    let development = process.env.NODE_ENV == 'development' ? true : false;
                    console.log(development, 'development'); //true的时候为开发环境
                    if (development) {
                      this.url = '/api'
                    } else {
                    this.url = 'https://v.juhe.cn';
                    }
                    const params = {
                        key: "f505777750bc812eac3ad08e9586a33e",
                        q: this.inputVal,
                        full:  1
                    }
                    let res = await this.$axios.get(`${this.url}/dream/query`,{params})
                    //let paramsUrl = `key=${params.key}&q=${params.q}&full=${params.full}`;
                    // const response = await fetch(`${this.url}/dream/query?${paramsUrl}`,{method:'get',mode: "no-cors"})
                    //                 .then(res => res.json())
                    //                 .then(data => data);
                    // console.log(response);
                    console.log(res, 'res');
                    if(res.status == 200 && res.data.error_code == 0) {
                             this.isBtnDisabled = false;
                             this.$message.success("周公解梦数据查询成功");
                             const data = res.data.result;
                             this.aMengResults = data;
                             this.isResultNull = false;
                    }else {
                        this.isResultNull = true;
                        this.$message.error("请缩短或替换关键词再次查询");
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
            handleJinQueFind() {
                const url = 'https://cesuan.itclan.net/shengxiao2023/?spread=tui&dhid=720'
                window.open(url,'_blank');
            },

            handleBtnReset() {
                this.inputVal = '';
                this.aMengResults = [];
                this.isBtnDisabled = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
.el-input {
    width: 50%;
}

.result-li {
    border-bottom:1px dashed #ccc;
}

.result-ul {
    padding-left: 0;
}

.result-li {
    list-style-position: inside;
    list-style-type: decimal;
}

.footer-btn {
    margin-top: 20px;
}

</style>