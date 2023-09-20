<template>
    <div>
        <div class="shengxiaofind-wrap">
            <div>
                <el-radio-group v-model="radio">
                    <el-radio   label="year">按年份查询</el-radio>
                    <el-radio   label="shengxiao">按生肖查询</el-radio>
                </el-radio-group>  
             </div>
             <div class="el-select-wrap">
                <el-select size="small" v-if="radio == 'year'?true:false" v-model="yearValue" clearable class="el-select" placeholder="请选择年份">
                    <el-option
                    v-for="item in yearOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> 
                <el-select size="small" v-else  v-model="xiaoValue" clearable class="el-select" placeholder="请选择生肖">
                    <el-option
                    v-for="item in shengxiaoOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>    
                <el-button type="primary" icon="el-icon-search" size="small" @click="handleBtnSearch" :disabled="isDisabled">查询</el-button>
                <el-button type="primary" icon="el-icon-setting" size="small" @click="handleBtnReset">重置</el-button> 
            </div>
            <div class="result-wrap" v-if="result.name == ''?false:true">
                   <p><strong>生肖：</strong><span>{{ result.name }}</span></p>
                   <p><strong>生肖年份：</strong><span>{{ result.years }}</span></p>
                   <p><strong>吉祥方位：</strong><span>{{ result.fw }}</span></p>
                   <p><strong>吉忌颜色：</strong><span>{{ result.sc }}</span></p>
                   <p><strong>吉凶数字：</strong><span>{{ result.sz }}</span></p>
                   <p><strong>幸运花：</strong><span>{{ result.xyh }}</span></p>
                   <p><strong>总体运势：</strong><span>{{ result.ys }}</span></p>
                   <p><strong>事业：</strong><span>{{ result.sy }}</span></p>
                   <p><strong>爱情：</strong><span>{{ result.aq }}</span></p>
                   <p><strong>性格：</strong><span>{{ result.xg }}</span></p>
                   <p><strong>优点：</strong><span>{{ result.yd }}</span></p>
                   <p><strong>缺点：</strong><span>{{ result.qd }}</span></p>
                   <ul>
                       <li class="currentage-li" v-for="item in result.currentAge" :key="item.y">
                            <strong>生肖年份：</strong><span>{{ item.y }}</span>&nbsp;&nbsp;<strong>实岁：</strong><span>{{item.s}}</span>&nbsp;&nbsp;<strong>虚岁：</strong><span>{{ item.x }}</span>
                       </li>
                   </ul>
            </div>   
            <el-empty v-if="isResultNull == true?true:false" description="暂无数据,接口使用频繁,明天再来吧">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.net/shengxiao2023/?spread=tui&dhid=720')">更精确生肖运势结果查询</el-button>
            </el-empty>
            <div class="footer-btn">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.net/shengxiao2023/?spread=tui&dhid=720')">更精确生肖运势结果查询</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'shengxiaoFind',
        data() {
            return {
                radio: 'year',
                isDisabled: false,
                isResultNull:false,
                yearValue: new Date().getFullYear(),
                xiaoValue: '鼠',
                yearOptions: [],
                result: {
                    aq: '',
                    currentAge: [],
                    fw: '',
                    name: '',
                    qd: '',
                    sc: '',
                    sy: '',
                    sz: '',
                    xg: '',
                    xyh: '',
                    yd: '',
                    years: '',
                    ys: ''

                },
                shengxiaoOptions: [
                    {
                        label: '鼠',
                        value: '鼠'
                    },

                    {
                        label: '牛',
                        value: '牛'
                    },

                    {
                        label: '虎',
                        value: '虎'
                    },

                    {
                        label: '兔',
                        value: '兔'
                    },

                    {
                        label: '龙',
                        value: '龙'
                    },

                    {
                        label: '蛇',
                        value: '蛇'
                    },

                    {
                        label: '马',
                        value: '马'
                    },

                    {
                        label: '羊',
                        value: '羊'
                    },

                    {
                        label: '猴',
                        value: '猴'
                    },

                    {
                        label: '鸡',
                        value: '鸡'
                    },

                    {
                        label: '狗',
                        value: '狗'
                    },

                    {
                        label: '猪',
                        value: '猪'
                    },
                ]
            }
        },

        mounted() {
           this.initYearOptions();
        },
        methods: {
            initYearOptions() {
                for (let i = 1900; i <= 2050; i++) {
                    this.yearOptions.push({
                        label: `${i}年`,
                        value: i
                    });
                }
            },

            async handleBtnSearch() {
                    this.isDisabled = true;
                    let keyword = '';
                    if(this.radio == 'year') {
                        keyword = this.yearValue;
                    } else {
                        keyword = this.xiaoValue;
                    }
                    let development = process.env.NODE_ENV == 'development' ? true : false;
                    console.log(development, 'development'); //true的时候为开发环境
                    if (development) {
                      this.url = '/shengxiaofindapi';
                    } else {
                    this.url = 'https://apis.juhe.cn';
                    }
                    const params = {
                        key: "c0a114560bc36d69824bebda9873127d",
                        keyword,
                    }
                    let res = await this.$axios.get(`${this.url}/fapig/zodiac/query`,{params})
                    console.log(res);
                    if(res.status == 200 && res.data.result) {
                        this.isDisabled = false;
                        this.$message.success("生肖数据查询成功");
                        const data = res.data.result;
                        const {aq, currentAge, fw, name,
                               qd, sc, sy, sz, xg, xyh,
                               yd, years, ys
                        } = data;
                        this.result.aq = aq;
                        this.result.currentAge = currentAge;
                        this.result.fw = fw;
                        this.result.name = name;
                        this.result.qd = qd;
                        this.result.sc = sc;
                        this.result.sy = sy;
                        this.result.sz = sz;
                        this.result.xg = xg;
                        this.result.xyh = xyh;
                        this.result.yd = yd;
                        this.result.years = years;
                        this.result.ys = ys;


                    }else {
                        this.isResultNull = true;
                        this.$message.error('暂无查询数据,接口调用已上线,明天再来吧');
                    }
            },

            handleBtnReset() {
                this.isDisabled = false;
                this.isResultNull = false;
                this.result.name = '';
                this.yearValue = new Date().getFullYear();
                this.xiaoValue = '鼠';
            },

            handleJinQueFind(url) {
                window.open(url,'_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.el-select-wrap {
    margin-top: 10px;
}

.result-wrap p {
    border-bottom: 1px dashed #ccc;
}

.result-wrap p strong {
    margin-right: 5px;
}

.result-wrap p span {
    margin-right: 5px;
}

.el-select {
    width: 135px;
}

.footer-btn {
    margin-top:20px;
}
</style>