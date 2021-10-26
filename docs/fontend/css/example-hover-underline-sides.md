---
title: css 实现鼠标经过元素下划线由左向右或由中间向两侧展开
autoGroup-2: 常见实例技巧
---

## 快速导航

<TOC />

## css 实现鼠标经过元素下划线由中间向两侧展开

<hover-hoverBorderSide />

::: details 点击即可查看代码
html 结构代码

```html
<div class="underline">下划线由中间向两侧展开</div>
```

css 代码

```css{8,12,13,14,15,16,17,18,19,20,23,24,25,26,27}
.underline {
  width: 200px;
  height: 50px;
  background: #eee;
  margin: 10px auto;
  text-align: center;
  line-height: 50px;
  position: relative; // 相对定位
  cursor: pointer;
}

.underline::after {
  // 伪元素
  content: '';
  width: 0; // 宽度为0
  height: 2px; // 高度为2px
  background: #42b983;
  position: absolute; // 绝对定位
  top: 100%; // 距离顶部top1-100%
  left: 50%; // 距离左边的距离50%
  transition: all 0.8s; // 平缓过渡
}

.underline:hover:after {
  // 添加伪类,鼠标经过underline元素时,after的宽度发生改变
  left: 0%;
  width: 100%; // 改变的宽度100%
  transition: all 0.8s;
}
```

:::

## css 实现鼠标经过元素下划线由左向右展开

<hover-hoverBorderLeft />

::: details 点击即可查看代码

```css{8,12,14,15,16,18,19,20,21,24,26,27,28}
.underline {
  width: 200px;
  height: 50px;
  background: #eee;
  margin: 10px auto;
  text-align: center;
  line-height: 50px;
  position: relative; // 相对定位
  cursor: pointer;
}

.underline::after {
  // 伪元素
  content: '';
  width: 0;
  height: 2px;
  background: #42b983;
  position: absolute;
  top: 100%;
  left: 0%; //距离左边0px,由左向右展出
  transition: all 0.8s;
}

.underline:hover:after {
  // 添加伪类,鼠标经过underline元素时,after的宽度发生改变
  left: 0%;
  width: 100%;
  transition: all 0.8s;
}
```

:::

## css 实现鼠标经过元素下垂直方向由中间向两侧展开

<hover-hoverBorderVer />

::: details 点击即可查看代码

```css{8,12,13,14,15,16,17,18,19,20,21,23,24,25,26}
.underline {
  width: 210px;
  height: 50px;
  background: #eee;
  margin: 10px auto;
  text-align: center;
  line-height: 50px;
  position: relative;
  cursor: pointer;
}

.underline::after {
  content: '';
  width: 2px; // 宽度为2px
  height: 0; // 高度为0
  background: #42b983;
  position: absolute;
  top: 50%; // 起始位置距离顶部是50%
  left: 0%; // 左边的距离为0px
  transition: all 0.8s;
}

.underline:hover:after {
  // 伪元素 :after 还可以配合伪类使用
  top: 0%; // 鼠标滑过后,距离定位的位置是0%
  height: 100%; // 高度变为100%,这里填写父元素的具体高度也是可以的
  transition: all 0.8s; // 过度
}
```

:::

## 分析

根据示例效果,下划线动态变化是**宽度**,或者**高度**,给鼠标要经过的元素添加一个伪元素,然后在给当前元素添加一个伪类`hover`效果,改变`width`,`height`即可实现

只要能实现其中一个,其他的类似
::: tip 注意
给经过的元素添加伪元素时,设置绝对定位,在初始位置时,需要设置`top`,`left`的值,在鼠标经过元素`hover`时,改变`top`的值可以决定滑过的方向
:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
