<template>
  <div>
    <div class="wrap">
      <div v-for="item in FontEndData" class="item" :key="item.text">
        <p class="list">
          <a :href="item.href" target="_blank" :title="item.alt">
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
  name: "FontEnd",
  data() {
    return {
      FontEndData: [
        {
          href: "/fontend/css/",
          imgSrc: "/images/latest/css.svg",
          alt: "CSS技术/实用案例解析",
          text: "CSS"
        },
        {
          href: "/fontend/js/",
          imgSrc: "/images/latest/JS.svg",
          alt: "JavaScript技术/实用案例解析",
          text: "JavaScript"
        },

        {
          href: "/fontend/framework/",
          imgSrc: "/images/latest/framework.svg",
          alt: "React/Vue...",
          text: "前端框架"
        },

        {
          href: "/fontend/framework/",
          imgSrc: "/images/latest/rsa.svg",
          alt: "前端算法",
          text: "前端算法"
        },

        {
          href: "/fontend/tools/",
          imgSrc: "/images/latest/tools.svg",
          alt: "开发工具",
          text: "开发工具"
        },

        {
          href: "/fontend/websitecol/",
          imgSrc: "/images/latest/collection.svg",
          alt: "网址收藏",
          text: "网址收藏"
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
