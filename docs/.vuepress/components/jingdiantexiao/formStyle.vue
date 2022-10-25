<template>
  <div class="wrap">
    <el-form
      status-icon
      label-width="100px"
    >
      <el-form-item>
        名字:
        <input type="text"
          v-model="name"  
          autocomplete="off"
          placeholder="请输入名字"
          @blur="handleInput('blur')"
          @focus="handleInput('focus')"
          :style="style" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "formStyle",
  data() {
    return {
        name: '',
        style: {
            border: "1px solid #ccc"
        }
    }
  },

  methods: {
    handleInput(type) {
        if(type == 'blur') {
            this.style.border = '1px solid #ccc';
        }else {
            this.style.border = '1px solid red';
        }
    }
  }

};
</script>

<style lang="scss" scoped>
.wrap {
    text-align: center;
    margin: 20px 0 20px 0;
}
</style>
