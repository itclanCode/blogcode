/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-07-09 10:04:05
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-07-09 12:57:00
 * @Description:设备类型判断
 */
global.window = window;
global.navigator = navigator;

function isMobile() {
  let mobile = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|IEMobile|Opera Mini|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return mobile != null;
}

export { isMobile };
