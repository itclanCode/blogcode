---
title: 表单输入框聚焦效果
autoGroup-2: 常见实例技巧
---

## 快速导航

<TOC />

## 单个输入框表单聚焦时输入框变化

<form-singleInputFocus />

::: details 点击即可查看代码
html 结构代码

```html
<input type="text" placeholder="请输入您的姓名" />
```

css 代码,当然你使用类选择器也是可以的,这里我使用了 css 的属性选择器
关于选择器的优先级,可自行尝试测试:`内联样式` > `ID 选择器` > `类选择器` = `属性选择器` = `伪类选择器` > `标签选择器` = `伪元素选择器`

具体可参考文档[css 样式优先级](https://www.runoob.com/w3cnote/css-style-priority.html)

```css
input[type='text'] {
  height: 40px;
  width: 200px;
  background: transparent; // 背景透明
  border: none;
  border-bottom: 1px solid #999;
  text-indent: 20px;
  transition: 0.3;
  outline: none;
}
input[type='text']:hover {
  // 鼠标经过输入框时,更改border颜色
  border-color: #42b983;
}

input[type='text']:focus {
  // 鼠标聚焦焦点时
  border-bottom-color: #f1190d;
}

input[type='text']::-webkit-input-placeholder {
  // 实现该效果主要在这里
  transition: 0.5s; // 过度0.5s
  font-size: 14px; // 字体变为14px
  transform-origin: top left; // 属性允许您改变被转换元素的位置,从上到左,x轴水平方向top,y轴垂直方向left
}

input[type='text']:focus::-webkit-input-placeholder {
  transform: scale(0.8) translateY(-10px); // 缩小0.8倍,同时向上垂直方向平移10px
}
```

:::

## 多个输入框表单聚焦时输入框变化

<form-mulInputFocus />

::: details 点击即可查看代码

```css
input[type='text'],
input[type='password'] {
  height: 40px;
  width: 200px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #999;
  text-indent: 20px;
  transition: 0.3;
  outline: none;
}
input[type='text']:hover,
input[type='password']:hover {
  border-color: #42b983;
}

input[type='text']:focus,
input[type='password']:focus {
  border-bottom-color: #f1190d;
}

input[type='password']::-webkit-input-placeholder,
input[type='text']::-webkit-input-placeholder {
  transition: 0.5s;
  font-size: 14px;
  transform-origin: top left;
}
input[type='password']:focus::-webkit-input-placeholder,
input[type='text']:focus::-webkit-input-placeholder {
  transform: scale(0.8) translateY(-10px);
}
```

:::

## 分析

实现这一效果,主要在于`-webkit-input-placeholder`这个伪元素的方式,结合 css 中的变换`transform`,缩小`scale`,与`垂直方向平移`

具体关于伪类与伪元素,可见[伪类与伪元素](./css-pseudo-class-pseudo-el)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
