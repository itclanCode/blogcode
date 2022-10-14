<template>
    <div>
      <div>
        <div
          class="effect-display-wrap"
          
        >
          <img :style="{
                 width: width + 'px',
                 height: height+'px',
                 borderRadius:borderRadiusVal+'%'
          }" src="https://img0.baidu.com/it/u=1501084209,93021381&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"  />
        </div>
      </div>
      <div class="language-css extra-class">
        <pre class="language-css" style="margin-bottom:30px;"><code ref="css"></code></pre>
      </div>
  
      <div class="attr-operate-wrap">
        <div class="attr-inner-content">
          <div class="text-width">宽度:</div>
          <el-slider
            class="slider"
            v-model="width"
            :min="200"
            :max="900"
            show-input
            input-size="mini"
          ></el-slider>
        </div>
        <div class="attr-inner-content">
          <div class="text-width">高度:</div>
          <el-slider
            class="slider"
            v-model="height"
            :min="200"
            :max="450"
            show-input
            input-size="mini"
          ></el-slider>
        </div>
        <div class="attr-inner-content">
          <div class="text-width">圆角:</div>
          <el-slider
            class="slider"
            v-model="borderRadiusVal"
            :min="2"
            :max="100"
            show-input
            input-size="mini"
          ></el-slider>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Prism from "prismjs";
  
  export default {
    name: "changeAttr",
    data() {
      return {
        width: 600,
        height: 500,
        borderRadiusVal: 2,
      };
    },
    watch: {
      width() {
        this.updateCss();
      },
  
      height() {
        this.updateCss();
      },

      borderRadiusVal() {
        this.updateCss();
      }
    },
    methods: {
      styleToString(style) {
        let styleStr = "";
        for (let key in style) {
          styleStr += `${key}: ${style[key]};\n`;
        }
        return styleStr;
      },
      updateCss() {
        this.$refs["css"].innerHTML = Prism.highlight(
          `width: ${this.width}px;\nheight:${this.height}px;\nborder-radius:${this.borderRadiusVal}%;`,
          Prism.languages.css
        );
      }
    },
    mounted() {
      this.updateCss();
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .effect-display-wrap {
    margin: 15px auto;
    border: 1px solid #ddd;
    padding: 15px;
  }
  
  .attr-operate-wrap {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
  }
  
  .el-radio-group {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    margin: 25px 0;
    .radio {
      margin-bottom: 15px;
    }
    label {
      width: 20%;
    }
  }
  
  .attr-table-desc {
    margin-top: 25px;
  }
  </style>
  