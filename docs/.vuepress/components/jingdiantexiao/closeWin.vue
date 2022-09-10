<template>
    <div class="wrap">
        <el-button type="primary" @click="handleBtn">点击按钮,关闭当前网页</el-button>
    </div>
</template>

<script>
    export default {
        name: 'closeWin',
        methods: {
            handleBtn() {
                //window.close();  // 调用window对象的close函数,关闭窗口
                var userAgent = navigator.userAgent;
                if (userAgent.indexOf("MSIE") > 0) {
                    if (userAgent.indexOf("MSIE 6.0") > 0) {
                      window.opener = null;
                      window.close();
                    } else {
                      window.open("", "_top");
                      window.top.close();
                    }
                } else if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
                    window.location.href = "https://coder.itclan.cn "; //火狐默认状态非window.open的页面window.close是无效的
                } else {
                    window.opener = null;
                    window.open("https://coder.itclan.cn", "_self");
                    window.close();
                }
                // window.open('https://coder.itclan.cn','_self').close()
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>