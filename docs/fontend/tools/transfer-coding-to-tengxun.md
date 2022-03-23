---
title: 如何迁移coding静态托管-将网站迁移到腾讯云管理
autoGroup-1: 网站部署
---

## 如何迁移 coding 静态托管-将网站迁移到腾讯云管理

## 快速导航

<TOC />

## 前言

由于之前网站是托管在 coding 上,使用的是它们的自动化集成部署,只要本地`commit`将代码提交到 coding 仓库上,就会自动触发,实现自动部署

说实话,还是挺方便的,访问速度与 github pages 比较起来,个人觉得速度有时还不如 github pages,但是 coding 是国内的,而 github pages 是在国外的

有时候也会出现访问不稳定,掉链子的情况,鉴于技术好奇,于是把`github pages`替换成了`coding`,但最近 coding 的旧版静态网站部署官方通知已经不再维护了的

需要进行升级托管到腾讯云去管理

## 升级至新版

在升级前,先看一下升级文档[升级指引](https://help.coding.net/docs/pages/operating/migrate.html),大概浏览一下就可以

然后点击升级至新版,分别输入填写网站名称,代码仓库(本地打包后的 dist 目录),并选择相对应的网站类型

因为我的网站是用`vuepress`搭建的,所以直接选择静态网站就可以

如果您的网站选用的是`jekyll`,`Hexo`,`Gatsby`等搭建的,那就选与之对应的

<div align="center">
<img class="medium-zoom lazy" loading="lazy" src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/transfercoding/1606543551054-01-shenji.png" alt="coding升级至新版" />
<img class="medium-zoom lazy" loading="lazy" src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/transfercoding/1606543784999-02-shenji.png" alt="coding升级至新版" />
<p>(在使用自定义域名时,需要将CNAME的记录值去你购买服务器厂商添加解析)</p>
<img class="medium-zoom lazy" loading="lazy" src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/transfercoding/1606543973505-03-shenji.png" alt="coding升级至新版" />
<p>(前往腾讯云控制台添加域名)</p>
<img class="medium-zoom lazy" loading="lazy" src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/transfercoding/1606544216215-04-shenji.png" alt="coding升级至新版" />
<img class="medium-zoom lazy" loading="lazy" src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/transfercoding/1606544375888-05-shenji.png" alt="阿里云解析" />
<p>(前往服务器厂商添加解析记录)</p>
</div>

## 注意事项

当你在部署总是失败时,一定要看部署失败的信息,网站访问不了,DNS 要么没有解析成功,要么就是腾讯云部署没有成功的

可以咨询 coding 的客服,也可以在腾讯云提供工单,提了工单后,立马会有工程师咨询帮忙解决问题

coding 虽然是免费使用,但是腾讯云的云存储`cos`,`cdn`却是收费的

如果你每次在 coding 上重新部署一次,便会更新创建一个存储桶,若在 coding 上多次删除网站,多次重新部署创建,都会在腾讯云的对象存储 cos 中创建存储桶,会有存储桶列表历史记录

**在 coding 上删除资源,并不会删掉腾讯云云存储的存储桶**,如果需要删除,需要前往腾讯云对象存储中查看存储桶列表

**在存储桶列表面进行删除的,否则的话,它会一直存在,即使你网站不运行的情况下,每天都会消费**

::: tip 提示
腾讯云主账号,不能欠费,欠费的话,坏境会被隔离,部署也不会成功
:::

## 相关参考文档

- [coding 静态网站服务升级指南](https://help.coding.net/docs/pages/operating/migrate.html)

<footer-AvoidCopy />