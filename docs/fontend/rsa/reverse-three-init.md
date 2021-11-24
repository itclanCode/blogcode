---
title: 实现反转一个 3 位整数
autoGroup-2: 字符串
---

## 实现反转一个 3 位整数

## 快速导航

<TOC />

## 描述

反转一个只有 3 位数的整数

## 示例

123 反转之后就是 321,800 反转之后就是 8

<template>
     <div>
		    <el-col :span="10">
					<div class="grid-content bg-purple-dark">
							<el-input
								placeholder="请输入数字"
								v-model="input"
								@input="handleInput"
								@change="handleInputChange"
    						clearable>
    						</el-input>
    				</div>
    			</el-col>
    	    <el-col :span="10">
    			   <div class="grid-content bg-purple-dark">
    				 		 <el-button :disabled="isDisabled" @click="handleReverse(input)" type="danger">反转</el-button>
    				 </div>
    			</el-col>
					<br /><br /><br />
					<div>结果:{{result}}</div>
    	 </div>

</template>

<script>
  export default {
		data() {
			return {
				input: "",
				isDisabled: true,
				result: ""
			}
		},

		methods: {
				handleReverse(input) {
					 var result = [...input.toString()].reverse().join("")
					 this.result = parseInt(result);
					 return this.result;
				},

				handleInput(event) {
					var regInputVal = /^\d/g;
					if(regInputVal.test(this.input)) {
						this.isDisabled = false
					}else {
						this.$message({
							message: '请输入数字类型',
							type: 'warning'
						});
						this.input = "";
					}
				},

				handleInputChange() {
						if(!this.input) {
						this.isDisabled = true
						this.result = "";
					}
				}
		}
	}
</script>
<style>

</style>

<br />

## 题目分析

⒈ 遇到 008 这种,需要转为 9,去 0 操作
⒉ 输出最后的数字

## 方法 1-转数组操作

⒈ 将数字转成字符串在转成数组

⒉ 反转数组,然后恢复成字符串

⒊ 输出正常的数字,用+或``反引号,或用 parseInt 都可以

:::: tabs type:border-card
::: tab 方法 1-转数组方法 lazy

```js
function getTranArrs(number) {
  var result = parseInt([...number.toString()].reverse().join(''));
  return result;
}
var num = 123;
getTranArrs(num); // 321
```

:::
::: tab 方法 2-取余,逐个颠倒拼接 lazy

```js
/*
 取余: 一个表达式的值除以另一个表达式的值,返回余数
 公式: result = numberA % numberB
       若numberA < numberB则返回最终的余数为numberA
*/
function getSurplus(number) {
  var result =
    parseInt(number % 10) * 100 +
    parseInt((number % 100) / 10) * 10 +
    parseInt(number / 100) * 1;
  return result;
}
var num = 123;
getSurplus(num);
```

:::
::: tab 方法 3-拼接字符串 lazy

```js
/*
1. 数字转字符串
2. 从后往前取对应位置字符,拼接成一个颠倒的字符串
*/
function getJoinStr(number) {
  var result = number.toString();
  return parseInt(result.charAt(2) + result.charAt(1) + result.charAt(0));
}
var num = 123;
getJoinStr(num); // 321
```

:::
::::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<footer-FeedBack />
