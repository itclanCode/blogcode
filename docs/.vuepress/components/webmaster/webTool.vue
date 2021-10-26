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
  name: "webTool",
  data() {
    return {
      typeData: [
        {
          href:
            "https://tongji.baidu.com/web/27949022/welcome/login?castk=LTE%3D",
          imgSrc: "/images/webmaster/baidutongji.svg",
          alt: "百度统计",
          text: "百度统计"
        },
        {
          href: "https://ziyuan.baidu.com/badlink/index",
          imgSrc: "/images/webmaster/baidutongji.svg",
          alt: "百度站长链接提交-sitemap",
          text: "百度站长链接提交-sitemap"
        },

        {
          href:
            "https://analytics.google.com/analytics/web/#/report-home/a165270509w231087874p217342758",
          imgSrc: "/images/webmaster/chrome.svg",
          alt: "谷歌分析",
          text: "谷歌分析"
        },

        {
          href: "https://search.google.com/",
          imgSrc: "/images/webmaster/chrome.svg",
          alt: "谷歌搜索数据分析",
          text: "谷歌搜索数据分析"
        },

        {
          href: "https://uptimerobot.com/",
          imgSrc: "/images/webmaster/chrome.svg",
          alt: "数据埋点",
          text: "uptime-robot监控服务"
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
