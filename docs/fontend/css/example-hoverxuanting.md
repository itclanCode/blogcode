---
title: 纯CSS3实现2个的鼠标悬停文本下划线动画效果
---

## 纯CSS3实现2个的鼠标悬停文本下划线动画效果

## 快速导航

<TOC />

## 示例效果

<template>
   <div>
        <div>
             <p>
    "网名:随笔川迹，别名"川川"，<a class="link-1" href="#">微信同号(suibichuanji)</a>，用笔尖下的文字随性而写. 不拘泥于技术，希望能在岁月的侵蚀中留下自己一点足迹，让<a class="link-2">成长有迹可寻</a>,努力成为一个有故事的人
</p>
        </div>
   </div>
</template>
<style>
a {
    cursor: pointer;
}
strong {
    margin-top: 16px;
    display: block;
    font-weight: 700;
}
p {
    padding: 24px;
    max-width: 760px;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.9;
}
.link-1 {
    position: relative;
    text-decoration: none;
    display: inline-block;
    color: black;
    padding: 0 1px;
    -webkit-transition: color ease 0.3s;
    transition: color ease 0.3s;
}
.link-1::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 5%;
    left: 0;
    bottom: 0;
    background-color: #00B388;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
}
.link-1:hover {
    color: white;
}
.link-1:hover::after {
    height: 100%;
}
.link-2 {
    position: relative;
    text-decoration: none;
    display: inline-block;
    color: black;
    padding: 0 1px;
    -webkit-transition: color ease 0.3s;
    transition: color ease 0.3s;
}
.link-2::before,
.link-2::after {
    content: '';
    position: absolute;
    background-color: #00B388;
    z-index: -1;
    height: 5%;
}
.link-2::before {
    width: 0%;
    left: 0;
    bottom: 0;
    -webkit-transition: width ease 0.4s;
    transition: width ease 0.4s;
}
.link-2::after {
    width: 100%;
    left: 0;
    bottom: 0;
    -webkit-transition: all ease 0.6s;
    transition: all ease 0.6s;
}
.link-2:hover::before {
    width: 100%;
}
.link-2:hover::after {
    left: 100%;
    width: 0%;
    -webkit-transition: all ease 0.2s;
    transition: all ease 0.2s;
}

</style>

## 示例代码

:::details 示例代码
```html
<template>
   <div>
        <div>
             <p>
    "网名:随笔川迹，别名"川川"，<a class="link-1" href="#">微信同号(suibichuanji)</a>，用笔尖下的文字随性而写. 不拘泥于技术，希望能在岁月的侵蚀中留下自己一点足迹，让<a class="link-2">成长有迹可寻</a>,努力成为一个有故事的人
</p>
        </div>
   </div>
</template>
<style>
a {
    cursor: pointer;
}
strong {
    margin-top: 16px;
    display: block;
    font-weight: 700;
}
p {
    padding: 24px;
    max-width: 760px;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.9;
}
.link-1 {
    position: relative;
    text-decoration: none;
    display: inline-block;
    color: black;
    padding: 0 1px;
    -webkit-transition: color ease 0.3s;
    transition: color ease 0.3s;
}
.link-1::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 5%;
    left: 0;
    bottom: 0;
    background-color: #00B388;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
}
.link-1:hover {
    color: white;
}
.link-1:hover::after {
    height: 100%;
}
.link-2 {
    position: relative;
    text-decoration: none;
    display: inline-block;
    color: black;
    padding: 0 1px;
    -webkit-transition: color ease 0.3s;
    transition: color ease 0.3s;
}
.link-2::before,
.link-2::after {
    content: '';
    position: absolute;
    background-color: #00B388;
    z-index: -1;
    height: 5%;
}
.link-2::before {
    width: 0%;
    left: 0;
    bottom: 0;
    -webkit-transition: width ease 0.4s;
    transition: width ease 0.4s;
}
.link-2::after {
    width: 100%;
    left: 0;
    bottom: 0;
    -webkit-transition: all ease 0.6s;
    transition: all ease 0.6s;
}
.link-2:hover::before {
    width: 100%;
}
.link-2:hover::after {
    left: 100%;
    width: 0%;
    -webkit-transition: all ease 0.2s;
    transition: all ease 0.2s;
}
</style>
```
:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />