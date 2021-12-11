---
title: 拼接字符串-用逗号/或其他符号分隔
autoGroup-2: 字符串
---

## 拼接字符串-用逗号/或其他符号分隔

## 快速导航

<TOC />

## 需求背景

在做一些表单数据提交时,向后端提交数据,在前台,往往需求拼接字符串,传给后端

比如:[城市地级选择](../css/business-city-choice/),这里面的选择投放地区,需要把后面的省市拼接成字符串,传给后端

## 实例代码如下

```js
function getSplitStr() {
    var arrs = ["张三","李四","王五"];
    var targetStr = "";
    if(arrs.length>0) {
        for(var i = 0;i<arrs.length;i++) {
            targetStr +=  arrs[i]+','
        }
        if(targetStr.length) {
            targetStr = targetStr.substr(0,targetStr.length-1)
        }
        return targetStr;
    }else {
        return targetStr = "";
    }
}

getSplitStr();
```

## 方法2-直接使用join方法

```js
function getSplitStr(arr) {
    let targetStr = "";
    if(arr.length) {
        return targetStr = arr.join(',');
    }else {
        return targetStr;
    }
}

getSplitStr(["张三","李四","王五"]); // "张三,李四,王五"
```