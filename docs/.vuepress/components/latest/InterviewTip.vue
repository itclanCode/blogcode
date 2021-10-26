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
  name: "InterviewTip",
  data() {
    return {
      MinProgramData: [
        {
          href: "/interview/css/",
          imgSrc: "/images/latest/css-interview.svg",
          alt: "CSS笔试真题",
          text: "CSS面试题"
        },
        {
          href: "/interview/js/",
          imgSrc: "/images/latest/javascript-interview.svg",
          alt: "JavaScript面试真题详解",
          text: "JavaScript面试题"
        },
        {
          href: "/interview/minprogram/",
          imgSrc: "/images/latest/vx-interview.svg",
          alt: "微信小程序面试题",
          text: "微信小程序面试题"
        },
        {
          href: "/interview/react/",
          imgSrc: "/images/latest/react-interview.svg",
          alt: "React面试题",
          text: "React面试题"
        },
        {
          href: "/interview/vue/",
          imgSrc: "/images/latest/vue-interview.svg",
          alt: "Vue面试题",
          text: "Vue面试题"
        },
        {
          href: "/interview/Node/",
          imgSrc: "/images/latest/node-interview.svg",
          alt: "Node面试题",
          text: "Node面试题"
        },
        {
          href: "/interview/http/",
          imgSrc: "/images/latest/http-interview.svg",
          alt: "HTTP面试题",
          text: "HTTP面试题"
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
