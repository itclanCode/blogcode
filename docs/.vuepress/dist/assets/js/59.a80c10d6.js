(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1299:function(t,e,a){"use strict";a(619)},1473:function(t,e,a){"use strict";a.r(e);var i=a(165),l=a.n(i),s=a(475),r={name:"singleEllipsis",data:()=>({width:200,selectedType:"ellipsis",overflowValue:"hidden",whiteSpaceValue:"nowrap",overflow:["hidden","visible","scroll","auto"],whiteSpace:["normal","wrap","nowrap"],textOverflow:["clip","ellipsis","…"],tableAttrData:s.b,tabcolums:s.c}),watch:{width(){this.updateCss()},overflowValue(){this.updateCss()},selectedType(){this.updateCss()},whiteSpaceValue(){this.updateCss()}},methods:{styleToString(t){let e="";for(let a in t)e+=`${a}: ${t[a]};\n`;return e},updateCss(){this.$refs.css.innerHTML=l.a.highlight(`width: ${this.width}px;\noverflow: ${this.overflowValue};\ntext-overflow: ${this.selectedType};\nwhite-space: ${this.whiteSpaceValue}`,l.a.languages.css)}},mounted(){this.updateCss()}},o=(a(1299),a(9)),n=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"effect-display-wrap",style:{width:t.width+"px",overflow:t.overflowValue,textOverflow:t.selectedType,whiteSpace:t.whiteSpaceValue}},[t._v("单行溢出省略号显示-固定宽度是必须的-文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{staticClass:"language-css",staticStyle:{"margin-bottom":"30px"}},[e("code",{ref:"css"})])]),t._v(" "),e("div",{staticClass:"attr-operate-wrap"},[e("div",{staticClass:"attr-inner-content"},[e("div",{staticClass:"text-width"},[t._v("宽度-width:")]),t._v(" "),e("el-slider",{staticClass:"slider",attrs:{min:200,max:705,"show-input":"","input-size":"mini"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),t._v(" "),e("div",{staticClass:"attr-inner-content"},[e("div",{staticClass:"text-width"},[t._v("内容溢出-overflow:")]),t._v(" "),e("el-radio-group",{staticClass:"el-radio-group",model:{value:t.overflowValue,callback:function(e){t.overflowValue=e},expression:"overflowValue"}},t._l(t.overflow,(function(a){return e("el-radio",{key:a,staticClass:"radio",attrs:{label:a}},[t._v(t._s(a))])})),1)],1),t._v(" "),e("div",{staticClass:"attr-inner-content"},[e("div",{staticClass:"text-width"},[t._v("文本溢出-text-overflow:")]),t._v(" "),e("el-radio-group",{staticClass:"el-radio-group",model:{value:t.selectedType,callback:function(e){t.selectedType=e},expression:"selectedType"}},t._l(t.textOverflow,(function(a){return e("el-radio",{key:a,staticClass:"radio",attrs:{label:a}},[t._v(t._s(a))])})),1)],1),t._v(" "),e("div",{staticClass:"attr-inner-content"},[e("div",{staticClass:"text-width"},[t._v("段落文本换行-white-space:")]),t._v(" "),e("el-radio-group",{staticClass:"el-radio-group",model:{value:t.whiteSpaceValue,callback:function(e){t.whiteSpaceValue=e},expression:"whiteSpaceValue"}},t._l(t.whiteSpace,(function(a){return e("el-radio",{key:a,staticClass:"radio",attrs:{label:a}},[t._v(t._s(a))])})),1)],1)]),t._v(" "),e("div",{staticClass:"attr-table-desc"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableAttrData}},t._l(t.tabcolums,(function(t){return e("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label,align:"center","header-align":"center"}})})),1)],1)])}),[],!1,null,"60cedc46",null);e.default=n.exports},475:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s}));const i=[{attr:"width",type:"Number",value:"500",descption:"宽度值必须固定"},{attr:"overflow",type:"String",value:"hidden/visible/scroll/auto",descption:"hidden-内容溢出隐藏 | visible(默认-不会被裁剪) | scroll/auto(内容溢出-水平垂直方向会出现滚动条)"},{attr:"text-overflow",type:"String",value:"ellipsis",descption:"多出部分省略号显示"},{attr:"white-space",type:"String",value:"nowrap",descption:"不换行"}],l=[{attr:"width",type:"Number",value:"500",descption:"宽度值必须固定"},{attr:"display",type:"String",value:"-webkit-box(-m/-moz)",descption:"老版本-声明盒子弹性收缩,必须要加上浏览器前缀,chrome(-webkit),IE(-moz),firefox(-moz)"},{attr:"overflow",type:"String",value:"hidden/visible/scroll/auto",descption:"hidden-内容溢出隐藏"},{attr:"text-overflow",type:"String",value:"ellipsis",descption:"多出部分省略号显示"},{attr:"box-orient",type:"String",value:"vertical",descption:"vertical垂直方向/horizontal水平方向"},{attr:"line-clamp",type:"Number",value:2,descption:"控制显示行数"}],s=[{prop:"attr",label:"属性"},{prop:"type",label:"类型"},{prop:"value",label:"值",width:"200px"},{prop:"descption",label:"说明"}]},619:function(t,e,a){}}]);