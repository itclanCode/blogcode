(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1316:function(e,t,c){"use strict";c(630)},1496:function(e,t,c){"use strict";c.r(t);var n={name:"FeedBack",data(){return{msgpath:"https://coder.itclan.cn"+this.$route.path}},methods:{handleShareCopy(){this.$copyText(this.msgpath).then(e=>{this.$message({message:"恭喜您已成功复制到剪切板,试试与他人分享吧",type:"success",duration:4e3,center:!0})},(function(e){alert("Can not copy")}))},handleFeedBack(e){this.$dialog.confirm({title:"温馨提示",message:"亲,您即将前往留言,是时候开始你真正的表达了",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then(()=>{window.open(e,"_blank")}).catch(()=>{})},handleAnswer(e){this.$dialog.confirm({title:"温馨提示",message:"亲,此项为付费解答服务,我在等风,也在等你",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then(()=>{window.open(e,"_blank")}).catch(()=>{})},handleColect(){this.$message({message:"键盘侠不止有ctrl+c,ctrl+v,还有ctrl+D",type:"success",duration:4e3,center:!0})}}},a=(c(1316),c(9)),s=Object(a.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"feedback-box"},[t("div",{staticClass:"feedback-content"},[t("div",{on:{click:e.handleShareCopy}},[t("img",{attrs:{src:"/images/feedback/share.svg"}}),e._v("分享\n    ")]),e._v(" "),t("div",{on:{click:function(t){return e.handleFeedBack("http://itclancoder.mikecrm.com/WkvRFA4")}}},[t("img",{attrs:{src:"/images/feedback/liuyan.svg"}}),e._v("留言\n    ")]),e._v(" "),t("div",{on:{click:function(t){return e.handleAnswer("http://itclancoder.mikecrm.com/wkgblhv")}}},[t("img",{attrs:{src:"/images/feedback/jieda.svg"}}),e._v("解答\n    ")]),e._v(" "),t("div",{on:{click:e.handleColect}},[t("img",{attrs:{src:"/images/feedback/shoucang.svg"}}),e._v("收藏\n    ")])])])}),[],!1,null,"fd709896",null);t.default=s.exports},630:function(e,t,c){}}]);