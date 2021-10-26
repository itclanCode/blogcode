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
  name: "CodePlatform",
  data() {
    return {
      typeData: [
        {
          href: "https://codepen.io/",
          imgSrc: "/images/onlineplatform/codeopen.svg",
          alt: "codeopen免费在线运行平台",
          text: "codeopen在线运行代码平台"
        },

        {
          href: "http://jsrun.net/",
          imgSrc: "/images/onlineplatform/jsrun.svg",
          alt: "JS run在线编码运行平台",
          text: "JS run在线编码运行平台"
        },

        {
          href: "https://jshare.com.cn/new",
          imgSrc: "/images/onlineplatform/jshare.svg",
          alt: "JS share在线编码运行平台",
          text: "JS run在线代码测试-托管-分享的工具"
        },

        {
          href: "https://tool.lu/",
          imgSrc: "/images/onlineplatform/tools.svg",
          alt: "一些在线实用工具集合",
          text: "一些在线实用工具集合"
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
