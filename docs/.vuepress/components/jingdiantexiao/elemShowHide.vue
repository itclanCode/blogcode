<template>
    <div class="wrap">
        <div>
            <el-button type="primary" @click="handleBtn">{{showText}}</el-button>
        </div>
        <div v-show="isStatus">
            <img class="medium-zoom lazy" loading="lazy" src="https://coder.itclan.cn/images/rightbar/itclancoder-code.jpg" width="120" height="120" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "elemShowHide",
        data() {
            return {
                isStatus: true,
            }
        },

        computed: {
            showText() {
                return this.isStatus == true?'显示':'隐藏'
            }
        },
        
        methods: {
            handleBtn() {
                if(this.isStatus) {
                    this.isStatus = true;
                }else {
                    this.isStatus = false;
                }
                this.isStatus = !this.isStatus;
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    display:flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
}
</style>