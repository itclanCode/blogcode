<template>
  <div>
    <div class="right-bar-wrap" v-show="isRightBar">
      <div>
        <a href="#">
          <img width="30" height="30" :src="rightbar.topImg" alt="置顶" />
        </a>
      </div>
      <div>
        <a href="/latestarticle/">
          <img width="30" height="30" :src="rightbar.newImg" alt="最新" />
        </a>
      </div>
      <div  @click="handleKeQun('https://kequn.itclan.cn/app/index.php?i=2&c=entry&do=index&m=dc_sqjd&state=index&rand=68drdo&spread=0#/')">
        <img width="30" height="30" :src="rightbar.keQunImg" alt="社群" />
      </div>
      <div>
        <img
          width="30"
          height="30"
          class="medium-zoom lazy"
          loading="lazy"
          :src="rightbar.buyImg"
          alt="小程序码"
        />
      </div>
      <div>
        <img
          width="30"
          height="30"
          class="medium-zoom lazy"
          loading="lazy"
          :src="rightbar.codeImg"
          alt="二维码"
        />
      </div>
      <div>
        <img
          width="30"
          height="30"
          class="medium-zoom lazy"
          loading="lazy"
          :src="rightbar.publicodeImg"
          alt="公众号"
        />
      </div>
      <div @click="handleAd('http://itclancoder.mikecrm.com/z1zXWvz')">
        <img width="30" height="30" :src="rightbar.adImg" alt="广告" />
      </div>
      <div
        @click="
          handleShange(
            'https://www.zhi12.cn/paycenter/reward/widget?entity=user&id=33813'
          )
        "
      >
        <img width="30" height="30" :src="rightbar.shangImg" alt="赏" />
      </div>
      <div>
        <a href="#bottom">
          <img width="30" height="30" :src="rightbar.bottomImg" alt="置底" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import rightbar from "../../public/js/ationfixed";
export default {
  name: "RightBar",
  data() {
    return {
      isRightBar: false,
      rightbar: rightbar.mobileslides,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },

  methods: {
    scroll() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.isRightBar = true;
      } else {
        that.isRightBar = false;
      }
    },

    handleAd(openUrl) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "亲,这里接受广告主投放,可前往了解一下",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
    },

    handleKeQun(openUrl) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "亲,在这里可以加各种群,发广告,发名片,开始你的探索吧",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
    },

    handleShange(openUrl) {
      this.$dialog
        .confirm({
          title: "打赏鼓励",
          message: "如果您喜欢本站或本站内容对您有所帮助,您的支持就是我的动力",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
    },
  },
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width: 960px) {
  .right-bar-wrap {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .right-bar-wrap {
    position: fixed;
    right: 0.15rem;
    top: 28%;
    display: flex;
    flex-direction: column;
    z-index: 888;

    img {
      border: 1px solid #3eaf7c;
      border-radius: 4px;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
