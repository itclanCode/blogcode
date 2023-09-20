<template>
    <div>
        <div class="laohuangli-wrap">
            <div>
                <el-radio-group v-model="radio">
                    <el-radio   label="rili">按日历查询</el-radio>
                    <el-radio   label="shichen">按时辰查询</el-radio>
                </el-radio-group>  
             </div>
             <div class="el-select-wrap">
                <el-date-picker
                    clearable
                    v-model="datePickerVal"
                    align="center"
                    type="date"
                    size="small"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd"
                    :default-value="defaultTimeVal"
                    :picker-options="pickerOptions">
                </el-date-picker>  
                <el-button type="primary" icon="el-icon-search" size="small" @click="handleBtnSearch" :disabled="isDisabled">查询</el-button>
                <el-button type="primary" icon="el-icon-setting" size="small" @click="handleBtnReset">重置</el-button> 
            </div>
            <!-- 结果展示 -->
            <!-- 按日历查询结果开始 -->
            <div class="result-content" v-if="radio == 'rili'?true:false">
                  <div v-if="riliResult.yangli == ''?false:true">
                      <p><strong>阳历：</strong><span>{{ riliResult.yangli }}</span></p>
                      <p><strong>阴历：</strong><span>{{ riliResult.yinli }}</span></p>
                      <p><strong>五行：</strong><span>{{ riliResult.wuxing }}</span></p>
                      <p><strong>冲煞：</strong><span>{{ riliResult.chongsha }}</span></p>
                      <p><strong>彭祖百忌：</strong><span>{{ riliResult.baiji }}</span></p>
                      <p><strong>吉神宜神：</strong><span>{{ riliResult.jishen }}</span></p>
                      <p><strong>宜：</strong><span>{{ riliResult.yi }}</span></p>
                      <p><strong>冲煞：</strong><span>{{ riliResult.xiongshen }}</span></p>
                      <p><strong>忌：</strong><span>{{ riliResult.ji }}</span></p>
                  </div>
            </div>
            <!-- 按日历查询结果结束 -->
            <!-- 按时辰查询结果 -->
            <div class="result-content" v-else>
                <div v-if="shichenResult.length != 0">
                    <el-table
                        :data="shichenResult"
                        border
                        style="width: 100%">
                        <el-table-column v-for="item in laohuangliTableCol" :key="item.label"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width"
                        :align="item.align"
                        :medium="item.medium"
                        ></el-table-column>
                    </el-table>
                </div>
            </div>
            <!-- 按时辰查询结果 -->
        </div>
        <el-empty v-if="isResultNull == true?true:false" description="暂无数据,接口使用频繁,明天再来吧">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/bazisyy/?spread=tui&dhid=720')">更精确八字测算事业查询</el-button>
        </el-empty>
        <div class="footer-btn">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/bazisyy/?spread=tui&dhid=720')">更精确八字测算事业查询</el-button>
        </div>
    </div>
</template>

<script>
import { laohuangliTableCol } from "./laohuangliTableCol.js";
    export default {
        name: 'laohuangli',
        data() {
            return {
                isDisabled: false,
                isResultNull: false,
                datePickerVal: this.forMateNowDate(),
                radio: 'rili',
                defaultTimeVal: new Date(),
                riliResult: {
                    yangli: '', // 阳历
                    yinli: '', // 阴历
                    wuxing: '', // 五行
                    chongsha: '', // 冲煞
                    baiji: '',    // 彭祖百忌
                    jishen: '',    // 吉神宜神
                    yi: '',       // 宜
                    xiongshen: '', // 凶神宜神
                    ji: '',       // 忌
                },
                shichenResult: [],
                laohuangliTableCol,
                pickerOptions: {
                    disabledDate(time) {
                    return time.getTime() < Date.now();
                 },
                shortcuts: [
                    {
                      text: '今天',
                      onClick(picker) {
                         picker.$emit('pick', new Date());
                       }
                   }, 
                   {
                     text: '昨天',
                      onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                     },
                   }, 

                   {
                     text: '明天',
                      onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() + 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                     },
                   }, 
                   {
                     text: '后天',
                      onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() + 3600 * 1000 * 24*2);
                        picker.$emit('pick', date);
                     },
                   }, 
                   {
                      text: '一周后',
                      onClick(picker) {
                      const date = new Date();
                      date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
                      picker.$emit('pick', date);
                    }
                }]
              },
            }
        },

        methods: {
            async handleBtnSearch() {
                this.isDisabled = true;
                const  dateType = this.radio;
                let development = process.env.NODE_ENV == 'development' ? true : false;
                console.log(development, 'development'); //true的时候为开发环境
                if (development) {
                    this.url = '/laohuangliapi';
                } else {
                this.url = 'https://v.juhe.cn';
                }
                const params = {
                    key: "6b6e4352e8c667ec670fcac3f4397367",
                    date: this.datePickerVal
                }
                switch(dateType) {
                    // 按日历查询,走不同的接口
                    case 'rili':
                        let rilires = await this.$axios.get(`${this.url}/laohuangli/d`,{params});
                        console.log(rilires, 'rilires日历');
                        if(rilires.status == 200 && rilires.data.error_code == 0) {
                            this.isDisabled = false;
                            this.$message.success("老黄历数据查询成功");
                            const data = rilires.data.result;
                            const { yangli, yinli, wuxing, chongsha,
                                    baiji, jishen, yi, xiongshen,ji
                            } = data;
                            this.riliResult.yangli =   yangli;
                            this.riliResult.yinli =   yinli;
                            this.riliResult.wuxing =  wuxing;
                            this.riliResult.chongsha = chongsha;
                            this.riliResult.baiji =   baiji;
                            this.riliResult.jishen =  jishen;
                            this.riliResult.yi =   yi;
                            this.riliResult.xiongshen = xiongshen;
                            this.riliResult.ji =  ji;
                        }else {
                            this.isResultNull = true;
                            this.$message.error('暂无查询数据,接口调用已上线,明天再来吧');
                        }
                        break;
                    case 'shichen':
                        let shichenres = await this.$axios.get(`${this.url}/laohuangli/h`,{params});
                        console.log(shichenres, 'shichenres日历');
                        if(shichenres.status == 200 && shichenres.data.error_code == 0) {
                            this.isDisabled = false;
                            this.$message.success("老黄历数据查询成功");
                            const data = shichenres.data.result;
                            this.shichenResult = data;

                        }else {
                            this.isResultNull = true;
                            this.$message.error('暂无查询数据,接口调用已上线,明天再来吧');
                        }
                        break;
                    default:
                        return;    
                }
            },

            forMateNowDate() {
                let nowDate = new Date();
                let year = nowDate.getFullYear();
                let month = (nowDate.getMonth() + 1)<10? '0' + (nowDate.getMonth() + 1) : (nowDate.getMonth() + 1);
                let day = nowDate.getDate()<10? '0' + nowDate.getDate() : nowDate.getDate();
                let date = year + '-' + month + '-' + day;
                return date;
            },

            handleBtnReset() {
                this.datePickerVal = this.forMateNowDate();
                this.riliResult.yangli = '';
                this.shichenResult = '';
                this.isDisabled = false;
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

.result-content {
   margin-top: 10px;
}

.footer-btn {
    margin-top:20px;
}
</style>