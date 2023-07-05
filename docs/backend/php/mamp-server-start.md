---
title: MAMP 无法启动 servers 问题
---

## MAMP 无法启动 servers 问题

如果你是`window10`系统,在下载`MAMP`安装这个软件后,启动,报错,如下所示

```js
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
不要安装`MAMP pro`版本,安装了的话,卸载掉,只留 `MAMP`

`MAMP\conf\apache\httpd.conf`

查找`LoadModule perl_module modules/mod_perl.so`,搜索关键词 `mod_perl.so`,将该行注释掉,即可解决

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
