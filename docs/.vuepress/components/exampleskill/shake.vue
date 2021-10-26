<template>
  <div>
    <span class="shake">抖</span>
  </div>
</template>

<script>
export default {
  name: "shake"
};
</script>

<style lang="stylus" scoped>
.shake {
  width: 40px;
  height: 40px;
  display: block;
  background: lightgreen;
  border-radius: 50%;
  margin: 5px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  -webkit-transition: all 0.25s;
  margin: 0 auto;
}

.shake:hover {
  -webkit-animation: shake 0.25s;
  background: lightblue;
}

@keyframes shake {
  0%, 10%, 55%, 90%, 94%, 98%, 100% {
    -webkit-transform: scale(1, 1);
  }

  30% {
    -webkit-transform: scale(1.14, 0.86);
  }

  75% {
    -webkit-transform: scale(0.92, 1.08);
  }

  92% {
    -webkit-transform: scale(1.04, 0.96);
  }

  96% {
    -webkit-transform: scale(1.02, 0.98);
  }

  99% {
    -webkit-transform: scale(1.01, 0.99);
  }
}
</style>