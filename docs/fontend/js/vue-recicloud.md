---
title: Vue中如何实现热词云
---

## Vue中如何实现热词云

## 快速导航

<TOC />

## 示例效果

<business-hotWord />

## 安装echarts-wordcloud

在终端下安装`echarts-wordcloud`

:::: tabs type:border-card
::: tab hotWord.vue lazy
```js
<template>
    <div>
        <el-row >
            <el-col :span="24">
                <el-card shadow="hover">
                <div slot="header"><span>热词导航</span></div>
                <hot-chart :chartData="hotData"></hot-chart>
                </el-card>
            </el-col>
    </el-row>
    </div>
</template>

<script>
import HotChart from "./hotChart";
    export default {
        components: {
            HotChart
        },
        name:'hotWord',
        data() {
            return {
                hotData: [
                    {name: "itclan", value: 1488},
                    {name: "itclanCoder", value: 1365},
                    {name: "itclan知乎", value: 1106},
                    {name: "微信公众号", value: 1621},
                    {name: "github", value: 1305},
                    {name: "腾讯云", value: 746},
                    {name: "阿里云", value: 1604},
                    {name: "mdnice", value: 1908},
                    {name: "小程序", value: 1889},
                    {name: "码云", value: 681},
                    {name: "腾讯工蜂", value: 851},
                    {name: "element UI", value: 1818},
                    {name: "element-plus", value: 1219},
                    {name: "React", value: 1859},
                    {name: "vue官方中文文档", value: 2942},
                    {name: "vue-router", value: 3942},
                    {name: "vuex", value: 9421},
                    {name: "NuxtJS", value: 442},
                    {name: "vueSSR", value: 5942},
                    {name: "vue-devtools", value: 1942},
                    {name: "vue-loader", value: 2942},
                    {name: "element UI", value: 4942},
                    {name: "ant design", value: 642}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
```
::: tab 

::: tab hotChart.vue lazy
```html
<template>
    <div :className="chart" :style="{height:height,width:width}" ref="hotChart"></div>
  </template>
  
  <script>
  import resize from './resize.js';
  import echarts from 'echarts';
  require('echarts-wordcloud');
  const colorList = ['#4FD8FF', '#C15FFF', '#FF5F55', '#FFC935', '#767BFB'];
  
  export default {
    name: 'hotChart',
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
        chart:null
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.initEchart();
      });
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initEchart() {
        this.myChart = echarts.init(this.$refs.hotChart);
        this.myChart.setOption(
          {
            tooltip: {
              trigger: 'item',
              formatter: '{b} <br/> 热词次数：{c} 次'
            },
            series: [
              {
                type: 'wordCloud',
                sizeRange: [14, 28],
                rotationRange: [0, 0],
                width: '100%',
                shape: 'cardioid',
                gridSize: 10,
                top: 0,
                textStyle: {
                  normal: {
                    fontFamily: 'sans-serif',
                    color: params => {
                      return colorList[Math.floor(Math.random() * colorList.length)];
                    }
                  }
                },
                data: this.chartData
              }
            ]
          },
          true
        );
        this.myChart.off('click');
        this.myChart.on('click', params => {
          this.$message.success('点击了' + params.name);
        });
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

<footer-FooterLink :isShareLink="false" :isDaShang="true" />