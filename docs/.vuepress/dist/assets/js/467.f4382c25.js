(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{2241:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"加载时性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载时性能优化"}},[s._v("#")]),s._v(" 加载时性能优化")]),s._v(" "),t("h2",{attrs:{id:"快速导航"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),t("TOC"),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("网站的性能优化对于用户的用户体验,留存率,转化率有很大的影响,这不区分是网站,小程序,还是 App")]),s._v(" "),t("p",[s._v("通常性能优化的点有很多,这里归纳记录一下的,在实际开发中,多尝试多用的")]),s._v(" "),t("h2",{attrs:{id:"加载时性能优化-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载时性能优化-2"}},[s._v("#")]),s._v(" 加载时性能优化")]),s._v(" "),t("p",[s._v("加载时性能主要解决的是一个网站加载过程更快,比如压缩文件大小,使用 cdn 加速等方式可以优化加载性能,检查加载性感的指标一般根据:白屏时间和首屏时间")]),s._v(" "),t("p",[s._v("⒈ 白屏时间:指的是从输入网址,到页面开始显示内容的时间")]),s._v(" "),t("p",[s._v("⒉ 首屏时间: 指从输入网址,到首屏页面内容渲染完毕的时间")]),s._v(" "),t("h2",{attrs:{id:"白屏时间计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#白屏时间计算"}},[s._v("#")]),s._v(" 白屏时间计算")]),s._v(" "),t("p",[s._v("将代码脚本放在"),t("code",[s._v("<head>")]),s._v("前面就能获取白屏时间")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" performance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("timing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("navigationStart"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"首屏时间计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首屏时间计算"}},[s._v("#")]),s._v(" 首屏时间计算")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("window.onload")]),s._v("事件中执行以下 diamante,可以获取首屏时间")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" performance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("timing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("navigationStart"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"加载时性能优化有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载时性能优化有哪些"}},[s._v("#")]),s._v(" 加载时性能优化有哪些")]),s._v(" "),t("p",[s._v("在浏览器中输入一个网址,经历了这么几个阶段")]),s._v(" "),t("p",[s._v("⒈ DNS 域名解析")]),s._v(" "),t("p",[s._v("⒉ 找到对应的 IP 地止")]),s._v(" "),t("p",[s._v("⒊ 然后进行 TCP 连接")]),s._v(" "),t("p",[s._v("⒋ 浏览器发送 HTTP 请求")]),s._v(" "),t("p",[s._v("⒌ 服务器接收请求")]),s._v(" "),t("p",[s._v("⒍ 服务器处理请求并返回 HTTP 报文")]),s._v(" "),t("p",[s._v("⒎ 以及浏览器接收并解析渲染页面")]),s._v(" "),t("p",[s._v("从这一过程中,其实就可以看出优化点,缩短请求的时间,从而去加快网站的访问速度,提升性能")]),s._v(" "),t("p",[s._v("⒈ DNS 解析优化,浏览器访问 DNS 的时间就可以缩短")]),s._v(" "),t("p",[s._v("⒉ 使用 HTTP2")]),s._v(" "),t("p",[s._v("⒊ 减少 HTTP 请求数量")]),s._v(" "),t("p",[s._v("⒋ 减少 http 请求大小")]),s._v(" "),t("p",[s._v("⒌ 服务器端渲染")]),s._v(" "),t("p",[s._v("⒍ 静态资源使用 cdn")]),s._v(" "),t("p",[s._v("⒎ 资源缓存,不重复加载相同的资源")]),s._v(" "),t("h2",{attrs:{id:"dns-预解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-预解析"}},[s._v("#")]),s._v(" DNS 预解析")]),s._v(" "),t("p",[s._v("减少 DNS 解析时间和次数是个很好的优化方式,"),t("code",[s._v("DNS Prefetching")]),s._v("是具有此属性的域名不需要用户点击链接就在后台解析,而域名解析和内容载入是串行的网络操作,所以这个方式能减少用户的等待时间,提供用户体验")]),s._v(" "),t("p",[s._v("浏览器对网站第一次的域名 DNS 解析查找流程依次为")]),s._v(" "),t("p",[t("code",[s._v("浏览器缓存")]),s._v("--\x3e"),t("code",[s._v("系统缓存")]),s._v("--\x3e"),t("code",[s._v("路由器缓存")]),s._v("--\x3e"),t("code",[s._v("ISP DNS缓存")]),s._v("--\x3e"),t("code",[s._v("递归搜索")])]),s._v(" "),t("h2",{attrs:{id:"dns-预解析的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-预解析的实现"}},[s._v("#")]),s._v(" DNS 预解析的实现")]),s._v(" "),t("p",[s._v("用"),t("code",[s._v("meta")]),s._v("信息来告知浏览器,当前页面要做 DNS 预解析")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("equiv"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x-dns-prefetch-control"')]),s._v(" content"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"on"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在页面 header 中使用 link 标签来强制对 DNS 预解析")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dns-prefetch"')]),s._v(" href"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://coder.itclan.cn"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("注意:dns-prefetch 需要慎用,多页面重复的 DNS 预解析会增加重复 DNS 查询次数")])]),s._v(" "),t("h2",{attrs:{id:"使用-http2-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-http2-0"}},[s._v("#")]),s._v(" 使用 http2.0")]),s._v(" "),t("p",[s._v("HTTP2.0 带来了非常大的加载优化,所以在做优化上首先想要用 httl2 代替 http1")]),s._v(" "),t("p",[s._v("Http2 相对 HTTP1 有以下些优点")]),s._v(" "),t("p",[t("strong",[s._v("解析速度快")])]),s._v(" "),t("p",[s._v("服务器解析 HTTP1.1 的请求时,必须不断的读入字节,直到遇到分隔符 CRLF 为止,而解析 HTTP2 的请求就不用这么麻烦,因为 HTTP2 是基于帧的协议,每个帧都有便是帧长度的字段")]),s._v(" "),t("p",[t("strong",[s._v("多路复用")])]),s._v(" "),t("p",[s._v("在 HTTP2 上,多个请求可以共用一个 TCP 连接,这称为多路复用")]),s._v(" "),t("p",[s._v("当然 HTTP1.1 有一个可选的"),t("code",[s._v("Pipelining")]),s._v("技术,说的意思是当一个 HTTP 连接在等待接收响应时可以通过这个链接发送其他请求")]),s._v(" "),t("p",[s._v("需要注意的是:处理的响应是按照顺序的,也就是后发的请求有可能被先发的阻塞住,也正因此很多浏览器默认是不开启"),t("code",[s._v("pipelining")]),s._v("的")]),s._v(" "),t("p",[s._v("HTTP1 的"),t("code",[s._v("pipelining")]),s._v("技术会有阻塞的问题,HTTP/2 的多路复用可以粗略的理解为非阻塞版的"),t("code",[s._v("pipeling")]),s._v(",即可以同时通过一个"),t("code",[s._v("HTTP")]),s._v("连接发送多个请求,谁先响应就先处理谁,这样就充分压榨了 TCP 这个全双工管道的性能,加载性能会是"),t("code",[s._v("HTTP1")]),s._v("的几倍,需要加载的资源越多越明显,当然多路复用是建立在加载的资源同一域名下")]),s._v(" "),t("p",[s._v("首部压缩")]),s._v(" "),t("p",[s._v("HTTP2 提供了首部压缩功能")]),s._v(" "),t("p",[s._v("HTTP1.1 请求的大小变得越来越大,有时甚至会大于 TCP 窗口的初始大小,因为他们需要等待带着 ACK 的响应回来以后才能继续被发送,HTTP/2 对消息头采用 HPACK(专为 http/2 头部设计的压缩格式)进行压缩传输,能够节省消息头占用的网络的流量,而 HTTP/1.x 每次请求,都会携带大量冗余头信息,浪费了很多带宽资源")]),s._v(" "),t("p",[t("strong",[s._v("服务器推动")])]),s._v(" "),t("p",[s._v("服务端可以发送页面 HTML 时主动推送其他资源,而不用等到浏览器解析到相应的位置,发起请求在响应")]),s._v(" "),t("h2",{attrs:{id:"减少-http-请求数量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少-http-请求数量"}},[s._v("#")]),s._v(" 减少 HTTP 请求数量")]),s._v(" "),t("p",[s._v("HTTP 请求建立和释放需要时间")]),s._v(" "),t("p",[s._v("HTTP 请求从建立到关闭一共经过以下步骤")]),s._v(" "),t("p",[s._v("⒈ 客户端连接到 web 服务器\n⒉ 发送 HTTP 请求\n⒊ 服务器接受请求并返回 HTTP 响应\n⒋ 释放连接 TCP 连接")]),s._v(" "),t("h2",{attrs:{id:"压缩-合并文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩-合并文件"}},[s._v("#")]),s._v(" 压缩,合并文件")]),s._v(" "),t("p",[s._v("⒈ 压缩文件->减少 HTTP 请求大小,可以减少请求时间\n⒉ 文件合并->减少 HTTP 请求数量")]),s._v(" "),t("p",[s._v("可以对 html,css,js 以及图片资源进行压缩处理,现在可以很方便的使用"),t("code",[s._v("webpack")]),s._v("实现文件的压缩")]),s._v(" "),t("p",[s._v("⒈ js 压缩:UglifyPlugin\n⒉ CSS 压缩: MiniCssExtractPlugin\n⒊ HTML 压缩: HtmlWebpackPlugin\n⒋ 图片压缩:image-webpack-loader")]),s._v(" "),t("p",[s._v("提取公共代码")]),s._v(" "),t("p",[s._v("合并文件虽然能减少 HTTP 请求数量,但是并不是文件合并越多越好,还可以考虑按需加载方式")]),s._v(" "),t("p",[s._v("可以使用 webpack4 的"),t("code",[s._v("splitChunk")]),s._v("插件"),t("code",[s._v("cacheGroups")]),s._v("选项")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optimization")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("runtimeChunk")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'manifest'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将 webpack 的 runtime 代码拆分为一个单独的 chunk。")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("splitChunks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("cacheGroups")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("vendor")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chunk-vendors'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[\\\\/]node_modules[\\\\/]")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("chunks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'initial'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("common")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chunk-common'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("minChunks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("chunks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'initial'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("reuseExistingChunk")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h2",{attrs:{id:"采用-svg-图片或子图图标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#采用-svg-图片或子图图标"}},[s._v("#")]),s._v(" 采用 svg 图片或子图图标")]),s._v(" "),t("p",[s._v("因为字体图标或者 SVG 是矢量图，代码编写出来的，放大不会失真，而且渲染速度快。字体图标使用时就跟字体一样，可以设置属性，例如 "),t("code",[s._v("font-size")]),s._v("、"),t("code",[s._v("color")]),s._v(" 等等，非常方便，还有一个优点是生成的文件特别小")]),s._v(" "),t("h2",{attrs:{id:"按需加载代码-减少冗余代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按需加载代码-减少冗余代码"}},[s._v("#")]),s._v(" 按需加载代码，减少冗余代码")]),s._v(" "),t("p",[t("strong",[s._v("按需加载")])]),s._v(" "),t("p",[s._v("在开发 spa 项目时,项目中经常存在十几个甚至更多的路由页面,如果将这些页面都打包进一个 js 文件,虽然减少了 HTTP 请求数量,但是会导致文件比较大,同时加载了大量首页不需要的代码,有些得不偿失")]),s._v(" "),t("p",[s._v("这个时候就可以使用按需加载,将每个路由页面单独打包为一个文件,当然不仅仅是路由可以按需加载")]),s._v(" "),t("p",[s._v("根据文件内容生成文件名,结合 import 动态引入组件实现按需加载")]),s._v(" "),t("p",[s._v("通过配置"),t("code",[s._v("output")]),s._v("的"),t("code",[s._v("filename")]),s._v("属性可以实现这个需求,"),t("code",[s._v("filename")]),s._v("属性的值选项中有一个"),t("code",[s._v("[contenthash]")]),s._v(",它将根据文件内容创建出唯一的"),t("code",[s._v("hash")]),s._v(",当文件内容发生变化时,"),t("code",[s._v("[contenthash]")]),s._v("也会发生变化")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("output")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("filename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name].[contenthash].js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("chunkFilename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name].[contenthash].js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../dist'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"减少冗余代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少冗余代码"}},[s._v("#")]),s._v(" 减少冗余代码")]),s._v(" "),t("p",[s._v("一方面避免不必要的转义:"),t("code",[s._v("babel-loader")]),s._v("用"),t("code",[s._v("include")]),s._v("或"),t("code",[s._v("exclude")]),s._v("来帮我们避免不必要的转译,不转转译"),t("code",[s._v("node_modules")]),s._v("中的"),t("code",[s._v("js")]),s._v("文件,其次在缓存当前转译的 js 文件,设置"),t("code",[s._v("loader:'babel-loader?cacheDirectory=true'")])]),s._v(" "),t("p",[s._v("其次减少 ES6 转为 ES5 的冗余代码：Babel 转化后的代码想要实现和原来代码一样的功能需要借助一些帮助函数，比如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("经过 babel 会被转换为")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("_classCallCheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Constructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Constructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TypeError")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Cannot call a class as a function'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("Person")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("_classCallCheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Person"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("这里 "),t("code",[s._v("_classCallCheck")]),s._v("就是一个"),t("code",[s._v("helper")]),s._v("函数，如果在很多文件里都声明了类，那么就会产生很多个这样的"),t("code",[s._v("helper")]),s._v(" 函数。")]),s._v(" "),t("p",[s._v("这里的 "),t("code",[s._v("@babel/runtime")]),s._v(" 包就声明了所有需要用到的帮助函数，而 "),t("code",[s._v("@babel/plugin-transform-runtime")]),s._v(" 的作用就是将所有需要"),t("code",[s._v("helper")]),s._v("函数的文件，从"),t("code",[s._v("@babel/runtime")]),s._v("包 引进来")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" _classCallCheck2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/runtime/helpers/classCallCheck'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" _classCallCheck3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("_interopRequireDefault")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_classCallCheck2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("_interopRequireDefault")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("obj")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__esModule "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("Person")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" _classCallCheck3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Person"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("这里就没有在编译出"),t("code",[s._v("help")]),s._v("函数"),t("code",[s._v("classCallCheck")]),s._v("了,而是直接引用了"),t("code",[s._v("@babel/runtime")]),s._v("中的"),t("code",[s._v("helper/classCallCheck")])]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" @babel"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("transform"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("runtime @babel"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("runtime\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用在"),t("code",[s._v(".babelrc")]),s._v("文件中")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"plugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/plugin-transfrom-runtime"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"服务器端渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器端渲染"}},[s._v("#")]),s._v(" 服务器端渲染")]),s._v(" "),t("p",[s._v("客户端渲染:获取 HTML 文件,根据需要下载"),t("code",[s._v("javaScript")]),s._v("文件,运行文件,生成 DOM,在渲染")]),s._v(" "),t("p",[s._v("服务端渲染:服务端返回 HTML 文件,客户端只需要解析 HTML")]),s._v(" "),t("p",[s._v("优点: 首屏渲染快,SEO 好\n缺点:配置麻烦,增加了服务器的计算压力")]),s._v(" "),t("h2",{attrs:{id:"使用-defer-加载-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-defer-加载-js"}},[s._v("#")]),s._v(" 使用 Defer 加载 JS")]),s._v(" "),t("p",[s._v("尽量将 css 放在文件头部,javaScript 文件放在底部")]),s._v(" "),t("p",[s._v("所有放在 head 标签里的 css 和 js 文件都会堵塞渲染,如果这些 css 和 js 需要加载和解析很久的话,那么页面就空白了,所以 js 文件要放在底部,等 HTML 解析完了在加载 js 文件")]),s._v(" "),t("p",[s._v("那为什么 css 文件还要放在头部呢?")]),s._v(" "),t("p",[s._v("因为先加载 HTML 再加载 css,会让用户第一时间看到的页面是没有样式的,丑陋的,为了避免这种情况发生,就要将 css 文件放在头部了")]),s._v(" "),t("p",[s._v("另外,js 文件也不是不可以放在头部,只要给"),t("code",[s._v("script")]),s._v("标签加上"),t("code",[s._v("defer")]),s._v("属性就可以了,异步下载,延迟执行")]),s._v(" "),t("h2",{attrs:{id:"静态资源使用-cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态资源使用-cdn"}},[s._v("#")]),s._v(" 静态资源使用 CDN")]),s._v(" "),t("p",[s._v("用户与服务器的物理距离对响应时间也有影响,把内容部署在多个地理位置分散的服务器上能让用户更快的载入页面,cdn 就是为了解决这一问题,在多个位置部署服务器,让用户离服务器更近,从而缩短请求时间")]),s._v(" "),t("h2",{attrs:{id:"图片优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片优化"}},[s._v("#")]),s._v(" 图片优化")]),s._v(" "),t("p",[s._v("雪碧图")]),s._v(" "),t("p",[s._v("最为常用的图片合并场景就是雪碧图")]),s._v(" "),t("p",[s._v("雪碧图的核心原理在于设置不同的背景偏移量,大致包含两点")]),s._v(" "),t("p",[s._v("⒈ 不同的图标元素都会将"),t("code",[s._v("background-url")]),s._v("设置为合并后的雪碧图 url\n⒉ 不同的图标通过设置对应的"),t("code",[s._v("background-posiiton")]),s._v("来展示大图中对应的图标部分,你可以用"),t("code",[s._v("photoshop")]),s._v("这类工具自己制作雪碧图,当然比较推荐的是将雪碧图的生成集成到前端自动化构建工具中,例如在"),t("code",[s._v("webpack")]),s._v("中使用"),t("code",[s._v("webpack-spritesmith")]),s._v(",或者在"),t("code",[s._v("gulp")]),s._v("中使用"),t("code",[s._v("gulp.spritesmith")]),s._v(",他们两者都是基于"),t("code",[s._v("spritesmith")]),s._v("这个库")]),s._v(" "),t("h2",{attrs:{id:"图片懒加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载"}},[s._v("#")]),s._v(" 图片懒加载")]),s._v(" "),t("p",[s._v("一般来说,我们访问网站页面时,很多图片并不在首屏中,如果我们都加载的话,相当于加载了用户不一定会看到图片,这显然是一种浪费,解决的核心思路就懒加载,实现方式就是先不给图片设置路径,当图片出现在浏览器可视区时才设置真正的图片路径")]),s._v(" "),t("p",[s._v("实现上就是先将图片路径设置给"),t("code",[s._v("original-src")]),s._v(",当页面不可见时,图片不会加载")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img original"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx.image"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通过监听页面滚动,等页面可见时设置图片的"),t("code",[s._v("src")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" img "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'img'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nimg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAttribute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'original-src'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果想使用懒加载,还可以借助一些已有的工具库,例如"),t("code",[s._v("aFarkas/lazysizes,verlok/lazyload,tuupola/lazyload")]),s._v("等")]),s._v(" "),t("h2",{attrs:{id:"css-中图片懒加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-中图片懒加载"}},[s._v("#")]),s._v(" css 中图片懒加载")]),s._v(" "),t("p",[s._v("除了对于"),t("code",[s._v("<img>")]),s._v("元素的图片进行来加载,在 css 中使用的图片一样可以懒加载,最常见的场景就是"),t("code",[s._v("background-url")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("login "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tbackground"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("img"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("login"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("png"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("对于上面的这个样式规则,如果不应用到具体的元素,浏览器不会去下载该图片,可以通过切换"),t("code",[s._v("className")]),s._v("的方式,放心的进行 css 中图片的懒加载")]),s._v(" "),t("p",[s._v("用 innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript 性能,当需要设置的样式很多时设置"),t("code",[s._v("className")]),s._v("而不是直接操作"),t("code",[s._v("style")])]),s._v(" "),t("p",[s._v("少用全局变量、缓存 DOM 节点查找的结果。减少 IO 读取操作,")])],1)}),[],!1,null,null,null);t.default=e.exports}}]);