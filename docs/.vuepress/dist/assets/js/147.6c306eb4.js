(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1651:function(e,t,n){"use strict";n(947)},1825:function(e,t,n){"use strict";n.r(t);var d={name:"deleteElem",methods:{handleAddElem:function(){var e=document.createElement("span");e.setAttribute("id","del"),e.appendChild(document.createTextNode("新创建出来DOM,后又会被删除")),document.getElementById("p2").appendChild(e)},handleDeleteElem:function(){var e=document.getElementById("del");e.parentNode.removeChild(e)}}},l=(n(1651),n(12)),i=Object(l.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"wrap"},[t("p",[t("el-button",{attrs:{type:"primary"},on:{click:this.handleAddElem}},[this._v("添加元素")]),this._v(" "),t("el-button",{attrs:{type:"danger"},on:{click:this.handleDeleteElem}},[this._v("删除元素")])],1)]),this._v(" "),t("p",{attrs:{id:"p2"}})])}),[],!1,null,"40f2088b",null);t.default=i.exports},947:function(e,t,n){}}]);