---
title: CSS3标题文本后的横线
---

## CSS3标题文本后的横线

## 快速导航

<TOC />

## 示例效果

<template>
   <div>
        <h2 class="background">删除线</h2>
        <h2 class="background"><span>左右两侧线</span></h2>
        <h2 class="background double"><span>双层线</span></h2>
        <h2 class="no-background"><span>左右两侧线</span></h2>
        <h2 class="no-span">左右两侧线</h2> 
   </div>
</template>
<style scoped>
h2 {
    font: 33px sans-serif;
    margin-top: 30px;
    text-align: center;
    text-transform: uppercase;
}
h2.background {
    position: relative;
    z-index: 1;
}
h2.background:before {
    border-top: 2px solid #dfdfdf;
    content: "";
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 95%;
    z-index: -1;
}
h2.background span {
    background: #fff;
    padding: 0 15px;
}
h2.double:before {
    border-top: none;
}
h2.double:after {
    border-bottom: 1px solid blue;
    -webkit-box-shadow: 0 1px 0 0 red;
    -moz-box-shadow: 0 1px 0 0 red;
    box-shadow: 0 1px 0 0 red;
    content: "";
    /* this centers the line to the full width specified */
    margin: 0 auto;
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    width: 95%;
    z-index: -1;
}
h2.no-background {
    position: relative;
    overflow: hidden;
}
h2.no-background span {
    display: inline-block;
    vertical-align: baseline;
    zoom: 1;
    *display: inline;
    *vertical-align: auto;
    position: relative;
    padding: 0 20px;
}
h2.no-background span:before,
h2.no-background span:after {
    content: '';
    display: block;
    width: 1000px;
    position: absolute;
    top: 0.73em;
    border-top: 1px solid red;
}
h2.no-background span:before {
    right: 100%;
}
h2.no-background span:after {
    left: 100%;
}
h2.no-span {
    display: table;
    white-space: nowrap;
}
h2.no-span:before,
h2.no-span:after {
    border-top: 1px solid green;
    content: '';
    display: table-cell;
    position: relative;
    top: 0.5em;
    width: 45%;
}
h2.no-span:before {
    right: 1.5%;
}
h2.no-span:after {
    left: 1.5%;
}
</style>


## 示例代码

:::details 示例代码
```html
<template>
   <div>
        <h2 class="background">删除线</h2>
        <h2 class="background"><span>左右两侧线</span></h2>
        <h2 class="background double"><span>双层线</span></h2>
        <h2 class="no-background"><span>左右两侧线</span></h2>
        <h2 class="no-span">左右两侧线</h2> 
   </div>
</template>
<style scoped>
h2 {
    font: 33px sans-serif;
    margin-top: 30px;
    text-align: center;
    text-transform: uppercase;
}
h2.background {
    position: relative;
    z-index: 1;
}
h2.background:before {
    border-top: 2px solid #dfdfdf;
    content: "";
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 95%;
    z-index: -1;
}
h2.background span {
    background: #fff;
    padding: 0 15px;
}
h2.double:before {
    border-top: none;
}
h2.double:after {
    border-bottom: 1px solid blue;
    -webkit-box-shadow: 0 1px 0 0 red;
    -moz-box-shadow: 0 1px 0 0 red;
    box-shadow: 0 1px 0 0 red;
    content: "";
    /* this centers the line to the full width specified */
    margin: 0 auto;
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    width: 95%;
    z-index: -1;
}
h2.no-background {
    position: relative;
    overflow: hidden;
}
h2.no-background span {
    display: inline-block;
    vertical-align: baseline;
    zoom: 1;
    *display: inline;
    *vertical-align: auto;
    position: relative;
    padding: 0 20px;
}
h2.no-background span:before,
h2.no-background span:after {
    content: '';
    display: block;
    width: 1000px;
    position: absolute;
    top: 0.73em;
    border-top: 1px solid red;
}
h2.no-background span:before {
    right: 100%;
}
h2.no-background span:after {
    left: 100%;
}
h2.no-span {
    display: table;
    white-space: nowrap;
}
h2.no-span:before,
h2.no-span:after {
    border-top: 1px solid green;
    content: '';
    display: table-cell;
    position: relative;
    top: 0.5em;
    width: 45%;
}
h2.no-span:before {
    right: 1.5%;
}
h2.no-span:after {
    left: 1.5%;
}
</style>
```
:::

实现左右两边有线,加上横线,主要是利用伪元素去实现的,通过`::before`或`::after`，在页面中,去增加一个新的元素

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />