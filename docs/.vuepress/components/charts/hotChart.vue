<template>
  <div :className="chart" :style="{height:height,width:width}" ref="hotChart"></div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud';
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
            //   rotationStep: 45,
              gridSize: 10,
              width: '100%',
              shape: 'pentagon',
              top: 0,
              textStyle: {
                normal: {
                  fontFamily: 'sans-serif',
                  color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                  ].join(',') + ')'
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
          console.log(params);
        // this.$message.success('点击了' + params.href);
        window.open(params.data.href,'_blank')
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
