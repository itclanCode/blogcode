<template>
  <div>
    <div class="wrap">
      <div v-for="item in applyData" class="item" :key="item.alt">
        <p class="list">
          <a :href="item.href" :target="item.target" :title="item.alt">
            <img :width="item.width" :height="item.height" :class="item.class" :src="item.imgSrc" :alt="item.alt" />
          </a>
        </p>
        <p class="text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Apply",
  data() {
    return {
      applyData: [
         {
          href: "javascript:;",
          imgSrc: "https://cdn.jsdelivr.net/gh/itclanCode/blogimg@main/mIn-program-img/gh_a0b6a06d175a_258.6k0rqh7vefo0.jpg",
          alt: "暖暖聊天恋爱话术小程序-高情商聊天对话,让撩妹,撩汉脱单更简单",
          text: "暖暖聊天恋爱话术",
          width: "85",
          height: "85",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
        {
          href: "javascript:;",
          imgSrc: "https://cdn.jsdelivr.net/gh/itclanCode/blogimg@main/mIn-program-img/轻记账小程序码.3unxzonk84a0.jpg",
          alt: "轻记账-一款轻松微信记账小工具",
          text: "轻记账",
          width: "85",
          height: "85",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
        {
            href: "https://img.itclan.cn",
            imgSrc: "/images/latest/kelaituchuang.svg",
            alt: "客来图床-免费存储图片",
            text: "客来图床",
            width: "100",
            height: "44",
            target: "_blank",
            class:"lazy img-pic"  
        },

        {
            href: "https://zhanji.itclan.cn",
            imgSrc: "/images/latest/zhanjinet.svg",
            alt: "站集网-总有你不知道的好用的网站大全",
            text: "站集网",
            width: "100",
            height: "44",
            target: "_blank",
            class:"lazy img-pic" 
        },

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
