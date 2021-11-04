---
title: 浏览器对象BOM相关
autoGroup-4: JS 实用案例技巧
---

## 浏览器对象BOM相关

## 快速导航

<TOC />

## 返回当前网页地址

```javascript
function currentURL() {
  return window.location.href
}
```

## 获取当前页面滚动条位置

```javascript
function getScrollPosition(el = window) {
  return {
    x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
    y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
  }
}
```

## 获取url中的参数

:::: tabs type:border-card
::: tab 方法1 lazy
```javascript
function getURLParameters(url) {
  return url.match(/([^?=&]+)(=([^&]*))/g).reduce(
    (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
  )
}
```
:::
::: tab 方法2 lazy
```javascript
let baseUrlStr = 'https://coder.itclan.cn?name=itclanCoder&study=css';
// 参数转成对象
function queryString(str) {
  let params = str.split('?')[1]; //截取?号后的字符串即name=itclanCoder&study=css
  let param = params.split('&'); // 通过&符号进行分割即["name=itclanCoder", "study=css"]
  let obj = {}; // 用一个对象存储目标值
  for (let i = 0; i < param.length; i++) {
    // 循环遍历截取出来的param数组
    let paramsA = param[i].split('='); // 通过split,=继续对数组params每一项进行分割,生成数组["name", "itclanCoder"]
    let key = paramsA[0]; // 取数组项["name", "itclanCoder"]中第0位,即name
    let value = paramsA[1]; // 取数组项["name", "itclanCoder"]中第1位,即itclanCoder
    obj[key] = value;
  }
  return obj;
}
console.log(queryString(baseUrlStr)); // {name: "itclanCoder", study: "css"]}
```
:::

::: tab 方法3 lazy
```javascript
let baseUrlStr = 'https://coder.itclan.cn?name=itclanCoder&study=css';
const queryURLParameter = (url) => {
  let regx = /([^&?=]+)=([^&?=]+)/g;
  let obj = {};

  url.replace(regx, (...args) => {
    if (obj[args[1]]) {
      obj[args[1]] = Array.isArray(obj[args[1]])
        ? obj[args[1]]
        : [obj[args[1]]];
      obj[args[1]].push(args[2]);
    } else {
      obj[args[1]] = args[2];
    }
  });

  return obj;
};

console.log(queryURLParameter(baseUrlStr)); // {name: "itclanCoder", study: "css"}
```
:::
::::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />

