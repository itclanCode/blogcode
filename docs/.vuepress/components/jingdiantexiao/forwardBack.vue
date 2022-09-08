<template>
    <div class="wrap">
        <el-button type="primary" @click="handleBack">后退</el-button>&nbsp;&nbsp;
        <el-button type="primary" @click="handleForward">前进</el-button>
    </div>
</template>

<script>
    export default {
        name:'forwardBack',
        methods: {
            // 后退
            handleBack() {
                window.history.back();
            },

            // 前进
            handleForward() {
                window.history.forward();
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>