---
title: js如何设置元素的显示和隐藏
autoGroup-5: JS特效
---

## js如何设置元素的显示和隐藏

## 快速导航

<TOC />

## 前言

如何通过单机一个按钮，来达到实现隐藏和显示图片的切换效果

## 示例展示

<jingdiantexiao-elemShowHide />


## 原生js实现

控制元素的隐藏和显示,主要是控制元素的`display:none`或`display:block`,就可以了的,具体示例代码如下所示

```js
// 隐藏或显示元素
function showOrHide() {
    // 得到图片的DOM
    var myImg = document.getElementById("myImg");
    var display = myImg.style.display;   // 获取当前图片的显示的样式,display属性
    if(display !='none') {  // 图片是否是display:none,隐藏
        myImg.style.display = 'none';
    }else {
        myImg.style.display = 'block';  // 取消隐藏
    }
}
```
如下是Html模板代码
```html
<p>
    <input type="button" value="隐藏或显示" onclick="showOrHide()"><br />
    <!--定义图片元素--->
    <img id="myImg" src="xxx.jpg" width="100" height="100" />
</p>
```
## Vue实现的代码

```html
<template>
    <div class="wrap">
        <div>
            <el-button type="primary" @click="handleBtn">{{showText}}</el-button>
        </div>
        <div v-show="isStatus">
            <img class="medium-zoom lazy" loading="lazy" src="https://coder.itclan.cn/images/rightbar/itclancoder-code.jpg" width="120" height="120" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "elemShowHide",
        data() {
            return {
                isStatus: true,
            }
        },

        computed: {
            showText() {
                return this.isStatus == true?'显示':'隐藏'
            }
        },
        
        methods: {
            // 点击按钮,显示和隐藏
            handleBtn() {
                if(this.isStatus) {
                    this.isStatus = true;
                }else {
                    this.isStatus = false;
                }
                this.isStatus = !this.isStatus;
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    display:flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
}
</style>
```
上面用`vue`实现控制元素的显示和隐藏是使用`v-show`,结合`isStatus`的一个状态,`true`或`false`去控制的

相当于就是实现一个开关的功能


## 具体分析

在网页中,控制切换元素的隐藏和显示,是一个比较常见的操作,主要利用的是`display`属性来操作,值如果是`none`那么就是隐藏,如果是显示那就是`block`或``,或`inline-block`都是可以的

而在`Vue`当中控制元素的显示和隐藏使用的是`v-if`或`v-show`,前者将元素从`DOM`移除,后者是通过样式实现的,如果频繁的切换显示和隐藏,那么就用`v-show`的


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />


