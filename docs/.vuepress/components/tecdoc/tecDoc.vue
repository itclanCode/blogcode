<template>
  <div>
    <div class="wrap">
      <div v-for="item in typeData" class="item">
        <p class="list">
          <a :href="item.href" target="_blank" :title="item.text">
            <img width="100" height="44" class="img-pic" :src="item.imgSrc" :alt="item.alt" />
          </a>
        </p>
        <p class="text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tecDoc",
  data() {
    return {
      typeData: [
        {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference",
          imgSrc: "/images/tecDoc/css-mdn.svg",
          alt: "MDN-CSS",
          text: "CSS参考-MDN"
        },
        {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/API",
          imgSrc: "/images/tecDoc/web-api.svg",
          alt: "Web API参考-MDN",
          text: "Web API参考-MDN"
        },

        {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/Events",
          imgSrc: "/images/tecDoc/event.svg",
          alt: "事件参考",
          text: "事件参考"
        },

        {
          href: "https://cn.vuejs.org/",
          imgSrc: "/images/tecDoc/Vue.svg",
          alt: "Vue官方文档",
          text: "Vue官方文档"
        },

        {
          href: "https://element.eleme.cn/#/zh-CN",
          imgSrc: "/images/tecDoc/elements.svg",
          alt: "基于 Vue 2.0 的桌面端UI组件库",
          text: "基于 Vue 2.0 的桌面端UI组件库"
        },

        {
          href: "https://www.vuepress.cn/",
          imgSrc: "/images/tecDoc/vuepress-doc.svg",
          alt: "VuePress官方文档",
          text: "VuePress官方文档"
        },

        {
          href: "https://zh-hans.reactjs.org/",
          imgSrc: "/images/tecDoc/react.svg",
          alt: "React官方文档",
          text: "React官方文档"
        },

        {
          href: "https://ant.design/index-cn",
          imgSrc: "/images/tecDoc/ant-design.svg",
          alt: "Ant-design",
          text: "基于 Ant Design 设计体系的 React UI 组件库"
        },

        {
          href: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
          imgSrc: "/images/tecDoc/wechat.svg",
          alt: "微信小程序",
          text: "微信小程序"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width: 960px) {
  .wrap {
    display: flex;
    justify-content: start;
    text-align: center;
    flex-wrap: wrap;

    .item {
      margin: 0 20px;

      .list {
        width: 200px;
        height: 65px;

        a {
          display: block;
          margin: 0 auto;

          img {
            display: inline-block;
            vertical-align: center;
          }
        }
      }

      .text {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .wrap {
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-wrap: nowrap;
    overflow-x: auto;

    .item {
      .list {
        width: 160px;
        height: 65px;

        a {
          display: block;
          margin: 0 auto;

          img {
            display: inline-block;
            vertical-align: center;
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
          }
        }
      }

      .text {
        width: 160px;
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; // 需要显示的行数
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
