---
title: 设备类型判断-移动端/PC端
autoGroup-1: 移动端
---

## 设备类型判断-移动端/PC 端

## 快速导航

<TOC />

## 移动端/pc 端判断

**应用场景**:根据屏幕的机型尺寸,页面响应式变化,布局,以及控制某些节点操作,在`JS`中进行控制
::: details 点击即可查看核心代码

```js
const isMobile = function() {
  let mobile = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|IEMobile|Opera Mini|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return mobile != null;
};

const isPhone = isMobile();
if (isPhone) {
  // 手机端
} else {
  // PC
}
```

:::
当然你也可以这样
::: details 点击即可查看核心代码

```js
const isMobile = /(phone|pad|pod|iPhone|iPod|ios|IEMobile|Opera Mini|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
  navigator.userAgent
)
  ? true
  : false; // true代表是移动端,false代表pc端
if (isMobile) {
  // 手机端
} else {
  // PC端
}
```

:::

## 方式3-检查设备类型

```js
function detectDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}
```
