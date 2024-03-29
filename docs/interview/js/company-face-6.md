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

## 第4题-说一说js中有几种方法可以判断变量的类型

在`js`中有4种方法判断变量的类型,分别是`typepf`,`instanceof`,`Object.prototype.toString.call()`

`constructor`:主要用于引用数据类型

`typeof`:常用于判断基本数据类型,对于数据类型,除了`function`返回`funciton`,其余的全部返回`Object`

`instanceof`:主要用于区分引用数据类型,监测方法是监测的类型在当前实例的原型链上,用其监测出来的结果都是`true`

不太适合用于简单的数据类型的监测,监测过程繁琐且对于简单数据类型的`undefined`,`null`,`symbol`监测不出来

`constructor`:用于监测引用数据类型,监测方法是获取实例的构造函数判断和某个类是否相同

如果相同,那就说明该数据是符合那个数据类型的,这种方法不会把原型链上的其他类也加入进来,避免了原型链的干扰

`Object.prototype.toString.call()`:适用于所有类型的判断检测,检测方法是`Object.prototype.toString.call(数据)`返回的是该数据类型的字符串

这四种判断数据类型的方法中,各种数据类型都能监测且监测精准的就是`Object.protype.toString.call()`这种方法

`instanceof`在查找过程中会验证当前类的原型`prototype`是否会出现在示例的原型链`__proto_`上,只要它的原型链上,结果都为`true`

`instanceof`在查找的过程中会遍历下面的变量的原型链,直到找到变量的`prototype`,找到则返回`true`,没有找到则返回`false`


## 第5题-说一下Vue的钩子函数

`Vue`钩子函数是在`Vue`实例从创建到销毁的过程中自动执行的函数,钩子函数用来描述一个组件从引入到退出的全过程中的某个过程，整个过程称为生命周期
`Vue`钩子函数按照组件生命周期的过程分为挂载阶段,更新阶段和销毁阶段

## Vue2生命周期钩子函数

1. `beforeCreate()`:在`new`一个`Vue`实例后,只有一些默认的生命周期钩子和默认事件,其他的东西都还没创建,在此生命周期执行的时候,`data`和`methods`中的数据都没有初始化

2. `created()`:在示例创建完成之后,数据已经准备好,但是挂载`DOM`节点还没有开始,此时无法访问`DOM`节点

3. `beforeMount()`:在挂载开始之前被调用,`render`函数首次被调用,在此时,模板编译成了render函数,但是还没有渲染成真实的DOM节点

4. `mounted()`:在挂载完成后被调用,此时`DOM`节点已经全部渲染完毕,可以在这个钩子函数中操作`DOM`节点,例如获取元素的大小和位置等

5. `beforeUpdate()`:在数据更新之前被调用,可以在此时对更新前的数据进行操作,但此时还无法访问到更新后的数据

6. `updated()`:在数据更新后被调用,DOM已经被重新渲染,可以在此时对DOM进行操作,但是需要注意避免无限循环的情况

7. `beforeDestory()`:在实例销毁之前被调用,可以在此时进行一些清理工作,例如：清除定时器或取消事件监听等

8. `destroyed()`:在实例销毁之后被调用,此时实例中的所有东西都已经被销毁,无法在访问到实例中的数据和方法

在父子组件中,钩子函数的执行顺序如下所示

* 挂载阶段: 父`beforeCreate` > 父`created` > 子`beforeCreate` > 子`created` > 子`beforeMount` > 子`mounted` > 父`mounted`

* 更新阶段:父`beforeUpdate` > 子`beforeUpdate` > 子`updated` >父`updated`

* 销毁阶段: 父`beforeDestory` > 子`beforeDestory` > 子destoryed > 父`destoryed`

总之,`Vue`钩子函数是,在特定阶段,能够自动执行的函数,例如:在数据更新后对`DOM`进行操作或在实例销毁前进行一些清理工作

## Vue3生命周期钩子函数

`Vue3`的生命周期钩子函数和`Vue2`的生命周期选项是很相似的，但是`Vue3`中的生命周期钩子函数被命名为“钩子”，并且使用了`Composition API`的方式来实现。以下是`Vue3`的钩子函数：

`setup()`：在组件创建之前执行，相当于`Vue2`中的`beforeCreate`和`created`钩子函数，用于创建组件的`data`和`method`,它是在`beforeCreate`之前就执行了的

* `onBeforeMount()`：在组件挂载到节点上之前执行的函数，相当于`Vue2`中的`beforeMount`钩子函数。
* `onMounted()`：在组件挂载完成后执行的函数，相当于`Vue2`中的`mounted`钩子函数。
* `onBeforeUpdate()`：在组件更新之前执行的函数，相当于`Vue2`中的`beforeUpdate`钩子函数。
* `onUpdated()`：在组件更新完成之后执行的函数，相当于`Vue2`中的`updated`钩子函数。
* `onBeforeUnmount()`：在组件卸载之前执行的函数，相当于`Vue2`中的`beforeDestroy`钩子函数。
* `onUnmounted()`：在组件卸载完成后执行的函数，相当于`Vue2`中的`destroyed`钩子函数。
`onActivated()`：在组件被包含在`<keep-alive>`中，并且被激活时执行。
除了以上的钩子函数之外，`Vue3`还提供了一些额外的钩子函数，如`onRenderTriggered`和`onRenderTracked`，用于在开发过程中进行调试。

在`Vue3`中，可以使用`<script setup>`语法糖来定义组件的逻辑。使用`<script setup>`可以让代码更加简洁，阅读性更高。同时，Vue3还引入了自定义Hooks的概念，可以将一些逻辑抽象出来，实现代码的复用。

Vue3的生命周期钩子函数和Vue2的生命周期选项是如何合并在一起的呢？实际上，在Vue3的内部实现中，会将Vue3的钩子函数转换为Vue2的生命周期选项。具体来说，Vue3的钩子函数会被注册到Vue2的生命周期选项中,如下所示
```
function registerLifecycleHook(
    register: Function,
    hook?: Function | Function[]
  ) {
    if (isArray(hook)) {
      hook.forEach(_hook => register(_hook.bind(publicThis)))
    } else if (hook) {
      register((hook as Function).bind(publicThis))
    }
  }

```
在上面的代码中，`registerLifecycleHook`函数会将`Vue3`的钩子函数注册到`Vue2`的生命周期选项中。如果钩子函数是一个数组，那么会循环注册每一个钩子函数；如果钩子函数不是一个数组，那么只会注册一个钩子函数


## 第6题-Es6中的拓展运算符有哪些使用

在ES6中，事件扩展运算符可以用于数组和对象的展开操作，用于将一个数组转为用逗号分隔的参数序列或将一个对象转为多个参数的形式传入一个函数中。以下是事件扩展运算符的用法和示例

## 数组

构造数组：使用扩展运算符可以更简单、更优雅地构造新数组，而不必使用`push`、`splice`、`concat`等方法将已有数组元素变成新数组的一部分。例如

扩展运算符打印可迭代对象的每一项
```
console.log(...[1,2,3]); // 1 2 3
console.log(1,...[2,3,4],5); // 1 2 3 4 5
console.log([1,...[2,3,4],5]); // [1, 2, 3, 4, 5]
```
* **用法1-复制数组**：使用扩展运算符可以更方便地复制一个数组，而不必使用`slice`方法。例如
```
let arr = [1, 2, 3];
let arr2 = [...arr]; // [1, 2, 3]
arr2.push(4); 
console.log(arr2); // [1, 2, 3, 4]

```
* **用法2-数组合并**：使用扩展运算符可以更简单、更优雅地合并两个数组。例如
```
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2]; // [0, 1, 2, 3, 4, 5]
// 等同于
var arr4 = arr1.concat(arr2);
console.log(arr3, arr4); // [0, 1, 2, 3, 4, 5] [0, 1, 2, 3, 4, 5]

```
2. 对象

复制对象：使用扩展运算符可以更方便地复制一个对象。例如
```
let obj = {a: 1, b: 2, c: 3};
let obj2 = {...obj}; // {a: 1, b: 2, c: 3}
obj2.d = 4; 
console.log(obj2); // {a: 1, b: 2, c: 3, d: 4}

```
* **用法3-对象合并**：使用扩展运算符可以更简单、更优雅地合并两个对象。例如
```
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {...obj1, ...obj2}; // {a: 1, b: 2, c: 3, d: 4}
// 等价于
let obj1 = {a:1,b:2};
let obj3 = Object.assign(obj1,obj2);// {a: 1, b: 2, c: 3, d: 4}
```
对象中的拓展运算符`{...}`用于取出参数对象中所有可遍历属性,拷贝到当前对象之中
`Object.assign`方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
`Object.assign`方法的第一个参数是目标对象,后面的参数都是源对象,如果目标对象与原对象存在同名属性,或多个源对象有同名属性,则后面的属性会覆盖前面的属性
如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉
```
 let bar = {a: 1, b: 2};
 let baz = {...bar, ...{a:2, b: 4}};  // {a: 2, b: 4}
```
扩展运算符对对象实例的拷贝属于一种浅拷贝

引用数据类型比如`Array`，在拷贝的时候拷贝的是对象的引用，当原对象发生变化的时候，拷贝对象也跟着变化
```
let obj1 = { a: 1, b: 2};
 let obj2 = { ...obj1, b: 'itclancoder'};
 console.log(obj1); // {a: 1, b: 2}
 console.log(obj2); //  {a: 1, b: "itclancoder"}
```
上面这个例子扩展运算符拷贝的对象是基础数据类型，因此对`obj2`的修改并不会影响`obj1`
 ```
 let obj1 = { a: 1, b: 2, c: {name: 'a'}};
 let obj2 = { ...obj1};
 obj2.c.name = 'itclancoder';
 console.log(obj1); // {a: 1, b: 2, c: {name: 'itclancoder'}}
 console.log(obj2); // {a: 1, b: 2, c: {name: 'itclancoder'}}
```
这里可以看到，对obj2的修改影响到了被拷贝对象`obj1`，原因上面已经说了，因为`obj1`中的对象`c`是一个引用数据类型，拷贝的时候拷贝的是对象的引用

对象的解构赋值用于从一个对象取值，相当于将目标对象自身的所有可遍历、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面
```
 let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
 x // 1
 y // 2
 z // { a: 3, b: 4 }
```
注意：由于解构赋值要求等号右边是一个对象，所以如果等号右边是`undefined`或`null`，就会报错，因为它们无法转为对象。而且解构赋值必须是最后一个参数，否则会报错
```
 let { ...z } = null; // 运行时错误
 let { ...z } = undefined; // 运行时错误
 let { ...x, y, z } = someObject; // 句法错误
 let { x, ...y, ...z } = someObject; // 句法错误
```
如果扩展运算符后面是字符串，它会自动转成一个类似数组的对象，因此返回的不是空对象。
```
{...'hello'}
 // {0: "h", 1: "e", 2: "l", 3: "l", 4: "o"}
```

### 用法4-在React或Vue中的运用

在React或vue组件中，可以使用扩展运算符来进行props的传递

```
const params = {name: 'Jine', age: 21}
<CustomComponent {...params} />

```
###  解构参数传递

比如:求数组的最大,最小值
```
const arr = [2024,2,50,100];
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min,max); // 2,2024
```
### 用法5-数组去重

拓展运算符配合`set`实现数组去重
```
var arr = [2023,'itclancoder',2023, 1024, -9, -9, 2023, 1024, 2, 3, 2, 3, 6, 8,8,8,-8,'itclancoder','itclancoder']
var  set1= [...new  Set(arr)]
//可以直接写出var  set1= new  Set(arr)
//console.log(set1)
//方法1
var newArr=Array.from(set1)
console.log(newArr)
var arr = [2023,'itclancoder',2023, 1024, -9, -9, 2023, 1024, 2, 3, 2, 3, 6, 8,8,8,-8,'itclancoder','itclancoder']
var  set1= [...new  Set(arr)]
//可以直接写成var  set1= new  Set(arr)
//console.log(set1)
//方法2
var newArr= [...set1]
console.log(newArr)
```

###  用法6-字符串转字符数组

```
const name='itclancoder'
const strarr=[...name]
console.log(strarr)
//['i','t','c','l','a','n','c','o','d','e','r']
//进行简单的字符串截取
strarr.lenght=2
console.log(strarr.join(""));//‘it’
```

以上就是关于拓展运算符的一些使用

## 第7题-说一说服务端渲染与客户端渲染

## 服务端渲染

服务端渲染（Server-Side Rendering，SSR）是指在服务器端生成完整的`HTML`页面并将其返回给浏览器，与传统的客户端渲染方式相反。

在传统的客户端渲染中，浏览器首先接收到一个空的`HTML`页面，在页面加载期间，浏览器使用`JavaScript`来动态生成页面内容。而在服务端渲染中，服务器端负责构建整个`HTML`页面，包括将数据和组件渲染为HTML，然后将整个`HTML`页面返回给浏览器。

服务端渲染的优势包括：

1. 更快的首次加载时间：由于浏览器直接接收到完整的HTML页面，网页可以更快地呈现给用户。

2. 更好的SEO：搜索引擎爬虫可以直接抓取到完整HTML页面的内容，不需要通过JavaScript解析。

3. 更好的性能：对于复杂的应用程序，服务端渲染可以分担客户端的负载，减轻浏览器的负担，并提供更流畅的体验

4. SSR 的响应性在服务端是不必要的，因为没有用户交互和 DOM 更新。为了更好的性能，默认情况下响应性在 SSR 期间是禁用的

5. 在 `SSR` 期间，只有 `beforeCreate` 和 `created` 这两个生命周期钩子会被调用，其他像` mounted `或 `updated` 这样的生命周期钩子不会在 SSR 期间被调用，而只会在客户端运行。因此，我们应该避免在 `beforeCreate` 和` created` 钩子中使用会产生副作用且需要被清理的代码

6. `SSR` 适用于需要更快的到达时间的场景，优势在于慢网络和运行缓慢的设备场景。相比传统的 `SPA`，`SSR` 服务器渲染标记在服务端渲染 `HTML` 后即可显示，用户会更快的看到首屏渲染页面

7. `SSR` 不适用于同构资源的处理。在使用三方 `API` 时必须保证运行不报错，需要特殊处理使其支持服务端和客户端都可运行。结合 `Vue` 的钩子来说，能在 `SSR` 中调用的生命周期只有 `beforeCreate` 和 `created`
8. VNode 是 Vue 中用来描述虚拟 DOM 的数据结构，本身是 js 对象，兼容性极强，不依赖当前的执行环境，从而可以在服务端渲染及原生渲染。虚拟 DOM 频繁修改，最后比较出真实 DOM 需要更改的地方，可以达到局部渲染的目的，减少性能损耗

9. `SSR` 的实现流程大体与客户端渲染类似。浏览器请求 `URL`，前端服务器接收到 `URL` 请求之后，根据不同的 `URL`，前端服务器向后端服务器请求数据，请求完成后，前端服务器会组装一个携带了具体数据的 `HTML` 文本，并且返回给浏览器，浏览器得到 `HTML` 之后开始渲染页面，同时，浏览器加载并执行 ``JavaScript` 脚本，给页面上的元素绑定事件，让页面变得可交互。当用户与浏览器页面进行交互，如跳转到下一个页面时，浏览器会执行 `JavaScript` 脚本，向后端服务器请求数据

一些服务端的框架,如`NuxtJs`

## 客户端渲染

客户端渲染是一种将网站或应用的代码逻辑从服务器端转移到客户端进行执行，以加快页面加载速度和交互性能的技术。在客户端渲染中，网页或应用的代码被编译成 `JavaScript` 代码，然后在用户的浏览器中运行。相对于传统的服务器端渲染，客户端渲染可以更加快速地呈现页面，并且允许进行更多的动态交互，例如即时搜索和动画效果。

然而，客户端渲染也有一些缺点。由于大部分渲染工作需要在用户的浏览器中执行，因此客户端渲染可能导致页面加载速度更慢，并且可能对浏览器的性能造成一定的负担。此外，在处理搜索引擎优化（SEO）时，客户端渲染也可能会导致问题，因为搜索引擎爬虫可能无法正确地读取动态生成的内容

通常用`vue-cli`生成的脚手架代码,都是客户端渲染,有各个生命周期,执行不同的函数逻辑

服务端渲染和客户端渲染是处理网页的两种不同方法。服务端渲染 (`SSR`) 是在服务器上获取动态内容，将其转换为 `HTML` 并将其发送到浏览器的过程

客户端渲染 (`CSR`) 是在浏览器中处理网页以显示不同的方法。以下是比较服务端渲染和客户端渲染的几个方面：

* **渲染过程**：服务端渲染在服务器上生成 DOM 树，而客户端渲染在客户端浏览器上生成 DOM 树
* **响应速度**：服务端渲染可以加快页面的响应速度，因为它可以在浏览器请求页面之前预先准备好 HTML。相比之下，客户端渲染需要在浏览器中加载 
`JavaScript` 和其他资源，这可能会导致页面响应速度较慢

* **SEO 优化**：服务端渲染更有利于爬虫爬取信息，因为所有内容都在 `HTML` 中，爬虫可以轻松地找到和索引页面内容。相比之下，客户端渲染需要在浏览器中加载 `JavaScript` 和其他资源，爬虫可能无法找到或索引页面内容

* **Web 应用程序 VS 网站**：`Web`应用程序涉及更多的用户交互，确保用户交互不会花费很长时间是至关重要的。因此，与 `SSR` 相比，`CSR` 更适用于 `Web` 应用程序。而网站通常是提供信息内容的，所以可以使用 SSR

* **页面加载时间**：在客户端渲染的情况下，由于所有支持脚本都是提前加载的，因此客户端渲染的加载时间更快。除非需要加载惰性 `JavaScript` 模块，否则它不会向服务器发送请求。对于服务端渲染，在第一页加载中遵循的完整请求周期是重复的。这意味着服务端渲染对网页加载时间几乎没有任何影响。因此，在这种情况下，客户端渲染响应更快

* **缓存的影响**：在客户端渲染中，基于 `CSR` 的 `Web` 应用程序也可以在没有互联网的情况下运行（除非您调用数据 `API`）。加载后，应用程序不再需要向服务器发送请求。这允许浏览 Web 应用程序，就像一个简单的桌面应用程序。然而，在服务端渲染中，总是向服务器发送请求。因此，与 CSR 相比，`SSR` 的页面加载时间无疑更长。缓存确实提高了 `SSR` 的内容渲染

## 代码示例

我们可以使用以下`Node.js`代码来设置服务器，并使用`React`渲染

### 服务端代码

```
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App'); // 或者你的入口组件

const app = express();

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>服务端渲染</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `);
});

app.use(express.static('public')); // 客户端代码静态资源存放在public目录下

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
```
### 客户端代码

除了服务器端代码之外，我们还需要编写客户端代码，以便可以在浏览器中运行`JavaScript`，并且`React`可以在客户端中呈现`DOM`和管理其状态
我们可以用以下客户端代码来启动`React`应用程序
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 或者你的入口组件

ReactDOM.render(<App />, document.getElementById('root'));
```
通过以上代码，我们可以实现服务端渲染，以提高应用程序的性能和SEO效果。但是需要注意的是，服务端渲染可能会增加代码的复杂度，需要更多的配置和调试工作，因此需要仔细考虑是否需要使用服务端渲染来达到最佳的效果

## 总结

服务端渲染与客户端渲染是两种不同的反感,无论是`Vue`技术栈,还是`React`技术栈,都有对应的服务端框架

不过一般公司上面绝大多数的产品,很多用的都是客户端渲染的,如果用服务端渲染,那得考虑服务器负载等方面的,相对比较复杂

## 第8题-说一说网页当中性能优化有哪些性能指标，如何量化

网页性能优化的重要性不言而喻，因为它会直接影响到网站的访问速度、用户体验以及SEO排名等。以下是常见的几个性能指标及其量化方式

* FCP（First Contentful Paint）：白屏时间，即页面中第一次有内容渲染的时间，值越低越好

* SI（Speed Index）：页面渲染时间，即页面从白屏到渲染完毕的时间，值越低越好

* 页面加载时间：从页面开始加载到页面onload事件触发的时间。一般来说onload触发代表着直接通过HTML引用的CSS，JS，图片资源已经完全加载完毕,衡量网页从开始加载到完全展示所需的时间。通常以毫秒为单位进行计量，理想情况下，网页加载时间应该小于3秒

* 全部页面加载时间：全部页面载入时间指从最初启动浏览开始，直到所有元素都被加载完成后，在2秒后仍然没有网络活动的时间,理想情况下，渲染时间应该小于1秒

* 首字节时间：从客户端发起HTTP请求到服务端返回第一个字节的时间,理想情况下，TTFB应该小于200ms

* DNS时间:从浏览器发起DNS查询到DNS查询结束的时间

* `TCP`时间：从浏览器发起`TCP`连接到`TCP`连接建立完成的时间

* 下载速度：从服务器下载资源的速度，通常以KB/s或MB/s表示

* 页面流畅度：指页面的动画和滚动是否流畅

* 页面大小：指网页的大小，通常以字节为单位进行计量。网页大小越小，加载时间越快，用户体验就会越好

* 网络丢包率：指在网络传输过程中丢失数据包的比例

* 网络时延：指数据从客户端发送到服务端并返回的时间

* 请求响应时间:指客户端发送请求到服务端返回响应的时间,请求次数越少，网页加载时间越短,用户体验就会越好

* 事务响应时间:指完成一次完整的操作所需要的时间，如用户登录、购物车结算等

* 并发用户数:指同时访问网站的用户数量

以上指标是常见的网页性能指标，可以用来量化网页性能。可以通过在浏览器中使用 `Performance` 接口获取这些指标,使用`WebPageTest`、`Lighthouse`等工具检测网页性能，使用`CDN`、压缩资源、合并请求等方式进行优化等

## 第9题-说一说前端有哪些性能优化手段

1. 减少请求数量

减少页面中请求的资源数量可以有效地降低页面加载时间，常用的方法包括文件合并、使用雪碧图(CSS精灵技术),使用Base64等技术对图片进行优化等。文件合并可以将多个文件合并成一个文件，减少请求次数，但是需要注意文件合并也有自己的问题，如首屏渲染问题和缓存失效问题。使用雪碧图可以将多张图片合并为一张，减少请求次数

2. 减小资源大小

资源的大小对页面加载时间也有很大的影响，可以通过压缩图片、压缩代码等方式来减小资源的大小。压缩图片可以使用在线工具或者图片压缩库来实现，压缩代码可以使用压缩工具、去除注释和空格等方式来实现,也可以使用适当的图片格式：对于相同的图片，不同的图片格式占用的体积是不同的。例如，对于简单的图标，可以使用SVG格式，对于照片等复杂的图片，可以使用JPEG或WEBP格式

3. 优化网络连接

网络连接的质量和速度对页面加载时间也有很大的影响，可以通过使用CDN、使用预加载等方式来优化网络连接。CDN可以将资源分发到全球各地的服务器上，提高资源的访问速度；预加载可以在页面加载完成后，提前加载一些需要使用的资源，减少请求的等待时间

4. 优化资源加载

资源的加载方式也会影响页面的加载时间，可以通过异步加载、懒加载等方式来优化资源加载。异步加载可以将一些不必要的资源延迟加载，提高页面的加载速度；懒加载可以将一些图片、视频等资源延迟加载，只在需要时再加载，减少页面的加载时间。

5. 减少重绘回流

重绘和回流是浏览器渲染页面时的两个重要步骤，它们会影响页面的性能。可以通过减少DOM操作、减少页面元素数量、精简HTML代码、减少DOM操作、避免多次重绘和回流、使用CSS3动画等方式来减少重绘回流,延迟加载等优化手段可以显著提高页面的加载速度。

6. 使用性能更好的`API`

`JavaScript`提供了很多`API`，有些`API`的性能比较差，可以使用性能更好的`API`来替换。例如使用`document.querySelector`代替`document.getElementById`

7. 构建优化

构建性能主要指构建速度，可以通过使用构建工具、缓存构建结果等方式来优化构建性能

8. 缓存

通过设置缓存控制头信息，使用浏览器缓存和HTTP缓存等技术可以减少网络带宽消耗，提高页面的响应速度和用户体验

9. 使用CDN

使用CDN可以将静态资源分布在多个服务器上，更快速地响应用户的请求，并降低服务器的负载

10. Web前端框架优化

选择一个性能高效且轻量级的Web前端框架，提高页面的加载速度和响应速度。

11. 服务器优化

在服务器端优化中使用缓存机制、优化数据库查询、压缩服务器响应等手段减少服务端的负载，提升应用性能

12. 前置加载和懒加载

前置加载技术使用预加载等技术来提前加载下一个页面或用户可能需要的资源，以提高网站速度和性能。 `Lazy loading`技术可以将页面上的图片或其他资源推迟到页面完全加载后再加载，以减少加载时间和带宽

13. 优化CSS和JS

优化CSS和JS代码可以提高网站的性能。以下是一些优化技术的示例：

* 压缩CSS和JS代码

* 删除注释和无用代码

* 合并重复的CSS和JS代码

* 减小CSS和JS文件的大小




