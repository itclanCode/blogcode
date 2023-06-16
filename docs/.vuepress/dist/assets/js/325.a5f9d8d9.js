(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{2037:function(t,a,s){"use strict";s.r(a);var n=s(12),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"js如何实现页面的前进与后退"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js如何实现页面的前进与后退"}},[t._v("#")]),t._v(" JS如何实现页面的前进与后退")]),t._v(" "),s("h2",{attrs:{id:"快速导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),s("TOC"),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("在浏览一些文档形式的网页是,比如小说阅读器,往往需要给用户提供这样的功能,实现前进和后退,用户通过单击按钮达到访问之前的网页和之后的网页的功能")]),t._v(" "),s("h2",{attrs:{id:"示例效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例效果"}},[t._v("#")]),t._v(" 示例效果")]),t._v(" "),s("jingdiantexiao-forwardBack"),t._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"实例描述",lazy:""}},[s("p",[t._v("在浏览一些文档形式的网页是,比如小说阅读器,往往需要给用户提供这样的功能,实现前进和后退,用户通过单击按钮达到访问之前的网页和之后的网页的功能")])]),t._v(" "),s("Tab",{attrs:{label:"具体JavaScript代码",lazy:""}},[s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前进")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("goForward")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 到之前的网页")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后退")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("goBack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 到之后的网页")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("               \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])]),t._v(" "),s("Tab",{attrs:{label:"难点剖析",lazy:""}},[s("p",[t._v("要知道页面可以前进和后退,就必须要知道浏览器的浏览历史("),s("code",[t._v("history")]),t._v(")概念,浏览器在访问网页时,会把访问的记录按照事件顺序进行排列,而"),s("code",[t._v("forward()")]),t._v("和"),s("code",[t._v("back()")]),t._v("函数就是负责在浏览器中找到前一个网页和后一个网页")])]),t._v(" "),s("Tab",{attrs:{label:"额外拓展",lazy:""}},[s("p",[t._v("在"),s("code",[t._v("history")]),t._v("对象里,还有一个"),s("code",[t._v("go()")]),t._v("函数,其中有一个整型的参数,当参数为正数时标识前进"),s("code",[t._v("N")]),t._v("页,当为负数时,则表示后退N页,比如"),s("code",[t._v("go(-1)")]),t._v("的效果与"),s("code",[t._v("back()")]),t._v("函数的效果是一样的")])])],1),t._v(" "),s("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),t._v(" "),s("footer-FeedBack"),t._v(">\n")],1)}),[],!1,null,null,null);a.default=r.exports}}]);