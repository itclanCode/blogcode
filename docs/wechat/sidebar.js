/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-05-29
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-05-31 17:35:07
 * @Description: 侧边栏主配置文件
 */
module.exports = [
  ["", "目录"],
  {
    title: "微信小程序",
    collapsable: true,
    children: [
      ["minprogram/", "目录"],
      ["minprogram/1-first-minprogram", "微信小程序第一篇文章"] // 指向具体的md文件,真实要写文档的地方
    ]
  },
  {
    title: "云开发",
    collapsable: true,
    children: [
      ["cloudev/", "目录"],
      ["cloudev/1-first-cloudev", "云开发第一篇文章"]
    ]
  }
];
