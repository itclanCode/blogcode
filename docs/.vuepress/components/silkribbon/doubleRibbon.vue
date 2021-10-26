<template>
  <div>
    <div class="wrap">
      <span>距离高考还有10天</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "doubleRibbon"
};
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  display: inline-block;
  left: 35%;
  top: 20px;
  margin-bottom: 30px;
}

.wrap span {
  position: relative;
  z-index: 2;
  display: inline-block;
  padding: 0 15px;
  height: 32px;
  line-height: 32px;
  background-color: #42b983;
  color: #fff;
  font-size: 16px;
  box-shadow: 0 10px 6px -9px rgba(0, 0, 0, 0.6);
}

.wrap span::before,
.wrap span::after {
  position: absolute;
  bottom: -6px;
  border-width: 3px 5px;
  border-style: solid;
  content: "";
}

.wrap span::before {
  left: 0;
  border-color: #42b983 #42b983 transparent transparent;
}

.wrap span::after {
  right: 0;
  border-color: #42b983 transparent transparent #42b983;
}

.wrap::before,
.wrap::after {
  position: absolute;
  top: 6px;
  content: "";
  border-style: solid;
  border-color: #42b983;
}

.wrap::before {
  left: -32px;
  border-width: 16px 26px 16px 16px;
  border-left-color: transparent;
}

.wrap::after {
  right: -32px;
  border-width: 16px 16px 16px 26px;
  border-right-color: transparent;
}
</style>