---
title: ts-基本数据类型
autoGroup-4: TypeScript基础
---

## ts-基本数据类型

## 快速导航

<TOC />

## 注意事项

1. 不能存储非原有的类型数据
```js
let number = 11;
number = 11;  // 先前已经声明,后面又声明赋值,会报错
// 等价于
let number:number = 11;
// 注意当没有指明数据类型时,那表示时any类型,代表变量可以是任何数据类型
let anything;
anything = 5;
anything = "string"
// 等价于
let anything:any;
```