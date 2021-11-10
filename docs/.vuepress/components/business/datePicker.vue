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