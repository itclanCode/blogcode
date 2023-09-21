<template>
    <div class="shencheng-wrap">
        <div class="shengcheng-select">
            <el-select v-model="yearVal" clearable placeholder="请选择年份" size="small" class="el-select">
                <el-option
                v-for="item in yearOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="monthVal" clearable placeholder="请选择月份" size="small" class="el-select">
                <el-option
                v-for="item in monthOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="dayVal" clearable placeholder="请选择几日" size="small" class="el-select">
                <el-option
                v-for="item in dayOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="hourVal" clearable placeholder="请选择几点" size="small" class="el-select">
                <el-option
                v-for="item in hourOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-search" size="small" @click="handleBtnSearch" :disabled="isBtnDisabled">查询</el-button>
            <el-button type="primary" icon="el-icon-setting" size="small" @click="handleBtnReset">重置</el-button>
        </div>
        <div v-if="shenchenParams.Animal == ''?false:true">
             <p class="border-bottom"><span><strong>属相</strong>: {{ shenchenParams.Animal}}</span>
                                     <span>农历: {{ shenchenParams.year }}年</span>
                                     <span>{{shenchenParams.ImonthCn }}</span>
                                     <span>{{ shenchenParams.IDayCn }}</span>
                                     <span>公历: {{ shenchenParams.cYear }}年</span>
                                     <span>{{ shenchenParams.cMonth }}月</span>
                                     <span>{{ shenchenParams.cDay }}日</span>
             </p>
             <p class="border-bottom"><span><strong>星座</strong>: {{ shenchenParams.astro }}</span></p>
             <p class="border-bottom"><span>干支纪年: {{ shenchenParams.gzYear}}</span>
                                      <span>干支纪月：{{ shenchenParams.gzMonth}}</span>
                                      <span>干支纪日: {{ shenchenParams.gzDay }}</span>
             </p>
             <p class="border-bottom"><span><strong>节气</strong>：{{ shenchenParams.isTerm==true?'是':'否' }}</span>
                                      <span>闰月: {{ shenchenParams.isLeap == true?'是':'否' }}</span>
             </p>
             <ul class="eight-item-ul ">
                <li class="eight-item-li border-bottom" v-for="(eightItem) in shenchenParams.eightAll.eight" :key="eightItem">
                    {{ eightItem }}
                </li>
              </ul>
              <p class="border-bottom"><strong>属:{{ shenchenParams.eightAll.shu }}</strong></p>
              <ul class="five-item-ul">  
                <li class="five-item-li border-bottom" v-for="(fiveItem) in shenchenParams.fiveAll.five" :key="fiveItem">
                     {{ fiveItem }}
                </li>
             </ul>
             <p class="border-bottom"><strong>缺:{{ shenchenParams.fiveAll.lose }}</strong></p>
        </div>
        <el-empty v-if="isResultNull == true?true:false" description="暂无数据,接口使用频繁,明天再来吧">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.net/bzjingpi/?spread=tui&dhid=720')">更精确生辰结果查询</el-button>
        </el-empty>
        <div class="footer-btn">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.net/bzjingpi/?spread=tui&dhid=720')">更精确生辰结果查询</el-button>
        </div>
    </div>
</template>

<script>
import fetchJsonp from 'fetch-jsonp'
import secret from '../serect.js'
    export default {
        name: 'shenchenHelp',
        data() {
            return {
                isBtnDisabled: false,
                isResultNull: false,
                url: '',
                yearVal: new Date().getFullYear(),
                monthVal: new Date().getMonth()+1,
                dayVal: new Date().getDate(),
                hourVal: new Date().getHours(),
                yearOptions: [],
                monthOptions: [],
                dayOptions: [],
                hourOptions: [],
                shenchenParams: {
                    Animal: '',  // 属相
                    IDayCn: '', // 农历日
                    ImonthCn: '', // 农历月份
                    astro: '',   // 星座
                    cDay: '',   // 阳历日期
                    cMonth: '', // 阳历月份
                    cYear: '',  // 阳历年
                    eightAll: {
                        'eight': [],
                        'shu': '' || null    // 属(如:属水)
                    }, // 八字
                    fiveAll: {  // 五行
                        'five': [],
                        'lose': '' || null,  // *缺(如:缺木火)*/
                    },
                    gzDay: '', // 干支纪日
                    gzMonth: '', // 干支纪月,
                    gzYear: '', // 干支纪年
                    month: '', // 农历月份数字
                    ncWeek: '', // 周几
                    year: '', // 农历年份
                    isTerm: false, // 是否节气 
                    isLeap: false, // 是否闰月
                    Term: false // 节气
                }
            }
        },

        mounted() {
            this.addYear();
            this.addMounth();
            this.addDay();
            this.addHour()
        },

        methods: {
            addYear() {
                for(let i = 1900; i <= 2050; i++) {
                    this.yearOptions.push({
                        value: i,
                        label: `${i}年`
                    })
                }
            },

            addMounth() {
                for(let i = 1; i <= 12; i++) {
                    this.monthOptions.push({
                        value: i,
                        label: `${i}月`
                    })
                }
            },

            addDay() {
                for(let i = 1; i <= 31; i++) {
                    this.dayOptions.push({
                        value: i,
                        label: `${i}日`
                    })
                }
            },

            addHour() {
                for(let i = 0; i <= 23; i++) {
                    this.hourOptions.push({
                        value: i,
                        label: `${i}点` 
                    })
                }
            },

            async handleBtnSearch() {
                this.isBtnDisabled = true;
                let key = secret.shenchenhelpjuhekey;
                let development = process.env.NODE_ENV == 'development' ? true : false;
                console.log(development, 'development'); //true的时候为开发环境
                if (development) {
                   this.url = '/shenchenInterface';
                } else {
                   this.url = 'https://apis.juhe.cn';
                }
                const params = {
                    key,
                    year: this.yearVal,
                    month: this.monthVal,
                    day: this.dayVal,
                    hour: this.hourVal
                }
                // const response = await fetchJsonp(`${this.url}/birthEight/query?key=${params.key}&year=${params.year}&month=${params.month}&day=${params.day}&hour=${params.hour}`,{timeout: 3000,method: 'get'})
                //                        .then(res => res.json());
                const response = await this.$axios.get(`${this.url}/birthEight/query`,{params});                       
                console.log(response);
                if(response.status == 200 && response.data.error_code == 0) {
                        this.isBtnDisabled = false;
                        this.$message.success("生辰数据查询成功");
                        const data  = response.data.result;
                        const {Animal,IDayCn,ImonthCn,
                            astro,cDay,cMonth,cYear,
                            eightAll,fiveAll,gzDay,gzMonth,
                            gzYear,month,ncWeek,year,
                            isTerm,isLeap,Term
                            } = data;

                            this.shenchenParams.Animal = Animal;
                            this.shenchenParams.IDayCn = IDayCn;
                            this.shenchenParams.ImonthCn = ImonthCn;
                            this.shenchenParams.astro = astro;
                            this.shenchenParams.cDay = cDay;
                            this.shenchenParams.cMonth = cMonth;
                            this.shenchenParams.cMonth = cMonth;
                            this.shenchenParams.cYear = cYear;
                            this.shenchenParams.eightAll = eightAll;
                            this.shenchenParams.fiveAll = fiveAll;
                            this.shenchenParams.gzDay = gzDay;
                            this.shenchenParams.gzMonth = gzMonth;
                            this.shenchenParams.gzYear = gzYear;
                            this.shenchenParams.month = month;
                            this.shenchenParams.ncWeek = ncWeek;
                            this.shenchenParams.year = year;
                            this.shenchenParams.isTerm = isTerm;
                            this.shenchenParams.isLeap = isLeap;
                            this.shenchenParams.Term = Term;
                }else {
                    this.isResultNull = true;
                    this.$message.error('暂无查询数据,接口调用已上线,明天再来吧');
                }
            },
            handleBtnReset() {
                this.yearVal = new Date().getFullYear();
                this.monthVal = new Date().getMonth() + 1;
                this.dayVal = new Date().getDate();
                this.hourVal = new Date().getHours();
                this.shenchenParams.Animal = '';
                this.isBtnDisabled = false;
                this.isResultNull = false;
            },

            handleJinQueFind(url) {
                window.open(url,'_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.shengcheng-select {
    display: flex;
    flex: 1;
    justify-content:flex-start;
    flex-wrap: wrap;
}

.el-select {
    width: 120px;
    margin-right: 5px;
}

.eight-item-ul, .five-item-ul {
    display:flex;
    justify-content: start;
    padding-left: 0;
}

.eight-item-ul::before {
    content: '八字:';
    display:inline-block;
}

.eight-item-li {
    margin-right: 5px;
}

.five-item-ul::before {
    content: '五行:';
    display:inline-block;
}

.five-item-li {
    margin-right: 5px;
}

.border-bottom {
    border-bottom: 1px dashed #ccc;
}

.border-bottom span {
    margin-right: 5px;
}

.footer-btn {
    margin-top:20px;
}

</style>