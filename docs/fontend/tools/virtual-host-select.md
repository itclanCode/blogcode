<!-- ---
title: 虚拟主机选择
autoGroup-1: 网站建设
---

## 虚拟主机选择

### 根据网站使用的编程语言来选择

⒈ 网站开发语言为 ASP、.NET、HTML，则选择 `Windows` 系统共享虚拟主机普惠版及其以上型号主机。

⒉ 网站开发语言为 PHP、HTML、WAP，请选择 `Linux` 系统共享虚拟主机普惠版及其以上型号主机。

⒊ 网站开发语言为 PERL、CGI，请选择 Linux / Windows 系统的独享经济版及其以上型号独享虚拟主机

### 根据网站需要使用数据库来选择

⒈ 数据库为 ACCESS、SQL Server ，请选择 Windows 系统的共享虚拟主机普惠版及其以上型号。

⒉ 数据库为 MySQL、SQLite ，请选择 Linux 系统的共享虚拟主机普惠版及其以上型号主机。

## 注意事项

⒈ 虚拟主机产品一般只能使用`ftp`和`web`的主机管理面板来管理产品，并不能如云服务器 ECS 那样可以使用 `Xshell` 来远程登录(这个可以通过手动修改配置,通过 ftp 的方式来管理文件)

⒉ 虚拟主机不能装宝塔面板。云服务器 ECS 才可以安装宝塔面板

3. 如果原先是 windows IIS 的服务器,需要更换操作系统,具体切换,需要在云虚拟主机的,主机信息中可以更换操作系统

## 可能出现的问题

服务器 php 版本与 wordpress 版本不一致,需要更新 wordpress 版本

本地安装时：数据库名是填写自己创建的数据库名,而用户名和密码都是root，不然的话就会错误

::: waring 警告

Your server is running PHP version 5.5.30 but WordPress 5.5.3 requires at least 5.6.20.
您的服务器正在运行 PHP 版本 5.5.30，但 WordPress 5.5.3 至少需要 5.6.20。
:::

## 显示 It works

这表示 apache 服务已经正常安装页面,想要进入 wordpress 后台页面

地止栏中输入`localhost/wp-admin`

## MAMP 启动问题

```
[Tue Dec 01 00:52:15 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 00:52:16 2020] [warn] pid file D:/software/MAMP/bin/apache/logs/httpd.pid overwritten -- Unclean shutdown of previous Apache run?
[Tue Dec 01 00:52:16 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 00:52:16 2020] [notice] Digest: done
[Tue Dec 01 00:52:17 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 00:52:17 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 00:52:17 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 00:52:17 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.
[Tue Dec 01 00:52:20 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 00:52:21 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 00:52:21 2020] [notice] Digest: done
[Tue Dec 01 00:52:23 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 00:52:23 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 00:52:23 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 00:52:23 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.
[Tue Dec 01 00:52:27 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 00:52:29 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 00:52:29 2020] [notice] Digest: done
[Tue Dec 01 00:52:31 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 00:52:31 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 00:52:31 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 00:52:31 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.
[Tue Dec 01 00:56:00 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 00:56:01 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 00:56:01 2020] [notice] Digest: done
[Tue Dec 01 00:56:03 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 00:56:03 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 00:56:03 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 00:56:03 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.
[Tue Dec 01 00:56:08 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 00:56:09 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 00:56:09 2020] [notice] Digest: done
[Tue Dec 01 00:56:10 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 00:56:10 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 00:56:10 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 00:56:10 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.
[Tue Dec 01 00:56:18 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 00:56:19 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 00:56:19 2020] [notice] Digest: done
[Tue Dec 01 00:56:20 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 00:56:20 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 00:56:20 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 00:56:20 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.
[Tue Dec 01 00:56:36 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 00:56:37 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 00:56:37 2020] [notice] Digest: done
[Tue Dec 01 00:56:38 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 00:56:38 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 00:56:38 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 00:56:38 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.
[Tue Dec 01 00:57:20 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 00:57:21 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 00:57:21 2020] [notice] Digest: done
[Tue Dec 01 00:57:22 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 00:57:22 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 00:57:22 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 00:57:22 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.
[Tue Dec 01 00:59:47 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 00:59:48 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 00:59:48 2020] [notice] Digest: done
[Tue Dec 01 00:59:49 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 00:59:49 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 00:59:49 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 00:59:49 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.
[Tue Dec 01 01:00:02 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 01:00:03 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 01:00:03 2020] [notice] Digest: done
[Tue Dec 01 01:00:04 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 01:00:04 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 01:00:04 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 01:00:04 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.
[Tue Dec 01 01:00:20 2020] [warn] Init: Session Cache is not configured [hint: SSLSessionCache]
[Tue Dec 01 01:00:21 2020] [notice] Digest: generating secret for digest authentication ...
[Tue Dec 01 01:00:21 2020] [notice] Digest: done
[Tue Dec 01 01:00:22 2020] [notice] Apache/2.2.31 (Win32) DAV/2 mod_ssl/2.2.31 OpenSSL/1.0.2h mod_fcgid/2.3.9 mod_wsgi/3.4 Python/2.7.6 PHP/7.4.1 mod_perl/2.0.8 Perl/v5.16.3 configured -- resuming normal operations
[Tue Dec 01 01:00:22 2020] [notice] Server built: May  6 2016 10:19:53
[Tue Dec 01 01:00:22 2020] [crit] (22)Invalid argument: Parent: Failed to create the child process.
[Tue Dec 01 01:00:22 2020] [crit] (OS 6)句柄无效。  : master_main: create child process failed. Exiting.

```

不要安装`MAMP pro`版本,安装了的话,卸载掉,只留 MAMP
`MAMP\conf\apache\httpd.conf`
查找`LoadModule perl_module modules/mod_perl.so`,搜索关键词 mod_perl.so,将该行注释掉

- [MAMP 无法启动 servers 问题的解决](https://www.cnblogs.com/wengsy150943/p/12618782.html)

## 下载 wordpress

⒈ 官方下载 wordpress[下载 wordpress](https://wordpress.org/download/),不要去其他第三方下载,有可能会植入一些木马

⒉ 本地解压 wordpress 安装包

⒊ 修改`wp-config-sample.php`文件名将其改为`wp-config.php`

⒋ 打开该文件,修改数据库信息将虚拟主机的数据库信息填到这里的,这个在服务器提供商可以查看到,在云虚拟主机里可以查看到数据库名,数据库密码(我使用的是阿里云的云虚拟主机,腾讯云购买的服务器就去腾讯云查找的)

::: details 点击即可查看配置

```js
<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '数据库名称' );   // wordpres数据库名称

/** MySQL database username */
define( 'DB_USER', '数据库账号' ); // 虚拟主机数据库账号

/** MySQL database password */
define( 'DB_PASSWORD', '数据库MySql密码' ); // 数据库mySql密码

/** MySQL hostname */
define( 'DB_HOST', 'qdm813229483.my3w.com' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

```

:::

## 通过 ftp 工具登录数据库

登录 ftp 服务器中,上传 wordpress 解压出来的文件,上传至服务器根目录下的`htdocs`文件夹中

## 手快忘记密码了怎么办

不断的卸载重装 wordpress,发现始终不行,因为当你装 wordpress 是,数据库已经上传到服务器中了的,登录云虚拟主机删除掉数据库重新安装即可

## 插件

- wooCommerce:搭建自己的电子商务系统
- Polylang 站点多语言支持插件
- LearnPress 在线教学网站搭建插件
- siteOrigin 页面制作插件,可以修改页面的布局,以及元素的交互方式

  - Page Builder by SiteOrigin
  - siteOrigin Widgets Bundle
  - Duplicator:上传网站时需要用到的
  - wordpress reset 重置插件
  - updraftplus:备份网站使用
  - 安装防垃圾邮件插件:Akismet
  - vantage 主题
  - astra 主题
  - Futurio:主题 https://futuriowp.com/demos/
  - elementor Page Builder:最先进的网页构建器
  - metaSlider:幻灯片插件
  - lightbox:点击打开图片,可实现轮播
  - contact form 7
  - social media widget
 * genesis Favicon Uploader:改变网站的图标
 * Easy FancyBox:点击图片,显示
 * Advanced Random Posts Widget
 * Contextual Related Posts
 * Better WordPress Recent Comments:这个插件能在指定位置显示访客评论
 * Wp Super Cache:快速缓存你的网站,减少服务器资源占用
 * Crayon Syntax Highlighter:如果你想要在网站上展示代码
 * Wptouch Mobile Plugin
 * PHP Code For Posts:手动插入相关文章的代码,该插件能在前端运行php代码,也支持小工具的短代码,让你为所欲为
* divi
* Ultra
* Qubery
* WPReplace插件: 批量替换域
* Better Search Replace
* 分类目录-标签转换器（在wordpress后台的工具当中,将站点中的标签和分类进行互转）

## 设计

canva.cn

## Mamip 管理网站

- 下载安装 MAM 软件-进行配置

* 将下载的 wordpress 文件放置到 hothos 下
* wordpress 分前台和后台

## 新建数据库

phpAdmin

创建一个数据库名(后面会用得到)

## 打开 website

地止栏中`localhost/wordpress

数据库名就是自己之前在 phpAdmin 创建数据库名,用户名和密码都是 root

## 如何安装多个 wordpress

可以打开`htdocs`解压 wordpress,重命名,按照同样的方式操作安装本地 wordpress

MAMP 可以在本地建立多个网站

需要更改`wp-config`的数据库信息,与 phpAdmin 的数据库名一致,用户名和密码都是 root,就可以重新再次安装一个 wordpress 了的

## 前台/后台页面

前台:自己能看见的 mywebsite
后台:地止栏中 localhost:8080/wordpress/wp-admin
wordpress 区分前台和后台

## wordpress 安装的几个重要点

1. 确保 webserver 是 Apachach
2. 端口号

## wordPress 性能提升

wordpress 是国外开发的,在国内访问性能不是特别好,它会加载一些资源,头像,字体等,如果不使用 vpn,会导致访问很慢

需要更加一些配置来满足在国内使用 wordpress 的需求

## 设置

- 语言切换
- 去掉头像,隐藏头像
- 插件市场里:安装 useso take over Google 插件,删除除了它之外的一些插件

## 添加/图片视频

怎么样减少流量/资源的消耗

可以把图片/视频上传到其他第三方免费之类空间中,然后通过链接或者 iframe 的方式插入

## 小工具

## 几个基础的概念

⒈ 网站内容

标题,文章,图片等

网站本地开发:想象把男朋友关在家里,本地开发,响应速度快,不必等待网络的延迟

⒉ 空间
用来存放资源的,就是空间,本地的 wordpress 只能自己看,别人无法看到

⒊ 域名

www.itclan.cn

## 上传网站

插件搜索:duplicator

## 数据库连接问题

## 购买付费主题

1. www.themeforest.net
2. theme options

## 如何设置伪静态

## wordpress 基本功 checklist

1. 至少五个页面
2. 页面中包含文字,图片,视频
3. 主菜单
4. 至少包含一个带侧边栏的页面
5. 底部小工具
6. 小工具中至少包含文字页面菜单
7. 设置首页
8. 文章页+带侧边栏的文章

## wordpress 高级主题布局 checklist

1. 增加和删除盒子
2. 做出盒子里的效果
3. 在一行表现出上下结构,又表现出左右结构

## 插件位置

插件搜索:best 关键词 wordpress plugin

1. 速度优化:speed optimization
2. 分析: analytics
3. 搜索引擎优化(SEO):seo
4. 反垃圾:anti-spam
5. 图片压缩:image compress
6. 在线聊天:live chat
7. 邮件营销: EDM
8. 表单: form
9. 安全：securifty
10. 备份: backup
11. 社交分享: social share
12. 自定义样式: custom css
13. 会员:membership
14. 多语言:multi-language

在线安装插件与本地上传安装插件

## 添加用户角色

## 主题选择

1. Avada

## 建站准备

1. 域名/空间:domain(域名/网址),Hosting(主机服务器)+CMS(wordpress)
2. 安装 wp 及主题
3. 资料准备
4. 建站顺序建议

## 安装幻灯片

梅塔幻灯片插件

## 安装页面建立插件

## 添加页面和建立菜单

## 编辑首页

## 网站备份

## 免费无版权网站

1. unsplash.com
2. pixabay.com

## 搞笑必备chrome插件

1. 网页截图 注释 & 录屏
2. Grammarly for chrome:纠词
3. Google翻译
4. Infinity新标签页
5. 1password X - Password Mannager

## linux下安装包

apt-get update
apt-get install zip unzip

## 开发指引

## 如何上传本地文件到云托管
云托管当前不支持上传下载文件，所以目前需要借住静态托管作为中间的公开存储。

1. 将文件打成zip包上传到[静态托管](https://console.cloud.tencent.com/tcb/hosting/index?rid=4&tabId=file)上，例如，上传后的文件地址为 https://test-static.tcloudbaseapp.com/wp.zip。
2. 登录到对应的云托管服务，通过 [webshell](https://docs.cloudbase.net/run/webshell.html) 登录，进入 Wordpress 安装的目录 `cd /var/www/html`
3. 在 `webshell` 内下载zip包 `curl -O https://test-static.tcloudbaseapp.com/wp.zip` 。注：下载后，请尽快删除，避免文件泄露。
4. 解压文件 `unzip wp.zip` 对文件进行覆盖

## 导入 M有SQL 文件
云上数据迁移参考 [MySQL 数据在线导入](https://cloud.tencent.com/document/product/571/13728)

文件导入的话，DMC 控制台最大支持2MB的文件上传，过大的数据需要使用原生的命令导入，参考 [MySQL 离线迁移数据](https://cloud.tencent.com/document/product/571/13729)。

[wordpress后台安装主题或插件时需要ftp账号怎么办](https://blog.csdn.net/cscj2010/article/details/40582461)


家居装修

腾讯云腾讯云出站规则-一键
## 安装宝塔软件

## 上传的文件大小超过php.ini文件中定义的upload_max_filesize值


找到php.ini这个文件,点击MAMP网站中的phpInfo,在phpInfo可以看到

搜索upload_max_filesize 和post_max_size，改一下文件上传最大限制，比如都改为20M


## wordpress的分类和文章管理
cookile-editor


 -->
