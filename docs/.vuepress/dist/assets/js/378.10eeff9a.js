(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{1753:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"移动端web如何禁止长按选择文字以及弹出菜单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动端web如何禁止长按选择文字以及弹出菜单"}},[s._v("#")]),s._v(" 移动端web如何禁止长按选择文字以及弹出菜单")]),s._v(" "),t("p",[s._v("在做移动端页面时,当用户用手机打开网站,当在上面用手指进行一些用户操作时")]),s._v(" "),t("p",[s._v("如果没有做任何处理,当用户点击屏幕,且有长按的动作时,屏幕会弹出一菜单,以及选中的效果,这个是非常不好的体验,那怎么禁用呢，用css几行代码就可以解决")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*如果是禁用长按选择文字功能，用css*/")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("touch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("callout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("khtml"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("moz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ms"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是input")]),s._v("\n   input "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("      \n             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*webkit浏览器*/")]),s._v("     \n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果是想禁用长按弹出菜单, 用js的话,阻止默认事件  ")]),s._v("\n    window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'contextmenu'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n        e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preventDefault")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),s._v(" "),t("footer-FeedBack")],1)}),[],!1,null,null,null);t.default=e.exports}}]);