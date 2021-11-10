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