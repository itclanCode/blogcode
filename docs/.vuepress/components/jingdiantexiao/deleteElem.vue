<template>
    <div>
        <div class="wrap">
            <p>
                <el-button type="primary" @click="handleAddElem">添加元素</el-button>
                <el-button type="danger"  @click="handleDeleteElem">删除元素</el-button>
            </p>
        </div>
        <p id="p2"></p>
    </div>
    
</template>

<script>
    export default {
        name: 'deleteElem',
        methods: {
            handleAddElem() {
                var span = document.createElement("span");
                span.setAttribute('id','del');
                // 为新元素内容创建一个文本节点
                span.appendChild(document.createTextNode('新创建出来DOM,后又会被删除'));
                var p2 = document.getElementById("p2");
                // 挂载
                p2.appendChild(span);
            },
            handleDeleteElem() {
                let del = document.getElementById("del");
                del.parentNode.removeChild(del);
            }
        }
    }
</script>

<style lang="scss" scoped>
div {
    text-align: center;
}    
.wrap {
    display: flex;
    justify-content: center;
}
</style>