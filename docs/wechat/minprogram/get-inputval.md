---
title: 微信小程序中如何获取表单控件中的值
autoGroup-2: 小程序技术
---

## 微信小程序-如何获取用户表单控件中的值

## 快速导航

<TOC />

## 背景

在小程序开发中,经常有用到表单,我们往往需要在小程序端获取用户表单输入框中的值(通常用户输入的有:`switch`,`input`,`checkbox`,`slider`,`radio`,`picker`)等,通过触发事件,然后提交给后端处理

那么在小程序当中有哪些方式可以获取到表单中的值呢,又怎么通过非表单提交的方式获取用户输入框中的值呢

换言之,若提交按钮在`form`之外,又如何实现表单的提交呢

在小程序中有两种方式可以获取表单的值

## form 表单获取表单组件的值

这是最普遍通用的一种方法,所有用户输入的组件放置在`form`内,当点击`form`表单中`form-type`为`submit`的`button`组件时

它会将表单组件中的`value`值进行提交,但此时需要在表单组件中加上`name`来作为`key`

如下 UI 所示:

<div align="center">
<img class="medium-zoom lazy" width="250" height="450" loading="lazy"  src ="../images/get-inputval/form.png" alt="效果展示" />
</div>

::: details 点击即可查看 wxml

```html
<view class="container">
  <form bindsubmit="formSubmit">
    <view>
      <view class="title">switch</view>
      <switch checked name="switchChecked" />
    </view>
    <view>
      <view class="title">radio</view>
      <radio-group name="radio">
        <label><radio checked value="boy" />男</label>
        <label><radio value="girl" />女</label>
      </radio-group>
    </view>

    <view>
      <view class="title">checkbox</view>
      <checkbox-group name="checkbox">
        <label><checkbox checked value="itclanCoder" />itclanCoder</label>
        <label><checkbox value="itclan" />itclan</label>
      </checkbox-group>
    </view>

    <view>
      <view class="title">slider</view>
      <slider value="50" name="slider" show-value></slider>
    </view>
    <view>
      <input
        class="input"
        value="{{inputVal}}"
        name="input"
        placeholder="这是一个输入框"
      />
    </view>
    <view>
      <button class="submitBtn" size="default" type="primary" formType="submit">
        提交
      </button>
    </view>
  </form>
</view>
```

以下是`wxss`代码

```css
/* pages/getformdata/getformdata.wxss */
.container {
  padding: 15rpx 40rpx;
}

.title {
  margin: 20rpx 0;
}

label {
  margin-right: 50rpx;
}

.input {
  border-bottom: 1px solid #abcdef;
}

.submitBtn {
  margin-top: 40rpx;
}

button:not([size='mini']) {
  width: 100% !important;
}
```

:::

::: warning 提醒

在上面的示例代码中,你会发现当有多个`radio`,多个`checkbox`时,它会被包裹在`radio-group`,`checkbox-group`中,不然是无法获取到控件中的具体数值的,当然也不是说非得包裹,那只能使用第二种方法获取控件中的值

其中表单中的`switch`,`radio`,`checkbox`中的`checked`并不是必须的,可以填写一个默认初始值,进行控制,在本文示例中,我是给了一个初始值
:::

在`form`表单中绑定了`bindsubmit`事件方法,它会携带`form`中的数据触发`submit`事件

同时`form`表单内的`button`按钮中的`formType`绑定了`submit`事件,它是用于`form`表单组件提交的,会触发`form`组件的`submit(提交表单)/reset(重置表单)`事件

下面来看看逻辑代码:

::: details 点击即可查看逻辑代码

```js
// pages/getformdata/getformdata.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '123',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  // 表单提交
  formSubmit(event) {
    console.log(event); // event.detail.value就可以拿到具体表单中的值
    const {
      switchChecked,
      radio,
      checkbox,
      slider,
      input,
    } = event.detail.value; // 解构
    console.log(switchChecked, radio, checkbox, slider, input); // true "boy" ["itclanCoder"] 50 "123"
  },
});
```

:::

以上通过`form`表单,获取表单中控件的值,是通过在`switch`,`radio-group`,`checkbox-group`,`slider`,`input`组件中添加`name`属性,从而通过`button`中的`formType`结合`form`的`bindsubmit`事件,就可以统一的拿到表单组件中的值

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/get-inputval/getFormdata.png" alt="获取表单中的值" />
</div>

当你拿到表单中的值,就可以继续后面的操作,传值,把对应的字段提交给后台处理,就可以了的

**优点**: 传统的表单提交方式,通过在表单控件内设置`name`的值,在表单统一提交时,就可以通过`event.detail.value`拿到表单中各个表单组件的值,代码量少,简单

**缺点**: 处于`form`表单之外的其他表单控件值是无法拿到的,`button`按钮页必须要在`form`内,并且写法固定

下面介绍一种非表单提交方式,也就是不依赖`form`,同样也可以获取到表单组件的各个数值

这种应用场景在小程序中是很常见的,表单提交数据,不一定就非得是`button`按钮的方式,只要能拿到表单组件中的值,就达到目的了的

## 非表单方式获取表单组件的值

下面是实例效果

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/get-inputval/noformgetdata.gif" alt="获取表单中的值" />
</div>

以下是实例代码,代码与上面类似,只是稍微更改了一下

去除了表单`form`,`name`属性,在表单组件中新增了`bindchange`方法

::: details 点击即可查看非表单方式获取表单组件的值

```html
<!--pages/getformdata/getformdata.wxml-->
<view class="container">
  <view>
    <view>
      <view class="title">switch</view>
      <switch checked bindchange="handleSwitch" />
    </view>
    <view>
      <view class="title">radio</view>
      <!-- radio-group是不能少的,否则就会出问题的,下面的checkbox-group也是 -->
      <radio-group bindchange="handleRadio">
        <label><radio checked value="boy" />男</label>
        <label><radio value="girl" />女</label>
      </radio-group>
    </view>

    <view>
      <view class="title">checkbox</view>
      <checkbox-group bindchange="handleCheckBox">
        <label><checkbox checked value="itclanCoder" />itclanCoder</label>
        <label><checkbox value="itclan" />itclan</label>
      </checkbox-group>
    </view>

    <view>
      <view class="title">slider</view>
      <slider
        bindchange="handleSlideChange"
        value="{{sliderVal}}"
        show-value
      ></slider>
    </view>
    <view>
      <input
        bindinput="handleInputChange"
        class="input"
        value="{{inputVal}}"
        placeholder="这是一个输入框"
      />
    </view>
    <!-- 此处并非用的button按钮,照样可以提交表单数据 -->
    <view>
      <view class="submitBtn" bindtap="handleSubmit">提交</view>
    </view>
  </view>
</view>
```

:::

当在`switch`,`radio-group`,`checkbox-group`,`slider`,`input`中添加了`bindchange`方法,`checked`,`input`发生改变时就会触发 `change` 事件,然后通过携带事件对象,拿到表单组件对应的具体数值

如下代码所示

::: details 点击即可查看逻辑代码

```js
// pages/getformdata/getformdata.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    switchVal: true, // switch默认初始化值
    radioVal: 'boy', // radio初始化值,有时候男女,也可以用1,0等表示男,女的
    checkboxVal: 'itclanCoder', // checkbox初始化值
    sliderVal: 30,
    inputVal: '123', // 输入框初始化值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  // switch中的值
  handleSwitch(event) {
    console.log(event);
    const switchVal = event.detail.value;
    this.setData({
      // 通过setData更改数据
      switchVal,
    });
  },

  // 触发readio
  handleRadio(event) {
    console.log(event);
    const radio = event.detail.value;
    this.setData({
      radioVal: radio,
    });
  },

  // 触发checkbox
  handleCheckBox(event) {
    console.log(event);
    const checkbox = event.detail.value;
    this.setData({
      checkboxVal: checkbox,
    });
  },

  // 触发slideChange
  handleSlideChange(event) {
    console.log(event);
    const sliderVal = event.detail.value;
    this.setData({
      sliderVal: sliderVal,
    });
  },

  // input输入框的值
  handleInputChange(event) {
    console.log(event);
    const inputVal = event.detail.value;
    this.setData({
      inputVal: inputVal,
    });
  },

  // 表单提交
  handleSubmit() {
    console.log(
      this.data.switchVal,
      this.data.radioVal,
      this.data.checkboxVal,
      this.data.sliderVal,
      this.data.inputVal
    ); // true "boy" "itclanCoder" 30 "123"
  },
});
```

:::

以上就是通过非表单提交的方式获取表单组件中的值,此方法不局限于`form`表单,比较灵活,先初始化表单,然后给表单组件绑定`bindchange`事件,当表单组件`checked`,或`input`发生改变时,就会触发`change`事件,然后通过事件对象就可以拿到表单组件的值

在`bindchange`事件的方法内,重新`setData`一次数据就可以了的

**优点**:非表单`form`,`button`组合方式方式提交数据,比较灵活(在表单`form`之外也能提交数据)

**缺点**: 需要添加绑定`bindchange`事件,需要触发`setData`,但频繁的触发`setData`是比较消耗性能,在表单组件不是很多的情况下,可以选用此方式的

::: tip 注意
传统`form`提交数据时,必须要设置`name`来作为`key`,否则就拿不到表单组件中的值,而非`form`表单形式提交数据,需要给表单组件绑定`bindchang`,通过事件对象的方式获取组件中的数据
:::

这个是有应用场景的,比如:如下小程序中我的页面中,的就是用非表单方式提交数据的

<div align="center">
     <img class="medium-zoom lazy" loading="lazy" width="200" height="200"  src ="../images/get-inputval/qing-jizhang-min-code.png" alt="轻记账" />
</div>

## 总结

全文总结两段话就是:

1. 小程序中获取表单组件的值有两种方式,一种是通过传统的`form`结合`button`组合的方式,这种方式有局限性,所有的表单组件都需要在`form`内,通过在表单组件内设置`name`值的方式获取表单组件中的值(必须要设置,否则拿到表单组件的值就是`undefined`)
2. 非表单`form`提交数据的方式是通过在表单组件上绑定`bindchange`事件,通过事件对象的方式,获取`event.detail.value`的方式即可拿到,但同样牺牲性能为代价,需要触发`setData`,从而在最终提交表单时,拿到具体的表单数值

## 相关参考文档

- [form 表单组件](https://developers.weixin.qq.com/miniprogram/dev/component/form.html)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>
<footer-FeedBack />