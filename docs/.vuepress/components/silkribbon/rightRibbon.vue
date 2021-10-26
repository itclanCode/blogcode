<template>
  <div>
    <div class="wrap">
      <span class="text">距离高考还有9天</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightRibbon"
};
</script>

<style lang="scss" scoped>
.wrap {
  text-align: center;
}
.text {
  position: relative;
  display: inline-block;
  padding: 0 15px;
  height: 32px;
  line-height: 32px;
  background-color: #42b983;
  color: #fff;
  font-size: 16px;
}

.text::before {
  position: absolute;
  top: -4px;
  left: 0;
  border-width: 2px 4px;
  border-style: solid;
  border-color: transparent #42b983 #42b983 transparent;
  content: "";
}

.text::after {
  position: absolute;
  top: 0;
  right: -8px;
  border-width: 16px 8px 16px 0;
  border-style: solid;
  border-color: #42b983 transparent #42b983 #42b983;
  content: "";
}
</style>