(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1337:function(t,i,a){"use strict";a(649)},1517:function(t,i,a){"use strict";a.r(i);var e=a(481),n=a.n(e),r={name:"RightBar",data:()=>({isRightBar:!1,rightbar:n.a.mobileslides}),mounted(){window.addEventListener("scroll",this.scroll)},destroyed(){window.removeEventListener("scroll",this.scroll)},methods:{handleZhiDing(){window.scrollTo({top:0,behavior:"smooth"})},scroll(){const t=this;let i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.scrollTop=i,t.scrollTop>60?t.isRightBar=!0:t.isRightBar=!1},handleAd(t){this.$dialog.confirm({title:"温馨提示",message:"亲,这里接受广告主投放,可前往了解一下",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then(()=>{window.open(t,"_blank")}).catch(()=>{})},handleKeQun(t){this.$dialog.confirm({title:"温馨提示",message:"亲,在这里可以加各种群,发广告,发名片,开始你的探索吧",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then(()=>{window.open(t,"_blank")}).catch(()=>{})},handleFaKa(t){this.$dialog.confirm({title:"温馨提示",message:"亲,您将前往发卡商城,开始寻找对您有价值的商品吧",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then(()=>{window.open(t,"_blank")}).catch(()=>{})},handleKelaiTV(t){this.$dialog.confirm({title:"温馨提示",message:"亲,您将前往客来影视TV,更多好电影,电视剧等你看哦",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then(()=>{window.open(t,"_blank")}).catch(()=>{})},handleShange(t){this.$dialog.confirm({title:"打赏鼓励",message:"如果您喜欢本站或本站内容对您有所帮助,您的支持就是我的动力",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then(()=>{window.open(t,"_blank")}).catch(()=>{})}}},o=(a(1337),a(9)),s=Object(o.a)(r,(function(){var t=this,i=t._self._c;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isRightBar,expression:"isRightBar"}],staticClass:"right-bar-wrap"},[i("div",[i("a",{attrs:{href:"javascript:;"},on:{click:t.handleZhiDing}},[i("img",{attrs:{width:"30",height:"30",src:t.rightbar.topImg,alt:"置顶"}})])]),t._v(" "),i("div",[i("a",{attrs:{href:"/latestarticle/"}},[i("img",{attrs:{width:"30",height:"30",src:t.rightbar.newImg,alt:"最新"}})])]),t._v(" "),i("div",{on:{click:function(i){return t.handleKeQun("https://qun.aikelaikaifa.com/index.php?i=1&do=index&opt=index&act=index&m=dc_sqjd&spread=0")}}},[i("img",{attrs:{width:"30",height:"30",src:t.rightbar.keQunImg,alt:"社群"}})]),t._v(" "),i("div",[i("img",{staticClass:"medium-zoom lazy",attrs:{width:"30",height:"30",loading:"lazy",src:t.rightbar.buyImg,alt:"小程序码"}})]),t._v(" "),i("div",[i("img",{staticClass:"medium-zoom lazy",attrs:{width:"30",height:"30",loading:"lazy",src:t.rightbar.codeImg,alt:"二维码"}})]),t._v(" "),i("div",[i("img",{staticClass:"medium-zoom lazy",attrs:{width:"30",height:"30",loading:"lazy",src:t.rightbar.publicodeImg,alt:"公众号"}})]),t._v(" "),i("div",{on:{click:function(i){return t.handleAd("http://itclancoder.mikecrm.com/z1zXWvz")}}},[i("img",{attrs:{width:"30",height:"30",src:t.rightbar.adImg,alt:"广告"}})]),t._v(" "),i("div",{on:{click:function(i){return t.handleFaKa("https://faka.itclan.net")}}},[i("img",{attrs:{width:"30",height:"30",src:t.rightbar.fkImg,alt:"发卡"}})]),t._v(" "),i("div",{on:{click:function(i){return t.handleKelaiTV("https://video.itclan.pro")}}},[i("img",{attrs:{width:"30",height:"30",src:t.rightbar.videotvImg,alt:"客来影视"}})]),t._v(" "),i("div",{on:{click:function(i){return t.handleShange("https://pay.aikelaidev.cn/paypage/?merchant=35bdYxSx7dCUrVUBqFQjdqqlzhWryCA7lqOn9VhakWHC")}}},[i("img",{attrs:{width:"30",height:"30",src:t.rightbar.shangImg,alt:"赏"}})]),t._v(" "),i("div",[i("a",{attrs:{href:"#bottom"}},[i("img",{attrs:{width:"30",height:"30",src:t.rightbar.bottomImg,alt:"置底"}})])])])])}),[],!1,null,"505ec7a4",null);i.default=s.exports},481:function(t,i){t.exports={pcslides:[{title:"关注公众号",desc:"一个走心,有温度的号,同千万同行一起交流学习",imgUrl:"/images/rightbar/itclancoder-code.jpg"},{title:"加作者微信",desc:"扫二维码 备注 【加群】",imgUrl:"/images/rightbar/aikelaikaifa-code.jpg"},{title:"扫码易购",desc:"福利推荐",imgUrl:"/images/rightbar/itclanShopCode.jpg"}],mobileslides:{topImg:"/images/rightbar/up-arrow.png",newImg:"/images/rightbar/new.png",buyImg:"/images/rightbar/itclanShopCode.jpg",codeImg:"/images/rightbar/aikelaikaifa-code.jpg",publicodeImg:"/images/rightbar/itclancoder-code.jpg",adImg:"/images/rightbar/ad.svg",fkImg:"/images/rightbar/fk.png",videotvImg:"/images/rightbar/videotv.svg",shangImg:"/images/rightbar/shang.svg",bottomImg:"/images/rightbar/down-arrow.png",keQunImg:"/images/rightbar/kequn.svg"}}},649:function(t,i,a){}}]);