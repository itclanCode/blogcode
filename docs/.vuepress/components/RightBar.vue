<template>
  <div>
    <div class="right-bar-wrap" v-show="isRightBar">
      <div>
        <a href="#">
          <img width="30" height="30" src="/images/up-arrow.png" alt="置顶" />
        </a>
      </div>
      <div>
        <img
          width="30"
          height="30"
          class="medium-zoom lazy"
          loading="lazy"
          src="/images/person-code.jpg"
          alt="二维码"
        />
      </div>
      <div>
        <img
          width="30"
          height="30"
          class="medium-zoom lazy"
          loading="lazy"
          src="/images/itclancoder-code.jpg"
          alt="公众号"
        />
      </div>
      <div>
        <a href="#bottom">
          <img width="30" height="30" src="/images/down-arrow.png" alt="置底" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBar",
  data() {
    return {
      isRightBar: false
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
    }
  }
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width: 960px) {
  .right-bar-wrap {
    display: none;
  }
}

@media screen and (max-width: 414px) {
  .right-bar-wrap {
    position: fixed;
    right: 0.2rem;
    top: 40%;
    display: flex;
    flex-direction: column;
    z-index: 888;

    img {
      border: 1px solid #3eaf7c;
      border-radius: 4px;
    }
  }
}
</style>
