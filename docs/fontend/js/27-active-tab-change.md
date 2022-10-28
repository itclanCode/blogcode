---
title: Js如何实现激活菜单按钮样式的切换-凸显正在浏览的菜单项的导航菜单
autoGroup-5: JS特效
---

## Js如何实现激活菜单按钮样式的切换-凸显正在浏览的菜单项的导航菜单

## 快速导航

<TOC />


## 前言

用户在浏览网页时,点击哪个菜单,当前菜单样式激活,其实就是实现一个简单的选项卡切换

## 示例

<jingdiantexiao-activeTab />

## 原生js示例代码

```js
function init() {
    // 得到菜单的DOM
    var lis = document.querySelectorAll("ul>li");
    // 遍历所有的菜单项
    for(let i = 0;i<lis.length;i++) {
        lis[i].index = i; // 记录当前下标
        // 给li的所有元素添加点击事件
        lis[i].onclick = function() {
            for(let j =0;j<lis.length;j++) {
                // 先去掉所有的样式类
                lis[j].className = '';
            }
             // 当前点击的按钮核索引对应的添加active类名
            this.className='activeTab';
        }
       
        
    }
}
init();
```
上面是一种比较常见的写法,也可以这么写的,使用`forEach`
```js
function init() {
    // 得到菜单的DOM,li列表
    var lis = document.querySelectorAll("ul>li");
    // 1. 先遍历所有的菜单项
    lis.forEach(function(item, index) {
        // 给每个按钮添加点击事件
        item.onclick = function() {
            // 给li取消里面所有的active类名
            lis.forEach(function(t,i) {
                t.className = '';
            })
            item.className="activeTab"
        }
    })
}
init();

```
上面的两种方式的写法,各有特点,第一种是使用`for循环`,第二种是使用`forEach`,但是始终需要嵌套两次循环遍历,都是先去掉所有的样式,然后给当前的按钮添加激活类

添加索引这种,在原生`js`里是一种比较常见的编程手段

具体的`html`代码如下所示
```html
<ul class="menu" id="menu">
    <li>客来影视TV</li>
    <li>IT资源网</li>
    <li>IT资源导航</li>
    <li>客来游戏</li>
</ul>
```
如下css代码
```css

.menu {
    list-style: none;
    width: 400px;
    margin: 10px auto;
}

.menu li {
    float: left;
    width: 98px;
    border: 1px solid #000;
    text-align: center;
}

.menu a{
    color:#000;
    width: 100%;
}

.menu li:hover {
    background: pink;
}

.activeTab {
    background:pink;
}
      
```

## Vue版本实现


<template>
    <div class="example">
        <ul class="menu">
            <li v-on:click="handleTab(index)" 
                :class='currentIndex==index?"activeTab":""' 
                v-for="(item,index) in lists" 
                :key="index">
                <a href="javascript:;">{{item}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
           currentIndex: 0,
           lists: ["客来影视TV","IT资源网","IT资源导航","客来游戏"]
        }
    },

    methods: {
        handleTab(index) {
            this.currentIndex = index;
        }
    }
}
</script>

<style>
.menu {
    list-style: none;
    width: 400px;
    margin: 10px auto;
}

.menu li {
    float: left;
    width: 98px;
    border: 1px solid #000;
    text-align: center;
}

.menu a{
    color:#000;
    width: 100%;
}

.menu li:hover {
    background: pink;
}

.activeTab {
    background:pink;
}
</style>  
<br />

用`vue`实现也很简单,如下代码所示

::: details 点击即可查看示例源码
```html

<template>
    <div class="example">
        <ul class="menu">
            <li v-on:click="handleTab(index)" 
                :class='currentIndex==index?"activeTab":""' 
                v-for="(item,index) in lists" 
                :key="index">
                <a href="javascript:;">{{item}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
           currentIndex: 0,
           lists: ["客来影视TV","IT资源网","IT资源导航","客来游戏"]
        }
    },

    methods: {
        handleTab(index) {
            this.currentIndex = index;
        }
    }
}
</script>

<style>
.menu {
    list-style: none;
    width: 400px;
    margin: 10px auto;
}

.menu li {
    float: left;
    width: 98px;
    border: 1px solid #000;
    text-align: center;
}

.menu a{
    color:#000;
    width: 100%;
}

.menu li:hover {
    background: pink;
}

.activeTab {
    background:pink;
}
</style>  
            
```
:::


## 总结

当知道原生`js`的实现方式后,在使用`vue`或别的一些框架去实现同样类似的效果时,会发现,只是语法的表现形式有些区别的

使用框架当中的一些语法糖来实现,实现比较快,而不用跟原生`js`的,频繁的操作`DOM`

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />