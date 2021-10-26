<template>
  <div>
    <div>
      <div
        class="effect-display-wrap"
        :style="{
          width: width + 'px',
          overflow: overflowValue,
          textOverflow: textOverflowValue,
          boxOrient: boxOrientValue,
          lineClamp: lineClamp,
          display: displayValue,
        }"
      >
        多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,line-clamp指定显示多少列,弹性和模型，word-break:break-all允许在单词内换行
        box-sizing:border-box:增加padding与border不把它计算到里面去,多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号
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
          :max="705"
          show-input
          input-size="mini"
        ></el-slider>
      </div>
      <div class="attr-inner-content">
        <div class="text-width">显示行数:</div>
        <el-slider
          class="slider"
          v-model="lineClamp"
          :min="1"
          :max="10"
          show-input
          input-size="mini"
        ></el-slider>
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
import { multiAttrData, tableColums } from "./ellipsisdesc";

export default {
  name: "multiEllipsis",
  data() {
    return {
      width: 250,
      lineClamp: 2,
      displayValue: "-webkit-box",
      overflowValue: "hidden",
      textOverflowValue: "ellipsis",
      whiteSpaceValue: "nowrap",
      boxOrientValue: "vertical",
      tableAttrData: multiAttrData, // 参数描述
      tabcolums: tableColums
    };
  },
  watch: {
    width() {
      this.updateCss();
    },

    lineClamp() {
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
        `width: ${this.width}px;\ndisplay: -webkit-box;\noverflow: hidden;\ntext-overflow: ellipsis;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: ${this.lineClamp};`,
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
  line-height: 45px;
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
