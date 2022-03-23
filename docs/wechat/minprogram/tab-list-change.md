---
title: 小程序-实现 tab-及多个列表选项切换
autoGroup-1: 小程序实用案例
---

## 小程序-实现 tab-及多个列表选项切换

## 快速导航

<TOC />

## 实例效果

<div align="center">
<img class="medium-zoom lazy" height="500" loading="lazy"  src ="../images/tab-list-change/demo.gif" alt="效果展示" />
</div>

## 具体实现代码

微信 `wxml` 代码
::: details 点击即可查看 wxml 代码

```html
<view>
  <view class="tab-container">
    <view
      class="default {{type=='expend'? 'expend-active':''}}"
      bindtap="handleType"
      data-type="expend"
      >支出</view
    >
    <view
      class="default {{type=='earning'? 'earning-active': ''}}"
      bindtap="handleType"
      data-type="earning"
      >收入</view
    >
    <view
      class="default {{type=='transaccount'?'transaccount-active': ''}}"
      bindtap="handleType"
      data-type="transaccount"
      >转账</view
    >
  </view>
</view>
```

:::

微信`wxss`代码

::: details 点击即可查看 wxss 代码

```css
/* pages/tablistchange/tablistchange.wxss */
.tab-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rpx 0;
}

.tab-container .default {
  margin-right: 25rpx;
  padding: 5rpx 15rpx;
}

.expend-active {
  color: #0ca168;
  border-bottom: 2px solid #0ca168;
}

.earning-active {
  color: #ff6b6a;
  border-bottom: 2px solid #ff6b6a;
}

.transaccount-active {
  color: #abcdef;
  border-bottom: 2px solid #abcdef;
}
```

:::

切换逻辑`js`代码

::: details 点击即可查看逻辑 js 代码

```js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: 'expend',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  handleType(event) {
    const type = event.currentTarget.dataset.type;
    this.setData({
      type: type,
    });
  },
});
```

:::

实例效果如下所示:

<div align="center">
<img class="medium-zoom lazy" height="500" loading="lazy"  src ="../images/tab-list-change/tabchange.gif" alt="效果展示" />
</div>

## 分析

实现`tab`切换,主要是给切换元素绑定事件(`bindtap`)函数,然后在切换元素上设置`data-xxx=''`属性,绑定的事件对象会携带额外的信息,例如:`dataset`等,可以在事件对象中拿到在切换元素上设置不同的`data`属性值,在切换过程中,重新设置`setData`的值

在实现切换时,主要是切换`class`,在`wxml`中,根据`type`动态值,插值表达式,最终决定加载哪个激活状态的样式

这种固定的`tab`切换效果显然是可以实现的,但问题来了,如果是多个呢,不固定的呢?

## 实现不固定动态的 tab 切换

如下示例效果

<div align="center">
<img class="medium-zoom lazy" height="500" loading="lazy"  src ="../images/tab-list-change/moretab.gif" alt="效果展示" />
</div>

如下是`wxml`

::: details 点击即可查看 wxml 代码

```html{7,8}
<view class="encourage-content">
  <view class="encorage-title">{{accountlist.encourtitle}}</view>
  <view class="encourage-list">
    <block wx:for="{{listData}}" wx:key="*this">
      <view
        data-item="{{item}}"
        class="list-item {{item.account == accountlist.account ? 'list-active': ''}}"
        bindtap="handleList"
        >￥<text>{{item.account}}</text></view
      >
    </block>
  </view>
</view>
```

:::

如下是示例 wxss 代码

::: details 点击即可查看 wxss 代码

```css
.encourage-content {
  text-align: center;
  padding: 30rpx 80rpx 0 80rpx;
}
.encourage-content .encorage-title {
  padding-bottom: 30rpx;
  color: #ff6b6a;
}
.encourage-content .encourage-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.encourage-content .encourage-list .list-item {
  width: 31%;
  height: 80rpx;
  border: 1px solid #dddd;
  margin-bottom: 15rpx;
  line-height: 80rpx;
}
.encourage-content .encourage-list .list-active {
  color: #ff6b6a;
  border: 1px solid #ff6b6a;
}
```

:::

如下是逻辑 js 代码
::: details 点击即可查看逻辑代码

```js
// pages/tablistchange/tablistchange.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    accountlist: {
      // 通过初始化一个目标对象
      account: 2,
      encourtitle: '两只黄鹂鸣翠柳',
    },
    listData: [
      // 循环遍历的list数据
      {
        account: 2,
        encourtitle: '两只黄鹂鸣翠柳',
      },
      {
        account: 3,
        encourtitle: '三人行,必有我师',
      },
      {
        account: 5,
        encourtitle: '吾生有涯,吾知无涯',
      },
      {
        account: 13,
        encourtitle: '一行白鹭上青天',
      },
      {
        account: 14,
        encourtitle: '白驹过隙,岁月如梭,愿君只争朝夕',
      },
      {
        account: 52,
        encourtitle: '何以解忧,唯有暴富',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  // 列表切换
  handleList(event) {
    // console.log(event);
    this.setData({
      // 给accountList对象重新赋值
      accountlist: event.currentTarget.dataset.item,
    });
  },
});
```

:::

## 分析

实现多个`tab`切换,在这里借助了一个中间变量对象`accountList`,首先循环遍历当前的数据`listData`,然后在切换元素上绑定事件,同时设置`data`属性值,通过事件对象携带的参数信息,重新赋值给`accountlist`对象

在`wxml`中通过源对象数据(`listData`)与新赋值对象数据(`accountlist`)中的某个属性值做比较,判断是否相等,来加载指定的样式

这种实现方式有别于上面固定的切换,如果有使用过一些`vue`,`react`框架的话,实现类似的切换效果也是有异曲同工之妙

至于实现案例当中的支付,涉及到云支付,实现起来也来也不复杂,加一个表单输入框,绑定数据,结合云支付就可以实现下单功能

<div align="center">
<img class="medium-zoom lazy" width="200" height="220" loading="lazy"  src ="../images/tab-list-change/qing-jizhang-min-code.png" alt="效果展示" />
<p>点击即可扫码进入爱的鼓励体验</p>
</div>

具体实现云支付功能可参考[小程序-云开发-实现微信云支付功能](/wechat/cloudev/cloud-payment-function)

## 最后

实现类似这种`tab`切换,有时候,可能两三个`tab`切换知道怎么实现,但是一旦遇到多个,而且时动态时,会发现之前的方式却不耐用了的

这个时候往往需要借助一个第三方的中间变量,然后与源对象中的某个属性值进行比较的,这个源对象的属性值可以用原有的,也可以新增的(比如`id`)之类的,总之有一个与之比较,就可以的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>
<footer-FeedBack />