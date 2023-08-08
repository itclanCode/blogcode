---
title: 纯CSS实现的一个对角线填充颜色的按钮悬停动效
---

## 纯CSS实现的一个对角线填充颜色的按钮悬停动效

## 快速导航

<TOC />

## 示例效果

<br /><br />

<template>
   <div class="example-duijiaobtn">
        <div class="button_container">
           <button class="btn"><span>悬停动效</span></button>
        </div>
   </div>
</template>
<style scoped>
.example-duijiaobtn {
    margin: 0;
    height: 100%;
    background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
.button_container {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
}
.button_container p {
    font-family: 'Amatic SC', cursive;
    text-align: center;
    font-size: 35px;
}
.btn {
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    background-color: #222;
    padding: 17px 60px;
    margin: 0 auto;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);
}
.btn span {
    position: relative;
    z-index: 1;
}
.btn:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: #78c7d2;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
}
.btn:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
</style>
<br /><br />

## 示例代码

:::details 示例代码
```html
<template>
   <div class="example-duijiaobtn">
        <div class="button_container">
           <button class="btn"><span>悬停动效</span></button>
        </div>
   </div>
</template>
<style scoped>
.example-duijiaobtn {
    margin: 0;
    height: 100%;
    background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
.button_container {
    position: absolute;
    left: 0;
    right: 0;
    top: 30%;
}
.button_container p {
    font-family: 'Amatic SC', cursive;
    text-align: center;
    font-size: 35px;
}
.btn {
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    background-color: #222;
    padding: 17px 60px;
    margin: 0 auto;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);
}
.btn span {
    position: relative;
    z-index: 1;
}
.btn:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: #78c7d2;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
}
.btn:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
</style>
```
:::

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />
