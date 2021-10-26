<template>
  <div>
    <div class="wrap">
      <div v-for="item in MinProgramData" class="item">
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
  name: "MinProgram",
  data() {
    return {
      MinProgramData: [
        {
          href: "/wechat/minprogram/",
          imgSrc: "/images/latest/vxminprgoram.svg",
          alt: "微信小程序技术",
          text: "微信小程序"
        },
        {
          href: "/wechat/cloudev/",
          imgSrc: "/images/latest/clouddev.svg",
          alt: "云开发/无服务serverless",
          text: "云开发"
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
    justify-content: start;
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
