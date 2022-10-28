---
title: css如何隐藏垂直滚动条但同时需保持滚动
autoGroup-2: 常见实例技巧
---

## css如何隐藏垂直滚动条但同时需保持滚动

## 快速导航

<TOC />

## 前言

在写前端页面时,对于超出的内容,我们希望隐藏,同时保持垂直的滚动,但是又不希望有丑陋的垂直滚动条,那该怎么去实现呢

实现方式有很多种,可以用`iscroll`插件,也可以用css去解决

## 方法1-计算滚动条宽度并隐藏起来

这种方法主要是通过计算滚动条宽度,给隐藏起来的,如下示例所示

<exampleskill-curWidthScroll />

具体片段代码如下所示
::: details 点击即可查看具体代码
```html
<template>
    <div class="wrap">
        <div class="outer-container">
            <div class="inner-container">
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'curWidthScroll'
    }
</script>

<style lang="scss" scoped>
.wrap {
    text-align: center;
}

.outer-container{
	width: 360px;
	height: 200px;
	position: relative;
	overflow: hidden;
    margin: 10px auto;
}
.inner-container{
	position: absolute;
	left: 0;
	top: 0;
	right: -17px;  // 通过移动滚动条,实现隐藏
	bottom: 0;
	overflow-x: hidden;
	overflow-y: scroll;   // 垂直滚动
}
</style>
```
:::

### 方法2-使用三个容器包围起来，不需要计算滚动条的宽度

将内容限制在盒子里面了。这样子就看不到滚动条同时也可以滚动

<exampleskill-curWidthScroll2 />

::: details 具体代码点击即可查看
```html
<template>
    <div class="wrap">
        <div class="outer-container">
            <div class="inner-container">
                <div class="content">
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                   书以启智,技于谋生,活出斜杠,https://video.itclan.cn,tv.itclan.cn,https://nav.itclan.cn
                </div>
         </div>
 </div>
    </div>
</template>

<script>
    export default {
        name:"curWidthScroll2"
    }
</script>

<style lang="scss" scoped>
.content {
    padding: 10px;
}

.outer-container  {
    margin: 0 auto;
}
.content, .outer-container {
  width: 200px;
  height: 200px;
}

.outer-container {
  border: 1px solid #ddd;
  position: relative;
  overflow: hidden;
}

.inner-container {
  position: absolute;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}

.inner-container::-webkit-scrollbar {
  display: none;
}
</style>
```
:::

### 方法3-使用webkit-scorllbar

通过CSS隐藏滚动条的方法，不过这个方法不兼容IE，做移动端的可以使用。 那就是`自定义滚动条的伪对象选择器::-webkit-scrollbar`

```css
.content::-webkit-scrollbar { width: 0 !important }
/*IE 10+*/
.content { -ms-overflow-style: none; }
/*Firefox*/
.content { overflow: -moz-scrollbars-none; }
```
## 总结

上面三种方法都是可以实现,垂直方向内容滚动,同时隐藏掉滚动条的,如果不考虑IE兼容性,那么就可以直接使用第三种方式最简单,当然也可以使用一些第三方库,插件去实现的,比如`iscroll`的,具体用哪个,看自己的项目的,适合自己的才是最好的


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />