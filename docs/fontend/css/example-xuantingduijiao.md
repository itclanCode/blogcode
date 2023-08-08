---
title: 纯CSS3实现悬停时出现对角线耀光效果的按钮
---

## 纯CSS3实现悬停时出现对角线耀光效果的按钮

## 快速导航

<TOC />

## 示例效果

<template>
   <div class="example-xuantingduijiao">
        <div class="btn-wrapper"><a class="btn">悬停对角线耀光</a></div>
   </div>

</template>
<style>
.example-xuantingduijiao {
    background: #BFFFBC;
}
.btn-wrapper {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -28px 0 0 -74.5px;
    box-shadow: 0 0 10px -10px black;
}
.btn {
    display: block;
    background: #A09EBB;
    padding: 20px 40px;
    position: relative;
    z-index: 0;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    color: #FFF;
    border-bottom: 3px solid #6c3b96;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 1px;
}
.btn:after {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    background: white;
    width: 150%;
    height: 100%;
    bottom: -80px;
    right: 40px;
    transform: rotate(30deg);
}
.btn-wrapper:hover {
    box-shadow: 0 10px 20px -10px black;
}
.btn-wrapper:hover a {
    animation: grow 600ms ease-in-out forwards;
}
.btn-wrapper:hover a:after {
    animation: shine 2s ease-in-out forwards;
    animation-iteration-count: infinite;
}
@keyframes shine {
    from {
        transform: translateX(0px) translateY(0px) rotate(30deg);
        opacity: 0.1;
    }
    to {
        transform: translateX(200px) translateY(-300px) rotate(30deg);
        opacity: 1;
    }
}
@keyframes grow {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
}
</style>
<br /><br />

## 示例代码

:::details 示例代码
```html
<template>
   <div class="example-xuantingduijiao">
        <div class="btn-wrapper"><a class="btn">悬停对角线耀光</a></div>
   </div>

</template>
<style>
.example-xuantingduijiao {
    background: #BFFFBC;
}
.btn-wrapper {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -28px 0 0 -74.5px;
    box-shadow: 0 0 10px -10px black;
}
.btn {
    display: block;
    background: #A09EBB;
    padding: 20px 40px;
    position: relative;
    z-index: 0;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    color: #FFF;
    border-bottom: 3px solid #6c3b96;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 1px;
}
.btn:after {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    background: white;
    width: 150%;
    height: 100%;
    bottom: -80px;
    right: 40px;
    transform: rotate(30deg);
}
.btn-wrapper:hover {
    box-shadow: 0 10px 20px -10px black;
}
.btn-wrapper:hover a {
    animation: grow 600ms ease-in-out forwards;
}
.btn-wrapper:hover a:after {
    animation: shine 2s ease-in-out forwards;
    animation-iteration-count: infinite;
}
@keyframes shine {
    from {
        transform: translateX(0px) translateY(0px) rotate(30deg);
        opacity: 0.1;
    }
    to {
        transform: translateX(200px) translateY(-300px) rotate(30deg);
        opacity: 1;
    }
}
@keyframes grow {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
}
</style>
```
:::

实现这个效果,主要是结合css3中的`transform`，以及动画关键帧`@keyframes`实现

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
