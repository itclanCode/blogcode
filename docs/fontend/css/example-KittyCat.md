---
title: 使用css3实现卡通的独角鲸动画特效
autoGroup-2: 常见实例技巧
---

## 使用纯 css3 实现可爱的 Kitty 猫图形特效

## 快速导航

<TOC />

## 具体实例

<template>
   <div>
        <div class="example-kittycat-container" @click="handleKittyCat('https://pay.aikelaidev.cn/paypage/?merchant=35bdYxSx7dCUrVUBqFQjdqqlzhWryCA7lqOn9VhakWHC')">
	<div class="cat">
		<div class="body">
			<div class="cola"></div>
			<div class="leg3"></div>
			<div class="leg9"></div>
			<div class="body3"></div>
			<div class="body5"></div>
			<div class="body7"></div>
			<div class="cin"></div>
			<div class="tela"></div>
			<div class="legs"></div>
			<div class="legs3"></div>
			<div class="legs9"></div>
			<div class="legs12"></div>
			<div class="cola3"></div>
			<div class="cola9"></div>
		</div>
		<div class="head">
			<div class="orejas"></div>
			<div class="orejas3"></div>
			<div class="face">
				<div class="cejas"></div>
				<div class="cejas3"></div>
				<div class="cejas7"></div>
				<div class="ojos">
					<div class="iris">
						<div class="iris3"></div>
					</div>
				</div>
				<div class="ojos3">
					<div class="iris7">
						<div class="iris3"></div>
					</div>
				</div>
				<div class="boca"></div>
				<div class="bigotes"></div>
				<div class="bigotes3"></div>
			</div>
		</div>
	</div>
</div>
   </div>
</template>

<script>
export default {
    methods: {
		handleKittyCat(openUrl){
		this.$dialog
        .confirm({
          title: "养猫赞助",
          message: "您赠与的猫粮,无论多少,都是我前进的动力,感谢支持",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
	  }
    }
}
</script>

<style scoped>
.example-kittycat-container {
	position: relative;
	height: 600px;
	margin: 0px auto;
	display: flex;
	justify-content: center;
	align-items: center;
}
.cat {
	width: 30px;
	height: 30px;
	background: black;
	margin: 0 auto;
	cursor:pointer;
}
.head {
	position: absolute;
	margin: 0 0;
	-webkit-animation: go3 3s alternate infinite;
	        animation: go3 3s alternate infinite;
}
.face {
	position: absolute;
	width: 227px;
	height: 185px;
	border-radius: 90px;
	background-image: linear-gradient(to bottom, #ea6a47 50%, #eadcdd 100%);
	margin: -90px -90px;
	border-left: 21px solid #f47b5d;
	border-right: 5px solid #f47b5d;
	transform: rotateX(30deg) rotateY(-21deg);
}
.orejas,
.orejas3 {
	position: absolute;
	width: 152px;
	height: 121px;
	background: #f47b5d;
}
.orejas {
	border-radius: 50px 500px 50px 500px;
	border-bottom: 21px solid #b94535;
	border-left: 12px solid #b94535;
	transform: rotate(45deg);
	margin: -90px -99px;
}
.orejas3 {
	border-radius: 50px 500px 50px 500px;
	background: #b94535;
	transform: rotate(50deg);
	margin: -102px -3px;
}
.orejas::before {
	content: "";
	position: absolute;
	width: 112px;
	height: 90px;
	border-radius: 50px 500px 50px 500px;
	background: #f47b5d;
	transform: rotate(-9deg);
	margin: -9px 0px;
}
.orejas3::before {
	content: "";
	position: absolute;
	width: 112px;
	height: 90px;
	border-radius: 50px 500px 50px 500px;
	background: #f47b5d;
	transform: rotate(-9deg);
	margin: -9px 9px;
}
.ojos {
	position: absolute;
	width: 116px;
	height: 112px;
	border-radius: 100%;
	border-top: 12px solid black;
	margin: 30px 12px;
}
.ojos3 {
	position: absolute;
	width: 90px;
	height: 112px;
	border-radius: 100%;
	border-top: 12px solid black;
	margin: 30px 135px;
}
.ojos::before,
.ojos3::before {
	content: "";
	position: absolute;
	border-radius: 100%;
	background-image: linear-gradient(to top, #93a5cf 0%, #eee 50%);
	border-bottom: 3px solid #b94535;
	border-left: 3px solid #b94535;
	border-right: 3px solid #b94535;
}
.ojos::before {
	width: 112px;
	height: 112px;
	margin: -3px 0px;
}
.ojos3::before {
	width: 90px;
	height: 112px;
	margin: -3px 0px;
}
.iris {
	position: absolute;
	width: 93px;
	height: 93px;
	border-radius: 100%;
	background: #5d2163;
	margin: 7px 12px;
	-webkit-animation: shake 0.7s alternate infinite;
	        animation: shake 0.7s alternate infinite;
}
.iris::before {
	content: "";
	position: absolute;
	width: 73px;
	height: 73px;
	border-radius: 100%;
	background: #3f0f44;
	box-shadow: 0px 5px 21px #f04fff;
	margin: 9px 9px;
}
.iris3 {
	position: absolute;
	width: 21px;
	height: 23px;
	border-radius: 100%;
	background: white;
	transform: rotate(35deg);
	margin: 9px 25px;
	-webkit-animation: brilla 0.9s alternate infinite;
	        animation: brilla 0.9s alternate infinite;
}
.iris3::before {
	content: "";
	position: absolute;
	width: 9px;
	height: 9px;
	border-radius: 100%;
	background: white;
	margin: 30px 9px;
}
.iris7 {
	position: absolute;
	width: 85px;
	height: 93px;
	border-radius: 100%;
	background: #5d2163;
	margin: 7px 0px;
	-webkit-animation: shake 0.7s alternate infinite;
	        animation: shake 0.7s alternate infinite;
}
.iris7::before {
	content: "";
	position: absolute;
	width: 73px;
	height: 73px;
	border-radius: 100%;
	background: #3f0f44;
	box-shadow: 0px 5px 21px #f04fff;
	margin: 9px 0px;
}
.boca::before {
	content: "I";
	position: absolute;
	font-family: verdana;
	font-size: 1.7em;
	margin: 3px 2px;
	transform: rotate(180deg);
}
.boca::after {
	content: "";
	position: absolute;
	width: 25px;
	height: 16px;
	border-radius: 30px 30px 0 0;
	border-top: 5px solid black;
	margin: 3px 2px;
	margin: 25px -3px;
}
.boca {
	position: relative;
	width: 16px;
	height: 12px;
	border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
	background: #c1209c;
	margin: 127px 123px;
	-webkit-animation: go3 1.2s alternate infinite;
	        animation: go3 1.2s alternate infinite;
}
.cejas {
	position: absolute;
	width: 25px;
	height: 12px;
	border-radius: 100%;
	background: black;
	margin: 5px 60px;
	transform: rotate(-30deg);
}
.cejas::before {
	content: "";
	position: absolute;
	width: 25px;
	height: 12px;
	border-radius: 100%;
	background: black;
	margin: 45px 80px;
	transform: rotate(60deg);
}
.cejas3,
.cejas7 {
	position: absolute;
	width: 21px;
	height: 21px;
	border-radius: 100%;
	-webkit-animation: go12 2.1s alternate infinite;
	        animation: go12 2.1s alternate infinite;
}
.cejas3 {
	border-bottom: 5px solid black;
	margin: 60px 0px;
}
.cejas7 {
	border-bottom: 5px solid black;
	margin: 60px 219px;
}
.cejas3::before,
.cejas7::before {
	content: "";
	position: absolute;
	width: 21px;
	height: 21px;
	border-radius: 100%;
	border-bottom: 5px solid black;
}
.cejas3::before {
	margin: 9px -3px;
	transform: rotate(-30deg);
}
.cejas7::before {
	margin: 9px 0px;
	transform: rotate(21deg);
}
.bigotes,
.bigotes3 {
	position: absolute;
	width: 35px;
	height: 12px;
	border-radius: 100%;
	border-top: 5px solid black;
	-webkit-animation: go9 2.1s alternate infinite;
	        animation: go9 2.1s alternate infinite;
}
.bigotes {
	margin: -112px 5px;
	transform: rotate(-21deg);
}
.bigotes3 {
	margin: -112px 199px;
	transform: rotate(9deg);
}
.bigotes::before,
.bigotes3::before {
	content: "";
	position: absolute;
	width: 35px;
	height: 12px;
	border-radius: 100%;
	border-top: 5px solid black;
}
.bigotes::before {
	margin: 7px 5px;
}
.bigotes3::before {
	margin: 7px -9px;
}
.body {
	position: absolute;
	-webkit-animation: go9 3s alternate infinite;
	        animation: go9 3s alternate infinite;
}
.body5 {
	position: absolute;
	width: 121px;
	height: 112px;
	border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
	background-image: linear-gradient(to left, #db7064 0%, #b94535 100%);
	margin: 75px -12px;
}
.body5::before {
	position: absolute;
	content: "";
	width: 70px;
	height: 90px;
	border-radius: 100px;
	background: #eaeaea;
	margin: 12px 30px;
}
.cin {
	position: absolute;
	width: 90px;
	height: 17px;
	background: #3f0f44;
	border-radius: 9px;
	margin: 75px -3px;
	transform: rotate(-9deg);
}
.legs,
.legs3 {
	position: absolute;
	width: 25px;
	height: 33px;
	border-radius: 100px;
	background: #b94535;
}
.legs {
	transform: rotate(-50deg);
	margin: 85px 69px;
}
.legs3 {
	transform: rotate(-60deg);
	margin: 87px 33px;
}
.legs::before,
.legs3::before {
	position: absolute;
	content: "";
	width: 35px;
	height: 27px;
	border-radius: 30px;
	background: #b94535;
	margin: 17px -21px;
	border-left: 7px solid #f47b5d;
	transform: rotate(-45deg);
}
.legs9,
.leg3 {
	position: absolute;
	width: 85px;
	height: 55px;
	border-radius: 90px 90px 0 12px;
	border-right: 12px solid #b94535;
	border-top: 5px solid #b94535;
	background: #f47b5d;
	transform: rotateX(-30deg) rotateY(-21deg);
}
.legs9 {
	margin: 132px -21px;
}
.leg3 {
	margin: 132px 35px;
}
.legs12,
.leg9 {
	position: absolute;
	background: #f47b5d;
	width: 102px;
	height: 30px;
	border-radius: 30px;
	border-right: 7px solid #b94535;
	transform: rotateX(-30deg) rotateY(-21deg);
}
.legs12 {
	margin: 169px -21px;
}
.leg9 {
	margin: 162px 30px;
}
.cola {
	position: absolute;
	width: 45px;
	height: 45px;
	border-radius: 100%;
	background: #b94535;
	margin: 150px -45px;
}
.cola3 {
	position: absolute;
	width: 102px;
	height: 43px;
	border-radius: 100px;
	background: #b94535;
	margin: 172px -39px;
	transform: rotate(30deg);
}
.cola9 {
	position: absolute;
	width: 70px;
	height: 50px;
	border-radius: 100%;
	background: #b94535;
	margin: 189px 23px;
	-webkit-animation: go 2.1s alternate infinite;
	        animation: go 2.1s alternate infinite;
}
@-webkit-keyframes brilla {
	0% {
		transform: scale(1) rotate(35deg);
	}
	50% {
		transform: scale(0.9) rotate(35deg);
	}
}
@keyframes brilla {
	0% {
		transform: scale(1) rotate(35deg);
	}
	50% {
		transform: scale(0.9) rotate(35deg);
	}
}
@-webkit-keyframes go {
	0% {
		transform: translatex(0px) translatey(0px);
	}
	100% {
		transform: translatex(-12px) translatey(3px) scalex(0.7);
	}
}
@keyframes go {
	0% {
		transform: translatex(0px) translatey(0px);
	}
	100% {
		transform: translatex(-12px) translatey(3px) scalex(0.7);
	}
}
@-webkit-keyframes go3 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(3px);
	}
}
@keyframes go3 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(3px);
	}
}
@-webkit-keyframes go9 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-3px);
	}
}
@keyframes go9 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-3px);
	}
}
@-webkit-keyframes go12 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(3px);
	}
}
@keyframes go12 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(3px);
	}
}
@-webkit-keyframes shake {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(0.97);
	}
	75% {
		transform: scale(1);
	}
}
@keyframes shake {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(0.97);
	}
	75% {
		transform: scale(1);
	}
}

</style>

## 具体代码

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用纯 css3 实现可爱的 Kitty 猫图形特效</title>
    <style>
       .example-container {
	position: relative;
	width: 800px;
	height: 600px;
	margin: 0px auto;
	display: flex;
	justify-content: center;
	align-items: center;
}
.cat {
	width: 30px;
	height: 30px;
	background: black;
	margin: 0 auto;
}
.head {
	position: absolute;
	margin: 0 0;
	-webkit-animation: go3 3s alternate infinite;
	        animation: go3 3s alternate infinite;
}
.face {
	position: absolute;
	width: 227px;
	height: 185px;
	border-radius: 90px;
	background-image: linear-gradient(to bottom, #ea6a47 50%, #eadcdd 100%);
	margin: -90px -90px;
	border-left: 21px solid #f47b5d;
	border-right: 5px solid #f47b5d;
	transform: rotateX(30deg) rotateY(-21deg);
}
.orejas,
.orejas3 {
	position: absolute;
	width: 152px;
	height: 121px;
	background: #f47b5d;
}
.orejas {
	border-radius: 50px 500px 50px 500px;
	border-bottom: 21px solid #b94535;
	border-left: 12px solid #b94535;
	transform: rotate(45deg);
	margin: -90px -99px;
}
.orejas3 {
	border-radius: 50px 500px 50px 500px;
	background: #b94535;
	transform: rotate(50deg);
	margin: -102px -3px;
}
.orejas::before {
	content: "";
	position: absolute;
	width: 112px;
	height: 90px;
	border-radius: 50px 500px 50px 500px;
	background: #f47b5d;
	transform: rotate(-9deg);
	margin: -9px 0px;
}
.orejas3::before {
	content: "";
	position: absolute;
	width: 112px;
	height: 90px;
	border-radius: 50px 500px 50px 500px;
	background: #f47b5d;
	transform: rotate(-9deg);
	margin: -9px 9px;
}
.ojos {
	position: absolute;
	width: 116px;
	height: 112px;
	border-radius: 100%;
	border-top: 12px solid black;
	margin: 30px 12px;
}
.ojos3 {
	position: absolute;
	width: 90px;
	height: 112px;
	border-radius: 100%;
	border-top: 12px solid black;
	margin: 30px 135px;
}
.ojos::before,
.ojos3::before {
	content: "";
	position: absolute;
	border-radius: 100%;
	background-image: linear-gradient(to top, #93a5cf 0%, #eee 50%);
	border-bottom: 3px solid #b94535;
	border-left: 3px solid #b94535;
	border-right: 3px solid #b94535;
}
.ojos::before {
	width: 112px;
	height: 112px;
	margin: -3px 0px;
}
.ojos3::before {
	width: 90px;
	height: 112px;
	margin: -3px 0px;
}
.iris {
	position: absolute;
	width: 93px;
	height: 93px;
	border-radius: 100%;
	background: #5d2163;
	margin: 7px 12px;
	-webkit-animation: shake 0.7s alternate infinite;
	        animation: shake 0.7s alternate infinite;
}
.iris::before {
	content: "";
	position: absolute;
	width: 73px;
	height: 73px;
	border-radius: 100%;
	background: #3f0f44;
	box-shadow: 0px 5px 21px #f04fff;
	margin: 9px 9px;
}
.iris3 {
	position: absolute;
	width: 21px;
	height: 23px;
	border-radius: 100%;
	background: white;
	transform: rotate(35deg);
	margin: 9px 25px;
	-webkit-animation: brilla 0.9s alternate infinite;
	        animation: brilla 0.9s alternate infinite;
}
.iris3::before {
	content: "";
	position: absolute;
	width: 9px;
	height: 9px;
	border-radius: 100%;
	background: white;
	margin: 30px 9px;
}
.iris7 {
	position: absolute;
	width: 85px;
	height: 93px;
	border-radius: 100%;
	background: #5d2163;
	margin: 7px 0px;
	-webkit-animation: shake 0.7s alternate infinite;
	        animation: shake 0.7s alternate infinite;
}
.iris7::before {
	content: "";
	position: absolute;
	width: 73px;
	height: 73px;
	border-radius: 100%;
	background: #3f0f44;
	box-shadow: 0px 5px 21px #f04fff;
	margin: 9px 0px;
}
.boca::before {
	content: "I";
	position: absolute;
	font-family: verdana;
	font-size: 1.7em;
	margin: 3px 2px;
	transform: rotate(180deg);
}
.boca::after {
	content: "";
	position: absolute;
	width: 25px;
	height: 16px;
	border-radius: 30px 30px 0 0;
	border-top: 5px solid black;
	margin: 3px 2px;
	margin: 25px -3px;
}
.boca {
	position: relative;
	width: 16px;
	height: 12px;
	border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
	background: #c1209c;
	margin: 127px 123px;
	-webkit-animation: go3 1.2s alternate infinite;
	        animation: go3 1.2s alternate infinite;
}
.cejas {
	position: absolute;
	width: 25px;
	height: 12px;
	border-radius: 100%;
	background: black;
	margin: 5px 60px;
	transform: rotate(-30deg);
}
.cejas::before {
	content: "";
	position: absolute;
	width: 25px;
	height: 12px;
	border-radius: 100%;
	background: black;
	margin: 45px 80px;
	transform: rotate(60deg);
}
.cejas3,
.cejas7 {
	position: absolute;
	width: 21px;
	height: 21px;
	border-radius: 100%;
	-webkit-animation: go12 2.1s alternate infinite;
	        animation: go12 2.1s alternate infinite;
}
.cejas3 {
	border-bottom: 5px solid black;
	margin: 60px 0px;
}
.cejas7 {
	border-bottom: 5px solid black;
	margin: 60px 219px;
}
.cejas3::before,
.cejas7::before {
	content: "";
	position: absolute;
	width: 21px;
	height: 21px;
	border-radius: 100%;
	border-bottom: 5px solid black;
}
.cejas3::before {
	margin: 9px -3px;
	transform: rotate(-30deg);
}
.cejas7::before {
	margin: 9px 0px;
	transform: rotate(21deg);
}
.bigotes,
.bigotes3 {
	position: absolute;
	width: 35px;
	height: 12px;
	border-radius: 100%;
	border-top: 5px solid black;
	-webkit-animation: go9 2.1s alternate infinite;
	        animation: go9 2.1s alternate infinite;
}
.bigotes {
	margin: -112px 5px;
	transform: rotate(-21deg);
}
.bigotes3 {
	margin: -112px 199px;
	transform: rotate(9deg);
}
.bigotes::before,
.bigotes3::before {
	content: "";
	position: absolute;
	width: 35px;
	height: 12px;
	border-radius: 100%;
	border-top: 5px solid black;
}
.bigotes::before {
	margin: 7px 5px;
}
.bigotes3::before {
	margin: 7px -9px;
}
.body {
	position: absolute;
	-webkit-animation: go9 3s alternate infinite;
	        animation: go9 3s alternate infinite;
}
.body5 {
	position: absolute;
	width: 121px;
	height: 112px;
	border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
	background-image: linear-gradient(to left, #db7064 0%, #b94535 100%);
	margin: 75px -12px;
}
.body5::before {
	position: absolute;
	content: "";
	width: 70px;
	height: 90px;
	border-radius: 100px;
	background: #eaeaea;
	margin: 12px 30px;
}
.cin {
	position: absolute;
	width: 90px;
	height: 17px;
	background: #3f0f44;
	border-radius: 9px;
	margin: 75px -3px;
	transform: rotate(-9deg);
}
.legs,
.legs3 {
	position: absolute;
	width: 25px;
	height: 33px;
	border-radius: 100px;
	background: #b94535;
}
.legs {
	transform: rotate(-50deg);
	margin: 85px 69px;
}
.legs3 {
	transform: rotate(-60deg);
	margin: 87px 33px;
}
.legs::before,
.legs3::before {
	position: absolute;
	content: "";
	width: 35px;
	height: 27px;
	border-radius: 30px;
	background: #b94535;
	margin: 17px -21px;
	border-left: 7px solid #f47b5d;
	transform: rotate(-45deg);
}
.legs9,
.leg3 {
	position: absolute;
	width: 85px;
	height: 55px;
	border-radius: 90px 90px 0 12px;
	border-right: 12px solid #b94535;
	border-top: 5px solid #b94535;
	background: #f47b5d;
	transform: rotateX(-30deg) rotateY(-21deg);
}
.legs9 {
	margin: 132px -21px;
}
.leg3 {
	margin: 132px 35px;
}
.legs12,
.leg9 {
	position: absolute;
	background: #f47b5d;
	width: 102px;
	height: 30px;
	border-radius: 30px;
	border-right: 7px solid #b94535;
	transform: rotateX(-30deg) rotateY(-21deg);
}
.legs12 {
	margin: 169px -21px;
}
.leg9 {
	margin: 162px 30px;
}
.cola {
	position: absolute;
	width: 45px;
	height: 45px;
	border-radius: 100%;
	background: #b94535;
	margin: 150px -45px;
}
.cola3 {
	position: absolute;
	width: 102px;
	height: 43px;
	border-radius: 100px;
	background: #b94535;
	margin: 172px -39px;
	transform: rotate(30deg);
}
.cola9 {
	position: absolute;
	width: 70px;
	height: 50px;
	border-radius: 100%;
	background: #b94535;
	margin: 189px 23px;
	-webkit-animation: go 2.1s alternate infinite;
	        animation: go 2.1s alternate infinite;
}
@-webkit-keyframes brilla {
	0% {
		transform: scale(1) rotate(35deg);
	}
	50% {
		transform: scale(0.9) rotate(35deg);
	}
}
@keyframes brilla {
	0% {
		transform: scale(1) rotate(35deg);
	}
	50% {
		transform: scale(0.9) rotate(35deg);
	}
}
@-webkit-keyframes go {
	0% {
		transform: translatex(0px) translatey(0px);
	}
	100% {
		transform: translatex(-12px) translatey(3px) scalex(0.7);
	}
}
@keyframes go {
	0% {
		transform: translatex(0px) translatey(0px);
	}
	100% {
		transform: translatex(-12px) translatey(3px) scalex(0.7);
	}
}
@-webkit-keyframes go3 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(3px);
	}
}
@keyframes go3 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(3px);
	}
}
@-webkit-keyframes go9 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-3px);
	}
}
@keyframes go9 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-3px);
	}
}
@-webkit-keyframes go12 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(3px);
	}
}
@keyframes go12 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(3px);
	}
}
@-webkit-keyframes shake {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(0.97);
	}
	75% {
		transform: scale(1);
	}
}
@keyframes shake {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(0.97);
	}
	75% {
		transform: scale(1);
	}
}
    </style>
  </head>
  <body>
      <div>
        <div class="example-container">
	<div class="cat">
		<div class="body">
			<div class="cola"></div>
			<div class="leg3"></div>
			<div class="leg9"></div>
			<div class="body3"></div>
			<div class="body5"></div>
			<div class="body7"></div>
			<div class="cin"></div>
			<div class="tela"></div>
			<div class="legs"></div>
			<div class="legs3"></div>
			<div class="legs9"></div>
			<div class="legs12"></div>
			<div class="cola3"></div>
			<div class="cola9"></div>
		</div>
		<div class="head">
			<div class="orejas"></div>
			<div class="orejas3"></div>
			<div class="face">
				<div class="cejas"></div>
				<div class="cejas3"></div>
				<div class="cejas7"></div>
				<div class="ojos">
					<div class="iris">
						<div class="iris3"></div>
					</div>
				</div>
				<div class="ojos3">
					<div class="iris7">
						<div class="iris3"></div>
					</div>
				</div>
				<div class="boca"></div>
				<div class="bigotes"></div>
				<div class="bigotes3"></div>
			</div>
		</div>
	</div>
</div>
   </div>
  </body>
</html>
      
```

## 实现原理

纯`css3`实现,结合元素定位,css3动画关键帧

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />
