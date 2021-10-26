<template>
  <div>
    <div class="form-wrap">
      <div class="item">
        <div class="label">姓名:</div>
        <input type="text" placeholder="请输入您的姓名" />
      </div>
      <div class="item">
        <div class="label">密码:</div>
        <input type="password" placeholder="请输入密码" />
      </div>

      <div class="item">
        <div class="label">验证密码:</div>
        <input type="password" placeholder="请再次输入密码" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mulInputFocus',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.form-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  .item {
    display: flex;
    justify-content: center;
    .label {
      width: 80px;
      text-align: right;
      line-height: 40px;
      margin-right: 10px;
    }
    input[type='text'],
    input[type='password'] {
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
    input[type='text']:hover,
    input[type='password']:hover {
      border-color: #42b983;
    }

    input[type='text']:focus,
    input[type='password']:focus {
      border-bottom-color: #f1190d;
    }

    input[type='password']::-webkit-input-placeholder,
    input[type='text']::-webkit-input-placeholder {
      transition: 0.5s;
      font-size: 14px;
      transform-origin: top left;
    }
    input[type='password']:focus::-webkit-input-placeholder,
    input[type='text']:focus::-webkit-input-placeholder {
      transform: scale(0.8) translateY(-10px);
    }
  }
}
</style>
