(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1254:function(s,a,n){s.exports=n.p+"assets/img/product01.b13a8ae0.jpg"},1255:function(s,a,n){s.exports=n.p+"assets/img/product02.7fdbd579.jpg"},1256:function(s,a,n){s.exports=n.p+"assets/img/product03.bc725bff.jpg"},1257:function(s,a,n){s.exports=n.p+"assets/img/product04.d1799190.jpg"},1258:function(s,a,n){s.exports=n.p+"assets/img/product05.bc460e59.jpg"},1259:function(s,a,n){s.exports=n.p+"assets/img/product06.e229477b.jpg"},1857:function(s,a,n){"use strict";n.r(a);var t=n(10),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"小程序-云开发-如何切换开发-测试-坏境与生产坏境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序-云开发-如何切换开发-测试-坏境与生产坏境"}},[s._v("#")]),s._v(" 小程序-云开发-如何切换开发(测试)坏境与生产坏境")]),s._v(" "),t("h2",{attrs:{id:"快速导航"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),t("TOC"),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1254),alt:"小程序-云开发-如何切换开发(测试)坏境与生产坏境"}})]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("在您读完本篇,将 get 到")]),s._v(" "),t("ul",[t("li",[s._v("小程序-云开发中如何切换开发(测试)坏境与生产坏境")]),s._v(" "),t("li",[s._v("如何新增一个云环境")]),s._v(" "),t("li",[s._v("如何将一个坏境中的数据导入到另一个坏境中")])]),s._v(" "),t("p",[s._v("如果您不清楚,那么本篇就是您想要知道的")]),s._v(" "),t("h2",{attrs:{id:"开发-测试-坏境下影响了线上版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发-测试-坏境下影响了线上版本"}},[s._v("#")]),s._v(" 开发(测试)坏境下影响了线上版本")]),s._v(" "),t("p",[s._v("对于实现一个软件应用,这不区分应用是大还是小,都有着自己的生命周期,开发者往往会不断的去迭代软件应用")]),s._v(" "),t("p",[s._v("在传统的软件开发应用过程中,会涉及到很多人的参与")]),s._v(" "),t("p",[s._v("而开发一个小程序或其他软件应用,也是如此,而每个角色所承担的工作或者权限都不一样")]),s._v(" "),t("p",[s._v("例如:产品经理(PD),设计(UI),开发(前后端同学),运维,测试等,借用官方的一个关系图,如下所示")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1255),alt:"项目管理"}})]),s._v(" "),t("p",[s._v("项目管理的各个成员都各自输出自己的工作成果,不断反馈和迭代整个项目")]),s._v(" "),t("ul",[t("li",[s._v("产品同学经过运营同学的调研,用户需求分析,提出需求输出 PD,原型与交互设计")]),s._v(" "),t("li",[s._v("设计同学根据产品提供的原型图进行 UI 层的设计稿可视化输出")]),s._v(" "),t("li",[s._v("开发同学根据 UI 提供的设计稿完成前后端代码的编写,功能的实现")]),s._v(" "),t("li",[s._v("测试同学根据功能需求编写测试用例,并对小程序进行各种自动化边界测试,确保小程序或软件应用的稳定")]),s._v(" "),t("li",[s._v("上线发布")])]),s._v(" "),t("p",[s._v("每个角色都相关联,并无轻重一说,都是一条绳子上的蚂蚱,一个让用户尖叫的产品,都少不了各个角色的共同努力,拳头握紧,力都往一处使,才会有力量")]),s._v(" "),t("p",[s._v("整个过程,就如下图所示:")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1256),alt:"小程序从需求到上线发布"}})]),s._v("\n当然,更细的传统开发里,中间可能还有运维同学的参与,不过在很多公司里,很多后端也相当于运维,单独能有运维的,都是应用级比较大的项目\n"),t("p",[s._v("在小程序开发中,为了便于项目的管理,小程序平台赋予了各个不同角色的权限,具体详情介绍:可见官方文档小程序协同工作")]),s._v(" "),t("p",[s._v("赋予各个角色的权限,是很有必要的,删库跑路这种现象在现实中是存在的")]),s._v(" "),t("p",[s._v("但对于如今的小程序开发,有时候,很多应用也许就是一个人,从头干到尾,设计,开发,测试,部署上线,全程就一个人")]),s._v(" "),t("p",[s._v("针对于那种不涉及到数据的存储操作,只是在小程序端展示的应用,开发坏境与线上公用一个坏境和数据库,其实也没有多大问题,但是个人不提倡")]),s._v(" "),t("p",[s._v("哪怕功能在小,也要带着做产品的思维去做,而不仅仅只是停留在一个 Demo 上")]),s._v(" "),t("p",[t("strong",[s._v("当小程序发布上线之后,那么外部用户就可以使用了,但是后续往往会进行迭代开发,新增其他一些功能,在本地开发时,也就是正在开发版本的代码,它是不稳定的")])]),s._v(" "),t("p",[t("strong",[s._v("当线上版本与本地开发版本共用一个数据库时,那么在本地对数据的增删操作,都会同步到线上的版本")])]),s._v(" "),t("p",[s._v("如果涉及到多个小伙伴的协同开发,那么肯定是不行的,不然项目就会乱套")]),s._v(" "),t("p",[s._v("在传统的开发里,为了方便产品,开发,测试,运维等同学的测试,一般一个产品,分为线上稳定版本,预发布版本,测试版本,开发版本,都对应着不同的坏境")]),s._v(" "),t("p",[s._v("而在小程序开发中,也同样如此,小程序云开发中可以创建两个环境,这两个坏境是互不影响,独立的的")]),s._v(" "),t("p",[s._v("废话不多说,下面正式进入主题")]),s._v(" "),t("h2",{attrs:{id:"如何新增一个云环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何新增一个云环境"}},[s._v("#")]),s._v(" 如何新增一个云环境")]),s._v(" "),t("p",[s._v("如果您在做小程序一开始就选用的是云开发,那么默认的会创建一个云坏境,注意一旦这个云坏境创建了,名字就没法更改了")]),s._v(" "),t("p",[s._v("点击微信开发者工具工具栏中的云开发进入云开发控制台")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1257),alt:"小程序从需求到上线发布"}})]),s._v("\n在创建好另一个环境之后,两个坏境完全是独立,隔离,互不干扰的,这个云坏境的名称你可以小程序的名称+release,或者小程序名称+develop等,但是命名最好能够见名知意\n"),t("p",[s._v("一般而言,一个坏境作为测试开发版本的,另一个作为线上稳定版本")]),s._v(" "),t("p",[s._v("在小程序端,进行坏境的切换是在 app.js 中 onLaunch 生命周期中的 env 的具体值")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//app.js\nApp({\n  onLaunch: function () {\n    if (!wx.cloud) {\n      console.error('请使用 2.2.3 或以上的基础库以使用云能力')\n    } else {\n      wx.cloud.init({\n        // env 参数说明：\n        // env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源\n        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看\n        // 如不填则使用默认环境（第一个创建的环境）\n        env: '云坏境的ID', // 想要请求切换哪个云环境,就用哪个的\n        traceUser: true,\n      })\n    }\n})\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("当你的小程序使用了云函数,在小程序端请求云函数时,那么在云函数端,要想与所创建的环境保持一致,也得要做相应的改变")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 云函数入口文件\nconst cloud = require('wx-server-sdk')\n\n// 云函数端,需要指定特定一下当前的环境,不然切换环境时,小程序前端功能会受影响\n// cloud.init()\ncloud.init({\n  env: cloud.DYNAMIC_CURRENT_ENV // 这里也可以指定具体的某个坏境,但是建议默认自动获取\n})\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("在设置 "),t("code",[s._v("env")]),s._v("时指定"),t("code",[s._v("cloud.DYNAMIC_CURRENT_ENV")]),s._v(" 常量 (需 SDK v1.1.0 或以上) ,这样云函数内发起数据库请求、存储请求或调用其他云函数的时候,默认请求的云环境就是云函数当前所在的环境")])]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1258),alt:"切换环境"}})]),s._v("\n以上是在云控制台切换环境,而在小程序端,同样可以切换\n"),t("p",[s._v("点击云函数目录文件夹,右键云函数文件夹,即可切换云开发的环境")]),s._v(" "),t("h2",{attrs:{id:"从一个坏境导入数据到另一个环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从一个坏境导入数据到另一个环境"}},[s._v("#")]),s._v(" 从一个坏境导入数据到另一个环境")]),s._v(" "),t("p",[s._v("对于新创建的云坏境,如果想要在这个坏境上进行测试,你会发现这个新创建的坏境数据库,存储,以及云函数都是空的")]),s._v(" "),t("p",[s._v("对于云函数端的代码,在小程序端重新进行一次上传部署就可以了的,如果发现功能异常,排查一下是不是一些第三方的包没有安装的")]),s._v(" "),t("p",[t("strong",[s._v("对于重新创建的一个坏境中的数据库集合,存储都是空的,针对数据库中的集合,难道需要重新手动的添加数据进去?")])]),s._v(" "),t("p",[s._v("肯定是不会这样的 "),t("strong",[s._v("在云控制台中,提供了一个导入导出的功能,导出的数据格式是 JSON 对象形式的")])]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1259),alt:"切换环境"}})]),s._v(" "),t("p",[s._v("你将其中一个坏境中的数据库集合导入到另一个坏境中去就可以了的")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("你想要在哪个坏境上进行测试,就把小程序端 app.js 中的 env 的 ID 换成你想要的 ID 的")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//app.js\nApp({\n  onLaunch: function () {\n    if (!wx.cloud) {\n      console.error('请使用 2.2.3 或以上的基础库以使用云能力')\n    } else {\n      wx.cloud.init({\n        // env 参数说明：\n        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源\n        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看\n        //   如不填则使用默认环境（第一个创建的环境）\n        env: 'xxxx', // 小程序端填写坏境的ID\n        traceUser: true,\n      })\n    }\n  },\n\n})\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("现在的云开发已经提供了"),t("a",{attrs:{href:"https://docs.cloudbase.net/extension/abilities/cms.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CMS 内容管理能力"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),t("p",[s._v("本文主要介绍了小程序-云开发-如何切换开发(测试)坏境与生产坏境")]),s._v(" "),t("p",[s._v("很多小程序的开发者或许就是一个人,本地开发版本与线上版本就是共用一个的")]),s._v(" "),t("p",[t("strong",[s._v("若涉及到多人协作小程序开发,是必须有两个坏境的,一个是本地开发(测试)版本,另一个是线上稳定版本(线上版本是不可以随意更改的")])]),s._v(" "),t("p",[s._v("也就是"),t("strong",[s._v("不能出现本地开发数据的 curd(增删改查),影响线上的版本)")])]),s._v(" "),t("p",[s._v("在云开发控制台,可以新增一个云坏境,这个云坏境的名称一旦确定了,便无法更改,在命名上需要遵循一定的规范,最终发布的小程序版本,以其中一个为最终的版本")]),s._v(" "),t("p",[s._v("也知道了怎么将其中一个坏境中的数据集合导入到另一个坏境当中去的")]),s._v(" "),t("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),s._v(" "),t("footer-FeedBack")],1)}),[],!1,null,null,null);a.default=e.exports}}]);