---
title: css 实现圆环形布局-并沿着圆环缓慢滚动
autoGroup-2: 常见实例技巧
---

## 快速导航

<TOC />

## 前言

css3 动画的实现,考察,这是一道面试题

基于以下 html 模板实现右图环形布局，并实现沿着圆
环的缓慢滚动的动画效果

::: details 点击即可查看

```html
<div id="menu">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
  </ul>
</div>
```

:::

## 实现效果

<exampleskill-RollSlowy />

## 具体代码

::: details 点击即可查看代码
html 代码

```html
<div id="menu">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
</div>
```

css 代码

```css
* {
  padding: 0;
  margin: 0;
}

#menu {
  width: 400px;
  height: 400px;
  margin: 30px auto;
}

ul,
li {
  list-style-type: none;
}

ul {
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
}

li {
  width: 40px;
  height: 40px;
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  left: 50%;
}

li:nth-of-type(1),
li:nth-of-type(2),
li:nth-of-type(3),
li:nth-of-type(4),
li:nth-of-type(5),
li:nth-of-type(6),
li:nth-of-type(7),
li:nth-of-type(8) {
  transform-origin: 20px 220px;
  margin-left: 120px;
}

li:nth-of-type(1) {
  transform: rotate(0deg);
  animation: rotate0 10s linear infinite;
  -webkit-animation: rotate0 10s linear infinite;
}

li:nth-of-type(2) {
  transform: rotate(45deg);
  animation: rotate45 10s linear infinite;
  -webkit-animation: rotate45 10s linear infinite;
}

li:nth-of-type(3) {
  transform: rotate(90deg);
  animation: rotate90 10s linear infinite;
  -webkit-animation: rotate90 10s linear infinite;
}

li:nth-of-type(4) {
  transform: rotate(135deg);
  animation: rotate135 10s linear infinite;
  -webkit-animation: rotate135 10s linear infinite;
}

li:nth-of-type(5) {
  transform: rotate(180deg);
  animation: rotate180 10s linear infinite;
  -webkit-animation: rotate180 10s linear infinite;
}

li:nth-of-type(6) {
  transform: rotate(225deg);
  animation: rotate225 10s linear infinite;
  -webkit-animation: rotate225 10s linear infinite;
}

li:nth-of-type(7) {
  transform: rotate(270deg);
  animation: rotate270 10s linear infinite;
  -webkit-animation: rotate270 10s linear infinite;
}

li:nth-of-type(8) {
  transform: rotate(315deg);
  animation: rotat315 10s linear infinite;
  -webkit-animation: rotat315 10s linear infinite;
}

@keyframes rotate0 {
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg) skew(0deg) scale(1);
  }

  100% {
    transform: rotate(360deg) skew(0deg) scale(1);
    -ms-transform: rotate(360deg) skew(0deg) scale(1); /* 兼容 IE 9 */
    -moz-transform: rotate(360deg) skew(0deg) scale(1); /* 兼容  Firefox */
    -webkit-transform: rotate(360deg) skew(0deg) scale(1); /* 兼容 Chrome */
    -o-transform: rotate(360deg) skew(0deg) scale(1); /* 兼容 opera */
  }
}

@keyframes rotate45 {
  0% {
    transform: rotate(45deg) skew(0deg) scale(1);
    -ms-transform: rotate(45deg) skew(0deg) scale(1);
    -moz-transform: rotate(45deg) skew(0deg) scale(1);
    -webkit-transform: rotate(45deg) skew(0deg) scale(1);
    -o-transform: rotate(45deg) skew(0deg) scale(1);
  }

  100% {
    transform: rotate(405deg) skew(0deg) scale(1);
    -ms-transform: rotate(405deg) skew(0deg) scale(1);
    -moz-transform: rotate(405deg) skew(0deg) scale(1);
    -webkit-transform: rotate(405deg) skew(0deg) scale(1);
    -o-transform: rotate(405deg) skew(0deg) scale(1);
  }
}

@keyframes rotate90 {
  0% {
    transform: rotate(90deg) skew(0deg) scale(1);
    -ms-transform: rotate(90deg) skew(0deg) scale(1);
    -moz-transform: rotate(90deg) skew(0deg) scale(1);
    -webkit-transform: rotate(90deg) skew(0deg) scale(1);
    -o-transform: rotate(90deg) skew(0deg) scale(1);
  }

  100% {
    transform: rotate(450deg) skew(0deg) scale(1);
    -ms-transform: rotate(450deg) skew(0deg) scale(1);
    -moz-transform: rotate(450deg) skew(0deg) scale(1);
    -webkit-transform: rotate(450deg) skew(0deg) scale(1);
    -o-transform: rotate(450deg) skew(0deg) scale(1);
  }
}

@keyframes rotate135 {
  0% {
    transform: rotate(135deg) skew(0deg) scale(1);
    -ms-transform: rotate(135deg) skew(0deg) scale(1);
    -moz-transform: rotate(135deg) skew(0deg) scale(1);
    -webkit-transform: rotate(135deg) skew(0deg) scale(1);
    -o-transform: rotate(135deg) skew(0deg) scale(1);
  }

  100% {
    transform: rotate(495deg) skew(0deg) scale(1);
    -ms-transform: rotate(495deg) skew(0deg) scale(1);
    -moz-transform: rotate(495deg) skew(0deg) scale(1);
    -webkit-transform: rotate(495deg) skew(0deg) scale(1);
    -o-transform: rotate(495deg) skew(0deg) scale(1);
  }
}

@keyframes rotate180 {
  0% {
    transform: rotate(180deg) skew(0deg) scale(1);
    -ms-transform: rotate(180deg) skew(0deg) scale(1);
    -moz-transform: rotate(180deg) skew(0deg) scale(1);
    -webkit-transform: rotate(180deg) skew(0deg) scale(1);
    -o-transform: rotate(180deg) skew(0deg) scale(1);
  }

  100% {
    transform: rotate(540deg) skew(0deg) scale(1);
    -ms-transform: rotate(540deg) skew(0deg) scale(1);
    -moz-transform: rotate(540deg) skew(0deg) scale(1);
    -webkit-transform: rotate(540deg) skew(0deg) scale(1);
    -o-transform: rotate(540deg) skew(0deg) scale(1);
  }
}

@keyframes rotate225 {
  0% {
    transform: rotate(225deg) skew(0deg) scale(1);
    -ms-transform: rotate(225deg) skew(0deg) scale(1);
    -moz-transform: rotate(225deg) skew(0deg) scale(1);
    -webkit-transform: rotate(225deg) skew(0deg) scale(1);
    -o-transform: rotate(225deg) skew(0deg) scale(1);
  }

  100% {
    transform: rotate(585deg) skew(0deg) scale(1);
    -ms-transform: rotate(585deg) skew(0deg) scale(1);
    -moz-transform: rotate(585deg) skew(0deg) scale(1);
    -webkit-transform: rotate(585deg) skew(0deg) scale(1);
    -o-transform: rotate(585deg) skew(0deg) scale(1);
  }
}

@keyframes rotate270 {
  0% {
    transform: rotate(270deg) skew(0deg) scale(1);
    -ms-transform: rotate(270deg) skew(0deg) scale(1);
    -moz-transform: rotate(270deg) skew(0deg) scale(1);
    -webkit-transform: rotate(270deg) skew(0deg) scale(1);
    -o-transform: rotate(270deg) skew(0deg) scale(1);
  }

  100% {
    transform: rotate(630deg) skew(0deg) scale(1);
    -ms-transform: rotate(630deg) skew(0deg) scale(1);
    -moz-transform: rotate(630deg) skew(0deg) scale(1);
    -webkit-transform: rotate(630deg) skew(0deg) scale(1);
    -o-transform: rotate(630deg) skew(0deg) scale(1);
  }
}

@keyframes rotat315 {
  0% {
    transform: rotate(315deg) skew(0deg) scale(1);
    -ms-transform: rotate(315deg) skew(0deg) scale(1);
    -moz-transform: rotate(315deg) skew(0deg) scale(1);
    -webkit-transform: rotate(315deg) skew(0deg) scale(1);
    -o-transform: rotate(315deg) skew(0deg) scale(1);
  }

  100% {
    transform: rotate(675deg) skew(0deg) scale(1);
    -ms-transform: rotate(675deg) skew(0deg) scale(1);
    -moz-transform: rotate(675deg) skew(0deg) scale(1);
    -webkit-transform: rotate(675deg) skew(0deg) scale(1);
    -o-transform: rotate(675deg) skew(0deg) scale(1);
  }
}
```

:::

## 具体分析

每个圆,大小一致,只是旋转的角度不一样,并且旋转元素的基点位置一样,`transform-origin: x y z`,`2D`转换元素能够改变元素 `x` 和 `y` 轴,距离水平方和垂直方向上

结合`@keyframes`动画帧,`animation`,`transform(变换旋转)`,`rotate(旋转角度)`,`skew()沿着x轴与y轴的倾斜角度`

`scale():定义 2D 缩放转换`,`1`表示不放大也不缩小
