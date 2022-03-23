---
title: 如何将网站代码部署到 netlify 上免费托管
---

## 如何将网站代码部署到 netlify 上免费托管

## 快速导航

<TOC />

## 前言

之前分享过,如何将代码部署到[腾讯云网站静态托管](/fontend/tools/tencent-cloud-website-host),也分享过[如何将代码部署到 vercel 上](/fontend/tools/vercel-hosting),今天给大家分享下如何将代码部署到 Netlify 上

## 使用 Netlify 的优势

⒈ 免费托管,一键部署,100GB 的存储容量

⒉ CI/CD: 当你将本地的代码 push 到 github/gitlab 等仓库中,Netlify 会自动触发实现自动部署(与 vercel 一样)

⒊ 自定义域名/支持 https,免费 ssl 证书

⒋ http headers: 你可以定制资源的 http header，从而可以为单页面应用做「缓存优化」等

⒌ CDN: 把你的静态资源推到各个边缘节点，虽然都在国外(跟国内还是没法比..但貌似也没慢多少)

⒍ http redirect/rewrite: 配置 /api 解决跨域问题，根据业务需求配置更多的路由重定向

⒎ 一些强大的辅助性的插件用于提升网站的性能

## 怎么使用 Netlify

这里同样以 github pages 为例,将 github pages 迁移到 Netlify 上进行托管

登录打开[Netlify 官方网站](https://netlify.com/)(自备好梯子)

⒈ 使用 github 账号 授权登录 netlify。在主页点击 `New site from git`按钮，新建站点

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608289457385-00-auhor-Netlify.png" alt="github" />
</div>

### 新建站点(从 git 仓库中导入)

⒉ 创建一个新的站点

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608289528892-01-Create-a-new-site-Netlify.png" alt="github" />
</div>

### 选择一个仓库

⒊ 这个仓库可以从 github/gitlab 中导入

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608289640493-02-select-res.png" alt="github" />
</div>

::: tip 注意
如果想要 Netlify 授权 github 中所有的仓库,那就选择所有,但是一般我们指定特定的仓库就可以了的

这里我是指定到我本地`npm run build`打包构建生成的那个`dist目录`,其中`dist`目录就是在 github pages 中的`xxxx.github.io`这个仓库

你可以指定源代码目录,但是需要注意的是,你需要进行一下配置,`Netlify`应该是放置你打包生成构建的 dist 目录
:::

### 配置 netlify

选择 github 中打包构建那个仓库,一般我们将本地开发源码与构建打包生成的目录,进行分开的,至于是否强行分开,这个并不是固定的,只是项目源码不会上传打包生成的 dist 目录

而将打包构建生成的 dist 目录单独放到一个仓库中独立管理的

这样分开管理代码,有利于代码的迭代和维护

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608289959669-03-build-res.png" alt="github" />
</div>

### 构建 Netlify 选项

⒈ **`build command`**: 如何构建生成静态文件资源，一般会是 `npm run build`

⒉ **`publish directory`**: 静态文件资源目录，一般会是 `public/dist` 等目录

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608289959669-03-build-res.png" alt="github" />
</div>

build command,以及 publish directory,你可以不填,当然你可以指定命令,构建打包使用`npm run build`,而 publish directory,写`public`

这个一般我们在本地执行`npm run build`时就会生成 dist 目录,如果你的源码与构建代码是在同一个仓库进行管理的

那这里就需要填写指定的打包目录

因为我的源码和构建出来的代码已经分开了的,所以这里可以省略的

### 部署成功

只要你正确的导入你构建打包的目录文件,一般都会部署成功,最好不要将源码也一同部署到 Netlify 上的,其实只需要把本地打包构建后的项目文件部署到 Netlify 上就可以了的

### 自定义域名

⒈ 在主面板中找到`Add or register domain`添加或注册域名

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608292293557-04-add-domain.png" alt="github" />
</div>
⒉ 添加域名以及进行域名解析
<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608292405271-05-add-domain.png" alt="github" />
</div>

⒊ 域名管理

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608292513687-06-add-domain.png" alt="github" />
</div>

基本上到了这一步,域名解析,就很容易了,如果之前有 vercel 网站上解析过域名,在你购买域名商的控制台里找到 dns 进行域名解析就可以了的

### 安装插件

在 Netlify 部署网站后,如果你想你的网站运行得更快,除了自己可以对代码进行优化,或使用一些 seo 等让网站跑的更快

`Netlify`也提供了一些插件进行辅助,提升网站的性能

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608293574209-07-plugin.png" alt="github" />
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608293631256-08-plugin.png" alt="github" />
</div>

## 总结

使用 Netlify 部署网站,非常简单,它不仅可以部署 vuepress 应用,可以部署目前前端很多流行的项目,一些静态生成器的网站应用都可以部署在上面(如:Jamstack,React,Vue.js,Gatsby,Angular,Next.js,Sitecore,Drupal 等),非常强大,也支持`CI/CD`命令行终端操作

总之,如果你爱折腾,你可以尝试一下`Netlify`的,而我另一个网站[doc.itclan.cn](https://doc.itclan.cn/)却是部署在 vercel 上的

你可能会有疑问,难道我要到不同的地方去管理代码?其实,不是的,两个网站的内容虽然是一样的,但是同一套代码,只是分别部署在不同的托管商那的,彼此之间并不会有任何干扰

如果你的网站受众人群更多的是国外用户,那么可以选择国外的网站托管商的,如果仅仅就考虑国内用户,那么可以选择国内的

一些服务器厂商,例如:阿里云,腾讯云,西部数码等都可以

如果仅仅是个人博客,用于记录自己的学习,个人觉得,用静态网站生成器构建的网站,就挺不错的,其中`github pages`,`Netlify`,`vercel`作为静态网站托管,都是免费的

而国内的阿里云,腾讯云静态网站托管会收一定的存储资源费用(cdn 节点都在国内,访问速度可能要快点),如果复杂的功能更强大的网站,可以选择云服务器(阿里云的 ECS,腾讯云的 CVM 等都可以).

如果你问我为什么这么折腾,从虚拟主机,静态网站托管,coding 静态托管,腾讯云网站静态托管,vercel,以及 Netlify

甚至还折腾过腾讯云的云托管(业余折腾可以,但是不建议目前把项目放到这上面来的),以及云服务器(ECS/CVM,往后也可以分享下怎么用云服务器建站部署应用的),

因为折腾过,就知道他们彼此各个之间的差异,在以后建站,搭应用的过程中,可以选择最合适的一种方案

而不止于局限就会一种.所谓技多不压身,会多个技术就多一种选择。虽然都是工具,但各有所长.

## 参考文档

- [netlify 官网](https://netlify.com/)
- [netlify 常用配置](https://docs.netlify.com/configure-builds/common-configurations/#javascript-spas)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
<footer-AvoidCopy />