(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1323:function(t,a,e){"use strict";e(636)},1504:function(t,a,e){"use strict";e.r(a);var n={name:"inputPassword",data:()=>({type:"password",inputVal:"123456",onOff:!0}),methods:{switchPass(){this.onOff?this.type="password":this.type="text",this.onOff=!this.onOff}}},i=(e(1323),e(9)),s=Object(i.a)(n,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrap"},["checkbox"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{name:"pass",type:"checkbox"},domProps:{checked:Array.isArray(t.inputVal)?t._i(t.inputVal,null)>-1:t.inputVal},on:{change:function(a){var e=t.inputVal,n=a.target,i=!!n.checked;if(Array.isArray(e)){var s=t._i(e,null);n.checked?s<0&&(t.inputVal=e.concat([null])):s>-1&&(t.inputVal=e.slice(0,s).concat(e.slice(s+1)))}else t.inputVal=i}}}):"radio"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{name:"pass",type:"radio"},domProps:{checked:t._q(t.inputVal,null)},on:{change:function(a){t.inputVal=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{name:"pass",type:t.type},domProps:{value:t.inputVal},on:{input:function(a){a.target.composing||(t.inputVal=a.target.value)}}}),t._v(" "),a("button",{on:{click:t.switchPass}},[t._v(t._s("password"===t.type?"隐藏密码":"显示密码"))])])}),[],!1,null,"0c535a6d",null);a.default=s.exports},636:function(t,a,e){}}]);