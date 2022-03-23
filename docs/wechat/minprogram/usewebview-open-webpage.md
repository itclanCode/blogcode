---
title: 小程序-实现怎么打开网页链接(跳转至公众号文章)
autoGroup-1: 小程序实用案例
---

## 小程序-实现怎么跳转打开 H5 网页链接(或跳转至公众号文章)

## 快速导航

<TOC />

## 背景

有时候,因为业务需求,在小程序当中,需要跳转到 h5 网页,或跳转到公众号,形成流量的闭环,那在小程序当中怎么实现呢?

## 实例效果

<div align="center">
<img class="medium-zoom lazy" height="500" loading="lazy"  src ="../images/usewebview/01-demo.gif" alt="效果展示" />
<p>(从小程序跳转到公众号)</p>
<img class="medium-zoom lazy" height="500" loading="lazy"  src ="../images/usewebview/02-demo.gif" alt="效果展示" />
<p>(从小程序跳转到h5网页)</p>
</div>

## 小程序实现跳转到公众号

### 前提条件

- 该小程序与需要跳转至的公众号(订阅号/服务号)进行了绑定关联
- 使用小程序开放能力`web-view`实现跳转(承载网页的容器。会自动铺满整个小程序页面，**个人类型的小程序暂不支持使用**)

`web-view`提供了一个`src`属性,这个`src`属性就是可以从小程序跳转到指定链接的地止

::: tip 注意
使用`webview`时,需要单独的在小程序中创建一个页面,要在`app.json`中的`pages`中注册,如下所示,然后在`webview`中的`wxml`中使用`webview`标签,在`webview`标签上设置的`src`属性就是要跳转的地止

```js
{
  "pages": [
     "pages/webview/webview"
  ]
}

```

:::
在触发事件处:绑定事件

```html
<view>
  <view class="contaniner-1" bindtap="handleToWxPublic">
    点击跳转到itclanCoder公众号
  </view>
  <view class="contaniner-1" bindtap="handleToWebSite">
    点击跳转到https://coder.itclan.cn/网站
  </view>
</view>
```

以下是逻辑代码

```js
// pages/handletowebview/handletowebview.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  handleToWxPublic() {
    const url = 'https://mp.weixin.qq.com/s/EgSgGqMWoV4nrt7qPF9nzA'; // 跳转的地止,这里写你想要跳转的公众号地止即可
    const navtitle = 'itclanCoder'; // 小程序跳转到公众号页面显示的标题
    wx.navigateTo({
      // 跳转到webview页面
      url: `/pages/webview/webview?url=${url}&nav=${navtitle}`,
    });
  },

  handleToWebSite() {
    const url = 'https://coder.itclan.cn/'; // 跳转的外链
    const navtitle = 'itclanCoder'; // 这个标题是你自己可以设置的
    wx.navigateTo({
      // 跳转到webview页面
      url: `/pages/webview/webview?url=${url}&nav=${navtitle}`,
    });
  },
});
```

上面示例代码中的跳转的参数`url`,`nav`在另一个页面`webview`中的`onLoad`生命周期函数中的`options`参数中可以接收得到,重新赋新值即可

在`webview`页面中,示例代码如下所示

```html
<!--pages/webview/webview.wxml-->
<view>
  <web-view src="{{url}}"></web-view>
</view>
```

`webview`的逻辑页面

```js
// pages/webview/webview.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    url: '', // 页面中需要的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      url: options.url, // 从跳转页面中传过来的url在options中可以拿到
    });
    wx.setNavigationBarTitle({
      title: options.nav,
    });
  },
});
```

如上代码就可以实现小程序跳转到公众号

## 小程序实现跳转到 H5 网页

小程序跳转到 H5 网页,与跳转公众号类似,只需要把上面的`url`地止切换成自己想要的链接即可

::: tip 注意
跳转到的网页需要在小程序后配置支持业务域名即可完成跳转,否则是跳转失败的
:::

如下所示,跳转至`https://coder.itclan.cn/`:

```js
handleToWebSite() {
    const url = 'https://coder.itclan.cn/'; // 跳转的外链
    const navtitle = 'itclanCoder'; // 这个标题是你自己可以设置的
    wx.navigateTo({
      // 跳转到webview页面
      url: `/pages/webview/webview?url=${url}&nav=${navtitle}`,
    });
  }

```

## 可能会遇到的问题

- 小程序跳转指定的公众号失败
- 小程序跳转指定的 h5 页面失败

<div align="center">
<img class="medium-zoom lazy" height="500" loading="lazy"  src ="../images/usewebview/white.png" alt="效果展示" />
<p>(从小程序跳转到h5网页,若小程序后台没有配置相关业务域名)</p>
</div>

::: tip 原因

- 跳转的公众号需要关联该小程序,才支持小程序的跳转
- 小程序后台管理没有配置添加业务域名(如果只是测试的话,可以在开发者工具里设置本地域名不校验合法域名`webview`等)

:::

## 相关文档

- [webview-小程序开放能力](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>
<footer-FeedBack />
<footer-AvoidCopy />