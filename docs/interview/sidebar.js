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
 * @LastEditTime: 2020-06-01 21:57:35
 * @Description: 侧边栏主配置文件
 */
module.exports = [
  ["", "目录"],
  {
    title: "css",
    collapsable: true,
    children: [
      ["css/", "目录"],
      ["css/1-interview-css", "css面经"] // 指向具体的md文件,真实要写文档的地方
    ]
  },
  {
    title: "JavaScript",
    collapsable: true,
    children: [
      ["js/", "目录"],
      ["js/1-interview-js", "JavaScript面经"]
    ]
  },
  {
    title: "React",
    collapsable: true,
    children: [
      ["react/", "目录"],
      ["react/1-interview-react", "React面经"]
    ]
  }
];
