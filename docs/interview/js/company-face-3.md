---
title: Js 笔试真题-3
sidebarDepth: 3
collapsable: true
---

## 快速导航

<TOC />

## 第 1 题-解析 URL 提取 params 参数

## 目标

将常规的 URL 字符串的参数解析为对象的形式,如下示例所示

```js
let httpUrlStr = 'https://coder.itclan.cn?name=itclanCoder&study=css';
```

解析后结果如下

```js
{ "name": "itclanCoder", "study":  "css" }
```

<parseurl-parseUrl :url="`https://coder.itclan.cn?name=itclanCoder&study=css`" />

## 代码实现

- ### 方式 1-split 字符串分割

::: details 点击即可查看使用 split 方式实现

```js
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

- ### 方式 2-正则表达式

::: details 点击即可查看正则表达式方式实现

```js
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

### 拓展

`params`请求参数,可以多个,也就是如下所示,那怎么办?

```
let baseUrlStr = 'https://coder.itclan.cn?name=itclanCoder&study=css&study=js&study=react';
```

经过转换,最终结果为

```
{name: "itclanCoder",study: ['css','js','react']}
```

具体代码如下所示

::: details 点击即可查看

```js
let baseUrlStr =
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
console.log(queryString(baseUrlStr)); //{name: "itclanCoder",study: ["css", "js", "react"]}
```

:::

::: tip 提示
主要在中间做了一下处理,判断是不是数组,这个有点虐心,虽然平常遇到的场景不是特别多,但是也是有这种情况的,有次面试就被折腾得不行的,回来脑补了一下的
:::

<parseurl-parseUrl :url="`https://coder.itclan.cn?name=itclanCoder&study=css&study=js&study=react`" />

## 第 2 题-var let const 的区别

共同点:定义声明变量
不同点:

- var 声明的变量可以重复声明,没有块的概念,可以跨块访问,不能跨函数访问,当出现相同的变量名时,后者会覆盖前者,`let`,`const`有块级作用域,并且不可重复声明(不存在变量提升，所以用 let 定义的变量一定要在声明后再使用，否则会报错)
- let 定义的变量,只能在块作用域中访问(也就是在花括号内访问),不能跨函数访问
- const 用来定义常量,使用时得先初始化,然后在赋值,只能在块作用域里访问,而且不能修改
- let 和 var 的不同是，在变量声明之前就访问变量的话，会直接提示 `ReferenceError`，而不像 var 那样使用默认值 `undefined`

## 第 3 题-什么是暂时性死区

如果区块(花括号)中存在`let`命令,这个区块对这些命令声明的变量,从一开始就形成了封闭作用域,凡是在声明之前就使用这些变量,就会报错,所以在代码块内,使用`let`命令声明变量之前,该变量都是不可用的

这被称为暂时性死区

```js
let sName = 'itclan';
if (true) {
  console.log(sName); // Uncaught ReferenceError:sName is not defined
  let sName = 'itclan';
}
```

当前作用域顶部到该变量声明位置中间的部分,都是该`let`变量的死区,在死区中,禁止访问该变量

所谓暂时性死区,就是具有块级作用域,变量需要先声明,然后在使用,否则的话,就会报错,即使用`typeof`检测一个变量,会报错`ReferenceError`

```js
typeof sName; // ReferenceError
let name;
```

只要块级作用域内存在 let 命令,它所声明的变量就绑定了这个区域,不再受外部的影响,在代码块中,使用`let`命令声明变量之前,该变量都是不可用的

## 第 4 题-JavaScript 中的 window.onload 事件和 jQuery 的 ready 函数有何区别

**执行时机:** `window.onload`必须等待网页中所有内容加载完毕后(包括图片)才能执行,而`$(document).ready()`是网页中所有`DOM`结构绘制完毕后执行,可能`DOM`元素关联的东西并没有加载完,在`DOM`完全就绪时就可以被调用,此时,网页的所有元素对`JQuery`而言都是可以访问的,但是这并不意味着这些元素关联的文件都已经下载完毕
**编写个数:** `window.onload`不能同时编写多个,而`$(document).ready()`能同时编写多个

```js
window.onload = function() {
  alert('test1`');
};

window.onload = function() {
  alert('test2');
};
// 结果只会输出test2
```

而`$(document).ready()`能同时编写多个

```js
$(document).ready(function() {
  alert('Hello world');
});

$(document).ready(function() {
  alert('hello itclanCoder');
});
// 结果会两次输出
// 可以简写成
$(function() {
  //..
});
```

## 第 5 题-通过什么方法可以实现-检测页面 DOM 变化

在`MVVM`框架中,一是监听数据的变化,数据驱动视图

- 通过`Object.defineProperties()`来监听数据的变化,或使用`proxy`来代理和反射
- 通过某个`API`来监听`DOM`的变化(利`用MutationObserver`)来监听`DOM`的变化

::: tip 注意
当通过`JS`操作了`DOM`之后,我们需要通知到`DOM`来更新视图,在`vue2.0`中是用的`Object.defineProperies()`来劫持对象,而`vue3.0`中是使用`proxy`,维持了一个异步的队列,并不是修改了`DOM`就会立即更新到视图上面
:::

`Mutaion Observer API`是用来监视`DOM`变动,`DOM`的任何变动,比如节点的增减,属性的变动,文本内容的变动

这个`API`都可以得到通知,`Mutation Observer`则是异步触发,`DOM`的变动并不会马上触发,而是要等到当前所有`DOM`操作都结束才触发,这样是为了应付`DOM`变动频繁的特点

::: warning 提示
假设文档中连续插入 1000 个`li`元素,就会连续触发 1000 个插入事件,执行每个事件的回调函数,这很可能会造成浏览器的卡顿,而`mutation Observer`则完全不同,只在 1000 个段落都插入结束后才会触发,而且只会触发一次
:::
`Mutation Observer`有以下特点

- 等待所有脚本任务完成后,才会运行,采用异步方式
- 把`DOM`变动记录封装成一个数组进行处理,而不是单独处理个别的`DOM`变动
- 可以观察发生在`DOM`节点的所有变动,可以观察某一类变动

使用实例
:::details 点击即可查看代码

```js
// 选择需要观察变动的节点
var targetNode = document.getElementById('app');
// 观察器的配置（需要观察什么变动）
const config = { attributes: true, childList: true, subtree: true };

/ 创建一个观察器实例并监听`targetNode`元素的变动
const observer = new MutationObserver(targetNode,config);
```

:::

实例:
`MutationObserver`的`callback`的回调函数是异步的,只有在全部`DOM`操作完成之后才会调用`callback`

```html
<div id="target" class="block" name="target">
  target的第一个子节点
  <p>
    <span>target的后代</span>
  </p>
</div>
```

以下是`js`代码

```js
var targetNode = document.getElementById('target');
var i = 0;
var observe = new MutationObserver(function(mutations, observe) {
  i++;
});
observe.observe(targetNode, { childList: true });
targetNode.appendChild(docuemnt.createTextNode('1'));
targetNode.appendChild(docuemnt.createTextNode('2'));
targetNode.appendChild(docuemnt.createTextNode('3'));
console.log(i); //1 callback的回调次数
```

**应用**

有时候,`MutationObserver API`都可以派上用场

- 通知`web`应用程序访问者,监测当前所在页面发生了一些更改,变化
- 正在开发一个新的`javaScript`框架,需要根据`DOM`的变化动态加载`javaScript`模块

**结论**

- `MutationObserver`提供了监视`DOM`树所做更改的能力,它被设计为旧的`Mutation Events`功能的替代品,该功能是`DOM3 events`规范的一部分(来自 MDN)
- `MutationObserver`在不影响浏览器性能的情况下响应`DOM`更改
- `MutationObserver`会等待所有脚本任务完成后,才会运行,采用异步方式

* [MDN-MutatonObserver 介绍](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)

## 第 6 题-如何监控 js 对象属性的变化?

- 方式 1:通过`Object.defineProperty()`来监听

```js
var obj = {
  name: 'itclanCoder',
  phone: 13711767328,
};

Object.defineProperty(obj, 'phone', {
  configurable: true, // 属性可配置
  set: function(v) {
    console.log('phone发生了变化');
    this.phone = v;
  },

  get: function() {
    return this.phone;
  },
});
obj.phone = 15213467443;
```

要想监听属性的变化,首先需要通过`Object.defineProperty()`为需要监听的属性设置一个代理,通过代理的值,触发`set`和`get`的方法
在这个方法中编写自己想要的逻辑操作

- 方法 2-使用 proxy 代理实现

```js
var obj = {
  name: 'itclanCoder',
  phone: 13711767328,
};

var handler = {
  set: function(target, name, value) {
    console.log('phone发生了变化');
    // 改变被代理对象的值,使之保持一致
    target[name] = value;
  },
};

var proxy = new Proxy(obj, handler);
proxy.phone = 1371123765;
```

上面执行完后,会更新 phone 的值

## 第 7 题-介绍几个场景会用到 canvas

1. 绘制动画,画图
2. 移动端校验码,红包雨等
3. 游戏场景开发

## 第 8 题-骨架屏是什么,如何实现?

骨架屏也可以称为占位符,是在内容没有出现之前页面骨架的填充,以免留白

具体实现:

**方案 1:在模板中实现骨架屏**

这种方案是在现有的页面中,写好骨架,等程序渲染后就会替换掉骨架

**方案 2:使用 base64 的图片来作为骨架屏**

## 第 9 题-jq 对象如何向 js 对象做转化

jQuery 对象只能使用 jQuery 方法,不能使用 js 的方法,相反的,js 对象也只能使用 js 的方法,如果 js 对象使用了 jQuery 方法,那么浏览器就会报错

但是在一些特定的时候,我们就需要对 jQuery 对象使用 js 的方法,此时就要用到两者对象之间的转化

```js
var person = $('div'); // 这是一个jQuery对象

var per1 = person[0]; // 此时的per1是一个js对象
var per2 = person.get(0); // 此时的per2也是一个js对象
```

js 对象转换为 jquery 对象

```js
var fruit = document.getElementById('div'); // 这是一个Js对象
var fruit1 = $('fruit'); // 此时fruit1是一个jQuery对象
```

使用`$`可以将任何 js 对象转化为 jQuery 对象

## 第10题-如何中断 Ajax 请求

停止`javaScript`的`ajax`请求有两种方式

⒈ 设置超时时间让 ajax 自动断开

⒉ 手动去停止 ajax 请求

核心是调用 `XMLHttpRequest` 对象上的 `abort` 方法

jQuery 的 `ajax` 对象的 `abort` 方法,调用`abort` 的 `jQuery` 会执行 `error` 的方法,抛出 `abort` 的异常信息,此时即可执行我们中断 `ajax`后的操作

```js
var ajax = $.ajax({
  error: function(jqXHR, textStatus, errorThrown) {
    if (errorThrown != 'abort') {
      // ajax被调用abort后执行的方法
      alert('您的ajax方法被停止了');
    }
  },
});

ajax.abort(); // 停止ajax
```

原生 `js`

```js
xmlHttp.open('POST', 'URL', true);
xmlHttp.onreadystatechange = function() {
  // 得到相应之后的操作
};
xmlHttp.send();
// 设置3秒中后检查xmlHttp对象所发送的数据是否得到响应
setTimeout('CheckRequest()', '3000');
function CheckRequest() {
  // 为4时代表请求完成了
  if ((xmlHttp.readyState = 4)) {
    alert('数据响应超时');
  }
  xmlHttp.close();
}
```

::: tip 注意
不可用 `abort` 方法来作为终止对服务器的请求操作,只有当做在前端页面立刻停止执行 `ajax` 成功后的方法
:::

## 第11题-如何让 form 表单提交数据后,页面不跳转不刷新

解决思路:

需要一个 `iframe` 标签做替罪羊,`form` 点击提交后到 `iframe` 里面,当什么都没有发生一样,先把写好的 `iframe` 标签隐藏起来,给 `form`绑定属性 `target` 为何 `iframe` 的 `name` 一模一样的值,当点击 `button` 进行提交后,就会提交到 `iframe` 框里面,这样就不会重新打开一个新页面成功提交数据

在 `form` 表单后添加 `iframe` 元素

```js
<iframe
  style="display:none"
  id="rfFrame"
  name="rfFrame"
  src="about:blank"
></iframe>
```

点击保存提交事件里需要将`target`改为`iframe`的名字

```js
document.forms[0].target = 'rfFrame';
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
