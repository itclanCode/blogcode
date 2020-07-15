<template>
  <div>
    <div class="effect-display-wrap">
      <div
        :style="{
        writingMode: writingModeVal
      }"
      >文字排布{{writingModeVal === "horizontal-tb"? "水平":"垂直"}}方向</div>
    </div>
    <div class="language-css extra-class">
      <pre class="language-css" style="margin-bottom:30px;"><code ref="css"></code></pre>
    </div>
    <div class="attr-operate-wrap">
      <div class="attr-inner-content">
        <div class="text-width">决定文本在水平或垂直方向上如何排布-writing-mode:</div>
        <el-radio-group v-model="writingModeVal" class="el-radio-group">
          <el-radio class="radio" v-for="item in writingModes" :key="item" :label="item">{{ item }}</el-radio>
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
import { writingModeData, tableColums } from "./writemodedesc";
export default {
  name: "writeMode",
  data() {
    return {
      writingModeVal: "horizontal-tb",
      writingModes: [
        "horizontal-tb",
        "vertical-rl",
        "vertical-lr",
        "sideways-rl",
        "sideways-lr"
      ],
      tableAttrData: writingModeData,
      tabcolums: tableColums
    };
  },
  watch: {
    writingModeVal() {
      this.updateCss();
    }
  },
  methods: {
    updateCss() {
      this.$refs["css"].innerHTML = Prism.highlight(
        `writing-mode: ${this.writingModeVal};\n-webkit-writing-mode: ${this.writingModeVal};\n-ms-writing-mode: ${this.writingModeVal}`,
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