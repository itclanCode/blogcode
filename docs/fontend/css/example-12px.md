---
title: 实现小于12px的字体像素
autoGroup-2: 常见实例技巧
---

## 实现小于12px的字体像素

## 快速导航

<TOC />

<exampleskill-lessThen12px />


::: tip 注意事项

以上是使用 `svg` 作为解决小于 `12px` 字号文字的方案

使用 `transform: scale() `设置后占位区域并没有改变,难以调节对齐方式

使用 `canvas` 无法选中文字（不如 svg 简洁,方便）

:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />