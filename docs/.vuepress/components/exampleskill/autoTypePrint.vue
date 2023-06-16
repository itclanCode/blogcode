<template>
    <div class="auto-type-print-box">
        <p class="example-css3dayin">
           书以启智,技于谋生,活出斜杠
        </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "autoTypePrint",
  };
  </script>
  
  <style lang="scss" scoped>
  .example-css3dayin {
        margin: 5px auto;
        text-align: center;
        font-weight: 700;
        font-size: 55px;
        line-height: 79px;
        background: linear-gradient( 270deg, rgba(198, 141, 255, 0.9) 8.92%, #5685ff 46.17%, #48d6ff 92.17% );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        white-space: nowrap;
        animation: animateText 4.7s steps(8) infinite;
        -webkit-animation: animateText 4.7s steps(8) infinite;
    }

     @-webkit-keyframes animateText {
        0% {
            width: 0;
        }
        35% {
            width: 12.5em;
        }
        75% {
            width: 12.5em;
        }
        100% {
            width: 0;
        }
   }
    
    @keyframes animateText {
        0% {
            width: 0;
        }
        35% {
            width: 12.5em;
        }
        75% {
            width: 12.5em;
        }
        100% {
            width: 0;
        }
   }

 @media screen and (max-width: 768px) {
  .example-css3dayin {
      font-size: 25px;
  }
}
  </style>