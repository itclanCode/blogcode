---
title: 小程序-云开发-实现生成小程序码
---

## 云开发-实现生成小程序码

## 快速导航

<TOC />

## 前言

小程序因为传播快,易分享,现已经成为各大小公司的标配,从曾今你有公众号么,变为你有小程序么?可想而知小程序的火爆程度

那么在小程序中,如何生成小程序码?虽然小程序目前可以分享到朋友圈了的,但小程序码的传播无论是直接分享给好友,还是作为图片分享,或是作为线下扫码入口,都是引流的一种重要的入口

## 实例效果

<div align="center">
 <img class="medium-zoom lazy" loading="lazy" src="../images/cloud-create-small-code/01-demo.gif" alt="小程序-云开发" />
<img class="medium-zoom lazy" loading="lazy" width="200" height="200" src="../images/cloud-create-small-code/min-code.png" alt="" />
</div>

## 具体实现

小程序端代码,在`view`元素上绑定事件

```html
<view bindtap="onViewTap">小程序码</view>
```

小程序端逻辑代码

```js
Page({
  data: {},
  // 绑定的点击事件
  onViewTap() {
    this.createQrCode(); // 调用生成小程序码
  },

  // 生成小程序码
  createQrCode() {
    this.showLoading();
    wx.cloud
      .callFunction({
        // 请求云函数
        // 云函数getQrCode
        name: 'getQrCode',
      })
      .then((res) => {
        console.log(res);
        const fileId = res.result;
        wx.previewImage({
          // 小程序码,生成后直接预览,前台展示
          urls: [fileId],
          current: fileId,
        });
        this.hideLoading();
      });
  },

  // toast生成中
  showLoading() {
    wx.showLoading({
      title: '正在生成中...',
      icon: 'none',
    });
  },

  hideLoading() {
    wx.hideLoading();
  },
});
```

在小程序端就上面几行代码

## 云函数端实现代码

在`cloudFunctions`文件夹下创建`getQrCode`云函数,会默认创建`config.json`,`index.js`,`package.json`三个文件

其中`config.json`内为

```js
{
  "permissions": {
    "openapi": [
      "wxacode.getUnlimited"
    ]
  }
}
```

上面的是利用`wxacode.getUnlimited`生成小程序码的配置,这个配置是固定的

而`index.js`中如下代码

```js
// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext(); // 获取上下文
  const result = await cloud.openapi.wxacode.getUnlimited({
    // 调用生成小程序码的接口，携带一些参数,例如:scene
    scene: wxContext.OPENID,
  });
  // console.log(result)
  const upload = await cloud.uploadFile({
    // 生成的小程序码上传到云存储中
    cloudPath: 'qrcode/' + Date.now() + '-' + Math.random() + '.png', // 生成的小程序码存储到云存储当中去，路径
    fileContent: result.buffer,
  });
  return upload.fileID; // 返回文件的fileID,也就是该图片
};
```

生成小程序码就是上面几行简单的云函数代码就可可以实现,主要是利用`wxacode.getUnlimited`这个接口

获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制

[wxacode.getUnlimited 小程序码生成接口文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html)

## 相关文档

- [wxacode.getUnlimited 小程序码生成接口文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html)
- [cloud.uploadFile 本地资源上传至云存储](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/uploadFile/server.uploadFile.html)

## 结语

在小程序中生成小程序码有两种方式一种是`https调用`,另一种是`云调用`,在本文中就是使用的云调用最为简单,免去了获取`access_token`,免鉴权

在小程序端发起请请求生成小程序码的云函数,云函数端借用云调用根据`wxcode.getUnlimited`这个接口生成小程序码,然后上传到云存储中,返回云存储中的图片的`fileID`,在小程序端就可以拿到云函数端返回`fileID`,根据这个`fileID`把小程序码展示出来的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />