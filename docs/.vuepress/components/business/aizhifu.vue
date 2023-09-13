<template>
    <div>
        <el-button type="danger" @click="handleBtnPay">支付</el-button>
        <el-button type="danger" @click="handleBtnGetJoke">请求笑话</el-button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'aizhifu',
        data() {
            return {

            }
        },
        methods: {
            async handleBtnPay() {
               const params = {
                    pid: Number(1),
                    type: 'alipay',
                    name: '商品VIP',
                    out_trade_no: '20230806151343349',
                    money: '2',
                    param: '',
                    notify_url: 'https://pay.aikelaikaifa.com/notify_url.php',
                    return_url: 'https://pay.aikelaikaifa.com/return_url.php',
                    sign: '202cb962ac59075b964b07152d234b70',
                    sign_type: 'MD5'
                }
               const response = await axios.post('/api/submit.php', params);
                console.log(response);
                if(response.status == 200) {
                    window.open(`https://pay.aikelaikaifa.com/submit.php?pid=${params.pid}&mondy=${params.money}&out_trade_no=${params.out_trade_no}`,'_blank');
                }
            },

            async handleBtnGetJoke() {
                const params = {
                    key: "aa1b7ad08be2a09a4e0d2d46897e2dc8",
                    time: "1418816972",
                    sort: "desc",
                }
                const response = await axios.get('/api/joke/content/list.php',{params});
                console.log(response);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>