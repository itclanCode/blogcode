---
title: 文字水平及垂直方向显示排布
autoGroup-2: 常见实例技巧
---

## 文字水平及垂直方向显示排布

## 快速导航

<TOC />

<writemode-writeMode />

::: details 点击即可查看代码

```css
writing-mode: vertical-rl;
-webkit-writing-mode: vertical-rl;
-ms-writing-mode: vertical-rl;
```

:::

- `horizontal-tb`:此值定义了从上到下的块流动方向,水平方向自上而下的书写方式。即 `left-right-top-bottom`。
- `vertical-rl`：此值定义从右到左书写方式。即 `top-bottom-right-left`
- `vertical-lr`：该值定义了从左到右的书写方式,垂直方向内内容从上到下，水平方向从左到右
- `sideways-rl`：内容垂直方向从上到下排列
- `sideways-lr`：内容垂直方向从下到上排列

这个`writing-mode`属性在文本布局时非常方便,好用,有时候,当想要文本垂直方向显示就会用到

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
