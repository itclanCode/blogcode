<template>
  <div class="wrap">
    <el-form :inline="true" :model="formParams">
      <el-form-item>
        <el-input v-model="formParams.id" type="hidden"  ></el-input>
      </el-form-item>  
      <el-form-item label="姓名">
        <el-input v-model="formParams.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="年份">
        <el-select v-model="formParams.year" placeholder="请选择年份" @change="handleSelect">
          <el-option v-for="item in formParams.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "hideInputParams",
  data() {
    return { 
      formParams: {
        id: '我是隐藏携带的参数',
        name: "",
        year: "",
        options: [
            {
                label: '2022',
                value: '2022'
            },
            {
                label: '2021',
                value: '2021'
            },
            {
                label: '2020',
                value: '2020'
            },
            {
                label: '2019',
                value: '2019'
            },
            {
                label: '2018',
                value: '2018'
            },
            {
                label: '2017',
                value: '2017'
            },
            {
                label: '2016',
                value: '2016'
            }
        ]
      },
    };
    
  },
  methods: {
    handleSelect(val) {
        console.log(val);
        this.formParams.year = val;
    },
    onSubmit() {
      console.log("submit!");
      const {id,name,year} = this.formParams;
      if(name && year) {
        this.$alert(`id:${id},名字:${name},年份:${year}`, '提交的数据', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }else {
        this.$message.error('名字或年份不能为空');
      }
     
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
    text-align: center;
}
</style>