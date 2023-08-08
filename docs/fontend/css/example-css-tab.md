---
title: 纯CSS实现的卡片切换效果
---

## 纯CSS实现的卡片切换效果

## 快速导航

<TOC />

## 示例效果

<template>
        <div class="example-css-tab">
           <div class="container dwo">
                <div class="card">
                    <input type="radio" name="select" id="slide_1" checked>
                    <input type="radio" name="select" id="slide_2">
                    <input type="radio" name="select" id="slide_3">
                    <input type="checkbox" id="slideImg">
                    <div class="slider">
                        <label for="slide_1" class="slide slide_1"></label>
                        <label for="slide_2" class="slide slide_2"></label>
                        <label for="slide_3" class="slide slide_3"></label>
                    </div>
                    <div class="inner_part">
                        <label for="slideImg" class="img">
                            <img class="img_1" src="https://img1.dowebok.com/5160.png">
                        </label>
                        <div class="content content_1">
                            <div class="content-inner">
                                <div class="title">美味的端午节粽子和香茶矢量素材</div>
                                <div class="text">这是一款美味的端午节粽子和香茶矢量素材，提供了 AI 和 EPS 两种格式，含 JPG 预览图。</div>
                            </div>
                        </div>
                    </div>
                    <div class="inner_part">
                        <label for="slideImg" class="img">
                            <img class="img_2" src="https://img1.dowebok.com/5155.png">
                        </label>
                        <div class="content content_2">
                            <div class="content-inner">
                                <div class="title">香茶和粽子端午节矢量素材</div>
                                <div class="text">这是一款由香茶和粽子设计的端午节矢量素材，提供了 AI、EPS、免扣 PNG等格式，含 JPG 预览图。</div>
                            </div>
                        </div>
                    </div>
                    <div class="inner_part">
                        <label for="slideImg" class="img">
                            <img class="img_3" src="https://img1.dowebok.com/2882.png">
                        </label>
                        <div class="content content_3">
                            <div class="content-inner">
                                <div class="title">创意端午节折纸矢量素材</div>
                                <div class="text">这是一款创意端午节折纸矢量素材，包含了龙舟、划手、粽子等元素，提供了 EPS、免扣 PNG、SVG 等格式，含 JPG 预览图。</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<style scoped>
.example-css-tab .container.dwo {
    margin-top: 20px;
}
.example-css-tab .card {
    position: absolute;
    height: 350px;
    width: 100%;
    max-width: 850px;
    margin: auto;
    background: #ffffff;
    border-radius: 25px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
}
.example-css-tab .card .inner_part {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 20px;
    height: 350px;
    position: absolute;
}
.example-css-tab .card .inner_part .content .content-inner {
    display:flex;
    flex-direction:column;
    align-items: left;
}
.example-css-tab #slideImg:checked ~ .inner_part {
    padding: 0;
    transition: 0.1s ease-in;
}
.example-css-tab .inner_part .img {
    height: 260px;
    width: 260px;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 20px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
}
.example-css-tab #slideImg:checked ~ .inner_part .img {
    height: 350px;
    width: 850px;
    z-index: 99;
    transition: 0.3s 0.2s ease-in;
}
.example-css-tab .img img {
    height: 100%;
    width: 100%;
    cursor: pointer;
    opacity: 0;
    transition: 0.6s;
}
.example-css-tab #slide_1:checked ~ .inner_part .img_1,
#slide_2:checked ~ .inner_part .img_2,
#slide_3:checked ~ .inner_part .img_3 {
    opacity: 1;
    transition-delay: 0.2s;
}
.example-css-tab .content {
    padding: 0 0px 0 20px;
    width: 530px;
    margin-left: 50px;
    opacity: 0;
    transition: 0.6s;
}
.example-css-tab #slideImg:checked ~ .inner_part .content {
    display: none;
}
.example-css-tab #slide_1:checked ~ .inner_part .content_1,
#slide_2:checked ~ .inner_part .content_2,
#slide_3:checked ~ .inner_part .content_3 {
    opacity: 1;
    margin-left: 0;
    z-index: 100;
    transition-delay: 0.3s;
}
.example-css-tab .content .title {
    font-size: 30px;
    font-weight: 700;
    color: #0d0925;
    margin: 0 0 20px 0;
}
.example-css-tab .content .text {
    font-size: 19px;
    color: #4e4a67;
    margin: 0 auto 30px auto;
    line-height: 1.5em;
    text-align: justify;
}
.example-css-tab .content button:hover {
    background: #cecece;
    color: #000000;
}
.example-css-tab .slider {
    position: absolute;
    bottom: 25px;
    left: 55%;
    transform: translateX(-50%);
    z-index: 1;
}
.example-css-tab #slideImg:checked ~ .slider {
    display: none;
}
.example-css-tab .slider .slide {
    position: relative;
    height: 10px;
    width: 50px;
    background: #d9d9d9;
    border-radius: 5px;
    display: inline-flex;
    margin: 0 3px;
    cursor: pointer;
}
.example-css-tab .slider .slide:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: -100%;
    background: #000000;
    border-radius: 10px;
    transform: scaleX(0);
    transition: transform 0.6s;
    transform-origin: left;
}
.example-css-tab #slide_1:checked ~ .slider .slide_1:before,
#slide_2:checked ~ .slider .slide_2:before,
#slide_3:checked ~ .slider .slide_3:before {
    transform: scaleX(1);
    width: 100%;
}
.example-css-tab input {
    display: none;
}

</style>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


## 示例代码

```html
<template>
        <div class="example-css-tab">
           <div class="container dwo">
                <div class="card">
                    <input type="radio" name="select" id="slide_1" checked>
                    <input type="radio" name="select" id="slide_2">
                    <input type="radio" name="select" id="slide_3">
                    <input type="checkbox" id="slideImg">
                    <div class="slider">
                        <label for="slide_1" class="slide slide_1"></label>
                        <label for="slide_2" class="slide slide_2"></label>
                        <label for="slide_3" class="slide slide_3"></label>
                    </div>
                    <div class="inner_part">
                        <label for="slideImg" class="img">
                            <img class="img_1" src="https://img1.dowebok.com/5160.png">
                        </label>
                        <div class="content content_1">
                            <div class="content-inner">
                                <div class="title">美味的端午节粽子和香茶矢量素材</div>
                                <div class="text">这是一款美味的端午节粽子和香茶矢量素材，提供了 AI 和 EPS 两种格式，含 JPG 预览图。</div>
                            </div>
                        </div>
                    </div>
                    <div class="inner_part">
                        <label for="slideImg" class="img">
                            <img class="img_2" src="https://img1.dowebok.com/5155.png">
                        </label>
                        <div class="content content_2">
                            <div class="content-inner">
                                <div class="title">香茶和粽子端午节矢量素材</div>
                                <div class="text">这是一款由香茶和粽子设计的端午节矢量素材，提供了 AI、EPS、免扣 PNG等格式，含 JPG 预览图。</div>
                            </div>
                        </div>
                    </div>
                    <div class="inner_part">
                        <label for="slideImg" class="img">
                            <img class="img_3" src="https://img1.dowebok.com/2882.png">
                        </label>
                        <div class="content content_3">
                            <div class="content-inner">
                                <div class="title">创意端午节折纸矢量素材</div>
                                <div class="text">这是一款创意端午节折纸矢量素材，包含了龙舟、划手、粽子等元素，提供了 EPS、免扣 PNG、SVG 等格式，含 JPG 预览图。</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<style scoped>
.example-css-tab .container.dwo {
    margin-top: 20px;
}
.example-css-tab .card {
    position: absolute;
    height: 350px;
    width: 100%;
    max-width: 850px;
    margin: auto;
    background: #ffffff;
    border-radius: 25px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
}
.example-css-tab .card .inner_part {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 20px;
    height: 350px;
    position: absolute;
}
.example-css-tab .card .inner_part .content .content-inner {
    display:flex;
    flex-direction:column;
    align-items: left;
}
.example-css-tab #slideImg:checked ~ .inner_part {
    padding: 0;
    transition: 0.1s ease-in;
}
.example-css-tab .inner_part .img {
    height: 260px;
    width: 260px;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 20px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
}
.example-css-tab #slideImg:checked ~ .inner_part .img {
    height: 350px;
    width: 850px;
    z-index: 99;
    transition: 0.3s 0.2s ease-in;
}
.example-css-tab .img img {
    height: 100%;
    width: 100%;
    cursor: pointer;
    opacity: 0;
    transition: 0.6s;
}
.example-css-tab #slide_1:checked ~ .inner_part .img_1,
#slide_2:checked ~ .inner_part .img_2,
#slide_3:checked ~ .inner_part .img_3 {
    opacity: 1;
    transition-delay: 0.2s;
}
.example-css-tab .content {
    padding: 0 0px 0 20px;
    width: 530px;
    margin-left: 50px;
    opacity: 0;
    transition: 0.6s;
}
.example-css-tab #slideImg:checked ~ .inner_part .content {
    display: none;
}
.example-css-tab #slide_1:checked ~ .inner_part .content_1,
#slide_2:checked ~ .inner_part .content_2,
#slide_3:checked ~ .inner_part .content_3 {
    opacity: 1;
    margin-left: 0;
    z-index: 100;
    transition-delay: 0.3s;
}
.example-css-tab .content .title {
    font-size: 30px;
    font-weight: 700;
    color: #0d0925;
    margin: 0 0 20px 0;
}
.example-css-tab .content .text {
    font-size: 19px;
    color: #4e4a67;
    margin: 0 auto 30px auto;
    line-height: 1.5em;
    text-align: justify;
}
.example-css-tab .content button:hover {
    background: #cecece;
    color: #000000;
}
.example-css-tab .slider {
    position: absolute;
    bottom: 25px;
    left: 55%;
    transform: translateX(-50%);
    z-index: 1;
}
.example-css-tab #slideImg:checked ~ .slider {
    display: none;
}
.example-css-tab .slider .slide {
    position: relative;
    height: 10px;
    width: 50px;
    background: #d9d9d9;
    border-radius: 5px;
    display: inline-flex;
    margin: 0 3px;
    cursor: pointer;
}
.example-css-tab .slider .slide:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: -100%;
    background: #000000;
    border-radius: 10px;
    transform: scaleX(0);
    transition: transform 0.6s;
    transform-origin: left;
}
.example-css-tab #slide_1:checked ~ .slider .slide_1:before,
#slide_2:checked ~ .slider .slide_2:before,
#slide_3:checked ~ .slider .slide_3:before {
    transform: scaleX(1);
    width: 100%;
}
.example-css-tab input {
    display: none;
}
</style>
```


<footer-FooterLink :isShareLink="false" :isDaShang="true" />