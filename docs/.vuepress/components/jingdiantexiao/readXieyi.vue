<template>
    <div>
        <div class="wrap">
            <el-input
            id="inputTextarea"
            type="textarea"
            :readonly="true"
            :rows="8"
            placeholder="请输入内容"
            v-model="textarea">
           </el-input>
        </div>
        <br />
        <div>
            <el-button type="primary" :disabled="regStatus" ref="regBtn" @click="handleJump">注册</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "readXieyi",
        data() {
            return {
                regStatus: true,
                textarea: "一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮,一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮,一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮,一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮"
            }
        },
        mounted() {
           this.init();
        },
        methods: {
            init() {
                var textareaReg = document.getElementById("inputTextarea");
                textareaReg.addEventListener('scroll', ()=> {
                    //console.log(111);
                    //console.log("scrollTop",textareaReg.scrollTop,"clientHeight",textareaReg.clientHeight,"scrollHeight",textareaReg.scrollHeight);
                    if(Math.ceil(textareaReg.scrollTop)+textareaReg.clientHeight >= textareaReg.scrollHeight) {
                        this.regStatus = false;
                    }else {
                        this.regStatus = true;
                    }
               })
            },

            handleJump() {
                window.open('https://tv.itclan.cn','_blank')
            }
        }
    }
</script>

<style lang="scss" scoped>
div{
    text-align:center;
}
.wrap {
    width: 250px;
    display:flex;
    justify-content: center;
    margin: 0 auto;
}
</style>