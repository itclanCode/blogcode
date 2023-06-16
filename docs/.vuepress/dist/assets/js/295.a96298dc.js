(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{1961:function(s,a,t){"use strict";t.r(a);var n=t(12),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"vuejs中readonly与shallowreadonly函数的使用比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuejs中readonly与shallowreadonly函数的使用比较"}},[s._v("#")]),s._v(" vueJs中readonly与shallowReadonly函数的使用比较")]),s._v(" "),t("h2",{attrs:{id:"快速导航"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),t("TOC"),s._v(" "),t("h2",{attrs:{id:"readonly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#readonly"}},[s._v("#")]),s._v(" readonly")]),s._v(" "),t("p",[s._v("让一个响应式数据变为只读的,接收一个响应式数据,经过"),t("code",[s._v("readonly")]),s._v("加工处理一下,那么新赋值的数据都不允许修改")]),s._v(" "),t("p",[s._v("接受一个对象 (不论是响应式还是普通的) 或是一个 "),t("code",[s._v("ref")]),s._v("，返回一个原值的只读代理")]),s._v(" "),t("p",[s._v("页面没有更新有两种情况")]),s._v(" "),t("p",[s._v("[1]. 数据修改了,但数据不是响应式,"),t("code",[s._v("vue")]),s._v("监测不到")]),s._v(" "),t("p",[s._v("[2]. 数据压根就没有更改")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" original "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" copy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readonly")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("original"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改源属性会触发其依赖的侦听器")]),s._v("\noriginal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改该只读副本将会失败，并会得到一个警告,页面数据不会更新")]),s._v("\ncopy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// warning!")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"shallowreadonly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shallowreadonly"}},[s._v("#")]),s._v(" shallowreadonly")]),s._v(" "),t("p",[s._v("接收一个响应式数据,经过"),t("code",[s._v("shallowreadonly")]),s._v("的处理,变成一个只读的,只考虑对象的第一层数据,不可以修改,但是第一层嵌套里的深层数据却支持修改")]),s._v(" "),t("p",[s._v("让一个响应式数据变为只读能力(浅只读)")]),s._v(" "),t("p",[s._v("应用场景: 不希望数据被修改,当数据是从别的地方取过来,不希望影响源数据")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" state "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shallowReadonly")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("nested")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("bar")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改状态自身的属性会失败,不可以修改")]),s._v("\nstate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...但可以更改下层嵌套对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isReadonly")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nested"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是可以通过的")]),s._v("\nstate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nested"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[t("code",[s._v("readonly")]),s._v("与"),t("code",[s._v("shallowReadonly")]),s._v("都是让响应式数据只具备读的能力,后者是浅层次的只读,也就是只对数据对象第一层起作用,深层次的嵌套,当时用"),t("code",[s._v("shallowReadonl()")]),s._v("处理时,深层次数据支持被修改")]),s._v(" "),t("p",[s._v("在不希望数据被修改,或当数据是从别的地方取过来,不希望影响源数据时,使用"),t("code",[s._v("readonly()")]),s._v("或"),t("code",[s._v("shallowReadonly()")]),s._v("就很有用")]),s._v(" "),t("p",[s._v("至于数据能不能修改是由写代码的开发者决定的,也是由产品功能决定的,支不支持修改,可以控制数据是否能读写能力")]),s._v(" "),t("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),s._v(" "),t("footer-FeedBack")],1)}),[],!1,null,null,null);a.default=e.exports}}]);