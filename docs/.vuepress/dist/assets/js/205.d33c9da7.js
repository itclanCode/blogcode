(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1428:function(s,t,a){"use strict";a.r(t);var n={data:()=>({num:1}),mounted(){this.num=sessionStorage.number||1},methods:{handleChange(s){console.log(s),sessionStorage.number=s}}},e=(a(900),a(9)),r=Object(e.a)(n,(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"js如何使用sessionstorage实现计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js如何使用sessionstorage实现计数器"}},[s._v("#")]),s._v(" JS如何使用sessionStorage实现计数器")]),s._v(" "),t("h2",{attrs:{id:"快速导航"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),t("TOC"),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[t("code",[s._v("sessionStorage")]),s._v("也是本地存储的一种方式,有时候,是需要利用"),t("code",[s._v("sessionStorage")]),s._v("来保存某些数据,比如:表格的分页,还有购物车的商品信息,判断是不是首次进入页面等")]),s._v(" "),t("h2",{attrs:{id:"具体示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体示例"}},[s._v("#")]),s._v(" 具体示例")]),s._v(" "),[t("div",{staticClass:"wrap"},[t("div",{staticClass:"content"},[t("el-input-number",{attrs:{min:1},on:{change:s.handleChange},model:{value:s.num,callback:function(t){s.num=t},expression:"num"}})],1)])],s._v(" "),t("p",[s._v("以上的加减计数器,使用了"),t("code",[s._v("sessionStorage")]),s._v(",设置了"),t("code",[s._v("sessionStorage")]),s._v("只在当前窗口有效,当关闭窗口时,"),t("code",[s._v("sessionStorage")]),s._v("就失效了的,这一点是有别于"),t("code",[s._v("localStorage")]),s._v("永久存储的,除非手动删除,而"),t("code",[s._v("sessionStorage")]),s._v("关闭了窗口,"),t("code",[s._v("sessionStorage")]),s._v("设置的值就会消失")]),s._v(" "),t("p",[s._v("API的使用上,两者都是相似的,设置"),t("code",[s._v("sessionStorage")]),s._v("使用的是"),t("code",[s._v("sessionStorage.setItem('key',val)")]),s._v(",而获取"),t("code",[s._v("sessionStorage")]),s._v("的值是使用")]),s._v(" "),t("p",[t("code",[s._v("sessionStorage.getItem('key')")])]),s._v(" "),t("p",[s._v("具体示例代码如下所示")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("wrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("el-input-number")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("v-model")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("@change")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("handleChange"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":min")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("el-input-number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}},[t("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("num")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mounted")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// this.num = sessionStorage.getItem('number') || 1;")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sessionStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("methods")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handleChange")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("val")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//sessionStorage.setItem('number',val)")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于如下")]),s._v("\n        sessionStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token style"}},[t("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".wrap")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-align")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("p",[s._v("主要的核心代码是\n设置"),t("code",[s._v("sessionStorage")]),s._v("使用的是"),t("code",[s._v("sessionStorage.setItem('key',val)")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 常用")]),s._v("\nsessionStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者,如下所示,这里的key是你自己设置的存储的字段,val是要具体存入sessionStorage的值")]),s._v("\nsessionStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("而获取"),t("code",[s._v("sessionStorage")]),s._v("使用的是"),t("code",[s._v("sessionStorage.getItem('key')")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 常用")]),s._v("\nsessionStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者")]),s._v("\nsessionStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"前端浏览器本地存储的方法与区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端浏览器本地存储的方法与区别"}},[s._v("#")]),s._v(" 前端浏览器本地存储的方法与区别")]),s._v(" "),t("h3",{attrs:{id:"相同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[s._v("#")]),s._v(" 相同点")]),s._v(" "),t("p",[s._v("在本地(浏览器端)存储数据")]),s._v(" "),t("h3",{attrs:{id:"不同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[s._v("#")]),s._v(" 不同点")]),s._v(" "),t("p",[t("code",[s._v("cookie")]),s._v("由服务端写入,而"),t("code",[s._v("localStorage")]),s._v(","),t("code",[s._v("sessionStorage")]),s._v("由前端写入")]),s._v(" "),t("h3",{attrs:{id:"生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[s._v("#")]),s._v(" 生命周期")]),s._v(" "),t("p",[t("code",[s._v("cookie")]),s._v("由服务器端在写入的时候就设置好的,而"),t("code",[s._v("localStorage")]),s._v("是写入就一直存在,除非手动清除,"),t("code",[s._v("sessionStorage")]),s._v("是页面关闭的时候就清除")]),s._v(" "),t("h3",{attrs:{id:"存储大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储大小"}},[s._v("#")]),s._v(" 存储大小")]),s._v(" "),t("p",[t("code",[s._v("cookie")]),s._v("的存储空间比较小,大概"),t("code",[s._v("4KB")]),s._v(","),t("code",[s._v("sessionStorage")]),s._v(","),t("code",[s._v("localStorage")]),s._v("存储空间比较大,大概"),t("code",[s._v("5M")])]),s._v(" "),t("h3",{attrs:{id:"同源原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同源原则"}},[s._v("#")]),s._v(" 同源原则")]),s._v(" "),t("p",[t("code",[s._v("cookie")]),s._v(","),t("code",[s._v("sessionStorage")]),s._v(","),t("code",[s._v("LocalStorage")]),s._v("数据都遵循同源原则,其中"),t("code",[s._v("sessionStorage")]),s._v("还限制必须是同一个页面")]),s._v(" "),t("p",[s._v("在前端给后端发送请求的时候,会自动携带"),t("code",[s._v("cookie")]),s._v("中的数据,但是"),t("code",[s._v("sessionStorage")]),s._v("不会")]),s._v(" "),t("h3",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),t("p",[t("code",[s._v("Cookie")]),s._v("一般用于存储登录验证信息"),t("code",[s._v("sessionID")]),s._v("或者"),t("code",[s._v("token")]),s._v(","),t("code",[s._v("localStorage")]),s._v("常用语存储不易变动的数据,需要持久化的数据,减轻服务器的压力,"),t("code",[s._v("sessionStorage")]),s._v("可以用来监测用户是否刷新进入页面")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("sessionStorage")]),s._v("与"),t("code",[s._v("localStorage")]),s._v("的用法相似,"),t("code",[s._v("sessionStorage")]),s._v(",是一种临时存储,可以用于存储大量的数据,只不过它是针对当前的"),t("code",[s._v("session")]),s._v("会话临时存储的,当关闭了浏览器窗口以后,这个数据就丢失了的")]),s._v(" "),t("p",[s._v("也就是不同的新标签页,"),t("code",[s._v("sessionStorage")]),s._v("是相互独立的,只要关闭了当前浏览器窗口,那么设置的"),t("code",[s._v("sessionStorage")]),s._v("就会丢失")]),s._v(" "),t("p",[s._v("如果需要永久性存储,保持某个数据的状态,即使关闭浏览器,也存在,那么就用"),t("code",[s._v("localStorage")]),s._v(",如果只需要临时存储,那么就用"),t("code",[s._v("sessionStorage")])]),s._v(" "),t("p",[s._v("本文只是用一个加减数字,作为演示的,在实际开发中,多多熟悉下就可以了的")]),s._v(" "),t("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),s._v(" "),t("footer-FeedBack")],2)}),[],!1,null,null,null);t.default=r.exports},513:function(s,t,a){},900:function(s,t,a){"use strict";a(513)}}]);