<template>
    <div>
         <div class="shake-slow txt">我是这条街最靓的仔-itclan.cn</div>
    </div>
</template>

<script>
    export default {
        name: "animateZiTiRotate"
    }
</script>

<style lang="scss" scoped>

.txt {
    font-size: larger;
    font-weight: 800;
    text-align: center; 
    color: red;
}

@-webkit-keyframes shake-slow {
    2% {
        transform: translate(6px,-2px) rotate(3.5deg);
    }

    4% {
        transform: translate(5px,8px) rotate(-.5deg);
    }

    6% {
        transform: translate(6px,-3px) rotate(-2.5deg);
    }

    8% {
        transform: translate(4px,-2px) rotate(1.5deg);
    }

    10% {
        transform: translate(-6px,8px) rotate(-1.5deg);
    }

    12% {
        transform: translate(-5px,5px) rotate(1.5deg);
    }

    14% {
        transform: translate(4px,10px) rotate(3.5deg);
    }

    16% {
        transform: translate(0,4px) rotate(1.5deg);
    }

    18% {
        transform: translate(-1px,-6px) rotate(-.5deg);
    }

    20% {
        transform: translate(6px,-9px) rotate(2.5deg);
    }

    22% {
        transform: translate(1px,-5px) rotate(-1.5deg);
    }

    24% {
        transform: translate(-9px,6px) rotate(-.5deg);
    }

    26% {
        transform: translate(8px,-2px) rotate(-1.5deg);
    }

    28% {
        transform: translate(2px,-3px) rotate(-2.5deg);
    }

    30% {
        transform: translate(9px,-7px) rotate(-.5deg);
    }

    32% {
        transform: translate(8px,-6px) rotate(-2.5deg);
    }

    34% {
        transform: translate(-5px,1px) rotate(3.5deg);
    }

    36% {
        transform: translate(0,-5px) rotate(2.5deg);
    }

    38% {
        transform: translate(2px,7px) rotate(-1.5deg);
    }

    40% {
        transform: translate(6px,3px) rotate(-1.5deg);
    }

    42% {
        transform: translate(1px,-5px) rotate(-1.5deg);
    }

    44% {
        transform: translate(10px,-4px) rotate(-.5deg);
    }

    46% {
        transform: translate(-2px,2px) rotate(3.5deg);
    }

    48% {
        transform: translate(3px,4px) rotate(-.5deg);
    }

    50% {
        transform: translate(8px,1px) rotate(-1.5deg);
    }

    52% {
        transform: translate(7px,4px) rotate(-1.5deg);
    }

    54% {
        transform: translate(10px,8px) rotate(-1.5deg);
    }

    56% {
        transform: translate(-3px,0) rotate(-.5deg);
    }

    58% {
        transform: translate(0,-1px) rotate(1.5deg);
    }

    60% {
        transform: translate(6px,9px) rotate(-1.5deg);
    }

    62% {
        transform: translate(-9px,8px) rotate(.5deg);
    }

    64% {
        transform: translate(-6px,10px) rotate(.5deg);
    }

    66% {
        transform: translate(7px,0) rotate(.5deg);
    }

    68% {
        transform: translate(3px,8px) rotate(-.5deg);
    }

    70% {
        transform: translate(-2px,-9px) rotate(1.5deg);
    }

    72% {
        transform: translate(-6px,2px) rotate(1.5deg);
    }

    74% {
        transform: translate(-2px,10px) rotate(-1.5deg);
    }

    76% {
        transform: translate(2px,8px) rotate(2.5deg);
    }

    78% {
        transform: translate(6px,-2px) rotate(-.5deg);
    }

    80% {
        transform: translate(6px,8px) rotate(.5deg);
    }

    82% {
        transform: translate(10px,9px) rotate(3.5deg);
    }

    84% {
        transform: translate(-3px,-1px) rotate(3.5deg);
    }

    86% {
        transform: translate(1px,8px) rotate(-2.5deg);
    }

    88% {
        transform: translate(-5px,-9px) rotate(2.5deg);
    }

    90% {
        transform: translate(2px,8px) rotate(.5deg);
    }

    92% {
        transform: translate(0,-1px) rotate(1.5deg);
    }

    94% {
        transform: translate(-8px,-1px) rotate(.5deg);
    }

    96% {
        transform: translate(-3px,8px) rotate(-1.5deg);
    }

    98% {
        transform: translate(4px,8px) rotate(.5deg);
    }

    0%,100% {
        transform: translate(0,0) rotate(0);
    }
}

@keyframes shake-slow {
    2% {
        transform: translate(6px,-2px) rotate(3.5deg);
    }

    4% {
        transform: translate(5px,8px) rotate(-.5deg);
    }

    6% {
        transform: translate(6px,-3px) rotate(-2.5deg);
    }

    8% {
        transform: translate(4px,-2px) rotate(1.5deg);
    }

    10% {
        transform: translate(-6px,8px) rotate(-1.5deg);
    }

    12% {
        transform: translate(-5px,5px) rotate(1.5deg);
    }

    14% {
        transform: translate(4px,10px) rotate(3.5deg);
    }

    16% {
        transform: translate(0,4px) rotate(1.5deg);
    }

    18% {
        transform: translate(-1px,-6px) rotate(-.5deg);
    }

    20% {
        transform: translate(6px,-9px) rotate(2.5deg);
    }

    22% {
        transform: translate(1px,-5px) rotate(-1.5deg);
    }

    24% {
        transform: translate(-9px,6px) rotate(-.5deg);
    }

    26% {
        transform: translate(8px,-2px) rotate(-1.5deg);
    }

    28% {
        transform: translate(2px,-3px) rotate(-2.5deg);
    }

    30% {
        transform: translate(9px,-7px) rotate(-.5deg);
    }

    32% {
        transform: translate(8px,-6px) rotate(-2.5deg);
    }

    34% {
        transform: translate(-5px,1px) rotate(3.5deg);
    }

    36% {
        transform: translate(0,-5px) rotate(2.5deg);
    }

    38% {
        transform: translate(2px,7px) rotate(-1.5deg);
    }

    40% {
        transform: translate(6px,3px) rotate(-1.5deg);
    }

    42% {
        transform: translate(1px,-5px) rotate(-1.5deg);
    }

    44% {
        transform: translate(10px,-4px) rotate(-.5deg);
    }

    46% {
        transform: translate(-2px,2px) rotate(3.5deg);
    }

    48% {
        transform: translate(3px,4px) rotate(-.5deg);
    }

    50% {
        transform: translate(8px,1px) rotate(-1.5deg);
    }

    52% {
        transform: translate(7px,4px) rotate(-1.5deg);
    }

    54% {
        transform: translate(10px,8px) rotate(-1.5deg);
    }

    56% {
        transform: translate(-3px,0) rotate(-.5deg);
    }

    58% {
        transform: translate(0,-1px) rotate(1.5deg);
    }

    60% {
        transform: translate(6px,9px) rotate(-1.5deg);
    }

    62% {
        transform: translate(-9px,8px) rotate(.5deg);
    }

    64% {
        transform: translate(-6px,10px) rotate(.5deg);
    }

    66% {
        transform: translate(7px,0) rotate(.5deg);
    }

    68% {
        transform: translate(3px,8px) rotate(-.5deg);
    }

    70% {
        transform: translate(-2px,-9px) rotate(1.5deg);
    }

    72% {
        transform: translate(-6px,2px) rotate(1.5deg);
    }

    74% {
        transform: translate(-2px,10px) rotate(-1.5deg);
    }

    76% {
        transform: translate(2px,8px) rotate(2.5deg);
    }

    78% {
        transform: translate(6px,-2px) rotate(-.5deg);
    }

    80% {
        transform: translate(6px,8px) rotate(.5deg);
    }

    82% {
        transform: translate(10px,9px) rotate(3.5deg);
    }

    84% {
        transform: translate(-3px,-1px) rotate(3.5deg);
    }

    86% {
        transform: translate(1px,8px) rotate(-2.5deg);
    }

    88% {
        transform: translate(-5px,-9px) rotate(2.5deg);
    }

    90% {
        transform: translate(2px,8px) rotate(.5deg);
    }

    92% {
        transform: translate(0,-1px) rotate(1.5deg);
    }

    94% {
        transform: translate(-8px,-1px) rotate(.5deg);
    }

    96% {
        transform: translate(-3px,8px) rotate(-1.5deg);
    }

    98% {
        transform: translate(4px,8px) rotate(.5deg);
    }

    0%,100% {
        transform: translate(0,0) rotate(0);
    }
}

.shake-slow {
    animation: shake-slow 25s ease-in-out infinite;
}

</style>