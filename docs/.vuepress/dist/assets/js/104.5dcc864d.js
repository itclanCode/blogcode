(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1657:function(e,t,l){"use strict";l(779)},1878:function(e,t,l){"use strict";l.r(t);l(48);const i=[{label:"所在省份",prop:"Province",width:"auto",size:"medium",align:"center",showOverflowTooltip:!1},{label:"地级城市",prop:"City",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0},{label:"县级市/区",prop:"District",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0},{label:"地止",prop:"Address",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0},{label:"邮编",prop:"PostNumber",width:"auto",size:"medium",align:"center",showOverflowTooltip:!0}];var a={name:"cityjilianSelect",data:()=>({pidVal:"",cidVal:"",didVal:"",inputVal:"",isBtnDisabled:!1,isResultNull:!1,page:1,pagesize:5,totalcount:null,totalpage:null,tableColist:i,pidOptions:[],cidOptions:[],didOptions:[],result:[],citySelectData:[],tableData:[]}),mounted(){this.getPidCidDid()},methods:{async getPidCidDid(){console.log(!1,"development"),this.url="https://v.juhe.cn";let e=await this.$axios.get(this.url+"/postcode/pcd",{params:{key:"db2983aef2b29eca4837783fc1c58211"}});if(console.log(e,"res"),200==e.status&&0==e.data.error_code){const t=e.data.result;this.result=t,t.forEach(e=>{this.pidOptions.push({label:e.province,value:e.id})})}else this.isResultNull=!0,this.$message.error("今日接口调用已上限,请明天再来吧")},async handleBtnFind(){if(this.isBtnDisabled=!0,this.pidVal&&this.cidVal){let e=!1;console.log(e,"development"),this.url=e?"/postmenfindapi":"https://v.juhe.cn";const t={key:"db2983aef2b29eca4837783fc1c58211",pid:this.pidVal,cid:this.cidVal,did:this.didVal,q:this.inputVal,page:this.page,pagesize:this.pagesize};let l=await this.$axios.get(this.url+"/postcode/search",{params:t});if(console.log(l,"res"),200==l.status&&0==l.data.error_code){this.isBtnDisabled=!1;const e=l.data.result,{currentpage:t,list:i,totalcount:a,totalpage:s}=e;this.page=t,this.tableData=i,this.totalcount=a,this.totalpage=s}else this.isResultNull=!0,this.$message.error("今日接口数据查询已上限,请明日来查询")}else this.$message.error("省份和城市不能为空")},handleBtnReset(){this.isBtnDisabled=!1,this.inputVal="",this.tableData=[]},handlePidSelct(e){console.log(e),this.pidVal=e,this.cidVal="",this.didVal="";let t=this.result.filter(t=>t.id==e);console.log("第一层从31个省中帅选对应匹配的数据",t);let l=t[0].city;console.log(l),this.cidOptions=l.map(e=>({label:e.city,value:e.id})),console.log("城市列表数据-第二级",this.cidOptions),this.citySelectData=l},handleCidSelect(e){console.log(e),this.cidVal=e,this.didVal="";let t=this.citySelectData.filter(t=>t.id==e);console.log(t),this.didOptions=t[0].district.map(e=>({label:e.district,value:e.id})),console.log("区域数据-第三级",this.didOptions)},handleSizeChange(e){console.log(e),this.pagesize=e,this.handleBtnFind()},handleCurrentChange(e){this.page=e,this.handleBtnFind()},handleJinQueFind(e){window.open(e,"_blank")}}},s=(l(1657),l(9)),n=Object(s.a)(a,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"postmen-wrap"},[t("div",{staticClass:"postmen-select"},[t("el-select",{staticClass:"el-select",attrs:{clearable:"",placeholder:"请选择省份",size:"small"},on:{change:e.handlePidSelct},model:{value:e.pidVal,callback:function(t){e.pidVal=t},expression:"pidVal"}},e._l(e.pidOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),t("el-select",{staticClass:"el-select",attrs:{clearable:"",placeholder:"请选择城市",size:"small"},on:{change:e.handleCidSelect},model:{value:e.cidVal,callback:function(t){e.cidVal=t},expression:"cidVal"}},e._l(e.cidOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),t("el-select",{staticClass:"el-select",attrs:{clearable:"",placeholder:"请选择区域",size:"small"},model:{value:e.didVal,callback:function(t){e.didVal=t},expression:"didVal"}},e._l(e.didOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),t("el-input",{staticClass:"el-input",attrs:{size:"small",clearable:"",placeholder:"请输入地名"},model:{value:e.inputVal,callback:function(t){e.inputVal=t},expression:"inputVal"}},[t("el-button",{attrs:{slot:"append",size:"small",icon:"el-icon-search",disabled:e.isBtnDisabled},on:{click:e.handleBtnFind},slot:"append"},[e._v("查询")])],1),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-setting"},on:{click:e.handleBtnReset}},[e._v("重置")])],1),e._v(" "),0!=e.tableData.length?t("div",{staticClass:"postmen-table-content"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},e._l(e.tableColist,(function(e){return t("el-table-column",{key:e.label,attrs:{prop:e.prop,label:e.label,width:e.width,align:e.align,medium:e.medium}})})),1),e._v(" "),0!=e.tableData.length?t("el-pagination",{staticClass:"el-pagination",attrs:{"current-page":e.page,"page-sizes":[5,10,20,30,40,50],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalcount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1):e._e(),e._v(" "),1==e.isResultNull?t("el-empty",{attrs:{description:"暂无数据,今日接口数据查询已上限,请明日来查询"}},[t("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleJinQueFind("https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720")}}},[e._v("更精确姻缘测试查询")])],1):e._e()],1)])}),[],!1,null,"7e3185ba",null);t.default=n.exports},779:function(e,t,l){}}]);