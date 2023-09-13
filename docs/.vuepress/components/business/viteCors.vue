<template>
    <div>
        <div class="select-options">
            <el-select v-model="value" clearable placeholder="请选择城市">
                <el-option
                v-for="item in cityOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" @click="handleBtnSearch">查询</el-button>
        </div>
        <div v-if=" weathers.city==''?false:true">城市:{{weathers.city}}-日期:{{weathers.date }}-状况:{{ weathers.wea }}-{{weathers.week}}-风力:{{ weathers.win_speed }}<br /><br />温馨提示: {{ weathers.air_tips }}</div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'viteCors',
        computed: {
            cityOptions() {
                return this.cityOptionsData;
            }
        },
        data() {
            return {
                weathers: {
                  city: '',     // 城市
                  date: '',     // 日期
                  wea: '',     // 状况
                  week: '',     // 星期
                  win_speed: '',  // 风力
                  air_tips: '',   // 提示
                },
              
                cityOptionsData: [
                    {
                      value: '101010100',
                      label: '北京'
                    }, 
                    {
                      value: '101040100',
                      label: '重庆'
                    }, 
                    {
                      value: '101020100',
                      label: '上海'
                    },
                    {
                      value: '101030100',
                      label: '天津'
                   }, 
                   {
                      value: '101210101',
                      label: '杭州'
                   },
                   {
                      value: '101280101',
                      label: '广州'
                   },
                   {
                      value: '101190101',
                      label: '南京'
                   },
                   {
                      value: '101270101',
                      label: '成都'
                   },
                   {
                      value: '101290201',
                      label: '大理'
                   },
                   {
                      value: '101220101',
                      label: '合肥'
                   },
                   {
                      value: '101090101',
                      label: '石家庄'
                   },
                   {
                      value: '101050101',
                      label: '哈尔滨'
                   },
                   {
                      value: '101180101',
                      label: '郑州'
                   },
                   {
                      value: '101200101',
                      label: '武汉'
                   },
                   {
                      value: '101230101',
                      label: '福州'
                   },
                   {
                      value: '101250101',
                      label: '长沙'
                   },
                   {
                      value: '101070101',
                      label: '沈阳'
                   },
                   {
                      value: '101240101',
                      label: '南昌'
                   },
                ],
                value: '101010100',
                url: ''
            }
        },
        mounted() {
         this.handleBtnSearch();
        },  
        methods: {
            async handleBtnSearch() {
                  let development = process.env.NODE_ENV == 'development' ? true : false;
                  console.log(development, 'development'); //true的时候为开发环境
                  if (development) {
                     this.url = '/path/'
                  } else {
                     this.url = 'https://v0.yiketianqi.com/';
                  }
                   const params = {
                        unescape:1,
                        version:'v61',
                        appid: 69617844,
                        appsecret:'Cus4jy7S',
                        cityid: this.value
                    }
                    const response = await axios.get(`${this.url}api`,{params});
                    console.log(response);
                    if(response.status === 200) {
                      const {city,date,wea,week,win_speed,air_tips} = response.data;
                      this.weathers.city = city;
                      this.weathers.date = date;
                      this.weathers.wea = wea;
                      this.weathers.week = week;
                      this.weathers.win_speed = win_speed;
                      this.weathers.air_tips = air_tips;
                      this.value = city;
                    }else {
                     console.log('error');
                    }
                   
                    
            },

            
        }
    }
</script>

<style lang="scss" scoped>
.select-options {
    display: flex;
    justify-content: start;
    margin-bottom: 20px;
}
</style>