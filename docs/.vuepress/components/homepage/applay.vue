<template>
    <div class="applay-wrap">
        <el-tabs :tab-position="tabPosition" v-model="activeTabName"  style="min-height: 200px;">
            <el-tab-pane label="命理玄学" name="命理玄学">
                <el-radio-group class="el-radio-group" v-model="minliRadioVal" size="small" @input="handleMiliRadio">
                    <el-radio-button class="el-radio-button" v-for="item in minliRadioOptions"  
                                    :key="item.name" 
                                    :label="item.value">
                                    {{ item.name }}
                    </el-radio-button>
                </el-radio-group> 
                <keep-alive>
                   <component :is="minliRadioVal"></component>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="实用查询" name="实用查询">
                <el-radio-group class="el-radio-group" v-model="shiyongRadioVal" size="small" @input="handleShiYongRadio">
                    <el-radio-button class="el-radio-button" v-for="item in shiyongRadioOptions"  
                                    :key="item.name" 
                                    :label="item.value">
                                    {{ item.name }}
                    </el-radio-button>
                </el-radio-group> 
                <keep-alive>
                   <component :is="shiyongRadioVal"></component>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="营销文案" name="营销文案">
                <el-radio-group class="el-radio-group" v-model="yingxiaoRadioVal" size="small" @input="handleYingXiaoRadio">
                    <el-radio-button class="el-radio-button" v-for="item in yingxiaoRadioOptions"  
                                    :key="item.name" 
                                    :label="item.value">
                                    {{ item.name }}
                    </el-radio-button>
                </el-radio-group> 
                <keep-alive>
                   <component :is="yingxiaoRadioVal"></component>
                </keep-alive>
            </el-tab-pane>
         </el-tabs>
    </div>
</template>

<script>
    import shenchenHelp from "./mingli/shenchenHelp.vue";
    import zhougongJieMeng from "./mingli/zhougongJieMeng.vue";
    import starYunShi from "./mingli/starYunShi.vue";
    import starFind from "./mingli/starFind.vue";
    import starPeiDui from "./mingli/starPeiDui.vue";
    import shengxiaoFind from  "./mingli/shengxiaoFind.vue";  
    import shengxiaoPeiDui from "./mingli/shengxiaoPeiDui.vue";   
    import laohuangli from './mingli/laohuangli.vue';
    import chengyudaquan from "./shiyongfind/chengyudaquan.vue";
    import postMenFind from "./shiyongfind/postMenFind.vue";   
    import gongJijinCal from "./shiyongfind/gongJijinCal.vue";
    import xingshiOrigion from "./shiyongfind/xingshiOrigion.vue";
    import historyToday from "./shiyongfind/historyToday.vue";
    import dmTranslation from "./shiyongfind/dmTranslation.vue";
    import friendWenAn from "./yingxiao/friendWenAn.vue";
    import xinlingJiTang from "./yingxiao/xinlingJiTang.vue";
    import mingRenMingYan from "./yingxiao/mingRenMingYan.vue";

    export default {
        name: 'applay',
        components: {
            shenchenHelp,
            zhougongJieMeng,
            starYunShi,
            starFind,
            starPeiDui,
            shengxiaoFind,
            shengxiaoPeiDui,
            laohuangli,
            chengyudaquan,
            postMenFind,
            gongJijinCal,
            xingshiOrigion,
            historyToday,
            dmTranslation,
            friendWenAn,
            xinlingJiTang,
            mingRenMingYan
        },
        data() {
            return {
                tabPosition: 'left',
                activeTabName: '实用查询',
                minliRadioVal: 'shenchenHelp',
                shiyongRadioVal: 'dmTranslation',
                yingxiaoRadioVal: 'friendWenAn',
                minliRadioOptions: [
                    {
                        value: 'shenchenHelp',
                        name: '生辰助手'
                    },
                    {
                        value: 'zhougongJieMeng',
                        name: '周公解梦'
                    },
                    {
                        value: 'starYunShi',
                        name: '星座运势'
                    },
                    {
                        value: 'starFind',
                        name: '星座查询'
                    },
                    {
                        value: 'starPeiDui',
                        name: '星座配对'
                    },
                    {
                        value: 'shengxiaoFind',
                        name: '生肖查询'
                    },
                    {
                        value: 'shengxiaoPeiDui',
                        name: '生肖配对'
                    },
                    {
                        value: 'laohuangli',
                        name: '老黄历'
                    },
                ],
                shiyongRadioOptions: [
                    {
                        value: 'dmTranslation',
                        name: '中英文互译'
                    },
                    {
                       value: 'chengyudaquan',
                       name: '成语大全'
                    },
                    {
                        value: 'xingshiOrigion',
                        name: '姓氏起源'
                    },
                    
                    {
                        value: 'postMenFind',
                        name: '邮编查询'
                    },

                    {
                        value: 'gongJijinCal',
                        name: '贷款公积金计算'
                    },

                    {
                        value: 'historyToday',
                        name: '历史上的今天'
                    },
                ],

                yingxiaoRadioOptions: [
                    {
                        value: 'friendWenAn',
                        name: '朋友圈文案'
                    },

                    {
                        value: 'xinlingJiTang',
                        name: '心灵鸡汤'
                    },

                    {
                        value: 'mingRenMingYan',
                        name: '名人名言'
                    },
                ]
            }
        },

        methods: {
            handleMiliRadio(val) {
                console.log(val);
                this.minliRadioVal = val;
            },

            handleShiYongRadio(val) {
                console.log(val);
                this.shiyongRadioVal = val;
            },

            handleYingXiaoRadio(val) {
                console.log(val);
                this.yingxiaoRadioVal = val;
            }
        }
    }
</script>

<style lang="scss" scoped>
.applay-wrap {
    margin: 10px auto;
}
.el-radio-group {
  display:flex;
  justify-content: start;
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: 15px;
}
</style>