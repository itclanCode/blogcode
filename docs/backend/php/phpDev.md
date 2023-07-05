---
title:PHP基础了解
---

## 快速导航

<TOC />

## 开发环境是什么

PHP是一门开发语言。而开发语言写出来的代码，通常需要在指定的软件下才能运行。

因此，我们写好的代码需要（运行）显示出来看到，就需要安装这几个软件来运行代码。

我们把运行我们写代码的几个软件和运行代码的软件统一都可称为开发环境

## 可能存在的疑惑

很多朋友最开始学习的时候，听说某个环境好就安装某些软件。由于缺乏相关知识，所以没有主见。陷入人云即云的怪圈里。今天换这个，明天换那个。

当前验证真理的唯一标准，请始终保证一点：

环境能满足你的学习需求。不要在环境上面反复纠结，耽误宝贵的学习时间。

我们认为环境只要能满足学习要求即可。等学会了后，再去着磨一些更加复杂的互联网线上的、生产环境中的具体配置

不要去纠结各种智能工具,最强大的就是纯手写

## windows环境安装

所谓服务器：不要把它想的太过于高深，不过就是提供一项特殊功能（服务）的电脑而已。

显示网页的叫网页(web)服务器（server）。

帮我们代为收发电子邮件(Email)的服务器叫邮件服务器。

帮我们把各个游戏玩家连接在一起的叫游戏服务器。

帮我们存储数据的叫数据库服务器等等

我们现在使用的一部手机的性能比10年前的一台电脑和服务器的性能还要强劲、给力。

而我们的学习过程当中完全可以把自己使用的这一台windows电脑作为服务器来使用。

原来如此，一讲就通了吧？

我们大多数人使用的电脑通常是windows操作系统的电脑。而我们的讲解主要在windows电脑上进行。

你不需要去理解所谓高深的电脑知识、操作系统原型等。在这一章节当中，你只需要会安装QQ、杀毒软件一样，点击：下一步、下一步即可完成本章的学习。

在最开始学习时，我们强烈建议初学者使用集成环境包进行安装

## 什么是集成环境包

集成环境包比较多。以下的这些全是各种英文名。只不过代表的是不同集成环境包的名字，不用去深纠。如下所示：

1. AppServe
2. PHPStudy
3. APMserv
4. XAMPP
5. WAMPServer等等
对于我们才入门的学习者来说，选择集成环境包的原则：

更新快，版本比较新

操作简单易于上手

选择项不要过多

因此，我们下面使用的集成环境包是：PHPstudy。当然，如果你对此块很熟悉了，也可以自行选择选择集成环境包。

可以以在官方网址下载：

[phpStudy](http://www.phpstudy.net/) 

也可以在百度中搜索：PHPstudy  这个5个字文字母进行下载。

对学习PHP的新手来说，WINDOWS下PHP环境配置是一件很困难的事，就是老手也是一件烦琐的事。因此，无论你是新手还是老手，phpStudy 2016都是一个不错的选择，该程序集成Apache+PHP+MySQL+phpMyAdmin+ZendOptimizer，最新版本已集成最新的 PHP7

<div align="center">
  <img class="medium-zoom lazy" loading="lazy"  src="http://img.php.cn/upload/image/252/487/783/1480300460926999.png" alt="佳豪瑞森装饰" width="200" height="200" />
</div>

## 下载最新版本phpStudy 2016及相关运行库

该程序包集成最新的Apache+Nginx+LightTPD+PHP+MySQL+phpMyAdmin+Zend Optimizer+Zend Loader

一次性安装，无须配置即可使用，是非常方便、好用的PHP调试环境。该程序绿色小巧简易迷你仅有32M，有专门的控制面板

## 安装phpStudy程序

将下载的phpStudy程序解压到某个分区的根目录中，第一次使用会提示你初始化一下:

<div align="center">
  <img class="medium-zoom lazy" loading="lazy"  src="http://img.php.cn/upload/image/199/262/275/1480300593619911.png" alt="佳豪瑞森装饰" width="200" height="200" />
</div>

之后在主控制界面点击启动即可

<div align="center">
  <img class="medium-zoom lazy" loading="lazy"  src="http://img.php.cn/upload/image/527/133/845/1480300606858951.png" alt="佳豪瑞森装饰" width="200" height="200" />
</div>

可随意切换版本

<div align="center">
  <img class="medium-zoom lazy" loading="lazy"  src="http://img.php.cn/upload/image/184/212/578/1480300623808268.png" alt="佳豪瑞森装饰" width="200" height="200" />
</div>

## 写代码的工具选择

写代码的工具有很多。对于刚开始学习PHP的朋友来说。选择工具有几个原则：

1，不要使用带自动提示的工具（例如eclipse、zend studio等PHP开发工具集）

2，写完的代码必须要有颜色高亮显示。（不能使用：txt文本编辑器等无代码颜色显示的编辑器）

你可能想问，为什么呀？

我们发现电视、电影和现实生活中的编程高手，噼里哗啦就写一堆代码，一点都不报错，点击就能运行。而我们对着他们的代码抄袭反倒抄错。这种感觉特别不好

——传说中的这些高手，他们都曾经在基础代码上反复练习过，所以他们不会写错。

而我们需要高手之境界，在学习初期就不能使用先进的工具。这样会浪费我们保贵的练习代码的机会、调试错误的机会。

因为先进的编辑器通常有很多先进的功能，例如：

代码自动显示错误

代码自动换行

这些先进的工具，对于开始入门学习的你，不利于新手产生独立解决问题的能力

## 推荐的开发工具

1. NotePad++ 

https://notepad-plus-plus.org/ 由于某些不可抗的原因，请使用百度搜索NotePad++ 

2.phpstorm（强烈推荐）

[phpstorm](https://www.jetbrains.com/phpstorm/ )

3. sublimeText

这些工具，你只需要下载下来，一直点击下一步，安装到你的电脑上即可

<footer-FooterLink :isShareLink="false" :isDaShang="true" />