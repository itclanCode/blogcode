---
title: 小程序-云开发-实现微信云支付功能
---

## 小程序-云开发-实现微信云支付功能

## 快速导航

<TOC />

## 前言

对于支付下单在小程序当中是一个非常重要的功能,在未接入云支付之前,想要实现一个支付下单的功能,借助微信官方提供的`wx.requestPayment()`这个接口,发起微信支付

需要获取小程序的`openId`,然后调起数据签名(`timeStamp`,`nonceStr`,`package`,`signType`,`paySign`),这些字段参数处理起来仍是有些麻烦的

但接入了云支付之后,实现一个支付功能,就相当简单容易了,免签名,直接获取小程序`wx.requestPayment`的所需参数

开发者无需关心证书、签名、也无需依赖第三方模块，免去了泄漏证书，支付等敏感信息的风险；还支持云函数作为微信支付进行支付和退款的回调地址，不再需要定时轮询，更加高效

您将在本文中学习到:

- 随机生成商品订单号,订单号不能重复
- 实现云支付的功能

<div align="center">
 <img class="medium-zoom lazy" loading="lazy" src="../images/cloud-payment-function/05-pay-animate.gif" alt="小程序-云开发" />
</div>

> ## 前提条件

**资质:** 小程序主体开通微信支付(**微信支付不支持个人小程序,需要企业账户才可以**)的能力,并且已绑定商户号(**绑定开通商户号**)的小程序

<div align="center">
 <img class="medium-zoom lazy" loading="lazy" src="../images/cloud-payment-function/01-paynumber.png" alt="小程序-云开发" />
  <img class="medium-zoom lazy" loading="lazy" src="../images/cloud-payment-function/02-payment.png" alt="小程序-云开发" />
</div>

> ## 开通

开通微信支付云调用,在云控制台 -> 设置 -> 全局设置中开通,如下所示

<div align="center">
 <img class="medium-zoom lazy" loading="lazy" src="../images/cloud-payment-function/03-payment.png" alt="小程序-云开发" />
</div>

点击添加商户号后进行账号绑定，这时候绑定了微信支付的商户号管理员的微信会收到一条授权确认的模板消息

点击模板消息会弹出服务商助手小程序,确认授权之后就可以在云开发控制台看到绑定状态为“已绑定”，而`JS API`权限也会显示“已授权”

> ## 微信支付流程

1. 在小程序端:用户在小程序端点击支付时,使用`wx.cloud.callFunction`调用云函数(例如:支付云函数名为`questionPay`),并将商品描述(`body`),商品订单号`outTradeNo`,子商户号`subMchId`,总金额`totalFee`等信息参数传递给`questionPay`云函数
2. 在云函数端: 在`questionPay`云函数中调用统一下单接口`cloud.cloudPay.unifiedOrder()`,该函数接收一对象,包含的参数有,商品描述(`body`),商品订单号(`outTradeNo`),云坏境的 Id,以及需要填写结果通知回调函数(如:`wechatpay`),它是用来接收异步支付的结果,`questionPay`云函数会返回成功结果的对象中会包含`payment`字段(包含:`appId`,`nonceStr`,`package`,`paySign`,`signType(MD5)`,`timeStamp`)参数,会唤起微信支付的界面
3. 在小程序端`wx.cloudFunction`的`success`回调函数(即调用`questionPay`云函数返回的对象)里调用`wx.requestPayment`接口发起支付请求,而从`questionPay`云函数返回的`payment`对象,参数,包含这个接口所需要的所有信息(参数),会弹出微信支付的界面
4. 用户在小程序端支付成功,`questionPay`就会接收到异步的支付结果

> ## 微信云支付-小程序端代码

以下是小程序端的示例代码

::: details 点击即可查看小程序端代码

```js
// miniprogram/pages/testpay/testpay.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    slideVal: 5, // slide滑块默认初始值
    showSlide: false, // slide滑块默认显示
    showInput: true, // input表单默认隐藏
    onOff: true, // 其他金额切换开关
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  // 滑动滑块
  sliderChange(event) {
    const slideVal = event.detail.value;
    this.setData({
      slideVal,
    });
  },

  // 点击其他金额进行切换
  onOtherPayTap() {
    const onOff = this.data.onOff;
    if (onOff) {
      this.toggleChange(false, true);
    } else {
      this.toggleChange(true, false);
    }
    this.setData({
      onOff: !onOff,
    });
  },

  toggleChange(showSlide, showInput) {
    this.setData({
      showSlide,
      showInput,
    });
  },

  // 点击支付按钮,发起支付
  questionPay(event) {
    const { sliderVal, value } = event.detail.value;
    const showSlide = this.data.showSlide;
    const goodsnum = this._getGoodsRandomNumber();
    const subMchId = '1594460621'; // 子商户号,微信支付商户号,必填
    const body = '解锁探秘';
    const sliderPayVal = sliderVal * 100;
    const inputPayVal = value * 100;
    if (showSlide === false) {
      this._callQuestionPay(body, goodsnum, subMchId, sliderPayVal);
    } else {
      if (value) {
        this._callQuestionPay(body, goodsnum, subMchId, inputPayVal);
      } else {
        wx.showToast({
          icon: 'none',
          title: '亲,您没有输入任何数额,无法解锁哦',
          duration: 2000,
        });
      }
    }
  },

  // 请求questionPay云函数,调用支付能力
  _callQuestionPay(body, goodsnum, subMchId, payVal) {
    wx.cloud
      .callFunction({
        name: 'questionPay',
        data: {
          // 需要将data里面的参数传给questionPay云函数
          body,
          goodsnum, // 商品订单号不能重复
          subMchId, // 子商户号,微信支付商户号,必填
          payVal, // 这里必须整数,不能是小数,而且类型是number,否则就会报错
        },
      })
      .then((res) => {
        console.log(res);
        const payment = res.result.payment;
        console.log(payment); // 里面包含appId,nonceStr,package,paySign,signType,timeStamp这些支付参数
        wx.requestPayment({
          // 根据获取到的参数调用支付 API 发起支付
          ...payment, // 解构参数appId,nonceStr,package,paySign,signType,timeStamp
          success: (res) => {
            console.log('支付成功', res);
          },
          fail: (err) => {
            console.error('支付失败', err);
          },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  // 随机生成商品订单号,订单号不能重复
  _getGoodsRandomNumber() {
    const date = new Date(); // 当前时间
    let Year = `${date.getFullYear()}`; // 获取年份
    let Month = `${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }`; // 获取月
    let Day = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`; // 获取天
    let hour = `${
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    }`; // 获取小时
    let min = `${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }`; // 获取分钟
    let sec = `${
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    }`; // 获取秒
    let formateDate = `${Year}${Month}${Day}${hour}${min}${sec}`; // 时间
    return `${Math.round(Math.random() * 1000)}${formateDate +
      Math.round(Math.random() * 89 + 100).toString()}`;
  },
});
```

wxml 代码

```html
<view class="wrap">
  <form bindsubmit="questionPay">
    <view hidden="{{showSlide}}">
      <slider
        bindchange="sliderChange"
        block-size="15"
        activeColor="#34bfa3"
        value="5"
        min="5"
        name="sliderVal"
        max="200"
        block-color="#34bfa3"
        show-value="{{false}}"
      />
      <view>￥<text>{{slideVal}}</text></view>
    </view>
    <view class="show-input-wrap" hidden="{{ showInput }}">
      <text>￥</text>
      <input
        class="show-input"
        placeholder="1.00-200.00元"
        maxlength="3"
        type="number"
        focus="{{true}}"
        confirm-hold="{{true}}"
        name="value"
        value=""
      />
    </view>
    <view class="other-pay-count" bindtap="onOtherPayTap">
      <text>{{showSlide === false? "其他金额": "取消"}}</text>
    </view>
    <button class="pay-btn" form-type="submit">支付</button>
  </form>
</view>
```

wxss 代码

```css
/* miniprogram/pages/testpay/testpay.wxss */
.wrap {
  height: auto;
  background: #fff;
  text-align: center;
  font-size: 32rpx;
}

.show-input-wrap {
  display: flex;
  justify-content: center;
  margin-top: 40rpx;
}

.other-pay-count {
  font-size: 30rpx;
  color: #34bfa3;
  margin: 40rpx 0;
}

.pay-btn {
  outline: none;
  border: none;
  background: #d43c33;
  color: #fff;
  font-size: 32rpx;
  border-radius: 0;
}
```

:::

上面完成了在小程序端的支付的功能,触发支付操作,请求云函数,并且携带一些参数给该云函数,在云函数返回成功的结果中,拿到返回的参数,然后调用`wx.requestPayment`唤起微信支付.

::: warning 注意

- `subMchId`:子商户号,微信支付商户号,必填
- `body`: 商品描述信息也必须填
- `inputPayVal`: 支付默认金额值是`0.01`,所以需要做一下转化,必须是整型(`int`),不能是小数
- `goodsnum`: 随机生成商品订单号,订单号不能重复(主要解决支付第一次后,无法在重复支付的问题,将订单号,设置为随机数就可以了的)

:::

上面的`...payment`,其实是对象的解构,包含了如下参数,你不用解构也是可以的,挨个的取到对象`value`,传入`wx.requestPayment`中也是可以的

```js
{
  appId: 'wx9fbad659d5dfgdc9bc'; // 是以你自己小程序appId为准
  nonceStr: 'nWQePZDsUCaKgNvP';
  package: 'prepay_id=wx30090731253190aa666629200';
  paySign: 'BFB4834C7969F661962dgdf96E1C37';
  signType: 'MD5';
  timeStamp: '1596071251';
}
```

`...payment`

```js
wx.requestPayment({
  // 根据获取到的参数调用支付 API 发起支付
  ...payment, // 解构参数appId,nonceStr,package,paySign,ignType,timeStamp
  success: (res) => {
    console.log('支付成功', res);
  },
  fail: (err) => {
    console.error('支付失败', err);
  },
});
```

等价于

```js
const payment = res.result.payment;
const { appId, nonceStr, paySign, signType, timeStamp } = payment;
wx.requestPayment({
  // 根据获取到的参数调用支付 API 发起支付
  // ...payment,       // 等价于下面
  appId,
  nonceStr,
  package: payment.package, // 这个package无法解构,真是醉了的
  paySign,
  signType,
  timeStamp,
  success: (res) => {
    console.log('支付成功', res);
  },
  fail: (err) => {
    console.error('支付失败', err);
  },
});
```

> ## 云函数端支付代码

在云函数根目录文件夹`cloudfunctions右键`，选择“新建 Nodejs 云函数”，新建一个云函数`questionPay`，然后再在`index.js`里输入以下代码，然后进行一些修改（注意参数名称是固定的，大小写也要原样写,不要写错）

::: details 点击即可查看云函数端支付代码

```js
// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

// 云函数入口函数
exports.main = async (event, context) => {
  const res = await cloud.cloudPay.unifiedOrder({
    body: event.body, // 商品描述,必填
    outTradeNo: event.goodsnum, // 商户订单号,必填,不能重复
    spbillCreateIp: '127.0.0.1', // 终端IP，必填
    subMchId: event.subMchId, // 子商户号,微信支付商户号,必填
    totalFee: event.payVal, // 总金额,必填
    envId: 'xxx', // 结果通知回调云函数环境,你自己小程序的坏境id
    functionName: 'wechatpay', // 结果通知回调云函数名,非必填参数,即使为空,也不影响支付,但是官方文档里写的是必填参数,表示已醉
  });
  return res;
};
```

:::
利用了`cloud.cloudPay.unifiedOrder`云支付接口,接收小程序端请求该云函数的参数,最终将结果返回
::: tip 注意

- `body`为你的商家名（店名）-销售商品的类名
- `outTradeNo`: 是商户订单号，32 个字符内，只能是数字、大小写字母\_-,代码中是用时间戳随机数解决的
- `subMchId`:你的商户 ID 或子商户 ID，填写云开发控制台- 设置- 全局设置- 微信支付配置里的商户号也可以
- `totalFee`: 是支付的金额，单位是分,注意在小程序要做一下单位转化
- `envId`: 是你的结果通知回调云函数所在的环境 ID
- `functionName`: 结果通知云函数的名称(可以自定义)
  :::

修改完之后，点击`questionPay`云函数目录下的`index.js`，然后右键选择“云函数增量上传：更新文件”或右键云函数根目录文件夹 cloudfunctions，选择“上传并部署：云端安装依赖（不上传 Node_modules）”

最后就可以在开发者工具的模拟器里点击"发起支付"的按钮了，这时会弹出支付的二维码，扫码支付就可以了；也可以使用预览或真机调试

<div align="center">
 <img class="medium-zoom lazy" loading="lazy" src="../images/cloud-payment-function/04-cloud-pay-result.png" alt="小程序-云开发" width="348" height="578" />
</div>

> ## 结语

你会发现用云开发的云支付实现微信支付功能,非常便捷,没有几行代码,你只需要专注自己的业务逻辑开发就可以了的,无需关心证书、签名、也无需依赖第三方模块，免去了泄漏证书，支付等敏感信息的风险

简直是太方便了的

> ## 相关文档

- [微信支付-统一下单云开发官方文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/open/pay/CloudPay.unifiedOrder.html)
- [云开发-微信支付](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/wechatpay.html)
- [发起微信支付 wx.requestPayment](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html)
- [微信支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_3&index=1)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
