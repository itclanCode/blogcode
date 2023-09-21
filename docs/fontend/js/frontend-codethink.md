---
title: 前后端联调前-一个前端动手写代码前的思考
---

## 前后端联调前-一个前端动手写代码前的思考

## 快速导航

<TOC />

在开始写项目之前,一定要先想清楚,然后在动手,不要急于一时的

一顿操作猛如虎,事后,却做的东西,却不满足产品的需要,就是自己很努力,最后发现是在做无用功,最后还不讨好
有的同学过于关注UI界面,展示,却忽视接口设计,结果来来回回折腾,是非常痛苦的

前端项目:用什么前端技术栈,组件,是用第三方的,还是自己纯原生手写,针对不同的项目,应该是不一样的

## 原型设计

**作用**：梳理提供业务产品交互逻辑
墨刀,Axtrue等原型稿

产品中具体包括哪些功能,哪些模块比如:产品的前端页面包含了哪些东西,登录,注册,搜索产品的后台管理包含了哪些功能,根据条件筛选,页面跳转,具体到页面组件交互,校验等

原型设计稿,只是为了描述产品的功能的,梳理业务逻辑的,它侧重产品逻辑的交付,并非原型是怎么样,前端就要做成什么样,当然一个比较好的原型,最终也可以成为最终交付的东西

## UI设计

**作用:**根据UI小姐姐提供的设计稿,前端同学利用前端的技术去像素级还原设计稿

蓝湖,sketch等

如果产品没有UI设计,只提供原型,那么基本上就是由前端自己来定,基本上都是用一些现成的UI框架去实现,比如:ElementUI,Antd,等

## 后端接口

后端提供接口文档
前后端对接口,其实就是前端开发中,页面哪些组件涉及到与后端接口交互的,需要跟后端开发同学进行约定

* 前端在使用Ajax请求数据时,被请求的URL地止,就叫做接口地止,给前端浏览器返回指定的数据的
* 每个接口前后端必须要确定接口请求方式,也就是get还是post接口返回的数据格式,是json字面量对象方式还是xml接口文档:中接口参数,以及返回每个字段的简单说明,代表的含义接口调用的URL地止参数格式:接口需要传递的参数,每个参数名称,数据类型,是否必传,等说明响应格式：

接口的返回值详细描述,返回的字段中,对象,数组,字符串等说明接口返回示例,列出服务器返回的数据接口结构

## 项目前准备

* 确定上线交付截止时间(一般都是产品经理PM预估)

* 前端开发,编写静态页面,UI交互

* 后端接口联调

* 测试同学测试,有Bug,开发就改bug,直到产品没有问题

* 上线发布


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />







