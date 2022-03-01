---
title: 找出数组当中指定元素的位置
autoGroup-1: 数组
---

## 快速导航

<TOC />

## 找出数组当中指定元素的位置

## 背景

这是一个在面试当中,经常被问到的题目,也是一个常见的搜索算法

## 示例

```js
var arrs = [8,11,21,-3,67,22,55];
// 8--> 0,11---> 1
```
## 方式1-使用for循环

用给定的值,与原数组中的每个值进行比较,如果相等,那么就返回对应的索引

```js
function findArrIndex(arrs,element) {
    for(var i = 0;i<arrs.length;i++>) {  // 循环遍历数组每一项与指定的元素进行比较
        if(arrs[i] == element) {
            return i;
        }
    }
} 
var arrs = [8,11,21,-3,67,22,55];
console.log(findArrIndex(arrs,67));
```

## 方式2-使用for..of

```js
function findArrIndex(arr,element) {
   var index = 0; 
   for(var item of arr) {
       if(item == element) {
           return index;
       }
       index++;
   }
} 

var arrs = [8,11,21,-3,67,22,55];
console.log(findArrIndex(arrs,67));

```

## 方法3-使用forEach

```js
function findArrIndex(arr,element) {
  var idx = 0;  
  arr.forEach((item,index) => {
      if(item == element) {
          idx = index;
      }
  })
  return idx;  
  
}

var arrs = [8,11,21,-3,67,22,55];
console.log(findArrIndex(arrs,55));
```

## 方法4-使用findIndex

查找数组中素数的元素的索引（如果不存在，则返回-1）

```js
var arrs = [8,11,21,-3,67,22,55];
var index = arrs.findIndex(function(element) {
    return element == 67
})
console.log(index);  // 4
```
给定一个元素,然后在与数组当中进行匹配,直到找到符合条件的元素,我们在返回它在数组当中的所处的位置

在进行线性搜索当中,进行了一个简单的`for循环遍历`数组当中的每一项,在用遍历出来的每一项,和我们传入的元素进行一个匹配,当有相等值的时候,返回它对应的下标,这是线性搜索的一个实现


<footer-FooterLink :isShareLink="true" :isDaShang="true" />
