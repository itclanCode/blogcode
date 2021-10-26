<template>
  <div>
      <el-slider v-model="blur" class="el-slider"  show-input max="10"></el-slider>
      <div class="wrap" :style="{filter:`blur(${blur}px)`}">
            滑动滑块-高斯模糊-实现毛玻璃效果
      </div>
    
       <div class="language-css extra-class">
      <pre class="language-css" style="margin-bottom:30px;"><code ref="css"></code></pre>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
  export default {
    name: "glassEffectFilter",
    data() {
      return {
        blur: 0
      }
    },

    methods: {
      updateCss() {
        this.$refs["css"].innerHTML = Prism.highlight(
          `filter: blur(${this.blur}px)`,
          Prism.languages.css
        );
      }
    },

    watch: {
      blur() {
        this.updateCss();
      },
    },
    mounted() {
      this.updateCss();
    }
  }
</script>

<style lang="scss" scoped>
.el-slider {
  margin:30px 0;
}
.wrap{
  width: 100%;
  height: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
}
</style>