<template>
    <div class="vue-slide-verify">
        <slide-verify :l="42"
            :r="10"
            :w="310"
            :h="155"
            slider-text="向右滑动"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            ></slide-verify>
     </div>   
</template>
<script>
import Vue from "vue";
import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);
export default  {
    name:'vueSlideVerify',
    data(){
        return {
            msg: '',
        }
    },
    methods: {
        onSuccess(){
            this.$message.success('成功拖动到指定位置');
        },
        onFail(){
            this.$message.error('请正确拖动滑块到指定位置');
        },
        onRefresh(){
            this.msg = ''
        }
    }
}
</script>
<style>
.vue-slide-verify {
    display:flex;
    justify-content: center;
    margin:20px 0 20px 0;
}
</style>
