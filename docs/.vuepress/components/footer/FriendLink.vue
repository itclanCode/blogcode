<template>
  <div class="link-wrap">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="友情链接" name="1">
        <ul>
          <li v-for="item in linkers">
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.desc"
              placement="top"
            >
              <a :href="item.url">{{ item.name }}</a>
            </el-tooltip>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="申请友链" class="applay-link" name="2">
        <el-button
          @click="handleApplayLink('http://itclancoder.mikecrm.com/thAiyjC')"
          type="danger"
          class="applay-link-btn"
          >申请互换友链</el-button
        >
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
const getFriendsLink = require("../../public/js/frindlink");
export default {
  name: "FriendLink",
  data() {
    return {
      activeNames: ["1"],
      linkers: getFriendsLink(),
    };
  },

  methods: {
    handleApplayLink(openUrl) {
      window.open(openUrl, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.link-wrap {
  padding: 20px 0 0 0;
  ul {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    li {
      list-style: none;
      margin-top: 20px;
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }

  .applay-link {
    text-align: center;
  }

  .applay-link-btn {
    display: inline-block;
    margin-top: 25px;
  }
}
</style>
