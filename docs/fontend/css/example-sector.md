---
title: 实现扇形生成器
autoGroup-2: 常见实例技巧
---

## 实现扇形生成器

<TOC />

## svg扇形

<exampleskill-svgSector />

## 模拟三角

<exampleskill-trangle />

## 使用conic-gradient属性

圆锥形渐变

<exampleskill-gradient />


::: tip 注意事项
`conic-gradient `支持性不是很好，谨慎使用，目前只在chrome 69及以上支持

可以使用`polyfill`垫片库，解决兼容性问题。垫片库会根据css语法，生成对应的圆锥渐变图案，并且转化为 base64 代码

```js
<script src="//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
<script src="//leaverou.github.io/conic-gradient/conic-gradient.js"></script>
```
:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />