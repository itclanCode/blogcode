<template>
    <div>
        <div class="staryunshi-wrap">
            <div class="staryunshi-select">
                    <el-select v-model="starVal" clearable placeholder="请选择星座" size="small" class="el-select">
                        <el-option
                        v-for="item in starOpions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="yunshiTypeVal" clearable  placeholder="请选择运势类型" size="small" class="el-select">
                        <el-option
                        v-for="item in yunshiTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" icon="el-icon-search" size="small" @click="handleBtnSearch" :disabled="isBtnDisabled">查询</el-button>
                    <el-button type="primary" icon="el-icon-setting" size="small" @click="handleBtnReset">重置</el-button>
             </div>
            
             <!-- 具体展示内容 -->
             <div v-if="all == ''?false:true" >
                  <p class="result-list"><span>{{ datetime }}</span><span>{{ date }}</span><span>查询星座: {{ name }}</span></p>
                  <p class="result-list" v-if="isShow"><span v-if="all==''?false:true"><strong>总运势</strong>: {{ all }}</span><span v-if="color==''?false:true"><strong>幸运色</strong>：{{ color }}</span><span v-if="money==''?false:true"><strong>财运指数</strong>：{{ money }}</span><span v-if="number==''?false:true"><strong>幸运数字</strong>: {{ number }}</span></p>
                  <p class="result-list" v-if="yunshiTypeVal == 'today'?true:false"><span><strong>匹配星座</strong>: {{ QFriend }}</span></p>
                  <p class="result-list" v-if="yunshiTypeVal != 'year'?true:false"><span><strong>健康状况</strong>: {{ otherHealth }}</span></p>
                  <p class="result-list" v-if="yunshiTypeVal != 'year'?true:false"><span><strong>爱情状况</strong>: {{ love }}</span></p>
                  <p class="result-list" v-if="yunshiTypeVal == 'week'?true:false"><span><strong>工作情况</strong>: {{ job }}</span></p>
                  <p class="result-list" v-if="isShow"><span>工作运势: {{ work }}</span></p>
                  <p class="result-list" v-if="isShow && summary == ''?false:true"><span><strong>工作状况</strong>: {{ summary }}</span></p>
                  <ul v-if="yunshiTypeVal == 'year'?true:false">
                       <li class="result-list career" v-for="(careerItem,index) in career" :key="index" >
                             {{ careerItem }}
                       </li>
                  </ul>
                  <ul v-if="yunshiTypeVal == 'year'?true:false">
                      <li class="result-list finance" v-for="(financeItem,index) in finance" :key="index">
                            {{financeItem}}
                      </li>
                  </ul>
                  <ul v-if="yunshiTypeVal == 'year'?true:false">
                      <li class="result-list yearloveitem" v-for="(yearLoveItem,index) in yearLove" :key="index">
                            {{yearLoveItem}}
                      </li>
                  </ul>
                  <ul v-if="yunshiTypeVal == 'year'?true:false">
                      <li class="result-list yearhealthitem" v-for="(yearHealthItem,index) in yearHealth" :key="index">
                            {{yearHealthItem}}
                      </li>
                  </ul>
                  <p class="result-list" v-if="yunshiTypeVal == 'year'?true:false"><span><strong>年度密码</strong>: {{ mima.info }}</span></p>
                  <ul v-if="yunshiTypeVal == 'year'?true:false">
                      <li class="result-list yearMiMaitem" v-for="(yearMiMaItem,index) in mima.text" :key="index">
                            {{yearMiMaItem}}
                      </li>
                  </ul>
             </div>
             <el-empty v-if="isResultNull == true?true:false" description="暂无数据,接口使用频繁,明天再来吧">
                <el-button type="danger" size="small"  @click="handleStarFind('https://cesuan.itclan.net/bazicy/?spread=tui&dhid=720')">更精确财运查询</el-button>
             </el-empty>
             <div class="footer-btn">
                <el-button type="danger" size="small"  @click="handleStarFind('https://cesuan.itclan.net/bazicy/?spread=tui&dhid=720')">更精确财运查询</el-button>
             </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'starYunShi',
        data() {
            return {
                isBtnDisabled: false,
                isResultNull: false,   // 是否显示结果
                starVal: '水瓶座',
                yunshiTypeVal: 'today',
                isShow: true,   // 默认显示
                QFriend: '',   // 匹配星座
                all: '',       // 综合指数,总运势
                color: '',     // 颜色,幸运色
                date: '',      // 当前日期
                datetime: '',  // 当前时间
                otherHealth: '',    // 健康指数
                yearHealth: '', // 健康指数
                yearLove: '',  // 爱情指数
                love: '',      // 爱情指数
                money: '',     // 财运指数
                name: '',      // 星座名称
                number: '',    // number
                summary: '',   // 今日概述
                work: '',      // 工作指数,工作运势
                job: '',       // 工作运势
                career: [],    // 事业运
                finance: [],    // 财运运
                future: '',      // 未来运势
                luckyStone: '', // 幸运石
                mima: {         // 化解
                    info: '',
                    text: []

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

                yunshiTypeOptions: [
                    {
                        label: '今天运势',
                        value: 'today'
                    },

                    {
                        label: '明天运势',
                        value: 'tomorrow'
                    },

                    {
                        label: '一周运势',
                        value: 'week'
                    },

                    {
                        label: '当月运势',
                        value: 'month'
                    },

                    {
                        label: '今年运势',
                        value: 'year'
                    },


                ]
            }
        },

        methods: {
            async handleBtnSearch() {
                    this.isBtnDisabled = true;
                    let development = process.env.NODE_ENV == 'development' ? true : false;
                    console.log(development, 'development'); //true的时候为开发环境
                    if (development) {
                      this.url = '/web'
                    } else {
                    this.url = 'http://web.juhe.cn';
                    }
                    const params = {
                        key: "da3cf4743ecbe7f9e287dc5df72f5294",
                        consName: this.starVal,
                        type:  this.yunshiTypeVal
                    }
                    let res = await this.$axios.get(`${this.url}/constellation/getAll`,{params})
                    console.log(res);
                    if(res.status == 200 && res.data != null) {
                        this.isBtnDisabled = false;
                        this.$message.success("星座运势查询成功");
                        const data = res.data;
                        const { QFriend, all, color, date,datetime,
                                health, love, money, work, year,
                                number, job,summary,  career, finance,
                                future, luckyStone, mima,name
                        } = data;
                        const yunshiTypeVal = this.yunshiTypeVal;
                                this.date = date;
                                this.name = name;
                                this.QFriend = QFriend;
                                this.all = all;
                                this.color = color;
                                this.datetime = datetime;
                                this.otherHealth = health;
                                this.love = love;
                                this.money = money;
                                this.job = job;
                                this.work = work;
                                this.year = year;
                                this.number = number;
                                this.summary = summary;
                                this.career = career;
                                this.finance = finance;
                                this.future = future;
                                this.luckyStone = luckyStone;
                                this.mima = mima;
                                this.yearHealth = health;
                                this.yearLove = love;
                          
                                switch(yunshiTypeVal ) {
                                    case 'today':
                                        this.isShow = false;
                                        break;
                                    case 'tomorrow':
                                        break;  
                                    case 'week':
                                        break;  
                                    case 'month':
                                        this.isShow = true;
                                        break;        
                                    case 'year':
                                        this.isShow = false;
                                        break;    
                                    default:
                                        return;      
                                }  
                        if(res.data.resultcode == '112') {
                            this.all = '';
                            this.$message.error("接口每日使用次数上线,请明天来使用");

                        }           
                    }else {
                        this.isResultNull = true;
                        this.$message.error("查询失败");
                    }

            },

            handleBtnReset() {
                this.all = '';
                this.isResultNull = false;
                this.isBtnDisabled = false;
            },

            handleStarFind(url) {
                window.open(url,'_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.staryunshi-select {
    display: flex;
    flex: 1;
    justify-content:flex-start;
    flex-wrap: wrap;
}
.el-select {
    width: 115px;
    margin-right: 6px;
}

.result-list {
    border-bottom: 1px dashed #ccc;
}

.result-list span {
    margin-right: 8px;
}

.career,.finance,.yearloveitem,.yearhealthitem,.yearMiMaitem {
    list-style-position: inside;
    list-style-type: decimal;
}

.career::before {
    content: '事业上';
    display:inline-block;
    font-weight: bold;
}

.finance::before {
    content: '财运上';
    display:inline-block;
    font-weight: bold;
}

.yearloveitem::before {
    content: '爱情上';
    display:inline-block;
    font-weight: bold;
}

.yearhealthitem::before {
    content: '健康上';
    display:inline-block;
    font-weight: bold;
}

.yearMiMaitem::before {
    content: '命理上';
    display:inline-block;
    font-weight: bold;
}

.footer-btn {
    margin-top:20px;
}
</style>