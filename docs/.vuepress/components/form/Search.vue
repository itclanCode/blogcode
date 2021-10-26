<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="搜索">
        <span slot="label"><i class="el-icon-search"></i>搜索</span>
        <el-tabs v-model="searchActiveName">
          <el-tab-pane
            v-for="item in searchs"
            :label="item.label"
            :name="item.name"
            :key="item.label"
          >
            <div>
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                  >搜索</el-button
                >
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="工具">
        <el-tabs v-model="toolsActiveName">
          <el-tab-pane
            v-for="item in tools"
            :label="item.label"
            :name="item.name"
            :key="item.label"
          >
            <div>
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                  >搜索</el-button
                >
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="社区">
        <el-tabs v-model="communActiveName">
          <el-tab-pane
            v-for="item in communitys"
            :label="item.label"
            :name="item.name"
            :key="item.name"
          >
            <div>
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                  >搜索</el-button
                >
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="图片搜索">
        <el-tabs v-model="pictureActiveName">
          <el-tab-pane
            v-for="item in pictureAssets"
            :label="item.label"
            :name="item.name"
            :key="item.name"
          >
            <div>
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                  >搜索</el-button
                >
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="图标搜索">
        <ul class="el-tab-ul">
          <li v-for="(item,index) in iconAssets" :key="index">
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.tip"
              placement="top"
            >
              <a target="_blank" :href="item.url">{{ item.name }}</a>
            </el-tooltip>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="设计作图">
        <el-tabs v-model="designActiveName">
          <el-tab-pane
            v-for="item in designDraws"
            :label="item.label"
            :name="item.name"
            :key="item.name"
          >
            <div>
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                  >搜索</el-button
                >
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="代码托管">
        <el-tabs v-model="codeHostActiveName">
          <el-tab-pane
            v-for="item in codehosts"
            :label="item.label"
            :name="item.name"
            :key="item.name"
          >
            <div>
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                  >搜索</el-button
                >
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="求职">
        <el-tabs v-model="jobWantedActiveName">
          <el-tab-pane
            v-for="item in jobwanteds"
            :label="item.label"
            :name="item.name"
            :key="item.name"
          >
            <div>
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                  >搜索</el-button
                >
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="服务器">
        <ul class="el-tab-ul">
          <li v-for="(item,index) in services" :key="index">
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.tip"
              placement="top"
            >
              <a target="_blank" :href="item.url">{{ item.name }}</a>
            </el-tooltip>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
const types = require("../../public/js/search");
export default {
  name: "Search",
  data() {
    return {
      searchActiveName: "baidu",
      toolsActiveName: "weightfind",
      communActiveName: "MDN",
      codeHostActiveName: "github",
      jobWantedActiveName: "lagou",
      pictureActiveName: "unsplash",
      designActiveName: "可画",
      searchs: types.searchs,
      tools: types.tools,
      communitys: types.communitys,
      codehosts: types.codehosts,
      jobwanteds: types.jobwanteds,
      services: types.services,
      pictureAssets: types.pictureAssets,
      iconAssets: types.iconAssets,
      designDraws: types.designDraws,
      inputVal: "",
    };
  },

  methods: {
    handleInput(event) {
      this.inputVal = event;
    },

    handleSearch(url) {
      const key = this.inputVal;
      console.log(url);
      const openUrl = `${url}${key}`;
      console.log(openUrl);
      if (this.inputVal) {
        window.open(openUrl, "_blank");
        this.inputVal = "";
      } else {
        this.$message({
          message: "亲,请您输入关键词后进行搜索哦!",
          showClose: true,
          type: "warning",
          center: true,
          duration: 4000,
        });
      }
    },

    enterSearch(url) {
      const key = this.inputVal;
      const openUrl = `${url}${key}`;
      if (this.inputVal) {
        window.open(openUrl, "_blank");
        this.inputVal = "";
      } else {
        this.$message({
          message: "亲,请您输入关键词后进行搜索哦!",
          showClose: true,
          type: "warning",
          center: true,
          duration: 4000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-tab-ul {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  li {
    margin-right: 20px;
    overflow-x: auto;
  }
}
</style>