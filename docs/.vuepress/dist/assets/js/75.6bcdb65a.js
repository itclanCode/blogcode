(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{440:function(e,a){e.exports={shenchenhelpjuhekey:"0b999a3c2771bc48c6391568f0eef88a",zhougongjiemengjuhekey:"f505777750bc812eac3ad08e9586a33e",staryunshijuhekey:"da3cf4743ecbe7f9e287dc5df72f5294",starfindjuhekey:"456f646f7886f118dc2026bc30c91177",starpeiduijuhekey:"1f86faf3d6076a98eddd5ac46ac09890",shengxiaofindjuhekey:"c0a114560bc36d69824bebda9873127d",shenxiaopeiduijuhekey:"3a836f38818202006e8eeadcf9b91019"}},508:function(e,a,s){},605:function(e,a,s){"use strict";s(508)},947:function(e,a,s){"use strict";s.r(a);s(48);var t=s(440),n=s.n(t),l={name:"shenchenHelp",data:()=>({isBtnDisabled:!1,isResultNull:!1,url:"",yearVal:(new Date).getFullYear(),monthVal:(new Date).getMonth()+1,dayVal:(new Date).getDate(),hourVal:(new Date).getHours(),yearOptions:[],monthOptions:[],dayOptions:[],hourOptions:[],shenchenParams:{Animal:"",IDayCn:"",ImonthCn:"",astro:"",cDay:"",cMonth:"",cYear:"",eightAll:{eight:[],shu:null},fiveAll:{five:[],lose:null},gzDay:"",gzMonth:"",gzYear:"",month:"",ncWeek:"",year:"",isTerm:!1,isLeap:!1,Term:!1}}),mounted(){this.addYear(),this.addMounth(),this.addDay(),this.addHour()},methods:{addYear(){for(let e=1900;e<=2050;e++)this.yearOptions.push({value:e,label:e+"年"})},addMounth(){for(let e=1;e<=12;e++)this.monthOptions.push({value:e,label:e+"月"})},addDay(){for(let e=1;e<=31;e++)this.dayOptions.push({value:e,label:e+"日"})},addHour(){for(let e=0;e<=23;e++)this.hourOptions.push({value:e,label:e+"点"})},async handleBtnSearch(){this.isBtnDisabled=!0;let e=n.a.shenchenhelpjuhekey;console.log(!1,"development"),this.url="https://apis.juhe.cn";const a={key:e,year:this.yearVal,month:this.monthVal,day:this.dayVal,hour:this.hourVal},s=await this.$axios.get(this.url+"/birthEight/query",{params:a});if(console.log(s,"response"),200==s.status&&0==s.data.error_code){this.isBtnDisabled=!1,this.$message.success("生辰数据查询成功");const e=s.data.result,{Animal:a,IDayCn:t,ImonthCn:n,astro:l,cDay:h,cMonth:i,cYear:r,eightAll:o,fiveAll:c,gzDay:u,gzMonth:m,gzYear:d,month:p,ncWeek:v,year:_,isTerm:b,isLeap:y,Term:g}=e;this.shenchenParams.Animal=a,this.shenchenParams.IDayCn=t,this.shenchenParams.ImonthCn=n,this.shenchenParams.astro=l,this.shenchenParams.cDay=h,this.shenchenParams.cMonth=i,this.shenchenParams.cMonth=i,this.shenchenParams.cYear=r,this.shenchenParams.eightAll=o,this.shenchenParams.fiveAll=c,this.shenchenParams.gzDay=u,this.shenchenParams.gzMonth=m,this.shenchenParams.gzYear=d,this.shenchenParams.month=p,this.shenchenParams.ncWeek=v,this.shenchenParams.year=_,this.shenchenParams.isTerm=b,this.shenchenParams.isLeap=y,this.shenchenParams.Term=g}else this.isResultNull=!0,this.$message.error("暂无查询数据,接口调用已上线,明天再来吧")},handleBtnReset(){this.yearVal=(new Date).getFullYear(),this.monthVal=(new Date).getMonth()+1,this.dayVal=(new Date).getDate(),this.hourVal=(new Date).getHours(),this.shenchenParams.Animal="",this.isBtnDisabled=!1,this.isResultNull=!1},handleJinQueFind(e){window.open(e,"_blank")}}},h=(s(605),s(9)),i=Object(h.a)(l,(function(){var e=this,a=e._self._c;return a("div",{staticClass:"shencheng-wrap"},[a("div",{staticClass:"shengcheng-select"},[a("el-select",{staticClass:"el-select",attrs:{clearable:"",placeholder:"请选择年份",size:"small"},model:{value:e.yearVal,callback:function(a){e.yearVal=a},expression:"yearVal"}},e._l(e.yearOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-select",{staticClass:"el-select",attrs:{clearable:"",placeholder:"请选择月份",size:"small"},model:{value:e.monthVal,callback:function(a){e.monthVal=a},expression:"monthVal"}},e._l(e.monthOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-select",{staticClass:"el-select",attrs:{clearable:"",placeholder:"请选择几日",size:"small"},model:{value:e.dayVal,callback:function(a){e.dayVal=a},expression:"dayVal"}},e._l(e.dayOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-select",{staticClass:"el-select",attrs:{clearable:"",placeholder:"请选择几点",size:"small"},model:{value:e.hourVal,callback:function(a){e.hourVal=a},expression:"hourVal"}},e._l(e.hourOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small",disabled:e.isBtnDisabled},on:{click:e.handleBtnSearch}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-setting",size:"small"},on:{click:e.handleBtnReset}},[e._v("重置")])],1),e._v(" "),""!=e.shenchenParams.Animal?a("div",[a("p",{staticClass:"border-bottom"},[a("span",[a("strong",[e._v("属相")]),e._v(": "+e._s(e.shenchenParams.Animal))]),e._v(" "),a("span",[e._v("农历: "+e._s(e.shenchenParams.year)+"年")]),e._v(" "),a("span",[e._v(e._s(e.shenchenParams.ImonthCn))]),e._v(" "),a("span",[e._v(e._s(e.shenchenParams.IDayCn))]),e._v(" "),a("span",[e._v("公历: "+e._s(e.shenchenParams.cYear)+"年")]),e._v(" "),a("span",[e._v(e._s(e.shenchenParams.cMonth)+"月")]),e._v(" "),a("span",[e._v(e._s(e.shenchenParams.cDay)+"日")])]),e._v(" "),a("p",{staticClass:"border-bottom"},[a("span",[a("strong",[e._v("星座")]),e._v(": "+e._s(e.shenchenParams.astro))])]),e._v(" "),a("p",{staticClass:"border-bottom"},[a("span",[e._v("干支纪年: "+e._s(e.shenchenParams.gzYear))]),e._v(" "),a("span",[e._v("干支纪月："+e._s(e.shenchenParams.gzMonth))]),e._v(" "),a("span",[e._v("干支纪日: "+e._s(e.shenchenParams.gzDay))])]),e._v(" "),a("p",{staticClass:"border-bottom"},[a("span",[a("strong",[e._v("节气")]),e._v("："+e._s(1==e.shenchenParams.isTerm?"是":"否"))]),e._v(" "),a("span",[e._v("闰月: "+e._s(1==e.shenchenParams.isLeap?"是":"否"))])]),e._v(" "),a("ul",{staticClass:"eight-item-ul"},e._l(e.shenchenParams.eightAll.eight,(function(s,t){return a("li",{key:t,staticClass:"eight-item-li border-bottom"},[e._v("\n                "+e._s(s)+"\n            ")])})),0),e._v(" "),a("p",{staticClass:"border-bottom"},[a("strong",[e._v("属:"+e._s(e.shenchenParams.eightAll.shu))])]),e._v(" "),a("ul",{staticClass:"five-item-ul"},e._l(e.shenchenParams.fiveAll.five,(function(s,t){return a("li",{key:t,staticClass:"five-item-li border-bottom"},[e._v("\n                 "+e._s(s)+"\n            ")])})),0),e._v(" "),a("p",{staticClass:"border-bottom"},[a("strong",[e._v("缺:"+e._s(e.shenchenParams.fiveAll.lose))])])]):e._e(),e._v(" "),1==e.isResultNull?a("el-empty",{attrs:{description:"暂无数据,接口使用频繁,明天再来吧"}},[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.handleJinQueFind("https://cesuan.itclan.net/bzjingpi/?spread=tui&dhid=720")}}},[e._v("更精确生辰结果查询")])],1):e._e(),e._v(" "),a("div",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.handleJinQueFind("https://cesuan.itclan.net/bzjingpi/?spread=tui&dhid=720")}}},[e._v("更精确生辰结果查询")])],1)],1)}),[],!1,null,"2c1ead33",null);a.default=i.exports}}]);