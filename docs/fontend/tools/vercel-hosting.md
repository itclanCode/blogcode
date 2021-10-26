---
title: 如何将 github pages 迁移到 vercel 上托管
---

## 如何将 github pages 迁移到 vercel 上托管

## 快速导航

<TOC />

## 前言

早期网站使用 `github pages`,后来迁移到 coding,最近又放到腾讯云网站静态托管,无论是 coding 的 cos 存储桶,还是静态网站托管

他们都是收费的,那有没有免费的托管商呢,既不影响网站的访问速度还免费,于是,找了一下,还真有,[vercel](https://vercel.com/)和[Netlify](https://www.netlify.com/),就是免费的

其中大名顶顶的`Next.js`,`create-react-app`,`Nuxt.js`等就是部署在部署托管在`vercel`的,而`vuejs`,`reactjs`等就是托管在`Netlify`上的

想必经常打开这些鼎鼎大名官网的时候,访问速度还是可以的

今天说一下这个`vercel`,Vercel 可以部署任何前端应用程序的最佳场所。号称以零配置部署到我们的全球边缘网络,动态扩展到数百万个页面而不会费力

一键导入(支持 github,gitlab,BitBucket),自己的存储库，然后推送。vercel 内置的`CI / CD`系统会在每次代码更改时触发

体验过后,确实方便,强大

## 为什么选择 vercel

⒈ 免费部署托管前端应用

⒉ 支持一键导入(github,gitlab),零配置

⒊ 支持自定义域名以及配置 ssl 证书,https.

⒋ 简单友好,个人账户免费,可以部署 next.js,Nuxt.js,Gatsby.js,Angular,Ember.js,Hexo,Eleventy,Hugo,Docusaurus2,Preact,Dojo,Vue.js,Jekyll 等

## 前提条件

⒈ 先成功部署 github pages(本文以 github pages 为例,其他类似的应用也是如此)

⒉ 然后登陆 vercel 官网, 一键导入

## 怎么使用呢

在自己的 github 仓库中找到 github pages 仓库

<div align="center">
   <div>
   <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/vercel-hosting/1607689315260-01-github.png" alt="github" />
   </div>
   <p>(找到自己github pages的仓库)</p>
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/vercel-hosting/1607689480201-02-github.png" alt="github" />
    <p>(在vercel上导入github 仓库的代码)</p>
     <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/vercel-hosting/1607689554950-03-github.png" alt="github" />
</div>
等待导入部署即可

## 自定义域名解析

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/vercel-hosting/1607690100246-04-github.png" alt="github" />
</div>

点击 Settings👉Domains👉 输入自己的域名，并在域名购买方控制台(在阿里买的域名就去阿里控制台,在腾讯云买的域名,就去腾讯云的控制台)添加域名解析（CNAME）

解析完成后即可通过自己的域名访问自己的博客了

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/vercel-hosting/1607690180347-05-github.png" alt="github" />
</div>

## 总结

当你不满足于 github pages,嫌弃它访问得慢,是可以选择 vercel 来进行托管的,也支持自定义域名,免费的一个 ssl 证书

只要一键导入代码就可以了的,非常简单方便,可以一键部署前端很多应用..

## 参考文档

- [Vercel 官网](https://vercel.com/)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
