(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1346:function(t,n,s){"use strict";s(657)},1529:function(t,n,s){"use strict";s.r(n);s(46);var e={name:"arrPushPop",data:()=>({input:"",lists:[{name:"itclanCoder",url:"https://coder.itclan.cn"},{name:"客来影视TV",url:"https://video.itclan.cn"},{name:"短链接生成",url:"https://short.itclan.cn"},{name:"IT资源导航",url:"https://nav.itclan.cn"}]}),methods:{handleAdd(){this.input?(this.lists.push({name:this.input}),this.input=""):this.$message.error("输入框内容不能为空")},handleDelete(){this.lists.pop()}}},a=(s(1346),s(9)),i=Object(a.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"content"},[n("el-input",{staticClass:"input-with",attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(n){t.input=n},expression:"input"}}),t._v(" "),n("el-button",{attrs:{slot:"append"},on:{click:t.handleAdd},slot:"append"},[t._v("添加")]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:t.handleDelete}},[t._v("删除")])],1),t._v(" "),n("div",[n("ul",t._l(t.lists,(function(s,e){return n("li",{key:e},[n("a",{attrs:{href:s.url||"https://itclan.cn"}},[t._v(t._s(s.name))])])})),0)])])}),[],!1,null,"6a0840b0",null);n.default=i.exports},657:function(t,n,s){}}]);