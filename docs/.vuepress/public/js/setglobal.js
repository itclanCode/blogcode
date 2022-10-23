/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-11-26 12:09:21
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2021-03-29 16:21:36
 * @Description:
 */
/** 监听copy事件 */
document.addEventListener('copy', function(e) {
  //取消默认事件，才能修改复制的值
  e.preventDefault();
  //复制的内容
  var copyTxt;
  if (window.getSelection(0).toString().length >= 80) {
    copyTxt = `${window
      .getSelection(0)
      .toString()}\n\n作者:随笔川迹\n站长:itclanCoder\n公众号:itclanCoder\n链接: ${
      window.location.href
    }\n来源: itclanCoder\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请附上原文出处及本链接。`;
  } else {
    copyTxt = window.getSelection(0).toString();
  }
  if (e.clipboardData) {
    e.clipboardData.setData('text/plain', copyTxt);
  } else if (window.clipboardData) {
    return window.clipboardData.setData('text', copyTxt);
  }
});

// 在线问答
// (function(y, o, u, k, e) {
//   if (y[k]) {
//     return;
//   }
//   y['YoukeInstance'] = k;
//   y[k] =
//     y[k] ||
//     function() {
//       (y[k].e = y[k].e || []).push(arguments);
//     };
//   e = o.createElement('script');
//   e.async = 1;
//   e.src = u;
//   o.currentScript
//     ? o.currentScript.parentNode.insertBefore(e, o.currentScript)
//     : o.body.appendChild(e);
// })(window, document, 'https://static.cdn.youke.co/js/widget.js', '$youke');
// $youke('load', '7JWIAnpAvIrCXwUH');

// 爆表联盟-cpc
(function (){
  var id = "7844475154362457956-10116";
document.write('<ins style="display:none!important" id="' + id + '"></ins>');
(window.adbyunion = window.adbyunion || []).push(id);
document.write('<script async  src="https://rs.bbads.vip/o.js"></script>');
})();


// 浏览器控制台显示
window.console &&
  (console.groupCollapsed(
    '%citclanCoder',
    'color:#3eaf7c;font-size:28px;font-weight:300'
  ),
  console.log('书以启智,技于谋生,活出斜杠.\n祝屏幕前正阅读的您码中致富'),
  console.log(`%c https://itclan.cn\n`, 'color:#3eaf7c'),
  console.log(`%c https://coder.itclan.cn\n`, 'color:#3eaf7c'),
  console.log(`%c https://faka.itclan.cn\n`, 'color:#3eaf7c'),
  console.log(`%c https://zhanji.itclan.cn\n`, 'color:#3eaf7c'),
  console.log(`%c https://img.itclan.cn\n`, 'color:#3eaf7c'),
  console.log(`%c https://game.itclan.cn\n`, 'color:#3eaf7c'),
  console.log(`%c https://video.itclan.cn\n`, 'color:#3eaf7c'),
  console.log(`%c https://tv.itclan.cn\n`, 'color:#3eaf7c'),
  console.log(`%c https://tv.jiahaoruisen.com\n`, 'color:#3eaf7c'),
  console.log(`%c https://nav.itclan.cn\n`, 'color:#3eaf7c'),
  console.log(
    '%c QQ交流群(1):64346880,微信公众号:itclanCoder',
    'color:#3eaf7c'
  ),
  console.groupEnd());

// 移动端下,禁止用户缩放
document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
});
document.addEventListener('gesturestart', function(event) {
  event.preventDefault();
});

// console.log(new Date().getTime() - performance.timing.navigationStart);
