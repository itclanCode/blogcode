---
sidebarDepth: 3
title: VuePress右侧如何添加固定侧边栏-实现置顶和置底
---

## VuePress右侧如何添加固定侧边栏-实现置顶和置底

## 快速导航

<TOC />

## 前言

在不久之前,有个前端同学好奇,聊到,我的网站[itclanCoder](https://coder.itclan.cn),在手机移动端访问时

屏幕右侧出现的侧边栏是怎么做的,同时也支持置顶和置底的操作

尽管也知道这个网站是用`vuepress`去搭建的,但是依旧好奇,想实现这个效果,但不知道如何下手,今天就统一的在这里记录分享一下

## 添加全局组件

在`/.vuepress/components/global/RightBar.vue`,创建一个全局组件

内部组件会自动根据`文件名`注册成全局组件

然后在`md`文件中,引入
```html
<global-RightBar />
```
完整代码如下所示:
```html
<template>
  <div>
    <div class="right-bar-wrap" v-show="isRightBar">
      <div>
        <a href="#">
          <img width="30" height="30" :src="rightbar.topImg" alt="置顶" />
        </a>
      </div>
      <div>
        <a href="/latestarticle/">
          <img width="30" height="30" :src="rightbar.newImg" alt="最新" />
        </a>
      </div>
      <div  @click="handleKeQun('https://kequn.itclan.cn/app/index.php?i=2&c=entry&do=index&m=dc_sqjd&state=index&rand=68drdo&spread=0#/')">
        <img width="30" height="30" :src="rightbar.keQunImg" alt="社群" />
      </div>
      <div>
        <img
          width="30"
          height="30"
          class="medium-zoom lazy"
          loading="lazy"
          :src="rightbar.buyImg"
          alt="小程序码"
        />
      </div>
      <div>
        <img
          width="30"
          height="30"
          class="medium-zoom lazy"
          loading="lazy"
          :src="rightbar.codeImg"
          alt="二维码"
        />
      </div>
      <div>
        <img
          width="30"
          height="30"
          class="medium-zoom lazy"
          loading="lazy"
          :src="rightbar.publicodeImg"
          alt="公众号"
        />
      </div>
      <div @click="handleAd('http://itclancoder.mikecrm.com/z1zXWvz')">
        <img width="30" height="30" :src="rightbar.adImg" alt="广告" />
      </div>
      <div @click="handleFaKa('https://faka.itclan.cn')">
        <img width="30" height="30" :src="rightbar.fkImg" alt="发卡">
      </div>
       <div @click="handleKelaiTV('https://video.itclan.cn')">
        <img width="30" height="30" :src="rightbar.videotvImg" alt="客来影视">
      </div>
      <div
        @click="
          handleShange(
            'https://www.zhi12.cn/paycenter/reward/widget?entity=user&id=33813'
          )
        "
      >
        <img width="30" height="30" :src="rightbar.shangImg" alt="赏" />
      </div>
      <div>
        <a href="#bottom">
          <img width="30" height="30" :src="rightbar.bottomImg" alt="置底" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import rightbar from "../../public/js/ationfixed";
export default {
  name: "RightBar",
  data() {
    return {
      isRightBar: false,    // 侧边栏默认隐藏
      rightbar: rightbar.mobileslides,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);   // 绑定监听scroll事件
  },

  destroyed() {
    window.removeEventListener("scroll", this.scroll); // 解绑监听scroll事件
  },

  methods: {
    scroll() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {    // 这里是实现,当滚动条滚动高度大于60px,就显示右侧的侧边栏,否则就隐藏
        that.isRightBar = true;
      } else {
        that.isRightBar = false;
      }
    },

    handleAd(openUrl) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "亲,这里接受广告主投放,可前往了解一下",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
    },

    handleKeQun(openUrl) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "亲,在这里可以加各种群,发广告,发名片,开始你的探索吧",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
    },
    
    // 发卡商城
    handleFaKa(openUrl) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "亲,您将前往发卡商城,开始寻找对您有价值的商品吧",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
    },

    handleKelaiTV(openUrl) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "亲,您将前往客来影视TV,更多好电影,电视剧等你看哦",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
    },

    handleShange(openUrl) {
      this.$dialog
        .confirm({
          title: "打赏鼓励",
          message: "如果您喜欢本站或本站内容对您有所帮助,您的支持就是我的动力",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
    },
  },
};
</script>

<style lang="stylus" scoped>
 /*大于960时,隐藏侧边栏*/   
@media screen and (min-width: 960px) {  
  .right-bar-wrap {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .right-bar-wrap {
    position: fixed;
    right: 0.15rem;
    top: 20%;
    display: flex;
    flex-direction: column;
    z-index: 888;

    img {
      border: 1px solid #3eaf7c;
      border-radius: 4px;
      width: 30px;
      height: 30px;
    }
  }
}
</style>

```
然后在`.vuepress/configs/plugin.js`,里全局注册,我这里使用的是`vuepress1.0`的配置的,如果你使用的是`vuepress2.0`的那么就不能使用这种方式注册组件

具体可以参见`vuepress`官网,在`vuepress2.0`中,需要引入注册组件插件,也就是`@vuepress/plogin-register-component`

以下是`vuepress2.0`注册全局组件方式
```js
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
export const pligins: any = {
    registerComponentsPlugin({
        componentsDir:path.resolve(__dirname,'../../','components')
    })
}  

```
经过这样的设置后,在`components`目录下的`xxx.vue`组件都会被注册成全局组件

如果你是`vuepress1.0`的那么在`.vuepress/configs/plugin.js`中的`Plugin`中,如下配置即可

```js
const plugins = [
  [
    {
      // 右边固定栏
      name: 'page-plugin',
      globalUIComponents: [
        'global-RightBar',
      ],
    },
  ],
];

module.exports = plugins; // 导出
```

经过上面的全局注册注册组件,那么在所有地方都有了的

## 网站的置顶和置底操作

置顶操作,使用的是`a`链接的锚点`#`
```html
<a href="#">置顶</a>
```
而置底操作,也是使用的描点`#`,在置底操作时,我是定义了一个全局的组件(`ToBottom.vue`),给容器赋值了一个`id`属性,组件如下所示
```html
<template>
  <div>
     <div id="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "ToBottom"
};
</script>
```
在置底操作时,使用`a`链接,`href="#bottom"`,`id`的值与`href`的值保持一致就可以

就是这么简单,至于侧边栏点击图片,能够实现缩放,是使用`vuepress`提供的这个`@vuepress/plugin-medium-zoom`这个插件

## 总结

在移动端实现固定侧边栏,很简单,定义一个全局组件,插入到网站中,而实现置顶和置底则使用的是描点,即可实现

在网站当中每个空间都尤其珍贵,在不影响阅读体验的情况下,是可以插入一些自定义元素的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />


