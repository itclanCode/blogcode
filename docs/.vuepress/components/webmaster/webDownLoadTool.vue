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
  name: "webDownLoadTool",
  data() {
    return {
      typeData: [
        {
          href: "https://code.visualstudio.com/",
          imgSrc: "/images/webmaster/vscode.svg",
          alt: "vscode编辑器",
          text: "vscode编辑器"
        },
        {
          href: "http://www.sublimetext.com/3",
          imgSrc: "/images/webmaster/sublimetext.svg",
          alt: "sublimeText极简编辑器",
          text: "sublimeText3编辑器"
        },

        {
          href: "https://dcloud.io/",
          imgSrc: "/images/webmaster/hbuilder.png",
          alt: "Hbuilder编辑器-vue-markdwon-app-小程序-h5-mui",
          text: "Hbuilder编辑器"
        },

        {
          href: "https://www.jetbrains.com/idea/",
          imgSrc: "/images/webmaster/idea.svg",
          alt: "IDEA编辑器",
          text: "IDEA编辑器"
        },

        {
          href:
            "https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",
          imgSrc: "/images/webmaster/wexindev.svg",
          alt: "微信开发者工具",
          text: "微信开发者工具"
        },

        {
          href:
            "https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",
          imgSrc: "/images/webmaster/wexindev.svg",
          alt: "微信开发者工具",
          text: "微信开发者工具"
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
