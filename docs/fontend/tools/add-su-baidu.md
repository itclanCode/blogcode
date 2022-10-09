---
sidebarDepth: 3
title: 如何添加百度云加速-给网站添加防护
collapsable: true
---


## 如何添加百度云加速-给网站增加防护

## 前言

当我们做完网站之后,能够让用户又好又快的打开自己的网站,这是一个基础,如果网站打开速度很慢,或者打不开,那么用户会离开,丢失

这明显不是我们所能忍受的

尤其是在面对一些网络`DDOS`攻击的时候,对网站进行防御和加速,那就显得尤其重要了的,网站的性能优化一直都是一个值得做的事情

今天给大家分享下使用百度云加速,很多同学,在第一次使用百度云加速的时候,会遇到一些问题,使用`cname`正确的解析后,网站却无法访问了的

从而对百度云加速,敬而远之的

## 前提条件

1. 登录注册[百度云加速账号](https://su.baidu.com/),并通过实名认证(需要拍摄上传手持正反面身份证照片)
2. 网站是需要经过工信部备案的
3. 网站是具备支持`https`证书的，非http协议类的网站无法使用云加速(比如:TCP/IP,Socket等)

## 相关文档

[百度云加速使用文档](https://su.baidu.com/help/index.html#/10_changjianwenti/1_changjiangongnengFAQ.md)


## 可能会遇到的问题

### 通过`cname`方式解析域名,网站却无法访问

1. 检查百度云加速,子域名名称是否设置正确,其中指向的`ip`,为自己服务器的`ip`,别名`cname`的名称解析到`DNS`解析当中是否正确
2. 证书管理,证书列表里面是否上传了对应的证书

## 总结

百度云加速后台有很多东西,想要更深入的了解里面的一些特性的话,需要多看帮助在线文档的,基本上都是一些辅助性的功能


<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />