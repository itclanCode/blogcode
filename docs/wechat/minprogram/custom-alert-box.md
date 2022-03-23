---
title: 小程序-实现自定义动画弹框/提示框
autoGroup-1: 小程序实用案例
---

## 小程序-实现自定义动画弹框/提示框

## 快速导航

<TOC />

## 前言

在小程序中,用户与界面进行交互时,有一些用户反馈提示,例如:触发某个按钮,从底部弹出框,从顶部弹出等

如今,有一些现成的 UI 库,虽然已经实现了的,但若只是为了实现一个底部弹出框或者自定义提示框,不引用第三方 UI 库

怎么手动原生方式去实现呢,最主要的是怎么去实现动画

## 实例效果

<form-customAlertBox />

## css3 实现动画

如下是`wxml`代码
::: details 点击即可查看 wxml 代码

```html
<view>
  <view class="click-btn" catchtap="onBottomBox">弹出底部弹出框</view>
  <view class="click-btn" bindtap="onTopBox">弹出顶部提示框</view>
  <view wx:if="{{isBottom}}" class="bottom-box">
    <div class="mask" bindtap="onHideBox"></div>
    <div class="pop">底部弹出内容</div>
  </view>
  <div wx:if="{{isTop}}" class="top-box">通知内容</div>
</view>
```

:::
如下是`wxss`代码
::: details 点击即可查看 wxss 代码

```css
/* pages/customalertbox/customalertbox.wxss */
.click-btn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.top-box {
  width: 100%;
  height: 30px;
  background: #f56c6c;
  border-radius: 0 0 8px 8px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 28rpx;
  position: absolute;
  top: 0px;
  left: 0;
  animation-duration: 0.5s;
  animation-name: slidetop;
}

.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

.pop {
  position: absolute;
  width: 100%;
  height: 180px;
  background: #42b983;
  border-radius: 8px 8px 0 0;
  position: absolute;
  bottom: 0px;
  animation-duration: 0.5s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    transform: translateY(70%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slidetop {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0px);
  }
}
```

:::
如下是逻辑代码
::: details 点击即可查看逻辑代码

```js
// pages/customalertbox/customalertbox.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isBottom: false,
    isTop: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  onBottomBox() {
    this.setData({
      isBottom: true,
    });
  },

  onHideBox() {
    this.setData({
      isBottom: false,
    });
  },

  onTopBox() {
    this.setData({
      isTop: true,
    });

    setTimeout(() => {
      this.setData({
        isTop: false,
      });
    }, 2000);
  },
});
```

:::

在小程序中实现动画,如上实现的动画,是通过`css3`中的`@keyframes`实现的,如下所示

```css
.pop {
  /* ...  */
  animation-duration: 0.5s;
  animation-name: slidein; // 动画的名称
}

@keyframes slidein {
  // 定义动画的名称
  from {
    transform: translateY(70%); // 平移,垂直方向上
  }
  to {
    transform: translateY(0);
  }
}

.top-box {
  /* ... */
  animation-duration: 0.5s;
  animation-name: slidetop;
}

@keyframes slidetop {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0px);
  }
}
```

通过 css3 中的`@keyframes`以及变换`transform`,垂直方向上平移,实现动画

示例效果如下所示

<div align="center">
<img class="medium-zoom lazy" width="250" height="250" loading="lazy"  src ="../images/custom-alert-box/01-custom-alert-box.gif" alt="效果展示" />
</div>

以上是通过 css3 的动画`animation`结合`@keyframes`动画帧实现的,那么在小程序当中,也可以通过官方的动画`API`实现的

## 小程序动画 API-实现动画

创建一个动画实例 `animation`,调用实例的方法来描述动画。最后通过动画实例的 `export` 方法导出动画数据传递给组件的 `animation` 属性

示例效果如下所示

<div align="center">
<img class="medium-zoom lazy" width="250" height="250" loading="lazy"  src ="../images/custom-alert-box/02-custom-alert-box.gif" alt="效果展示" />
</div>

如下是实例代码
::: details 点击即可查看 wxml 代码

```html
<view>
  <view class="click-btn" bindtap="onBottomBox">弹出底部弹出框</view>
  <view class="click-btn" bindtap="onTopBox">弹出顶部提示框</view>
  <view
    wx:if="{{isBottom}}"
    style="position: absolute;width: 100%;height: 100%;bottom: 0px;"
  >
    <div class="mask" bindtap="onHideBox"></div>
    <div class="pop" animation="{{animationData}}">底部弹出内容</div>
  </view>
  <div wx:if="{{isTop}}" class="top-box">通知内容</div>
</view>
```

:::
主要是给想要添加动画的元素添加了一个`animation`属性,现在的动画是通过`js`去控制,而非`css`

如下代码所示
::: details 点击即可查看逻辑代码

```js
// pages/customalertbox/customalertbox.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isBottom: false,
    isTop: false,
    animationData: {}, // 定义动画对象
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  onBottomBox() {
    // 创建动画
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
    });

    this.animation = animation;
    // 先在y轴偏移180，然后用step()完成一个动画
    animation.translateY(180).step();
    this.setData({
      animationData: animation.export(),
      isBottom: true,
    });

    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动,回到初始位置
    setTimeout(() => {
      animation.translateY(0).step();
      this.setData({
        animationData: animation.export(),
      });
    }, 200);
  },

  // 点击遮罩层隐藏弹框
  onHideBox() {
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
    });
    this.animation = animation;
    // 先在y轴偏移180，然后用step()完成一个动画
    animation.translateY(180).step();
    this.setData({
      animationData: animation.export(),
    });
    setTimeout(() => {
      animation.translateY(0).step();
      this.setData({
        animationData: animation.export(),
        isBottom: false,
      });
    }, 200);
  },

  onTopBox() {
    this.setData({
      isTop: true,
    });

    setTimeout(() => {
      this.setData({
        isTop: false,
      });
    }, 2000);
  },
});
```

:::

以上就是通过微信小程序中动画`API`实现的完成的动画,代码要比 `css3` 要多一些,可以实现更加复杂的动画效果

::: tip 注意
如果是底部弹出框,拖动里面时,若遮罩层底部会跟着滚动,具体解决办法也可以在外层添加`catchtouchmove="true"`即可解决

```html{4}
<view>
  <view class="click-btn" bindtap="onBottomBox">弹出底部弹出框</view>
  <view
    catchtouchmove="true"
    wx:if="{{isBottom}}"
    style="position: absolute;width: 100%;height: 100%;bottom: 0px;"
  >
    <div class="mask" bindtap="onHideBox"></div>
    <div class="pop" animation="{{animationData}}">底部弹出内容</div>
  </view>
  <div wx:if="{{isTop}}" class="top-box">通知内容</div>
</view>
```

:::

## 结语

在小程序当中实现动画可以用`css3`的`animation`结合`@keyframes`实现,同样也可以通过小程序动画的`api`去实现

## 相关文档

- [小程序动画 API](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>
<footer-FeedBack />