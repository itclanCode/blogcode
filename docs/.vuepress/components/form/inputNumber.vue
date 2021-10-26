<template>
  <div>
      <div class="input-wrapper">
           <div> 
             <el-input-number v-model="num" @change="handleChange" :min="1" label="描述文字"></el-input-number>
            </div>
           <div class="text">父组件count:{{num}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "inputNumber",
    data() {
      return {
        num: 1
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style lang="scss" scoped>
.input-wrapper {
  padding: 30px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .text {
    margin: 20px 0 0 0;
  }
}
</style>