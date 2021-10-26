<template>
  <div>
    <div class="wrap">
      <div v-for="item in ReadBookData" class="item">
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
  name: "ReadBook",
  data() {
    return {
      ReadBookData: [
        {
          href: "/read/wealth/",
          imgSrc: "/images/latest/read-wealth.svg",
          alt: "财富",
          text: "财富"
        },
        {
          href: "/read/copywrite/",
          imgSrc: "/images/latest/read-copy.svg",
          alt: "文案",
          text: "文案"
        },
        {
          href: "/read/operate/",
          imgSrc: "/images/latest/read-operate.svg",
          alt: "运营",
          text: "运营"
        },
        {
          href: "/read/lingdu/",
          imgSrc: "/images/latest/read-book.svg",
          alt: "领读",
          text: "领读"
        },

        {
          href: "/read/replay/",
          imgSrc: "/images/latest/read-return.svg",
          alt: "复盘",
          text: "复盘"
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
