<template>
  <div>
    <div class="switch-theme">
      <el-switch
            @change="hanldeSwitchTheme"
            v-model="themValue"
            active-text="暗黑"
            inactive-text="白色"
            active-color="#42b983"
      >
       </el-switch>
    </div>
    <div
      class="fold-button"
      v-bind:class="[onOff === true ? 'fold-button' : 'close-fold-btn']"
      @click="handleFoldBtn(onOff)"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="el-zoom-in-center">
      <div class="fixed-container" v-show="fixContainerShow">
        <div v-for="item in pcslides" :key="item.title">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <img class="medium-zoom lazy" loading="lazy" :src="item.imgUrl" alt />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import rightbar from "../../public/js/ationfixed";

export default {
  name: "AttionFixed",
  data() {
    return {
      themValue: false,
      onOff: true, // 默认开关,开启
      fixContainerShow: true, // 默认显示
      pcslides: rightbar.pcslides,
    };
  },

  mounted() {
    this.themValue = localStorage.getItem('getThemValue') || false;
  },
  methods: {
    handleFoldBtn(onOff) {
      if (onOff) {
        this.fixContainerShow = false;
        this.onOff = false;
      } else {
        this.fixContainerShow = true;
        this.onOff = true;
      }
    },

    hanldeSwitchTheme(value) {
      if(value) {
        // 暗黑模式
        localStorage.setItem('getThemeValue',value);
        document.querySelector('html').style = 'filter:invert(1) hue-rotate(180deg);transition:all 300ms';
      }else {
        // 白色模式
        console.log(value);
        localStorage.setItem('getThemeValue',value);
        document.querySelector('html').style = 'filter:grayscale(0);transition:all 300ms';
      }
    }
  },
};
</script>
<style lang="stylus">
.close-fold-btn {
  transform: rotate(90deg);
  transition: all 0.5s ease;
}

.fold-button {
  display: none;
  background: #42b983;
  transition: all 0.5s ease;

  span {
    display: block;
    cursor: pointer;
    width: 1.25rem;
    height: 1px;
    margin-top: 4px;
    background: #fff;
  }
}

.fixed-container {
  display: none;
}

@media (min-width: 960px) {
  .fold-button {
    display: block;
    position: fixed;
    top: 95px;
    right: 70px;
    cursor: pointer;
  }
  .switch-theme {
    position: fixed;
    top: 65px;
    right: 20px;
  }
  .fixed-container {
    background: #fff;
    display: block;
    position: fixed;
    z-index: 888;
    right: 1px;
    top: 110px;
    width: 140px;
    padding: 0 10px 10px 10px;
    text-align: center;
    background-color: #fff;
    box-shadow: -1px 0 2px 0.5px #42b983;
    color: #42b983;

    h4 {
      font-size: 15px;
      color: #42b983;
      margin: 8px 0;
    }

    p {
      font-size: 12px;
      margin: 0;
    }

    img {
      cursor: pointer;
      width: 90px;
    }
  }
}

@media screen and (max-width: 768px) {
  .switch-theme {
    display:none;
  }
}
</style>
