---
title: 纯css实现图片悬停时显示渐变圆形信息浮层
---

## 纯css实现图片悬停时显示渐变圆形信息浮层

## 快速导航

<TOC />

## 示例效果

<template>
    <div class="example-hovercircle">
        <div class="overlay">
            <span>itclanCoder</span>
        </div>
    </div>
</template>
<style scoped>
.example-hovercircle {
    position: relative;
    margin: auto;
    width: 200px;
    height: 200px;
    background: url('https://coder.itclan.net/images/itclancoder.jpeg');
    background-size: cover;
    background-position: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}
.example-hovercircle .overlay {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    margin: auto;
    width: 0px;
    height: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: 0;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
}
.example-hovercircle:hover .overlay {
    opacity: 1;
    width: 100%;
    height: 100%;
}
.overlay span {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    position: absolute;
    margin: auto;
    width: 160px;
    height: 30px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
}
.example-hovercircle:hover .overlay span {
    opacity: 1;
    -webkit-transition: 1.3s ease;
    transition: 1.3s ease;
}
</style>

## 示例代码

:::details 示例代码
```html
<template>
    <div class="example-hovercircle">
        <div class="overlay">
            <span>itclanCoder</span>
        </div>
    </div>
</template>
<style scoped>
.example-hovercircle {
    position: relative;
    margin: auto;
    width: 200px;
    height: 200px;
    background: url('https://coder.itclan.net/images/itclancoder.jpeg');
    background-size: cover;
    background-position: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}
.example-hovercircle .overlay {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    margin: auto;
    width: 0px;
    height: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: 0;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
}
.example-hovercircle:hover .overlay {
    opacity: 1;
    width: 100%;
    height: 100%;
}
.overlay span {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    position: absolute;
    margin: auto;
    width: 160px;
    height: 30px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
}
.example-hovercircle:hover .overlay span {
    opacity: 1;
    -webkit-transition: 1.3s ease;
    transition: 1.3s ease;
}
</style>
```

:::



<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />