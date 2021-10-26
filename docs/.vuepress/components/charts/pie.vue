<template>
  <div class="pie-box">
    <div>
       <v-chart id="chart" ref="chart"  :options="option" autoresize/>
    </div>
    <div>
        <el-button @click="onChangeChart"  type="danger">更新数据</el-button>
        <el-button @click="onChangeReset"  type="primary">恢复数据</el-button>
    </div>
    
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'   // 引入饼图
import 'echarts/lib/component/tooltip' // 引入提示
import 'echarts/lib/component/legend'  // 左上角legend
import 'echarts/lib/component/title'  // 标题
import pieObj from './piedata'       // 引入外部数据

  export default {
    components: {
       'v-chart': ECharts
    },
    name: "pie",
    data() {
      return {
        // 图表实例
        chart: null,
        option: {
          title: {
            text: '圆饼图示例',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['前端', '后端', '小程序', '面试题解', '读书']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                { value: 335, name: '前端' },
                { value: 310, name: '后端' },
                { value: 234, name: '小程序' },
                { value: 135, name: '面试题解' },
                { value: 1548, name: '读书' }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        
      }  
    },
    
    methods: {
       onChangeChart() {
          for(let key in pieObj) {
            let item = pieObj[key];
            const expendData = item['updateExpendData'];
            const lengends = item['updatelegends']
            const newExpends = expendData.map(item => {
              return {
                name: item.type,
                value: item.money
              }
            })
            this.option.legend.data = lengends;
            this.option.series[0].data = newExpends;
          }
       },
       
       onChangeReset() {
         for(let key in pieObj) {
            let item = pieObj[key];
            const resetExpendData = item['resetExpendData'];
            const resetLengends = item['resetlegend']
            this.option.legend.data = resetLengends;
            this.option.series[0].data = resetExpendData;
          }
       }
    },
    mounted() {
          
    }
  }
</script>

<style lang="scss" scoped>
.pie-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;
}
</style>