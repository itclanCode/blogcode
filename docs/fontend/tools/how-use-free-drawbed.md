---
title: 如何使用免费图床
sidebarDepth: 3
---

## 如何使用免费图床

## 快速导航

<TOC />

## 前言

**一款基于 GitHub API 的免费、稳定且高效的图床管理神器。**

你是否曾经因为图床问题而烦恼过么?

⒈ 在用静态博客网站写文章，愁图片不知怎么保存,难道全部放到仓库当中去?

⒉ 使用一些第三方免费的图床,网上复制的心仪图片链接，用着用着,发现某一天就失效了

⒊ 特意花钱租个云服务器托管图片，单纯只是为了存储图片,真的划不来，而且上传操作真的好繁琐

⒋ 曾经用过某某公司的免费图床，但都有时间期限，速度又慢，存储空间小，还限流量

⒌ 担心一些第三方图床网站一旦跑路,那么自己所有的图片资源都随之消失

**难道就没有一款真正免费的，稳定的，不限量的，访问速度还很快的图床管理工具吗**

当然是有的..

免费图床，基于 GitHub API 搭建的图床管理神器，免费、稳定、极速、高效，免下载，免安装，打开[免费图床](https://img.itclan.cn) 网站 即可使用

你只需注册 GitHub 账号，创建一个仓库来作为自己的图床，同时设置获取你 GitHub 账号的一个 Token 就可以了的

## 免费图床 Features 功能特性

- [x] **拖拽图片**进行上传。

- [x] **复制粘贴图片**进行上传。

- [x] **选择文件夹图片**进行上传。

- [x] 图片**重命名**。

- [x] 图片名**哈希化**（保证图片名永不重复）。

- [x] 一键复制 GitHub 和 CDN 图片外链。

- [x] 自动目录（可自动生成存储图片的目录）。

- [x] 图床管理（仓库图片的增删改查）。

## 如何使用

⒈ 创建一个用来存储图片的 [GitHub 仓库](https://github.com/new) 。

![01-Create-a-New-Repository](https://cdn.jsdelivr.net/gh/itclanCode/blogimg@main/01-Create-a-New-Repository.6oga5c4va8g0.png)

⒉ 创建一个有 repo 权限的 [GitHub Token](https://github.com/settings/tokens),选择 Personal access tokens

Generate new token

![02-New-personal-access-token](https://cdn.jsdelivr.net/gh/itclanCode/blogimg@main/02-New-personal-access-token.47wszh6220a0.png)

新生成的 Token 只会显示一次，如有遗失，重新生成即可。

![](https://cdn.jsdelivr.net/gh/XPoet/xpoet-image-hosting/PicX/image.krns6rvn9l.png)

⒊ 进入 [免费图床官网](https://img.itclan.cn) ，进行图床配置（绑定 GitHub Token、存储图片的仓库和目录）。

⒈ 填写 Token，自动获取该用户下的仓库。

![03-tuchuang-config](https://cdn.jsdelivr.net/gh/itclanCode/blogimg@main/03-tuchuang-config.1mqq6liabqg0.png)

⒉ 在仓库的下拉列表中，选择一个作为图床的仓库。

⒊ 选择一种目录方式（目录即仓库里存放图片的文件夹）。

- 新建目录：需手动输入一个新目录。

- 根目录：图片将直接存储在仓库根目录下。

- 自动目录：自动生成日期格式 `YYYYMMDD` 的目录

- 选择仓库目录：自动获取仓库下所有目录，选择一个即可。

完成图床配置，现在就可以开始上传图片了

⒋ 上传图片。

- 可通过**拖拽图片**到上传区域进行上传。

- 可通过**复制粘贴图片**到上传区域进行上传。粘贴图片时，需先点击激活上传区域，如下图，**上传区域的虚线边框变成墨蓝色，表示已激活**。支持通过键盘快捷键粘贴（`ctrl + v` / `command + v`）。

* 可通过**选择图片**到上传区域进行上传。


    选择图片完成后，会显示出图片详细信息，你可以**自定义修改图片名称**和**给图片加上哈希吗（确保图片名不重复）。**

⒌ 图片上传成功后，即可复制图片外链。

⒍ 图床管理，对仓库里保存的图片进行管理。

![04-manage-imgs](https://cdn.jsdelivr.net/gh/itclanCode/blogimg@main/04-manage-imgs.2c10z16u7cg0.png)

## 结语

所有上传的图片都是上传到自己的 github 仓库当中的,也有 jsdelivr 作为 cdn 加速,无论是 md 中直接插入图片还是链接都是可以的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
<footer-AvoidCopy />