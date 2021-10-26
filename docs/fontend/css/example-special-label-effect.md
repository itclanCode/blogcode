---
title: css 实现炫酷丝带特殊标签效果
autoGroup-2: 常见实例技巧
---

## css 实现炫酷丝带特殊标签效果

## 快速导航

<TOC />

> ## 双边丝带效果

<silkribbon-doubleRibbon />

::: details 点击即可查看代码
html 代码

```html
<div class="wrap">
  <span>距离高考还有10天</span>
</div>
```

css 代码

```css
.wrap {
  position: relative;
  display: inline-block;
  left: 50%;
  top: 20px;
}

.wrap span {
  position: relative;
  z-index: 2;
  display: inline-block;
  padding: 0 15px;
  height: 32px;
  line-height: 32px;
  background-color: #42b983;
  color: #fff;
  font-size: 16px;
  box-shadow: 0 10px 6px -9px rgba(0, 0, 0, 0.6);
}

.wrap span::before,
.wrap span::after {
  position: absolute;
  bottom: -6px;
  border-width: 3px 5px;
  border-style: solid;
  content: '';
}

.wrap span::before {
  left: 0;
  border-color: #42b983 #42b983 transparent transparent; // 上 右 下(透明) 左(透明)
}

.wrap span::after {
  right: 0;
  border-color: #42b983 transparent transparent #42b983;
}

.wrap::before,
.wrap::after {
  position: absolute;
  top: 6px;
  content: '';
  border-style: solid;
  border-color: #42b983;
}

.wrap::before {
  left: -32px;
  border-width: 16px 26px 16px 16px; // 上 右 下 左
  border-left-color: transparent; // 左边border的颜色透明
}

.wrap::after {
  right: -32px;
  border-width: 16px 16px 16px 26px;
  border-right-color: transparent; // 右边brder颜色透明
}
```

:::

**实现原理**:绝对定位`position:absolute`,结合伪元素(`::before`,`::after`),边框`border`,制作三角形的原理,控制`border`的四个角的宽度,颜色,`transparent`透明

> ## 右边丝带效果

<silkribbon-rightRibbon />

::: details 点击即可查看代码
html 代码

```html
<div class="wrap">
  <span class="text">距离结束还有10天</span>
</div>
```

css 代码

```css
.wrap {
  text-align: center;
}
.text {
  position: relative;
  display: inline-block;
  padding: 0 15px;
  height: 32px;
  line-height: 32px;
  background-color: #42b983;
  color: #fff;
  font-size: 16px;
}

.text::before {
  position: absolute;
  top: -4px;
  left: 0;
  border-width: 2px 4px;
  border-style: solid;
  border-color: transparent #42b983 #42b983 transparent;
  content: '';
}

.text::after {
  position: absolute;
  top: 0;
  right: -8px;
  border-width: 16px 8px 16px 0;
  border-style: solid;
  border-color: #42b983 transparent #42b983 #42b983;
  content: '';
}
```

:::

> ## 箭头丝带效果

<silkribbon-arrowRibbon />

::: details 点击即可查看代码
html 代码

```html
<div class="wrap">
  <span class="text">距离高考还有10天</span>
</div>
```

css 代码

```css
.wrap {
  text-align: center;
}
.text {
  position: relative;
  display: inline-block;
  margin-right: 16px;
  padding: 0 10px;
  height: 32px;
  line-height: 32px;
  background-color: #42b983;
  color: #fff;
  font-size: 16px;
}

.text::before {
  position: absolute;
  top: 0;
  left: -16px;
  border-width: 16px 16px 16px 0;
  border-style: solid;
  border-color: transparent #42b983 transparent transparent;
  content: '';
}

.text::after {
  position: absolute;
  top: 0;
  right: -16px;
  border-width: 16px 16px 16px 0;
  border-style: solid;
  border-color: #42b983 transparent #42b983 #42b983;
  content: '';
}
```

:::

> ## 多个箭头丝带效果

<silkribbon-multiRibbon />

::: details 点击即可查看代码

```html
<div class="wrap">
  <span class="text">距离高考还有8天</span>
  <span class="text">距离高考还有7天</span>
  <span class="text">距离高考还有6天</span>
</div>
```

css 代码与上面一致
:::

> ## 悬挂标签

<silkribbon-hangeLabel />

::: details 点击即可查看代码
html 代码

```html
<div class="wrap">
  <div class="left">
    <span>随笔川迹</span>
  </div>
  <div class="right">
    <span>itclanCoder</span>
  </div>
</div>
```

css 代码

```css
.wrap {
  position: relative;
  background-color: #eee;
  height: 200px;
}
.left {
  width: 200px;
  height: 140px;
  position: absolute; // 绝对定位
  top: -8px;
  left: -8px;
  overflow: hidden;
}

.left::before {
  position: absolute;
  left: 124px;
  border-radius: 8px 8px 0 0; // 上 右 下 左
  width: 16px;
  height: 8px;
  background-color: #42b983;
  content: '';
}

.left::after {
  position: absolute;
  left: 0;
  top: 124px;
  border-radius: 0 8px 8px 0;
  width: 8px;
  height: 16px;
  background-color: #42b983;
  content: '';
}

.left span {
  display: inline-block;
  text-align: center;
  width: 200px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 30px;
  left: -50px;
  z-index: 2;
  overflow: hidden;
  -ms-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  border: 1px dashed #fff; // 虚线边框
  box-shadow: 0 0 0 3px #42b983, 0 14px 7px -9px rgba(0, 0, 0, 0.6);
  background-color: #42b983;
  color: #fff;
}

.right {
  width: 140px;
  height: 200px;
  position: absolute;
  top: -8px;
  right: -8px;
  overflow: hidden;
}

.right::before {
  position: absolute;
  right: 124px;
  border-radius: 8px 8px 0 0;
  width: 16px;
  height: 8px;
  background-color: #42b983;
  content: '';
}

.right::after {
  position: absolute;
  right: 0;
  top: 124px;
  border-radius: 0 8px 8px 0;
  width: 8px;
  height: 16px;
  background-color: #42b983;
  content: '';
}

.right span {
  display: inline-block;
  text-align: center;
  width: 200px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 30px;
  right: -50px;
  z-index: 2;
  overflow: hidden;
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  border: 1px dashed #fff;
  box-shadow: 0 0 0 3px #42b983, 0 14px 7px -9px rgba(0, 0, 0, 0.6);
  background-color: #42b983;
  color: #fff;
}
```

:::

**实现原理**: 伪元素`::before,::after`结合绝对定位`position: absolute`,以及 `css3` 中的变换`transform`,`rotate`旋转

关于伪元素的可参考:[css 中的伪类与伪元素](/fontend/css/css-pseudo-class-pseudo-el)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
