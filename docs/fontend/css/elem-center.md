---
sidebarDepth: 3
tag: css
title: 元素水平垂直居中
---

# 元素水平垂直居中

## 快速导航

- [前言](#前言)
- [元素水平居中](#元素水平居中) <Badge text="很重要" type="tip"/>
  - [方法-1 行间元素水平居中](#方法-1-行间元素水平居中)
  - [方法-2 块级元素水平居中](#方法-2-块级元素水平居中)
  - [方法-3 浮动元素水平居中](#方法-3-浮动元素居中显示)
  - [方法-4 使用旧的-flex-布局](#方法-4-使用旧的-flex-布局)
  - [方法-5 使用新的-flex-布局](#方法-5-使用新的-flex-布局)
  - [方法-6 使用-css3-中新增的-transform-属性](#方法-6-使用-css3-中新增的-transform)
  - [方法-7 元素使用绝对定位方式](#方法-7-元素使用绝对定位方式)
  - [方法-8 设置-top-left-right-bottom](#方法-8-设置-top-left-right-bottom)

## 前言

关于网页中元素的水平垂直居中的问题,对于前端的小伙伴来说,非常常见,也很重要,同时也是令人非常苦恼的,无论是面试还是笔试都是一个常见的话题,有时候,当别人问到如何让一个元素不定宽高和高,让它居中,或者有哪些水平垂直居中手段时,脑子里却想到的也就一两种,一团糟,非常尴尬,唏嘘不已,今天,我就平时的学习和使用,稍稍做了一下总结,也是对以往知识的一种回顾,跟大家分享一下使用心得,让元素在网页中水平垂直居中不在怕怕

## 元素水平居中 :100: :rocket:

实现元素的水平居中,分为**行间元素**与**块级元素**

- 对于行间元素
  - 特点:
    - 自身不具备宽度,高度,即使给行间元素设置宽高,都不会起作用,由自身内容撑大)
    - 高度能够通过`line-height`来指定
    - 能够给它设置`padding`,但仅仅有`padding-left`和`padding-right`会有效果，没有`padding-top`和`padding-bottom`,即使设置了`padding-top`,`padding-bottom`,也不会生效滴
    - 同理:给元素设置`margin`属性同`padding`属性一样，对行内元素左右有效。上下无效
  - 比如：
    `a(链接)`,`b(加粗)`,`strong(强调)`,`i`,`span`, `img`,`input`,`select` 等
  * 实现方式: `text-align: center`

::: tip
您能列举一下常见的行间元素?区分行间元素与块级元素很重要,html 内容结构就是依赖它来承载内容的
无论是在实际开发中,还是面试中,这都是一个很常见的知识,元素水平居中很重要
:::

::: details 点击可查看常见行间元素

```js
<a>, <b>, <br>, <button>, <del>, <em>, <i>, <iframe>, <img>, <input>, <label>, <strong>
```

:::

### 方法-1-行间元素水平居中 <Badge text="很重要" type="error"/>

html 内容结构代码

```
 <div class="spanParent">
           <span>span等行内元素水平居中</span>
  </div>
  <div class="imgParent">
           <img src="itclanCoder.jpg">
  </div>
```

css 层叠样式代码

```js{3}
.spanParent,.imgParent{
     width:100%;
     text-align:center;   /*文本水平居中,给父级元素设定*/
}
```

对于行间元素,给父级元素设置`text-align: center`属性,就会让子元素在水平方向上居中显示

### 方法-2-块级元素水平居中

- 对于块级元素
  - 特点:
    - 独自占一行,支持宽度和高度,不设置宽度,默认 100%
    * 元素设置 `padding`,`margin`,上下左右,都会生效,注意父子级元素外边距的合并叠加问题
  * 比如(`div`,`p`,`ul`,`li`,`ol`,`h1-h6`,`dl`,`dt`,`dd`,`address`,`article`,`figure`,`audio`,`video`,`section`,`table`,`canvas`,`header`,`table`,`footer`)
  * 实现方式: `margin: 0 auto`

::: warning 温馨提示
您能列出常见的块级元素? 想想平日里常用的块级元素,虽然纯 div+css 一把梭,但是一些新增的 H5 特性,语义化标签,利于搜索引擎优化,是有必要去了解学习下的
:::

::: details 点击可查看常见块级元素

```js
<address>, <button>, <caption>, <dd>, <del>, <div>, <dl>, <dt>, <form>, <h1>--<h6>, <iframe>, <li>
<object>, <ol>, <p>, <table>, <tbody>, <td>, <th>, <thead>, <tr>, <ul> <section>,<table>,<canvas>,<header>,<table>,<footer>
```

:::

示例代码如下:

html 内容结构代码

```
<div class="box"></div>
```

css 层叠样式代码

```js{5}
.box{
        width:100px;
        height:100px;
        background:yellow;
        margin:0 auto;    /*水平居中,上下外边距为0,左右居中*/
}
```

实现效果图,如下所示
<img class="medium-zoom lazy" loading="lazy"  src ="../images/css-article-imgs/1-center/1-block.jpg" alt="块级元素水平居中" />

### 方法-3-浮动元素居中显示

当一个元素设置浮动后,无论它是行间元素还是块级元素,让该元素水平居中,无论您是使用`text-align: center`还是`margin: 0 auto`,都是无法让该元素水平方向居中的

**原因**:浮动元素破坏了页面的文档流,优先级要高于未设置浮动的元素,设置上面两个属性都不起作用

**解决办法**: 父级元素宽度设置`fit-content`,并且配合`margin: 0 auto`使用,即可解决

**注意** <Badge text="特别提醒" type="tip"/>

这个属性值`fit-content`配上`margin:0 auto`才会让其水平居中,目前只有`chrome`,`firfox`,`Opera`浏览器支持该属性值,并且`只能实现水平居中,无法实现垂直居中`,也`没有height:fit-content该属性`,即使设置了也不生效

示例代码如下所示

```
<ul class="parent">
  <li>随笔川迹</li>
  <li>itclanCoder</li>
  <li>个人简介</li>
  <li>联系地止</li>
</ul>
```

css 层叠样式代码

```js{12,13,14,16}
ul,li {
  list-style: none;
}

li {
  float: left;/*子元素设置了浮动*/
  padding: 0 10px;
}

.parent js{5} {
  /*父元素宽度设置fit-content,高度是没有这样的写法的*/
  width:-moz-fit-content;  // 兼容火狐写法
  width:-webkit-fit-content; // 兼容chrome
  width: fit-content;        // 标准写法
  /*注意只设置得了水平居中,此方法,垂直居中不生效*/
  margin: 0 auto;
}

```

查看属性在各个浏览器的兼容性:[can I use](https://caniuse.com/)

实现效果如下所示
<img class="medium-zoom lazy" loading="lazy"  src ="../images/css-article-imgs/1-center/2-float-center.png" alt="浮动元素水平居中" />

::: tip 温馨提示 :cold_sweat
让一个浮动元素水平居中,在您不知道 width: fit-content,结合 margin: 0 auto 使用之前,是不是令人很头痛呢,浮动解决不了的,就定位

:::

### 方法-4-使用旧的-flex-布局

让一个元素居中,使用 flex 布局方式

- 老版本:设置父元素`display:box`;(声明弹性盒模型),
- `box-orient:horizontal`;(父元素设置,用来确定子元素的方向,是横着的还是竖着的,`horizontal`是横着(水平),`vertical`表示竖着,垂直,)
- `box-pack:center;`(决定盒子内部剩余空间的对齐表现,这里是居中,均等地分割多余空间)

html 结构代码示例代码如下

```
<div class="parent">
       <div class="son"></div>
</div>
```

css 层叠样式代码

```js{21, 23}
.parent{
    /*声明弹性盒子模型*/
    display:-webkit-box;
    /*用来确定子元素的方向,是横着的还是竖着的,horizontal是横着的*/
    -webkit-box-orient:horizontal;
    /*决定盒子剩余空间的利用对齐方式,center表示居中*/
    -webkit-box-pack:center;
    /*firefox*/
    display:-moz-box;
    -moz-box-orient:horizontal;
    -moz-box-pack:center;
    /*opera*/
    display:-o-box;
    -o-box-orient:horizontal;
    -o-box-pack:center;
    /*IE浏览器*/
    display:-ms-box;
    -ms-box-orient:horizontal;
    -ms-box-pack:center;
    /*标准浏览器*/
    display:box;
    box-orient:horizontal;
    box-pack:center;
}
.son{
    width:100px;
    height:100px;
    background:red;
}
```

实现效果图示例:
<img class="medium-zoom lazy" loading="lazy"  src ="../images/css-article-imgs/1-center/3-box-pack-center.png" alt="旧版弹性盒模型flex-box-pack-center" />

### 方法-5-使用新的-flex-布局

- 新版本:设置父元素`display:flex`(声明弹性盒模型)
- `flex-direction:row`(设置主轴方向为水平方向)
- `just-content:center`(规定主轴方向富裕空间的管理,所有子元素的居中,对应老版本的`box-pack`)

示例代码所示:

html 内容结构代码

```
<div class="parent">
       <div class="son"></div>
 </div>
```

css 层叠样式代码

```js{5,6,7}
.parent{
    display:-webkit-flex;      /*声明弹性盒模型,定义弹性容器*/
    -webkit-flex-direction:row; /*row设置主轴方向为水平方向*/
    -webkit-justify-content:center; /*定义了在当前行上,弹性项目沿主轴如何排布*/
    display:flex;
    flex-direction:row;
    justify-content:center;  /*相当于老版本的box-pack*/
}
.son{
    width:100px;
    height:100px;
    background:blue;
 }
```

示例效果如下所示
<img class="medium-zoom lazy" loading="lazy"  src ="../images/css-article-imgs/1-center/4-just-content.png" alt="新版的flex布局just-content实现居中" />

### 方法-6-使用-css3-中新增的-transform

父元素相对定位,子元素设置绝对定位`position: absolute`,同时`left:50%`,利用`transform:translate(-50%, 0)`离 x 轴 50%

html 结构代码

```
<div class="parent">
        <div class="son"></div>
</div>

```

css 结构内容代码

```js{2,8,9,10}
.parent{
    position:relative;  /*相对定位*/
}
.son{
    width:100px;
    height:100px;
    background:pink;
    position:absolute;
    left:50%;
    transform:translate(-50%,0);/*设置子元素transform:translate(-50%,0)*/
}
```

示例效果如下所示
<img class="medium-zoom lazy" loading="lazy"  src ="../images/css-article-imgs/1-center/5-transform.png" alt="transform实现水平居中" />

### 方法-7-元素使用绝对定位方式

以及负值的`margin-left`负半值

子元素设置如下

示例代码如下所示:

html 内容结构代码

```
<div class="parent">
    <div class="son"></div>
</div>
```

css 层叠样式结构代码

```js{2,5,6,7}
.parent{
    position:relative;
}
.son{
    width:100px;
    height:100px;
    position:absolute;
    left:50%;
    margin-left:-50px; /*-宽度/2*/
    background:green;
}
```

示例效果如下所示
<img class="medium-zoom lazy" loading="lazy"  src ="../images/css-article-imgs/1-center/6-margin-left.png" alt="margin负半值" />

::: tip 温馨提示
此方法只适合给定指定的固定宽度
:::

### 方法-8-设置-top-left-right-bottom

子元素使用绝对定位方式`position:absolute`以及`top,left:0,right:0;bottom:0`,属性值设置为`0`,`margin:0 auto`;
html 内容结构代码

```
<div class="parent">
    <div class="son"></div>
</div>

```

css 层叠样式

```js{2,6,7,8,9,10}
.son{
    position:absolute;  /*设置绝对定位*/
    width:100px;        /*宽度固定*/
    height:100px;
    background:#abcdef;
    top:0;
    left:0;       /*设置top | left | right | bottom都等于0*/
    right:0;
    bottom:0;
    margin:0 auto;
}
```

实例效果图如下所示
<img class="medium-zoom lazy" loading="lazy"  src ="../images/css-article-imgs/1-center/7-top-left-right-bottom.png" alt="top-right-left-bottom都为零" />
