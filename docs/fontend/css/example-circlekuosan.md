---
title: 纯css3实现元素定点圆环扩散动画
---

## 纯css3实现元素定点圆环扩散动画

## 快速导航

<TOC />

## 示例效果

<template>
   <div class="example-circlekuosan">
       <div class="circle-btn"></div>
   </div>
</template>
<style scoped>
    .example-circlekuosan {
        display:flex;
        justify-content:center;
    }
    .circle-btn {
        width: 8px;
        height: 8px;
        overflow: hidden;
        background-color: rgb(252,145,104);
        border-radius: 100%;
        box-shadow: 0 0 0 0 rgba(236, 169, 69, 0.7);
        cursor: pointer;
        animation: pulsedb 2.25s infinite cubic-bezier(0.36, 0, 0, 1);
    }
    @keyframes pulsedb {
        0% {
           box-shadow: 0 0 0 0 rgba(236, 169, 69, 0.7); 
        }
        100% {
            box-shadow: 0 0 0 15px rgba(236, 169, 69, 0);
        }
    }
</style>


## 示例代码

```html
<template>
   <div class="example-circlekuosan">
       <div class="circle-btn"></div>
   </div>
</template>
<style scoped>
    .example-circlekuosan {
        display:flex;
        justify-content:center;
    }
    .circle-btn {
        width: 8px;
        height: 8px;
        overflow: hidden;
        background-color: rgb(252,145,104);
        border-radius: 100%;
        box-shadow: 0 0 0 0 rgba(236, 169, 69, 0.7);
        cursor: pointer;
        animation: pulsedb 2.25s infinite cubic-bezier(0.36, 0, 0, 1);
    }
    @keyframes pulsedb {
        0% {
           box-shadow: 0 0 0 0 rgba(236, 169, 69, 0.7); 
        }
        100% {
            box-shadow: 0 0 0 15px rgba(236, 169, 69, 0);
        }
    }
</style>
```

<footer-FooterLink :isShareLink="false" :isDaShang="true" />



