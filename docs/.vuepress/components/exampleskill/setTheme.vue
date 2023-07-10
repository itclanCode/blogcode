<template>
        <div class="css-switch-theme">
            <el-switch
                    @change="hanldeSwitchTheme"
                    v-model="themValue"
                    active-text="暗黑"
                    inactive-text="白色"
                    active-color="#42b983"
            >
            </el-switch>
        </div>
  </template>
  
  <script>

  export default {
    name:"setTheme",
    data() {
        return {
           themValue: false   
        }
    },

    methods: {
        hanldeSwitchTheme(value) {
                if(value) {
                        document.querySelector('html').style = 'filter:invert(1) hue-rotate(180deg);transition:all 300ms';
                }else {
                 // 白色模式
                    console.log(value);
                 document.querySelector('html').style = 'filter:grayscale(0);transition:all 300ms';
               }
        }
    }
  };
  </script>
  
  <style lang="stylus" scoped>
  .css-switch-theme {
        display:flex;
        justify-content: center;
  }
  </style>