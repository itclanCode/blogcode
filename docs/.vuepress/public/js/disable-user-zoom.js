window.onload = function() {
  window.console &&
    (console.groupCollapsed(
      '%citclanCoder',
      'color:#3eaf7c;font-size:28px;font-weight:300'
    ),
    console.log('书以启智,技于谋生,活出斜杠.\n祝屏幕前正阅读的您码中致富'),
    console.log(`%c http://itclan.cn\n`, 'color:#3eaf7c'),
    console.log(`%c https://coder.itclan.cn\n`, 'color:#3eaf7c'),
    console.log(
      '%c QQ交流群(1):64346880,微信公众号:itclanCoder',
      'color:#3eaf7c'
    ),
    console.groupEnd());
  document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
  });
};
