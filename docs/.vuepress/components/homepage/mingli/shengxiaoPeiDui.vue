<template>
    <div>
        <div class="starpeidui-wrap">
            <el-select v-model="men" clearable placeholder="请选择对应男生生肖" size="small" class="el-select">
                        <el-option
                        v-for="item in shengxiaoOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
            </el-select>
            <span>VS</span>
            <el-select v-model="women" clearable  placeholder="请选择对应女生生肖" size="small" class="el-select">
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
        <!-- 查询结果 -->
        <div class="shengxiaopeidui-result" v-if="data == ''?false:true">
                <p><strong>男方生肖：</strong><span>{{men}}</span>&nbsp;&nbsp;<strong>女方生肖：</strong><span>{{ women }}</span></p>
                <p><strong>配对结果：</strong><span>{{data}}</span></p>
        </div>
        <el-empty v-if="isResultNull == true?true:false" description="暂无数据,接口使用频繁,明天再来吧">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.net/bazihehun/?spread=tui&dhid=720')">更精确八字合婚查询</el-button>
        </el-empty>
        <div class="footer-btn">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.net/bazihehun/?spread=tui&dhid=720')">更精确八字合婚查询</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'shengxiaoPeiDui',
        data() {
            return {
                isResultNull:false,
                isDisabled:false,
                women: '羊',
                men: '猪',
                data: '',
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

        methods: {
           async  handleBtnSearch() { 
                    let key = "3a836f38818202006e8eeadcf9b91019";
                    let men = this.men;
                    let women = this.women;
                    this.isDisabled = true;
                    let development = process.env.NODE_ENV == 'development' ? true : false;
                    console.log(development, 'development'); //true的时候为开发环境
                    if (development) {
                      this.url = '/shengxiaopeiduiapi';
                    } else {
                    this.url = 'https://apis.juhe.cn';
                    }
                    const params = {
                        key,
                        men,
                        women
                    }
                    let res = await this.$axios.get(`${this.url}/sxpd/query`,{params})
                    console.log(res);
                    if(res.status == 200 && res.data.result) {
                        this.isDisabled = false;
                        this.$message.success("生肖配对数据查询成功");
                        const resultData = res.data.result;
                        const {men,women,data} = resultData;
                        this.data = data;
                        this.men = men;
                        this.women = women;
                    }else {
                        this.isResultNull = true;
                        this.$message.error('暂无查询数据,接口调用已上线,明天再来吧'); 
                    }
            },

            handleBtnReset() {
                this.data = '';
                this.isResultNull = false;
            },

            handleJinQueFind(url){
                window.open(url,'_blank');
            }    
        } 
    }
</script>

<style lang="scss" scoped>
.shengxiaopeidui-result p {
    border-bottom: 1px dashed #ccc;
}

.el-select {
    width: 135px;
}

.footer-btn {
    margin-top:20px;
}

</style>