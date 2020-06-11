---
sidebarDepth: 3
title: markdown使用速查
---

## 快速导航

- [常见问题](#常见问题)
  - [README 中添加的图片不正常显示](#在-README-中-添加本地图片不正常显示)

## 常见问题

### 在-README-中-添加本地图片不正常显示

在 md 中引入本地的图片,然后将 md 文件上传到 github 上,发现图片是无法直接显示的,解决此问题,可以引入一些图床

也就是先把图片上传到第三方服务器上,然后在本地的`md`中通过绝对路径 https 的方式引入

- 免费图床服务 - [picb 免费图床](https://www.picb.cc/) - [imgchr 免费图床](https://imgchr.com/)
  在`md`中引入图片有**两种方式**

* **方式 1**:`![](imgUrl)`

```
![Image](图片的网络地止)
如:![tI00h0.jpg](https://t1.picb.cc/uploads/2020/06/11/tI00h0.jpg)
```

- **方式 2**:以`img`标签的形式引入:建议以这种方式进入引入,有时候,上面那种方式会出现一些问题

```
<img src="图片网络地止">
如
<img src="https://t1.picb.cc/uploads/2020/06/11/tIpk0j.jpg" width="148" height="148" alt="itclanCoder公众号" border="0">
```
