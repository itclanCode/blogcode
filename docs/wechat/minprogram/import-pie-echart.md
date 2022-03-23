---
title: 小程序-引入echart图表画圆饼图
autoGroup-1: 小程序实用案例
---

## 小程序-引入 echart 图表画圆饼图

## 快速导航

<TOC />

## 前言

在 web 中引入`echart`可视化图表是很常见的操作,那在小程序当中又如何引入使用呢

## 示例效果

<charts-pie />

## 下载使用 ec-canvas

在`github`上下载[echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin)代码,并将`ec-canvas`文件夹,复制拷贝到根目录路径下,与`pages`目录同级,或者放置到`components`自定义组件文件夹中

在引用`ec-canvas`时,相对路径引入正确即可

如下所示:`pages/piecharts`

:::: tabs type:border-card
::: tab 配置 json lazy

```js
{
  "usingComponents": {
    "ec-canvas": "../../components/ec-canvas/ec-canvas"
  }
}
```

:::

::: tab wxml lazy

```html
<view>
  <view class="pie-charts">
    <ec-canvas
      id="mychart-dom-bar"
      canvas-id="mychart-bar"
      ec="{{ ec }}"
    ></ec-canvas>
  </view>
</view>
```

:::
::: tab wxss lazy

```css
.pie-charts {
  width: 100%;
  height: 500rpx; // 一定要给ec-canvas最外层一个高度,否则canvas就不会显示出来
  margin: 20px 0 0 10px;
}
```

:::
::: tab js lazy

```js
// pages/piecharts/piecharts.js
// 引入echarts,一定要引入ec-canvas中的echarts.js文件
import * as echarts from '../../components/ec-canvas/echarts';
// 图表选项
let option = {
  title: {
    // 标题
    text: '圆饼图示例',
    x: 'center',
  },

  tooltip: {
    // tip提示
    trigger: 'item',
    formatter: '{a} \n{b} : {c} ({d}%)',
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },

      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['前端', '后端', '小程序', '面试题解', '读书'],
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        // 展示的数据,一般情况下,只要动态替换到这里的数据即可,注意小程序中换行用\n而非br
        { value: 335, name: '前端 \n 23%' },
        { value: 310, name: '后端' },
        { value: 234, name: '小程序' },
        { value: 135, name: '面试题解' },
        { value: 1548, name: '读书' },
      ],
      itemStyle: {
        // 阴影
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};

let chart;
// 图表初始化
function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr, // 像素
  });
  canvas.setChart(chart);
  chart.setOption(option);
  return chart;
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
});
```

:::
::: tab 注意事项 lazy

1. 在小程序中的引用图表的页面中的配置 json 文件中要引入`ec-canvas`组件,注意路径的引用正确
2. 在逻辑页面中,使用`ec-charts`前需要手动导入引入`echarts`,即`import * as echarts from '../../xxxx/ec-canvas/echarts';`
3. 在页面的`wxss`中需要给`ec-canvas`最外层一个高度,`ec-canvas`默认的高度是`0`
4. 具体各个参数选项配置,可参考 echart 官方文档的[echarts 官方文档](https://echarts.apache.org/zh/tutorial.html#%E5%9C%A8%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

:::

::::

## 如何修改 ec-canvas 默认数据

知道了怎么把数据渲染到页面上,但是又如何修改默认的初始化数据呢,其实只要按照原有的数据结构,把新的数据将原来的给覆盖掉就可以了的

:::: tabs type:border-card
::: tab 更新与恢复图表数据 lazy

```js
// 假设如下是要更新的数据,一般是后台返回的
// 后台返回的数据字段可能跟图表的字段可能不一致,但是结构是必须要相同的
const pieObj = {
  updatelegends: ['吃饭', '约会', '购物', '旅游', '请客'],
  updateExpendData: [
    { money: 1500, type: '吃饭' },
    { money: 2000, type: '约会' },
    { money: 300, type: '购物' },
    { money: 400, type: '旅游' },
    { money: 600, type: '请客' },
  ],

  resetlegend: ['前端', '后端', '小程序', '面试题解', '读书'],
  resetExpendData: [
    { value: 335, name: '前端' },
    { value: 310, name: '后端' },
    { value: 234, name: '小程序' },
    { value: 135, name: '面试题解' },
    { value: 1548, name: '读书' },
  ],
};

module.exports = pieObj; // 导出数据
```

:::
::: tab wxml 更新数据 lazy

```html
<view class="change-box">
  <view class="update-btn btn" bindtap="onUpdate">更新数据</view>
  <view class="reset-btn btn" bindtap="onResetDate">恢复数据</view>
</view>
```

:::
::: tab 样式代码 lazy

```css
/* pages/piecharts/piecharts.wxss */
.pie-charts {
  width: 100%;
  height: 500rpx; // 图表的外层需要设置一个高度,否则echarts不会显示,默认高度是0
  margin: 20px 0 0 10px;
}

.change-box {
  display: flex;
  justify-content: center;
}

.btn {
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  color: #fff;
}

.update-btn {
  background: #f56c6c;
  margin-right: 10px;
}

.reset-btn {
  background: #409eff;
}
```

:::
::: tab 逻辑代码 lazy

```js
// pages/piecharts/piecharts.js
// 引入echarts
import * as echarts from '../../components/ec-canvas/echarts';

const pieData = require('./date'); // 引入数据

// 选项
let option = {
  // 初始化数据
  title: {
    text: '圆饼图示例',
    x: 'center',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['前端', '后端', '小程序', '面试题解', '读书'],
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} \n{b} : {c} ({d}%)',
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },

      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['前端', '后端', '小程序', '面试题解', '读书'],
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 335, name: '前端 \n 23%' },
        { value: 310, name: '后端' },
        { value: 234, name: '小程序' },
        { value: 135, name: '面试题解' },
        { value: 1548, name: '读书' },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};

let chart;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr, // 像素
  });
  canvas.setChart(chart);
  chart.setOption(option);
  return chart;
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  // 更新数据
  onUpdate() {
    console.log(pieData);
    const expendData = pieData.updateExpendData;
    const legend = pieData.updatelegends;
    const newExpends = expendData.map((item) => {
      return {
        name: item.type, // 因为数据结构字段不一样,所以要进行赋值,修改
        value: item.money, // 如果后端返回的数据字段与图表接口字段一样,那可忽略
      };
    });
    option.legend.data = legend;
    option.series[0].data = newExpends;

    if (chart) {
      chart.setOption(option); // 得重新设置Option才会生效
    }
  },

  // 恢复数据
  onResetDate() {
    const expendData = pieData.resetExpendData;
    const legend = pieData.resetlegend;
    option.legend.data = legend; // 因为接口字段与后台返回字段相同,直接赋值即可
    option.series[0].data = expendData;

    if (chart) {
      chart.setOption(option); // 得重新设置Option才会生效
    }
  },
});
```

:::
::: tab 注意
唯一需要注意的是,不要更改图表渲染的内部数据结构,当后台返回的接口中的数据结构字段与图表不一致时

比如:上面的`legend`与`series`下的`data`中的`name`与`value`字段,当后端返回的子段不一样时,只需要在前台重新处理一下即可

上面的更新数据中后台返回字段时`money`与`type`,在更新数据时,需要重新赋值

最后需要`setOption`重新设置数据,否则图表数据是不会更新的,这个与`vue-echarts`与单独使用`echarts`有点不一样
:::
::::

### 实例效果

<div align="center">
<img class="medium-zoom lazy" width="250" height="400" loading="lazy"  src ="../images/import-pie-chart/piechart.gif" alt="效果展示" />
</div>

## 结语

主要介绍了在小程序中怎么引入图表`echarts`,是使用`ec-canvas`这个组件,在使用`ec-canvas`时,需要注意:

引入`ec-canvas`组件的路径,同时,还需要在使用的页面当中,引入组件的`echart.js`文件

图表的基本配置,可以参考`echarts`的官方文档,更新图表的数据时,需要注意:保持结构一致性,不要修改图表内部数据结构的字段

当后端返回的数据字段与图表字段不一致时,在你拿到数据接口的数据后,重新赋值即可.最后不要忘记重新`setOption`设置数据

图表的相关内容有很多,如果你有关图表问题,欢迎一起学习,留言,探讨..

## 相关文档

- [Apache ECharts-微信小程序版本](https://github.com/ecomfe/echarts-for-weixin)
- [echarts 官方文档](https://echarts.apache.org/examples/zh/index.html)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />