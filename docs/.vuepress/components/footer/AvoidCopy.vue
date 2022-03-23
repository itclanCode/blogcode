<template>
    <div>

    </div>
</template>

<script>
    export default {
        name:'AvoidCopy',
        data() {
            return {

            }
        },
        mounted() {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://n.2lian.com/static/js/loader.js';
            s.id = "union_douhao";
            s.union_pay_tid = "720";
            document.body.appendChild(s);
        }

    }
</script>

<style lang="scss" scoped>

</style>