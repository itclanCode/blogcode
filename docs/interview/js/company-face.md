---
title: Js 笔试真题
---

### 快速导航

<TOC />

### 前言

以下一些题,均来各大小公司现场的真实笔试题

### 第 1 题. 变量声明不会提升

直接写出下边程序的输出结果

```
console.log(foo);
var foo = "test"
```

::: details 点击即可查看
答案: undefined

解析: 变量`foo`,相当于只有`var foo`;但是却没有赋值,所以值是`undefined`,并且变量的声明并不会提升,只有函数声明会提升
:::

### 第 2 题 词法作用域

写出下面一段代码输出结果

```
var temp = 123;
function f() {
  console.log(temp);
  if(false) {
    var temp = 456
  }
}
f();
```

::: details 点击即可查看
答案: `undefined`

解析: 在没有调用 f 函数时,`temp`的值是`123`,在查找变量时,它先会从函数内沿着作用域链逐级向外进行查找,若有则会返回,若无,则会返回`undefined`,

使用`var`声明的变量并不会有块级作用域,在`if`语句块声明赋值的变量,相当于是裸露的,因为在 f 函数内,变量先使用,但是未赋值,所以是`undeifined`

:::

### 第 3 题 块级作用域

写出下面一段代码输出的结果

```
var temp = 123;
function f() {
  console.log(temp);
  if(true) {
     console.log(temp);
     let temp = 456;
  }
}
f();
```

::: details 点击即可查看详情
答案: 123,然后报错`ReferenceError: Cannot access 'temp' before initialization`,无法在初始化之前访问变量

解析: `let`声明的变量是有块级作用域的,不能重复声明定义
:::

### 第 4 题-Promise 执行问题

写出下面一段程序的输出的结果

```
new Promise(resolve => {
    console.log(1);
    setTimeout(() => console.log(2),0)
    Promise.resolve().then(() => console.log(3))
    resolve();
}).then(() => console.log(4))
console.log(5)
```

::: details 点击可查看详情
答案: 1 5 3 4 2

解析:事件循环,任务队列的执行顺序,`new Promise`是会立即调用,接收了一个`resolve`参数,执行调用输出`console.log(1)`语句,遇到`setTimeout`,它是一个异步宏任务,会推送到任务队列中,进入挂起状态

而`promise.resove`也是一个异步微任务,仍然会推送到任务队列中,进入挂起状态,当主线程`console.log(5)`执行完后,在从异步任务队列中进行执行,在同一栈中,微任务要优先于宏任务的执行,所以先执行 3,然后 4,最后是 2

最终执行的顺序结果是:1,5,3,4,2
:::

### 第 5 题-"123456789".match(/\d{3,5}?/g)的结果是什么?

正则表达式: 考察`match`的用法
::: details 点击即可查看详情
答案: ["123", "456", "789"]

解析:

`match`方法的返回值是存放首次匹配内容的数组。如果没有找到匹配结果，返回 `null`

**用法**：`stringObject.match(searchvalue | regexp)`，这里介绍一下`regexp`模式

**返回值**：存放匹配结果的数组。该数组的内容依赖于 `regexp` 是否具有全局标志 `g`

**使用描述**:

该`match()` 方法将检索字符串`stringObject`，以找到一个或多个与`regexp`匹配的文本。这个方法的行为在很大程度上有赖于 `regexp`是否具有标志`g`

如果 `regexp` 没有标志 `g`，即全局匹配,那么`match()`方法就只能在`stringObject` 中执行一次匹配

如果没有找到任何匹配的文本,`match()` 将返回 `null`。否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息

如下示例所示

```
let str="itclanCoder";
console.log(str.match("C"));
```

输出结果

```
["C", index: 6, input: "itclanCoder", groups: undefined]
```

该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。除了这些常规的数组元素之外，返回的数组还含有两个对象属性。 `index`属性声明的是匹配文本的起始字符在 `stringObject`中的位置，`input` 属性声明的是对 `stringObject` 的引用

如果 `regexp` 具有标志 `g`，则 `match()`方法将执行全局检索，找到 `stringObject` 中的所有匹配子字符串。

若没有找到任何匹配的子串，则返回 null。

**如果找到了一个或多个匹配子串，则返回一个数组**。不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 `stringObject`中所有的匹配子串，而且也没有 `index` 属性或 `input`属性

**示例**:

- 不带修饰符 g

```
var url = 'http://www.baidu.com?a=1&b=2&c=3';
var reg = /([^?&=]+)=([^?&=])*/;
var result = url.match(reg);
console.log(result);//["a=1", "a", "1", index: 21, input: "http://www.baidu.com?a=1&b=2&c=3", groups: undefined]
console.log(result.index);  // 21
console.log(result.input);  // http://www.baidu.com?a=1&b=2&c=3

```

- 带修饰符的 g

```
var url = 'http://www.baidu.com?a=1&b=2&c=3';
var reg = /([^?&=]+)=([^?&=])*/g;
var result = url.match(reg);
console.log(result);    //["a=1", "b=2", "c=3"]
console.log(result.index);  //undefined
console.log(result.input);  //undefined
```

有全局 g 匹配和无 g,是不一样的
:::
而在本题中的`"123456789".match(/\d{3,5}?/g)`,从`123456789`字符传中第 3 个位置查找,结束位置在第 5 个位置,全局匹配查找,最终会返回一个数组`[123, 456, 789]`

这个`match`方法有时候会很有用,在匹配某查找一字符串参数的时候,经常在面试中,被问到,怎么将一`url`中的参数给提取出来的,此时这个方法就很有用了的

### 第 6 题-编程将字符串"2018-11-03"转换成"11/03/2018"

字符串中一些方法操作:`split`

::: details 点击即可查看详情

```
var str = "2018-11-03";
var arrs = str.split('-'); // 经果 split 的分割,返回结果是一个数组,arrs 的结果为["2018", "11", "03"]
var result = arrs.map((item, index, arr) => {
return arr[1]+'/'+arr[2]+'/'+arr[0]; // 当然也是可以通过 join 方法进行拼接的["11", "03","2018"].join('/')
})
var tranResult = Array.from(new Set(result)); // 数组去重.这里也可以使用拓展运算符 [...new Set(result)]
console.log(tranResult[0]); // 11/03/2018
```

:::
::: tip 注意
其中这个`Array.from`是可以将类数组格式,转化为真实的数组,经过`new Set()`后,`set`数据结构,如果不进行转化,是没有办法通过数组访问下标的方式进行访问的

这个`Array.from`方法不仅可以将 Set 生成数组,也可以从 `String中生成数组`,从 `Map`生成数组都是可以的,从类数组对象（arguments）生成数组,将一个类(伪)数组转换为一个真实的数组

具体详细使用可参考 MDN 文档[Array.from 使用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
:::

### 第 7 题-如果浏览器不支持 bind 函数,实现一个函数让其兼容

### 第 8 题-简单实现一下对象的深拷贝

### 第 9 题-实现一个数组的快速排序
