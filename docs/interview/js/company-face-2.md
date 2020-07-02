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

```
var obj = { value: 1 }
var objCopy = obj;
objCopy.value = 2;
objCopy.key = 2;
console.log(obj);

A: { value: 1, key: 2} B: { value: 2, key: 2} C: {value: 1} D: { value: 2}
```

::: details 点击即可查看答案

**答案: B**

**解析**:当你尝试着改变`objCopy.value = 2`时,此时 `obj`对象也发生了改变,这是浅拷贝,`objCopy`,与`obj`它们指向的都是同一个地止，所以当地止中的数据发生改变,指向该存放的地止的所有变量都会发生改变

**解决办法: 方法 1: for-in**

```
var obj = { value: 1 }
var objCopy = {};
for(var key in obj) {
   objCopy[key] = obj[key]
}
objCopy.value = 2;
objCopy.key = 2;
console.log(obj, objCopy);  // {value: 1}, {value: 2, key: 2}
```

**解决办法: 方法 2: Object.assign()**

```
var obj = { value: 1 }
var objCopy = Object.assign({}, obj);
objCopy.value = 2;
objCopy.key = 2;
console.log(obj, objCopy);
```

**解决办法: 方法 3: Es6 中的拓展运算符**

```
var obj = {value: 1}
var objCopy = {...obj};
objCopy.value =2;
objCopy.key = 3;
console.log(obj, objCopy)  // {value: 1}, {value: 2, key: 2}
```

**解决办法: 方法 4: 通过 JSON.parse(JSON.stringify())**

```
var obj = {value: 1}
var objCopy = JSON.parse(JSON.stringify());
objCopy.value =2;
objCopy.key = 3;
console.log(obj, objCopy) // {value: 1}, {value: 2, key: 2}
```

::: tip 注意
除了第四种深拷贝 `JSON.parse(JSON.stringify())`,其他方式只能做一层拷贝

如果考虑深层的嵌套关系,那么就需要用深拷贝了的,用递归,具体实现可参考[JS 中的深拷贝 Vs 浅拷贝](/fontend/js/shallow-vs-deep-copy)

:::

## 第 2 题- 加号字符串的拼接

```
console.log(1+2+'3'+4);
A: '1234' B: 10 C: '334' D: 334
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

<div align="right">
  <ShareLink />
</div>
<div align="center">
  <DaShang />
</div>
