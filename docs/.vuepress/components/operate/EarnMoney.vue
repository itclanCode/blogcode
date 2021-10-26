<template>
  <div>
    <div class="wrap">
      <div v-for="item in earnplatform" class="item">
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
  name: "EarnMoney",
  data() {
    return {
      earnplatform: [
        {
          href: "https://mp.weixin.qq.com/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607598785980-dingyuehao.png",
          alt: "微信订阅号",
          text: "在小的个体也有自己的品牌-400万+同行在比拼",
        },
        {
          href: "https://www.newrank.cn/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607598870783-newrank-logo.png",
          alt: "新榜",
          text: "有赚-接广告/内容付费(卖课程/漫画/测评等)",
        },
        {
          href:
            "http://www.myleguan.com/media/orderSquareCon.html#/orderSquare",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607598915264-lgLogo.png",
          alt: "乐观",
          text: "乐观-广告主/流量主接单/代写软文赚钱",
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
