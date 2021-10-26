<template>
  <div>
    <div class="wrap">
      <span class="text">距离高考还有8天</span>
      <span class="text">距离高考还有7天</span>
      <span class="text">距离高考还有6天</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "multiRibbon"
};
</script>

<style lang="scss" scoped>
.wrap {
  text-align: center;
}
.text {
  position: relative;
  display: inline-block;
  margin-right: 16px;
  padding: 0 10px;
  height: 32px;
  line-height: 32px;
  background-color: #42b983;
  color: #fff;
  font-size: 16px;
}

.text::before {
  position: absolute;
  top: 0;
  left: -16px;
  border-width: 16px 16px 16px 0;
  border-style: solid;
  border-color: transparent #42b983 transparent transparent;
  content: "";
}

.text::after {
  position: absolute;
  top: 0;
  right: -16px;
  border-width: 16px 16px 16px 0;
  border-style: solid;
  border-color: #42b983 transparent #42b983 #42b983;
  content: "";
}
</style>