(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1344:function(e,a,l){"use strict";l(662)},1521:function(e,a,l){"use strict";l.r(a);var t={name:"hideInputParams",data:()=>({formParams:{id:"我是隐藏携带的参数",name:"",year:"",options:[{label:"2022",value:"2022"},{label:"2021",value:"2021"},{label:"2020",value:"2020"},{label:"2019",value:"2019"},{label:"2018",value:"2018"},{label:"2017",value:"2017"},{label:"2016",value:"2016"}]}}),methods:{handleSelect(e){console.log(e),this.formParams.year=e},onSubmit(){console.log("submit!");const{id:e,name:a,year:l}=this.formParams;a&&l?this.$alert(`id:${e},名字:${a},年份:${l}`,"提交的数据",{confirmButtonText:"确定",callback:e=>{this.$message({type:"info",message:"action: "+e})}}):this.$message.error("名字或年份不能为空")}}},r=(l(1344),l(9)),o=Object(r.a)(t,(function(){var e=this,a=e._self._c;return a("div",{staticClass:"wrap"},[a("el-form",{attrs:{inline:!0,model:e.formParams}},[a("el-form-item",[a("el-input",{attrs:{type:"hidden"},model:{value:e.formParams.id,callback:function(a){e.$set(e.formParams,"id",a)},expression:"formParams.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.formParams.name,callback:function(a){e.$set(e.formParams,"name",a)},expression:"formParams.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"年份"}},[a("el-select",{attrs:{placeholder:"请选择年份"},on:{change:e.handleSelect},model:{value:e.formParams.year,callback:function(a){e.$set(e.formParams,"year",a)},expression:"formParams.year"}},e._l(e.formParams.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")])],1)],1)],1)}),[],!1,null,"1710eeb0",null);a.default=o.exports},662:function(e,a,l){}}]);