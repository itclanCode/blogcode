<template>
    <div class="wrap">
        <div class="outer-container">
            <div class="inner-container">
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
                itclanCoder,https://coder.itclan.cn,itclan.cn,书以启智,技于谋生,活出斜杠
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'curWidthScroll'
    }
</script>

<style lang="scss" scoped>
.wrap {
    text-align: center;
}

.outer-container{
	width: 360px;
	height: 200px;
	position: relative;
	overflow: hidden;
    margin: 10px auto;
}
.inner-container{
	position: absolute;
	left: 0;
	top: 0;
	right: -17px;  // 通过移动滚动条,实现隐藏
	bottom: 0;
	overflow-x: hidden;
	overflow-y: scroll;   // 垂直滚动
}
</style>