<!-- ## title: 云服务器建站

## 云服务器建站

## 快速导航

<TOC />

## 购买云服务器

## 登录 linux 服务器

几种登录 linux 服务器的方法
线上登录/本地 ssh 登录

## 安装宝塔面板

1. 链接到 linux 服务器(线上登录/本地 putty/ssh 方式)

使用 root 账号登录 linux 服务器

[安装宝塔面板](https://www.bt.cn/bbs/thread-19376-1-1.html)
centos 安装命令

```
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

## 如何卸载宝塔面板

有可能因为其他一些原因需要重新安装其他配置,需要到 linxu 上卸载宝塔软件

通过宝塔 linux 面板安装的所有软禁卸载如:ngix,mysql,php 等

1. 链接到 linux 服务器
   使用 root 账户及密码登录 linux 服务器
   输入宝塔 linux 面板卸载指令
   复制下面的宝塔 liunx 面板的卸载指令到命令行窗口

```js
/etc/init.d/bt stop && chkconfig --del bt && rm -f /etc/init.d/bt && rm -rf /www/server/panel
```

## 宝塔面板安全设置

面板设置,宝塔面板的用户名
用户名和密码
将当前实例 IP:添加到域名解析

## 宝塔面板添加站点和 ssl 证书安装

## 宝塔面板安装 wordpress 新站点程序

下载 wordpress 文件放置到根目录下

## 迁移网站到宝塔面板环境站点中

导出本地数据库
解压自己本地 wp 网站
创建网站数据库要一致
修改 wp_options,将本地域名改为线上域名,同时要在网站中设置伪静态

## 宝塔软件备份网站

阿里云登录宝塔面板,需要开放防火墙/安全组是否有放行面板[8888]端口

## 批量替换 WordPress 文章中图片 URL 地址的方法

- [批量替换 WordPress 文章中图片 URL 地址的方法](https://www.zmki.cn/4040.html)
- [WordPress 批量替换 localhost 方法介绍](https://www.dujin.org/737.html)
- [wordpress ip 更换](https://blog.csdn.net/qazwsx2345/article/details/21813721)
- [WordPress 批量替换 url 插件 Velvet Blues Update URLs 安装使用](https://cloud.tencent.com/developer/article/1141296)
- [WordPress 搬家更换域名或者批量数据库修改字符的方法](https://www.itbulu.com/wp-change-domain.html)
- [WordPress 图片路径批量替换方法](https://www.pieruo.com/16592.html)
- [常规解决 WordPress 导入数据库"utf8mb4_unicode_ci"报错问题](https://www.itbulu.com/wp-utf8mb4.html)

## 访问域名时,出现以下状况

Forbidden
You don't have permission to access / on this server.

宝塔面板中设置伪静态即可解决

## 插件

- wprepeat 文件替换
- WordPress 轻水印插件
- Which Template File 哪个模板
- UpdraftPlus-备份/恢复
- Show Current Template
- Reveal Templa

## 如何查看 phpMyadmin 数据库版本

在 sql 中执行`select version()`即可查看对应数据库的版本

## 服务器是 2G 以上的

数据库 Mysql 版本可以安装 5.7 的,否则安装 5.5 就就可以了的,不建议安装 php5.5 以下版本
，,程序漏洞
不要选择最高的 mysql 版本也不要选择最低的,选择中间的 mysql5.6 版本就可以了的

要么就每次导入数据库时,需要更改编码格式的

本地开发坏境与线上安装的版本若不一致,有出入,在网站迁移时,就会出问题

要注意 LAMP 的版本,本地 php 版本与线上的可以一致,但是数据库不要选最高的,兼容性有问题，还有 phpMyAdmin 也是如

此

腾讯云打开phpAdmin时,注意安全端口888,打开不了的话,检查端口是否放行


## 免费的电子商务网站



-->
