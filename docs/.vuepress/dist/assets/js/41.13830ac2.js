(window.webpackJsonp=window.webpackJsonp||[]).push([[41,95],{1001:function(e,t,a){"use strict";a.r(t);a(173);var o={name:"tableComp",props:{tableColist:[],tableData:[],pageSize:{type:Number,default:10},pageNo:{type:Number,default:1},total:[Number]},data:function(){return{pageSizeList:[10,25,40,50],onlineStatusEnum:{1:"待发布",2:"待上线",3:"已上线",100:"已结束"},levelEnum:{p0:"P0（紧急项目）",p1:"P1（日常项目）",p2:"P2（兜底项目）"}}},methods:{handleEdit:function(e,t){this.$emit("edit",e,t)},handleOnline:function(e,t){this.$emit("online",e,t)},handleOffline:function(e,t){this.$emit("offline",e,t)},handleLook:function(e,t){this.$emit("look",e,t)},handleCopy:function(){this.$emit("copy")},handleSizeChange:function(e){console.log(e),this.$emit("pageSizeChange",e)},handleCurrentChange:function(e){console.log("跳转当当前页",e),this.$emit("pageCurrentChange",e)},labelHead:function(e,t){var a=t.column,o=a.label.length;return a.minWidth=16*o,e("div",{class:"table-head",style:{width:"100%"}},[a.label])}}},n=(a(734),a(12)),i=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-wrap"},[a("div",{staticClass:"table-container"},[a("el-table",{attrs:{data:e.tableData,resizable:"",border:"",height:"100%","row-key":"id"}},[e._l(e.tableColist,(function(t,o){return a("el-table-column",{key:o,attrs:{prop:t.prop,label:t.label,size:t.medium,align:t.align,width:t.width,showOverflowTooltip:t.showOverflowTooltip,"scoped-slot":e.labelHead,"class-name":t.dropHandle?"drop_handle":""},scopedSlots:e._u([{key:"default",fn:function(o){return["status"===t.prop?a("p",[e._v("\n            "+e._s(e.onlineStatusEnum[o.row[t.prop]])+"\n          ")]):"pid_names"===t.prop?a("p",[e._v("\n            "+e._s(o.row[t.prop])+"\n          ")]):"level"===t.prop?a("p",[e._v("\n            "+e._s(e.levelEnum[o.row[t.prop]])+"\n          ")]):"pv_max"==t.prop?a("p",[e._v("\n            "+e._s(o.row[t.prop])+"万\n          ")]):"areas"==t.prop?a("p",[e._v("\n            "+e._s(""==o.row[t.prop]?"全部":o.row[t.prop])+"\n          ")]):a("p",[e._v(e._s(o.row[t.prop]))])]}}],null,!0)})})),e._v(" "),a("el-table-column",{attrs:{label:"管理","min-width":"290",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[100==t.row.status?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleLook(t.row,t.$index)}}},[e._v("查看")]):e._e(),e._v(" "),a("el-button",{attrs:{disabled:100===t.row.status,type:"primary",size:"mini"},on:{click:function(a){return e.handleEdit(t.row,t.$index)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{disabled:1!=t.row.status,size:"mini",type:"success"},on:{click:function(a){return e.handleOnline(t.row,t.$index)}}},[e._v("上线")]),e._v(" "),a("el-button",{attrs:{disabled:3!=t.row.status,size:"mini",type:"danger"},on:{click:function(a){return e.handleOffline(t.row,t.$index)}}},[e._v("下线")])]}}])})],2)],1),e._v(" "),a("div",{staticClass:"pagination-container"},[0!=e.tableData.length?a("el-pagination",{attrs:{"current-page":e.pageNo,"page-sizes":e.pageSizeList,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)])}),[],!1,null,"6602b997",null);t.default=i.exports},1414:function(e,t,a){"use strict";a(830)},1717:function(e,t,a){"use strict";a.r(t);a(393),a(62),a(386);var o=[{label:"ID",prop:"id",width:"auto",size:"medium",align:"center",showOverflowTooltip:!1,dropHandle:!0},{label:"投放模板",prop:"tname",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"项目名称",prop:"name",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"项目描述",prop:"reco_key",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"上线状态",prop:"status",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"投放渠道",prop:"pid_names",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"投放地区",prop:"areas",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"项目优先级",prop:"level",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"投放流量",prop:"pv_max",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"上线时间",prop:"start_time",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"下线时间",prop:"end_time",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"操作时间",prop:"update_time",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"操作人",prop:"update_user",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0}],n=a(1001),i=a(828),l={components:{tableComp:n.default},name:"tableRowDraw",data:function(){return{tableColist:o,pageNo:1,pageSize:10,total:"50",tableData:[],isDialogModel:!1,popModelContent:""}},created:function(){},mounted:function(){var e=this;this.mockTableData(),this.$nextTick((function(){e.dropRow((function(t,a){var o=e.tableData.splice(t,1)[0];e.tableData.splice(a,0,o)}))}))},methods:{dropRow:function(e){var t=document.querySelector(".el-table__body-wrapper tbody");t&&i.default.create(t,{animation:300,delay:0,handle:".drop_handle",onEnd:e})},mathRandom:function(e){return e[Math.floor(Math.random()*e.length)]},startTime:function(){return"".concat((new Date).getFullYear(),"-").concat((new Date).getMonth()<10?0+(new Date).getMonth()+1:(new Date).getMonth()+1,"-").concat((new Date).getDate()<10?0+(new Date).getDate():(new Date).getDate())},endTime:function(){return"".concat((new Date).getFullYear(),"-").concat((new Date).getMonth()<10?0+(new Date).getMonth()+1:(new Date).getMonth()+1,"-").concat((new Date).getDate()<10?0+(new Date).getDate():(new Date).getDate())},mockTableData:function(){for(var e=["单图单链接","多图N链接","H5_iframe","视频模板"],t=["1","2","3","100"],a=["浏览器","安全卫士","全部"],o=["北京","上海","广州","深圳","福建","杭州"],n=["p0","p1","p2"],i=["张三","李四","王五","小河"],l=0;l<=50;l++)this.tableData.push({id:l,tname:"".concat(this.mathRandom(e)),name:"xxx1项目",reco_key:"项目描述....",status:"".concat(this.mathRandom(t)),pid_names:"".concat(this.mathRandom(a)),areas:"".concat(this.mathRandom(o)),level:"".concat(this.mathRandom(n)),pv_max:Math.floor(1e4*Math.random()),start_time:this.startTime(),end_time:this.endTime(),update_time:this.startTime(),update_user:this.mathRandom(i)})},handleEdit:function(e){this.$message({message:"编辑项目",type:"success"})},handleOnline:function(e){var t=(new Date).getTime(),a=new Date(e.end_time).valueOf();console.log(t,a),t>a?this.$message({message:"上线时间已过期，请重新编辑时间",type:"warning"}):(this.isDialogModel=!0,console.log(e.id,e.status),this.status=e.status,console.log(this.status),this.id=e.id,console.log("上线"),this.popModelContent="确定要上线当前项目,定时投放?")},handleOffline:function(e){this.isDialogModel=!0,this.popModelContent="确定要下线当前项目,停止投放?",this.status=e.status,console.log("下线")},handleSubmit:function(){if(1==this.status){var e={};e.id=this.id,e.status=2,this.isDialogModel=!1}else if(3==this.status){var t={};t.id=this.id,t.status=100,this.isDialogModel=!1,this.isDialogModel=!1}},handleLook:function(e){this.$message({message:"查看项目",type:"success"})},handleCopy:function(){console.log("复制")},pageCurrentChange:function(e){this.pageNo=e,console.log("跳转页,currentPage 当前页改变时会触发")},pageSizeChange:function(e){this.pageSize=e,console.log("跳转页,currentPage 当前页改变时会触发")}}},s=(a(1414),a(12)),r=Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"table-content"},[a("tableComp",{attrs:{pageSize:e.pageSize,pageNo:e.pageNo,total:1*e.total,tableData:e.tableData.slice((e.pageNo-1)*e.pageSize,e.pageNo*e.pageSize),"table-colist":e.tableColist},on:{look:e.handleLook,copy:e.handleCopy,edit:e.handleEdit,online:e.handleOnline,offline:e.handleOffline,pageCurrentChange:e.pageCurrentChange,pageSizeChange:e.pageSizeChange}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.isDialogModel,width:"30%",center:"","custom-class":"dialog-model"},on:{"update:visible":function(t){e.isDialogModel=t}}},[a("p",{staticClass:"dalog-content"},[e._v(e._s(e.popModelContent))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.isDialogModel=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确 定")])],1)])],1)}),[],!1,null,"5405da06",null);t.default=r.exports},697:function(e,t,a){},734:function(e,t,a){"use strict";a(697)},830:function(e,t,a){}}]);