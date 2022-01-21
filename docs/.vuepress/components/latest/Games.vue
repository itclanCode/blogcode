<template>
  <div>
    <div class="wrap">
      <div v-for="item in gamesData" class="item" :key="item.alt">
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
  name: "Games",
  data() {
    return {
      gamesData: [
        {
          href: "http://g.vsane.com/game/821/",
          imgSrc: "/images/games/car.svg",
          alt: "就地过年",
          text: "就地过年"
        },
         {
          href: "http://g.vsane.com/game/803/",
          imgSrc: "/images/games/fish.svg",
          alt: "小蝌蚪",
          text: "小蝌蚪"
        },
        {
          href: "https://xigua.itclan.cn",
          imgSrc: "/images/games/watermelon.svg",
          alt: "watermelon",
          text: "合成大西瓜"
        },
        {
          href: "https://flybird.itclan.cn/",
          imgSrc: "/images/games/bird.svg",
          alt: "flybird",
          text: "飞扬的小鸟"
        },

        {
          href: "https://snake.itclan.cn/",
          imgSrc: "/images/games/snake.svg",
          alt: "snake",
          text: "贪吃蛇"
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
