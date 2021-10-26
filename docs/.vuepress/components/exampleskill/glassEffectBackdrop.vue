<template>
  <div>
      <el-slider v-model="blur" class="el-slider"  show-input max="10"></el-slider>
      <div class="wrap">
            <div class="detail" :style="{backdropFilter:`blur(${blur}px)`}">
               
            </div>
      </div>
      <div class="language-css extra-class">
        <pre class="language-css" style="margin-bottom:30px;"><code ref="css"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
  export default {
    name: "glassEffectBackdrop",
    data() {
      return {
        blur: 0
      }
    },

    methods: {
      updateCss() {
        this.$refs["css"].innerHTML = Prism.highlight(
          `backdrop-filter: blur(${this.blur}px)`,
          Prism.languages.css
        );
      }
    },

    mounted() {
      this.updateCss();
    },

    watch: {
      blur() {
        this.updateCss();
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-slider {
  margin:30px 0;
}
.wrap{
  width: 100%;
  height: 250px;
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
  background: url("/images/adslo.png") no-repeat 0 0/100% 100%;
  .detail {
    width: 100%;
    height: 150px;
    background-color: rgba(255, 255, 255, 0.5);
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  
}
</style>