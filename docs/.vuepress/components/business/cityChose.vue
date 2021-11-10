<template>
    <div class="area-wrap">
        <el-button
          size="small"
          type="default"
          @click="handleSelectArea"
          class="select-area-btn"
        >
          选择投放地区
        </el-button>
         <div class="area-list" v-if="forms.areaData.length">
          <el-button
            size="small"
            @click="handleSelectItem(index)"
            v-for="(item, index) in forms.areaData"
            :key="index"
            type="primary"
            >{{ item }}<i class="el-icon-close el-icon--right"></i>
          </el-button>
        </div>
        <!-- 投放地区模态框开始 -->
        <el-dialog :visible.sync="dialogAreaVisible">
        <div>
            <p>已选地区</p>
        </div>
        <div class="dialog-selected-area">
            <el-button
            @click="handleDeleteBtn(item, index)"
            size="mini"
            class="select-btn"
            v-show="item"
            type="primary"
            v-for="(item, index) in selectedTexts"
            :key="index"
            >
            {{ item }}<i class="el-icon-close el-icon--right"></i>
            </el-button>
        </div>
        <div>
            <el-cascader
            size="small"
            :options="options"
            :props="{ multiple: true, checkStrictly: true }"
            @change="handleSelectChange"
            clearable
            separator="/"
            >
            </el-cascader>
        </div>
        <div slot="footer" align="center" class="dialog-footer">
            <el-button @click="dialogAreaVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleDiaLogSelect">确 定</el-button>
        </div>
        </el-dialog>
        <!-- 投放地区模态框结束 -->
    </div>
</template>

<script>
import { cityData } from "./cityData.js";
    export default {
        name: 'cityChose',
        data() {
            return {
                 dialogAreaVisible: false, // 点击选择投放地区,弹框
                 options: cityData, // 投放地区-城市选择地区数据
                 selectedTexts: [], // 投放地区-模态框内已选地区-回显部分
                 forms: {
                     areaData: [],// 投放地区,此处展示部分
                     areas: ""    // 最终需要将回显地内容,拼接成字符串传给后端
                 }
            }
        },

        methods: {
             // 选择投放地区
            handleSelectChange(item) {
                console.log(item);
                const _that = this;
                item.forEach(function (item) {
                    item.forEach(function (i) {
                    console.log(i);
                    _that.selectedTexts.push(i);
                    _that.selectedTexts = Array.from(new Set(_that.selectedTexts));
                    });
                });
            },
             // 已选地区删除
            handleDeleteBtn(item, index) {
              console.log(item, index);
              this.selectedTexts.splice(index, 1);
            },

            // 选择投放地区
            handleSelectArea(value) {
            console.log("选择投放地区");
            console.log(value);
            this.dialogAreaVisible = true;
            this.selectedTexts = [];
            },

            // 投放地区,删除
            handleSelectItem(index) {
            this.forms.areaData.splice(index, 1);
            },

             // 选择投放地区弹框,确定
            handleDiaLogSelect() {
            this.forms.areaData = JSON.parse(JSON.stringify(this.selectedTexts));
            console.log(this.forms.areaData);
            this.forms.areas = this.forms.areaData.join(",");
            console.log(this.forms.areas);
            this.dialogAreaVisible = false;
            },
        }
    }
</script>

<style lang="scss" scoped>
.area-wrap {
    display: flex;
}
.select-area-btn {
    margin-right: 10px;
}
.select-area-btn,.area-list {
    margin-top: 20px;
}

.dialog-selected-area {
    margin: 10px 0 10px 0;
}
</style>