---
title: css3小鸡从鸡蛋破壳而出动画特效
---

## css3小鸡从鸡蛋破壳而出动画特效

## 快速导航

<TOC />

## 示例效果

<template>
    <div>
            <div class="eggWrapper">
                <div class="chickHead">
                    <div class="eyeDiv"></div>
                    <div class="eyeDiv"></div>
                    <div class="beakDiv"></div>
                </div>
                <div class="eggDiv"></div>
                <div class="eggTop"></div>
            </div>
            <div class="eggWrapper">
                <div class="chickHead">
                <div class="eyeDiv"></div>
                <div class="eyeDiv"></div>
                <div class="beakDiv"></div>
            </div>
            <div class="eggDiv"></div>
            <div class="eggTop"></div>
        </div>
    <div class="eggWrapper">
    <div class="chickHead">
        <div class="eyeDiv"></div>
        <div class="eyeDiv"></div>
        <div class="beakDiv"></div>
    </div>
    <div class="eggDiv"></div>
    <div class="eggTop"></div>
    </div>
    <div class="eggWrapper">
        <div class="chickHead">
            <div class="eyeDiv"></div>
            <div class="eyeDiv"></div>
            <div class="beakDiv"></div>
        </div>
        <div class="eggDiv"></div>
        <div class="eggTop"></div>
    </div>
    <div class="eggWrapper">
        <div class="chickHead">
            <div class="eyeDiv"></div>
            <div class="eyeDiv"></div>
            <div class="beakDiv"></div>
        </div>
        <div class="eggDiv"></div>
        <div class="eggTop"></div>
    </div>  
  </div>
</template>
<style>
.eggWrapper {
  position: relative;
  display: inline-flex;
  margin-left: 1em;
  margin-top: 20vh;
  width: 10em;
  height: 12em;
}
.eggDiv,
.eggTop {
  position: absolute;
  width: 10em;
  height: 10em;
  border-radius: 80% 20% 55% 50% / 55% 20% 80% 50%;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  background-color: #ffffee;
  box-shadow: inset 1em 1em 2em rgba(0, 0, 0, 0.3),
    inset 0.2em 0.2em 1em #ffff55;
  -webkit-clip-path: polygon(
    -35.87% 83.08%,
    244% 155.05%,
    108.11% 49.6%,
    76.11% 57.69%,
    71.33% 37.01%,
    44.85% 22.33%,
    32.41% -13.39%
  );
          clip-path: polygon(
    -35.87% 83.08%,
    244% 155.05%,
    108.11% 49.6%,
    76.11% 57.69%,
    71.33% 37.01%,
    44.85% 22.33%,
    32.41% -13.39%
  );
  margin-top: 2em;
  transition: -webkit-transform 300ms cubic-bezier(0.5, -0.5, 0.5, 1.5) 0s;
  transition: transform 300ms cubic-bezier(0.5, -0.5, 0.5, 1.5) 0s;
  transition: transform 300ms cubic-bezier(0.5, -0.5, 0.5, 1.5) 0s, -webkit-transform 300ms cubic-bezier(0.5, -0.5, 0.5, 1.5) 0s;
}
.eggTop {
  -webkit-transform: rotate(-45deg) translateY(0.1em) translateX(-0.1em) scale(1.016);
          transform: rotate(-45deg) translateY(0.1em) translateX(-0.1em) scale(1.016);
  -webkit-clip-path: polygon(
    27.84% -22.62%,
    123.57% -5.52%,
    108.11% 49.6%,
    76.11% 57.69%,
    71.33% 37.01%,
    44.85% 22.33%,
    32.41% -13.39%
  );
          clip-path: polygon(
    27.84% -22.62%,
    123.57% -5.52%,
    108.11% 49.6%,
    76.11% 57.69%,
    71.33% 37.01%,
    44.85% 22.33%,
    32.41% -13.39%
  );
}
.chickHead {
  position: absolute;
  top: 1em;
  width: 7em;
  height: 7em;
  margin-left: 1.5em;
  margin-top: 2em;
  background-color: #ffff55;
  box-shadow: inset 1em 1em 2em rgba(0, 0, 0, 0.3),
    inset 0 2em 1em rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  transition: -webkit-transform 300ms ease-in-out 0s;
  transition: transform 300ms ease-in-out 0s;
  transition: transform 300ms ease-in-out 0s, -webkit-transform 300ms ease-in-out 0s;
}
.chickHead .eyeDiv {
  position: relative;
  width: 1em;
  height: 1em;
  float: left;
  border-radius: 100%;
  margin: 0.3em;
  margin-top: 3em;
  background-color: #666666;
  box-shadow: inset 0.3em -0.3em 0.5em rgba(0, 0, 0, 0.8);
  -webkit-animation-name: blinkAnim;
          animation-name: blinkAnim;
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.chickHead .eyeDiv:nth-of-type(2) {
  float: right;
  -webkit-animation-delay: 20ms;
          animation-delay: 20ms;
}
.chickHead .beakDiv {
  position: absolute;
  width: 1em;
  height: 1em;
  margin-top: 3.2em;
  margin-left: 3em;
  border-radius: 80% 20% 55% 50% / 55% 20% 80% 50%;
  -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
  background-color: #ff5800;
  border: 0.1em solid #ffff55;
  box-shadow: inset -0.3em 0.3em 0.5em rgba(0, 0, 0, 0.3);
}
.eggWrapper:hover .eggTop {
  /*margin-top: -1vw;*/
  -webkit-transform: translateY(-3em) rotate(-45deg);
          transform: translateY(-3em) rotate(-45deg);
}
.eggWrapper:hover .chickHead {
  -webkit-transform: translateY(-3em);
          transform: translateY(-3em);
}
@-webkit-keyframes blinkAnim {
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
  5% {
    -webkit-transform: scaleY(0.1);
            transform: scaleY(0.1);
  }
  10% {
    -webkit-transform: scaleY(0.1);
            transform: scaleY(0.1);
  }
  15% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}
@keyframes blinkAnim {
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
  5% {
    -webkit-transform: scaleY(0.1);
            transform: scaleY(0.1);
  }
  10% {
    -webkit-transform: scaleY(0.1);
            transform: scaleY(0.1);
  }
  15% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}

</style>


## 示例代码

```html
<template>
    <div>
            <div class="eggWrapper">
                <div class="chickHead">
                    <div class="eyeDiv"></div>
                    <div class="eyeDiv"></div>
                    <div class="beakDiv"></div>
                </div>
                <div class="eggDiv"></div>
                <div class="eggTop"></div>
            </div>
            <div class="eggWrapper">
                <div class="chickHead">
                <div class="eyeDiv"></div>
                <div class="eyeDiv"></div>
                <div class="beakDiv"></div>
            </div>
            <div class="eggDiv"></div>
            <div class="eggTop"></div>
        </div>
    <div class="eggWrapper">
    <div class="chickHead">
        <div class="eyeDiv"></div>
        <div class="eyeDiv"></div>
        <div class="beakDiv"></div>
    </div>
    <div class="eggDiv"></div>
    <div class="eggTop"></div>
    </div>
    <div class="eggWrapper">
        <div class="chickHead">
            <div class="eyeDiv"></div>
            <div class="eyeDiv"></div>
            <div class="beakDiv"></div>
        </div>
        <div class="eggDiv"></div>
        <div class="eggTop"></div>
    </div>
    <div class="eggWrapper">
        <div class="chickHead">
            <div class="eyeDiv"></div>
            <div class="eyeDiv"></div>
            <div class="beakDiv"></div>
        </div>
        <div class="eggDiv"></div>
        <div class="eggTop"></div>
    </div>  
  </div>
</template>
<style>
.eggWrapper {
  position: relative;
  display: inline-flex;
  margin-left: 1em;
  margin-top: 20vh;
  width: 10em;
  height: 12em;
}
.eggDiv,
.eggTop {
  position: absolute;
  width: 10em;
  height: 10em;
  border-radius: 80% 20% 55% 50% / 55% 20% 80% 50%;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  background-color: #ffffee;
  box-shadow: inset 1em 1em 2em rgba(0, 0, 0, 0.3),
    inset 0.2em 0.2em 1em #ffff55;
  -webkit-clip-path: polygon(
    -35.87% 83.08%,
    244% 155.05%,
    108.11% 49.6%,
    76.11% 57.69%,
    71.33% 37.01%,
    44.85% 22.33%,
    32.41% -13.39%
  );
          clip-path: polygon(
    -35.87% 83.08%,
    244% 155.05%,
    108.11% 49.6%,
    76.11% 57.69%,
    71.33% 37.01%,
    44.85% 22.33%,
    32.41% -13.39%
  );
  margin-top: 2em;
  transition: -webkit-transform 300ms cubic-bezier(0.5, -0.5, 0.5, 1.5) 0s;
  transition: transform 300ms cubic-bezier(0.5, -0.5, 0.5, 1.5) 0s;
  transition: transform 300ms cubic-bezier(0.5, -0.5, 0.5, 1.5) 0s, -webkit-transform 300ms cubic-bezier(0.5, -0.5, 0.5, 1.5) 0s;
}
.eggTop {
  -webkit-transform: rotate(-45deg) translateY(0.1em) translateX(-0.1em) scale(1.016);
          transform: rotate(-45deg) translateY(0.1em) translateX(-0.1em) scale(1.016);
  -webkit-clip-path: polygon(
    27.84% -22.62%,
    123.57% -5.52%,
    108.11% 49.6%,
    76.11% 57.69%,
    71.33% 37.01%,
    44.85% 22.33%,
    32.41% -13.39%
  );
          clip-path: polygon(
    27.84% -22.62%,
    123.57% -5.52%,
    108.11% 49.6%,
    76.11% 57.69%,
    71.33% 37.01%,
    44.85% 22.33%,
    32.41% -13.39%
  );
}
.chickHead {
  position: absolute;
  top: 1em;
  width: 7em;
  height: 7em;
  margin-left: 1.5em;
  margin-top: 2em;
  background-color: #ffff55;
  box-shadow: inset 1em 1em 2em rgba(0, 0, 0, 0.3),
    inset 0 2em 1em rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  transition: -webkit-transform 300ms ease-in-out 0s;
  transition: transform 300ms ease-in-out 0s;
  transition: transform 300ms ease-in-out 0s, -webkit-transform 300ms ease-in-out 0s;
}
.chickHead .eyeDiv {
  position: relative;
  width: 1em;
  height: 1em;
  float: left;
  border-radius: 100%;
  margin: 0.3em;
  margin-top: 3em;
  background-color: #666666;
  box-shadow: inset 0.3em -0.3em 0.5em rgba(0, 0, 0, 0.8);
  -webkit-animation-name: blinkAnim;
          animation-name: blinkAnim;
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.chickHead .eyeDiv:nth-of-type(2) {
  float: right;
  -webkit-animation-delay: 20ms;
          animation-delay: 20ms;
}
.chickHead .beakDiv {
  position: absolute;
  width: 1em;
  height: 1em;
  margin-top: 3.2em;
  margin-left: 3em;
  border-radius: 80% 20% 55% 50% / 55% 20% 80% 50%;
  -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
  background-color: #ff5800;
  border: 0.1em solid #ffff55;
  box-shadow: inset -0.3em 0.3em 0.5em rgba(0, 0, 0, 0.3);
}
.eggWrapper:hover .eggTop {
  /*margin-top: -1vw;*/
  -webkit-transform: translateY(-3em) rotate(-45deg);
          transform: translateY(-3em) rotate(-45deg);
}
.eggWrapper:hover .chickHead {
  -webkit-transform: translateY(-3em);
          transform: translateY(-3em);
}
@-webkit-keyframes blinkAnim {
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
  5% {
    -webkit-transform: scaleY(0.1);
            transform: scaleY(0.1);
  }
  10% {
    -webkit-transform: scaleY(0.1);
            transform: scaleY(0.1);
  }
  15% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}
@keyframes blinkAnim {
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
  5% {
    -webkit-transform: scaleY(0.1);
            transform: scaleY(0.1);
  }
  10% {
    -webkit-transform: scaleY(0.1);
            transform: scaleY(0.1);
  }
  15% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}

</style>
```

 <footer-FooterLink :isShareLink="false" :isDaShang="true" />