---
title: 小程序-实现折叠面板-手风琴效果
autoGroup-1: 小程序实用案例
---

## 小程序-实现折叠面板-手风琴效果

## 快速导航

<TOC />

## 背景

无论是在小程序还是 h5 网页,折叠菜单,手风琴是一个非常常见的效果,如今也有很多现成的 UI 组件库已经实现了这一效果的,但有时候在写原生小程序时,单单就是一个折叠菜单效果,却要引入整个 UI 库,有点得不偿失

以下就自己手动实现一个的

## 实例效果(点击列表即可体验)

<form-accordingEffect />

## 具体实现

如下是`wxml`示例代码

```html
<view class="content">
  <block wx:for="{{ listDatas }}" wx:key="index">
    <view class="list-content" bindtap="onListClick" data-index="{{ index }}">
      <view>
        <text>{{ item.list_name }}</text>
      </view>
      <view>
        <iconfont
          class="iconfont {{selected[index] ? 'icon-arrow-down' : 'icon-right'}}"
        ></iconfont>
      </view>
    </view>
    <view class="list-text {{selected[index] ? '' : 'hidden-content'}}">
      <view>
        <text selectable="true">{{ item.list_content }}</text>
      </view>
    </view>
  </block>
</view>
```

::: details 如下是`wxss`示例代码

```css
.content {
  padding: 15rpx 15rpx 0 15rpx;
  font-size: 30rpx;
  color: #808080;
}

.list-content {
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 60rpx;
  border-bottom: 1rpx solid #ddd;
}

.list-text {
  padding-top: 15rpx;
  transition: all 0.5s ease;
  text-indent: 40rpx;
  display: block;
}

.hidden-content {
  // 主要利用的是display:none实现隐藏
  display: none;
}
```

:::

如下是折叠菜单逻辑代码

```js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selected: [false, false, false, false, false], // // 这里表示列表项是否展开，默认初始时此数组的元素全为fasle，表示都没展开
    active: null, // 当前展开的项的index值
    listDatas: [
      {
        list_name: '简介',
        list_content:
          '一个靠前排的90后帅小伙,具有情怀的技匠,路上正追逐斜杠青年的践行者',
      },

      {
        list_name: '开发者',
        list_content: '随笔川迹',
      },

      {
        list_name: '微信ID',
        list_content: 'suibichuanji',
      },

      {
        list_name: '微信公众号',
        list_content: 'itclanCoder',
      },

      {
        list_name: '其他业务',
        list_content:
          '广告文案策划编写/短视频制作(特效,后期视频处理)/配音/公众号代运营',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  // 点击列表,收缩与展示
  onListClick(event) {
    let index = event.currentTarget.dataset.index;
    let active = this.data.active;

    this.setData({
      [`selected[${index}]`]: !this.data.selected[`${index}`],
      active: index,
    });

    // 如果点击的不是当前展开的项，则关闭当前展开的项
    // 这里就实现了点击一项，隐藏另一项
    if (active !== null && active !== index) {
      this.setData({
        [`selected[${active}]`]: false,
      });
    }
  },
});
```

如上代码就可以实现手风琴的效果,主要利用的是`css`中的`display:none`,默认的一些子选项是隐藏的,然后列表的数据的名称以及要展示的内容放在一个数组`listDatas`中,随后,循环列表渲染

在列表中绑定点击事件,在元素上设置`data`属性,在事件对象中就可以获取到,最终通过`setData`修改数据,以达到实现手风琴的效果

## 结语

实现这个手风琴,主要还是在怎么控制子选项的一个状态`selected`,通过列表的索引,然后进行控制`selected`的状态,实现子项列表内容的显示和隐藏

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>
<footer-FeedBack />
<footer-AvoidCopy />