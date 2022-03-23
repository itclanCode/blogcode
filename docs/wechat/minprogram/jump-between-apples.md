---
title: 小程序-实现小程序与小程序之间的跳转
autoGroup-1: 小程序实用案例
---

## 小程序-实现小程序与小程序之间的跳转

## 快速导航

<TOC />

## 前言

小程序与小程序之间互相可以跳转,形成流量的循环.在小程序中怎么实现的呢

小程序中提供了两种方式实现小程序与小程序之间的跳转

<div align="center">
<img class="medium-zoom lazy" width="250" height="250" loading="lazy"  src ="../images/cloud-create-small-code/min-code.png" alt="效果展示" />
<p>扫码进入我的页面即可体验小程序的跳转</p>
</div>

## 使用 API 方式跳转

如下示例代码所示
::: details 点击即可查看 wxml 代码

```html
<<view class="container">
  <view bindtap="onJumpMin">打开跳转到其他小程序方式1</view>
</view>
```

:::
如下是逻辑代码
::: details 点击即可查看 js 代码

```js
onJumpMin() {
    wx.navigateToMiniProgram({
      appId: 'wx9fbad659d526c9bc',  // 需要跳转到指定的小程序appid
      path: 'pages/home/home',      // 打开的页面
      envVersion: 'release',
      success(res) {
        // 打开成功
        console.log(res);
      }
    })
  }
```

:::
使用小程序跳转的 API 就上面几行代码

## 使用标签方式跳转

如下是`wxml`代码
::: details 点击即可跳转

```html
<view>
  <navigator
    target="miniProgram"
    open-type="navigate"
    app-id="wx66d9cf3762c49a1a"
    path="pages/index/index"
    version="release"
    >打开绑定的小程序</navigator
  >
</view>
```

:::

使用标签的方式跳转,非常简单,只需要在`wxml`中使用`target`,`open-type`,`app-id`,`path`,指定相应的参数就可以实现跳转了的

::: tip 提示
在模拟器中无法实现跳转,请用真机扫码预览测试

无需声明跳转名单，不限跳转数量（众测中）

- 从 2020 年 4 月 24 日起，使用跳转其他小程序功能将无需在全局配置中声明跳转名单，调用此接口时将不再校验所跳转的 AppID 是否在 `navigateToMiniProgramAppIdList` 中。
- 从 2020 年 4 月 24 日起，跳转其他小程序将不再受数量限制，使用此功能时请注意遵守运营规范。

在老版本小程序中,是需要在`app.json`全局配置中设置白名单,如下所示:

```js
"navigateToMiniProgramAppIdList": [
    "wx9fbad659d526c9bc",
    "wx66d9cf3762c49a1a"
  ],
```

:::
小程序与小程序之前的跳转没有进行数量限制,无疑是想提高小程序与小程序之间流量互转,增加小程序的活跃度,但还是要注意小程序跳转的运营规范,避免触雷

## 相关文档

- [小程序 API 方式跳转](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)
- [小程序标签方式跳转](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>
<footer-FeedBack />