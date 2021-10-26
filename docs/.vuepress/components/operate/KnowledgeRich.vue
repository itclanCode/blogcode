<template>
  <div>
    <div class="wrap">
      <div v-for="item in knowledgeData" class="item">
        <p class="list">
          <a :href="item.href" target="_blank" :title="item.text">
            <img
              width="100"
              height="44"
              class="img-pic"
              :src="item.imgSrc"
              :alt="item.alt"
            />
          </a>
        </p>
        <p class="text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KnowledgeRich",
  data() {
    return {
      knowledgeData: [
        {
          href: "https://www.lizhiweike.com/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607598954919-lz-weike-logo.png",
          alt: "荔枝微课",
          text: "荔枝微课-直播-录播-在线授课",
        },
        {
          href: "https://www.weishi100.com/pc/home/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599081029-weishi-logo.png",
          alt: "微师",
          text: "微师-专注在线教育的工具",
        },

        {
          href: "http://www.renrenjiang.cn/home/index.html",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599122583-renren-logo.png",
          alt: "人人讲",
          text: "人人讲-免费在线知识变现工具",
        },

        {
          href: "http://www.renrenjiang.cn/home/index.html",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599177396-ds_logo.png",
          alt: "短书",
          text: "知识社群-直播授课-带货",
        },

        {
          href: "http://www.ckjr001.com/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599206624-chuangke-jiangren-logo.png",
          alt: "创客匠人",
          text: "知识服务-付费音频/资料/专栏等",
        },
      ],
    };
  },
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
