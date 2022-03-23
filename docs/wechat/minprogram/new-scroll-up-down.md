---
title: 小程序-实现类似新浪头条新闻上下间歇性滚动
autoGroup-1: 小程序实用案例
---

<div id="container">

## 小程序-实现类似新浪头条新闻上下间歇性滚动

## 快速导航

<TOC />

## 需求分析

在做用户信息展示页的时候,有时候需要将用户名,联系方式放置在前端展示,但是用户名与电话号码属于私密信息,需要做加密处理

这里的加密只是用于在前端展示特殊处理,也就是只显示姓,名字用特殊字符替代,电话号码:中间四位用\*替代,如下效果展示如下所示

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/new-scroll-up-down/notice-bar-scroll.gif" alt="效果展示" />
</div>

## 完成效果示例

<div align="center">
<img class="medium-zoom lazy" loading="lazy" width="500" height="500"  src ="../images/new-scroll-up-down/demo-shixian.gif" alt="效果展示" />
</div>

## 实现方式

主要借助的是小程序官方提供的`swiper`组件,对于横向的,普通的轮播,很多小伙伴都不陌生,但是对于这种垂直方式的滚动,有些同学,可能比较棘手

## 完成页面布局

如下是`wxml`

```html
<view class="order-list-wrap">
  <view class="order-title"><text>预约用户</text></view>
  <swiper
    class="swiper"
    vertical="true"
    autoplay="true"
    circular="true"
    interval="3000"
    display-multiple-items="4"
  >
    <block wx:for="{{ orderLists }}" wx:key="*this">
      <swiper-item>
        <view class="swiper-item-box">
          <view class="username">{{item.username}}</view>
          <view>{{item.phonenumber}}</view>
          <view>已预约</view>
          <view>{{item.createtime}}</view>
        </view>
      </swiper-item>
    </block>
  </swiper>
</view>
```

这里主要借助的是`swiper`组件

- `vertical`的属性值为`true`,代表的是垂直方向
- `display-multiple-items`表示的是同时显示的滑块数量,这里设置的是显示 4 个

`swiper`组件中各个属性含义,具体可看参考文档[swiper 组件使用](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)

如下是 wxss
::: details 点击即可查看详情

```css
.order-list-wrap {
  padding: 10rpx 0 10rpx 0;
  font-size: 28rpx;
  background: #23d5ab;
  margin: 0 20rpx 20rpx 20rpx;
  color: #fff;
}

.order-title {
  text-align: center;
  padding: 8rpx;
}

.swiper {
  height: 320rpx;
  overflow: hidden;
}

.swiper-item-box {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px dashed #ede1d4;
}

.swiper-item-box view {
  line-height: 80rpx;
}

.swiper-item-box .username {
  width: 90rpx;
}
```

:::
如下预约列表的数据格式

```js
orderLists: [
  {
    phonenumber: 15210927743,
    username: '杨海龙',
    createtime: '2020-06-17T07:54:41.146Z',
  },
  {
    createtime: '2020-06-18T13:35:02.944Z',
    phonenumber: 13141467811,
    username: '洋洋',
  },
  {
    createtime: '2020-06-18T14:18:51.307Z',
    phonenumber: '15210927639',
    username: '郑霞',
  },
  {
    phonenumber: 13801135148,
    username: '王海勇',
    createtime: '2020-06-17T07:53:34.584Z',
  },
  {
    createtime: '2020-06-17T09:28:47.062Z',
    phonenumber: 15810923375,
    username: '向生明',
  },
];
```

如果仅仅是这样,在页面中,姓名和电话号码会完全被显示,但是往往我们需要对姓名和电话进行特殊处理的

而这里的时间是从服务器返回给前端的时间,仍然需要做处理,进行转化

- **用户名格式化处理,保留姓氏**

::: details 点击即可查看详情

```js
// 格式化名字,只留姓,名字中间用*替代
function _formatName(name) {
  let newStr;
  if (name.length === 2) {
    newStr = name.substr(0, 1) + '*'; // 通过substr截取字符串从第0位开始截取,截取1个
  } else if (name.length > 2) {
    // 当名字大于2位时
    let char = '';
    for (let i = 0, len = name.length - 2; i < len; i++) {
      // 循环遍历字符串
      char += '*';
    }
    newStr = name.substr(0, 1) + char + name.substr(-1, 1);
  } else {
    newStr = name;
  }
  return newStr;
}

console.log(_formatName('李海涛')); // 输出李*涛
```

:::

- **电话号码格式化处理**

::: details 点击即可查看详情

```js
// 格式化电话号码
function _formatPhone(phone) {
  return `${phone.substr(0, 3)}****${phone.substr(7)}`;
}
console.log(_formatPhone(15210927743)); // 输出:15****7743
```

:::

- **时间格式化处理**

::: details 点击即可查看详情

```js
function _formatTime(date) {
  let fmt = 'yyyy-MM-dd hh:mm:ss';
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分钟
    's+': date.getSeconds(), // 秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getFullYear());
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        o[k].toString().length == 1 ? '0' + o[k] : o[k]
      );
    }
  }
  // console.log(fmt)
  return fmt;
}

console.log(_formatTime(new Date('2020-06-17T07:54:41.146Z'))); // 2020-06-18 21:35:02
```

:::
如下是完整的示例逻辑代码 JS

在实际开发中,这些数据是在小程序端请求云数据库,然后渲染到页面当中去的
::: details 完整示例代码

```js
// pages/profile/profile.js
const db = wx.cloud.database(); // 初始化数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderLists: []
   },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getOrderMsgList(); // 获取预约用户信息列表
  },


// 获取预约用户
_getOrderMsgList() {
  db.collection('orderMessage')
  .orderBy('createtime', 'desc')   // 作了一个排序
  .get()
  .then(res => {
    console.log(res);
    const orderList = res.data;
    const orderLists = orderList.map((item) => {
      return {
         username: this._formatName(item.username),
         phonenumber: this._formatPhone(item.phonenumber),
         createtime: this._formatTime(item.createtime)
      }
    })
    this.setData({
      orderLists,
    })
  })
  .catch(err => {
    console.error(err);
  })
},

// 格式化名字,只留姓,名字中间用*替代
_formatName(name) {
  let newStr;
  if (name.length === 2) {
  newStr = name.substr(0, 1) + '*';   // 通过substr截取字符串从第0位开始截取,截取1个
  } else if (name.length > 2) {       // 当名字大于2位时
    let char = '';
    for (let i = 0, len = name.length - 2; i < len; i++) {  // 循环遍历字符串
      char += '*';
    }
    newStr = name.substr(0, 1) + char + name.substr(-1, 1);
  } else {
    newStr = name;
  }
  return newStr;
},

// 格式化电话号码
_formatPhone(phone) {
  return `${phone.substr(0, 3)}****${phone.substr(7)}`
},

// 格式化时间
_formatTime(date) {
  let fmt = 'yyyy-MM-dd hh:mm:ss'
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分钟
    's+': date.getSeconds(), // 秒
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getFullYear())
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, o[k].toString().length == 1 ? '0' + o[k] : o[k])
    }
  }
  // console.log(fmt)
  return fmt
},
})
```

:::
当然,对于这个时间格式化处理,是灵活多变的,也是可以转化成格式`刚刚`,`几分钟前`,`几小时前`,`几天前`,`几个月前`的

您可以扫下面的小程序码,感受一下示例的

<div align="center">
<img class="medium-zoom lazy" loading="lazy" width="200" height="200"  src ="../images/new-scroll-up-down/jiahaoruisen-min-code.jpg" alt="佳豪瑞森装饰" />
</div>

如下示例代码所示
::: details 点击即可查看详情

```js
function _formatTimeDetail() {
  var pretime = '2020-06-20 14:38:16'; // 将整个时间格式转换为几分钟前,几小时前,几个月之前等

  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;

  getDate(pretime);

  //然后再每隔一分钟更新一次时间
  setInterval(function() {
    getDate(pretime);
  }, 60000);

  function getDate(dateTimeStamp) {
    if (dateTimeStamp == undefined) {
      return false;
    } else {
      dateTimeStamp = dateTimeStamp.replace(/\-/g, '/');
      var sTime = new Date(dateTimeStamp).getTime(); //把时间pretime的值转为时间戳
      var now = new Date().getTime(); //获取当前时间的时间戳
      var diffValue = now - sTime;

      if (diffValue < 0) {
        return false;
      }

      var monthC = diffValue / month;
      var weekC = diffValue / (7 * day);
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;

      if (monthC >= 1) {
        console.log(parseInt(monthC) + '个月前');
        return `${parseInt(monthC)}个月前`;
      } else if (weekC >= 1) {
        console.log(parseInt(weekC) + '周前');
        return `${parseInt(weekC)}周前`;
      } else if (dayC >= 1) {
        console.log(parseInt(dayC) + '天前');
        return `${parseInt(weekC)}天前`;
      } else if (hourC >= 1) {
        console.log(parseInt(hourC) + '个小时前');
        return `${parseInt(hourC)}个小时前`;
      } else if (minC >= 1) {
        console.log(parseInt(minC) + '分钟前');
        return `${parseInt(minC)}分钟前`;
      } else {
        console.log('刚刚');
        return '刚刚';
      }
    }
  }

  return getDate(pretime);
}

_formatTimeDetail(); // 3小时前,上面的传入的是可控制的
```

:::

上面的代码无论是在小程序中还是在网页中,直接在控制台,测试一下就知道这个函数具体是做什么的

前面那个`_formatTime`函数主要是将服务器端的时间转化为类似这种`2020-06-20 14:38:16`格式,而后面的`_formatTimeDetail`这个函数是将`年-月-日 时 分 秒`这种格式转化为多少分钟前,几天前,几周前等这种格式

关于用户名与手机号的处理方式,也可参考[用户名-手机号加密特殊处理](/fontend/js/utils-name-mobile-encrye)

## 结语

本文主要介绍了利用`swiper`这个组件实现类似新浪头条上下间歇性滚动的效果,并怎么对用户名,电话号码在小程序端进行加密处理

注意,这个用户名和电话号码,存到数据库当中是完整的,我们只是从云数据库中读取到这个数据后,然后做特殊处理的

还有就是怎么将时间进行格式化,转化为自己想要的格式,对于新手来说,这是一个难点,也比较灵活多变,具体需求,具体分析

</div>

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />