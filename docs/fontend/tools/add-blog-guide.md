---
title: 如何在 vuepress 上添加博客导流到公众号-即输入验证码解锁全站文章
---

## 如何在 vuepress 上添加博客导流到公众号-即输入验证码解锁全站文章

## 快速导航

<TOC />

## 前言

如今,打开一些网站,发现阅读文章前,先要关注公众号,获取验证码,才能解锁文章,这波操作虽然有点“流氓”,但是白嫖的适当付出一点也没有什么,毕竟写文章输出是真的费时间,尊重作者的劳动成果.况且赏杯咖啡,我觉得也是一种激励.

不信,自己去践行下就知道了的

在互联网时代,有流量,一切皆有可能,在如今竞争激烈的情况下,尽管微信公众号阅读量日渐下滑,但不得不承认,它仍然是一个非常强劲有生命力的产品,其价值重视程度不言而喻,凡是离用户有多近的东西都值得深耕细作

现如今一些自媒体大佬,很多在公众号里赚了不少,论当今自媒体平台,公众号的商业价值是最大的,很少有听到抖音,快手等独立的个体融资的,但公众号就有,依靠它活得洒脱,而凭借它实现融资的还真不少. 自己不行,不代表别人也不行,贫穷会限制想象.

今天跟大家分享一下在`vuepress`中怎么进行配置实现导流到公众号,实现自动增粉,让每一个阅读产生价值,与用户做朋友,从此在也不用互推了的,只需专心做好内容创作.

至于`Hexo`,`wordpress`网上一搜也能搜到,`npm`仓库也有相对应的包,可自行查阅

## 视频链接

如果您觉得读文章理解起来有些难度,希望以下视频能给你带来一些帮助

⒈ [视频讲解-vuepress 解锁文章-引流到公众号-添加博客导流工具引言(前)](https://www.zhihu.com/zvideo/1312527959053000704)

⒉ [视频讲解-vuepress 添加博客导流工具-添加博客设置(上)](https://www.zhihu.com/zvideo/1312526313929437184)

⒊ [视频讲解-vuepress 添加博客导流工具-实现单篇文章隐藏与整站文章隐藏(中)](https://www.zhihu.com/zvideo/1312526506603184128)

⒋ [视频讲解-vuepress 添加博客导流工具-可能会遇到的一些问题-结束(下)](https://www.zhihu.com/zvideo/1312526793459286016)

⒌ [视频讲解-B 站 itclanCoder-Up 主-不定期更新获取新技能](https://space.bilibili.com/267957620)

:::: el-collapse
::: el-collapse-item title="1-添加博客 readmore 导流工具引言"
<template>

<div>
    <iframe src="//player.bilibili.com/player.html?aid=585316174&bvid=BV1qz4y1y71H&cid=257271363&page=1" scrolling="no" border="0" width="100%" height="320" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
 </div>
</template>
:::
::: el-collapse-item title="2-添加博客设置(上)"
<template>
<div>
    <iframe src="//player.bilibili.com/player.html?aid=797764232&bvid=BV1Dy4y1z7Qt&cid=257272561&page=1" scrolling="no" border="0" width="100%" height="320" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
 </div>
</template>
:::
::: el-collapse-item title="3-实现单篇文章隐藏与整站文章隐藏(中)"
<template>
<div>
    <iframe src="//player.bilibili.com/player.html?aid=885262942&bvid=BV1VK4y1j7YD&cid=257272953&page=1" scrolling="no" border="0" frameborder="no" width="100%" height="320" framespacing="0" allowfullscreen="true"> </iframe>
 </div>
</template>
:::
::: el-collapse-item title="4-可能会遇到的一些问题-结束(下)"
<template>
<div>
    <iframe src="//player.bilibili.com/player.html?aid=500295252&bvid=BV1dK411G7jW&cid=257273412&page=1" scrolling="no" border="0" frameborder="no" width="100%" height="320" framespacing="0" allowfullscreen="true"> </iframe>
 </div>
</template>
:::
::::

## 使用 openWrite 导流工具

这里借用[openWrite 导流工具](https://my.openwrite.cn/)

⒈ 进入 openWrite 网站,找到导航菜单栏下的**免费涨粉神器**,添加博客列表

输入博客信息以及微信公众号信息,保存即可

如下所示:

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/tools-article-imgs/add-blog-guide/openwrite.png" alt="openWrite" />
</div>

⒉ 返回博客列表中,点击使用

   <div align="center">
      <img class="medium-zoom lazy"  loading="lazy"  src="../images/tools-article-imgs/add-blog-guide/useopenwrite.png" alt="openWrite" />
   </div>

⒊ 阅读使用文档

这里就不搬运了的,直接读文档就好,下面的介绍才是重点

::: tip 注意
文档中需要注意最后一句:

其中`id`中设置的`container`需要用户根据文章页面中的文章容器来调整，或者直接将文章最外面的容器设置为该 id

文档中的`readmore.js`用 openWrite 的链接也行,直接下载到本地,在头部全局方式引入也可以
:::

## 博客设置

任选自己的一篇`md`文档,在文档末尾增加如下一段`js`代码

不要问为什么能在`md`中还能写`js`,甚至写`Vue`,`React`都可以,因为`vuepress`牛逼~

```js
<script src="https://my.openwrite.cn/js/readmore.js" type="text/javascript"></script>
<script>
    const btw = new BTWPlugin();  // 实例化btw插件对象
    btw.init({                    // 初始化设置,接收一些参数
        id: 'container',          // 文章最外层的id
        blogId: 'xxxx你自己的博客ID', // 博客网站的id,openWrite会自动生成
        name: 'itclanCoder',         // 博客的名称
        qrcode: '你自己的公众号二维码xxx.jpg', // 二维码
        keyword: '验证码',                    // 设置的解锁关键字
    });
</script>
```

当你插入这段代码后,发现控制台报错了

```js
ReferenceError: BTWPlugin is not defined
```

**解决办法**
你需要在外面用`window.onload`包裹起来,必须等待 `DOM` 网页中所有内容加载完毕后执行这段代码,用`$(funciton() {})`或`$(document).ready(function(){})`是不行的

前者是等网页中的所有 `DOM` 包扩图片加载完毕后执行,而后者是所有 `DOM` 结构绘制完毕后,边加载边执行,可能 `DOM` 元素关联的东西并没有加载完

```js
window.onload = function() {
  const btw = new BTWPlugin();
  btw.init({
    id: 'container',
    blogId: 'xxxx你自己的博客ID',
    name: 'itclanCoder',
    qrcode: '你自己的公众号二维码xxx.jpg',
    keyword: '验证码',
  });
};
```

解决完报错后,文章依旧没有隐藏起来,根据 openWrite 文章中最后一句设置文章容器的`id`属性`container`

现在就是要给文章容器添加 id 属性了,可以用原生 `js`,也可以使用 `JQ`动态的添加属性

::: tip 提示
直接在`md`中用`div`将想要隐藏的部分包裹起来,并在`div`上添加`id="container"`难道不行么

这种方式我有试过,但不靠谱,实现不了:joy:,即使能实现,每篇文章都要手动的添加 id,那不是一个懒的程序员应该做的事情
:::

可以在控制台中审查元素,找到文章最外层的那个容器,实在不知道,你找个已经实现了解锁文章的博客作为参照:例如[itclanCoder 网站](http://coder.itclan.cn/)

没有添加解锁文章的博客,是没有那个`id="container"`属性的

下面我使用 jQ 查找元素,给页面最外层的容器添加 `id` 属性,为啥不用原生 `js`,因为 `jQ` 写得更少,做得更多哈:100:

此刻,不要动不动满口的`vue`,`React`,`Angular`...JQ 真香,小弟还停留在 JQ 时代:rofl:,其实 JQ 也很牛逼的,也没有它实现不了的,只是现在,有负往日盛景,风水轮流转嘛

```js
window.onload = function() {
  themeDefaultContent = $(
    '#app > .theme-container>.page > .theme-default-content' // 获取最外层的元素
  );

  themeDefaultContent.attr('id', 'container'); // 设置id属性,就是这么牛逼,搞定
  const btw = new BTWPlugin();
  btw.init({
    id: 'container', // 这个id后面的值与上面的设置id属性保持一致就行,不一定非地是container
    blogId: 'xxxx你自己的博客ID',
    name: 'itclanCoder',
    qrcode: '你自己的公众号二维码xxx.jpg',
    keyword: '验证码',
  });
};
```

但经自己测试,发现无论是使用 vue 的写法,将上面的代码放到 `monted` 中,或使用`this.$nextTick`,发现不是报`btw is not defined`就是`BTWPlugin is not defined`

但是页面中的`id="container"`确实已经加上去了的,但就是隐藏不了文章,经过排查,查看了一下`readmore.js`源码,里面使用了`document.querySelectorAll`以及`window`等一些方法,当然里面也用了`jQ`,估计是这个脚本加载顺序有问题

如果有知道怎么解决的同学,可以告知一下,显然按照文档中的直接在文章底下写那段代码是实现不了文章隐藏的功能的

**解决办法:**

把上面的代码单独成一个`js`,放到`.vuepress`中公共 js 目录下,`/.vuepress/public/js/btwplugin.js`

```js
window.onload = function() {
  themeDefaultContent = $(
    '#app > .theme-container>.page > .theme-default-content'
  );

  themeDefaultContent.attr('id', 'container');
  btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
  btw.init({
    id: 'container',
    blogId: 'xxxx你自己的博客ID',
    name: 'itclanCoder',
    qrcode: '你自己的公众号二维码xxx.jpg',
    keyword: '验证码',
  });
};
```

而把`readmore.js`
添加到头部`head`中,以`script`方式全局注入

```js
module.exports = {
  head: [
    [
      'script',
      { charset: 'utf-8', src: 'https://my.openwrite.cn/js/readmore.js' },
    ],
  ],
};
```

然后在`.vuepress`自定义组件出`./vuepress/components/HideArticle.vue`

```js
<template>
  <div>

  </div>
</template>

<script>

  export default {
    name: 'HideArticle',
    data() {
      return {

      }
    },

    mounted() {

     import('../../public/js/btwplugin')  // 引入那段代码脚本,直接把那段代码写到这里不行?还真不行,依旧会报btw is not defined
     // 或者使用require('../../public/js/btwplugin');当然最好是在上面定义,monted里面调用

    }
  }
</script>

<style lang="scss" scoped>

</style>

```

然后在`md`文档中以组件的方式在文章末尾引入`<HideArticle />`组件

整个过程没有几行代码

果然成功了...

::: tip 注意事项

1. `btwplugin.js`中的`btw`需要是个全局变量,去掉`const`,那直接`new BTWPlugin().init({})`不是更好么,还真不行,依旧会报`btw is not defined`尽管这个`bug`挺奇葩的
2. 在`btwplugin.js`这段代码中,需要使用`window.onload`包裹,等待所有页面加载完执行这段脚本,不能不包裹,而且也无法使用`$(function() {})或者$(document).ready(function() {})`,行不行,试一试就知道了的
3. 如果自定义的组件`HideArticle.vue`,外面多了一层文件夹例如:`./vuepress/components/global/HideArticle.vue`,在`md`引入组件时需要`<global-HideArticle />`这种方式引入组件,否则依旧不会生效
4. 在`HideArticle.vue`组件内中的`monted`需要使用`import('相对路径')`相对路径的方式导入脚本,或者使用`require('相对路径')`的方式引入,这里用绝对路径不行,如下所示

```js
const btwPlugin = require('../../public/js/btwplugin');
export default {
  name: 'HideArticle',
  data() {
    return {};
  },

  mounted() {
    btwPlugin(); // 直接调用
  },
};
```

:::

以上就实现了单篇文章的隐藏,如下所示

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="../images/tools-article-imgs/add-blog-guide/hideArticle.png" alt="openWrite" />
</div>

那博客里有很多文章,每篇`md`文件末尾都引入该组件,挺麻烦的

在`vuepress`中提供了全局注入组件,这里介绍两种方式全局注入组件的,一种是以插件的形式注入,另一种是在`enhanceApp.js`中全局注入

### 方式 1-以插件形式全局注入组件

在`/.vuepress/`中的`config.js`配置插件中,以插件的方式全局引入的,具体插件的引入可以见文档[vuepress 使用插件](https://www.vuepress.cn/plugin/using-a-plugin.html#%E4%BD%BF%E7%94%A8%E6%9D%A5%E8%87%AA%E4%BE%9D%E8%B5%96%E7%9A%84%E6%8F%92%E4%BB%B6)

```js
module.exports = {
  plugins: [
    [
      {
        name: 'page-plugin',
        globalUIComponents: ['global-HideArticle组件的名称'],
      },
    ],
  ],
};
```

通过上面的方式,就可以实现在博客中所有文章都实现隐藏了

### 方式 2-在 enhanceApp.js 中注入组件

在`vuepress`中的`enhanceApp.js`,这个文件是需要自己手动创建的,它可以对 `VuePress` 应用进行拓展配置,这个文件应当 `export default` 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数

你可以使用这个钩子来安装一些附加的 `Vue 插件`、`注册全局组件`，或者增加额外的路由钩子

```js
import ElementUI from 'element-ui';

// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  // 全局注入组件
  Vue.use(ElementUI);
  Vue.mixin({
    // 混合注入,加载全局文件
    mounted() {
      import('./public/js/btwplugin');
    },
  });
};
```

你也可以通过跟上面一样,`require`的方式引入,在`monted`中调用,这里不再重复多余,这里借用了`Vue.mixin()`全局注册使用混入,[Vue.mixin 的介绍](https://cn.vuejs.org/v2/api/#Vue-mixin)

如果你不使用`Vue.mixin`这种方式:编写了自定义组件,不是在插件中处理,直接将自定义组件引入到`enhanceApp.js`中也是可以的如下所示

```js
import HideArticle from "./components/HideArticle.vue" // 引入自定义组件
// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  // 全局注入组件
  Vue.use(HideArticle);    // 在这里注入全局组件,同样也是可以的

```

以上同样能够全局注入,实现全站文章的隐藏

## 怎么实现某单篇文章不隐藏

其实上面第一种方式,实现单篇文章的隐藏,那实现指定某一篇文章的不隐藏,同样也很简单,只需要去除`id="container"`这个属性就可以了的

你可以在`md`下面直接写`js`,找那个最外层的元素,直接去掉`id`属性即可

你也可以封装成一个组件,在全站中哪一篇不想要隐藏,直接调用该组件即可,这里就不重复了的,直接提供核心代码

```js
window.onload = function() {
  const themeDefaultContent = $(
    '#app > .theme-container>.page > .theme-default-content'
  );
  themeDefaultContent.removeAttr('id'); // 移除掉id属性,就是这么简单,JQ牛逼~
};
```

上面的代码就是使用`jq`移除元素上的某个属性,就实现了文章的不隐藏

## 可能会遇到的问题

### 本地运行没问题但打包不通过

本地`npm run dev`没有问题,但是构建打包出现`window is not defined`或者`document is not defined`

这是因为使用`vuepress`所生成的静态`HTML`时,都需要通过`Node.js`服务端渲染,而在服务端`Node.js`的坏境中是没有`document`以及`window`对象,这时候访问浏览器/DOM 中的 API,它就会报错

如果你按照以上的步骤无论是通过`import`的方式还是通过`Vue.mixin`的方式,在打包过程中就不会此类问题

之所以介绍两种方式,那是我踩坑之后,才发现的,本地运行好好的,一打包就出错.算是一个小坑,我的[itclanCoder 博客](http://coder.itclan.cn)里使用的是`Vue.mixin()`这种方式全局注入组件实现全站文章隐藏的

你也可以查看[如何解决 vuepress 编译打包失败即 window/document is not defined 问题](/fontend/tools/pack-fail-window-problem)

### 二维码不显示问题

当实现了文章的隐藏后,发现弹出框内的二维码不正常显示,这个时候,你需要查看`openWrite`博客设置的二维码是否正确的

::: tip 注意
图片的链接:需要是http://xxxxgg.jpg网络地止,`jpg/png/..`图片后缀形式的,直接将图片转换成链接插入是不行的
:::

你可以选择某一个图片存储服务器,只要能拿到图片地止就行,我使用的是又拍云的,当然它的免费的空间资源有限

## 额外拓展-不使用插件怎么实现文章部分隐藏

通过这个`openWrite`插件,可以看得出,它只是给最外层添加了一个固定的高度,把超出部分给隐藏了的

视觉上出现隐藏(css 实现的),通过浏览器审查元素就可以看得出,这并非真正的隐藏,对于前端同学,实现元素的隐藏并不陌生

不用插件,没有后端服务,也同样可以做到导流到公众号,可以在公众号后台自动回复里添加设置一个固定的值

在`vuepress`中同样编写全局组件的方式,获取最外层的元素,然后如同 openWrite 的,提交时,需要输入从公众号后台菜单栏拿到的固定的值,输入正确的值才能解锁文章

甚至解锁体验还可以优化得更好,给一些用户提示之类的

在前端代码中,给一个固定的值与用户输入的值做比较,就可以了的,可以把这个输入的值存入`sessionStorage`中的

一样可以实现文章的全站部分隐藏,输入验证码解锁文章,只是这个操作有一定的局限,验证码就不能是动态了的

虽然这种方式是不安全的,但依旧可以达到公众号引流的目的

想必通过关注个公众号回复一个验证码,就能解锁文章,比自己查看源码的方式拿到验证码,要快得多吧

对于不熟悉后台,仅仅就是为了实现导流这个目的,这种方式完全是可以实现的,而`openWrite`这种方式动态实现文章的解锁

需要自己部署服务器,处理前端请求等一些问题.还得写后端代码,对于后端是一片沙漠的同学,是有一些复杂的.

如果你不想用`openWrite`这种插件方式,可以自行一试的,但话说回来,既然有这么好的工具,那就用吧,虽然配置过程中难免会遇到一些坑,但总有人会给你填啊

腾出这个精力,解决下个人问题,多陪陪女朋友,不是更好?哈哈哈哈....

## 结语

至此,在`vuepress`中结合`openWrite`的博客导流工具到公众号,实现全栈文章部分隐藏,以及解锁文章就完美实现了的,实现起来非常简单粗暴

当然我不知道其他类似用`vuepress`搭建的博客,实现文章的隐藏是怎么实现的,虽然这个很简单,但是在实现的过程或多或少,会踩到一些坑,如果熟悉`vue`相关技术栈的,解决也不难

但基本上应该大同小异,都要先获取最外层元素,然后动态的添加 id 属性

如果您在实现博客文章部分隐藏功能遇到问题,欢迎提出问题,下方留言,一起讨论

## 相关文档

- [openWrite 博客导流工具](https://my.openwrite.cn/)
- [又拍云图片存储](https://www.upyun.com/)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
