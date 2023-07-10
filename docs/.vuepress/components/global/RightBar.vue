<template>
  <div>
    <div class="right-bar-wrap" v-show="isRightBar">
      <div>
        <a href="javascript:;" @click="handleZhiDing">
          <img width="30" height="30" :src="rightbar.topImg" alt="置顶" />
        </a>
      </div>
      <div>
        <a href="/latestarticle/">
          <img width="30" height="30" :src="rightbar.newImg" alt="最新" />
        </a>
      </div>
      <div  @click="handleKeQun('https://qun.aikelaikaifa.com/index.php?i=1&do=index&opt=index&act=index&m=dc_sqjd&spread=0')">
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
      <div @click="handleFaKa('https://faka.itclan.net')">
        <img width="30" height="30" :src="rightbar.fkImg" alt="发卡">
      </div>
       <div @click="handleKelaiTV('https://video.itclan.pro')">
        <img width="30" height="30" :src="rightbar.videotvImg" alt="客来影视">
      </div>
      <div
        @click="
          handleShange(
            'https://pay.aikelaidev.cn/paypage/?merchant=35bdYxSx7dCUrVUBqFQjdqqlzhWryCA7lqOn9VhakWHC'
          )
        "
      >
        <img width="30" height="30" :src="rightbar.shangImg" alt="赏" />
      </div>
      <div
        @click="handleSwitchTheme"
      >
        <img width="30" height="30" :src="switchThemeUrl" alt="切换主题" />
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
import themeDefaultImg from "../../public/images/rightbar/dark.svg";
import whiteThemeImg from "../../public/images/rightbar/set.svg";

export default {
  name: "RightBar",
  data() {
    return {
      isRightBar: false,
      rightbar: rightbar.mobileslides,
      switchThemeUrl: themeDefaultImg,
      themeOff: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },

  methods: {
    handleZhiDing() {
       window.scrollTo({
         top: 0,
         behavior:"smooth"
       })
    },
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
    
    // 发卡商城
    handleFaKa(openUrl) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "亲,您将前往发卡商城,开始寻找对您有价值的商品吧",
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

    handleKelaiTV(openUrl) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "亲,您将前往客来影视TV,更多好电影,电视剧等你看哦",
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

    handleSwitchTheme() {
      if(this.themeOff) {
        // 默认白色主题
        this.switchThemeUrl = themeDefaultImg;
        document.querySelector('html').style = 'filter:grayscale(0);transition:all 300ms';
      }else {
        // 暗黑模式
        this.switchThemeUrl = whiteThemeImg;
        document.querySelector('html').style = 'filter:invert(1) hue-rotate(180deg);transition:all 300ms';
      }
      this.themeOff = !this.themeOff; // toggle value
    }
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
    top: 18%;
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
