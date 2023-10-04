(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1692:function(t,i,o){"use strict";o(808)},1880:function(t,i,o){"use strict";o.r(i);o(48);var e=o(177),s=o.n(e);function n(t){var i=t;if(/^(rgb|RGB)/.test(i)){for(var o=i.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),e="#",s=0;s<o.length;s++){var n=Number(o[s]).toString(16);n.length<2&&(n="0"+n),e+=n}return 7!==e.length&&(e=i),e}if(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(i)){var a=i.replace(/#/,"").split("");if(6===a.length)return i;if(3===a.length){var r="#";for(s=0;s<a.length;s+=1)r+=a[s]+a[s];return r}}return i}function a(t,i){var o=t.toLowerCase();if(o&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(o)){if(4===o.length){for(var e="#",s=1;s<4;s+=1)e+=o.slice(s,s+1).concat(o.slice(s,s+1));o=e}var n=[];for(s=1;s<7;s+=2)n.push(parseInt("0x"+o.slice(s,s+2)));return"rgba("+n.join(",")+","+i+")"}return o}var r=function(){function t(t,i){this.container=document.querySelector(t),this.options=Object.assign({number:3,smooth:50,velocity:1,height:.3,colors:["#ff7657"],border:{show:!1,width:2,color:[""]},opacity:.5,position:"bottom"},i),this.lines=[],this.frame=null,this.step=0,this.status="pause",this.init(),this.draw()}return t.prototype.init=function(){if(null===this.container.querySelector("canvas")){var t=document.createElement("canvas");this.container.appendChild(t)}this.canvas=this.container.querySelector("canvas"),this.canvas.width=this.container.offsetWidth,this.canvas.height=this.container.offsetHeight,this.ctx=this.canvas.getContext("2d"),this.setLines()},t.prototype.animate=function(){this.status="animating",this.draw()},t.prototype.pause=function(){cancelAnimationFrame(this.frame),this.frame=null,this.status="pause"},t.prototype.setOptions=function(t){this.options=Object.assign(this.options,t),this.setLines(),this.reset(),"pause"===this.status&&this.draw()},t.prototype.reset=function(){this.init()},t.prototype.draw=function(){var t=this,i=this.canvas,o=this.ctx,e=this.getWaveHeight();o.clearRect(0,0,i.width,i.height),this.step+=this.options.velocity,this.lines.forEach((function(s,n){var a=(t.step+180*n/t.lines.length)*Math.PI/180,r=Math.sin(a)*t.options.smooth,c=Math.cos(a)*t.options.smooth,l=t.getVertexs(r,c);o.fillStyle=s.rgba,o.beginPath(),o.moveTo(l[0][0],l[0][1]),t.options.border.show&&(o.lineWidth=t.options.border.width,o.strokeStyle=t.options.border.color[n]?t.options.border.color[n]:s.hex),"left"===t.options.position||"right"===t.options.position?o.bezierCurveTo(e+r-t.options.smooth,i.height/2,e+c-t.options.smooth,i.width/2,l[1][0],l[1][1]):o.bezierCurveTo(i.width/2,e+r-t.options.smooth,i.width/2,e+c-t.options.smooth,l[1][0],l[1][1]),t.options.border.show&&o.stroke(),o.lineTo(l[2][0],l[2][1]),o.lineTo(l[3][0],l[3][1]),o.lineTo(l[0][0],l[0][1]),o.closePath(),o.fill()}));var s=this;"animating"===this.status&&(this.frame=requestAnimationFrame((function(){s.draw()})))},t.prototype.setLines=function(){this.lines=[];for(var t=0;t<this.options.number;t++){var i=this.options.colors[t%this.options.colors.length],o={hex:n(i),rgba:a(i,this.options.opacity)};this.lines.push(o)}},t.prototype.getVertexs=function(t,i){var o=this.canvas.height,e=this.canvas.width,s=this.getWaveHeight();switch(this.options.position){case"bottom":return[[0,s+t],[e,s+i],[e,o],[0,o]];case"top":return[[0,s+t],[e,s+i],[e,0],[0,0]];case"left":return[[s+t,0],[s+i,o],[0,o],[0,0]];case"right":return[[s+t,0],[s+i,o],[e,o],[e,0]]}},t.prototype.getWaveHeight=function(){if(this.options.height>1)switch(this.options.position){case"bottom":return this.canvas.height-this.options.height;case"top":case"left":return this.options.height;case"right":return this.canvas.width-this.options.height}else switch(this.options.position){case"bottom":return this.canvas.height*(1-this.options.height);case"top":return this.canvas.height*this.options.height;case"left":return this.canvas.width*this.options.height;case"right":return this.canvas.width*(1-this.options.height)}},t}(),c={name:"wave",data:()=>({animate:!0,wave:null,hide:!1,config:{number:3,smooth:50,velocity:1,height:80,colors:["#ff7657"],opacity:.5,position:"bottom",border:{show:!0,width:2,color:[null]}}}),watch:{config:{handler(){this.wave.setOptions(this.config),this.setCode()},deep:!0},animate(){this.animate?this.wave.animate():this.wave.pause()}},methods:{hideCode(){this.hide=!this.hide},delColors(){this.config.colors.splice(this.config.colors.length-1)},addColors(){this.config.colors.push("#ff7657")},delBorderColors(){this.config.border.color.splice(this.config.border.color.length-1)},addBorderColors(){this.config.border.color.push(null)},setCode(){let t=`const wave = new Wave('#wave', {\n${this.getConfigStr(this.config,1)}})`;setTimeout(()=>{this.$refs.configContainer.innerHTML=s.a.highlight(t,s.a.languages.javascript)})},getConfigStr(t,i){let o="",e="";for(let t=0;t<2*i;t++)e+=" ";for(let s in t)"[object Array]"===Object.prototype.toString.call(t[s])?o+=`${e}${s}: [${t[s].join(", ")}],\n`:"[object Object]"===Object.prototype.toString.call(t[s])?o+=`${e}${s}: {\n${this.getConfigStr(t[s],i+1)}${e}},\n`:o+=`${e}${s}: ${t[s]},\n`;return o}},mounted(){this.wave=new r(".wave",this.config),this.wave.animate(),this.setCode()}},l=(o(1692),o(9)),h=Object(l.a)(c,(function(){var t=this,i=t._self._c;return i("div",{staticClass:"wave-container"},[i("div",{staticClass:"wave"}),t._v(" "),i("div",{staticClass:"code-container"},[i("el-button",{staticClass:"hide-btn",attrs:{type:"primary",size:"mini"},on:{click:t.hideCode}},[t._v(t._s(t.hide?"show":"hide")+" code\n    ")]),t._v(" "),i("div",{staticClass:"language-css extra-class"},[i("pre",{directives:[{name:"show",rawName:"v-show",value:!t.hide,expression:"!hide"}],staticClass:"language-css"},[i("code",{ref:"configContainer"})])])],1),t._v(" "),i("div",{staticClass:"control"},[i("div",{staticClass:"control-item"},[i("label",[t._v("toggle")]),t._v(" "),i("el-switch",{attrs:{"active-text":"animate","inactive-text":"pause"},model:{value:t.animate,callback:function(i){t.animate=i},expression:"animate"}})],1),t._v(" "),i("div",{staticClass:"control-item"},[i("label",[t._v("number")]),t._v(" "),i("el-slider",{staticClass:"control-value",attrs:{min:0,max:10,"input-size":"mini","show-input":""},model:{value:t.config.number,callback:function(i){t.$set(t.config,"number",i)},expression:"config.number"}})],1),t._v(" "),i("div",{staticClass:"control-item"},[i("label",[t._v("smooth")]),t._v(" "),i("el-slider",{staticClass:"control-value",attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.config.smooth,callback:function(i){t.$set(t.config,"smooth",i)},expression:"config.smooth"}})],1),t._v(" "),i("div",{staticClass:"control-item"},[i("label",[t._v("velocity")]),t._v(" "),i("el-slider",{staticClass:"control-value",attrs:{min:1,max:10,"input-size":"mini","show-input":""},model:{value:t.config.velocity,callback:function(i){t.$set(t.config,"velocity",i)},expression:"config.velocity"}})],1),t._v(" "),i("div",{staticClass:"control-item"},[i("label",[t._v("height")]),t._v(" "),i("el-slider",{staticClass:"control-value",attrs:{min:80,max:300,"input-size":"mini",step:10,"show-input":""},model:{value:t.config.height,callback:function(i){t.$set(t.config,"height",i)},expression:"config.height"}})],1),t._v(" "),i("div",{staticClass:"control-item"},[i("label",[t._v("colors")]),t._v(" "),t._l(t.config.colors,(function(o,e){return i("el-color-picker",{key:e,model:{value:t.config.colors[e],callback:function(i){t.$set(t.config.colors,e,i)},expression:"config.colors[index]"}})})),t._v(" "),i("div",{staticClass:"btn-container"},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.config.colors.length>1,expression:"config.colors.length>1"}],staticClass:"btn",attrs:{plain:"",size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(i){return t.delColors(t.index)}}}),t._v(" "),i("el-button",{staticClass:"btn add-btn",attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-plus",circle:""},on:{click:t.addColors}})],1)],2),t._v(" "),i("div",{staticClass:"control-item"},[i("label",[t._v("border.show")]),t._v(" "),i("el-switch",{model:{value:t.config.border.show,callback:function(i){t.$set(t.config.border,"show",i)},expression:"config.border.show"}})],1),t._v(" "),i("div",[i("div",{staticClass:"control-item"},[i("label",[t._v("border.width")]),t._v(" "),i("el-slider",{staticClass:"control-value",attrs:{min:1,max:10,"input-size":"mini","show-input":""},model:{value:t.config.border.width,callback:function(i){t.$set(t.config.border,"width",i)},expression:"config.border.width"}})],1),t._v(" "),i("div",{staticClass:"control-item"},[i("label",[t._v("border.color")]),t._v(" "),t._l(t.config.border.color,(function(o,e){return i("el-color-picker",{key:e,model:{value:t.config.border.color[e],callback:function(i){t.$set(t.config.border.color,e,i)},expression:"config.border.color[index]"}})})),t._v(" "),i("div",{staticClass:"btn-container"},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.config.border.color.length>0,expression:"config.border.color.length>0"}],staticClass:"btn",attrs:{plain:"",size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(i){return t.delBorderColors(t.index)}}}),t._v(" "),i("el-button",{staticClass:"btn add-btn",attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-plus",circle:""},on:{click:t.addBorderColors}})],1)],2)]),t._v(" "),i("div",{staticClass:"control-item"},[i("label",[t._v("opacity")]),t._v(" "),i("el-slider",{staticClass:"control-value",attrs:{min:.1,max:1,"input-size":"mini",step:.1,"show-input":""},model:{value:t.config.opacity,callback:function(i){t.$set(t.config,"opacity",i)},expression:"config.opacity"}})],1),t._v(" "),i("div",{staticClass:"control-item"},[i("label",[t._v("position")]),t._v(" "),i("el-radio",{attrs:{label:"bottom"},model:{value:t.config.position,callback:function(i){t.$set(t.config,"position",i)},expression:"config.position"}},[t._v("bottom\n      ")]),t._v(" "),i("el-radio",{attrs:{label:"top"},model:{value:t.config.position,callback:function(i){t.$set(t.config,"position",i)},expression:"config.position"}},[t._v("top\n      ")]),t._v(" "),i("el-radio",{attrs:{label:"left"},model:{value:t.config.position,callback:function(i){t.$set(t.config,"position",i)},expression:"config.position"}},[t._v("left\n      ")]),t._v(" "),i("el-radio",{attrs:{label:"right"},model:{value:t.config.position,callback:function(i){t.$set(t.config,"position",i)},expression:"config.position"}},[t._v("right\n      ")])],1)])])}),[],!1,null,"517183bb",null);i.default=h.exports},808:function(t,i,o){}}]);