<template>
    <div class="el-checkbox-wrap">
        <div class="select-all">
             <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="formParams.checkAll"
              @change="handleCheckAllChange"
              >全选
            </el-checkbox>
        </div>
        <div>
            <el-checkbox-group
              v-model="formParams.checkeddotNames"
              @change="handleCheckeddotNamesChange"
            >
              <el-checkbox
                v-for="item in checkOptionsData"
                :label="item.code"
                :key="item.code"
              >
                {{ item.name }}
              </el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "checkbox",
        data() {
            return {
                formParams: {
                    isIndeterminate: false, // 设置 indeterminate 状态，只负责样式控制
                    checkAll: true, // 默认全选，true表示全选,false,不全选
                    checkeddotNames: [], // 绑定默认选中
                    code: "", // 向后端传的code字符串
                },

                dot_info: [
                    {
                      code: '1',
                      name: "画报点击"
                    },

                    {
                        code: '2',
                        name: "画报展现"
                    },

                    {
                        code: '3',
                        name: "设置壁纸"
                    },
                    {
                        code: '4',
                        name: "设置H5"
                    },
                    {
                        code: '5',
                        name: "视频播放"
                    }
                ]
            }
        },

        computed: {
             checkOptionsData() {
                return this.dot_info;
             },
        },

        mounted() {
            this.formParams.checkeddotNames = this.dot_info.map(item => item.code)
        },

        methods: {
            // 全选
            handleCheckAllChange() {
                //console.log("全选", val); // val就是v-model绑定的值,即this.formParams.checkAll
               if (this.formParams.checkAll) {
                // 当全选被选中的时候,循环遍历源数据,把数据的每一项加入到默认选中的数组中区
                this.formParams.checkeddotNames = this.dot_info.map((item) => item.code);
                } else {
                    this.formParams.checkeddotNames = [];
                    this.formParams.code = "";
                }
                this.isIndeterminate = false;
            },

             // 全选后面的单选
            handleCheckeddotNamesChange(value) {
                // value就是v-model绑定的值,即this.formParams.checkeddotNames
                console.log(value);
                if (this.formParams.checkeddotNames.length == this.dot_info.length) {
                    this.formParams.checkAll = true;
                } else {
                    this.formParams.checkAll = false;
                }

                this.formParams.code = this.formParams.checkeddotNames.join(",");  // 需要拼接成字符欻,用逗号,具体以什么样的格式,可与后端协商
            },
        }
    }
</script>

<style lang="scss" scoped>

.select-all {
    margin-right: 20px;
}
.el-checkbox-wrap {
    display: flex;
    align-content: center;
    margin: 20px 0 20px 0;
}
</style>