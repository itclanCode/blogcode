<style scoped lang="scss">
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .tab-container {
    border: 1px solid #eee;
    margin: 50px auto;
    padding: 20px 0;
    .title{
      padding-left:30px;
      font-size: 12px;
      color:#ddd;
    }
    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        cursor: pointer;
        position: relative;
        font-size: 18px;
        color: #909399;
        background-color: #fff;
        &::after {
          content: "";
          width: 0;
          height: 2px;
          background-color: #00adb5;
          position: absolute;
          left: 100%;
          bottom: 0;
          transition: all .4s;
        }

        &:hover {
          color: #00adb5;
          &::after {
            width: 100%;
            left: 0;
            transition-delay: 0.1s;
          }
          & ~ li::after {
            left: 0;
          }
        }
      }

    }
  }
</style>

<template>
  <div class="tab-container">
    <div class="title">hover to change</div>
    <ul class="tabs">
      <li class="tab-item" v-for="(tabName,index) in lists" :key="index">{{tabName}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hoverTab',
    data() {
      return {
        lists: ['前端','后端','算法','区块链','大数据','架构设计','DBA']
      }
    },
  }
</script>
