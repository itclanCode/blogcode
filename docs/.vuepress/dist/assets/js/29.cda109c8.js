(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{447:function(e,t,n){"use strict";function a(e,t,n){let a,s,i,o,r;const c=function(){const h=+new Date-o;h<t&&h>0?a=setTimeout(c,t-h):(a=null,n||(r=e.apply(i,s),a||(i=s=null)))};return function(...s){i=this,o=+new Date;const h=n&&!a;return a||(a=setTimeout(c,t)),h&&(r=e.apply(i,s),i=s=null),r}}n.d(t,"a",(function(){return a}))},451:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=e=>new Promise((t,n)=>{if(document.getElementById(e))setTimeout(()=>{t()},500);else{const a=document.createElement("script");a.id=e,a.src=e,a.async=!0,document.body.appendChild(a),a.onload=function(){setTimeout(()=>{this.onerror=this.onload=null,t()},500)},a.onerror=function(){this.onerror=this.onload=null,n("加载失败"+e)}}});const{AMapCDN:s,AMapUiCDN:i}=n(497);function o(e,t=""){return new Promise((n,o)=>{function r(e,t){AMapUI.loadUI(["geo/DistrictExplorer"],a=>{(new a).loadAreaNode(e,(function(a,s){if(a)return console.error(a),void o(a);let i=s.getSubFeatures();if(0!==i.length)t&&(i=i.filter(e=>e.properties.adcode==t)),n({features:i});else{let t=s._data.geoData.parent.properties.acroutes;r(t[t.length-1],e)}}))})}window.AMap&&window.AMapUI?r(e,t):a(s).then(()=>{window.AMap?a(i).then(()=>{window.AMapUI?r(e,t):console.error("AMapUI获取失败")}):console.error("AMap获取失败")})})}},495:function(e,t,n){"use strict";var a=n(447);t.a={data:()=>({myChart:null,resizeHandler:null}),computed:{},mounted(){this.resizeHandler=Object(a.a)(()=>{this.myChart&&this.myChart.resize()},100),this.initResizeEvent()},methods:{initResizeEvent(){window.addEventListener("resize",this.resizeHandler)},destroyResizeEvent(){window.removeEventListener("resize",this.resizeHandler)}},beforeDestroy(){this.destroyResizeEvent(),this.myChart&&(this.myChart.dispose(),this.myChart.off("click"),this.myChart=null)},activated(){this.initResizeEvent(),this.myChart&&this.myChart.resize()},deactivated(){this.destroyResizeEvent()},watch:{}}},497:function(e,t){e.exports={AMapCDN:"https://webapi.amap.com/maps?v=1.3&key=73cddabc2173e0166a622f4483d3592a&plugin=AMap.DistrictSearch",AMapUiCDN:"https://webapi.amap.com/ui/1.0/main.js",VueCDN:"https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js",AxiosCDN:"https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js",VueRouterCDN:"https://cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.min.js",VuexCDN:"https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js",TinymceCDN:"https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",html2canvasCDN:"https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js"}},498:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(451);function s(e){return new Promise((t,n)=>{Object(a.a)(e).then(e=>{const n=e.features.map(e=>({name:e.properties.name,value:parseFloat((3e3*Math.random()).toFixed(2)),adcode:e.properties.adcode,level:e.properties.level}));t({code:200,data:n})}).catch(e=>{n(e)})})}},501:function(e,t,n){},595:function(e,t,n){"use strict";n(501)},943:function(e,t,n){"use strict";n.r(t);n(48);var a=n(495),s=n(469),i=n.n(s),o=n(451),r=n(498),c={name:"watchCity",mixins:[a.a],props:{width:{type:String,default:"100%"},height:{type:String,default:"408px"}},data:()=>({geoJson:{},parentInfo:[{cityName:"全国",code:1e5}]}),mounted(){this.$nextTick(()=>{this.getMapJson()})},methods:{getMapJson(){Object(o.a)(this.parentInfo[this.parentInfo.length-1].code).then(e=>{this.geoJson=e,this.getMapData()})},getMapData(){Object(r.a)(this.parentInfo[this.parentInfo.length-1].code).then(e=>{const t=e.data;this.initEchart(t)})},initEchart(e){this.myChart=i.a.init(this.$refs.seriesMap),i.a.registerMap(1===this.parentInfo.length?"china":"map",this.geoJson);const t=e.sort((e,t)=>t.value-e.value);let n=t[0].value,a=t[t.length-1].value;1===t.length&&(a=0),this.myChart.setOption({tooltip:{},visualMap:{min:a,max:n,left:"2%",bottom:"1%",calculable:!0,inRange:{color:["#24CFF4","#2E98CA","#1E62AC"]},textStyle:{color:"#24CFF4"}},series:[{name:"地图",type:"map",map:1===this.parentInfo.length?"china":"map",roam:!0,zoom:1.22,data:t,label:{normal:{show:!0,color:"rgb(249, 249, 249)",formatter:e=>{switch(e.name){case"内蒙古自治区":e.name="内蒙古";break;case"西藏自治区":e.name="西藏";break;case"新疆维吾尔自治区":e.name="新疆";break;case"宁夏回族自治区":e.name="宁夏";break;case"广西壮族自治区":e.name="广西";break;case"香港特别行政区":e.name="香港";break;case"澳门特别行政区":e.name="澳门"}return e.name}},emphasis:{show:!0,color:"#f75a00"}},itemStyle:{normal:{areaColor:"#24CFF4",borderColor:"#53D9FF",borderWidth:1.3,shadowBlur:15,shadowColor:"rgb(58,115,192)",shadowOffsetX:7,shadowOffsetY:6},emphasis:{areaColor:"#8dd7fc",borderWidth:1.6,shadowBlur:25}}}]},!0),this.myChart.getZr().off("click"),this.myChart.getZr().on("click",t=>{if(t.target){const n=t.target.dataIndex;if(n&&e[n]){if(this.parentInfo[this.parentInfo.length-1].code==e[n].adcode)return;this.parentInfo.push({cityName:e[n].name,code:e[n].adcode}),this.getMapJson(),this.$notify.info({title:"温馨提示",message:"点击地图空白处即可返回上一级"})}}else{if(1===this.parentInfo.length)return;this.parentInfo.pop(),this.getMapJson()}})}}},h=(n(595),n(9)),l=Object(h.a)(c,(function(){var e=this._self._c;return e("div",[e("el-card",{staticClass:"seriesmap-box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[this._v("城市分布图 (点击可下钻到县)")])]),this._v(" "),e("div",[e("div",{ref:"seriesMap",staticClass:"series-map",style:{height:this.height,width:this.width}})])])],1)}),[],!1,null,"04921dd3",null);t.default=l.exports}}]);