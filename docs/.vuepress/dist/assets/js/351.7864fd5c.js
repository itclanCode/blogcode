(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{1722:function(t,s,a){"use strict";a.r(s);var n=a(9),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"js中闭包的概念和具体使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js中闭包的概念和具体使用"}},[t._v("#")]),t._v(" Js中闭包的概念和具体使用")]),t._v(" "),s("h2",{attrs:{id:"快速导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),s("TOC"),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("闭包在"),s("code",[t._v("js")]),t._v("里面是一个比较抽象的概念,但在面试里,是一个必问的话题,往往面试官希望你列举一些使用闭包的例子")]),t._v(" "),s("p",[t._v("或手写一个闭包")]),t._v(" "),s("p",[t._v("闭包,简单一句话讲就是能够读取其他函数内部变量的函数,当需要函数内容部的变量被外部的代码所访问时")]),t._v(" "),s("p",[t._v("那闭包就非常有用了的,如今,很多框架里面的高级特性都得依赖闭包的")]),t._v(" "),s("h2",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义函数a")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个局部变量n")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义函数b")]),t._v("\n        n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n自加1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回n的值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a函数的返回结果值为函数b")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行a函数,得到b,并赋值c")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// c函数执行n的值变为101")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在打印一次值,却变量102")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h2",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("p",[t._v("这个局部变量的函数会被保存下来,在函数外部,是没有办法直接访问函数里面的变量的,但是通过闭包却可以")]),t._v(" "),s("p",[t._v("也就是说,它是用来连接内部函数与外部函数的一个桥梁,闭包产生的本质原因,是作用域链引起的,从而达到外部函数访问内部函数局部变量的目的,其中被嵌套函数就可以称为是一个闭包")]),t._v(" "),s("p",[t._v("闭包的真正目的,就是要把局部的函数永久的保存下来,被外部的变量和代码所访问和使用")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("a")]),t._v("函数中内部的函数被"),s("code",[t._v("a")]),t._v("函数以外的函数所访问到,那就可以称为一个闭包")]),t._v(" "),s("p",[t._v("闭包最常见的用途就是把一个变量永久的保存下来,而不是随着函数的执行完毕而被"),s("code",[t._v("js")]),t._v("的垃圾回收器所回收")]),t._v(" "),s("p",[t._v("那这样,也会带来一个问题,就是内存得不到及时的回收,有可能会产生内存溢出的危险，具体的解决办法就是,退出函数之前,将不使用的局部变量全部删除清空就可以了")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("友情提醒")]),t._v(" "),s("p",[t._v("如果你把父函数当做对象使用,把闭包当做它的公有方法,把内部变量当做它的私有属性,这时候,要注意不要随便的改变父函数的内部变量的值")])]),t._v(" "),s("h2",{attrs:{id:"闭包的用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的用途"}},[t._v("#")]),t._v(" 闭包的用途")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("对外提供公有属性和方法(也就是函数外部读取函数内的局部变量)")])]),t._v(" "),s("li",[s("p",[t._v("保存变量于内存中,避免全局变量的污染(上面的一个示例就是的,局部变量被保存下来了的)")])])]),t._v(" "),s("p",[t._v("有时候需要一个模块中定义这样的变量,执行某些操作后,始终保存上一次的值,希望这个变量一直保存在内存中,但又不会污染全局变量,这个时候,我们就可以使用闭包")]),t._v(" "),s("h2",{attrs:{id:"相关文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[t._v("#")]),t._v(" 相关文章")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"./scope"}},[t._v("理解-JS-中的作用域-作用域链以及闭包")])]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/fontend/js/understand-closure/"}},[t._v("深度理解闭包")])],1)]),t._v(" "),s("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),t._v(" "),s("footer-FeedBack")],1)}),[],!1,null,null,null);s.default=r.exports}}]);