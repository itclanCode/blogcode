<template>
  <div class="wrap">
    <input :type="type" name="pass" v-model="inputVal" />
    <button @click="switchPass">{{ type==="password" ? "隐藏密码":"显示密码"}}</button>
  </div>
</template>

<script>
export default {
  name: "inputPassword",
  data() {
    return {
      type: "password",
      inputVal: "123456",
      onOff: true
    };
  },

  methods: {
    switchPass() {
      if (this.onOff) {
        this.type = "password";
      } else {
        this.type = "text";
      }
      this.onOff = !this.onOff;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrap {
  display: flex;
  justify-content: center;
  width: 300px;
  margin: 20px auto;

  input {
    border: #cccccc 1px solid;
    background-color: #fff;
    color: #666;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
  }

  button {
    width: 30%;
    background: #42b983;
    outline: none;
    color: #fff;
    border: none;
    cursor: pointer;
  }
}
</style>