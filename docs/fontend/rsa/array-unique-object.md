---
title: 数组对象去重
autoGroup-1: 数组
---

## 数组对象去重

## 快速导航

<TOC />

## 数组对象去重

## 背景

对于数组中有诸多对象,有时候,需要将数组对象进行去重处理,在本博客中的表格中就有用到的

很多相同的标签,需要对标签进行过滤,把相同的给去掉

如下所示

```js
var arr = [
    {
        id: 1,
        value: 'JavaScript'
     }, {
        id: 2,
        value: '小程序'
     }, {
       id: 3,
       value: '云开发'
    },{
       id: 4,
       value: 'JavaScript'
    },{
       id: 5,
       value: '小程序'
    }
];
```
最终结果
```js
var arr = [
    {
        id: 1,
        value: 'JavaScript'
     }, {
        id: 2,
        value: '小程序'
     }, {
       id: 3,
       value: '云开发'
    }
];
```

## 方法1-利用对象访问属性的方法，判断对象中是否存在key

```js
var arr = [
    {
        id: 1,
        value: 'JavaScript'
     }, {
        id: 2,
        value: '小程序'
     }, {
       id: 3,
       value: '云开发'
    },{
       id: 4,
       value: 'JavaScript'
    },{
       id: 5,
       value: '小程序'
    }
];
var result = [];
var obj = {};
for(var i =0; i<arr.length; i++){
    if(!obj[arr[i].value]){
        result.push(arr[i]);
        obj[arr[i].value] = true;
    }
}
console.log(result);
```

## 方法2-利用reduce方法遍历数组

`reduce`第一个参数是遍历需要执行的函数，第二个参数是`item`的初始值

```js
var arr = [
    {
        id: 1,
        value: 'JavaScript'
     }, {
        id: 2,
        value: '小程序'
     }, {
       id: 3,
       value: '云开发'
    },{
       id: 4,
       value: 'JavaScript'
    },{
       id: 5,
       value: '小程序'
    }
];
 var obj = {};
  arr = arr.reduce((item, next)=> {
   obj[next.value] ? '' : obj[next.value] = true && item.push(next);
   return item;
  }, []);
console.log(arr);
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<footer-FeedBack />