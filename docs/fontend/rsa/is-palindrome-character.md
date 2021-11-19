---
title: 判断一个字符串是否是回文字符
autoGroup-1: 数组
---

## 判断一个字符串是否是回文字符

## 快速导航

<TOC />

## 描述

给定一个字符,判断是否是回文字符,若是则返回 true，否则返回 false

如: 343,aba,zfz,正过来,反过去都是该字符

## 解析

可以将数字,转化为字符串,在转化为数组,通过 reverse 反转,最后通过 join 方法拼接,与原字符串做一个比较就知道了的

```js
function isHuiWen(number) {
  var result = [...number.toString()].reverse().join('');
  if (number == result) {
    // 注意不要用全等,全等不仅是比较值,还比较类型
    return true;
  } else {
    return false;
  }
}

var num = 323;
isHuiWen(num);
```

## 添加条件,升级回文字符串

给定非空字符串 str,最多可以删除一个字符,判断是否可以成为回文

### 示例如下所示

```js
var str1 = "aba" return true
var str2 = "abca" return true // 删除c即可,是回文
```

### 题解

通过循环,从两侧向中间进行比较,然后解决当出现不同的情况,怎么保证只允许出现一个不同

```js
// 封装一个函数,接收检验回文字符串
function validPalinStr(str) {
  let left = 0; // 左起从0位开始
  let right = str.length - 1; // 右边

  while (left < right) {
    if (str[left] !== str[right]) {
      // 左右两边字符都需要尝试一下,一边返回true就可以了的
      var result =
        isSubPalin(str, left + 1, right) || isSubPalin(str, left, right - 1);
      return result;
    }
  }
  left++;
  right--;
}

function isSubPalin(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // 如果有不同的,返回false
    }
    left++;
    right--;
  }
  return true;
}

console.log('回文验证', validPalinStr('abca'));
console.log('回文验证', validPalinStr('aba'));
console.log('回文验证', validPalinStr('abc'));
console.log('回文验证', validPalinStr('aabsjdbaa'));
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<footer-FeedBack />
