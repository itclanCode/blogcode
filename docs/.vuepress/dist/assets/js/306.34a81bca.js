(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{1677:function(s,a,t){"use strict";t.r(a);var n=t(9),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"vuejs中readonly与shallowreadonly函数的使用比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuejs中readonly与shallowreadonly函数的使用比较"}},[s._v("#")]),s._v(" vueJs中readonly与shallowReadonly函数的使用比较")]),s._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),a("TOC"),s._v(" "),a("h2",{attrs:{id:"readonly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readonly"}},[s._v("#")]),s._v(" readonly")]),s._v(" "),a("p",[s._v("让一个响应式数据变为只读的,接收一个响应式数据,经过"),a("code",[s._v("readonly")]),s._v("加工处理一下,那么新赋值的数据都不允许修改")]),s._v(" "),a("p",[s._v("接受一个对象 (不论是响应式还是普通的) 或是一个 "),a("code",[s._v("ref")]),s._v("，返回一个原值的只读代理")]),s._v(" "),a("p",[s._v("页面没有更新有两种情况")]),s._v(" "),a("p",[s._v("[1]. 数据修改了,但数据不是响应式,"),a("code",[s._v("vue")]),s._v("监测不到")]),s._v(" "),a("p",[s._v("[2]. 数据压根就没有更改")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" original "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" copy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readonly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("original"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改源属性会触发其依赖的侦听器")]),s._v("\noriginal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改该只读副本将会失败，并会得到一个警告,页面数据不会更新")]),s._v("\ncopy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// warning!")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"shallowreadonly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shallowreadonly"}},[s._v("#")]),s._v(" shallowreadonly")]),s._v(" "),a("p",[s._v("接收一个响应式数据,经过"),a("code",[s._v("shallowreadonly")]),s._v("的处理,变成一个只读的,只考虑对象的第一层数据,不可以修改,但是第一层嵌套里的深层数据却支持修改")]),s._v(" "),a("p",[s._v("让一个响应式数据变为只读能力(浅只读)")]),s._v(" "),a("p",[s._v("应用场景: 不希望数据被修改,当数据是从别的地方取过来,不希望影响源数据")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shallowReadonly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("nested")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改状态自身的属性会失败,不可以修改")]),s._v("\nstate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...但可以更改下层嵌套对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isReadonly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nested"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是可以通过的")]),s._v("\nstate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nested"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[a("code",[s._v("readonly")]),s._v("与"),a("code",[s._v("shallowReadonly")]),s._v("都是让响应式数据只具备读的能力,后者是浅层次的只读,也就是只对数据对象第一层起作用,深层次的嵌套,当时用"),a("code",[s._v("shallowReadonl()")]),s._v("处理时,深层次数据支持被修改")]),s._v(" "),a("p",[s._v("在不希望数据被修改,或当数据是从别的地方取过来,不希望影响源数据时,使用"),a("code",[s._v("readonly()")]),s._v("或"),a("code",[s._v("shallowReadonly()")]),s._v("就很有用")]),s._v(" "),a("p",[s._v("至于数据能不能修改是由写代码的开发者决定的,也是由产品功能决定的,支不支持修改,可以控制数据是否能读写能力")]),s._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),s._v(" "),a("footer-FeedBack")],1)}),[],!1,null,null,null);a.default=e.exports}}]);