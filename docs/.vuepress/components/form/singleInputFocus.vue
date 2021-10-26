<template>
  <div>
    <div class="input-wrap">
      <input
        type="text"
        id="text"
        class="input-text"
        placeholder="请输入您的姓名"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleInputFocus',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

input[type='text'] {
  height: 40px;
  width: 200px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #999;
  text-indent: 20px;
  transition: 0.3;
  outline: none;
  font-size: 16px;
}
input[type='text']:hover {
  border-color: #42b983;
}

input[type='text']:focus {
  border-bottom-color: #f1190d;
}

input[type='text']::-webkit-input-placeholder {
  transition: 0.5s;
  font-size: 14px;
  transform-origin: top left;
}

input[type='text']:focus::-webkit-input-placeholder {
  transform: scale(0.8) translateY(-10px);
}
</style>
