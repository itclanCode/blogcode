(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{440:function(e,n){e.exports={shenchenhelpjuhekey:"0b999a3c2771bc48c6391568f0eef88a",zhougongjiemengjuhekey:"f505777750bc812eac3ad08e9586a33e",staryunshijuhekey:"da3cf4743ecbe7f9e287dc5df72f5294",starfindjuhekey:"456f646f7886f118dc2026bc30c91177",starpeiduijuhekey:"1f86faf3d6076a98eddd5ac46ac09890",shengxiaofindjuhekey:"c0a114560bc36d69824bebda9873127d",shenxiaopeiduijuhekey:"3a836f38818202006e8eeadcf9b91019"}},523:function(e,n,t){},621:function(e,n,t){"use strict";t(523)},959:function(e,n,t){"use strict";t.r(n);var a=t(440),i=t.n(a),s={name:"xinlingJiTang",data:()=>({msg:"",isResultNull:!1}),mounted(){this.getDaMiDujitang()},methods:{async getDaMiDujitang(){let e=i.a.damidujiTangApiKey;console.log(!1,"development"),this.url="https://api.qqsuu.cn";const n={apiKey:e};let t=await this.$axios.get(this.url+"/api/dm-dujitang",{params:n});if(console.log(t,"res"),200==t.status&&200==t.data.coe){const{msg:e}=t.data;this.msg=e}else this.$message.error("接口调用失败")},handleJinQueFind(e){window.open(e,"_blank")}}},u=(t(621),t(9)),c=Object(u.a)(s,(function(){var e=this,n=e._self._c;return n("div",[""!=e.msg?n("p",[e._v(e._s(e.msg))]):e._e(),e._v(" "),1==e.isResultNull?n("el-empty",{attrs:{description:"暂无数据"}},[n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return e.handleJinQueFind("https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720")}}},[e._v("更精确姻缘测试查询")])],1):e._e(),e._v(" "),n("div",{staticClass:"footer-btn"},[n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return e.handleJinQueFind("https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720")}}},[e._v("更精确姻缘测试查询")])],1)],1)}),[],!1,null,"4c36b100",null);n.default=c.exports}}]);