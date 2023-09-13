---
title: Vue中如何实现圆饼图与柱状图
---

## Vue中如何实现圆饼图与柱状图

## 快速导航

<TOC />

## 示例效果

<business-pieZhuzhuang />

## 示例代码

:::: tabs type:border-card
::: tab pieZhuzhuang.vue lazy
```html
<template>
    <div>
        <div class="container">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <el-card shadow="hover">
                    <div slot="header"><span>技术栈图谱</span></div>
                    <solit-pie></solit-pie>
                    </el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <el-card shadow="hover">
                    <div slot="header"><span>日工作时长统计图</span></div>
                    <gradients-bar></gradients-bar>
                    </el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <el-card shadow="hover">
                    <div slot="header"><span>日体育人数统计图</span></div>
                    <more-bar></more-bar>
                    </el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <el-card shadow="hover">
                    <div slot="header"><span>日统计图</span></div>
                    <line-bars :chartData="LineData"></line-bars>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import SolitPie from "./solitPie";
    import GradientsBar from './gradientsBar';
    import MoreBar from "./moreBar";
    import LineBars from "./lineBars"
    export default {
        comments: {
            SolitPie,
            GradientsBar,
            MoreBar,
            LineBars
        },
        name: 'pieZhuzhuang',
        data() {
            return {
                LineData:[
                    {name: "中山公园", male: 128, female: 1075, value: 120},
                    {name: "古琴台", male: 805, female: 983, value: 1788},
                    {name: "晴川阁", male: 1381, female: 511, value: 1892},
                    {name: "动物园", male: 1389, female: 125, value: 1514},
                    {name: "欢乐谷", male: 21, female: 1481, value: 1502},
                    {name: "汉口江滩", male: 184, female: 780, value: 964}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;
}
.el-row {
  margin-bottom: 20px;
}
</style>
```
:::
::: tab SolitPie.vue lazy
```html
<template>
  <div ref="solidPie" :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import resize from './resize';
import echarts from 'echarts';

const colorLost = ['#4FD8FF', '#C15FFF', '#FF5F55', '#FFC935', '#767BFB', 'rgb(248,70,102)'];
export default {
  name: 'solidPie',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initEchart();
    });
  },
  methods: {
    initEchart() {
      this.myChart = echarts.init(this.$refs.solidPie);
      this.myChart.setOption(
        {
          color: colorLost,
          tooltip: {
            trigger: 'item',
            formatter: params => {
              return params.marker + ' ' + params.name + '：' + params.value + ' (' + params.percent + '%)';
            }
          },
          legend: {
            show: true,
            left: '15',
            top: 0,
            type: 'scroll',
            itemWidth: 18,
            itemHeight: 11,
            data: ['Vue', 'React', 'TypeScript', 'Webpack', 'Node', 'jQuery']
          },
          series: [
            {
              name: '技术占比',
              type: 'pie',
              icon: 'circle',
              center: ['48%', '55%'],
              radius: '55%',
              data: [
                {
                  name: 'Vue',
                  value: 75
                },
                {
                  name: 'React',
                  value: 85
                },
                {
                  name: 'TypeScript',
                  value: 70
                },
                {
                  name: 'Webpack',
                  value: 75
                },
                {
                  name: 'Node',
                  value: 45
                },
                {
                  name: 'jQuery',
                  value: 65
                }
              ],
              label: {},
              labelLine: {
                normal: {
                  show: true
                }
              }
            }
          ]
        },
        true
      );
    }
  }
};
</script>

```
:::
::: tab GradientsBar.vue lazy
```html
<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './resize'

const animationDuration = 6000

export default {
  name: 'barchart',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '日工作时长',
          type: 'bar',
          stack: 'vistors',
          barWidth: '40%',
          barGap: '80%',
          data: [8, 9, 10, 11, 12, 9, 13],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#5171fd'
                },
                {
                  offset: 1,
                  color: '#c97afd'
                }
              ])
            }
          },
          animationDuration
        }]
      })
    }
  }
}
</script>

```
:::
::: tab MoreBar.vue lazy
```html
<template>
  <div ref="moreBar" :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import resize from './resize';
import echarts from 'echarts';
export default {
  name: 'moreBar',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initEchart();
    });
  },
  methods: {
    initEchart() {
      this.myChart = echarts.init(this.$refs.moreBar);
      this.myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            padding: [5, 10]
          },
          grid: {
            left: 50,
            right: 20,
            bottom: 40,
            top: 30
          },
          legend: {
            show: true,
            itemWidth: 16,
            itemHeight: 12
          },
          xAxis: [
            {
              type: 'category',
              data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
              axisLine: {
                lineStyle: {
                  color: '#cecece'
                }
              },
              axisLabel: {
                color: '#666'
              },
              axisTick: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#cecece'
                }
              },
              axisLabel: {
                color: '#666'
              },
              splitLine: {
                show: false
              }
            }
          ],
          series: [
            {
              name: '篮球',
              type: 'bar',
              data: [30, 40, 50, 50, 55, 60, 40],
              barWidth: '10',
              barGap: '20%',
              type: 'bar',
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#5171fd'
                    },
                    {
                      offset: 1,
                      color: '#c97afd'
                    }
                  ])
                }
              }
            },
            {
              name: '羽毛球',
              type: 'bar',
              data: [60, 60, 90, 90, 120, 120, 90],
              barWidth: '10',
              barGap: '20%',
              type: 'bar',
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#3dadf6'
                    },
                    {
                      offset: 1,
                      color: '#737bfc'
                    }
                  ])
                }
              }
            },
            {
              name: '乒乓球',
              type: 'bar',
              data: [40, 40, 60, 60, 80, 80, 60],
              barWidth: '10',
              barGap: '20%',
              type: 'bar',
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#ea677c'
                    },
                    {
                      offset: 1,
                      color: '#ef9b5f'
                    }
                  ])
                }
              }
            }
          ]
        },
        true
      );
    }
  }
};
</script>

```
:::
::: tab LineBars.vue lazy
```html
<template>
  <div :class="className" :style="{height:height,width:width}" ref="moreChart"></div>
</template>

<script>
import resize from './resize';
import echarts from 'echarts';
export default {
  name: 'moreChart',
  props: {
    chartData: {
      type: Array,
      required: true
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  mixins: [resize],
  data() {
    return {
      chart: null
    };
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  mounted() {
    this.$nextTick(() => {
      this.initEchart();
    });
  },
  methods: {
    initEchart() {
      this.chart = echarts.init(this.$refs.moreChart);
      this.chart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            padding: [5, 10]
          },
          grid: {
            left: 50,
            right: 20,
            bottom: 40,
            top: 55
          },
          legend: {
            show: true
          },
          xAxis: [
            {
              type: 'category',
              data: this.chartData.map(item => item.name),
              axisLine: {
                lineStyle: {
                  color: '#cecece'
                }
              },
              axisLabel: {
                color: '#666'
              },
              axisTick: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#cecece'
                }
              },
              axisLabel: {
                color: '#666'
              },
              splitLine: {
                show: false
              }
            }
          ],
          series: [
            {
              name: '男',
              type: 'bar',
              stack: '总量',
              barWidth: 15,
              barGap: '80%',
              itemStyle: {
                normal: {
                  color: '#2fbadc'
                }
              },
              data: this.chartData.map(item => item.male)
            },
            {
              name: '女',
              type: 'bar',
              stack: '总量',
              barWidth: 15,
              barGap: '80%',
              itemStyle: {
                normal: {
                  color: '#f67a7b'
                }
              },
              data: this.chartData.map(item => item.female)
            },
            {
              name: '总人数',
              type: 'line',
              symbolSize: 7,
              symbol: 'circle',
              itemStyle: {
                normal: {
                  color: '#737bfc',
                  barBorderRadius: 0
                }
              },
              data: this.chartData.map(item => item.value)
            }
          ]
        },
        true
      );
    }
  },
  watch: {
    chartData: {
      handler(nl, ol) {
        this.initEchart();
      },
      deep: true
    }
  }
};
</script>


```
:::


::::