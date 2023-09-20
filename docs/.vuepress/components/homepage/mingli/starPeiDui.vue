<template>
    <div>
        <div class="starpeidui-wrap">
            <el-select v-model="manStarVal" clearable placeholder="请选择对应男生星座" size="small" class="el-select">
                        <el-option
                        v-for="item in starOpions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
            </el-select>
            <span>VS</span>
            <el-select v-model="girlStarVal" clearable  placeholder="请选择对应女生星座" size="small" class="el-select">
                        <el-option
                        v-for="item in starOpions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-search" size="small" @click="handleBtnSearch" :disabled="isDisabled">查询</el-button>
            <el-button type="primary" icon="el-icon-setting" size="small" @click="handleBtnReset">重置</el-button> 
        </div>
        <!-- 查询结果 -->
        <div class="starpeidui-result" v-if="zhuyi == ''?false:true">
                <p><strong>男生星座：</strong><span>{{manStarVal}}</span><strong>女生星座：</strong><span>{{ girlStarVal }}</span></p>
                <p><strong>配对指数：</strong><span>{{ zhishu }}</span></p>
                <p><strong>配对比重：</strong><span>{{ bizhong }}</span></p>
                <p><strong>两情相悦指数：</strong><span>{{ xiangyue }}</span></p>
                <p><strong>天长地久指数：</strong><span>{{ tcdj }}</span></p>
                <p><strong>结果描述：</strong><span>{{ jieguo }}</span></p>
                <p><strong>恋爱情况：</strong><span>{{ lianai }}</span></p>
                <p><strong>注意事项：</strong><span>{{ zhuyi }}</span></p>
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
        name: 'starPeiDui',
        data() {
            return {
                isDisabled: false,
                isResultNull: false,
                manStarVal: '白羊',
                girlStarVal: '金牛',
                zhishu: '',      // 指数
                bizhong: '',     // 比重
                xiangyue: '',   //  相悦
                tcdj: '',       // 天长地久指数
                jieguo: '',     // 结果
                lianai: '',     // 恋爱指数
                zhuyi: '',       // 注意事项
                starOpions: [
                    {
                        label: '水瓶座',
                        value: '水瓶'
                    },

                    {
                        label: '双鱼座',
                        value: '双鱼'
                    },

                    {
                        label: '白羊座',
                        value: '白羊'
                    },

                    {
                        label: '金牛座',
                        value: '金牛'
                    },

                    {
                        label: '双子座',
                        value: '双子'
                    },

                    {
                        label: '巨蟹座',
                        value: '巨蟹'
                    },

                    {
                        label: '狮子座',
                        value: '狮子'
                    },

                    {
                        label: '处女座',
                        value: '处女'
                    },

                    {
                        label: '天秤座',
                        value: '天秤'
                    },

                    {
                        label: '天蝎座',
                        value: '天蝎'
                    },

                    {
                        label: '射手座',
                        value: '射手'
                    },

                    {
                        label: '摩羯座',
                        value: '摩羯'
                    }
                ],
            }
        },

        methods: {
            async handleBtnSearch() {
                    this.isDisabled = true;
                    let development = process.env.NODE_ENV == 'development' ? true : false;
                    console.log(development, 'development'); //true的时候为开发环境
                    if (development) {
                      this.url = '/starpeiduiapi'
                    } else {
                    this.url = 'https://apis.juhe.cn';
                    }
                    const params = {
                        key: "1f86faf3d6076a98eddd5ac46ac09890",
                        men: this.manStarVal,
                        women: this.girlStarVal
                    }
                    let res = await this.$axios.get(`${this.url}/xzpd/query`,{params})
                    console.log(res);
                    if(res.status == 200 && res.data.result != null) {
                        this.isDisabled = false;
                        this.$message.success("星座配对数据查询成功");
                        const data = res.data.result;
                        const {bizhong, jieguo, lianai, men, tcdj,
                               women, xiangyue, zhishu, zhuyi
                        } = data;

                        this.bizhong = bizhong;
                        this.jieguo = jieguo;
                        this.lianai = lianai;
                        this.manStarVal = men;
                        this.tcdj = tcdj;
                        this.girlStarVal = women;
                        this.xiangyue = xiangyue;
                        this.zhishu = zhishu;
                        this.zhuyi = zhuyi;

                    }else {
                        this.isResultNull = true;
                        this.$message.error('暂无查询数据,接口调用已上线,明天再来吧');
                    }
            },

            handleBtnReset() {
                this.manStarVal = '';
                this.girlStarVal = '';
                this.isDisabled = false;
                this.isResultNull = false;
            },

            handleJinQueFind(url){
                window.open(url,'_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.el-select {
    width: 135px;
}

.starpeidui-result p {
   border-bottom: 1px dashed #ccc;
}

.starpeidui-result p span {
    margin-right: 5px;
}

.footer-btn {
    margin-top:20px;
}
</style>