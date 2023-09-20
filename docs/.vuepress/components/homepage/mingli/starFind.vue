<template>
    <div>
        <div class="starfind-wrap">
            <el-select v-model="starVal" clearable placeholder="请选择星座" size="small" class="el-select">
                        <el-option
                        v-for="item in starOpions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-search" size="small" @click="handleBtnSearch" :disabled="isStatus">查询</el-button>
            <el-button type="primary" icon="el-icon-setting" size="small" @click="handleBtnReset">重置</el-button>  
        </div> 
        <!--展示结果  -->
        <div v-if="result.name == ''?false:true" class="result-content">
            <p><strong>星座名称:</strong>{{ result.name }}</p>
            <p><strong>星座公历日期范围:</strong>{{ result.range }}</p>
            <p><strong>特点:</strong>{{result.zxtd}}<strong>&nbsp;&nbsp;属性:</strong>{{ result.sssx }}</p>
            <p><strong>掌管宫位:</strong>{{ result.zggw }}</p>
            <p><strong>最大特征:</strong>{{ result.zdtz }}</p>
            <p v-if="result.zgxx == ''?false:true"><strong>主管星:</strong>{{ result.zgxx }}</p>
            <p><strong>颜色:</strong>{{ result.xyys }}</p>
            <p><strong>珠宝:</strong>{{ result.jssw }}</p>
            <p><strong>幸运号码:</strong>{{ result.xyhm }}</p>
            <p><strong>金属:</strong>{{ result.kyjs }}</p>
            <p><strong>基本表现:</strong>{{ result.	bx }}</p>
            <p><strong>优点:</strong>{{ result.yd }}</p>
            <p><strong>缺点:</strong>{{ result.qd }}</p>
            <p><strong>基本特质:</strong>{{ result.jbtz }}</p>
            <p><strong>具体特质:</strong>{{ result.jttz }}</p>
            <p><strong>行事风格:</strong>{{ result.xsfg }}</p>
            <p><strong>个性缺点:</strong>{{ result.gxmd }}</p>
            <p><strong>总体评价:</strong>{{ result.zj }}</p>
        </div>
        <el-empty v-if="isResultNull == true?true:false" description="暂无数据,接口使用频繁,明天再来吧">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://xingzuo.itclan.net/')">更精确星座配对查询</el-button>
        </el-empty>
        <div class="footer-btn">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://xingzuo.itclan.net/')">更精确星座配对查询</el-button>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'starFind',
        data() {
            return {
                starVal: '水瓶座',
                isResultNull: false,
                isStatus: false,
                result: {
                    name: '',  // 星座
                    range: '',  // 星座范围
                    zxtd: '',  // 特点
                    ssxx: '',  // 缺土
                    bx: '',  // 特点
                    gxmd: '',  // 性格
                    jbtz:   '',  // 特点
                    jssw: '',  // 特点
                    jttz: ''  ,  // 特点
                    kyjs: '',  // 特点
                    qd: '',  // 特点
                    sssx: '',  // 特点
                    xsfg: '' ,  // 特点
                    xyhm: '',  // 特点
                    xyys: '',  // 特点
                    yd:'',   // 特点
                    yysx: '',  // 特点
                    zdtz: '',  // 特点
                    zggw: '',  // 特点
                    zgxx: '',  // 特点
                    zj: ''  ,  // 特点
                },
                starOpions: [
                    {
                        label: '水瓶座',
                        value: '水瓶座'
                    },

                    {
                        label: '双鱼座',
                        value: '双鱼座'
                    },

                    {
                        label: '白羊座',
                        value: '白羊座'
                    },

                    {
                        label: '金牛座',
                        value: '金牛座'
                    },

                    {
                        label: '双子座',
                        value: '双子座'
                    },

                    {
                        label: '巨蟹座',
                        value: '巨蟹座'
                    },

                    {
                        label: '狮子座',
                        value: '狮子座'
                    },

                    {
                        label: '处女座',
                        value: '处女座'
                    },

                    {
                        label: '天秤座',
                        value: '天秤座'
                    },

                    {
                        label: '天蝎座',
                        value: '天蝎座'
                    },

                    {
                        label: '射手座',
                        value: '射手座'
                    },

                    {
                        label: '摩羯座',
                        value: '摩羯座'
                    }
                ],
            }
        },

        methods: {
            async handleBtnSearch() {
                    this.isStatus = true;
                    let development = process.env.NODE_ENV == 'development' ? true : false;
                    console.log(development, 'development'); //true的时候为开发环境
                    if (development) {
                      this.url = '/starfindapi'
                    } else {
                    this.url = 'https://apis.juhe.cn';
                    }
                    const params = {
                        key: "456f646f7886f118dc2026bc30c91177",
                        keyword: this.starVal,
                    }
                    let res = await this.$axios.get(`${this.url}/fapig/constellation/query`,{params})
                    console.log(res);
                    if (res.status == 200 && res.data.error_code == 0) {
                        this.isStatus = false;
                        this.$message.success("星座数据查询成功");
                        const data = res.data.result;
                        const {bx, gxmd, jbtz, jssw,
                               jttz, kyjs, name, qd,
                               range, sssx, xsfg, xyhm,
                               xyys, yd, yysx, zdtz, zggw,
                               zj, zxtd
                        } = data;
                        this.result.bx = bx;
                        this.result.gxmd = gxmd;
                        this.result.jbtz = jbtz;
                        this.result.jssw = jssw;
                        this.result.jttz = jttz;
                        this.result.kyjs = kyjs;
                        this.result.name = name;
                        this.result.qd = qd;
                        this.result.range = range;
                        this.result.sssx = sssx;
                        this.result.xsfg = xsfg;
                        this.result.xyhm = xyhm;
                        this.result.xyys = xyys;
                        this.result.yd = yd;
                        this.result.yysx = yysx;
                        this.result.zdtz = zdtz;
                        this.result.zggw = zggw;
                        this.result.zj = zj;
                        this.result.zxtd = zxtd;


                    } else{
                        this.isResultNull = true;
                        this.$message.error('暂无查询数据,接口调用已上线,明天再来吧');
                    }
            },

            handleBtnReset() {
                this.result.name = '';
                this.isStatus = false;
                this.isResultNull = false;
            },

            handleJinQueFind(url) {
                window.open(url,'_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.result-content p{
   border-bottom: 1px dashed #ccc;
}

.result-content p strong {
    margin-right: 5px;
}

.el-select {
    width: 135px;
}

.footer-btn {
    margin-top:20px;
}
</style>