---
title: PC与移动端重置默认样式
autoGroup-1: css基础
---

## 快速导航

<TOC />

## PC 端重置样式

::: details 点击即可查看代码

```css
@charset 'UTF-8';
/**
 * 
 * @authors suibichuanji (itclancode@163.com)
 * @wechatPublic: itclanCoder
 * @version $Id$
 * @description pc端重置样式表
 */
html {
  font: 14px/1.5 'Microsoft YaHei UI', 'Microsoft YaHei', sans-serif;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
html,
body,
div,
object,
iframe,
applet,
object,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
address,
dl,
dt,
dd,
ol,
ul,
li,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
progress {
  margin: 0;
  padding: 0;

  vertical-align: baseline;

  border: 0;
}
li {
  list-style: none;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;

  height: 0;
}
[hidden],
template {
  display: none;
}
a {
  text-decoration: none;

  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
img {
  border: 0;
}
hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}
pre {
  overflow: auto;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
  line-height: normal;

  margin: 0;

  color: inherit;
  outline: none;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type='button'],
input[type='reset'],
input[type='submit'] {
  cursor: pointer;

  -webkit-appearance: button;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;

  border: 0;
}
input {
  line-height: normal;
}
input[type='checkbox'],
input[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}

/* 清除input[type=number]的默认样式 */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  margin: 0;
  height: auto;
  -webkit-appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
}

input[type='search'] {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;

  -webkit-appearance: textfield;
}
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
input:-webkit-autofill {
  background-color: #faffbd;
  background-image: none;
}

/*去除input默认填充的背景颜色*/
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
}

textarea {
  overflow: auto;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
td,
th {
  padding: 0;
}
```

:::

## 移动端重置样式

::: details 点击即可查看代码

```css
@charset "UTF-8";
/**
 * 
 * @authors suibichuanji (itclancode@163.com)
 * @wechatPublic: itclanCoder
 * @description app移动端重置样式表
 */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
ul,
ol {
  list-style: none;
}
strong,
b {
  font-weight: normal;
}
em,
i {
  font-style: normal;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
img {
  vertical-align: middle;

  border: 0;
}
input,
select {
  font-family: arial, '\5FAE\8F6F\96C5\9ED1', sans-serif;
  font-size: 100%;
  line-height: 150%;

  vertical-align: middle;

  -webkit-appearance: none;
  border: none;
  -webkit-appearance: none; /*解决ios上按钮的圆角问题*/
  border-radius: 0; /*解决ios上输入框圆角问题*/
  outline: medium; /*去掉鼠标点击的默认黄色边框*/
  background-color: transparent;
}
a {
  text-decoration: none;

  outline: none;
  background-color: transparent;

  hide-focus: expression(this.hideFocus=true); /*兼容IE写法*/
  -webkit-tap-highlight-color: transparent; /* 在IOS下 点击链接通过js定义的可点击元素的时候，它就会出现一个半透明的灰色背景
如果不要，就transparent*/
  /* -webkit-tap-highlight-color: rgba(255, 255, 255, 0);也可以写成这样，清除移动端 a 标签等点击区域变色 */
}

body {
  font: 14px/1.5 arial, '\5FAE\8F6F\96C5\9ED1', sans-serif, Tahoma, Microsoft
      YaHei, Apple LiGothic medium, Helvetica, Arial, PingFangSC-Regular, '\5b8b\4f53';

  -webkit-text-size-adjust: none; /* 想让网页字体小于12px而不等于12px的需求，那么就可以禁止浏览器文字大小调整功能 none
因为有些英文是需要小于12px的*/
  -ms-text-size-adjust: none;
  -webkit-overflow-scrolling: touch; /*避免ios滑动滚动条卡顿，允许独立的滚动区域和触摸回弹,使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比*/
}
::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-track-piece {
  display: none;
}

::-webkit-scrollbar-thumb:vertical {
  display: none;
}

::-webkit-scrollbar-thumb:horizontal {
  display: none;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/*
       文字大小/行高 文字类型
font:14px/1.5 arial
    14的1.5倍
*/
/*
    outline:none; 轮廓
    hide-focus:expression(this.hideFocus=true); 兼容 针对于IE的写法 效果跟上面一样
*/
/*
-webkit-text-size-adjust:none;
想让网页字体小于12px而不等于12px的需求，那么就可以禁止浏览器文字大小调整功能 none
因为有些英文是需要小于12px的
*/

/*
-webkit-tap-highlight-color:transparent;
在IOS下 点击链接通过js定义的可点击元素的时候，它就会出现一个半透明的灰色背景
如果不要，就transparent
如果要或想设置其他颜色，-webkit-tap-highlight-color: red | green
*/
```

:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
