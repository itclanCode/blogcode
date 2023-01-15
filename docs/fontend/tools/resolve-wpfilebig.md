---
title: WordPress后台上传文件大小受限制解除方法
collapsable: true
---

## WordPress后台上传文件大小受限制解除方法

## 快速导航

<TOC />

## 前言

`wordpress`后台默认支持上传文件的大小是`50M`， 但只要视频内容超过`50M`，导致视频无法上传到网站上,这里介绍一下几种解决办法


## 方法1-修改php.ini文件

通常文件位置在`/usr/local/php/etc/php.ini` ， 但如果不在上面这个目录下面，可以用`find`命令查找下 `find / -name php.ini `

找到之后直接`vim`编辑或`ftp`下载到本地编辑都可以

需要修改的地方：

`upload_max_filesize = 50M`, 将后面的`50M`修改为自己想要的大小。

`post_max_size = 20M`, 将这个`20M`修改为自己想要的大小

修改后，重启`lamp`环境后，再次上传视频到网站后台仍然失败

## 方法2-修改conf文件

找到对应网站的`conf`文件，修改内容

通常对应网站的`conf`文件在`/usr/local/nginx/conf/vhost`中，找到对应的域名`conf`文件，用vi打开编辑或下载到本地编辑后再上传都可以。

修改的地方：

在`include enable -php.conf`; 这句的上面添加

`client_max_body_size 500m`;

client_body_timeout 300

修改后重启`lnmp`，再次打开后台媒体上传页面发现上传大小已经变成了`500M`

但是在上传视频时仍是失败

## 方法3-big file uploads插件

`wp`后台安装完插件后,启用，并进入设置

将大小设置成你想要多大都可以

然后再次上传视频，发现可以了。

最终问题解决了，但不知道前面2种方法为什么失败了，也许是哪里设置的不对。

所以劝其它的小伙伴，如果你是`wordpress`，那就别折腾什么`php.ini` 或是`conf`了，直接下载插件吧，简单方便，当然如果是服务器运维大神那可能改服务器文件

如果对`php`和服务器不熟悉,不建议修改源码配置文件

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />

