---
title: CSS 笔试真题
---

## 互联网公司 css 笔试真题

## 快速导航

<TOC />

## 前言

以下一些题,均来各大小公司现场的真实笔试题,所有面试题都经过笔者一一验证,如有不足之处,谢谢读者指正和完善

通过做题,可以了解自己知识存在的盲点,掌握知识才最重要

## 第 1 题-伪类与伪元素的区别

- ### **伪类**: 用来选择那些不能够被普通选择器选择的文档之外的元素,比如:`hover`

伪类用于当已有元素处于的某个状态时,为其添加对应的样式,这个状态是根据用户行为而动态变化的。

比如，当用户悬停在指定的元素时，我们可以通过`:hover` 来描述这个元素的状态。

虽然它和普通的 css 类相似，可以为已有的元素添加样式，但是**它只有处于 dom 树无法描述的状态下才能为元素添加样式**，所以将其称为伪类

常见伪类:`:link`,`:visited`,`:hover`,`:active`,`:focus`,`:not()`,`:first-child`,`:last-child`,`:nth-child`,`:nth-last-child`,`:only-child`,`:target`,`:checked`,`:empty`,`:valid`

- ### **伪元素**:

伪元素用于创建一些不在文档树中的元素,并为其添加样式。比如说，我们可以通过`:before` 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中

伪元素前面是两个冒号，`E::first-line 伪元素`。会创造出不存在的新元素，由于 css 对单冒号的伪元素也支持，单双冒号都支持,但实际上现在** css3 已经明确规定了伪类单冒号**，**伪元素双冒号的规则**,用于区分它们

- `::before/:before`在被选元素前插入内容
- `::after`/`:after` 在被元素后插入内容，其用法和特性与`:before`相似
- `::placeholder` 匹配占位符的文本，只有元素设置了 placeholder 属性时，该伪元素才能生效
- `对于伪元素 :before` 和 `:after` 而言，属性 `content` 是必须设置的，它的值可以为字符串，也可以有其它形式，比如指向一张图片的 URL

* ### 总结

* `伪类`和`伪元素`都是用来表示文档树以外的"元素"。
* `伪类`和`伪元素`分别用单冒号:和双冒号::来表示。
* `伪类`和`伪元素`的区别，最关键的点在于如果没有伪元素(或伪类)，是否需要添加元素才能达到目的，如果是则是伪元素，反之则是伪类

## 第 2 题-rem 与 em 有什么区别

rem 是基于 html 元素的字体大小来决定，而 em 则根据使用它的元素的大小决定,一般被称为相对长度单位,是根据它父元素的字体大小来计算的，一般默认情况下：`16px = 1em`

如果父元素`font-size:16px`,子元素`margin:0.8em`。那么得到的大小就是:`0.8 * 16 =12.8`。

当所有单位都采用`em`时，我们只需要改变`body`的`font-size`，那么其他子元素宽度就能动态变化了，显然方便很多

`em` 和 `rem` 单位之间的区别是浏览器根据谁来转化成 px 值

`rem`是`css3`新增的一个相对长度单位，它的出现是为了解决`em`的缺点，`em`可以说是相对于父级元素的字体大小，当父级元素字体大小改变时，又得重新计算。

`rem`出现就可以解决这样的问题，`rem`只相对于根目录，即`HTML`元素。有了`rem`这个单位，我们只需要调整根元素`html`的`font-size`就能达到所有元素的动态适配了

## 第 3 题-写一段 css 代码,判断浏览器宽度小于 720px 时,页面默认字体为 20 像素

```css
@media and screen(max-width: 720px) {
  html,
  body {
    font-size: 20px;
  }
}
```

详细媒体标签可以参考[media 标签使用](/fontend/css/mobile-meta.md)

## 第 4 题-html5 有哪些新特性,移除了哪些元素?如何处理 HTML5 新标签的浏览器兼容问题?

html5 的新特性

⒈ 语义化标签: `<header></header>,<nav></nav>`

⒉ 绘画 canvas

⒊ svg 绘图

⒋ 视频和音频 video 和 audio

⒌ input 增强型表单控件:calendar,date,time,email,url,search

⒍ 本地存储 localStorage 长期存储数据,浏览器关闭后数据不丢失,sessionStorage 的数据在浏览器关闭后自动删除

### 移除的元素

纯表现的元素:basefont,big,center,font,s

对可用性产生负面影响的元素:frame,frameset,noframes

## 第 5 题-请描述一下 cookies,sessionStorage 和 localStorage 的区别

localStorage 和 sessionStorage 的增删改查:

**1. 存储数据**

```js
sessionStorage.setItem('key', 'sessionStorage的值');
```

⒊ 获取指定键名数据

```js
let dataSession = sessionStorage.getItem('key'); // 获取指定键名数据
let dataSession2 = sessionStorage.key; // sessionStorage是js对象,也可以使用key的方式来获取值
console.log(dataSession, dataSession2, '获取指定键名数据');
```

⒊ 获取 sessionStorage 全部数据

```js
let dataAll = sessionStorage.valueOf(); // 获取全部数据
console.log(dataAll, '获取全部数据');
```

⒋ 清空 sessionStorage 数据

```js
sessionStorage.clear(); // 清空
```

::: tip 提醒
只要将 sessionStorage 替换成 localStorage 即可,他们两个使用的方法完全是一样的
:::

cookie 的增删改查

⒈ 保 cookie 值

```js
let dataCookie = 'hhag';
document.cookie = 'token' + '=' + dataCookie;
```

⒉ 获取指定名称的 cookie 值

```js
let cookieData = getCookie('token');
function getCookie(name) {
  // 获取指定名称的cookie值
  let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)')); // 使用正则匹配 对应cookie，返回数组
  if (arr != null) {
    console.log(arr);
    return unescape(arr[2]);
  }
  return null;
}
let cookieData = getCookie('token'); // cookie赋值给变量
```

⒊ 保存 cookie 并且设置过期时间

```js
setTime('token','cookie的值',10);
function setTime(key,value,expiresDays) {
    //存储 cookie 值并且设置 cookie 过期时间
    let date=new Date();
    date.setTime(date.getTime()+expiresDays*24*3600\*1000);
        document.cookie=`${key}=${value}; expires=${date.toGMTString()}`;
    console.log(document.cookie,'存储 cookie 值并且设置 cookie 过期时间');
}
```

⒋ 删除 cookie

```js
delCookie('token');
function delCookie(cookieName1) {
  //删除cookie
  let date2 = new Date();
  date2.setTime(date2.getTime() - 10001); //把时间设置为过去的时间，会自动删除
  document.cookie = cookieName1 + '=v; expires=' + date2.toGMTString();
  console.log(document.cookie, '删除cookie');
}
```

### 三者的异同

生命周期

cookie：可设置失效时间,没有设置的话,默认是关闭浏览器后失效

localStorage:除非被手动清除,否则将会永久保存

sessionStorage:仅在当前网页会话下有效,关闭页面或浏览器后就会被清除

**存放数据大小**

cookie: 4KB 左右

localStorage 和 sessionStorage:可以保存 5M 的信息

**http 请求**

cookie:每次都会携带 http 头中,如果使用 cookie 保存过多的数据会带来性能问题

localStorage 和 sessionStorage:仅在客户端(即浏览器)中保存,不参与和服务器的通信

**易用性:**

cookie: 需要程序员自己封装,源生的 cookie 接口不友好

localStorage 和 sessionStorage: 源生接口可以接受,可再次封装对 Object 和 Array 有更好的支持

## 应用场景

从安全性来说,因为每次 http 请求都会携带 cookie 信息,这样就无形中浪费了带宽,所以 cookie 应该尽可能少的使用,另外 cookie 还需要指定作用域,不可以跨域调用,限制比较多

但是用来识别用户登录来说,cookie 还是比 storage 更好用,其他情况下,可以使用 storage 就用 storage

## 第 6 题-现在 HTML5 中的 css3 可以写出一个旋转的立方体,请写出要用到的 css 属性

主要利用 css3 旋转平移 3D 等属性写一个立体旋转的立方体,transform:preserve-3d 变换,旋转,transform:rotateX() translateZ()

## 第 7 题-闭包是什么,有什么特性，对页面有什么影响,简单介绍你对闭包的理解

产生闭包的原因是由作用域链引起的,函数嵌套函数,被嵌套的函数就可以称为闭包

将函数内部与函数外部连接起来的桥梁,可以让函数外部的代码访问函数内的局部变量,闭包可以理解为定义在函数内部的函数,

子函数可以使用父函数的变量(访问其他函数内部的局部变量),让变量始终保存在内存中,避免自动垃圾回收

对外提供公有的属性和方法

作用域中保存了一份在父级作用域取得的变量,这些变量不会随父级函数执行完后销毁而销毁,因为他们常驻内存了

## 第 8 题-事件委托是什么?

## 第 9 题-请用 javaScript 编写一个 b 继承 a 的方法

## 第 10 题-请用 javaScript 实现阻止事件冒泡和默认事件

## 第 11 题-浏览器的垃圾回收机制是什么

## 怎么减少重绘和重排

