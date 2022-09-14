---
title: jQ中如何选择所有的元素
---

## jQ如何选择所有的元素

## 快速导航

<TOC />

如今,虽然框架大道其行,但是原生`js`,`jQ`依旧强大无比,`jQ`操作`DOM`仍然是比较强大的

JQ的使用如下所示

1. 选择要操作的`DOM`
2. 使用`Jquery`提供的函数操作`DOM`或`css`

在获取目标`DOM`后,`jQ`会把这些`DOM`对象包装成`Jquery`对象,这些对象除了拥有`DOM`的属性和函数外,还同时拥有`Jquery`提供的强大函数

:::: tabs type:border-card
::: tab 实例描述 lazy
选择要操作的`DOM`,使用`jQ`提供的函数操作`DOM`或`css`,在获取目标`DOM`后,`jQ`会把这些`DOM`对象包装成`Jquery`对象,这些对象除了拥有`DOM`的属性和函数外,还同时拥有`Jquery`提供的强大函数
:::
::: tab javascript lazy
```js
function selectAll() {
    // 选择元素的函数
    alert('本网页总元素的个数是',$('*').lenght)
}
```
:::
::: tab 实例分析 lazy
使用`*`可以获取页面上所有标签元素,它与`css`选择器的模式一样
:::
::::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />