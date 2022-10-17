---
title: js如何实现升序和降序
autoGroup-5: JS特效
---

## js如何实现升序和降序

## 快速导航

<TOC />

## 前言

在网页中,实现列表的升序和降序,是一个比较常见的操作,尤其是在做一些数据栓选表格的时候,按照索引,时间等特定的参数,提供升序和降序排列的功能的

## 具体示例

<jingdiantexiao-ascendDes />

## 原生js

在原生`js`中主要是操作`DOM`,遍历节点,通过`removeChild()`删除节点,而使用`appendChild()`添加元素去实现的

代码如下所示
```js
// 排序
function sort() {
    // 获取父级元素DOM
    var ul = document.getElementsByTagName('ul')[0];
    // 判断是否包含子元素
    if(ul.hasChildNodes()) {
        var len = ul.childNodes.length; // 子元素的个数
        var arr = [];   // 新数组变量用于存储节点
        for(var i = 0; i<len;i++) {
            arr[i] = ul.childNodes[0]; // 把节点存入数组
            ul.removeChild(ul.childNodes[0]); // 从第一个元素开始删除
        }
     
        // 倒过来遍历所有的节点,降序
        for(var i = len-1;i>=0;i--) {
            ul.appendChild(arr[i]);   // 添加到ul为子元素
        }
       
       
    }
}
```
如下是`html`结构

```html
<ul>
    <li>小红-1</li>
    <li>张三-3</li>
    <li>李四-4</li>
    <li>王五-5</li>
</ul>
<input type="button" onclick="sort()" value="降序或升序" />
```

## 分析

上面的示例是先把容器`html`内容清空,最后,把数组的数据以倒排序的方式遍历并填充到之前的`ul`容器里面

使用原生js方式就是要遍历`DOM`节点,然后依赖`DOM`对象的属性或方法操作`DOM`的

## Vue版本实现

在`Vue`里面是操作数据,结合数组的`sort`方法一个简单的方法就可以实现的,原生`js`想要实现同样类似的效果,那就得不断的去查找`DOM`节点，操作节点实现的

```html
<template>
    <div class="wrap">
        <div>
            <ul>
                <li v-for="(item,index) in lists" :key="index">{{item.name}}-{{item.lan}}-{{item.chengji}}</li>
            </ul>
        </div>
        <div class="btn">
            <el-button type="primary" @click="handleJiangxu">降序</el-button>
            <el-button type="primary" @click="handleShengxu">升序</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ascendDes',
        data() {
            return {
                lists: [
                    {
                        name: '小王',
                        lan: '语文',
                        chengji: 90
                    },
                    {
                        name: '小红',
                        lan: '语文',
                        chengji: '79'
                    },

                    {
                        name: '小李',
                        lan: '语文',
                        chengji: '71'
                    },

                    {
                        name: '小白',
                        lan: '语文',
                        chengji: '85'
                    }
                ]
            }
        },

        methods: {
            // 降序
            handleJiangxu() {
                this.lists = this.lists.sort((a, b) => a.chengji - b.chengji).reverse()    // 反转一下
            },
            // 升序
            handleShengxu() {
                this.lists = this.lists.sort((a,b)=>a.chengji-b.chengji);
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    text-align: center;
}
.btn {
    margin-top: 20px;
}
</style>
```
使用`vue`实现,发现就很简单,使用`sort(a,b)`方法,其中`a`代表前一个数,`b`代表后一个数,做一个差值,就可以判断哪个大,哪个小的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />