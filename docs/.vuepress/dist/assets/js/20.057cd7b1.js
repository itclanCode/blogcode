(window.webpackJsonp=window.webpackJsonp||[]).push([[20,38,121],{1327:function(t,e,i){"use strict";i(639)},1508:function(t,e,i){"use strict";i.r(e);var s={components:{FlipClock:i(722).default},name:"Weather",data:()=>({color:"#409eff",str:"",src:"https://tianqiapi.com/api.php?style=tz&skin=mango"}),mounted(){this.welcomeTime()},methods:{welcomeTime(){let t=(new Date).getHours();t<12?(this.str="Hi,早上好,又是崭新的一天,打工人,要加油哦",this.color="#409eff"):t>=12&&t<13?(this.str="Hi,中午好,在忙,也不要忘记眯一小会儿,不然下午会神游哦",this.color="#67c23a"):t>=13&&t<18?(this.str="Hi,下午好,打起精神,该起来搬砖干活了",this.color="#909399"):t>=18&&t<22?(this.str="Hi,晚上好,忙完了一天,该放下手机,电脑,好好休息下了",this.color="#e6a23c"):(this.str="Hi,夜猫子好,熬最晚的夜,敷最贵的膜,不要熬夜哦,没了1,后面再多的零,也没有意义哈,狗命要紧",this.color="#f56c6c")}}},r=(i(1327),i(9)),l=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"welcome-tip",style:{color:t.color}},[t._v(t._s(t.str))]),t._v(" "),t.src?e("iframe",{staticClass:"iframe",attrs:{scrolling:"no",src:t.src,frameborder:"0",width:"100%",height:"32",allowtransparency:"true"}}):t._e(),t._v(" "),e("div",{staticClass:"clock-box"},[e("FlipClock")],1)])}),[],!1,null,"2855df02",null);e.default=l.exports},404:function(t,e,i){},430:function(t,e,i){"use strict";i(404)},431:function(t,e,i){},445:function(t,e,i){"use strict";i.r(e);var s={name:"FlipClock",data:()=>({isFlipping:!1,flipType:"down",frontTextFromData:0,backTextFromData:1}),props:{frontText:{type:[Number,String],default:0},backText:{type:[Number,String],default:1},duration:{type:Number,default:600}},methods:{_textClass:t=>"number"+t,_flip(t,e,i){if(this.isFlipping)return!1;this.frontTextFromData=e,this.backTextFromData=i,this.flipType=t,this.isFlipping=!0,setTimeout(()=>{this.isFlipping=!1,this.frontTextFromData=i},this.duration)},flipDown(t,e){this._flip("down",t,e)},flipUp(t,e){this._flip("up",t,e)},setFront(t){this.frontTextFromData=t},setBack(t){this.backTextFromData=t}},created(){this.frontTextFromData=this.frontText,this.backTextFromData=this.backText}},r=(i(430),i(9)),l=Object(r.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"M-Flipper",class:[this.flipType,{go:this.isFlipping}]},[t("div",{staticClass:"digital front",class:this._textClass(this.frontTextFromData)}),this._v(" "),t("div",{staticClass:"digital back",class:this._textClass(this.backTextFromData)})])}),[],!1,null,null,null);e.default=l.exports},478:function(t,e,i){"use strict";i(431)},639:function(t,e,i){},722:function(t,e,i){"use strict";i.r(e);var s={name:"FlipClock",data:()=>({timer:null,flipObjs:[]}),components:{Flipper:i(445).default},methods:{init(){let t=new Date,e=this.formatDate(new Date(t.getTime()),"hhiiss");for(let t=0;t<this.flipObjs.length;t++)this.flipObjs[t].setFront(e[t])},run(){this.timer=setInterval(()=>{let t=new Date,e=this.formatDate(new Date(t.getTime()-1e3),"hhiiss"),i=this.formatDate(t,"hhiiss");for(let t=0;t<this.flipObjs.length;t++)e[t]!==i[t]&&this.flipObjs[t].flipDown(e[t],i[t])},1e3)},formatDate(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));let i={"m+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"i+":t.getMinutes(),"s+":t.getSeconds()};for(let t in i)if(new RegExp(`(${t})`).test(e)){let s=i[t]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?s:this.padLeftZero(s))}return e},padLeftZero:t=>("00"+t).substr(t.length)},mounted(){this.flipObjs=[this.$refs.flipperHour1,this.$refs.flipperHour2,this.$refs.flipperMinute1,this.$refs.flipperMinute2,this.$refs.flipperSecond1,this.$refs.flipperSecond2],this.init(),this.run()}},r=(i(478),i(9)),l=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"FlipClock"},[e("Flipper",{ref:"flipperHour1"}),t._v(" "),e("Flipper",{ref:"flipperHour2"}),t._v(" "),e("em",[t._v(":")]),t._v(" "),e("Flipper",{ref:"flipperMinute1"}),t._v(" "),e("Flipper",{ref:"flipperMinute2"}),t._v(" "),e("em",[t._v(":")]),t._v(" "),e("Flipper",{ref:"flipperSecond1"}),t._v(" "),e("Flipper",{ref:"flipperSecond2"})],1)}),[],!1,null,null,null);e.default=l.exports}}]);