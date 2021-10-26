---
title: JavaScript企业级编程规范(1)-文件命名-注释规范-id与class
autoGroup-2: 编程规范
---

## 快速导航

<TOC />

## 前言

好的代码是有生命力的,程序是写给人读的,顺便在机器上跑一下
当你在阅读别人的代码时,据说评判一个项目的好坏,就是看阅读代码人说脏话程度

无注释,无文档,命名千奇百怪等等,对于后来者,是极其痛苦的,其实个人觉得一个非常好的产品,一手代码非常重要,既是标准,往往又是参照。

工作中,往往令人尊敬的,就是代码的产出,少 bug,写得又好又快,毫无疑问是团队中最受欢迎的,而好的命名,代码规范往往可以看出一个程序员的功力

做一个自我要求高一点的工程师,而不止于完成任务。从代码规范做起,什么是好代码,可读性好,可维护性高.易拓展.少 bug,高质量,这些硬技能并非一蹴而就.非一日之功.

人人都喜欢和聪明人一起工作,我们无法要求别人怎么样,但可以要求自己.
无论团队人数多少，代码应该同出一门。

下面这些规范不是硬性规定,但不妨可以作为参照,向大厂看齐,作为标杆

## 文件夹(项目)命名规范

- ### 项目名全部采用小写方式

以中划线分隔。比如：`my-project-name`, 例如:,`ant-design-pro`,`ant-design-colors`等大厂开源项目,当项目名称有多个字符时,不是说驼峰命名法`myProjectName`不行

用横杠中划线进行连接,已经是约定俗成的习惯,一定要向大厂的标准看齐
下面以阿里的 `Ant Design Team` 团队出品为例

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/program-rules/program-rules1/01-filenames.jpg" alt="编程规范" />
</div>

## 子项目录名

- ### 当有复数结构时，要采用复数命名法

如有多个单词时,用横杠连接,比如说：`scripts`, `styles`, `images`, `data-models`
如下所示

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/program-rules/program-rules1/02-filenames.jpg" alt="编程规范" />
</div>
值得一提的是:`JavaScript`文件的存放的文件夹放在Web应⽤目录中的`components`文件夹或其以业务组件,应用小写标识命名子文件夹
<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/program-rules/program-rules1/03-filenames.jpg" alt="编程规范" />
</div>

## JavaScript 文件命名

- 所有的`JavaScript`文件均以`.js`结尾
- 所有`js`文件名，当遇到多个单词组成时，采用中划线连接方式，比如说：比如检查`commit`提交文件， `check-commit.js`,首字母小写,如下所示
- 当出现版本号时, 需要用字母`v`做为前缀, 小版本号用点号`(.)`隔开, `global-v8.js`或 `detail-v2.2.js` ,有的公司项目的分支管理也是按照这样去管理进行迭代开发的,如果有参与过敏捷开发的同学,项目版本周期性的迭代肯定不会陌生
- 如果`js` 和 `css`是压缩文件, 统一以 `-min`结尾, 比如源码文件为`react.js`, 压缩后为`react-min.js`,一般线上坏境端的,为了减少体积,一些额外的类库可以选用压缩版本的

```js
check - commit.js; // ✓ ok,值得推荐
Check - Commit.js; // ✗ avoid,避免,不是不可以,如果项目里都是驼峰,那就驼峰命名,并且首字母小写,文件名字统一
cc.js; // ✗ avoid,不要简写,这是什么意思的
```

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/program-rules/program-rules1/04-filenames.jpg" alt="编程规范" />
</div>

## CSS,LESS,SCSS 文件命名

参照项目命名规则,当遇到多个单词组成时，采用中划线连接方式，比如说：`retina-sprites.scss`

## HTML 文件命名

同样参照项目命名,都小写的方式,当遇到多个单词组成时，采用中划线连接方式，,比如说: `error-report.html`

## 图片资源命名

- ### 同样参照项目命名,多个单词组成时，采用中下划线连接方式

`input_bg_search_default@2x.png`,**组件*类别*功能\_状态@2x.png**,对应的中文是:**输入框*背景色*搜索\_默认**,这种命名方式不是硬性的,应当是灵活的,语义化,最棒的就是让人一看名字就能理解这图片代表的含义

上面的命名规范,都适用于`html, css, js, png, gif, jpg`,等前端维护的所有文件类型和相关目录.

对于文件以及目录或者是变量的命名,的确是一个令人头疼的问题,但对于程序员来说,是问题,肯定有人想办法去解决:推荐一个变量命名神器网站`codeIf`,当然也可以在`vscode`插件市场中搜索`CodeIf`,直接安装就可以了,使用也很简单,选中变量单词右键`codeIf`就可以进入这个变量命名神器网站的

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/program-rules/program-rules1/05-filenames.jpg" alt="编程规范" />
</div>
有了它,真的可以减少不少变量命名的痛苦

## 注释规范

涉及到**文档注释,单行注释与多行注释,变量语句,函数注释**

文档注释

当针对整个文件的注释，必须放在 js ⽂文件的开头，注释顺序及内容如下，这个不是硬性规定的，具体与自己的公司,项目注释规范而定

- 版权信息,如：Copyright © 2020, xxx company. All rights reserved.
- 产品及模块信息
- 创建日期 日期格式为：YYYY-MM-DD。
- 作者信息 格式为花名+工号,没有工号直接写自己昵称即可
- 描述信息。用于简单介绍该 js 文件的功能，准确简练就好

如下所示

```js
/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product: h5活动页
 * @Mode Name: 转盘抽奖
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-02-19 16:42:51
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-02-24 11:14:41
 * @Description: 转盘抽象公共js模块的封装
 */
```

至于这个代码注释配置,很多代码编辑器都有相应的插件和快捷键配置:这里以`vscode`为例

在 vscode 的应用商店中搜索安装`koroFileHeader`这个插件即可,具体配置可参考:VsCode 插件，自动生成注释 koroFileHeader
如果你实在不知道怎么弄,也可以加我微信搜索 suibichuanji,一定要备注:地区-昵称-身份,让我知道你我是谁,避免尬聊,可手把手教你

不过对于一个写代码小伙伴来说,玩插件,配置之类的,应该不是什么问题

- **单行注释**

- 双斜线后，必须跟注释内容保留一个空格
- 可独占一行, 前边不许有空行, 缩进与下一行代码保持一致
- 可位于一个代码行的末尾，注意这里的格式
  如下代码:

```js
// Good,圆括号后有一空格
if (condition) {
  // 如果你在此处完成，则所有安全检查都通过了
  allowed();
}

var sName = 'itclanCoder'; // 双斜线距离分号四个空格，双斜线后始终保留一个空格
```

- **多行注释**

最少三行, 格式如下所示
前边留空一行

```js
/*
 *  注释内容与星标前保留一个空格
 */
```

这里,建议在以下情况下使用多行注释：

- 难于理解的代码段
- 可能存在错误的代码段
- 浏览器特殊的 HACK 代码
- 业务逻辑强相关的代码
- 变量语句注释
  针对变量中的语句注释,可以放在变量定义行和语句行的上一行,使用 javaScript 标准的单行注释,如下所示

```js
// 获取窗口的宽度
var nWidth = widow.screen.width;
```

在开发中,对于不改变的常量用大写单词表示,多个单词之间用下划线进行连接

```js
/* 监听表单输入 */
const HANDLE_INPUT_VALUE = 'handle_input_value';
```

**函数注释**

- 针对某个函数的注释,必须放在函数定义行的上一行,注释内容包括:
- 函数功能说明,介绍该函数的功能
- 参数列表,各个参数的说明,如果没有参数,该内容可以省略
- 返回值,返回值说明,如果没有返回值,该内容可以省略

```js
/**
 * 函数功能详细 打开模态对话框
 * @param [参数1] [参数说明]
 * @param [参数2] [参数说明]
 * @return [返回值说明]
 */
function openModelDialog(url, winName, width, height) {
  // 具体的详细代码
}
```

## Id 与 class 命名

保持 `Class` 与`id`命名为全小写，可以使用短划线（不要使用下划线和 `camelCase` 驼峰式命名,这个不是硬性规定,看公司小伙伴的代码风格,但至少代码风格保持一致）。短划线应该作为相关类的自然间断。(例如，`.btn` 和 `.btn-primary`,可参考 `bootstrap` 的命名风格

```js
<button type="button" class="btn btn-primary">
  Primary
</button>
```

- `id` 和 `class`的命名总规则为： **内容优先,表现为辅**., 首先根据内容来命名, 比如 `main-nav`.

如果根据内容找不到合适的命名, 可以再结合表现来定, 比如 `skin-blue`（皮肤蓝色）, `present-tab`(当前标签).

```html
<div class="main-nav"></div>
<div class="skin-blue"></div>
<div class="present-tab">当前标签</div>
```

- `id` 和 `class` 尽量用英文单词命名 . 确实找不到合适的单词时, 可以考虑使用产品的中文拼音, 比如 `youzan`, `tuangou.` 也可以使用你们公司的前缀,例如:`jh-search`,`jh-tab`

```html
<div class="jh-search"></div>
<div class="jh-tab"></div>
```

- 在不影响语义的情况下, `id`和 `class`名称中可以适当采用英文单词缩写, 比如 `col`, `nav`, `hd`, `bd`, `ft` 等, 但切忌自造缩写,例如:`aa`,`bb`,`cc`(不要这么写)

```js
布局类：header, footer, container, main, content, aside, page, section
包裹类：wrap, inner
区块类：region, block, box
结构类：hd, bd, ft, top, bottom, left, right, middle, col, row, grid, span
列表类：list, item, field
主次类：primary, secondary, sub, minor
大小类：s, m, l, xl, large, small
状态类：active, current, checked, hover, fail, success, warn, error, on, off
导航类：nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last
交互类：tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay,
星级类：rate, star
分割类：group, seperate, divider
等分类：full, half, third, quarter
表格类：table, tr, td, cell, row
图片类：img, thumbnail, original, album, gallery
语言类：cn, en
论坛类：forum, bbs, topic, post
方向类：up, down, left, right
其他语义类：btn, close, ok, cancel, switch; link, title, info, intro, more, icon; form, label, search, contact, phone, date, email, user; view, loading..
```

互联网上这种命名归纳有很多,找到一你喜欢的,遵行你自己的公司规范就好,如果没有规范,那就自己定义规范的

id 的优先级要高于`class`,`class`是为高可复用组件设计的，理论上他们应处在第一位。`Id`更加具体而且应该尽量少使用（例如, 页内书签）,它是唯一的

```js
<a id="..." class="..." href="#">
  阅读原文
</a>
```

## 结语

本小节主要介绍了`JavaScript`中编程规范的 8 个点,文件夹项目命名规范,子项目目录名，`javaScript`文件名,`css`,`less`,sass,html,图片资源,注释规范,id 与 class 命名

以上列出的规范并不是硬性的,遵从自己项目的规范就好,写出让人看得懂的代码
个人觉得最佳学习方式,就是参考学习厉害的人的代码,可以在 github 上阅读优秀的开源代码

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
