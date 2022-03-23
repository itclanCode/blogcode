---
sidebarDepth: 3
title: markdown使用速查
---

## markdown 使用速查

## 快速导航

<TOC :include-level="[1, 4]" />

## 快速生成目录树结构

有时候,在文章的前面,展示一个锚点链接,可以快速跳转文章当中的某一个部分,这是一个很好的体验,在`md`中有两种方式实现

::: details 点击可查看详情

- **方式 1**:手动的设置,标题需与链接一一对应,否则就会不生效

* **缺点**:手动设置有些麻烦,也容易出错

* **使用方式**:如下所示,注意`#`后面的标题要与文章中的标题一一对应保持一致

```
- [前言](#前言)
- [示例效果](#先看一下示例效果)
- [应用场景](#应用场景)
- [解决图片安全的方式](#解决图片安全的方式)
- [云调用方式](#云调用方式)
- [常见问题](#常见问题)
  - [如何对上传的图片大小进行限制](#如何对上传的图片大小进行限制)
  - [如何解决多图上传覆盖的问题](#如何解决多图上传覆盖的问题)

* [结语](#结语)


## 前言


## 先看一下示例效果

## 应用场景

### 如何对上传的图片大小进行限制

```

- **方式 2**:在`md`文件内,使用`[[toc]]`即可自动生成文章目录
- **缺点**:`[[toc]]` 只是`markdown`语法，所以只能用于 `.md`文件,在`.vue`文章中无法使用

* **使用**: 使用方式如下

```
[[toc]]
```

**方式 3**:使用`vuepress-plugin-table-of-contents`插件生成目录树,为站点增加目录组件

**优点**: 既可以在`md`文件中使用,也可以在`.vue`文件中使用

**使用方式**:

**安装**:在当前项目目录下使用`yarn`安装

```
yarn add -D vuepress-plugin-table-of-contents
```

然后再插件配置中:进行配置

```
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-table-of-contents'],
}

```

配置完后,该组件会为你注册一个 `<TOC />`组件，该组件会展示你当前页面文章的目录，你可以在 `Markdown`文件和 `Vue`文件中直接引入即可

```
<!-- README.md / Component.vue -->
<TOC />
```

在默认情况下就支持`##二级标题,###三级标题`标题,如果想要支持`4,5,6`其他标题进行拓展,那么可以在`<TOC />`组件中加入`includeLevel`属性,传入指定的数值就可以了的,如下所示

```
// 代表 2 <= x <= 6支持2级到6级的标题,但是一般情况下2,4级就可以了的
<TOC :include-level="[2, 6]" />
```

:::

## 自定义容器

当你看到`vuepress`中一些优雅的提示,警告等,像下面这样的示例
::: tip 提示
这是一个友好的提示
:::
::: warning 警告
这是一个警告提示
:::
::: danger 危险警告
这是一个危险警告
:::
::: details 详情信息
这是一个详情块，在 IE / Edge 中不生效
:::

**使用**

在`md`中直接输入如下即可

```
::: tip 提示
这是一个友好的提示
:::
::: warning 警告
这是一个警告提示
:::
::: danger 危险警告
这是一个危险警告
:::
::: details 详情信息
这是一个详情块，在 IE / Edge 中不生效
:::
```

## markdwon 中引入 element-ui 插件

在`vuepress`中可以自定义组件,可以引入官方的`element-ui`组件,然后在通过编写自定义组件方式在`md`文件中引入

这是一种方法,但有没有更简便的方式,直接在`md`中就支持引入`element-ui`当中的一些组件呢

`vuepress-plugin-element-ui`这个第三方插件很好的支持了的

### 安装`vuepress-plugin-element-ui`

:::: el-tabs
::: el-tab-pane label=安装插件

```css
yarn add vuepress-plugin-element-ui -D
```

:::
::: el-tab-pane label=配置文件

```js
//.vuepress/config.js
module.exports = {
  plugins: ['element-ui'],
};
```

:::
::::

::: warning 注意
vuepress 的版本需要大于 1.0.0,你可以安装最新的`vuepress`

```
yarn add vuepress@next -D
```

:::

### el-tabs

```
:::: el-tabs
::: el-tab-pane label=markdown

- vue
  - vue-cli
  - nuxt
  - vuepress
- react
  - create-react-app
  - nest
:::

::: el-tab-pane label=javascript

() => {
console.log('Javascript code example');
};

:::
::::

```

:::: el-tabs
::: el-tab-pane label=markdown

- vue
  - vue-cli
  - nuxt
  - vuepress
- react
  - create-react-app
  - nest

:::
::: el-tab-pane label=javascript

```javascript
() => {
  console.log('Javascript code example');
};
```

:::
::::

### el-collapses 折叠手风琴

```js
:::: el-collapse
::: el-collapse-item title="一致性 Consistency"
与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
:::
::: el-collapse-item title="反馈 Feedback"
控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
:::
::: el-collapse-item title="效率 Efficiency"
简化流程：设计简洁直观的操作流程；
清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
:::
::: el-collapse-item title="可控 Controllability"
用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
:::
::::
```

:::: el-collapse
::: el-collapse-item title="一致性 Consistency"
与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
:::
::: el-collapse-item title="反馈 Feedback"
控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
:::
::: el-collapse-item title="效率 Efficiency"
简化流程：设计简洁直观的操作流程；
清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
:::
::: el-collapse-item title="可控 Controllability"
用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
:::
::::

### All Componenets 所有组件

你可以用`element-ui`中的所有组件

::: details 点击即可查看所有组件

```js
'el-collapse-transition',
  'el-pagination',
  'el-dialog',
  'el-autocomplete',
  'el-dropdown',
  'el-dropdown-menu',
  'el-dropdown-item',
  'el-menu',
  'el-submenu',
  'el-menu-item',
  'el-menu-item-group',
  'el-input',
  'el-input-number',
  'el-radio',
  'el-radio-group',
  'el-radio-button',
  'el-checkbox',
  'el-checkbox-button',
  'el-checkbox-group',
  'el-switch',
  'el-select',
  'el-option',
  'el-option-group',
  'el-button',
  'el-button-group',
  'el-table',
  'el-table-column',
  'el-date-picker',
  'el-time-select',
  'el-time-picker',
  'el-popover',
  'el-tooltip',
  'el-breadcrumb',
  'el-breadcrumb-item',
  'el-form',
  'el-form-item',
  'el-tabs',
  'el-tab-pane',
  'el-tag',
  'el-tree',
  'el-alert',
  'el-slider',
  'el-icon',
  'el-row',
  'el-col',
  'el-upload',
  'el-progress',
  'el-spinner',
  'el-badge',
  'el-card',
  'el-rate',
  'el-steps',
  'el-step',
  'el-carousel',
  'el-scrollbar',
  'el-carousel-item',
  'el-collapse',
  'el-collapse-item',
  'el-cascader',
  'el-color-picker',
  'el-transfer',
  'el-container',
  'el-header',
  'el-aside',
  'el-main',
  'el-footer',
  'el-timeline',
  'el-timeline-item',
  'el-link',
  'el-divider',
  'el-image',
  'el-calendar',
  'el-backtop',
  'el-page-header',
  'el-cascader-panel',
  'el-avatar',
  'el-drawer',
  'el-popconfirm';
```

:::

你也可以用`element-ui`官方提供的一些组件,直接在`md`中使用

```html
<el-tag>标签一</el-tag>
<el-tag type="success">标签二</el-tag>
<el-tag type="info">标签三</el-tag>
<el-tag type="warning">标签四</el-tag>
<el-tag type="danger">标签五</el-tag>
```

<el-tag>标签一</el-tag>
<el-tag type="success">标签二</el-tag>
<el-tag type="info">标签三</el-tag>
<el-tag type="warning">标签四</el-tag>
<el-tag type="danger">标签五</el-tag>

### 插件文档

- [vuepress-plugin-element-ui](https://github.com/lq782655835/vuepress-plugin-element-ui)
- [vuepress-plugin-element-ui 使用文档](https://lq782655835.github.io/vuepress-plugin-element-ui/#all-componenets)

## vuepress-plugin-element-tabs

有时候想要同时展示`html`,`css`,`js`代码,能够切换,除了上面的`vuepress-plugin-element-ui`能做到
这个`vuepress-plugin-element-tabs`也能做到
:::: tabs type:border-card
::: tab 安装插件

```js
yarn add vuepress-plugin-element-tabs -D
```

:::
::: tab 配置插件

```js
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-element-tabs'],
};
```

:::
::::

带边框的卡片,在`md`中直接插入

```js
:::: tabs type:border-card
::: tab markdown lazy
**markdown content**
:::
::: tab javascript lazy
javaScript;
:::
::::
```

:::: tabs type:border-card
::: tab markdown lazy
**markdown content**
:::
::: tab javascript lazy
javaScript;
:::
::::

无边框的卡片`tab`

```js
:::: tabs type:card
::: tab java lazy
**java content**
:::
::: tab MySql lazy
MySql
:::
::::
```

:::: tabs type:card
::: tab java lazy
**java content**
:::
::: tab MySql lazy
MySql
:::
::::

## 相关文档

- [vuepress-plugin-tabs 文档](https://superbiger.github.io/vuepress-plugin-tabs/#preview)
- [vuepress-plugin-tab](https://github.com/superbiger/vuepress-plugin-tabs)

## md 中画流程图

有时,需要描述做一件事情的先后顺序,借用流程图,会让复杂的东西变得简单化,在文档中需要插入流程图,要么借用第三方的一些`processOn`或者一些绘图工具(`picPick`)等画流程图的

通过截图的方式,然后在插入到文档中,这样不是不可以,但比较麻烦,在`vuepress`中提供了一个插件工具`vuepress-plugin-flowchart`

可以让你的流程图,更好看,优雅

### 安装 vuepress-plugin-flowchart

:::: el-tabs
::: el-tab-pane label=安装插件

```js
yarn add vuepress-plugin-flowchart -D
```

:::
::: el-tab-pane label=配置文件

```js
// .vuepress/config.js
module.exports = {
  plugins: ['flowchart'],
};
```

:::
::::

### 语法

```js
@flowstart [preset]

<!-- 你的图表代码在这里. -->

@flowend
```

其中,`preset`展示有两种形式,`vue`渲染(默认)以及`ant`

### 开始与结束

- `[Variable]->start: [Text]`
- `[Variable]->end: [Text]`

```
@flowstart
st=>start: 开始
e=>end: 结束

st->e
@flowend
```

@flowstart

st=>start: 开始
e=>end: 结束

st->e
@flowend

### 操作

- `[Variable]->operation: [Text]`

```
@flowstart
process=>operation: 操作
e=>end: 结束

process->e
@flowend
```

@flowstart
process=>operation: 操作
e=>end: 结束

process->e
@flowend

### inputoutput 输入与输出

- `[Variable]->inputoutput: [Text]`

```
@flowstart
process=>inputoutput: 输入
e=> end: 结束

process->e
@flowend
```

@flowstart
process=>inputoutput: 输入
e=>end: 结束

process->e
@flowend

### 子程序

- `[Variable]->subroutine: [Text]`

```js
@flowstart
process=>subroutine: 子程序
e=>end: 结束

process->e
@flowend
```

@flowstart
process=>subroutine: 子程序
e=>end: 结束

process->e
@flowend

### 条件

- `[Variable]->condition: [Text]`
- `[Variable]([yesText])->[Position]`
- `[Variable]([noText])->[Position]`

```
@flowstart
cond=>condition: 男人?
process=>operation: 汉子
e=>end: 妹子

cond(yes)->process->e
cond(no)->e
@flowend
```

@flowstart
cond=>condition: 男人?
process=>operation: 汉子
e=>end: 妹子

cond(yes)->process->e
cond(no)->e
@flowend

### 平行

- `[Variable]->parallel: [Text]`
- `[Variable](path1, direction)->[Position]`
- `[Variable](path1, direction)->[Position]`

```
@flowstart
para=>parallel: vue
process=>operation: VuePress
e=>end: 小右

para(path1, bottom)->process->e
para(path2)->e
@flowend
```

@flowstart
para=>parallel: vue
process=>operation: VuePress
e=>end: 小右

para(path1, bottom)->process->e
para(path2)->e
@flowend

### 顺序结构

```
@flowstart
stage1=>operation: 步骤 1
stage2=>operation: 步骤 2
stage3=>operation: 步骤 3

stage1->stage2->stage3
@flowend
```

@flowstart
stage1=>operation: 步骤 1
stage2=>operation: 步骤 2
stage3=>operation: 步骤 3

stage1->stage2->stage3
@flowend

### 复杂选择结构

```
@flowstart
st=>start: Start|past:>http://itclan.cn/
e=>end: End|future:>https://www.zhihu.com/people/itclan
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>[https:](https://space.bilibili.com/267957620)
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend
```

@flowstart
st=>start: 开始|past:>http://itclan.cn/
e=>end: 结束|future:>https://www.zhihu.com/people/itclan
op1=>operation: 操作|past
op2=>operation: 子操作|current
sub1=>subroutine: 子进程|invalid
cond=>condition: 是
or 否?|approved:>[https:](https://space.bilibili.com/267957620)
c2=>condition: 好主意|rejected
io=>inputoutput: 一起干...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend

### 相关文档

- [vuepress-plugin-flowchart](https://github.com/ulivz/vuepress-plugin-flowchart)
- [vuepress-plugin-flowchart 使用文档](https://flowchart.vuepress.ulivz.com/#usage)

## vuepress-plugin-demo-code

有时候,在编写一些案例时,想要增加 `vue` ,`react`, `原生js 示例`,截动图比较费时,要是能直接在线运行实现就完美了的

在`vuepress`中提供了类似的插件`vuepress-plugin-demo-code`,直接在`md`中编写,也不用单独的去编写个组件,在`md`中引入的

### 安装配置选项

:::: el-tabs
::: el-tab-pane label=安装

```js
$ npm i -D vuepress-plugin-demo-code
# OR
$ yarn add -D vuepress-plugin-demo-code
```

:::
::: el-tab-pane label=插件配置

```js
module.exports = {
  plugins: ['demo-code'],
};
```

:::
::: el-tab-pane label=插件选项配置

```js
module.exports = {
    plugins: [
        ['demo-code', {
            jsLibs: [
                // umd
                'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
            ],
            cssLibs: [
                'https://unpkg.com/animate.css@3.7.0/animate.min.css',
            ],
            showText: 'show code',
            hideText: 'hide',
            styleStr: 'text-decoration: underline;',
            minHeight: 200,
            onlineBtns: {
                codepen: true,
                jsfiddle: true,
                codesandbox: true,
            },
            codesandbox: {
                deps: { 'lodash': 'latest' },
                json: '',
                query: '',
                embed: '',
            },
            demoCodeMark: 'demo-code',
            copyOptions: { ... },
        }]
    ],
}
```

:::
::::

::: demo
<template>

  <div class="el-button-wrap">
    <el-button type="danger" class="animated shake infinite" @click="onClick"
      >点击我!</el-button
    >
  </div>
</template>

<script>
  export default {
    methods: {
      onClick: () => {
        window.alert('欢迎来到itclanCoder的网站');
      },
    },
  };
</script>
<style>
  .el-button-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

:::

### 相关文档

- [vuepress-plugin-demo-code](https://github.com/BuptStEve/vuepress-plugin-demo-code)
- [vuepress-plugin-demo-code 中文文档](https://buptsteve.github.io/vuepress-plugin-demo-code/zh/example/)

## vuepress-plugin-demo-block

除了上面那个`vuepress-plugin-demo-code`插件能够在`md`中直接写`vue`,`React`组件,还有另外一个插件`vuepress-plugin-demo-block`可以在`md`中直接编写演示示例

:::: el-tabs
::: el-tab-pane label=安装

```

npm i vuepress-plugin-demo-block

```

:::
::: el-tab-pane label=插件配置

```js
// config.js
module.exports = {
  head: [
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' },
    ],
    [
      'script',
      {
        src:
          'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js',
      },
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' },
    ],
  ],
  plugins: ['demo-block'],
};
```

:::

::::

### 相关文档

- [vuepress-plugin-demo-block](https://github.com/xiguaxigua/vuepress-plugin-demo-block)
- [vuepress-plugin-demo-block 文档](https://daxigua.me/vuepress-plugin-demo-block/zh/#%E5%AE%89%E8%A3%85)

## 常见问题

### 在-README-中-添加本地图片不正常显示

在 `md`中引入本地的图片,然后将 md 文件上传到 github 上,发现图片是无法直接显示的
::: details 点击即可查看解决办法
解决此问题,可以引入一些图床,也就是先把图片上传到第三方服务器上,然后在本地的`md`中通过绝对路径 https 的方式引入

- 免费图床服务

  - [picb 免费图床](https://www.picb.cc/)
  - [imgchr 免费图床](https://imgchr.com/)
  - [imgkr-图壳-免费图床](https://imgkr.com/)
  - [PicGo 简易的图床上传工具](https://github.com/Molunerfinn/PicGo/releases)

在`md`中引入图片有**两种方式**

- **方式 1**:`![](imgUrl)`

```
![Image](图片的网络地止)
如:![tI00h0.jpg](https://t1.picb.cc/uploads/2020/06/11/tI00h0.jpg)
```

- **方式 2**:以`img`标签的形式引入:建议以这种方式进入引入,有时候,上面那种方式会出现一些问题

```
<img src="图片网络地止">
如
<img src="https://t1.picb.cc/uploads/2020/06/11/tIpk0j.jpg" width="148" height="148" alt="itclanCoder公众号" border="0">
```

:::

## 表情包

有时候在`md`文档中,或者提交时,是可以插入一些表情包的
::: warning 警告
在自己个人的项目里,可以玩,但是在公司项目里,不要这么玩,表情包玩过了头,还记得阿里曾今那次彩蛋事件么?血的教训
:::

- [表情包链接地址](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

### 使用

在`md`中输入如下格式,注意两边是英文格式下**冒号**

```
:kissing: :heart_eyes:
```

输出
:kissing: :heart_eyes:

::: details 常见表情包集合,点击即可查看

```
{
  "100": "💯",
  "1234": "🔢",
  "grinning": "😀",
  "smiley": "😃",
  "smile": "😄",
  "grin": "😁",
  "laughing": "😆",
  "satisfied": "😆",
  "sweat_smile": "😅",
  "joy": "😂",
  "rofl": "🤣",
  "relaxed": "☺️",
  "blush": "😊",
  "innocent": "😇",
  "slightly_smiling_face": "🙂",
  "upside_down_face": "🙃",
  "wink": "😉",
  "relieved": "😌",
  "heart_eyes": "😍",
  "kissing_heart": "😘",
  "kissing": "😗",
  "kissing_smiling_eyes": "😙",
  "kissing_closed_eyes": "😚",
  "yum": "😋",
  "stuck_out_tongue_winking_eye": "😜",
  "stuck_out_tongue_closed_eyes": "😝",
  "stuck_out_tongue": "😛",
  "money_mouth_face": "🤑",
  "hugs": "🤗",
  "nerd_face": "🤓",
  "sunglasses": "😎",
  "clown_face": "🤡",
  "cowboy_hat_face": "🤠",
  "smirk": "😏",
  "unamused": "😒",
  "disappointed": "😞",
  "pensive": "😔",
  "worried": "😟",
  "confused": "😕",
  "slightly_frowning_face": "🙁",
  "frowning_face": "☹️",
  "persevere": "😣",
  "confounded": "😖",
  "tired_face": "😫",
  "weary": "😩",
  "triumph": "😤",
  "angry": "😠",
  "rage": "😡",
  "pout": "😡",
  "no_mouth": "😶",
  "neutral_face": "😐",
  "expressionless": "😑",
  "hushed": "😯",
  "frowning": "😦",
  "anguished": "😧",
  "open_mouth": "😮",
  "astonished": "😲",
  "dizzy_face": "😵",
  "flushed": "😳",
  "scream": "😱",
  "fearful": "😨",
  "cold_sweat": "😰",
  "cry": "😢",
  "disappointed_relieved": "😥",
  "drooling_face": "🤤",
  "sob": "😭",
  "sweat": "😓",
  "sleepy": "😪",
  "sleeping": "😴",
  "roll_eyes": "🙄",
  "thinking": "🤔",
  "lying_face": "🤥",
  "grimacing": "😬",
  "zipper_mouth_face": "🤐",
  "nauseated_face": "🤢",
  "sneezing_face": "🤧",
  "mask": "😷",
  "face_with_thermometer": "🤒",
  "face_with_head_bandage": "🤕",
  "smiling_imp": "😈",
  "imp": "👿",
  "japanese_ogre": "👹",
  "japanese_goblin": "👺",
  "hankey": "💩",
  "poop": "💩",
  "shit": "💩",
  "ghost": "👻",
  "skull": "💀",
  "skull_and_crossbones": "☠️",
  "alien": "👽",
  "space_invader": "👾",
  "robot": "🤖",
  "jack_o_lantern": "🎃",
  "smiley_cat": "😺",
  "smile_cat": "😸",
  "joy_cat": "😹",
  "heart_eyes_cat": "😻",
  "smirk_cat": "😼",
  "kissing_cat": "😽",
  "scream_cat": "🙀",
  "crying_cat_face": "😿",
  "pouting_cat": "😾",
  "open_hands": "👐",
  "raised_hands": "🙌",
  "clap": "👏",
  "pray": "🙏",
  "handshake": "🤝",
  "+1": "👍",
  "thumbsup": "👍",
  "-1": "👎",
  "thumbsdown": "👎",
  "fist_oncoming": "👊",
  "facepunch": "👊",
  "punch": "👊",
  "fist_raised": "✊",
  "fist": "✊",
  "fist_left": "🤛",
  "fist_right": "🤜",
  "crossed_fingers": "🤞",
  "v": "✌️",
  "metal": "🤘",
  "ok_hand": "👌",
  "point_left": "👈",
  "point_right": "👉",
  "point_up_2": "👆",
  "point_down": "👇",
  "point_up": "☝️",
  "hand": "✋",
  "raised_hand": "✋",
  "raised_back_of_hand": "🤚",
  "raised_hand_with_fingers_splayed": "🖐",
  "vulcan_salute": "🖖",
  "wave": "👋",
  "call_me_hand": "🤙",
  "muscle": "💪",
  "middle_finger": "🖕",
  "fu": "🖕",
  "writing_hand": "✍️",
  "selfie": "🤳",
  "nail_care": "💅",
  "ring": "💍",
  "lipstick": "💄",
  "kiss": "💋",
  "lips": "👄",
  "tongue": "👅",
  "ear": "👂",
  "nose": "👃",
  "footprints": "👣",
  "eye": "👁",
  "eyes": "👀",
  "speaking_head": "🗣",
  "bust_in_silhouette": "👤",
  "busts_in_silhouette": "👥",
  "baby": "👶",
  "boy": "👦",
  "girl": "👧",
  "man": "👨",
  "woman": "👩",
  "blonde_woman": "👱‍♀",
  "blonde_man": "👱",
  "person_with_blond_hair": "👱",
  "older_man": "👴",
  "older_woman": "👵",
  "man_with_gua_pi_mao": "👲",
  "woman_with_turban": "👳‍♀",
  "man_with_turban": "👳",
  "policewoman": "👮‍♀",
  "policeman": "👮",
  "cop": "👮",
  "construction_worker_woman": "👷‍♀",
  "construction_worker_man": "👷",
  "construction_worker": "👷",
  "guardswoman": "💂‍♀",
  "guardsman": "💂",
  "female_detective": "🕵️‍♀️",
  "male_detective": "🕵",
  "detective": "🕵",
  "woman_health_worker": "👩‍⚕",
  "man_health_worker": "👨‍⚕",
  "woman_farmer": "👩‍🌾",
  "man_farmer": "👨‍🌾",
  "woman_cook": "👩‍🍳",
  "man_cook": "👨‍🍳",
  "woman_student": "👩‍🎓",
  "man_student": "👨‍🎓",
  "woman_singer": "👩‍🎤",
  "man_singer": "👨‍🎤",
  "woman_teacher": "👩‍🏫",
  "man_teacher": "👨‍🏫",
  "woman_factory_worker": "👩‍🏭",
  "man_factory_worker": "👨‍🏭",
  "woman_technologist": "👩‍💻",
  "man_technologist": "👨‍💻",
  "woman_office_worker": "👩‍💼",
  "man_office_worker": "👨‍💼",
  "woman_mechanic": "👩‍🔧",
  "man_mechanic": "👨‍🔧",
  "woman_scientist": "👩‍🔬",
  "man_scientist": "👨‍🔬",
  "woman_artist": "👩‍🎨",
  "man_artist": "👨‍🎨",
  "woman_firefighter": "👩‍🚒",
  "man_firefighter": "👨‍🚒",
  "woman_pilot": "👩‍✈",
  "man_pilot": "👨‍✈",
  "woman_astronaut": "👩‍🚀",
  "man_astronaut": "👨‍🚀",
  "woman_judge": "👩‍⚖",
  "man_judge": "👨‍⚖",
  "mrs_claus": "🤶",
  "santa": "🎅",
  "princess": "👸",
  "prince": "🤴",
  "bride_with_veil": "👰",
  "man_in_tuxedo": "🤵",
  "angel": "👼",
  "pregnant_woman": "🤰",
  "bowing_woman": "🙇‍♀",
  "bowing_man": "🙇",
  "bow": "🙇",
  "tipping_hand_woman": "💁",
  "information_desk_person": "💁",
  "sassy_woman": "💁",
  "tipping_hand_man": "💁‍♂",
  "sassy_man": "💁‍♂",
  "no_good_woman": "🙅",
  "no_good": "🙅",
  "ng_woman": "🙅",
  "no_good_man": "🙅‍♂",
  "ng_man": "🙅‍♂",
  "ok_woman": "🙆",
  "ok_man": "🙆‍♂",
  "raising_hand_woman": "🙋",
  "raising_hand": "🙋",
  "raising_hand_man": "🙋‍♂",
  "woman_facepalming": "🤦‍♀",
  "man_facepalming": "🤦‍♂",
  "woman_shrugging": "🤷‍♀",
  "man_shrugging": "🤷‍♂",
  "pouting_woman": "🙎",
  "person_with_pouting_face": "🙎",
  "pouting_man": "🙎‍♂",
  "frowning_woman": "🙍",
  "person_frowning": "🙍",
  "frowning_man": "🙍‍♂",
  "haircut_woman": "💇",
  "haircut": "💇",
  "haircut_man": "💇‍♂",
  "massage_woman": "💆",
  "massage": "💆",
  "massage_man": "💆‍♂",
  "business_suit_levitating": "🕴",
  "dancer": "💃",
  "man_dancing": "🕺",
  "dancing_women": "👯",
  "dancers": "👯",
  "dancing_men": "👯‍♂",
  "walking_woman": "🚶‍♀",
  "walking_man": "🚶",
  "walking": "🚶",
  "running_woman": "🏃‍♀",
  "running_man": "🏃",
  "runner": "🏃",
  "running": "🏃",
  "couple": "👫",
  "two_women_holding_hands": "👭",
  "two_men_holding_hands": "👬",
  "couple_with_heart_woman_man": "💑",
  "couple_with_heart": "💑",
  "couple_with_heart_woman_woman": "👩‍❤️‍👩",
  "couple_with_heart_man_man": "👨‍❤️‍👨",
  "couplekiss_man_woman": "💏",
  "couplekiss_woman_woman": "👩‍❤️‍💋‍👩",
  "couplekiss_man_man": "👨‍❤️‍💋‍👨",
  "family_man_woman_boy": "👪",
  "family": "👪",
  "family_man_woman_girl": "👨‍👩‍👧",
  "family_man_woman_girl_boy": "👨‍👩‍👧‍👦",
  "family_man_woman_boy_boy": "👨‍👩‍👦‍👦",
  "family_man_woman_girl_girl": "👨‍👩‍👧‍👧",
  "family_woman_woman_boy": "👩‍👩‍👦",
  "family_woman_woman_girl": "👩‍👩‍👧",
  "family_woman_woman_girl_boy": "👩‍👩‍👧‍👦",
  "family_woman_woman_boy_boy": "👩‍👩‍👦‍👦",
  "family_woman_woman_girl_girl": "👩‍👩‍👧‍👧",
  "family_man_man_boy": "👨‍👨‍👦",
  "family_man_man_girl": "👨‍👨‍👧",
  "family_man_man_girl_boy": "👨‍👨‍👧‍👦",
  "family_man_man_boy_boy": "👨‍👨‍👦‍👦",
  "family_man_man_girl_girl": "👨‍👨‍👧‍👧",
  "family_woman_boy": "👩‍👦",
  "family_woman_girl": "👩‍👧",
  "family_woman_girl_boy": "👩‍👧‍👦",
  "family_woman_boy_boy": "👩‍👦‍👦",
  "family_woman_girl_girl": "👩‍👧‍👧",
  "family_man_boy": "👨‍👦",
  "family_man_girl": "👨‍👧",
  "family_man_girl_boy": "👨‍👧‍👦",
  "family_man_boy_boy": "👨‍👦‍👦",
  "family_man_girl_girl": "👨‍👧‍👧",
  "womans_clothes": "👚",
  "shirt": "👕",
  "tshirt": "👕",
  "jeans": "👖",
  "necktie": "👔",
  "dress": "👗",
  "bikini": "👙",
  "kimono": "👘",
  "high_heel": "👠",
  "sandal": "👡",
  "boot": "👢",
  "mans_shoe": "👞",
  "shoe": "👞",
  "athletic_shoe": "👟",
  "womans_hat": "👒",
  "tophat": "🎩",
  "mortar_board": "🎓",
  "crown": "👑",
  "rescue_worker_helmet": "⛑",
  "school_satchel": "🎒",
  "pouch": "👝",
  "purse": "👛",
  "handbag": "👜",
  "briefcase": "💼",
  "eyeglasses": "👓",
  "dark_sunglasses": "🕶",
  "closed_umbrella": "🌂",
  "open_umbrella": "☂️",
  "dog": "🐶",
  "cat": "🐱",
  "mouse": "🐭",
  "hamster": "🐹",
  "rabbit": "🐰",
  "fox_face": "🦊",
  "bear": "🐻",
  "panda_face": "🐼",
  "koala": "🐨",
  "tiger": "🐯",
  "lion": "🦁",
  "cow": "🐮",
  "pig": "🐷",
  "pig_nose": "🐽",
  "frog": "🐸",
  "monkey_face": "🐵",
  "see_no_evil": "🙈",
  "hear_no_evil": "🙉",
  "speak_no_evil": "🙊",
  "monkey": "🐒",
  "chicken": "🐔",
  "penguin": "🐧",
  "bird": "🐦",
  "baby_chick": "🐤",
  "hatching_chick": "🐣",
  "hatched_chick": "🐥",
  "duck": "🦆",
  "eagle": "🦅",
  "owl": "🦉",
  "bat": "🦇",
  "wolf": "🐺",
  "boar": "🐗",
  "horse": "🐴",
  "unicorn": "🦄",
  "bee": "🐝",
  "honeybee": "🐝",
  "bug": "🐛",
  "butterfly": "🦋",
  "snail": "🐌",
  "shell": "🐚",
  "beetle": "🐞",
  "ant": "🐜",
  "spider": "🕷",
  "spider_web": "🕸",
  "turtle": "🐢",
  "snake": "🐍",
  "lizard": "🦎",
  "scorpion": "🦂",
  "crab": "🦀",
  "squid": "🦑",
  "octopus": "🐙",
  "shrimp": "🦐",
  "tropical_fish": "🐠",
  "fish": "🐟",
  "blowfish": "🐡",
  "dolphin": "🐬",
  "flipper": "🐬",
  "shark": "🦈",
  "whale": "🐳",
  "whale2": "🐋",
  "crocodile": "🐊",
  "leopard": "🐆",
  "tiger2": "🐅",
  "water_buffalo": "🐃",
  "ox": "🐂",
  "cow2": "🐄",
  "deer": "🦌",
  "dromedary_camel": "🐪",
  "camel": "🐫",
  "elephant": "🐘",
  "rhinoceros": "🦏",
  "gorilla": "🦍",
  "racehorse": "🐎",
  "pig2": "🐖",
  "goat": "🐐",
  "ram": "🐏",
  "sheep": "🐑",
  "dog2": "🐕",
  "poodle": "🐩",
  "cat2": "🐈",
  "rooster": "🐓",
  "turkey": "🦃",
  "dove": "🕊",
  "rabbit2": "🐇",
  "mouse2": "🐁",
  "rat": "🐀",
  "chipmunk": "🐿",
  "feet": "🐾",
  "paw_prints": "🐾",
  "dragon": "🐉",
  "dragon_face": "🐲",
  "cactus": "🌵",
  "christmas_tree": "🎄",
  "evergreen_tree": "🌲",
  "deciduous_tree": "🌳",
  "palm_tree": "🌴",
  "seedling": "🌱",
  "herb": "🌿",
  "shamrock": "☘️",
  "four_leaf_clover": "🍀",
  "bamboo": "🎍",
  "tanabata_tree": "🎋",
  "leaves": "🍃",
  "fallen_leaf": "🍂",
  "maple_leaf": "🍁",
  "mushroom": "🍄",
  "ear_of_rice": "🌾",
  "bouquet": "💐",
  "tulip": "🌷",
  "rose": "🌹",
  "wilted_flower": "🥀",
  "sunflower": "🌻",
  "blossom": "🌼",
  "cherry_blossom": "🌸",
  "hibiscus": "🌺",
  "earth_americas": "🌎",
  "earth_africa": "🌍",
  "earth_asia": "🌏",
  "full_moon": "🌕",
  "waning_gibbous_moon": "🌖",
  "last_quarter_moon": "🌗",
  "waning_crescent_moon": "🌘",
  "new_moon": "🌑",
  "waxing_crescent_moon": "🌒",
  "first_quarter_moon": "🌓",
  "moon": "🌔",
  "waxing_gibbous_moon": "🌔",
  "new_moon_with_face": "🌚",
  "full_moon_with_face": "🌝",
  "sun_with_face": "🌞",
  "first_quarter_moon_with_face": "🌛",
  "last_quarter_moon_with_face": "🌜",
  "crescent_moon": "🌙",
  "dizzy": "💫",
  "star": "⭐️",
  "star2": "🌟",
  "sparkles": "✨",
  "zap": "⚡️",
  "fire": "🔥",
  "boom": "💥",
  "collision": "💥",
  "comet": "☄",
  "sunny": "☀️",
  "sun_behind_small_cloud": "🌤",
  "partly_sunny": "⛅️",
  "sun_behind_large_cloud": "🌥",
  "sun_behind_rain_cloud": "🌦",
  "rainbow": "🌈",
  "cloud": "☁️",
  "cloud_with_rain": "🌧",
  "cloud_with_lightning_and_rain": "⛈",
  "cloud_with_lightning": "🌩",
  "cloud_with_snow": "🌨",
  "snowman_with_snow": "☃️",
  "snowman": "⛄️",
  "snowflake": "❄️",
  "wind_face": "🌬",
  "dash": "💨",
  "tornado": "🌪",
  "fog": "🌫",
  "ocean": "🌊",
  "droplet": "💧",
  "sweat_drops": "💦",
  "umbrella": "☔️",
  "green_apple": "🍏",
  "apple": "🍎",
  "pear": "🍐",
  "tangerine": "🍊",
  "orange": "🍊",
  "mandarin": "🍊",
  "lemon": "🍋",
  "banana": "🍌",
  "watermelon": "🍉",
  "grapes": "🍇",
  "strawberry": "🍓",
  "melon": "🍈",
  "cherries": "🍒",
  "peach": "🍑",
  "pineapple": "🍍",
  "kiwi_fruit": "🥝",
  "avocado": "🥑",
  "tomato": "🍅",
  "eggplant": "🍆",
  "cucumber": "🥒",
  "carrot": "🥕",
  "corn": "🌽",
  "hot_pepper": "🌶",
  "potato": "🥔",
  "sweet_potato": "🍠",
  "chestnut": "🌰",
  "peanuts": "🥜",
  "honey_pot": "🍯",
  "croissant": "🥐",
  "bread": "🍞",
  "baguette_bread": "🥖",
  "cheese": "🧀",
  "egg": "🥚",
  "fried_egg": "🍳",
  "bacon": "🥓",
  "pancakes": "🥞",
  "fried_shrimp": "🍤",
  "poultry_leg": "🍗",
  "meat_on_bone": "🍖",
  "pizza": "🍕",
  "hotdog": "🌭",
  "hamburger": "🍔",
  "fries": "🍟",
  "stuffed_flatbread": "🥙",
  "taco": "🌮",
  "burrito": "🌯",
  "green_salad": "🥗",
  "shallow_pan_of_food": "🥘",
  "spaghetti": "🍝",
  "ramen": "🍜",
  "stew": "🍲",
  "fish_cake": "🍥",
  "sushi": "🍣",
  "bento": "🍱",
  "curry": "🍛",
  "rice": "🍚",
  "rice_ball": "🍙",
  "rice_cracker": "🍘",
  "oden": "🍢",
  "dango": "🍡",
  "shaved_ice": "🍧",
  "ice_cream": "🍨",
  "icecream": "🍦",
  "cake": "🍰",
  "birthday": "🎂",
  "custard": "🍮",
  "lollipop": "🍭",
  "candy": "🍬",
  "chocolate_bar": "🍫",
  "popcorn": "🍿",
  "doughnut": "🍩",
  "cookie": "🍪",
  "milk_glass": "🥛",
  "baby_bottle": "🍼",
  "coffee": "☕️",
  "tea": "🍵",
  "sake": "🍶",
  "beer": "🍺",
  "beers": "🍻",
  "clinking_glasses": "🥂",
  "wine_glass": "🍷",
  "tumbler_glass": "🥃",
  "cocktail": "🍸",
  "tropical_drink": "🍹",
  "champagne": "🍾",
  "spoon": "🥄",
  "fork_and_knife": "🍴",
  "plate_with_cutlery": "🍽",
  "soccer": "⚽️",
  "basketball": "🏀",
  "football": "🏈",
  "baseball": "⚾️",
  "tennis": "🎾",
  "volleyball": "🏐",
  "rugby_football": "🏉",
  "8ball": "🎱",
  "ping_pong": "🏓",
  "badminton": "🏸",
  "goal_net": "🥅",
  "ice_hockey": "🏒",
  "field_hockey": "🏑",
  "cricket": "🏏",
  "golf": "⛳️",
  "bow_and_arrow": "🏹",
  "fishing_pole_and_fish": "🎣",
  "boxing_glove": "🥊",
  "martial_arts_uniform": "🥋",
  "ice_skate": "⛸",
  "ski": "🎿",
  "skier": "⛷",
  "snowboarder": "🏂",
  "weight_lifting_woman": "🏋️‍♀️",
  "weight_lifting_man": "🏋",
  "person_fencing": "🤺",
  "women_wrestling": "🤼‍♀",
  "men_wrestling": "🤼‍♂",
  "woman_cartwheeling": "🤸‍♀",
  "man_cartwheeling": "🤸‍♂",
  "basketball_woman": "⛹️‍♀️",
  "basketball_man": "⛹",
  "woman_playing_handball": "🤾‍♀",
  "man_playing_handball": "🤾‍♂",
  "golfing_woman": "🏌️‍♀️",
  "golfing_man": "🏌",
  "surfing_woman": "🏄‍♀",
  "surfing_man": "🏄",
  "surfer": "🏄",
  "swimming_woman": "🏊‍♀",
  "swimming_man": "🏊",
  "swimmer": "🏊",
  "woman_playing_water_polo": "🤽‍♀",
  "man_playing_water_polo": "🤽‍♂",
  "rowing_woman": "🚣‍♀",
  "rowing_man": "🚣",
  "rowboat": "🚣",
  "horse_racing": "🏇",
  "biking_woman": "🚴‍♀",
  "biking_man": "🚴",
  "bicyclist": "🚴",
  "mountain_biking_woman": "🚵‍♀",
  "mountain_biking_man": "🚵",
  "mountain_bicyclist": "🚵",
  "running_shirt_with_sash": "🎽",
  "medal_sports": "🏅",
  "medal_military": "🎖",
  "1st_place_medal": "🥇",
  "2nd_place_medal": "🥈",
  "3rd_place_medal": "🥉",
  "trophy": "🏆",
  "rosette": "🏵",
  "reminder_ribbon": "🎗",
  "ticket": "🎫",
  "tickets": "🎟",
  "circus_tent": "🎪",
  "woman_juggling": "🤹‍♀",
  "man_juggling": "🤹‍♂",
  "performing_arts": "🎭",
  "art": "🎨",
  "clapper": "🎬",
  "microphone": "🎤",
  "headphones": "🎧",
  "musical_score": "🎼",
  "musical_keyboard": "🎹",
  "drum": "🥁",
  "saxophone": "🎷",
  "trumpet": "🎺",
  "guitar": "🎸",
  "violin": "🎻",
  "game_die": "🎲",
  "dart": "🎯",
  "bowling": "🎳",
  "video_game": "🎮",
  "slot_machine": "🎰",
  "car": "🚗",
  "red_car": "🚗",
  "taxi": "🚕",
  "blue_car": "🚙",
  "bus": "🚌",
  "trolleybus": "🚎",
  "racing_car": "🏎",
  "police_car": "🚓",
  "ambulance": "🚑",
  "fire_engine": "🚒",
  "minibus": "🚐",
  "truck": "🚚",
  "articulated_lorry": "🚛",
  "tractor": "🚜",
  "kick_scooter": "🛴",
  "bike": "🚲",
  "motor_scooter": "🛵",
  "motorcycle": "🏍",
  "rotating_light": "🚨",
  "oncoming_police_car": "🚔",
  "oncoming_bus": "🚍",
  "oncoming_automobile": "🚘",
  "oncoming_taxi": "🚖",
  "aerial_tramway": "🚡",
  "mountain_cableway": "🚠",
  "suspension_railway": "🚟",
  "railway_car": "🚃",
  "train": "🚋",
  "mountain_railway": "🚞",
  "monorail": "🚝",
  "bullettrain_side": "🚄",
  "bullettrain_front": "🚅",
  "light_rail": "🚈",
  "steam_locomotive": "🚂",
  "train2": "🚆",
  "metro": "🚇",
  "tram": "🚊",
  "station": "🚉",
  "helicopter": "🚁",
  "small_airplane": "🛩",
  "airplane": "✈️",
  "flight_departure": "🛫",
  "flight_arrival": "🛬",
  "rocket": "🚀",
  "artificial_satellite": "🛰",
  "seat": "💺",
  "canoe": "🛶",
  "boat": "⛵️",
  "sailboat": "⛵️",
  "motor_boat": "🛥",
  "speedboat": "🚤",
  "passenger_ship": "🛳",
  "ferry": "⛴",
  "ship": "🚢",
  "anchor": "⚓️",
  "construction": "🚧",
  "fuelpump": "⛽️",
  "busstop": "🚏",
  "vertical_traffic_light": "🚦",
  "traffic_light": "🚥",
  "world_map": "🗺",
  "moyai": "🗿",
  "statue_of_liberty": "🗽",
  "fountain": "⛲️",
  "tokyo_tower": "🗼",
  "european_castle": "🏰",
  "japanese_castle": "🏯",
  "stadium": "🏟",
  "ferris_wheel": "🎡",
  "roller_coaster": "🎢",
  "carousel_horse": "🎠",
  "parasol_on_ground": "⛱",
  "beach_umbrella": "🏖",
  "desert_island": "🏝",
  "mountain": "⛰",
  "mountain_snow": "🏔",
  "mount_fuji": "🗻",
  "volcano": "🌋",
  "desert": "🏜",
  "camping": "🏕",
  "tent": "⛺️",
  "railway_track": "🛤",
  "motorway": "🛣",
  "building_construction": "🏗",
  "factory": "🏭",
  "house": "🏠",
  "house_with_garden": "🏡",
  "houses": "🏘",
  "derelict_house": "🏚",
  "office": "🏢",
  "department_store": "🏬",
  "post_office": "🏣",
  "european_post_office": "🏤",
  "hospital": "🏥",
  "bank": "🏦",
  "hotel": "🏨",
  "convenience_store": "🏪",
  "school": "🏫",
  "love_hotel": "🏩",
  "wedding": "💒",
  "classical_building": "🏛",
  "church": "⛪️",
  "mosque": "🕌",
  "synagogue": "🕍",
  "kaaba": "🕋",
  "shinto_shrine": "⛩",
  "japan": "🗾",
  "rice_scene": "🎑",
  "national_park": "🏞",
  "sunrise": "🌅",
  "sunrise_over_mountains": "🌄",
  "stars": "🌠",
  "sparkler": "🎇",
  "fireworks": "🎆",
  "city_sunrise": "🌇",
  "city_sunset": "🌆",
  "cityscape": "🏙",
  "night_with_stars": "🌃",
  "milky_way": "🌌",
  "bridge_at_night": "🌉",
  "foggy": "🌁",
  "watch": "⌚️",
  "iphone": "📱",
  "calling": "📲",
  "computer": "💻",
  "keyboard": "⌨️",
  "desktop_computer": "🖥",
  "printer": "🖨",
  "computer_mouse": "🖱",
  "trackball": "🖲",
  "joystick": "🕹",
  "clamp": "🗜",
  "minidisc": "💽",
  "floppy_disk": "💾",
  "cd": "💿",
  "dvd": "📀",
  "vhs": "📼",
  "camera": "📷",
  "camera_flash": "📸",
  "video_camera": "📹",
  "movie_camera": "🎥",
  "film_projector": "📽",
  "film_strip": "🎞",
  "telephone_receiver": "📞",
  "phone": "☎️",
  "telephone": "☎️",
  "pager": "📟",
  "fax": "📠",
  "tv": "📺",
  "radio": "📻",
  "studio_microphone": "🎙",
  "level_slider": "🎚",
  "control_knobs": "🎛",
  "stopwatch": "⏱",
  "timer_clock": "⏲",
  "alarm_clock": "⏰",
  "mantelpiece_clock": "🕰",
  "hourglass": "⌛️",
  "hourglass_flowing_sand": "⏳",
  "satellite": "📡",
  "battery": "🔋",
  "electric_plug": "🔌",
  "bulb": "💡",
  "flashlight": "🔦",
  "candle": "🕯",
  "wastebasket": "🗑",
  "oil_drum": "🛢",
  "money_with_wings": "💸",
  "dollar": "💵",
  "yen": "💴",
  "euro": "💶",
  "pound": "💷",
  "moneybag": "💰",
  "credit_card": "💳",
  "gem": "💎",
  "balance_scale": "⚖️",
  "wrench": "🔧",
  "hammer": "🔨",
  "hammer_and_pick": "⚒",
  "hammer_and_wrench": "🛠",
  "pick": "⛏",
  "nut_and_bolt": "🔩",
  "gear": "⚙️",
  "chains": "⛓",
  "gun": "🔫",
  "bomb": "💣",
  "hocho": "🔪",
  "knife": "🔪",
  "dagger": "🗡",
  "crossed_swords": "⚔️",
  "shield": "🛡",
  "smoking": "🚬",
  "coffin": "⚰️",
  "funeral_urn": "⚱️",
  "amphora": "🏺",
  "crystal_ball": "🔮",
  "prayer_beads": "📿",
  "barber": "💈",
  "alembic": "⚗️",
  "telescope": "🔭",
  "microscope": "🔬",
  "hole": "🕳",
  "pill": "💊",
  "syringe": "💉",
  "thermometer": "🌡",
  "toilet": "🚽",
  "potable_water": "🚰",
  "shower": "🚿",
  "bathtub": "🛁",
  "bath": "🛀",
  "bellhop_bell": "🛎",
  "key": "🔑",
  "old_key": "🗝",
  "door": "🚪",
  "couch_and_lamp": "🛋",
  "bed": "🛏",
  "sleeping_bed": "🛌",
  "framed_picture": "🖼",
  "shopping": "🛍",
  "shopping_cart": "🛒",
  "gift": "🎁",
  "balloon": "🎈",
  "flags": "🎏",
  "ribbon": "🎀",
  "confetti_ball": "🎊",
  "tada": "🎉",
  "dolls": "🎎",
  "izakaya_lantern": "🏮",
  "lantern": "🏮",
  "wind_chime": "🎐",
  "email": "✉️",
  "envelope": "✉️",
  "envelope_with_arrow": "📩",
  "incoming_envelope": "📨",
  "e-mail": "📧",
  "love_letter": "💌",
  "inbox_tray": "📥",
  "outbox_tray": "📤",
  "package": "📦",
  "label": "🏷",
  "mailbox_closed": "📪",
  "mailbox": "📫",
  "mailbox_with_mail": "📬",
  "mailbox_with_no_mail": "📭",
  "postbox": "📮",
  "postal_horn": "📯",
  "scroll": "📜",
  "page_with_curl": "📃",
  "page_facing_up": "📄",
  "bookmark_tabs": "📑",
  "bar_chart": "📊",
  "chart_with_upwards_trend": "📈",
  "chart_with_downwards_trend": "📉",
  "spiral_notepad": "🗒",
  "spiral_calendar": "🗓",
  "calendar": "📆",
  "date": "📅",
  "card_index": "📇",
  "card_file_box": "🗃",
  "ballot_box": "🗳",
  "file_cabinet": "🗄",
  "clipboard": "📋",
  "file_folder": "📁",
  "open_file_folder": "📂",
  "card_index_dividers": "🗂",
  "newspaper_roll": "🗞",
  "newspaper": "📰",
  "notebook": "📓",
  "notebook_with_decorative_cover": "📔",
  "ledger": "📒",
  "closed_book": "📕",
  "green_book": "📗",
  "blue_book": "📘",
  "orange_book": "📙",
  "books": "📚",
  "book": "📖",
  "open_book": "📖",
  "bookmark": "🔖",
  "link": "🔗",
  "paperclip": "📎",
  "paperclips": "🖇",
  "triangular_ruler": "📐",
  "straight_ruler": "📏",
  "pushpin": "📌",
  "round_pushpin": "📍",
  "scissors": "✂️",
  "pen": "🖊",
  "fountain_pen": "🖋",
  "black_nib": "✒️",
  "paintbrush": "🖌",
  "crayon": "🖍",
  "memo": "📝",
  "pencil": "📝",
  "pencil2": "✏️",
  "mag": "🔍",
  "mag_right": "🔎",
  "lock_with_ink_pen": "🔏",
  "closed_lock_with_key": "🔐",
  "lock": "🔒",
  "unlock": "🔓",
  "heart": "❤️",
  "yellow_heart": "💛",
  "green_heart": "💚",
  "blue_heart": "💙",
  "purple_heart": "💜",
  "black_heart": "🖤",
  "broken_heart": "💔",
  "heavy_heart_exclamation": "❣️",
  "two_hearts": "💕",
  "revolving_hearts": "💞",
  "heartbeat": "💓",
  "heartpulse": "💗",
  "sparkling_heart": "💖",
  "cupid": "💘",
  "gift_heart": "💝",
  "heart_decoration": "💟",
  "peace_symbol": "☮️",
  "latin_cross": "✝️",
  "star_and_crescent": "☪️",
  "om": "🕉",
  "wheel_of_dharma": "☸️",
  "star_of_david": "✡️",
  "six_pointed_star": "🔯",
  "menorah": "🕎",
  "yin_yang": "☯️",
  "orthodox_cross": "☦️",
  "place_of_worship": "🛐",
  "ophiuchus": "⛎",
  "aries": "♈️",
  "taurus": "♉️",
  "gemini": "♊️",
  "cancer": "♋️",
  "leo": "♌️",
  "virgo": "♍️",
  "libra": "♎️",
  "scorpius": "♏️",
  "sagittarius": "♐️",
  "capricorn": "♑️",
  "aquarius": "♒️",
  "pisces": "♓️",
  "id": "🆔",
  "atom_symbol": "⚛️",
  "accept": "🉑",
  "radioactive": "☢️",
  "biohazard": "☣️",
  "mobile_phone_off": "📴",
  "vibration_mode": "📳",
  "eight_pointed_black_star": "✴️",
  "vs": "🆚",
  "white_flower": "💮",
  "ideograph_advantage": "🉐",
  "secret": "㊙️",
  "congratulations": "㊗️",
  "u6e80": "🈵",
  "a": "🅰️",
  "b": "🅱️",
  "ab": "🆎",
  "cl": "🆑",
  "o2": "🅾️",
  "sos": "🆘",
  "x": "❌",
  "o": "⭕️",
  "stop_sign": "🛑",
  "no_entry": "⛔️",
  "name_badge": "📛",
  "no_entry_sign": "🚫",
  "anger": "💢",
  "hotsprings": "♨️",
  "no_pedestrians": "🚷",
  "do_not_litter": "🚯",
  "no_bicycles": "🚳",
  "non-potable_water": "🚱",
  "underage": "🔞",
  "no_mobile_phones": "📵",
  "no_smoking": "🚭",
  "exclamation": "❗️",
  "heavy_exclamation_mark": "❗️",
  "grey_exclamation": "❕",
  "question": "❓",
  "grey_question": "❔",
  "bangbang": "‼️",
  "interrobang": "⁉️",
  "low_brightness": "🔅",
  "high_brightness": "🔆",
  "part_alternation_mark": "〽️",
  "warning": "⚠️",
  "children_crossing": "🚸",
  "trident": "🔱",
  "fleur_de_lis": "⚜️",
  "beginner": "🔰",
  "recycle": "♻️",
  "white_check_mark": "✅",
  "chart": "💹",
  "sparkle": "❇️",
  "eight_spoked_asterisk": "✳️",
  "negative_squared_cross_mark": "❎",
  "globe_with_meridians": "🌐",
  "diamond_shape_with_a_dot_inside": "💠",
  "m": "Ⓜ️",
  "cyclone": "🌀",
  "zzz": "💤",
  "atm": "🏧",
  "wc": "🚾",
  "wheelchair": "♿️",
  "parking": "🅿️",
  "sa": "🈂️",
  "passport_control": "🛂",
  "customs": "🛃",
  "baggage_claim": "🛄",
  "left_luggage": "🛅",
  "mens": "🚹",
  "womens": "🚺",
  "baby_symbol": "🚼",
  "restroom": "🚻",
  "put_litter_in_its_place": "🚮",
  "cinema": "🎦",
  "signal_strength": "📶",
  "koko": "🈁",
  "symbols": "🔣",
  "information_source": "ℹ️",
  "abc": "🔤",
  "abcd": "🔡",
  "capital_abcd": "🔠",
  "ng": "🆖",
  "ok": "🆗",
  "up": "🆙",
  "cool": "🆒",
  "new": "🆕",
  "free": "🆓",
  "zero": "0️⃣",
  "one": "1️⃣",
  "two": "2️⃣",
  "three": "3️⃣",
  "four": "4️⃣",
  "five": "5️⃣",
  "six": "6️⃣",
  "seven": "7️⃣",
  "eight": "8️⃣",
  "nine": "9️⃣",
  "keycap_ten": "🔟",
  "hash": "#️⃣",
  "asterisk": "*️⃣",
  "arrow_forward": "▶️",
  "pause_button": "⏸",
  "play_or_pause_button": "⏯",
  "stop_button": "⏹",
  "record_button": "⏺",
  "next_track_button": "⏭",
  "previous_track_button": "⏮",
  "fast_forward": "⏩",
  "rewind": "⏪",
  "arrow_double_up": "⏫",
  "arrow_double_down": "⏬",
  "arrow_backward": "◀️",
  "arrow_up_small": "🔼",
  "arrow_down_small": "🔽",
  "arrow_right": "➡️",
  "arrow_left": "⬅️",
  "arrow_up": "⬆️",
  "arrow_down": "⬇️",
  "arrow_upper_right": "↗️",
  "arrow_lower_right": "↘️",
  "arrow_lower_left": "↙️",
  "arrow_upper_left": "↖️",
  "arrow_up_down": "↕️",
  "left_right_arrow": "↔️",
  "arrow_right_hook": "↪️",
  "leftwards_arrow_with_hook": "↩️",
  "arrow_heading_up": "⤴️",
  "arrow_heading_down": "⤵️",
  "twisted_rightwards_arrows": "🔀",
  "repeat": "🔁",
  "repeat_one": "🔂",
  "arrows_counterclockwise": "🔄",
  "arrows_clockwise": "🔃",
  "musical_note": "🎵",
  "notes": "🎶",
  "heavy_plus_sign": "➕",
  "heavy_minus_sign": "➖",
  "heavy_division_sign": "➗",
  "heavy_multiplication_x": "✖️",
  "heavy_dollar_sign": "💲",
  "currency_exchange": "💱",
  "tm": "™️",
  "copyright": "©️",
  "registered": "®️",
  "wavy_dash": "〰️",
  "curly_loop": "➰",
  "loop": "➿",
  "end": "🔚",
  "back": "🔙",
  "on": "🔛",
  "top": "🔝",
  "soon": "🔜",
  "heavy_check_mark": "✔️",
  "ballot_box_with_check": "☑️",
  "radio_button": "🔘",
  "white_circle": "⚪️",
  "black_circle": "⚫️",
  "red_circle": "🔴",
  "large_blue_circle": "🔵",
  "small_red_triangle": "🔺",
  "small_red_triangle_down": "🔻",
  "small_orange_diamond": "🔸",
  "small_blue_diamond": "🔹",
  "large_orange_diamond": "🔶",
  "large_blue_diamond": "🔷",
  "white_square_button": "🔳",
  "black_square_button": "🔲",
  "black_small_square": "▪️",
  "white_small_square": "▫️",
  "black_medium_small_square": "◾️",
  "white_medium_small_square": "◽️",
  "black_medium_square": "◼️",
  "white_medium_square": "◻️",
  "black_large_square": "⬛️",
  "white_large_square": "⬜️",
  "speaker": "🔈",
  "mute": "🔇",
  "sound": "🔉",
  "loud_sound": "🔊",
  "bell": "🔔",
  "no_bell": "🔕",
  "mega": "📣",
  "loudspeaker": "📢",
  "eye_speech_bubble": "👁‍🗨",
  "speech_balloon": "💬",
  "thought_balloon": "💭",
  "right_anger_bubble": "🗯",
  "spades": "♠️",
  "clubs": "♣️",
  "hearts": "♥️",
  "diamonds": "♦️",
  "black_joker": "🃏",
  "flower_playing_cards": "🎴",
  "mahjong": "🀄️",
  "clock1": "🕐",
  "clock2": "🕑",
  "clock3": "🕒",
  "clock4": "🕓",
  "clock5": "🕔",
  "clock6": "🕕",
  "clock7": "🕖",
  "clock8": "🕗",
  "clock9": "🕘",
  "clock10": "🕙",
  "clock11": "🕚",
  "clock12": "🕛",
  "clock130": "🕜",
  "clock230": "🕝",
  "clock330": "🕞",
  "clock430": "🕟",
  "clock530": "🕠",
  "clock630": "🕡",
  "clock730": "🕢",
  "clock830": "🕣",
  "clock930": "🕤",
  "clock1030": "🕥",
  "clock1130": "🕦",
  "clock1230": "🕧",
  "white_flag": "🏳️",
  "black_flag": "🏴",
  "checkered_flag": "🏁",
  "triangular_flag_on_post": "🚩",
  "rainbow_flag": "🏳️‍🌈"
}

```

:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>

<footer-FeedBack />
<footer-AvoidCopy />