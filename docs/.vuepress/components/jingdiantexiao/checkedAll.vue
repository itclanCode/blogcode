<template>
    <div class="wrap">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedLanNames" @change="handleCheckedlanguagesChange">
                <el-checkbox v-for="lan in checkedLanOptions" :label="lan.type" :key="lan.name">{{lan.name}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: 'checkedAll',
        data() {
            return {
                checkAll: true, // 默认全选，true表示全选,false,不全选
                checkedLanNames: [], // 绑定默认选中
                type: "", // 向后端传的code字符串
                languages: [
                    {
                        type:'1',
                        name: "前端"
                    },
                    {
                        type:'2',
                        name: "后端"
                    },
                    {
                        type:'3',
                        name: "小程序"
                    },
                    {
                        type:'4',
                        name: "云开发"
                    },
                ],
                isIndeterminate: true
            };
       },

       mounted () {
           this.checkedLanNames = this.languages.map(item => item.type);
       },

       computed: {
         checkedLanOptions() {
            return this.languages;
         }
       },

       methods: {
        handleCheckAllChange(val) {
            //console.log("全选", val); // val就是v-model绑定的值,即this.checkAll
            if (this.checkAll) {
                  // 当全选被选中的时候,循环遍历源数据,把数据的每一项加入到默认选中的数组中区
                 this.checkedLanNames = this.languages.map((item) => item.type);
                } else {
                    this.checkedLanNames = [];
                    this.type = "";
                }
                this.isIndeterminate = false;
        },
        handleCheckedlanguagesChange(value) {
                // value就是v-model绑定的值,即this.checkedLanNames
                console.log(value);
                if (this.checkedLanNames.length == this.languages.length) {
                    this.checkAll = true;
                } else {
                    this.checkAll = false;
                }
                this.type = this.checkedLanNames.join(",");  // 用逗号拼接成字符串传递给后端
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    text-align: center;
    margin:20px 0 20px 0;
}
</style>