---
title: 全选-复选框-控制表格的列的显示和隐藏
autoGroup-4: 业务型实例
---

### 全选-复选框-控制表格的列的显示和隐藏

### 快速导航

<TOC />

## 背景

在做一些后台数据统计功能时,需要做一些展示层面上的过滤,结合复选框,显示和隐藏某一列或某一行

## 实例效果如下所示


<business-checkboxTable />

## 实例代码如下所示
::: details 点击即可查看示例代码
```js
<template>
    <div>

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
             <!-- 表格部分开始 -->
            <div class="table-content">
            <el-table
                :data="tableData"
                resizable
                height="100%"
                ref="table"
                border
                style="width: 100%"
            >
                <el-table-column
                fixed
                align="center"
                label="日期"
                v-if="formParams.checkeddotNames.length"
                :showOverflowTooltip="true"
                >
                <template slot-scope="scope">
                    <p>
                    {{ scope.row.date }}
                    </p>
                </template>
                </el-table-column>

                <template v-for="(item, index) in dot_info">
                <el-table-column
                    v-if="formParams.checkeddotNames.includes(item.code)"
                    align="center"
                    :label="item.name"
                    :key="index + Math.random()"
                    :showOverflowTooltip="true"
                >
                    <el-table-column
                    align="center"
                    label="pv"
                    width="auto"
                    :showOverflowTooltip="true"
                    >
                    <template slot-scope="scope">
                        <p>
                        {{ scope.row[item.code] && scope.row[item.code].pv }}
                        </p>
                    </template>
                    </el-table-column>
                    <el-table-column
                    align="center"
                    label="uv"
                    width="auto"
                    :showOverflowTooltip="true"
                    >
                    <template slot-scope="scope">
                        <p>
                        {{ scope.row[item.code] && scope.row[item.code].uv }}
                        </p>
                    </template>
                    </el-table-column>
                    <el-table-column align="center" label="refer" width="auto">
                    <template slot-scope="scope">
                        <p>
                        <el-button
                            size="mini"
                            type="primary"
                            @click="handleLook(scope.row[item.code].refers, scope.$index)"
                            >查看
                        </el-button>
                        </p>
                    </template>
                    </el-table-column>
                </el-table-column>
                </template>
            </el-table>
            </div>
            <!-- 表格部分结束 -->

            <!-- 点击查看-出现弹窗开始 -->
            <el-dialog title="查看refer" :visible.sync="dialogTableVisible">
            <el-table :data="refers" border>
                <el-table-column
                align="center"
                prop="pic_name"
                label="refer"
                :showOverflowTooltip="true"
                ></el-table-column>
                <el-table-column
                align="center"
                prop="pv"
                label="pv"
                :showOverflowTooltip="true"
                ></el-table-column>
                <el-table-column
                align="center"
                prop="uv"
                label="uv"
                :showOverflowTooltip="true"
                ></el-table-column>
            </el-table>
            <!-- <div slot="footer" class="dialog-footer">
                            <a class="el-button el-button--primary el-button--small"  
                                @click="handleExportCurrentDate" :href="`/vedio/hbyl/statisticsExport?pic_name${pic_name}&pv=${pv}&uv=${uv}`">导出当前实时数据
                            </a>
                    </div> -->
            </el-dialog>
            <!-- 点击查看-出现弹窗结束-->
    </div>
</template>

<script>
    export default {
        name: 'checkboxTable',
        data() {
            return {
                formParams: {
                     checkAll: true, // 默认全选，true表示全选,false,不全选
                     checkeddotNames: [], // 绑定默认选中
                     code: "", // 向后端传的code字符串
                },
               dot_info: [
                    {
                      code: 'click',
                      name: "画报点击"
                    },

                    {
                        code: 'show',
                        name: "画报展现"
                    },

                    {
                        code: 'opt_bizhi',
                        name: "设置壁纸"
                    },
                    {
                        code: 'h5',
                        name: "设置H5"
                    },
                    {
                        code: 'video',
                        name: "视频播放"
                    }
                ], // 打点名称,模拟的数据源,后端返回的值
                isIndeterminate: false, // 设置 indeterminate 状态，只负责样式控制
                tableData: [
                    {
                        date: "2021-04-05",
                        dot_info: ["click","show","opt_bizhi","h5","video"],
                        name: "画报点击",
                        click: {
                            uv: "1111",
                            pv: "2222",
                            refers: [
                                {
                                    pic_name: "click-xxxx1.jpg",
                                    pv: 2000,
                                    uv: 1000
                                }
                            ]
                        },
                        show: {
                            uv: "3333",
                            pv: "4444",
                            refers: [
                                {
                                    pic_name: "show-xxxx2.jpg",
                                    pv: 2000,
                                    uv: 1000
                                }
                            ]
                        },
                        opt_bizhi: {
                            uv: 111,
                            pv: 222,
                            refers: [
                                {
                                    pv: 222,
                                    uv: 333,
                                    pic_name:"设置壁纸-xxx.jpg"
                                }
                            ]
                        },
                        h5: {
                            uv:2222,
                            pv: 333445,
                            refers: [
                                {
                                    pv: 44554,
                                    uv: 3442,
                                    pic_name: "h5-xxx.jpg"
                                }
                            ]
                        },
                        video: {
                            uv: 6666,
                            pv: 88888,
                            refers: [
                                {
                                    pv: 23442,
                                    uv: 244345,
                                    pic_name: "视频-xxxx.jpg"
                                }
                            ]
                        }
                        
                    },

                    {
                        date: "2021-04-06",
                        dot_info: ["click","show","opt_bizhi","h5","video"],
                        name: "画报展现",
                        click: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: "xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        show: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: "xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        opt_bizhi: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: "xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        h5: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: "xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        video: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: "xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                       
                    },
                    {
                        date: "2021-04-07",
                        dot_info: ["click","show","opt_bizhi","h5","video"],
                        name: "设置壁纸",
                         click: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        show: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        opt_bizhi: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        h5: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        video: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                    },
                    {
                        date: "2021-04-08",
                        dot_info: ["click","show","opt_bizhi","h5","video"],
                        name: "设置H5",
                         click: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        show: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        opt_bizhi: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        h5: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        video: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                    },
                    {
                        date: "2021-04-09",
                        dot_info: ["click","show","opt_bizhi","h5","video"],
                        name: "视频播放",
                         click: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        show: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        opt_bizhi: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        h5: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                        video: {
                            pv: 1234,
                            uv: 2323,
                            refers: [
                                {
                                    pic_name: new Date()+"xxxx2.jpg",
                                    pv: "2222",
                                    uv:"5555"
                                }
                            ]
                        },
                    }
                ], // 打点表格数据
                dialogTableVisible: false, // 查看-弹出弹窗
                refers: [], // 点击查看refer时,出现弹框
                pic_name: "", // refer名称,
                pv: "", // 查看pv,
                uv: "", // 查看uv
            }
        },

        computed: {
             checkOptionsData() {
                return this.dot_info;
             },
        },

         beforeUpdate() {
            // 切换表头，让某些表头显示和隐藏。这个时候切换时，解决表头会出现抖动的现象
            this.$nextTick(() => {
            //在数据加载完，重新渲染表格
            this.$refs.table.doLayout();
            });
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

             // 点击查看
            handleLook(Row) {
                var row = JSON.parse(JSON.stringify(Row));
                console.log(row);
                if (row.length) {
                    this.refers = row;
                    console.log(row[0]);
                    const {pic_name,pv,uv} = row[0];
                    this.pic_name = pic_name;
                    this.pv = pv;
                    this.uv = uv;
                    console.log(this.pic_name, this.pv, this.uv);
                } else {
                    this.refers = [];
                }
                this.dialogTableVisible = true;
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

.table-content {
    margin: 20px 0 20px 0;
    height: 100%;
}
.el-table__body-wrapper {
    height: auto !important;
}
</style>
```
:::

## 分析

这里主要的难点有:

* 全选/复选框的实现
* 结合全选和复选框，控制表格中的某一列显示和隐藏,怎么和表格中的列数据给关联起来
* elementUI表格中某一行,显示三列或多列

::: tip 切换时解决表格的抖动
```js
beforeUpdate() {
            // 切换表头，让某些表头显示和隐藏。这个时候切换时，解决表头会出现抖动的现象
            this.$nextTick(() => {
            //在数据加载完，重新渲染表格
            this.$refs.table.doLayout();
            });
},
```
还有可能就是表格的索引问题`key`值最好不要用索引,可以给每一行添加一个唯一的`key`,设置`Key`,自己添加一个动态的`key`字符串
```js
getNonDuplicateId(32);
function getNonDuplicateId(randomLength:number) {
    let idStr = Date.now().toString(36);
    idStr += Math.random().toString(36).substr(3,randomLength);
    return idStr;
}
```
:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />