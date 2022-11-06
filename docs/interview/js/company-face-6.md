---
title: Js 笔试真题-5
sidebarDepth: 3
collapsable: true
---

## 快速导航

<TOC/>

## 第1题-说一说JS数据类型有哪些,他们之间的区别是什么

数字(`number`),布尔(`boolean`),字符串`string`,`null`,`undefined`,`Symbol`,`Object`,`function`

`JS`数据类型分为两种:

### 类型不同

* 基本(简单)数据类型(7种):`Number`,`String`,`Boolean`,`Null`,`undefined`,`Symbol`,`BigInt`
* 引用(复杂/非)数据类型: `Object`，对象,数组,正则,日期,Math都属于`Object`

### 本质区别

**存储方式**: 基本数据类型存储在栈中,而非基本数据类型存储在堆中
**存储大小**: 基本数据类型存储在栈中,占据的空间小,属于被频繁使用的数据,而引用数据类型是存储在堆内存中,占据空间大,引用数据类型在栈中存储了指针，该指正指向的实体的起始地止,当解释器寻找引用值时,会检索在栈中的地止,取得地止后从堆中获得实体

`Symbol`是`Es6`新出的一种数据类型,这种数据类型的特点就是没有重复的数据,可以作为`object`的`key`

数据的创建方法`Symbol()`,因为它的构造函数不够完整,所以不能使用`new Symbol()`创建数据,由于`Symbol()`创建数据具有唯一性,所以`Symbol()!==Symbol()`,同时使用`Symbol`数据作为`key`不能使用`for`获取到这个`key`

需要使用`Object.getOwnPropertySymbols(obj)`获得这个`obj`对象中`key`类型是`Symbol`的`key`值
```js
let key = Symbol('key');
let obj = {[key]:'symbol'};
let keyArray = Object.getOwnPropertySymbols(obk)  // 返回一个数组[Symbol['key']]
obj[keyArray[0]]  // 'symbol'
```

`BigInt`也是`Es6`新出的一种数据类型,这种数据类型的特点就是数据涵盖的范围大,能够解决超出普通数据类型范围报错的问题

### 使用方法

* 整数末尾直接+n: 4352342643634324n
* 调用`BigInt()`构造函数: BigInt("43342634634646434")

::: tip 注意事项
`BigInt`和`Number`之间不能进行混合操作
:::

更多相关: [理解Es6中的Symbol类型](/fontend/js/understand-symbol/)

## 第2题-说一下promise是什么以及它是怎么使用的

`Promise`是异步微任务,解决了异步多层嵌套的问题,也就是解决回调地域的问题,让代码可读性更高,更容易维护

具体使用: `Promise`是`Es6`提供的一个构造函数，可以使用`Promise`构造函数`new`一个实例,`Promise`构造函数接收一个函数作为参数

这个函数有两个参数,分别是`resolve`和`reject`,`resolve`将`Promise`的状态等待变为成功,将异步操作的结果作为参数传递过去,`reject`则将

状态由等待转变为失败,在异步操作失败时调用,将异步操作报出的报出的错误作为参数传递过去

实例创建完成后,可以使用`then`方法分别指定成功或失败的回调函数,也可以使用`catch`捕获失败,`then`和`catch`最终返回的也是一个`Promise`,所以可以链式调用

**特点**:

1. 对象的状态不受外界影响(`Promise`对象代表一个异步操作,有三种状态)

`pending`:执行中,`Resolved`(成功,又称`Fullfilled`),`rejected`(拒绝),其中`pending`为初始状态,`fulfilled`和`rejected`为结束状态,结束状态表示`Promise`的生命周期已经结束

2. 一旦状态改变,就会在变,`Promise`对象的状态改变,只有两种可能(状态凝固了,就不会在变了,会一直保持这个结果)

从`Pending`变为`Resolved`,从`Pending`变为`Rejected`

`resolve`方法的参数是`then`中回调函数的参数,`reject`方法中的参数`catch`中的参数,`then`方法和`catch`方法只要不报错,返回的都是一个`fulllfilled`状态的`promise`

**Promise.resolve()**: 返回的`Promise`对象状态为`fulfilled`,并且将该`value`传递给对应的`then`方法

**Promise.reject()**: 返回一个状态为失败的`Promise对象`,并将给定的失败信息传递给对应的处理方法

**Promise.all()**:返回一个新的`promise`对象,该`promise`对象在参数对象里所有的`promise`对象都成功的时候,才会触发成功,一旦有一个失败，则整个都会失败

**Promise.any()**: 接收一个`Promise`对象的集合,当其中的一个`Promise`成功,就返回那个成功的`promise`的值

**Promise.race()**: 当参数里的任意一个子`promise`被成功或失败后,父`promise`马上也会用子`promise`的成功返回值或失败详情作为参数调用调用父`promise`绑定的对象,并返回该`promise`对象

## 第3题-说一下BFC

块级格式化上下文,独立的渲染区域,不会影响边界以外的元素

产生BFC的条件: `float`,`position`,`overflow`,`display`

块级格式化上下文,是`web`页面一块独立的渲染区域,内部元素的渲染不会影响边界以外的元素

`BFC`布局规则,内部盒子会在垂直方向,一个接一个的放置,`box`垂直方向的距离由`margin`决定,属于同一个`BFC`的两个相邻的`BOX`的`margin`会发生重叠

`BFC`的区域不会与`float`的`box`重叠

清除浮动:`overflow:hiiden`,解决外边距的合并问题

## 




