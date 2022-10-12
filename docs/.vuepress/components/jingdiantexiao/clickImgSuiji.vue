<template>
    <div id="wrap">
          <p class="text" :style="{color}">{{num}}</p>
          <p>
            <el-button :type="onOff == true?'primary':'danger'" @click="handleBtnCLick">{{onOff ==true?'暂停':'开始'}}</el-button>
            <el-button type="primary" @click="handleChange">切换图片</el-button>
        </p>
    </div>
</template>

<script>
    export default {
        name:"clickimgSuiji",
        data() {
            return {
                num: 0,
                numbers: [],
                timer: null,
                onOff: true, // 开关
                color: "red"

            }
        },
        mounted() {
            this.addNum();
            this.randomNum();
        },

        methods: {
          addNum() {
             for(let i = 1;i<=100;i++) {
                this.numbers.push(i)
             }
           },

           randomNum() {
              this.timer = setInterval(() => {
                // 定义一个random()函数，原理是 随机数和最大值减最小值的差相乘 最后再加上最小值
                // Math.floor(Math.random() * (max - min)) + min
                this.num = Math.floor(Math.random() * (this.numbers.length - 1)) + 1
              },100)
           },

           handleBtnCLick() {
              if(this.onOff) {
                this.color="#000";
                clearInterval(this.timer); // 清除定时器
              }else {
                this.color="red";
                this.randomNum();
              }
              this.onOff = !this.onOff;
           },

           handleChange() {
            window.open("https://game.itclan.cn/h5/58-imgchange/",'blank');
           }
         
        }
    }
</script>

<style lang="scss" scoped>

#wrap{
	text-align: center;
}

.text {
    font-size: 20px;
    font-weight: bold;
}
</style>