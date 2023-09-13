---
title: Vue中中如何实现地球3D自动旋转
---

## Vue中实现城市分布图可下钻到县

## 快速导航

<TOC />

## 示例效果

<business-cityfenbu />

## 具体实现

:::: tabs type:border-card
::: tab cityfenbu.vue lazy
```html
<template>
    <div >
         <el-card class="seriesmap-box-card">
            <div slot="header" class="clearfix">
              <span>城市分布图 (点击可下钻到县)</span>
            </div>
            <div>
                <div class="series-map" :style="{height:height,width:width}" ref="seriesMap"></div>
            </div>
         </el-card>
    </div>
  </template>
  
  <script>
  import resize from './resize.js';
  import echarts from 'echarts';
  import { getGeoJson } from './getGeoJson.js';
  import { getMapChartData } from './getMapChartData.js';
  export default {
    name: 'cityfenbu',
    mixins: [resize],
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '608px'
      }
    },
    data() {
      return {
        geoJson: {},
        parentInfo: [
          {
            cityName: '全国',
            code: 100000
          }
        ]
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.getMapJson();
      });
    },
    methods: {
      //获取geoJson 地图   已封装好直接传citycode就行
      getMapJson() {
        getGeoJson(this.parentInfo[this.parentInfo.length - 1].code).then(data => {
          this.geoJson = data;
          this.getMapData();
        });
      },
      //获取地图数据   模拟数据   数据格式：[{name:'武汉市',value:96},{name:'长沙市',value:75}]
      // 必须要写成这种,而且name名字要和地图的geoJson名字一样，不然渲染不出来
      getMapData() {
        getMapChartData(this.parentInfo[this.parentInfo.length - 1].code).then(res => {
          const data = res.data;
          this.initEchart(data);
        });
      },
      initEchart(data) {
        this.myChart = echarts.init(this.$refs.seriesMap);
        //设置为 china 则显示南海诸岛 ，不需要可以去掉
        echarts.registerMap(this.parentInfo.length === 1 ? 'china' : 'map', this.geoJson); //注册
  
        const mapData = data.sort((a, b) => {
          return b.value - a.value;
        });
        let max = mapData[0].value;
        let min = mapData[mapData.length - 1].value;
        if (mapData.length === 1) {
          min = 0;
        }
  
        this.myChart.setOption(
          {
            tooltip: {},
            visualMap: {
              min: min,
              max: max,
              left: '3%',
              bottom: '1%',
              calculable: true,
              inRange: {
                color: ['#24CFF4', '#2E98CA', '#1E62AC']
              },
              textStyle: {
                color: '#24CFF4'
              }
            },
            series: [
              {
                name: '地图',
                type: 'map',
                map: this.parentInfo.length === 1 ? 'china' : 'map',
                roam: true, //是否可缩放
                zoom: 1.22, //缩放比例
                // left: '',
                // top: '15%', //可移动地图的位置
                data: mapData,
                label: {
                  normal: {
                    show: true,
                    color: 'rgb(249, 249, 249)', //省份标签字体颜色
                    formatter: p => {
                      switch (p.name) {
                        case '内蒙古自治区':
                          p.name = '内蒙古';
                          break;
                        case '西藏自治区':
                          p.name = '西藏';
                          break;
                        case '新疆维吾尔自治区':
                          p.name = '新疆';
                          break;
                        case '宁夏回族自治区':
                          p.name = '宁夏';
                          break;
                        case '广西壮族自治区':
                          p.name = '广西';
                          break;
                        case '香港特别行政区':
                          p.name = '香港';
                          break;
                        case '澳门特别行政区':
                          p.name = '澳门';
                          break;
                        default:
                          break;
                      }
                      return p.name;
                    }
                  },
                  emphasis: {
                    show: true,
                    color: '#f75a00'
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: '#24CFF4',
                    borderColor: '#53D9FF',
                    borderWidth: 1.3,
                    shadowBlur: 15,
                    shadowColor: 'rgb(58,115,192)',
                    shadowOffsetX: 7,
                    shadowOffsetY: 6
                  },
                  emphasis: {
                    areaColor: '#8dd7fc',
                    borderWidth: 1.6,
                    shadowBlur: 25
                  }
                }
              }
            ]
          },
          true
        );
  
        this.myChart.getZr().off('click');
        this.myChart.getZr().on('click', params => {
          if (params.target) {
            //  点的是地图
            const index = params.target.dataIndex;
            if (index && data[index]) {
              //如果当前是最后一级了，就直接return
              if (this.parentInfo[this.parentInfo.length - 1].code == data[index].adcode) {
                return;
              }
              //根据这个level判断是否下钻到县
              // if (data[index].level == 'city') {
              //   return
              // }
              this.parentInfo.push({
                cityName: data[index].name,
                code: data[index].adcode
              });
              this.getMapJson();
             this.$notify.info({
                title: '温馨提示',
                message: '点击地图空白处即可返回上一级'
             });
            }
          } else {
            //点的空白部分
            if (this.parentInfo.length === 1) {
              return;
            }
            this.parentInfo.pop();
            this.getMapJson();
          }
        });
      }
    }
  };
  </script>
  <style lang="scss" scoped>
  .seriesmap-box-card {
    color:rgb(191, 203, 217);
    background:#2d3a4b;
    width: 100%;
    height: 100%;
    font-size: 14px;
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
    .series-map {
      cursor:move;
    }
  }
  </style>
  
```
:::
::: tab resize.js lazy
```js
import { debounce } from "./debounce.js";
export default {
  data() {
    return {
      myChart: null,
      resizeHandler: null
    };
  },
  computed: {},
  mounted() {
    this.resizeHandler = debounce(() => {
      if (this.myChart) {
        this.myChart.resize();
      }
    }, 100);
    this.initResizeEvent();
  },

  methods: {
    //监听resize
    initResizeEvent() {
      window.addEventListener("resize", this.resizeHandler);
    },
    //移除resize
    destroyResizeEvent() {
      window.removeEventListener("resize", this.resizeHandler);
    }
  },

  beforeDestroy() {
    this.destroyResizeEvent();
    if (!this.myChart) {
      return;
    }
    this.myChart.dispose();
    this.myChart.off("click");
    this.myChart = null;
  },

  activated() {
    this.initResizeEvent();
    if (this.myChart) {
      this.myChart.resize();
    }
  },

  deactivated() {
    this.destroyResizeEvent();
  },
  watch: {}
};

```
:::
::: tab getGeoJson.js lazy
```js
/**
 * 获取geoJson数据  通过高德获取    递归获取区县geoJson
 * @param  {string} adcode  行政区code
 * @param  {string} childAdcode 区县级行政区code
 * @return {Array}
 */

import remoteLoad from "./remoteLoad.js";
const  {AMapCDN, AMapUiCDN} =  require("./cdn.js");

export function getGeoJson(adcode, childAdcode = "") {
    return new Promise((resolve, reject) => {
      if (window.AMap && window.AMapUI) {
        insideFun(adcode, childAdcode);
      } else {
        remoteLoad(AMapCDN).then(() => {
          if (window.AMap) {
            remoteLoad(AMapUiCDN).then(() => {
              if (window.AMapUI) {
                insideFun(adcode, childAdcode);
              } else {
                console.error("AMapUI获取失败");
              }
            });
          } else {
            console.error("AMap获取失败");
          }
        });
      }
      function insideFun(adcode, childAdcode) {
        // eslint-disable-next-line
        AMapUI.loadUI(["geo/DistrictExplorer"], DistrictExplorer => {
          var districtExplorer = new DistrictExplorer();
          districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
            if (error) {
              console.error(error);
              reject(error);
              return;
            }
            let Json = areaNode.getSubFeatures();
            if (Json.length === 0) {
              let parent = areaNode._data.geoData.parent.properties.acroutes;
              insideFun(parent[parent.length - 1], adcode);
              return;
            }
  
            if (childAdcode) {
              Json = Json.filter(item => {
                return item.properties.adcode == childAdcode;
              });
            }
            let mapJson = {
              features: Json
            };
            resolve(mapJson);
          });
        });
      }
    });
  }
```
:::
::: tab getMapChartData.js lazy
```js
import { getGeoJson } from "./getGeoJson.js";

/**  地图数据
 *  @param {string}  adcode  城市code
 *  @returns {Array}
 */
export function getMapChartData(adcode) {
  return new Promise((resolve, reject) => {
    getGeoJson(adcode)
      .then(res => {
        const data = res.features;
        const mapData = data.map(item => {
          return {
            name: item.properties.name,
            value: parseFloat((Math.random() * 3000).toFixed(2)),
            adcode: item.properties.adcode,
            level: item.properties.level
          };
        });
        resolve({
          code: 200,
          data: mapData
        });
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**  地图数据  散点
 *  @param {string}  adcode  城市code
 *  @returns {Array}
 */
export function getPointChartData(adcode) {
  return new Promise((resolve, reject) => {
    getGeoJson(adcode)
      .then(res => {
        const data = res.features;
        const mapData = data.map(item => {
          return {
            name: item.properties.name,
            value: [
              item.properties.center[0],
              item.properties.center[1],
              parseFloat((Math.random(0.1, 1) * 1000).toFixed(2))
            ],
            adcode: item.properties.adcode,
            level: item.properties.level
          };
        });
        resolve({
          code: 200,
          data: mapData
        });
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**  地图数据 热力图
 *  @param {string}  adcode  城市code
 *  @returns {Array}
 */
export function getHotMapChartData(adcode) {
  const data = [
    {
      name: "地点1",
      value: [114.412021, 30.481201, 1000]
    },
    {
      name: "地点2",
      value: [114.411266, 30.480921, 1000]
    },
    {
      name: "地点3",
      value: [114.411985, 30.481387, 1000]
    },
    {
      name: "地点4",
      value: [114.411159, 30.481917, 1000]
    },
    {
      name: "地点5",
      value: [114.412488, 30.481917, 1000]
    },
    {
      name: "地点6",
      value: [114.413638, 30.482726, 1000]
    },
    {
      name: "地点7",
      value: [114.412344, 30.48341, 1000]
    },
    {
      name: "地点8",
      value: [114.413494, 30.483939, parseInt(Math.random(0.6, 1) * 1000)]
    },
    {
      name: "地点9",
      value: [114.411877, 30.484469, parseInt(Math.random(0.6, 1) * 1000)]
    },
    {
      name: "地点10",
      value: [114.412308, 30.484531, parseInt(Math.random(0.6, 1) * 1000)]
    },
    {
      name: "地点11",
      value: [114.407853, 30.4845, parseInt(Math.random(0.6, 1) * 1000)]
    },
    {
      name: "地点12",
      value: [114.407242, 30.48285, parseInt(Math.random(0.1, 0.5) * 1000)]
    },
    {
      name: "地点13",
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)]
    },
    {
      name: "地点14",
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)]
    },
    {
      name: "地点15",
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)]
    },
    {
      name: "地点16",
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)]
    },
    {
      name: "地点17",
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)]
    },
    {
      name: "地点18",
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)]
    },
    {
      name: "地点19",
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)]
    },
    {
      name: "地点20",
      value: [114.447306, 30.560407, parseInt(Math.random(0.1, 0.9) * 1000)]
    },
    {
      name: "地点21",
      value: [114.296104, 30.600017, parseInt(Math.random(0.1, 0.9) * 1000)]
    },
    {
      name: "地点22",
      value: [114.29402, 30.597406, parseInt(Math.random(0.1, 0.9) * 1000)]
    },
    {
      name: "地点23",
      value: [114.300487, 30.595106, parseInt(Math.random(0.1, 0.9) * 1000)]
    },
    {
      name: "地点24",
      value: [114.295026, 30.592805, parseInt(Math.random(0.1, 0.9) * 1000)]
    },
    {
      name: "地点25",
      value: [114.291648, 30.597282, 1000]
    },
    {
      name: "地点26",
      value: [114.287408, 30.599147, 1000]
    },
    {
      name: "地点27",
      value: [114.282378, 30.598649, 1000]
    },
    {
      name: "地点28",
      value: [114.286689, 30.600514, 1000]
    }
  ];
  return new Promise((resolve, reject) => {
    resolve({
      code: 200,
      data: data
    });
  });
}

```
:::
::: tab remoteLoad.js lazy
```js
const remoteLoad = url => {
    return new Promise((resolve, reject) => {
      const existingScript = document.getElementById(url);
      //如果script不存在
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = url;
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
        script.onload = function() {
          setTimeout(() => {
            this.onerror = this.onload = null;
            resolve();
          }, 500);
        };
        script.onerror = function() {
          this.onerror = this.onload = null;
          reject("加载失败" + url);
        };
      } else {
        setTimeout(() => {
          resolve();
        }, 500);
      }
    });
  };
  
  export default remoteLoad;
```
:::
::: tab cdn.js lazy
```js
const AMapCDN =
  "https://webapi.amap.com/maps?v=1.3&key=73cddabc2173e0166a622f4483d3592a&plugin=AMap.DistrictSearch";
const AMapUiCDN = "https://webapi.amap.com/ui/1.0/main.js";
const VueCDN = "https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js";
const AxiosCDN = "https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js";
const VueRouterCDN =
  "https://cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.min.js";
const VuexCDN = "https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js";
const TinymceCDN =
  "https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js";
const html2canvasCDN =
  "https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js";

module.exports = {
  AMapCDN,
  AMapUiCDN,
  VueCDN,
  AxiosCDN,
  VueRouterCDN,
  VuexCDN,
  TinymceCDN,
  html2canvasCDN
};

```
:::
::::

<footer-FooterLink :isShareLink="false" :isDaShang="true" />