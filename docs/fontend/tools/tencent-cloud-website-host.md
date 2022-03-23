---
title: 如何将代码部署到腾讯云网站静态托管
autoGroup-1: 网站部署
---

## 如何将代码部署到腾讯云网站静态托管

## 快速导航

<TOC />

## 前言

之前将网站代码部署到 coding 上,并成功迁移到腾讯云上存储桶 cos,但依旧发现很麻烦,而且主要是对象存储`cos`是收费的,每天看账号余额不足,着实难受

看到腾讯云今年推出的静态网站托管,于是跃跃欲试,试过后,果然是强大

## 前提准备

⒈ 登录腾讯云平台,[进入控制台](https://console.cloud.tencent.com/)

⒉ 在顶部菜单栏的**云产品**中找到**云开发**下的静态网站托管(如下图所示)

<div align="center">
<img class="medium-zoom lazy" loading="lazy" src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/tencent-cloud-website-host/1607482256991-01-state-websit-host.png" alt="腾讯云" />
</div>

## 创建云开发坏境

如果使用腾讯云的静态网站托管,需要先创建一个云坏境,它会自动的构建初始化一个坏境

在你创建好后,你只需要把本地打包好的 dist 文件扔到该坏境的根目录下就可以了,相当于只是做了一个上传代码的操作,而背后的部署,容器等处理,静态网站托管自动帮你处理了的

<div align="center">
<img class="medium-zoom lazy" loading="lazy" src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/tencent-cloud-website-host/1607483176290-02-create-env.png" alt="腾讯云" />
</div>

## 将本地打包的代码放置到根目录

当你创建好坏境后,并且添加成功自定义域名(需要备案),并且解析成功后,可以配置 ssl 证书,以 https 安全访问

你就可以将本地打包后的代码扔到你创建好的坏境当中去了的(如下所示)

<div align="center">
<img class="medium-zoom lazy" loading="lazy" src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/tencent-cloud-website-host/1607483251946-03-push-code.png" alt="腾讯云" />
 <p>(你可以手动上传代码文件,也可以通过命令行cli工具方式上传)</p>
</div>

## 使用 cloudbase cli 工具部署文件到 cloudBase

### 科普一下静态网站托管

`cloudBase`是腾讯云提供的一个新的能力,使用`cloudBase`静态网站托管可以为自己创建的 web 应用,静态资源提供快速,安全的托管服务

只需要输入一个命令,就可以快速部署静态资源,并且使用`cdn`(内容分发网络)加快资源的访问速度(这个是要收费的,如果不清楚的,不要随意使用,是有代价的)

### 主要功能

**HTTPS**:cloudBase 静态网站托管内置了`HTTP`与`HTTPS`,无需额外配置就可以使用,可以申请免费的 ssl 证书,有效期一年,这个确实挺方便的

**自定义域名**:`cloudBase` 静态网站支持自定义域名,可以通过自己的私有域名访问静态资源,但前提要准备好备案的域名,否则无法实现自定义域名

**快速分发**:静态资源将会被缓存在遍布各地的 cdn 边缘服务器上,无论你的用户身处何处,内容都可以快速加载(这个也是我比较看重的)

**命令行部署**: 利用`cloudBase cli`可以轻松部署文件到`cloudBase`

### 安装 cloudBase cli 工具

1. 安装 Node.js,可以从官网下载,选择版本 LTS,并且版本大于 8.6.0+

```js
npm - v; // 可以查看到安装的node版本
```

2. 使用 npm 安装 cli

```js
npm i -g @cloudbase/cli
```

3. 或使用 Yarn 安装

```js
yarn global add @cloudbase/cli
```

::: warning 警告
如果`npm install -g @cloudbase/cli`失败,可能需要修改`npm`权限,或者以系统管理员身份运行如下代码

```js
sudo npm install -g @cloudbase/cli
```

:::

4. 测试 cloudbase-cli 是否安装成功

使用`cloudbase -v`可以查看`cli`的版本,若终端有输出,那么就表示成功了的

```js
cloudbase - v;
```

这个 cloudbase 命令可以简写成`tcb`,是云开发产品的简称(即 Tencent cloud base),可以使用`tcb -h`查看所有 tcb 的命令

## 确保已成功开通云开发服务

在开始使用云开发服务之前，需要登录腾讯云[云开发控制台](https://console.cloud.tencent.com/tcb)，确保已经开通了云开发服务，并且已经创建了可以使用的环境

### 登录

登录腾讯云账号,获取到授权后,`cloudBase cli`才能操作资源,`cloudBase cli`提供了两种授权方式

⒈ 腾讯云-云开发控制台

⒉ 云 API 密钥授权

### 腾讯云-云开发控制台授权

在终端中输入下面命令

```js
tcb login
```

当你输入这行命令后,会自动打开云开发控制台获取授权,并同意授权按钮允许`cloudBase cli`获取授权

## 腾讯云-云 API 密钥授权

首先要腾讯云官网获取[获取云 API 密钥](https://console.cloud.tencent.com/cam/capi),然后在终端中输入如下命令

```js
tcb login --key
```

紧接着,输入云 API 密钥的`SecretId`和`SecretKey`即可完成登录

### ci 中的登录

在 ci(持续集成)构建中,可以使用下面的方式通过 API 密钥直接登录

```js
tcb login --apikeyId xxx --apiKey xxx
```

至此 cloudbase-cli 坏境已经完成

## 全量部署

云开发 cli 提供了直接部署网站文件的命令,在需要部署的文件夹目录下,直接运行`hosting:deploy`命令即可

将当前目录下所有文件部署到静态网站中，如下所示

```js
$ cd dist
$ cloudbase hosting deploy -e envId(此为坏境的ID,在自己的云坏境中可以查看到)
```

当你执行这条命令时,可以部署成功,但会提示这条命令即将被废弃的,只需要按照提示

重新输入指定的命令就可以了的

## 部署文件

有时候,并不想要全量的部署,只需要上传某单个指定的文件,那么就可以使用下面的命令,当不指定`cloudPath`时,文件会上传到根目录

```js
cloudbase hosting deploy localPath(本地路径) cloudpath(云坏境目录的路径) -e envId
```

如下示例所示

```js
# 将当前目录的文件部署到根目录,即将 hosting 目录下的所有文件部署到根目录,如果不指明hosting本地目录,默认时上传当前目录下的所有文件
cloudbase hosting deploy . -e envId

# 将 static 目录下的 index.js 文件部署到 static/index.js
cloudbase hosting deploy ./static/index.js static/index.js -e envId
```

::: warning 注意
当您使用 vue.history 模式时，需要在静态网站-设置栏中配置错误页面为 App 依赖的页面。
部署文件单个文件理论最大值为 50TB，文件数量无限制，具体以实际情况为准
:::

## 查看云开发环境的信息

使用下面的命令展示静态网站的状态,访问域名等信息

```js
cloudbase hosting detail -e envId
```

## 删除文件

使用下面的命令可以删除静态网站的存储空间中的文件或文件夹

```js
cloudbase hosting delete cloudPath(云环境路径) -e envId
```

## 查看文件列表

使用下面的命令部署展示静态网站存储空间中的文件

```js
cloudbase hosting list -e envId
```

## 路径说明

- **localPath** 为本地文件或文件夹的路径，为 目录/文件名 的形式，如 `./index.js`、`static/css/index.css` 等
- **cloudPath** 为云存储文件或文件夹的相对根目录的路径，为 目录/文件名 的形式，如 `index.js`、`static/css/index.js`等

::: tip 注意
Windows 系统中 `localPath` 为本地路径形式，是系统可以识别的路径，通常使用 `\` 分隔符。`cloudPath` 是云端文件路径，均需要使用 `/`分隔符

在上传文件时,路径时要格外注意的
:::

## 注意事项

⒈ 如果使用 wordpress 创建了一个初始化坏境,它的云数据库 TencentDB 的 CynosDB 是收费的

⒉ 若坏境中没有部署任何应用,可以将`cynosDB`删除掉,不删除,会一直占用资源,每小时都会扣费,土豪的,随意

⒊ 静态网站托管也是收费的,它是按量进行扣费,如果你想完全使用免费的托管,可以选择使用 github pages,但是访问速度,不一定能够得到保障.

## 总结

总得来说,使用静态网站托管网站还是挺方便,快捷的,这个云开发 `CloudBase`很厉害,能够部署很多应用

像`Express应用`,`Vue应用`,`Nuxt SSR应用`,`React应用`,`Koa应用`.`Nodejs云托管`等应用,甚至自己在上面搭建一个坏境,都可以.

确实是厉害,一键部署,无感知,不需要去操心 docker 容器,以及担心坏境的混淆等,省去了运维的操作,弱化后端,运维的能力,让开发者专注自身业务开发,达到快速上线,实现自己想要的能力

静态网站托管本身就是依赖云开发`cloudBase`的,如今,市面上的技术框架服务,基本上都覆盖了的,不得不承认

腾讯云云开发在这方面的先进

## 相关参考文档

- [静态网站托管](https://cloud.tencent.com/document/product/876/40270)
- [使用 cli 静态网站托管](https://cloud.tencent.com/document/product/876/47142)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
<footer-AvoidCopy />