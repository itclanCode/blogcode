(window.webpackJsonp=window.webpackJsonp||[]).push([[44,121],{1680:function(e,t,a){"use strict";a(800)},1879:function(e,t,a){"use strict";a.r(t);a(48);const o=[{label:"ID",prop:"id",width:"auto",size:"medium",align:"center",showOverflowTooltip:!1,dropHandle:!0},{label:"投放模板",prop:"tname",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"项目名称",prop:"name",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"项目描述",prop:"reco_key",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"上线状态",prop:"status",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"投放渠道",prop:"pid_names",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"投放地区",prop:"areas",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"项目优先级",prop:"level",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"投放流量",prop:"pv_max",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"上线时间",prop:"start_time",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"下线时间",prop:"end_time",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"操作时间",prop:"update_time",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0},{label:"操作人",prop:"update_user",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0,dropHandle:!0}];var l=a(945),n=a(794),i={components:{tableComp:l.default},name:"tableRowDraw",data:()=>({tableColist:o,pageNo:1,pageSize:10,total:"50",tableData:[],isDialogModel:!1,popModelContent:""}),created(){},mounted(){this.mockTableData(),this.$nextTick(()=>{this.dropRow((e,t)=>{const a=this.tableData.splice(e,1)[0];this.tableData.splice(t,0,a)})})},methods:{dropRow(e){const t=document.querySelector(".el-table__body-wrapper tbody");t&&n.default.create(t,{animation:300,delay:0,handle:".drop_handle",onEnd:e})},mathRandom:e=>e[Math.floor(Math.random()*e.length)],startTime:()=>`${(new Date).getFullYear()}-${(new Date).getMonth()<10?0+(new Date).getMonth()+1:(new Date).getMonth()+1}-${(new Date).getDate()<10?0+(new Date).getDate():(new Date).getDate()}`,endTime:()=>`${(new Date).getFullYear()}-${(new Date).getMonth()<10?0+(new Date).getMonth()+1:(new Date).getMonth()+1}-${(new Date).getDate()<10?0+(new Date).getDate():(new Date).getDate()}`,mockTableData(){const e=["单图单链接","多图N链接","H5_iframe","视频模板"],t=["1","2","3","100"],a=["浏览器","安全卫士","全部"],o=["北京","上海","广州","深圳","福建","杭州"],l=["p0","p1","p2"],n=["张三","李四","王五","小河"];for(let i=0;i<=50;i++)this.tableData.push({id:i,tname:""+this.mathRandom(e),name:"xxx1项目",reco_key:"项目描述....",status:""+this.mathRandom(t),pid_names:""+this.mathRandom(a),areas:""+this.mathRandom(o),level:""+this.mathRandom(l),pv_max:Math.floor(1e4*Math.random()),start_time:this.startTime(),end_time:this.endTime(),update_time:this.startTime(),update_user:this.mathRandom(n)})},handleEdit(e){this.$message({message:"编辑项目",type:"success"})},handleOnline(e){const t=(new Date).getTime(),a=new Date(e.end_time).valueOf();console.log(t,a),t>a?this.$message({message:"上线时间已过期，请重新编辑时间",type:"warning"}):(this.isDialogModel=!0,console.log(e.id,e.status),this.status=e.status,console.log(this.status),this.id=e.id,console.log("上线"),this.popModelContent="确定要上线当前项目,定时投放?")},handleOffline(e){this.isDialogModel=!0,this.popModelContent="确定要下线当前项目,停止投放?",this.status=e.status,console.log("下线")},handleSubmit(){if(1==this.status){const e={};e.id=this.id,e.status=2,this.isDialogModel=!1}else if(3==this.status){const e={};e.id=this.id,e.status=100,this.isDialogModel=!1,this.isDialogModel=!1}},handleLook(e){this.$message({message:"查看项目",type:"success"})},handleCopy(){console.log("复制")},pageCurrentChange(e){this.pageNo=e,console.log("跳转页,currentPage 当前页改变时会触发")},pageSizeChange(e){this.pageSize=e,console.log("跳转页,currentPage 当前页改变时会触发")}}},s=(a(1680),a(9)),r=Object(s.a)(i,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"table-content"},[t("tableComp",{attrs:{pageSize:e.pageSize,pageNo:e.pageNo,total:1*e.total,tableData:e.tableData.slice((e.pageNo-1)*e.pageSize,e.pageNo*e.pageSize),"table-colist":e.tableColist},on:{look:e.handleLook,copy:e.handleCopy,edit:e.handleEdit,online:e.handleOnline,offline:e.handleOffline,pageCurrentChange:e.pageCurrentChange,pageSizeChange:e.pageSizeChange}})],1),e._v(" "),t("el-dialog",{attrs:{visible:e.isDialogModel,width:"30%",center:"","custom-class":"dialog-model"},on:{"update:visible":function(t){e.isDialogModel=t}}},[t("p",{staticClass:"dalog-content"},[e._v(e._s(e.popModelContent))]),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.isDialogModel=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确 定")])],1)])],1)}),[],!1,null,"5405da06",null);t.default=r.exports},503:function(e,t,a){},598:function(e,t,a){"use strict";a(503)},800:function(e,t,a){},945:function(e,t,a){"use strict";a.r(t);var o={name:"tableComp",props:{tableColist:[],tableData:[],pageSize:{type:Number,default:10},pageNo:{type:Number,default:1},total:[Number]},data:()=>({pageSizeList:[10,25,40,50],onlineStatusEnum:{1:"待发布",2:"待上线",3:"已上线",100:"已结束"},levelEnum:{p0:"P0（紧急项目）",p1:"P1（日常项目）",p2:"P2（兜底项目）"}}),methods:{handleEdit(e,t){this.$emit("edit",e,t)},handleOnline(e,t){this.$emit("online",e,t)},handleOffline(e,t){this.$emit("offline",e,t)},handleLook(e,t){this.$emit("look",e,t)},handleCopy(){this.$emit("copy")},handleSizeChange(e){console.log(e),this.$emit("pageSizeChange",e)},handleCurrentChange(e){console.log("跳转当当前页",e),this.$emit("pageCurrentChange",e)},labelHead(e,{column:t}){let a=t.label.length;return t.minWidth=16*a,e("div",{class:"table-head",style:{width:"100%"}},[t.label])}}},l=(a(598),a(9)),n=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-wrap"},[t("div",{staticClass:"table-container"},[t("el-table",{attrs:{data:e.tableData,resizable:"",border:"",height:"100%","row-key":"id"}},[e._l(e.tableColist,(function(a,o){return t("el-table-column",{key:o,attrs:{prop:a.prop,label:a.label,size:a.medium,align:a.align,width:a.width,showOverflowTooltip:a.showOverflowTooltip,"scoped-slot":e.labelHead,"class-name":a.dropHandle?"drop_handle":""},scopedSlots:e._u([{key:"default",fn:function(o){return["status"===a.prop?t("p",[e._v("\n            "+e._s(e.onlineStatusEnum[o.row[a.prop]])+"\n          ")]):"pid_names"===a.prop?t("p",[e._v("\n            "+e._s(o.row[a.prop])+"\n          ")]):"level"===a.prop?t("p",[e._v("\n            "+e._s(e.levelEnum[o.row[a.prop]])+"\n          ")]):"pv_max"==a.prop?t("p",[e._v("\n            "+e._s(o.row[a.prop])+"万\n          ")]):"areas"==a.prop?t("p",[e._v("\n            "+e._s(""==o.row[a.prop]?"全部":o.row[a.prop])+"\n          ")]):t("p",[e._v(e._s(o.row[a.prop]))])]}}],null,!0)})})),e._v(" "),t("el-table-column",{attrs:{label:"管理","min-width":"290",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[100==a.row.status?t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleLook(a.row,a.$index)}}},[e._v("查看")]):e._e(),e._v(" "),t("el-button",{attrs:{disabled:100===a.row.status,type:"primary",size:"mini"},on:{click:function(t){return e.handleEdit(a.row,a.$index)}}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{disabled:1!=a.row.status,size:"mini",type:"success"},on:{click:function(t){return e.handleOnline(a.row,a.$index)}}},[e._v("上线")]),e._v(" "),t("el-button",{attrs:{disabled:3!=a.row.status,size:"mini",type:"danger"},on:{click:function(t){return e.handleOffline(a.row,a.$index)}}},[e._v("下线")])]}}])})],2)],1),e._v(" "),t("div",{staticClass:"pagination-container"},[0!=e.tableData.length?t("el-pagination",{attrs:{"current-page":e.pageNo,"page-sizes":e.pageSizeList,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)])}),[],!1,null,"6602b997",null);t.default=n.exports}}]);