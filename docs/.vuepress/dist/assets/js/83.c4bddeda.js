(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1095:function(e,a,c){"use strict";c(526)},1437:function(e,a,c){"use strict";c.r(a);var o={name:"checkbox",data:()=>({formParams:{isIndeterminate:!1,checkAll:!0,checkeddotNames:[],code:""},dot_info:[{code:"1",name:"画报点击"},{code:"2",name:"画报展现"},{code:"3",name:"设置壁纸"},{code:"4",name:"设置H5"},{code:"5",name:"视频播放"}]}),computed:{checkOptionsData(){return this.dot_info}},mounted(){this.formParams.checkeddotNames=this.dot_info.map(e=>e.code)},methods:{handleCheckAllChange(){this.formParams.checkAll?this.formParams.checkeddotNames=this.dot_info.map(e=>e.code):(this.formParams.checkeddotNames=[],this.formParams.code=""),this.isIndeterminate=!1},handleCheckeddotNamesChange(e){console.log(e),this.formParams.checkeddotNames.length==this.dot_info.length?this.formParams.checkAll=!0:this.formParams.checkAll=!1,this.formParams.code=this.formParams.checkeddotNames.join(",")}}},t=(c(1095),c(9)),s=Object(t.a)(o,(function(){var e=this,a=e._self._c;return a("div",{staticClass:"el-checkbox-wrap"},[a("div",{staticClass:"select-all"},[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.formParams.checkAll,callback:function(a){e.$set(e.formParams,"checkAll",a)},expression:"formParams.checkAll"}},[e._v("全选\n        ")])],1),e._v(" "),a("div",[a("el-checkbox-group",{on:{change:e.handleCheckeddotNamesChange},model:{value:e.formParams.checkeddotNames,callback:function(a){e.$set(e.formParams,"checkeddotNames",a)},expression:"formParams.checkeddotNames"}},e._l(e.checkOptionsData,(function(c){return a("el-checkbox",{key:c.code,attrs:{label:c.code}},[e._v("\n            "+e._s(c.name)+"\n          ")])})),1)],1)])}),[],!1,null,"5fe5d086",null);a.default=s.exports},526:function(e,a,c){}}]);