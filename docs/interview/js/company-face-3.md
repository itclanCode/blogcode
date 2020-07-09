---
title: Js 笔试真题-3
---

## 快速导航

<TOC />

## 第 1 题-解析 URL 提取 params 参数

## 目标

将常规的 URL 字符串的参数解析为对象的形式,如下示例所示

```js
let httpUrllStr = 'https://coder.itclan.cn?name=itclanCoder&study=css';
```

解析后结果如下

```js
{ "name": "itclanCoder", "study":  "css" }
```

<parseurl-parseUrl :url="`https://coder.itclan.cn?name=itclanCoder&study=css`" />

## 代码实现

- ### 方式 1-split 字符串分割

```js
let baseUrllStr = 'https://coder.itclan.cn?name=itclanCoder&study=css';
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
console.log(queryString(baseUrllStr)); // {name: "itclanCoder", study: "css"]}
```

- ### 方式 2-正则表达式

```js
let baseUrllStr = 'https://coder.itclan.cn?name=itclanCoder&study=css';
const queryURLParameter = (url) => {
  let regx = /([^&?=]+)=([^&?=]+)/g;
  let obj = {};

  url.replace(regx, (...args) => {
    obj[args[1]] = args[2];
  });

  return obj;
};

console.log(queryURLParameter(baseUrllStr)); // {name: "itclanCoder", study: "css"}
```

### 拓展

params 请求参数,可以多个,要是遇到多个怎么办?也就是如下所示

```
let baseUrllStr = 'https://coder.itclan.cn?name=itclanCoder&study=css&study=js&study=react';
```

经过转换,最终结果为

```
{name: "itclanCoder",study: ['css','js','react']}
```

具体代码如下所示

```js
let baseUrllStr =
  'https://coder.itclan.cn?name=itclanCoder&study=css&study=js&study=react';
// 参数转成对象
function queryString(str) {
  let params = str.split('?')[1];
  let param = params.split('&');
  let obj = {};
  for (let i = 0; i < param.length; i++) {
    let paramsA = param[i].split('=');
    let key = paramsA[0];
    let value = paramsA[1];

    if (obj[key]) {
      // 主要是在这里做了一下处理,判断值是不是一个数组
      obj[key] = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
      obj[key].push(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
console.log(queryString(baseUrllStr)); //{name: "itclanCoder",study: ["css", "js", "react"]}
```

::: tip 提示
主要在中间做了一下处理,判断是不是数组,这个有点虐心,虽然平常遇到的场景不是特别多,但是也是有这种情况的,有次面试就被折腾得不行的,回来脑补了一下的
:::

<parseurl-parseUrl :url="`https://coder.itclan.cn?name=itclanCoder&study=css&study=js&study=react`" />
