<template>
    <div>
        <el-button type="primary" @click="handleBtn">点击按钮,自动开启等待3秒后刷新页面</el-button>
    </div>
</template>

<script>
    export default {
        name: 'autoRefresh',
       
        methods: {
            handleBtn() {
                setTimeout(() => {
                    this.autoRefresh();
                },3000)
            },
            autoRefresh() {
                window.location.reload();  // 调用location的reload函数,重新加载
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>