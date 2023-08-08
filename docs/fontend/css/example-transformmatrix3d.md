---
title: 使用CSS3 transform:matrix3d实现的搜索框变形动画
---

## 使用CSS3 transform:matrix3d实现的搜索框变形动画

## 快速导航

<TOC />

## 示例效果

<exampleskill-transformMatrix3d />

## JQ实现

::: details JQ实现
```js
$(".ion-ios-search").click(function() {
    if (!$(".search").hasClass("active")) {
        $(".search").addClass("active");
    }
})

$(".ion-ios-close-empty").click(function() {
    $(".search").removeClass("active");
})
```
:::
JQ的实现主要是操作DOM,`$`选择器,判断一个元素里面有没有`class`类，可以用`hasClass`方法

给一个元素添加类名使用`addClass('类名')`，而移除元素的类名使用`removeClass('类名')`


## Js实现

::: details JS实现
```js
var ionIosEarch = document.querySelector(".ion-ios-search");
var ionIosCloseEmpty = document.querySelector(".ion-ios-close-empty");

var searchDom = document.querySelector(".search"); 	

ionIosEarch.addEventListener("click", function() {
     searchDom.classList.add('active');
}

ionIosCloseEmpty.addEventListener("click", function() { 
    	 searchDom.classList.remove('active');
}
```
:::
原生Js,主要是获取元素,使用`document.querySelector()`获取元素,给元素添加类名使用`元素.classList.add('类名')`

而移除元素的类名使用`元素.classList.remove('类名')`

## Vue实现

```html
<template>
    <div>
        <div class='background'>
             <div class='main'>
                 <div :class='{active: isActive}' class="search">
                     <input placeholder='Search' type='text'>
                     <i @click="handleSearch" class='icon el-icon-search ion-ios-search'></i>
                     <i @click="handleClose" class='icon el-icon-close ion-ios-close-empty'></i>
                 </div>
                <div class='results'></div>
             </div>
        </div>
    </div>
 </template>
 <script>
export default {
    name: "transformMatrix3d",
    data(){
        return {
            isActive:false,
        }
    },
    methods: {
        handleSearch() {
            this.isActive = true;
        },
        handleClose() {
            this.isActive = false;
        }
    }
}
 </script>
 <style lang="scss" scoped>
.main {
     margin: 100px auto;
     width: 90%;
     max-width: 600px;
 }
 .search {
     width: 40px;
     height: 40px;
     border-radius: 50%;
     background-color: white;
     box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
     text-align: center;
     cursor: pointer;
     overflow: hidden;
     position: relative;
     animation: hide 500ms ease;
     margin: 0px auto;
 }
 .search input {
     display: none;
     position: absolute;
     top: 0;
     bottom: 0;
     position: absolute;
     left: 0px;
     width: 80%;
     border: 0;
     outline: 0;
     border-radius: 5px;
     padding: 5px 20px;
 }
 .search:hover {
     box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
     transform: translateY(-2px);
 }
 .search.active {
     width: 100%;
     border-radius: 5px;
     text-align: left;
     padding: 0 10px;
     animation: show 500ms ease;
     transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
 }
 .search.active input {
     display: block;
 }
 .search.active .ion-ios-search {
     display: none !important;
 }
 .search.active .ion-ios-close-empty {
     float: right;
     display: block !important;
 }
 .search .icon {
     font-size: 1.2em;
     line-height: 40px;
 }
 .search .icon.ion-ios-search {
     display: block;
 }
 .search .icon.ion-ios-close-empty {
     display: none;
     font-size: 1.6em;
     padding: 0px 10px;
 }
 @keyframes hide {
     0% {
         transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
     }
     20% {
         transform: rotate(-5deg) matrix3d(0.8, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 1, 0, 0, -20, 1, 1);
     }
     100% {
         transform: rotate(0deg) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
     }
 }
 @keyframes show {
     0% {
         transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
     }
     10% {
         transform: rotate(10deg) matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 10, 1, 1);
     }
     80% {
         transform: rotate(-5deg) matrix3d(1, 0.1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
     }
     100% {
         transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
     }
 }
 </style>

```
在`Vue`里面,主要逻辑控制里,是通过`data`下面的`isActive`的`boolean`值,动态添加`active`类型

在模板里动态绑定`class`,实现逻辑的控制

利用`transform:matrix3d()`矩阵变换和动画变换

<footer-FooterLink :isShareLink="false" :isDaShang="true" />


