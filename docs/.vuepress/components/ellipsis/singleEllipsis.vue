<template>
  <div>
    <div
      class="effect-display-wrap"
      :style="{
        width: width + 'px',
        overflow: overflowValue,
        textOverflow: selectedType,
        whiteSpace: whiteSpaceValue,
      }"
    >单行溢出省略号显示-固定宽度是必须的-文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏</div>
    <div class="language-css extra-class">
      <pre class="language-css" style="margin-bottom:30px;"><code ref="css"></code></pre>
    </div>

    <div class="attr-operate-wrap">
      <div class="attr-inner-content">
        <div class="text-width">宽度-width:</div>
        <el-slider
          class="slider"
          v-model="width"
          :min="200"
          :max="705"
          show-input
          input-size="mini"
        ></el-slider>
      </div>
      <div class="attr-inner-content">
        <div class="text-width">内容溢出-overflow:</div>
        <el-radio-group v-model="overflowValue" class="el-radio-group">
          <el-radio class="radio" v-for="ov in overflow" :key="ov" :label="ov">{{ ov }}</el-radio>
        </el-radio-group>
      </div>
      <div class="attr-inner-content">
        <div class="text-width">文本溢出-text-overflow:</div>
        <el-radio-group v-model="selectedType" class="el-radio-group">
          <el-radio class="radio" v-for="po in textOverflow" :key="po" :label="po">{{ po }}</el-radio>
        </el-radio-group>
      </div>
      <div class="attr-inner-content">
        <div class="text-width">段落文本换行-white-space:</div>
        <el-radio-group v-model="whiteSpaceValue" class="el-radio-group">
          <el-radio class="radio" v-for="wh in whiteSpace" :key="wh" :label="wh">{{ wh }}</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="attr-table-desc">
      <el-table :data="tableAttrData" style="width: 100%">
        <el-table-column
          v-for="item in tabcolums"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          align="center"
          header-align="center"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import { singleAttrData, tableColums } from "./ellipsisdesc";
export default {
  name: "singleEllipsis",
  data() {
    return {
      width: 200,
      selectedType: "ellipsis",
      overflowValue: "hidden",
      whiteSpaceValue: "nowrap",
      overflow: ["hidden", "visible", "scroll", "auto"],
      whiteSpace: ["normal", "wrap", "nowrap"],
      textOverflow: ["clip", "ellipsis", "…"],
      tableAttrData: singleAttrData,
      tabcolums: tableColums
    };
  },
  watch: {
    width() {
      this.updateCss();
    },
    overflowValue() {
      this.updateCss();
    },

    selectedType() {
      this.updateCss();
    },

    whiteSpaceValue() {
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
        `width: ${this.width}px;\noverflow: ${this.overflowValue};\ntext-overflow: ${this.selectedType};\nwhite-space: ${this.whiteSpaceValue}`,
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
  line-height: 40px;
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
</style>
