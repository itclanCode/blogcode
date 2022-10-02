---
title: js如何实现将当前网站设置为首页并兼容IE-chrome-firefox
autoGroup-5: JS特效
---

## js如何实现将当前网站设置为首页-兼容IE-chrome-firefox

## 快速导航

<TOC />

## 前言

当用户访问网站之后,可以提示用户是否把网站设为首页,以便下次用户再次访问,但设为首页的功能在不通的浏览器中需要采用不通的实现方式

需要做兼容处理

## 实例

<jingdiantexiao-setHome  />

## 具体代码

```js
//设为首页
function SetHome(obj,url){
	try{
		obj.style.behavior='url(#default#homepage)';
		obj.setHomePage(url);
	}catch(e){
		if(window.netscape){
			try{
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}catch(e){
				alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
			}
		}else if(document.all){
			// 判断是否为IE浏览器
			// 设置body的style.behavior 
			obj.style.behavior='url(#default#homepage)';
			// 设置首页地止
			obj.setHomePage(url);
		}else if(window.sidebar) {
			// 通过Firefox特有的组件设置首页地止
			var thePrefs = Components.classes['@mozilla.org/preference-service;1'].getService(Components.interfaces.nsIPrefBranch);
			thePrefs.setCharPref('browser.startup.homepage',url);
		}else {
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
		}
	}
}


```
## 页面Html调用

```html
<a href="javascript:void(0);" onclick="SetHome(this,'https://coder.itclan.cn');">设为首页</a>
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />