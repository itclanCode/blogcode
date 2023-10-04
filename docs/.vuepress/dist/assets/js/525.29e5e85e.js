(window.webpackJsonp=window.webpackJsonp||[]).push([[525],{2339:function(_,v,e){"use strict";e.r(v);var o=e(9),t=Object(o.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"wordpress后台上传文件大小受限制解除方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#wordpress后台上传文件大小受限制解除方法"}},[_._v("#")]),_._v(" WordPress后台上传文件大小受限制解除方法")]),_._v(" "),v("h2",{attrs:{id:"快速导航"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[_._v("#")]),_._v(" 快速导航")]),_._v(" "),v("TOC"),_._v(" "),v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),v("p",[v("code",[_._v("wordpress")]),_._v("后台默认支持上传文件的大小是"),v("code",[_._v("50M")]),_._v("， 但只要视频内容超过"),v("code",[_._v("50M")]),_._v("，导致视频无法上传到网站上,这里介绍一下几种解决办法")]),_._v(" "),v("h2",{attrs:{id:"方法1-修改php-ini文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法1-修改php-ini文件"}},[_._v("#")]),_._v(" 方法1-修改php.ini文件")]),_._v(" "),v("p",[_._v("通常文件位置在"),v("code",[_._v("/usr/local/php/etc/php.ini")]),_._v(" ， 但如果不在上面这个目录下面，可以用"),v("code",[_._v("find")]),_._v("命令查找下 "),v("code",[_._v("find / -name php.ini")])]),_._v(" "),v("p",[_._v("找到之后直接"),v("code",[_._v("vim")]),_._v("编辑或"),v("code",[_._v("ftp")]),_._v("下载到本地编辑都可以")]),_._v(" "),v("p",[_._v("需要修改的地方：")]),_._v(" "),v("p",[v("code",[_._v("upload_max_filesize = 50M")]),_._v(", 将后面的"),v("code",[_._v("50M")]),_._v("修改为自己想要的大小。")]),_._v(" "),v("p",[v("code",[_._v("post_max_size = 20M")]),_._v(", 将这个"),v("code",[_._v("20M")]),_._v("修改为自己想要的大小")]),_._v(" "),v("p",[_._v("修改后，重启"),v("code",[_._v("lamp")]),_._v("环境后，再次上传视频到网站后台仍然失败")]),_._v(" "),v("h2",{attrs:{id:"方法2-修改conf文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法2-修改conf文件"}},[_._v("#")]),_._v(" 方法2-修改conf文件")]),_._v(" "),v("p",[_._v("找到对应网站的"),v("code",[_._v("conf")]),_._v("文件，修改内容")]),_._v(" "),v("p",[_._v("通常对应网站的"),v("code",[_._v("conf")]),_._v("文件在"),v("code",[_._v("/usr/local/nginx/conf/vhost")]),_._v("中，找到对应的域名"),v("code",[_._v("conf")]),_._v("文件，用vi打开编辑或下载到本地编辑后再上传都可以。")]),_._v(" "),v("p",[_._v("修改的地方：")]),_._v(" "),v("p",[_._v("在"),v("code",[_._v("include enable -php.conf")]),_._v("; 这句的上面添加")]),_._v(" "),v("p",[v("code",[_._v("client_max_body_size 500m")]),_._v(";")]),_._v(" "),v("p",[_._v("client_body_timeout 300")]),_._v(" "),v("p",[_._v("修改后重启"),v("code",[_._v("lnmp")]),_._v("，再次打开后台媒体上传页面发现上传大小已经变成了"),v("code",[_._v("500M")])]),_._v(" "),v("p",[_._v("但是在上传视频时仍是失败")]),_._v(" "),v("h2",{attrs:{id:"方法3-big-file-uploads插件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法3-big-file-uploads插件"}},[_._v("#")]),_._v(" 方法3-big file uploads插件")]),_._v(" "),v("p",[v("code",[_._v("wp")]),_._v("后台安装完插件后,启用，并进入设置")]),_._v(" "),v("p",[_._v("将大小设置成你想要多大都可以")]),_._v(" "),v("p",[_._v("然后再次上传视频，发现可以了。")]),_._v(" "),v("p",[_._v("最终问题解决了，但不知道前面2种方法为什么失败了，也许是哪里设置的不对。")]),_._v(" "),v("p",[_._v("所以劝其它的小伙伴，如果你是"),v("code",[_._v("wordpress")]),_._v("，那就别折腾什么"),v("code",[_._v("php.ini")]),_._v(" 或是"),v("code",[_._v("conf")]),_._v("了，直接下载插件吧，简单方便，当然如果是服务器运维大神那可能改服务器文件")]),_._v(" "),v("p",[_._v("如果对"),v("code",[_._v("php")]),_._v("和服务器不熟悉,不建议修改源码配置文件")]),_._v(" "),v("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),_._v(" "),v("footer-FeedBack")],1)}),[],!1,null,null,null);v.default=t.exports}}]);