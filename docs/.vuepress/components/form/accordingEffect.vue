<template>
  <div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="简介" name="1">
        <div>一个靠前排的90后帅小伙,具有情怀的技匠,路上正追逐斜杠青年的践行者</div>
      </el-collapse-item>
      <el-collapse-item title="开发者" name="2">
        <div>随笔川迹</div>
      </el-collapse-item>
      <el-collapse-item title="微信ID" name="3">
        <div>suibichuanji</div>
      </el-collapse-item>
      <el-collapse-item title="微信公众号" name="4">
        <div>itclanCoder:读书,技术,生活,笔耕不辍,知行合一,旨在用心交流与快乐分享,做一个具有情怀的先行者</div>
      </el-collapse-item>
      <el-collapse-item title="官网" name="5">
        <div>https://coder.itclan.cn/</div>
      </el-collapse-item>
      <el-collapse-item title="其他业务" name="6">
        <div>广告文案策划编写/短视频后期制作(特效,后期剪辑处理)/配音/公众号代运营,推广</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "accordingEffect",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>