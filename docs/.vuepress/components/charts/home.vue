<template>
	<div class="wrap">
     <div class="top">
			   <div class="item">
					 <v-chart id="chart" ref="chartPies"  :options="optionPies" autoresize/>
				 </div>	 
				 <div class="item">
					 <v-chart  ref="chartLines"  :options="optionLines" autoresize/>
				 </div>
		 </div>
	</div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'   // 引入饼图
import 'echarts/lib/chart/lines'   // 引入折线图
import 'echarts/lib/chart/map'   // 引入地图
import 'echarts/lib/component/tooltip' // 引入提示
import 'echarts/lib/component/legend'  // 左上角legend
import 'echarts/lib/component/title'  // 标题


const colorLost = ['#4FD8FF', '#C15FFF', '#FF5F55', '#FFC935', '#767BFB', 'rgb(248,70,102)','#ff4c41','ff0066'];
	export default {
		name: "home",
		components: {
       'v-chart': ECharts
		},
		data(){
			return {
        // 图表实例
				chartPies: null,
				chartLines: null,
        optionPies: {
					color: colorLost,
          title: {
            text: '分类统计图',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['最新文章','前端', '后端', '小程序','云开发', '面试题解', '读书','工具']
          },
          series: [
            {
              name: '内容分类',
              type: 'pie',
              radius: ['35%', '55%'],
              center: ['50%', '50%'],
              data: [
								{ value: 26, name: '最新文章' },
                { value: 130, name: '前端' },
                { value: 3, name: '后端' },
								{ value: 11, name: '小程序' },
								{ value: 7, name: '云开发' },
                { value: 22, name: '面试题解' },
								{ value: 22, name: '读书' },
								{ value: 16, name: '工具' }
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
				},
				
				optionLines: {
					color: colorLost,
          title: {
            text: '发布统计图',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} (%)'
          },
          xAxis: {
						type: 'category',
						data: ['2019', '2020', '2021', '2022', '2023', '2024', '2025']
    			},
					yAxis: {
							type: 'value'
					},
          series: [
            {
              data: [40, 80, 20, 0, 0, 0, 0],
							type: 'line',
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
				},
        
      } 
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	 
	 .top {
		 display: flex;
		 justify-content:center;
		 flex-wrap: wrap;
		 .item {
			 flex:1;
      .echarts {
				 width: 450px;
				 height: 400px;
      }
		 }
	 }
	
	
}
</style>
