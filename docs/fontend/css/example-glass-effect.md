---
title: css 实现毛玻璃效果
autoGroup-2: 常见实例技巧
---

## css 实现毛玻璃效果

## 快速导航

<TOC />

## 方法 1-filter 模糊元素自身

原理: 通过对元素本身进行模糊处理，从而实现毛玻璃效果

实现比较简单，对需要模糊的`dom`设置`CSS`属性

<exampleskill-glassEffectFilter />

## 方法 2-::before+filter 叠加图片模糊

原理:

这种实现其实是一种伪毛玻璃效果，仅适用于模糊图片背景的场景。思路是在需要做毛玻璃效果的区域，对`伪元素::after`或`::before`设置同背景图片相同的背景，并对其做模糊处理

<exampleskill-glassEffectBefore />

:::: tabs type:border-card
::: tab html lazy

```html
<div class="filter">
  <div class="background">
    <div class="main">
      <p>结合背景图片叠加+伪类实现毛玻璃效果</p>
    </div>
  </div>
</div>
```

:::
::: tab css lazy

```css{10,38,39,40,41,42}
.filter {
  width: 100%;
  height: 300px;
}

.background {
  position: relative;
  width: 100%;
  height: 300px;
  background: url('/images/adslo.png') no-repeat 0 0/100% 100%;
}

.main {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 300px;
  z-index: 9;
  overflow: hidden; // 隐藏超出的模糊边缘
  display: flex;
  align-items: center;
  justify-content: center;
}

.main::before {
  content: '';
  position: absolute;
  top: 10%;
  bottom: 0;
  left: 0;
  right: 0;
  width: 400px;
  height: 250px;
  background: url('/images/adslo.png') no-repeat 0 0/100% 100%;
  background-attachment: fixed; // 使背景图片滚动时，模糊部分图片随之滚动
  z-index: -1; // 使模糊部分不遮挡文本
  filter: blur(20px);
  margin: 0 auto; // blur 的值较大时，模糊边缘效果不理想，可以通过设置 margin 消除影响
}

.main p {
  font-size: 18px;
  line-height: 36px;
  color: #fff;
}
```

:::

::::

::: warning 提示

使用图片叠加实现毛玻璃效果:模糊效果不能影响字体，采用了`伪元素::after`或`::before`

需要注意的是，当 `background-attachment: fixed` 属性设置时，该元素的背景图大小和定位是依据其向上查找的第一个属性为 `overflow: auto` 的父元素。 使背景图片滚动时，模糊部分图片也会随之滚动
:::

## 方法 3-使用 CSS backdrop-filter 属性实现

原理:使用 CSS 属性`backdrop-filter`可实现真·毛玻璃效果

<exampleskill-glassEffectBackdrop />

## 三者比较

| 实现方式        | 优点                                    | 缺点                                                                                    |
| --------------- | --------------------------------------- | --------------------------------------------------------------------------------------- |
| filter          | 代码简洁 使用灵活，可以在任意元素上使用 | 不能实现图片局部模,若 blur 的值过大，会导致模糊元素边缘呈现背景颜色，可能不是理想效果糊 |
| ::before+filter | 可以实现图片局部模糊                    | 只能实现图片或其他相对不变元素的毛玻璃效果，灵活度较差                                  |
| backdrop-filter | 实现真正的毛玻璃效果                    | 兼容问题需要考虑,IE 就不用考虑了的                                                      |

## 相关文档

- [MDN:filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
- [MDN: backdrop-filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>
