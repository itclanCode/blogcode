---
title: Js 笔试真题-2
sidebarDepth: 3
collapsable: true
---

## JS 笔试真题-2

## 快速导航

<TOC />

## 前言

以下一些题,均来各大小公司现场的真实笔试题,所有面试题都经过笔者一一验证,如有不足之处,谢谢小可爱们指正和完善

## 第 1 题 数据的引用-浅拷贝

```js
var obj = { value: 1 }
var objCopy = obj;
objCopy.value = 2;
objCopy.key = 2;
console.log(obj);

A: { value: 1, key: 2}
B: { value: 2, key: 2}
C: {value: 1}
D: { value: 2}
```

::: details 点击即可查看答案

**答案: B**

**解析**:当你尝试着改变`objCopy.value = 2`时,此时 `obj`对象也发生了改变,这是浅拷贝,`objCopy`,与`obj`它们指向的都是同一个地止，所以当地止中的数据发生改变,指向该存放的地止的所有变量都会发生改变

**解决办法: 方法 1: for-in**

```js
var obj = { value: 1 };
var objCopy = {};
for (var key in obj) {
  objCopy[key] = obj[key];
}
objCopy.value = 2;
objCopy.key = 2;
console.log(obj, objCopy); // {value: 1}, {value: 2, key: 2}
```

**解决办法: 方法 2: Object.assign()**

```js
var obj = { value: 1 };
var objCopy = Object.assign({}, obj);
objCopy.value = 2;
objCopy.key = 2;
console.log(obj, objCopy);
```

**解决办法: 方法 3: Es6 中的拓展运算符**

```js
var obj = { value: 1 };
var objCopy = { ...obj };
objCopy.value = 2;
objCopy.key = 3;
console.log(obj, objCopy); // {value: 1}, {value: 2, key: 2}
```

**解决办法: 方法 4: 通过 JSON.parse(JSON.stringify())**

```js
var obj = { value: 1 };
var objCopy = JSON.parse(JSON.stringify());
objCopy.value = 2;
objCopy.key = 3;
console.log(obj, objCopy); // {value: 1}, {value: 2, key: 2}
```

::: tip 注意
除了第四种深拷贝 `JSON.parse(JSON.stringify())`,其他方式只能做一层拷贝

如果考虑深层的嵌套关系,那么就需要用深拷贝了的,用递归,具体实现可参考[JS 中的深拷贝 Vs 浅拷贝](/fontend/js/shallow-vs-deep-copy)

:::

## 第 2 题- 加号字符串的拼接

```js
console.log(1 + 2 + '3' + 4);

A: '1234';
B: 10;
C: '334';
D: 334;
```

::: details 点击即可查看
**答案: C**

**解析:** 数字与加号的拼接最后依旧是字符串,结果可以用`typeof`进行检测
:::

## 第 3 题-JavaScript 的基本数据类型包括哪些?

::: details 点击即可查看
**答案**: 基本数据类型包括:`number`, `string`, `boolean`,`null`, `undefined`,`Symbol.`

**解析**: 除了 Symbol 想必其他都很熟悉:`Symbol` 是 Es6 新引入的一种数据类型,它的功能类似于一种标识唯一性的 ID。通常情况下，我们可以通过调用`Symbol()函数`来创建一个`Symbol实例`

- 可用于作为对象属性名(key)
- 可使用 Symbol 来替代常量
- 使用 Symbol 定义类的私有属性/方法
- 注册和获取全局 Symbol

具体详细介绍使用可参考[理解 Es6 中的 Symbol 类型](/fontend/js/understand-symbol)

:::

## 第 4 题-数据类型的考察

请写出以下返回值

```
var a = '123',
    b = String('123'),
    c = new String('123');

A. typeof a = ;
B. typeof b = ;
C. typeof c = ;
D. a instanceof String = ;
E. b instanceof String = ;
F. c instanceof String = ;
```

::: details 点击即可查看答案

```

**答案**:
A,B为string,C为Object. D,E为false,F为true

**解析**:

有new无new的区别:无new调用的函数就是普通方法,有new调用的时构造器函数,会返回这个构造器对象的实例,this的指向也会有所不同,若是在函数内,会指向 `window`,而后者会指向该实例化对象本身

在JS中有基本包装类型,里面有三类引用类型：`Boolean`、`String`、`Number`,**该包装器对象有时可以用于类型转换**

基本数据类型字符串之所以可以调用方法，是在执行过程中，**会将基本数据类型转化为String基本包装对象**，通过这个对象调用方法，调用结束后将该基本包装对象销毁，重新恢复成基本数据类型

因为加 `new` 会把这个函数当作是一个构造器对象,它会返回一个对象。不加`new`的话，就是调用一个普通的函数，结果视函数返回值而定

A,B返回的结果是String类型,C的返回结果是对象

`instanceof`这个关键字,表示的是前者是不是有后者的实例化出来的对象,如果是,那么返回true,否则就是false
由`c = new String('123')`得知,`c`是通过`new`实例化对象出来的,所以c是String的一个实例,返回true,而D,E返回false,就是一个基本数据类型string

F返回`true`

```

:::

## 第 5 题- HTTP 状态码考察

写出下面几个 http 状态码的含义

1. 200: (成功) 服务器已成功处理了请求。 通常，这表示服务器提供了请求的网页
2. 304: (未修改) 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容
3. 401: (未授权) 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应
4. 403: (禁止) 服务器拒绝请求
5. 500: (服务器内部错误) 服务器遇到错误，无法完成请求。
6. 504: (网关超时) 服务器作为网关或代理，但是没有及时从上游服务器收到请求

## 第 6 题-请写出以下代码的输出结果

```js
var a = {
  b: 2,
  fun1: function() {
    console.log(this.b);
  },
};

var fun2 = a.fun1();
a.fun1();
fun2();
```

::: details 点击即可查看
答案:2, 2, fun2 is not a function
:::

## 第 7 题 for..of 与 for..in 的区别

请写出如下代码的结果

```
var arr = ['a', 'b', 'c'];
Array.prototype.hello = 'd';
for(item of arr) {
  console.log(item);
}

for(item in arr) {
  console.log(item);
}
```

::: details 点击即可查看解析

**答案**: 输出 a,b,c, 0,1,2,hello

**共同点**: 都会遍历数组的属性

**不同点**: of 前面的`item`遍历的是数组`arr`的项,而`in`前面的`item`代表的事数组`arr`的属性,索引,属性,in 会遍历原型下的属性,不仅仅会遍历自身属性,还会遍历所有继承通过原型链的对象下的属性

因此,如果这不是预期的结果,必须要在循环内使用简单的 if 语句,以便确保我们只访问特定对象的本地属性

访问属性的顺序并不总是他们在循环内部被定义的顺序,另外,定义属性的顺序不一定是访问他们的顺序

使用`for..in`循环只能遍历可枚举的属性,即在遍历对象时可用的属性,如构造函数属性就不会显示,可以使用`propertyIsEnumerable()`方法检查哪些属性是可枚举属性

可以使用`hasOwnProperty`验证对象属性是不是来自原型链

```
for(var item in arr) {
  //避免来自原型链
  if(arr.hasOwnProperty(item)) {
    console.log(item)
  }
}
```

:::

## 第 8 题 Promise 相关

请写出下面代码的输出结果

```js
function sleep(s) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('sleep');
      resolve('sleep');
    }, s * 1000);
  });
}

async function start() {
  let result = await sleep(3);
  console.log('start');
}
```

## 第 9 题-请用 JS 实现数组的去重

## 第 10 题-请写出前端浏览器本地存储的方法,并说明区别

## 在线测试

<iframe-lineTestCode />

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
