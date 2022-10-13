<template>
    <div class="wrap">
        <div class="input-wrap">
            <el-input placeholder="请输入内容" v-model="input" clearable class="input-with-select"></el-input>
            <el-button slot="append" @click="handleReplace">替换元素</el-button>  
        </div>
        <div><el-link type="primary" :href="url">{{url}}</el-link></div> 
    </div>
</template>

<script>
    export default {
        name: "replaceElem",
        data() {
            return {
                input: '',
                url:'https://tv.itclan.cn'
            }
        },

        methods: {
            handleReplace() {
                if(this.input) {
                    this.url = this.input;
                    this.input = '';
                }else {
                    this.$message.error('输入框内不能为空');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    width: 400px;
    text-align: center;
    margin: 20px auto;
}

.input-wrap {
    display:flex;
    justify-content: center;
    margin-bottom: 20px;
}
</style>