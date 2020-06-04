# 小程序-云开发-多图片内容安全检测

## 全文导图

<img class="medium-zoom" src="../images/img-security-check/guide-map.jpg" alt="小程序-云开发-多图片内容安全检测" />

## 快速导航

- [前言](#前言)
- [示例效果](#先看一下示例效果)

## 前言

相比于文本的安全检测,图片的安全检测要稍微略复杂一些,当您读完本篇,将 get 到

- 图片安全检测的应用场景
- 解决图片的安全方式
- 使用云开发中云调用方式对图片进行检测
- 如何对上传图片大小进行限制
- 如何解决多图上传覆盖问题

如有收获,不忘三连击(给赞,留言,分享~

> ## 先看一下示例效果

当用户上传敏感违规图片时,禁止用户上传发布,并且做出相对应的用户友好提示
<img class="medium-zoom" src="../images/img-security-check/finish-demo.gif" alt="最终完成实例效果">

如果您想体验,可微信扫下方小程序码,进入发布页面体验

<img class="medium-zoom" src="../images/img-security-check/jiahao-ruisen-min-code.jpg" alt="佳豪瑞森装饰微信小程序码">

## 完成 UI 展示

对于`wxml`与`wxss`,大家可以自行任意修改,本文重点在于图片安全的校验

```
<view class="image-list">
   <!-- 显示图片 -->
   <block wx:for="{{images}}" wx:key="*this"><view class="image-wrap">
       <image class="image" src="{{item}}" mode="aspectFill" bind:tap="onPreviewImage" data-imgsrc="{{item}}"></image><i class="iconfont icon-shanchu" bind:tap="onDelImage" data-index="{{index}}"></i></view>
   </block>
   <!-- 选择图片 -->
   <view class="image-wrap selectphoto" hidden="{{!selectPhoto}}" bind:tap="onChooseImage">
        <i class="iconfont icon-add"></i>
   </view>
</view>
<view class="footer">
    <button class="send-btn"  bind:tap="send">发布</button>
 </view>
```
