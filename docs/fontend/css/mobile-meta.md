---
title: meta标签
autoGroup-1: 移动端
---

## 快速导航

<TOC />

## 常见 meta 标签

在 `head` 头部常常需要添加额外的一些`meta`标签对网页进行限制

::: details 点击即可查看常见 `meta` 标签

```html
<!-- 声明文档使用的字符编码 -->
<meta charset="utf-8" />
<!-- 优先使用 IE 最新版本和 Chrome -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!-- 页面描述 -->
<meta name="description" content="不超过150个字符" />
<!-- 页面关键词 -->
<meta name="keywords" content="" />
<!-- 网页作者 -->
<meta name="author" content="name, email@gmail.com" />
<!-- 搜索引擎抓取 -->
<meta name="robots" content="index,follow" />
<!-- 为移动设备添加 viewport -->
<meta
  name="viewport"
  content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no"
/>
<!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边 http://bigc.at/ios-webapp-viewport-meta.orz -->
<!-- iOS 设备 begin -->
<meta name="apple-mobile-web-app-title" content="标题" />
<!-- 添加到主屏后的标题（iOS 6 新增） -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->
<meta
  name="apple-itunes-app"
  content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"
/>
<!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- 设置苹果工具栏颜色 -->
<meta name="format-detection" content="telphone=no, email=no" />
<!-- 忽略页面中的数字识别为电话，忽略email识别 -->
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit" />
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!-- 不让百度转码 -->
<meta http-equiv="Cache-Control" content="no-siteapp" />
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true" />
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320" />
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait" />
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait" />
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes" />
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true" />
<!-- UC应用模式 -->
<meta name="browsermode" content="application" />
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app" />
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no" />
<!-- iOS 图标 begin -->
<link
  rel="apple-touch-icon-precomposed"
  href="/apple-touch-icon-57x57-precomposed.png"
/>
<!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="114x114"
  href="/apple-touch-icon-114x114-precomposed.png"
/>
<!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="144x144"
  href="/apple-touch-icon-144x144-precomposed.png"
/>
<!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
<!-- iOS 图标 end -->
<!-- iOS 启动画面 begin -->
<link
  rel="apple-touch-startup-image"
  sizes="768x1004"
  href="/splash-screen-768x1004.png"
/>
<!-- iPad 竖屏 768 x 1004（标准分辨率） -->
<link
  rel="apple-touch-startup-image"
  sizes="1536x2008"
  href="/splash-screen-1536x2008.png"
/>
<!-- iPad 竖屏 1536x2008（Retina） -->
<link
  rel="apple-touch-startup-image"
  sizes="1024x748"
  href="/Default-Portrait-1024x748.png"
/>
<!-- iPad 横屏 1024x748（标准分辨率） -->
<link
  rel="apple-touch-startup-image"
  sizes="2048x1496"
  href="/splash-screen-2048x1496.png"
/>
<!-- iPad 横屏 2048x1496（Retina） -->
<link rel="apple-touch-startup-image" href="/splash-screen-320x480.png" />
<!-- iPhone/iPod Touch 竖屏 320x480 (标准分辨率) -->
<link
  rel="apple-touch-startup-image"
  sizes="640x960"
  href="/splash-screen-640x960.png"
/>
<!-- iPhone/iPod Touch 竖屏 640x960 (Retina) -->
<link
  rel="apple-touch-startup-image"
  sizes="640x1136"
  href="/splash-screen-640x1136.png"
/>
<!-- iPhone 5/iPod Touch 5 竖屏 640x1136 (Retina) -->
<!-- iOS 启动画面 end -->
<!-- iOS 设备 end -->
<meta name="msapplication-TileColor" content="#000" />
<!-- Windows 8 磁贴颜色 -->
<meta name="msapplication-TileImage" content="icon.png" />
<!-- Windows 8 磁贴图标 -->
<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
<!-- 添加 RSS 订阅 -->
<link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
<!-- 添加 favicon icon -->
<!-- sns 社交标签 begin -->
<!-- 参考微博API -->
<meta property="og:type" content="类型" />
<meta property="og:url" content="URL地址" />
<meta property="og:title" content="标题" />
<meta property="og:image" content="图片" />
<meta property="og:description" content="描述" />
<!-- sns 社交标签 end -->
```

:::

## media 媒体查询

在做移动端与 pc 端页面,根据不同的尺寸设备,页面响应式变化

::: details 点击即可查看-响应式页面必知必会

```css
/* 横屏 */
@media screen and (orientation: landscape) {
}
/* 竖屏 */
@media screen and (orientation: portrait) {
}
/* 窗口宽度<960,设计宽度=768 */
@media screen and (max-width: 959px) {
  // 写样式
}
/* 窗口宽度<768,设计宽度=640 */
@media screen and (max-width: 767px) {
  // 写样式
}
/* 窗口宽度<640,设计宽度=480 */
@media screen and (max-width: 639px) {
}
/* 窗口宽度<480,设计宽度=320 */
@media screen and (max-width: 479px) {
  // 写样式
}
/* 设备像素比为2 */
/* 常用于1px边框，还应规定 3dppx 的情况 */
@media (min-resolution: 2dppx) {
  // 写样式
}
/* windows UI 贴靠 */
@media screen and (-ms-view-state: snapped) {
}
/* 打印 */
@media print {
}
```

:::

## 显示器媒体查询

显示器媒体查询是以屏幕大小为基础划分的

当浏览器的宽度为 640px 或更小时,执行花括号内的 css 样式
::: details 点击即可查看核心代码

```css
@media screen and (max-width: 640px) {
  /* 执行下面的css代码 */
}
```

:::

当浏览器的宽度为 800px 或更小时,执行花括号内的 css 样式
::: details 点击即可查看核心代码

```css
@media screen and (max-width: 800px) {
  /* 执行下面的css代码 */
}
```

:::
当浏览器的宽度为 1024px 或更小时,执行花括号内的 css 样式
::: details 点击即可查看核心代码

```css
@media screen and (max-width: 1024px) {
  /* 执行下面的css代码 */
}
```

:::

## 智能手机媒体查询

- ### iPhone(2G-4S)

::: details 点击即可查看核心代码

```css
/*Landscape Mode 当手机横屏,设备尺寸宽度等于480px或更小时执行花括号中的的css代码*/
@media screen and (max-device-width: 480px) and (orientation: landscape) {
  /* 执行下面的代码 */
}
/* Portrait Mode 当手机竖屏,设备尺寸宽度等于320px或更小时执行花括号中的的css代码*/
@media screen and (max-device-width: 320px) and (orientation: portrait) {
  /*some rules*/
}
```

:::

- ### iPhone 4

`-webkit-min-device-pixel-ratio`,表示设备上物理像素和设备独立像素，设备像素比率,当时显示屏最小的色倍为 1.5 倍的

::: details 点击即可查看核心代码

```css
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  /*some rules*/
}
```

:::

- ### iPhone 5

当页面宽度大于 320px 小于 568px 的时候执行花括号里面的 CSS

::: details 点击即可查看核心代码

```css
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
  /*some rules*/
}
```

:::

- ### iPhone 6

::: details 点击即可查看核心代码

```css
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
  /*iPhone 6 Portrait 当页面大于375px小于667px时执行下面的代码,竖屏*/
}
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: landscape) {
  /*iPhone 6 landscape 当页面大于375px小于667px时执行下面的代码,横屏*/
}
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait) {
  /*iPhone 6+ Portrait */
}
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: landscape) {
  /*iPhone 6+ landscape 当页面大于414px小于736px时执行下面的代码,竖屏*/
}
@media only screen and (max-device-width: 640px),
  only screen and (max-device-width: 667px),
  only screen and (max-width: 480px) {
  /*iPhone 6 and iPhone 6+ portrait and landscape */
}
@media only screen and (max-device-width: 640px),
  only screen and (max-device-width: 667px),
  only screen and (max-width: 480px) and (orientation: portrait) {
  /*iPhone 6 and iPhone 6+ portrait*/
}
@media only screen and (max-device-width: 640px),
  only screen and (max-device-width: 667px),
  only screen and (max-width: 480px) and (orientation: landscape) {
  /*iPhone 6 and iPhone 6+ landscape*/
}
```

:::

- ### HTC Evo，BlackBerry Torch，HTC Thunderbolt，HD2

::: details 点击即可查看核心代码

```css
@media screen and (max-device-width: 480px) {
  /*some rules*/
}
```

:::

## 平板媒体查询

- ### iPad / iPad 2 / iPad 3

::: details 点击即可查看核心代码

```css
/* Landscape Mode 小于1024px,横屏*/
@media (max-device-width: 1024px) and (orientation: landscape) {
  /*some rules*/
}
/* Portrait Mode 小于768px,竖屏*/
@media (max-device-width: 768px) and (orientation: portrait) {
  /*some rules*/
}
```

:::

- ### iPad Mini

::: details 点击即可查看核心代码

```css
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  /*some rules*/
}
```

:::

- ### Samsung Galaxy Tab 10.1 / Motorola Xoom / Lenovo Thinkpad Tablet / Sony Tablet S

::: details 点击即可查看核心代码

```css
/* Landscape Mode */
@media (max-device-width: 1280px) and (orientation: landscape) {
  /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 800px) and (orientation: portrait) {
  /*some rules*/
}
```

:::

- ### HTC Flyer / BlackBerry PlayBook

::: details 点击即可查看核心代码

```css
/* Landscape Mode */
@media (max-device-width: 1024px) and (orientation: landscape) {
  /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 600px) and (orientation: portrait) {
  /*some rules*/
}
```

:::

- ### HP TouchPad

::: details 点击即可查看核心代码

```css
/* Landscape Mode */
@media (max-device-width: 1024px) and (orientation: landscape) {
  /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 768px) and (orientation: portrait) {
  /*some rules*/
}
```

:::

- ### T-Mobile G-Slate

::: details 点击即可查看核心代码

```css
/* Landscape Mode */
@media (max-device-width: 1280px) and (orientation: landscape) {
  /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 768px) and (orientation: portrait) {
  /*some rules*/
}
```

:::

- ### ViewSonic ViewPad 10

::: details 点击即可查看核心代码

```css
/* Landscape Mode */
@media (max-device-width: 1024px) and (orientation: landscape) {
  /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 600px) and (orientation: portrait) {
  /*some rules*/
}
```

:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
