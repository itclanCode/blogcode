---
title: css实现loading加载
autoGroup-2: 常见实例技巧
---

## css 实现 loading 加载

## 快速导航

<TOC />

## 正方形加载 Loading1

<loading-Loading1 />

html 代码

::: details 点击即可查看

```html
<div class="load-container">
  <div class="boxLoading"></div>
</div>
```

:::

css 代码
::: details 点击即可查看

```css
.load-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  .boxLoading {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:before {
      content: '';
      width: 50px;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 59px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
    &:after {
      content: '';
      width: 50px;
      height: 50px;
      background: #00adb5;
      animation: animate 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
  }
}
@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
```

:::

## 圆形加载 loading2

<loading-Loading2 />

html 代码
::: details 点击即可查看代码

```html
<div class="load-container">
  <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
    <circle id="loading-inner" cx="75" cy="75" r="60" />
  </svg>
</div>
```

:::

css 代码
::: details 点击即可查看代码

```css
.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 150px;
}
#load {
  width: 75px;
  animation: loading 3s linear infinite;
  #loading-inner {
    stroke: {
      dashoffset: 0;
      dasharray: 300;
      width: 10;
      miterlimit: 10;
      linecap: round;
    }
    animation: loading-circle 2s linear infinite;
    stroke: #00adb5;
    fill: transparent;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -600;
  }
}
```

:::

## 圆形加载 Loading3

<loading-Loading3 />

html 代码
::: details 点击即可查看

```
<div class="load"></div>
```

:::
css 代码
::: details 点击即可查看

```css
.load {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 169, 178, 0.2);
  &::before {
    content: '';
    width: 70px;
    height: 70px;
    background-color: #00adb5;
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 1;
    transform-origin: left bottom;
    animation: rotate 1.5s infinite linear;
  }
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

:::

## 方形加载 Loading4

<loading-Loading4 />

html 代码
::: details 点击即可查看代码

```html
<div class="load-container">
  <div class="container">
    <div class="boxLoading boxLoading1"></div>
    <div class="boxLoading boxLoading2"></div>
    <div class="boxLoading boxLoading3"></div>
    <div class="boxLoading boxLoading4"></div>
    <div class="boxLoading boxLoading5"></div>
  </div>
</div>
```

:::
css 代码
::: details 点击即可查看代码

```css
.load-container {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 10px;
    .boxLoading {
      background-color: #00adb5;
      height: 100%;
      width: 6px;
      display: inline-block;
      -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
      animation: stretchdelay 1.2s infinite ease-in-out;
    }
    .boxLoading2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    .boxLoading3 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }
    .boxLoading4 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    .boxLoading5 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
  }
}
@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}
@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
```

:::

## 圆形加载 loading5

<loading-Loading6 />
html代码
::: details 点击即可查看代码

```html
<div class="load-container">
  <div class="load load1"></div>
  <div class="load load2"></div>
  <div class="load"></div>
</div>
```

:::
css 代码
::: details 点击即可查看代码

```css
.load-container {
  margin: 50px auto;
  width: 150px;
  text-align: center;
  .load {
    width: 20px;
    height: 20px;
    background-color: #00adb5;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .load1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .load2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
}
@-webkit-keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
```

:::

## 圆形加载 Loading6

<loading-loading7 />

html 代码
::: details 点击即可查看

```html
<div class="load-container">
  <div class="container container1">
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
  </div>
  <div class="container container2">
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
  </div>
  <div class="container container3">
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
  </div>
</div>
```

:::

css 代码

::: details 点击即可查看代码

```css
.load-container {
  margin: 50px auto;
  width: 48px;
  height: 48px;
  position: relative;
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    .circle {
      width: 12px;
      height: 12px;
      background-color: #00adb5;

      border-radius: 100%;
      position: absolute;
      -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
      animation: bouncedelay 1.2s infinite ease-in-out;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .circle1 {
      top: 0;
      left: 0;
    }
    .circle2 {
      top: 0;
      right: 0;
    }
    .circle3 {
      right: 0;
      bottom: 0;
    }
    .circle4 {
      left: 0;
      bottom: 0;
    }
  }
  .container1 {
    .circle2 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    .circle3 {
      -webkit-animation-delay: -0.6s;
      animation-delay: -0.6s;
    }
    .circle4 {
      -webkit-animation-delay: -0.3s;
      animation-delay: -0.3s;
    }
  }
  .container2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    .circle1 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    .circle2 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
    .circle3 {
      -webkit-animation-delay: -0.5s;
      animation-delay: -0.5s;
    }
    .circle4 {
      -webkit-animation-delay: -0.2s;
      animation-delay: -0.2s;
    }
  }
  .container3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
    .circle1 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }
    .circle2 {
      -webkit-animation-delay: -0.7s;
      animation-delay: -0.7s;
    }
    .circle3 {
      -webkit-animation-delay: -0.4s;
      animation-delay: -0.4s;
    }
    .circle4 {
      -webkit-animation-delay: -0.1s;
      animation-delay: -0.1s;
    }
  }
}
@-webkit-keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
```
