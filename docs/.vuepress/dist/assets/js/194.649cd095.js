(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1403:function(t,a,i){"use strict";i(712)},1432:function(t,a,i){"use strict";i.r(a);var e=i(166),s=i.n(e);const l=[{attr:"writing-mode",type:"String",value:"horizontal-tb/vertical-rl/vertical-lr/sideways-rl/sideways-lr",descption:"决定文本在水平或垂直方向上如何排布horizontal-tb表示水平,vertical-rl表示垂直"}],r=[{prop:"attr",label:"属性"},{prop:"type",label:"类型"},{prop:"value",label:"值",width:"200px"},{prop:"descption",label:"说明"}];var n={name:"writeMode",data:()=>({writingModeVal:"horizontal-tb",writingModes:["horizontal-tb","vertical-rl","vertical-lr","sideways-rl","sideways-lr"],tableAttrData:l,tabcolums:r}),watch:{writingModeVal(){this.updateCss()}},methods:{updateCss(){this.$refs.css.innerHTML=s.a.highlight(`writing-mode: ${this.writingModeVal};\n-webkit-writing-mode: ${this.writingModeVal};\n-ms-writing-mode: ${this.writingModeVal}`,s.a.languages.css)}},mounted(){this.updateCss()}},o=(i(1403),i(9)),d=Object(o.a)(n,(function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"effect-display-wrap"},[a("div",{style:{writingMode:t.writingModeVal}},[t._v("文字排布"+t._s("horizontal-tb"===t.writingModeVal?"水平":"垂直")+"方向")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{staticClass:"language-css",staticStyle:{"margin-bottom":"30px"}},[a("code",{ref:"css"})])]),t._v(" "),a("div",{staticClass:"attr-operate-wrap"},[a("div",{staticClass:"attr-inner-content"},[a("div",{staticClass:"text-width"},[t._v("决定文本在水平或垂直方向上如何排布-writing-mode:")]),t._v(" "),a("el-radio-group",{staticClass:"el-radio-group",model:{value:t.writingModeVal,callback:function(a){t.writingModeVal=a},expression:"writingModeVal"}},t._l(t.writingModes,(function(i){return a("el-radio",{key:i,staticClass:"radio",attrs:{label:i}},[t._v(t._s(i))])})),1)],1)]),t._v(" "),a("div",{staticClass:"attr-table-desc"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableAttrData}},t._l(t.tabcolums,(function(t){return a("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label,align:"center","header-align":"center"}})})),1)],1)])}),[],!1,null,"10b9f914",null);a.default=d.exports},712:function(t,a,i){}}]);