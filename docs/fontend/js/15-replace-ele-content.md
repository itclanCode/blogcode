---
title: js如何替换元素内容
autoGroup-5: JS特效
---

## js如何替换元素内容

## 快速导航

<TOC />

## 前言

我们网页中元素的内容有的是静态的,有的是动态的,特别是在一些网页交互的网页特效里,应用比较多,如何简单的替换元素的内容

## 具体示例

<jingdiantexiao-replaceElem />

## 原生JS实现

在原生`js`中主要通过`DOM`提供的属性去修改的,遵循`js`的一个使用规范,获取元素，绑定事件，操作`DOM`
```js
// 
function replaceElem() {
    // get elem
    var myDom = document.getElementById("myDom");
    myDom.innerHTML = '<span>要修改替换的内容</span>'
}
```
以下是`html`
```html
<p id="myDom">
    <a>我是一个链接</a>
</p>
```

## Vue代码实现

```html
<template>
    <div class="wrap">
        <div class="input-wrap">
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
            <el-button slot="append" @click="handleReplace">替换元素</el-button>  
        </div>
        <div><el-link type="primary" :href="url">{{url}}</el-link></div> 
    </div>
</template>

<script>
    export default {
        name: "replaceElem",
        data() {
            return {
                input: '',
                url:'https://tv.itclan.cn'
            }
        },

        methods: {
            handleReplace() {
                if(this.input) {
                    this.url = this.input;
                    this.input = '';
                }else {
                    this.$message.error('输入框内不能为空');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    width: 400px;
    text-align: center;
    margin: 20px auto;
}

.input-wrap {
    display:flex;
    justify-content: center;
    margin-bottom: 20px;
}
</style>
```

## 分析

在原生`js`当中,`innerHTML`是`DOM`元素对象一个非常重要的属性,可以获取元素整个节点的内容,包括标签元素,表示元素的所有内容,包括子元素,文本等

注意要与`innerText`区分,`innerText`只可以获取文本节点内容,如果仅是修改`DOM`元素节点文本内容,使用`innerText`也是可以的

而在`vue`里面,并不是通过操作`DOM`去实现的,而是操作数据,通过操作数据实现的,与原生`js`的使用是有差异的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />


