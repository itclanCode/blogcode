<template>
    <div>
        <div class="gongjijincal-wrap">
                <div class="gongjijin-select">
                    <el-select v-model="daikuanOptVal" @change="handleDaiKuanYearSelct" clearable placeholder="请选择贷款年限" size="small" class="el-select">
                        <el-option
                        v-for="item in daikuanYearOpt"
                        :key="item.value"
                        :label="enumYear[item.value]"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="liRateVal" @change="handleliRateSelect" clearable placeholder="请选择贷款利率" size="small" class="el-select">
                        <el-option
                        v-for="item in liRateOpt"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input class="el-input"  maxlength="3" @input="handleElInput" max="500"  size="small" clearable  placeholder="请输入贷款金额" v-model="inputVal">
                        <template slot="append">万</template>
                    </el-input>
                    <el-button type="primary" size="small"  icon="el-icon-search" @click="handleBtnFind" :disabled="isBtnDisabled">查询</el-button>
                    <el-button type="primary" size="small"  icon="el-icon-setting" @click="handleBtnReset">重置</el-button>
                </div>
                <!-- 结果 -->
                <div class="result-content" v-if="result.bj.bxTotal.length != 0">
                        <p><strong>贷款本金还款：</strong><span>{{ result.bj.bxTotal }}</span></p>
                        <p><strong>每月本金：</strong><span>{{ result.bj.capital }}元</span></p>
                        <p><strong>第一个月利息：</strong><span>{{ result.bj.lxFirstMonth }}元</span></p>
                        <p><strong>最后一个月利息：</strong><span>{{ result.bj.lxLastMonth }}元</span></p> 
                        <p><strong>总支付利息：</strong><span>{{ result.bj.lxTotal }}元</span></p> 
                        <p class="permonth">
                            <span v-for="item in result.bj.perMonth" :key="item">{{ item }},</span>
                        </p>
                        <p><strong>贷款本息还款：</strong></p>
                        <p><strong>每月还款：</strong><span>{{ result.bx.bxPerMonth }}元</span></p>
                        <p><strong>本息合计：</strong><span>{{ result.bx.bxTotal }}元</span></p>
                        <p><strong>每月利息：</strong><span>{{ result.bx.lxPerMonth }}元</span></p>
                        <p><strong>总支付利息：</strong><span>{{ result.bx.lxTotal }}元</span></p>
                        <p><strong style="color:red">温馨提示：</strong><span>只作为数据参考,具体以银行真实贷款为准</span></p>
                </div>
                <el-empty v-if="isResultNull == true?true:false" description="暂无数据,今日接口数据查询已上限,请明日来查询">
                   <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
                </el-empty>
                <div class="footer-btn">
                    <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'gongJijinCal',
        data() {
            return {
                daikuanOptVal: 30,
                liRateVal: '3.25',
                inputVal: '',
                isBtnDisabled: false,
                isResultNull: false,
                result: {
                    bj: {            // 贷款本金还款对象
                        bxTotal: '',  // 本息合计
                        capital: '',  // 每月本金
                        lxFirstMonth: '', // 第一个月利息
                        lxLastMonth: '',  // 最后一个月利息
                        lxTotal: '',      // 总支付利息
                        perMonth: []      // 每月还款明细
                    },
                    bx: {
                        bxPerMonth: '',   // 每月还款
                        bxTotal: '',      // 本息合计
                        lxPerMonth: '',  // 每月利息
                        lxTotal: ''      // 总支付利息
                    }
                },
                daikuanYearOpt: [
                    {
                        label:'5年',
                        value: 5
                    },

                    {
                        label:'10年',
                        value: 10
                    },

                    {
                        label:'15年',
                        value: 15
                    },

                    {
                        label:'20年',
                        value: 20
                    },

                    {
                        label:'25年',
                        value: 25
                    },

                    {
                        label:'30年',
                        value: 30
                    },
                ],

                liRateOpt: [
                    {
                        label: '2.75利率',
                        value: '2.75'
                    },
                    {
                        label: '3.25利率',
                        value: '3.25'
                    },

                    {
                        label: '4.35利率',
                        value: '4.35'
                    },

                    {
                        label: '4.75利率',
                        value: '4.75'
                    },

                    {
                        label: '4.9利率',
                        value: '4.9'
                    }
                ],

                enumYear: {
                    5: '5年',
                    10: '10年',
                    15: '15年',
                    20: '20年',
                    25: '25年',
                    30: '30年'
                } 
            }
        },

        methods: {
            async handleBtnFind() {
                    let isValid = this.inputVal && this.daikuanOptVal;
                    if(isValid) {
                        this.isBtnDisabled = true;
                        let development = process.env.NODE_ENV == 'development' ? true : false;
                        console.log(development, 'development'); //true的时候为开发环境
                        if (development) {
                        this.url = '/gongjijincalapi';
                        } else {
                        this.url = 'https://apis.juhe.cn';
                        }
                        const params = {
                            key: "801132908bcbf04596cace511bc3c8ef",
                            money: this.inputVal,
                            year: this.daikuanOptVal,
                            active: this.liRateVal

                        }
                        let res = await this.$axios.get(`${this.url}/fapig/loanCalc/loan`,{params});
                        console.log(res, 'res');
                        if(res.status == 200 && res.data.error_code == 0) {
                            this.isBtnDisabled = false;
                            this.$message.success("贷款数据查询成功");
                            const data = res.data.result;
                            this.result.bj.bxTotal = data.bj.bxTotal;
                            this.result.bj.capital = data.bj.capital;
                            this.result.bj.lxFirstMonth = data.bj.lxFirstMonth;
                            this.result.bj.lxLastMonth = data.bj.lxLastMonth;
                            this.result.bj.lxTotal = data.bj.lxTotal;
                            this.result.bj.perMonth = data.bj.perMonth;

                            this.result.bx.bxPerMonth = data.bx.bxPerMonth;
                            this.result.bx.lxTotal = data.bx.lxTotal;
                            this.result.bx.lxPerMonth = data.bx.lxPerMonth;
                            this.result.bx.bxTotal = data.bx.bxTotal;
        
                        }else {
                            this.isResultNull = true;
                            this.$message.error("今日接口调用已上限,请明天再来吧");
                        }
                    }else {
                        this.$message.error('贷款金额不能为空');
                    }
                   
            },

            handleBtnReset() {
                this.result.bj.bxTotal = '';
                this.isBtnDisabled = false;
                this.inputVal = '';
            },
            handleDaiKuanYearSelct(val) {
                this.daikuanOptVal = val;
            },

            handleliRateSelect(val) {
                this.liRateVal = val;
            },

            handleElInput(val) {
                let reg = /[^\d]/g
                if(val <= 500 && !reg.test(val)) {
                    this.inputVal = val;
                }else {
                    this.inputVal = '';
                    this.$message.error('输入框内的值只能是数字,且不能超过500');
                }
            },

            handleJinQueFind(url) {
                window.open(url,'_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.gongjijin-select {
    display:flex;
    flex-wrap: wrap;
    justify-content: start;
}

.el-select {
    margin-right: 5px;
    width: 120px;
}

.el-input {
    width: 200px;
    margin-right: 5px;
}

.result-content p {
   border-bottom: 1px dashed #ccc;
}

.result-content p span {
    margin-right: 5px;
}

.result-content p.permonth:before {
    content: '每月还款明细';
    font-weight: bold;
    display:inline-block;
    margin-right: 5px;
}

.result-content p.permonth {
    display:flex;
    justify-content: start;
    flex-wrap: wrap;
}

.footer-btn {
    margin-top: 20px;
}
</style>