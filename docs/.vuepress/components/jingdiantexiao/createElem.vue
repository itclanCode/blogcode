<template>
    <div>
        <div class="wrap">
          <el-button type="primary" @click="handleAddElem">创建元素</el-button>
        </div>
        <p id="p1"></p>
        <p id="p2"></p>
    </div>
    
</template>

<script>
    export default {
        name: "createElem",
        methods: {
            handleAddElem() {
                // 使用innerHTML创建新元素
                var p1 = document.getElementById("p1");
                // 设置innerHTML内容
                p1.innerHTML = "<span>我是通过innerHTML插入的文本</span>";
                // 使用createElement来创建元素
                var span = document.createElement("span");
                // 为新元素内容创建一个文本节点
                span.appendChild(document.createTextNode('我是通过createElement创建的元素'));
                //获取p2元素
                var p2 = document.getElementById("p2");
                p2.appendChild(span);
            }
        }
    }
</script>

<style lang="scss" scoped>
div {
    text-align:center;
}
.wrap {
    display:flex;
    justify-content: center;
}
</style>