---
title: 日期时间限制选择
autoGroup-1: 业务型实例
---

## 日期时间限制的选择

## 快速导航

<TOC />

## 开始时间之前的日期不能选-结束时间以后能选择

背景: 在添加一些活动上下线时间时,需要对日期选择进行限制

开始时间之前的时间不能选,结束时间,结束时间不能早于当前时间

<business-datePicker />

实例代码如下所示

::: details 时间选择范围-开始时间之前不能选-结束时间不能早于当前时间
```js
<template>
    <div>
        <div>
            <el-form :model="forms"
                     :rules="rules"
                     ref="forms"
                     label-width="100px">
                <el-form-item label="开始时间" prop="start_time">
                    <el-date-picker
                    size="small"
                    type="datetime"
                    placeholder="请选择开始时间"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    v-model="forms.start_time"
                    :default-time="defaultStartTime"
                    :picker-options="startPickerOptions"
                    :clearable="false"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间" prop="end_time">
                    <el-date-picker
                    size="small"
                    type="datetime"
                    placeholder="请选择结束时间"
                    v-model="forms.end_time"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    :default-time="defaultEndTime"
                    :picker-options="endPickerOptions"
                    :clearable="false"
                    >
                    </el-date-picker>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "datePicker",
        data() {
            return {
                defaultStartTime: this.getHmsTime(), // 默认开始时间-获取开始时间的时分秒
                defaultEndTime: this.getHmsTime(), // 默认结束时间-获取结束时间的时分秒
                forms: {
                    start_time: "", // 开始时间
                    end_time: "", // 结束时间
                },
                 // 时间选择器-当前时间日期选择器
                startPickerOptions: {
                    disabledDate(time) {
                    // 禁用当前以前的时间不能选
                    return time.getTime() < Date.now() - 3600 * 1000 * 24;
                    },
                },
                // 时间选择器-当前时间日期选择器
                endPickerOptions: {
                    disabledDate(time) {
                    // 时间选择器-结束时间,当日以后的能选
                    return time.getTime() < Date.now() - 8.64e7;
                    },
                },
                rules: {
                    start_time: [{ required: true, message: "开始时间不能为空", trigger: "blur" }],
                    end_time: [{ required: true, message: "结束时间不能为空", trigger: "blur" }],
                },
            }
        },

        methods: {
             // 获取时分秒
          getHmsTime() {
            let today = new Date();
            let h = today.getHours(); // 获取小时
            let m = today.getMinutes(); // 获取分钟
            let s = today.getSeconds(); // 获取秒
            // 补0操作
            m = this.checkTime(m);
            s = this.checkTime(s);
            this.defaultTime = `${h}:${m}:${s}`;
            setTimeout(() => {
                    this.getHmsTime();
                 }, 500);
            },
           // 补零操作
            checkTime(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            },
          }
        }
</script>

<style lang="scss" scoped>

</style>
```
:::

## 时间带月份范围的

有时候也有这样的需求,一周之内的

<business-monthDater />

示例代码如下所示


::: details 时间范围带月份
```js
<template>
    <div>
        <el-form>
            <el-form-item>
                <el-date-picker
                    size="mini"
                    value-format="yyyy-MM-dd"
                    v-model="formParams.dateVal"
                    align="right"
                    :clearable="true"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @change="dateChange"
                    :picker-options="pickerOptions"
                    :default-time="[formParams.start_time, formParams.end_time]"
                >
                </el-date-picker>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'monthDater',
        data() {
            return {
                formParams: {
                    dateVal: '',
                     start_time: "", // 开始时间
                     end_time: "", // 结束时间
                },

                pickerOptions: {
                    shortcuts: [
                        {
                            text: "最近7天",
                            onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 6); // 7天
                            picker.$emit("pick", [start, end]);
                            },
                        },

                        {
                            text: "最近30天",
                            onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 *29); // 30天
                            picker.$emit("pick", [start, end]);
                            },
                        },
                    ],
                },
            }
        },
        methods: {
            // 获取比当前日期一个星期之前的日期
            getStartDate() {
                let nowDate = new Date();
                let startStr = nowDate.setTime(nowDate.getTime() - 3600 * 1000 * 24 * 7); 
                let result = new Date(startStr);
                let year = result.getFullYear(); // 获取年
                let month =
                    result.getMonth() + 1 < 10
                    ? "0" + (nowDate.getMonth() + 1)
                    : nowDate.getMonth() + 1; // 获取月
                let day = result.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
                let dateStr = `${year}-${month}-${day}`;
                return dateStr;
            },

            // 获取当前日期
            getEndDate() {
                let nowDate = new Date();
                let year = nowDate.getFullYear(); // 获取年
                let month =
                    nowDate.getMonth() + 1 < 10
                    ? "0" + (nowDate.getMonth() + 1)
                    : nowDate.getMonth() + 1; // 获取月
                let day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
                let dateStr = `${year}-${month}-${day}`;
                return dateStr;
            },

            // 日期选择器
            dateChange(val) {
                const [start_time, end_time] = val;
                this.formParams.start_time = start_time;
                this.formParams.end_time = end_time;
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
```
:::



<footer-FooterLink :isShareLink="false" :isDaShang="true" />