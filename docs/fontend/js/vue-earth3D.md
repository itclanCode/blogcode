---
title: Vue中中如何实现地球3D自动旋转
---

## Vue中中如何实现地球3D自动旋转

## 快速导航

<TOC />

<business-earth3D />


## 具体实现

### 安装echarts

在终端下安装`echarts`
```js
npm install -D echarts
```
### 安装echarts-gl

在终端下安装`echarts-gl`
```js
npm install -D echarts-gl
```
### earth3D组件

:::: tabs type:border-card
::: tab earth3D.vue lazy
```html
<template>
    <div class="globe3d-earth-container" >
         <div class="globe3d-earth"  ref="Globe3d"></div>
    </div>
</template>

<script>
    import Vue from "vue";
    import echarts from "echarts";
    import "echarts-gl";
    import option from './Globe3d.js'
    import { debounce } from "./debounce.js";
    Vue.prototype.echarts = echarts;
    export default {
        name: "earth3D",
        data() {
            return {
                myChart: null,
                resizeHandler: null
            }
        },
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            this.myChart = echarts.init(this.$refs.Globe3d);
            // 使用刚指定的配置项和数据显示图表。可视化3D
            this.myChart.setOption(option);
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
        }
    }       
</script>

<style lang="scss" scoped>
.globe3d-earth-container {
    width: 100%;
    height: 100%;
    background:#2d3a4b;
    .globe3d-earth {
        width: 100%;
        height: 702px;
    }
}
</style>
```
:::
::: tab debounce.js lazy
```js
export function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result;
  
    const later = function() {
      // 据上一次触发时间间隔
      const last = +new Date() - timestamp;
  
      // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };
  
    return function(...args) {
      context = this;
      timestamp = +new Date();
      const callNow = immediate && !timeout;
      // 如果延时不存在，重新设定延时
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }
  
      return result;
    };
  }
```
:::
::: tab Globe3d.js lazy
```js
import baseTextureImg from "./worldbathy.jpg";
import heightTextImg from "./worldbathy.jpg";
import environmentImg from "./starfield.jpg";
// import textureImg from "@/assets/images/pisa.jpg";

export default {
  backgroundColor: "#2d3a4b",
  globe: {
    baseTexture: baseTextureImg,
    heightTexture: heightTextImg,
    displacementScale: 0.04,
    shading: "realistic",
    environment: environmentImg,
    realisticMaterial: {
      roughness: 0.9
    },
    postEffect: {
      enable: true
    },
    light: {
      main: {
        intensity: 5,
        shadow: true
      },
      ambientCubemap: {
        // texture: textureImg,
        diffuseIntensity: 0.2
      }
    }
  }
};

```
:::
::::

<footer-FooterLink :isShareLink="false" :isDaShang="true" />

