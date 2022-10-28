<template>
    <div class="el-button-wrap">
       <el-radio-group v-model="type">
              <el-radio-button v-for="(item,index) in lists" :key="index" :label="item">{{item}}</el-radio-button>
      </el-radio-group>
    </div>
  </template>
  
  <script>
    export default {
      name: 'activeTab',
      data() {
          return {
              type: '客来影视TV',
              lists: ["客来影视TV","IT资源网","IT资源导航","客来游戏"],
          }
      },
      methods: {
        
      },
    };
  </script>
  <style scoped>
    .el-button-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>