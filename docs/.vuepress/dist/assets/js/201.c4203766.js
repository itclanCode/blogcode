(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1803:function(e,t,l){"use strict";l(881)},2019:function(e,t,l){"use strict";l.r(t);var n={name:"cloneNodeElem",data:()=>({handleClone(){let e=document.querySelector(".myImg");if(e){var t=e.cloneNode(!0);t.children[1].addEventListener("click",e=>{console.log(e);let t=e.currentTarget.parentElement;t.parentElement.removeChild(t)}),document.querySelector(".img-content").appendChild(t)}else alert("元素节点不存在,无法克隆新元素,请刷新页面,然后对原有的元素进行克隆"),location.reload()},handleDelete(e){console.log(e);let t=e.currentTarget.parentElement;console.log(t);let l=t.parentElement;console.log(l),l.removeChild(t)}})},i=(l(1803),l(9)),a=Object(i.a)(n,(function(){var e=this._self._c;return e("div",{staticClass:"wrap"},[e("div",[e("el-button",{attrs:{type:"primary"},on:{click:this.handleClone}},[this._v("克隆")])],1),this._v(" "),e("div",{staticClass:"img-content"},[e("div",{staticClass:"myImg"},[e("img",{staticClass:"img",attrs:{src:"https://img1.baidu.com/it/u=829829583,2565413602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=661",width:"150",height:"100",alt:""}}),this._v(" "),e("img",{staticClass:"closeimg",attrs:{src:"https://img0.baidu.com/it/u=3387898836,1597995708&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666026000&t=e8de3885ef1563b4f8806bc4fcc3507b",width:"25",height:"25",alt:""},on:{click:this.handleDelete}})])])])}),[],!1,null,"059dbe5f",null);t.default=a.exports},881:function(e,t,l){}}]);