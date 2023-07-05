(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1293:function(t,i,e){"use strict";e(607)},1473:function(t,i,e){"use strict";e.r(i);e(46);var s=e(166),o=e.n(s);const h={top:"bottom",right:"left",bottom:"top",left:"right",topRight:"right",bottomRight:"bottom",bottomLeft:"left",topLeft:"top",code:""},a={top:{top:!1,right:"width-right",bottom:"height",left:"width-left"},right:{top:"height-top",right:!1,bottom:"height-bottom",left:"width"},bottom:{top:"height",right:"width-right",bottom:!1,left:"width-left"},left:{top:"height-top",right:"width",bottom:"height-bottom",left:!1},topRight:{top:!1,right:"width",bottom:"height",left:!1},bottomRight:{top:!1,right:!1,bottom:"height",left:"width"},bottomLeft:{top:"height",right:!1,bottom:!1,left:"width"},topLeft:{top:"height",right:"width",bottom:!1,left:!1}};var l={name:"createTriangle",data:()=>({type:"iso",choosenColor:"#42b983",direction:"top",width:100,height:100,left:50,right:50,top:50,bottom:50,showEqu:!0,lengths:"",colors:"",widthDisable:!1,heightDisable:!1,leftDisable:!1,rightDisable:!1,topDisable:!1,bottomDisable:!1}),watch:{direction(t){this.changeSetup(),this.changeSize(),this.updateCSS()},type(){this.changeSetup(),this.changeSize(),this.updateCSS()}},methods:{update(){this.changeSize(),this.updateCSS()},setActive(t){return t==this.direction?"active":""},changeSize(){"top"==this.direction||"bottom"==this.direction||"left"==this.direction||"right"==this.direction?(this.widthDisable?this.width=1*this.left+1*this.right:(this.left=1*this.width/2,this.right=1*this.width/2),this.heightDisable?this.height=1*this.top+1*this.bottom:(this.top=1*this.height/2,this.bottom=1*this.height/2)):"iso"==this.type&&(this.left=1*this.width/2,this.right=1*this.width/2,this.top=1*this.height/2,this.bottom=1*this.height/2)},updateCSS(){let t={top:0,right:0,bottom:0,left:0},i={top:"transparent",right:"transparent",bottom:"transparent",left:"transparent"},e=a[this.direction];for(var s in i[h[this.direction]]=this.choosenColor,e)if(!1===e[s])t[s]="0";else switch(this.type){case"equ":if("top"==this.direction||"bottom"==this.direction){var l=(Math.sqrt(3)/2*this.width).toFixed(1);switch(e[s]){case"width":case"height":t[s]=l+"px";break;case"width-left":case"width-right":t[s]=this.width/2+"px"}}else if("left"==this.direction||"right"==this.direction){l=(Math.sqrt(3)/2*this.height).toFixed(1);switch(e[s]){case"width":case"height":t[s]=l+"px";break;case"height-top":case"height-bottom":t[s]=this.height/2+"px"}}break;case"iso":switch(e[s]){case"width":t[s]=this.width+"px";break;case"height":t[s]=this.height+"px";break;case"width-left":case"width-right":t[s]=this.width/2+"px";break;case"height-top":case"height-bottom":t[s]=this.height/2+"px"}break;case"sca":switch(e[s]){case"width":t[s]=this.width+"px";break;case"height":t[s]=this.height+"px";break;case"width-left":t[s]=this.left+"px";break;case"width-right":t[s]=this.right+"px";break;case"height-top":t[s]=this.top+"px";break;case"height-bottom":t[s]=this.bottom+"px"}}this.lengths=this.toArray(t).join(" "),this.colors=this.toArray(i).join(" ");let r=`.triangle {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: ${this.lengths};\n  border-color: ${this.colors};\n}`,n=o.a.highlight(r,o.a.languages.css);this.$refs["code-container"].innerHTML=n},changeSetup(){switch("topRight"==this.direction||"bottomRight"==this.direction||"bottomLeft"==this.direction||"topLeft"==this.direction?("equ"==this.type&&(this.type="iso"),this.showEqu=!1):this.showEqu=!0,this.type){case"equ":"top"==this.direction||"bottom"==this.direction?(this.widthDisable=!1,this.heightDisable=!0,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0):"left"==this.direction||"right"==this.direction?(this.widthDisable=!0,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0):(this.widthDisable=!1,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0);break;case"iso":this.widthDisable=!1,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0;break;case"sca":"top"==this.direction||"bottom"==this.direction?(this.widthDisable=!0,this.heightDisable=!1,this.leftDisable=!1,this.rightDisable=!1,this.topDisable=!0,this.bottomDisable=!0):"left"==this.direction||"right"==this.direction?(this.widthDisable=!1,this.heightDisable=!0,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!1,this.bottomDisable=!1):(this.widthDisable=!1,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0)}},toArray(t){var i=[];for(var e in t)i.push(t[e]);return i}},mounted(){this.changeSetup(),this.changeSize(),this.updateCSS()}},r=(e(1293),e(9)),n=Object(r.a)(l,(function(){var t=this,i=t._self._c;return i("div",[i("div",{staticClass:"createTriangle-container"},[i("div",[i("section",{staticClass:"tool-flex"},[i("div",[i("h4",[t._v(t._s("方向"))]),t._v(" "),i("div",{staticClass:"direction-contianer"},[i("div",{staticClass:"placeholder"}),t._v(" "),i("div",{staticClass:"square rotate"},[i("label",{staticClass:"direction-label",class:t.setActive("top"),attrs:{for:"top"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"top",value:"top"},domProps:{checked:t._q(t.direction,"top")},on:{change:function(i){t.direction="top"}}})]),t._v(" "),i("label",{staticClass:"direction-label",class:t.setActive("right"),attrs:{for:"right"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"right",value:"right"},domProps:{checked:t._q(t.direction,"right")},on:{change:function(i){t.direction="right"}}})]),t._v(" "),i("label",{staticClass:"direction-label",class:t.setActive("left"),attrs:{for:"left"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"left",value:"left"},domProps:{checked:t._q(t.direction,"left")},on:{change:function(i){t.direction="left"}}})]),t._v(" "),i("label",{staticClass:"direction-label",class:t.setActive("bottom"),attrs:{for:"bottom"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"bottom",value:"bottom"},domProps:{checked:t._q(t.direction,"bottom")},on:{change:function(i){t.direction="bottom"}}})])]),t._v(" "),i("div",{staticClass:"square"},[i("label",{staticClass:"direction-label",class:t.setActive("topLeft"),attrs:{for:"topLeft"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"topLeft",value:"topLeft"},domProps:{checked:t._q(t.direction,"topLeft")},on:{change:function(i){t.direction="topLeft"}}})]),t._v(" "),i("label",{staticClass:"direction-label",class:t.setActive("topRight"),attrs:{for:"topRight"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"topRight",value:"topRight"},domProps:{checked:t._q(t.direction,"topRight")},on:{change:function(i){t.direction="topRight"}}})]),t._v(" "),i("label",{staticClass:"direction-label",class:t.setActive("bottomLeft"),attrs:{for:"bottomLeft"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"bottomLeft",value:"bottomLeft"},domProps:{checked:t._q(t.direction,"bottomLeft")},on:{change:function(i){t.direction="bottomLeft"}}})]),t._v(" "),i("label",{staticClass:"direction-label",class:t.setActive("bottomRight"),attrs:{for:"bottomRight"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"bottomRight",value:"bottomRight"},domProps:{checked:t._q(t.direction,"bottomRight")},on:{change:function(i){t.direction="bottomRight"}}})])])])]),t._v(" "),i("div",[i("h4",[t._v(t._s("颜色"))]),t._v(" "),i("el-color-picker",{on:{change:t.update},model:{value:t.choosenColor,callback:function(i){t.choosenColor=i},expression:"choosenColor"}})],1)]),t._v(" "),i("section",[i("h4",[t._v(t._s("类型"))]),t._v(" "),t.showEqu?i("el-radio",{attrs:{label:"equ"},model:{value:t.type,callback:function(i){t.type=i},expression:"type"}},[t._v(t._s("等边"))]):t._e(),t._v(" "),i("el-radio",{attrs:{label:"iso"},model:{value:t.type,callback:function(i){t.type=i},expression:"type"}},[t._v(t._s("等腰"))]),t._v(" "),i("el-radio",{attrs:{label:"sca"},model:{value:t.type,callback:function(i){t.type=i},expression:"type"}},[t._v(t._s("不等边"))])],1),t._v(" "),i("section",{staticClass:"size-section"},[i("h4",[t._v("\n          "+t._s("大小")+"\n          "),i("span",[t._v(t._s("（更改值后请敲回车）"))])]),t._v(" "),i("p",[t._v(t._s("宽度"))]),t._v(" "),i("el-input-number",{attrs:{disabled:t.widthDisable,min:0,max:300,size:"mini"},on:{change:t.update},model:{value:t.width,callback:function(i){t.width=i},expression:"width"}}),t._v(" "),i("div",{staticClass:"tool-flex"},[i("div",[i("p",[t._v(t._s("左"))]),t._v(" "),i("el-input-number",{attrs:{disabled:t.leftDisable,min:0,max:150,size:"mini"},on:{change:t.update},model:{value:t.left,callback:function(i){t.left=i},expression:"left"}})],1),t._v(" "),i("div",[i("p",[t._v(t._s("右"))]),t._v(" "),i("el-input-number",{attrs:{disabled:t.rightDisable,min:0,max:150,size:"mini"},on:{change:t.update},model:{value:t.right,callback:function(i){t.right=i},expression:"right"}})],1)]),t._v(" "),i("p",[t._v(t._s("高度"))]),t._v(" "),i("el-input-number",{attrs:{disabled:t.heightDisable,min:0,max:300,size:"mini"},on:{change:t.update},model:{value:t.height,callback:function(i){t.height=i},expression:"height"}}),t._v(" "),i("div",{staticClass:"tool-flex"},[i("div",[i("p",[t._v(t._s("上"))]),t._v(" "),i("el-input-number",{attrs:{disabled:t.topDisable,min:0,max:150,size:"mini"},on:{change:t.update},model:{value:t.top,callback:function(i){t.top=i},expression:"top"}})],1),t._v(" "),i("div",[i("p",[t._v(t._s("下"))]),t._v(" "),i("el-input-number",{attrs:{disabled:t.bottomDisable,min:0,max:150,size:"mini"},on:{change:t.update},model:{value:t.bottom,callback:function(i){t.bottom=i},expression:"bottom"}})],1)])],1)]),t._v(" "),i("div",{staticClass:"triangle-container"},[i("div",{staticClass:"triangle-demo",style:{borderWidth:t.lengths,borderColor:t.colors}})])]),t._v(" "),i("div",{staticStyle:{width:"100%"}},[i("h3",[t._v("CSS")]),t._v(" "),i("div",{staticClass:"language-css extra-class"},[i("pre",{staticClass:"language-css"},[i("code",{ref:"code-container"})])])])])}),[],!1,null,"835f3d74",null);i.default=n.exports},607:function(t,i,e){}}]);