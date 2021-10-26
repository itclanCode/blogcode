---
title: 表单发送验证码倒计时
autoGroup-4: 业务型实例
---

## 表单获取验证码倒计时

<business-formVertiyCode />

## 具体实现代码

::: details 点击即可查看 HTML 代码
这里用的是`elementUI`

```html
<el-input
  @blur="handleInputBlur(telephoneVal)"
  maxlength="11"
  class="el-input"
  placeholder="请输入手机号码"
  v-model.trim="telephoneVal"
  clearable
></el-input>
<el-button :disabled="isSend" @click="handleGetCode">{{btnText}}</el-button>
<div v-if="smscode != ''">获取到的验证码是: {{smscode}}</div>
```

:::

## 具体逻辑代码

::: details 点击即可查看 js 逻辑代码

```js
import { Input, Message } from 'element-ui';
import axios from 'axios';
export default {
  name: 'formVertiyCode',
  data() {
    return {
      telephoneVal: '',
      btnText: '获取验证码',
      isSend: true, // 获取验证码按钮的状态
      t: 60, // 倒计时时间
      smscode: '', // 验证码
    };
  },
  watch: {
    // 监听表单电话输入框的值
    telephoneVal(v) {
      if ((this.t = 60)) {
        this.isSend = this._checkPhone(v);
      }

      this.$nextTick(() => {
        // 排除非数字字符
        this.telephoneVal = v.replace(/[^0-9\.]+/g, '');
      });
    },
    // 监听倒计时
    t(v) {
      if (this.t < 60) {
        this.isSend = true;
      }
    },
  },
  methods: {
    /**
     * 点击发送验证码
     * */
    handleGetCode() {
      // 接口地止,这里只是模拟,实际开发中替换成真实的接口地止即可
      let baseUrl = `https://www.easy-mock.com/mock/5f4e532a66f90555e2209861/learn`;
      this.isSend = true;
      axios
        .get(`${baseUrl}/sendCode`, {
          params: {
            // 携带的params参数
            telephoneVal: this.telephoneVal,
          },
        })
        .then((res) => {
          const { smscode } = res.data.base;
          if (res.status == 200) {
            setTimeout(() => {
              this.smscode = smscode;
            }, 2000);
            this.btnText = this.t + 's后重新发送';
            let clock = window.setInterval(() => {
              this.t--;
              this.btnText = this.t + 's后重新发送';

              if (this.t < 0) {
                window.clearInterval(clock);
                this.isSend = false;
                this.btnText = '获取验证码';
                this.t = 60;
              }
            }, 1000);
          } else {
            this.$message({
              showClose: true,
              message: res.message,
              type: 'error',
            });
            this.isSend = true;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // 失去焦点
    handleInputBlur(value) {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        this.$message({
          showClose: true,
          message: '您输入的电话号码有误',
          type: 'error',
        });
        this.isSend = true;
        return false;
      } else {
        this.isSend = false;
      }
    },

    _checkPhone(textval) {
      const reg = /^1[3456789]\d{9}$/;
      return reg.test(textval);
    },
  },
};
```

:::

## 表单非数字过滤处理

对于表单用户输入电话号码,应当对非数字进行过滤处理
::: details 点击即可查看

```js
// 过滤输入的数字
 formatterNum(value) {
      return value.replace(/[^0-9\.]+/g, "");
    },

```

:::

## 倒计时核心代码实现

::: details 点击即可查看

```js
 handleGetCode() {
      // 接口地止,这里只是模拟,实际开发中替换成真实的接口地止即可
      let baseUrl = `https://www.easy-mock.com/mock/5f4e532a66f90555e2209861/learn`;
      this.isSend = true;  // 按钮禁用状态
      axios
        .get(`${baseUrl}/sendCode`, {
          params: {
            // 携带的params参数
            telephoneVal: this.telephoneVal,
          },
        })
        .then((res) => {
          if (res.status == 200)
            this.btnText = this.t + 's后重新发送';
            let clock = window.setInterval(() => {
              this.t--;
              this.btnText = this.t + 's后重新发送';

              if (this.t < 0) {
                window.clearInterval(clock);
                this.isSend = false;
                this.btnText = '获取验证码';
                this.t = 60;
              }
            }, 1000);
          } else {
            this.$message({
              showClose: true,
              message: res.message,
              type: 'error',
            });
            this.isSend = true;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
```

:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
