(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1368:function(a,s,t){a.exports=t.p+"assets/img/setdata01.67911d00.png"},1369:function(a,s,t){a.exports=t.p+"assets/img/remove-attr.119aff4b.gif"},1370:function(a,s,t){a.exports=t.p+"assets/img/remove-attr-success.c3cdb2a0.gif"},2173:function(a,s,t){"use strict";t.r(s);var e=t(12),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"微信小程序中-setdata-详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序中-setdata-详解"}},[a._v("#")]),a._v(" 微信小程序中 setData 详解")]),a._v(" "),e("h2",{attrs:{id:"快速导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[a._v("#")]),a._v(" 快速导航")]),a._v(" "),e("TOC"),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("在小程序中各个页面之间是相互独立的,一个页面分为渲染层(视图层 webview),逻辑层(JavaScript),系统层(底层),在架构上，"),e("code",[a._v("WebView")]),a._v("和 "),e("code",[a._v("JavascriptCore")]),a._v(" 都是独立的模块，并不具备数据直接共享的通道,换而言之,若要将逻辑层中的"),e("code",[a._v("data")]),a._v("的数据渲染到页面中,他们之间是无法直接通信的,往往需要系统层作为中间角色")]),a._v(" "),e("p",[a._v("我们都知道视图层的数据来源于逻辑层 data,而视图图层若想要改变逻辑层 data 的数据,需要借助"),e("code",[a._v("setData")]),a._v("这个方法去触发,以达到更新视图层的数据,具体的工作过程是怎么样的?")]),a._v(" "),e("h2",{attrs:{id:"setdata-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setdata-是什么"}},[a._v("#")]),a._v(" setData 是什么")]),a._v(" "),e("p",[e("strong",[a._v("定义")]),a._v(": 设置数据,更改数据")]),a._v(" "),e("p",[e("strong",[a._v("作用")]),a._v(": "),e("code",[a._v("setData")]),a._v("函数用于"),e("strong",[a._v("将数据从逻辑层发送到视图层(异步)")]),a._v(","),e("strong",[a._v("同时改变对应的"),e("code",[a._v("this.data")]),a._v("的值（同步）")])]),a._v(" "),e("p",[a._v("仔细细品这句话,会包含了很多信息")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("setData")]),a._v("它是微信小程序提供的一个内置的接口,是用于改变逻辑层中"),e("code",[a._v("data")]),a._v("下的数据的")]),a._v(" "),e("li",[a._v("视图层 "),e("code",[a._v("view")]),a._v("的数据挂载在逻辑层的"),e("code",[a._v("data")]),a._v("下,发送到视图层中是异步的")]),a._v(" "),e("li",[a._v("改变"),e("code",[a._v("this.data")]),a._v("是同步,换句话说,若直接修改 "),e("code",[a._v("this.data")]),a._v(" 而不调用 "),e("code",[a._v("this.setData")]),a._v("方法,是无法改变页面的状态的，还会造成数据不一致")])]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1368),alt:"setData原理"}})]),a._v("\n从上面的这张图中就可以看到,当逻辑层data数据渲染到界面的时候,逻辑层的数据需要经过系统层,当系统层接收到这个逻辑层的数据后\n"),e("p",[a._v("系统层在把数据转发给渲染层,然后在渲染层展示出来,在这个过程当中是异步的")]),a._v(" "),e("p",[a._v("视图层和逻辑层的数据传输,实际上通过两边提供的"),e("code",[a._v("JavScript Core")]),a._v("所实现,即用户传输的数据，需要将其转换为字符串形式传递，同时把转换后的数据内容拼接成一份 JS 脚本，再通过执行 JS 脚本的形式传递到两边独立的环境")]),a._v(" "),e("h2",{attrs:{id:"setdata-接收两重要参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setdata-接收两重要参数"}},[a._v("#")]),a._v(" setData 接收两重要参数")]),a._v(" "),e("p",[a._v("从官方文档中看到这句"),e("code",[a._v("Page.prototype.setData(Object data, Function callback)")]),a._v(",得知,"),e("code",[a._v("setData")]),a._v("方法是挂载当前页面实例"),e("code",[a._v("Page")]),a._v("原型下一个公用实例方法")]),a._v(" "),e("p",[a._v("也就是说,Page 下面的任何一个方法内,都可以使用 setData 方法,它接收两个参数")]),a._v(" "),e("ul",[e("li",[a._v("一个是"),e("code",[a._v("Object data")]),a._v(",第一个参数"),e("code",[a._v("Object data")]),a._v("是必传的,数据类型是"),e("code",[a._v("Object")]),a._v(",所代表的含义是,这次要改变的数据")]),a._v(" "),e("li",[a._v("而第二个参数"),e("code",[a._v("Function callback")]),a._v("回调函数是非必填的,它所代表的含义是,"),e("code",[a._v("setData")]),a._v("引起的界面更新渲染完毕后的回调函数")])]),a._v(" "),e("p",[a._v("为了便于理解,在小程序中创建一个 page 页面,名为"),e("code",[a._v("setdata")]),a._v(",如下是逻辑层 js 文件")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击即可查看文")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// miniprogram/pages/setdata/setdata.js\nPage({\n\n  /**\n   * 页面的初始数据\n   */\n  data: {\n    name: "itclanCoder"\n  },\n\n  /**\n   * 生命周期函数--监听页面加载\n   */\n  onLoad: function (options) {\n\n  }\n})\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br")])])]),a._v(" "),e("p",[a._v("而 wxml 文件如下")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击即可查看")]),a._v(" "),e("div",{staticClass:"language-v-pre line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// miniprogram/pages/setdata/setdata.wxml\n<text>{{name}}</text>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])]),a._v(" "),e("p",[a._v("在"),e("code",[a._v("Web")]),a._v(" 开发中，开发者使用 "),e("code",[a._v("JavaScript")]),a._v(" 通过"),e("code",[a._v("Dom")]),a._v("接口来完成界面的实时更新。而在小程序中，使用 "),e("code",[a._v("WXML")]),a._v("语言所提供的数据绑定功能，来完成此项功能,在小程序中是没有"),e("code",[a._v("DOM")]),a._v(","),e("code",[a._v("BOM")]),a._v("的那一套东西的,没有"),e("code",[a._v("document.getElementById")]),a._v("等的")]),a._v(" "),e("p",[a._v("小程序是数据驱动视图的,逻辑层中的 data 数据改变了,视图层 view 也会跟着改变,它是单向数据流的,如果想要触发视图中数据的更新,那么就需要借助"),e("code",[a._v("setData")]),a._v("这个方法")]),a._v(" "),e("p",[a._v("上面的"),e("code",[a._v("WXML")]),a._v("通过"),e("strong",[a._v("插值表达式")]),a._v("来绑定 "),e("code",[a._v("WXML")]),a._v("文件和对应的"),e("code",[a._v("JavaScript")]),a._v("文件中的"),e("code",[a._v("data")]),a._v("对象属性")]),a._v(" "),e("p",[a._v("在上面的示例中,页面会显示"),e("code",[a._v("itclanCoder")]),a._v(",那如何更改逻辑层的数据呢")]),a._v(" "),e("p",[a._v("在下面的示例中,演示了如何更改逻辑层的数据,在 wxml 中新增了一个按钮,用"),e("code",[a._v("bindtap")]),a._v("绑定了一个"),e("code",[a._v("handleChangeName")]),a._v("方法,触发按钮,改变 data 下的数据")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('\x3c!--miniprogram/pages/setdata/setdata.wxml--\x3e\n<text>{{name}}</text>\n<button type="primary" bindtap="handleChangeName">更改data中数据</button>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("而在逻辑层 JS")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// miniprogram/pages/setdata/setdata.js\nPage({\n\n  /**\n   * 页面的初始数据\n   */\n  data: {\n    name: "itclanCoder"\n  },\n\n  // 改变data的方法\n  handleChangeName() {\n    console.log("name开始的数据", this.data.name); // itclanCoder\n    this.setData({\n      name: "川川"\n    })\n    console.log("name经过setData后的数据", this.data.name); // 川川\n  }\n\n})\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br")])]),e("p",[a._v("在上面的示例代码中,更改"),e("code",[a._v("data")]),a._v("下面的"),e("code",[a._v("name")]),a._v("字段值,使用的是"),e("code",[a._v("setData")]),a._v("方法,这个方法接收了一个参数,第一个参数是对象,这个"),e("code",[a._v("Object")]),a._v(" 以 "),e("code",[a._v("key: value")]),a._v(" 的形式表示，将 "),e("code",[a._v("this.data")]),a._v(" 中的 "),e("code",[a._v("key")]),a._v(" 对应的值改变成 "),e("code",[a._v("value")])]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),e("p",[a._v("这个"),e("code",[a._v("key")]),a._v(" 可以以数据路径的形式给出,支持改变数组中的某一项或对象的某个属性，如 array[2].message，a.b.c.d，并且不需要在 "),e("code",[a._v("this.data")]),a._v(" 中预先定义,但凡是页面要显示的变量数据,最好先挂载在"),e("code",[a._v("data")]),a._v("下初始化定义,然后在使用")])]),a._v(" "),e("p",[a._v("也就是说在更改"),e("code",[a._v("setData")]),a._v("下的变量时,直接写"),e("code",[a._v("key")]),a._v("名就可以了的,不用写"),e("code",[a._v("this.data.属性")]),a._v(",如下所示")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('this.setData({\n   // this.data.name: "川川"  // 这样写是会报错的\n   name: "川川"               // 正确的写法\n})\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("而"),e("code",[a._v("setData")]),a._v("接收第二个参数,是一个"),e("code",[a._v("Function callback")])]),a._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("handleChangeName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name开始的数据"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// itclanCoder")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("setData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"川川"')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 接收第二个回调函数")]),a._v("\n       console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"执行setData引起的界面更新渲染完毕后的回调函数"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name经过setData后的数据"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 川川")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("p",[a._v("上面代码的执行顺序是")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("itclancoder\n川川\n执行setData引起的界面更新渲染完毕后的回调函数\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("此结果说明这个"),e("code",[a._v("setData")]),a._v("方法是异步的,等待主线程任务做完了,然后在去执行第二个参数,回调异步函数")]),a._v(" "),e("h2",{attrs:{id:"如何更改当前对象某个属性的值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何更改当前对象某个属性的值"}},[a._v("#")]),a._v(" 如何更改当前对象某个属性的值")]),a._v(" "),e("p",[a._v("有时候,我们的接口数据类型是对象,并非是基本数据类型(number,boolean,string,null),但由于业务需求,我们往往需要改变对象下的某个属性")]),a._v(" "),e("p",[a._v("如下所示,我想改变"),e("code",[a._v("person")]),a._v("下的 age 属性值")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// miniprogram/pages/setdata/setdata.js\nPage({\n\n  /**\n   * 页面的初始数据\n   */\n  data: {\n    person: {\n      name: "随笔川迹",\n      sex: "男神",\n      age: 20\n    }\n  },\n\n  handleChangeName() {\n    this.setData({\n      person: {\n        age: 24\n      }\n    })\n  }\n})\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br")])]),e("p",[a._v("在上面的代码中,的确可以更改"),e("code",[a._v("person")]),a._v("对象下的"),e("code",[a._v("age")]),a._v("属性,但是随之带来的问题是,"),e("code",[a._v("person")]),a._v("对象下除了"),e("code",[a._v("age")]),a._v("属性,其他属性都消失了\n这非常令人郁闷")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",width:"300",height:"300",src:t(1369),alt:"修改属性"}})]),a._v(" "),e("p",[a._v("那如何解决这个问题?")]),a._v(" "),e("p",[e("strong",[a._v("原因")]),a._v(":")]),a._v(" "),e("p",[a._v("对象是一个引用数据类型,上面那种方式,是把我们当前的值指向了一个新的对象")]),a._v(" "),e("p",[a._v("这样,就相当于现在的对象把之前的对象的值给覆盖掉了的,所以只看到"),e("code",[a._v("age")]),a._v("属性值,其他属性值给覆盖掉了的,这是一个非常蛋疼的问题,")]),a._v(" "),e("p",[a._v("解决方式如下")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("方法 1")]),a._v(": 指明具体的修改对象属性")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('this.setData({\n   "person.age": 24  // 注意要用双引号或单引号将属性给引起来\n})\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("ul",[e("li",[e("strong",[a._v("方法 2")]),a._v(":使用中扩号"),e("code",[a._v("['对象.属性']:属性值")])])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("this.setData({\n   ['person.age']: \"川川\"   // 访问对象下的属性可以用.也可以用中括号,中间代表是一个变量,需要用引号引起来\n})\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("如下所示")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",width:"400",height:"400",src:t(1370),alt:"成功改属性"}})]),a._v("\n这个在以后的开发中,很有用,有时候,在需要更改对象下的某个属性值的时候,就可以使用这种方式\n"),e("h2",{attrs:{id:"setdata-注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setdata-注意事项"}},[a._v("#")]),a._v(" setData 注意事项")]),a._v(" "),e("ul",[e("li",[a._v("直接修改 "),e("code",[a._v("this.data")]),a._v("而不调用 "),e("code",[a._v("this.setData")]),a._v("是无法改变页面的状态的，还会造成数据不一致")]),a._v(" "),e("li",[a._v("仅支持设置可 "),e("code",[a._v("JSON")]),a._v("化的数据,如果不是 JSON 对象数据格式,需要将数据进行转化成"),e("code",[a._v("json对象")]),a._v(","),e("code",[a._v("key:value")]),a._v("形式")]),a._v(" "),e("li",[a._v("单次设置的数据不能超过"),e("code",[a._v("1024kB")]),a._v("(1M)，不要一次设置过多的数据(由于小程序运行逻辑线程与渲染线程之上,"),e("code",[a._v("setData")]),a._v("的调用会把数据从逻辑层传到渲染层，数据太大会增加通信时间,会增加脚本的编译执行时间，占用 "),e("code",[a._v("WebView JS")]),a._v(" 线程，)")]),a._v(" "),e("li",[a._v("不要把 "),e("code",[a._v("data")]),a._v("中任何一项的"),e("code",[a._v("value")]),a._v("设为"),e("code",[a._v("undefined")]),a._v("，否则这一项将不被设置并可能遗留一些潜在问题")]),a._v(" "),e("li",[a._v("页面中需要显示的数据,可以挂载在"),e("code",[a._v("data")]),a._v("下面初始化,虽然这个值不一定要先设置,但是建议先声明然后在使用")]),a._v(" "),e("li",[a._v("避免"),e("code",[a._v("setData")]),a._v("的调用过于频繁("),e("code",[a._v("setData接口")]),a._v("的调用涉及逻辑层与渲染层间的线程通信,通信过于频繁可能导致处理队列阻塞,界面渲染不及时而导致卡顿,应避免无用的频繁调用)\n"),e("ul",[e("li",[a._v("在"),e("code",[a._v("Android")]),a._v(" 下用户在滑动时会感觉到卡顿,操作反馈延迟严重,因为"),e("code",[a._v("JS")]),a._v(" 线程一直在编译执行渲染，未能及时将用户操作事件传递到逻辑层,逻辑层亦无法及时将操作处理结果及时传递到视图层")]),a._v(" "),e("li",[a._v("渲染有出现延时，由于 "),e("code",[a._v("WebView")]),a._v("的 JS 线程一直处于忙碌状态，所以,逻辑层到页面层的通信耗时上升，视图层收到的数据消息时距离发出时间已经过去了几百毫秒，渲染的结果并不是实时的")])])]),a._v(" "),e("li",[a._v("避免 setData 数据冗余("),e("code",[a._v("setData")]),a._v("操作会引起框架处理一些渲染界面相关的工作,避免将未绑定在 WXML 的变量传入"),e("code",[a._v("setData")]),a._v(",减少不必要的性能消耗)")]),a._v(" "),e("li",[a._v("后台态页面进行 "),e("code",[a._v("setData")]),a._v("(比如退出小程序),当页面进入后台态（用户不可见），不应该继续去进行 "),e("code",[a._v("setData")]),a._v("，后台态页面的渲染用户是无法感受到的，另外后台态页面去 "),e("code",[a._v("setData")]),a._v(" 也会抢占前台页面的执行")])]),a._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("p",[a._v("在本文中主要介绍了下"),e("code",[a._v("setData")]),a._v("的使用,它是用于修改挂载在 data 下面的数据的,当想要修改视图 view,那么需要借助 setData 函数,它接收两个参数,第一个参数时必传的,也就是要修改视图 view 层的对象,而第二个参数时非必传的")]),a._v(" "),e("p",[a._v("setData 将数据从逻辑层发送到视图层是异步,同时改变对应的"),e("code",[a._v("this.data")]),a._v("的值是同步,它并不是实时的,这也导致了必须要考虑性能的因素")]),a._v(" "),e("p",[a._v("从而介绍了 setData 的使用注意事项,值得注意的是,如何修改对象下的某个属性,这个在往后的开发中,是使用比较频繁的.")]),a._v(" "),e("p",[a._v("如果小伙伴们有问题,欢迎大家下面留言,一起学习讨论")]),a._v(" "),e("h2",{attrs:{id:"相关文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关文档"}},[a._v("#")]),a._v(" 相关文档")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("setData 官方文档"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("setData 官方文档解析"),e("OutboundLink")],1)])]),a._v(" "),e("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),a._v(" "),e("footer-FeedBack")],1)}),[],!1,null,null,null);s.default=n.exports}}]);