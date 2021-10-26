<template>
  <div>
    <div class="wrap">
      <div v-for="item in SocialData" class="item">
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
  name: "Social",
  data() {
    return {
      SocialData: [
        {
          href: "https://github.com/itclanCode/blogcode",
          imgSrc: "/images/latest/social-github.svg",
          alt: "github-itclancode",
          text: "Github"
        },
        {
          href: "https://juejin.im/user/5900e97b1b69e60058b936ed/posts",
          imgSrc: "/images/latest/social-juejin.svg",
          alt: "掘金",
          text: "掘金"
        },
        {
          href: "https://www.jianshu.com/u/5ee7ee7fd180",
          imgSrc: "/images/latest/social-jianshu.svg",
          alt: "简书",
          text: "简书"
        },
        {
          href: "https://segmentfault.com/u/suibichuanji_5900e1f5bcf67",
          imgSrc: "/images/latest/social-segmentfault.svg",
          alt: "segmentfault",
          text: "segmentfault"
        },
        {
          href: "https://www.zhihu.com/people/itclan",
          imgSrc: "/images/latest/social-zhihu.svg",
          alt: "知乎",
          text: "知乎"
        },

        {
          href: "https://space.bilibili.com/267957620",
          imgSrc: "/images/latest/social-video.svg",
          alt: "视频",
          text: "视频"
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
