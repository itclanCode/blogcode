---
title: vue输入框打字放大特效
---

## vue输入框打字放大特效

## 快速导航

<TOC />

## 示例

<template>
        <div>
		    <div class="nice-input">
				<input type="text" placeholder="请输入文字" id="test" v-model="message" />
				<label for="test">
				    <span class="nice-input__animate" v-for="m in message2">{{m}}</span>
				</label>
    		</div>
		</div>
</template>

<script>
    export default {
		data() {
			return {
				message: ''
			}
		},

		watch: {
			message: {
			handler: function(after,before){
				if (after.length > before.length) {
				setTimeout(function(){
					document.querySelector('.nice-input').classList.add('shake');
				setTimeout(function(){
					document.querySelector('.nice-input').classList.remove('shake'); 
				},300); 
				},200);
				}
			}
          }
  		},
	   computed: {
		  message2: function(){
			return this.message.split('');
		  }
	   }
    }
</script>

<style scoped>
.nice-input {
  position: absolute;
  margin-top:20px;
  margin-bottom: 20px;
}

.nice-input input {
  border:none;
  border-radius:4px;
  padding:7px 10px;
  font-family: 'Lato', sans-serif;
  font-size:14px;
  box-shadow: rgba(0,0,0,.05) 0 5px 20px;
  letter-spacing:0;
  width:165px;
  color: transparent;
  font-weight:900;
}

.nice-input input:focus {
  outline:none;
  box-shadow: rgba(0,0,0,.1) 0 5px 20px;
}

.nice-input label {
  position: absolute;
  top: 6px;
  left: 10px;
  letter-spacing:0;
  font-size:0;
}

.nice-input span {
  font-family: 'Lato', sans-serif;
  font-size:14px;
  font-weight:900;
}

.nice-input__animate {
  -webkit-animation: print .2s 1 ease-in-out;
          animation: print .2s 1 ease-in-out;
}

.shake {
  -webkit-animation: shake .2s 1 ease-in-out;
          animation: shake .2s 1 ease-in-out;
}

@-webkit-keyframes print {
  from{
    position:absolute;
    -webkit-transform: scale(50);
          transform: scale(50);
      /* uncomment for freeze */  
     /*   filter:blur(1px); */
   }
  99% {
    position:absolute;
  }
  to {
    position:relative;
  }
}

@keyframes print {
  from{
  position:absolute;
  -webkit-transform: scale(50);
          transform: scale(50);
  /* uncomment for freeze */  
  /*   filter:blur(1px); */
  }
  99% {
    position:absolute;
  }
  to {
    position:relative;
  }
}

@-webkit-keyframes shake {
  from,
  to {
  }
  50% {
    -webkit-transform:scale(0.97);
            transform:scale(0.97);
  }
}

@keyframes shake {
  from,
  to {
  }
  50% {
    -webkit-transform:scale(0.97);
            transform:scale(0.97);
  }
}


</style>
<br />
<br />

## 示例代码

```html
<template>
        <div>
		    <div class="nice-input">
				<input type="text" placeholder="请输入文字" id="test" v-model="message" />
				<label for="test">
				    <span class="nice-input__animate" v-for="m in message2">{{m}}</span>
				</label>
    		</div>
		</div>
</template>

<script>
    export default {
		data() {
			return {
				message: ''
			}
		},

		watch: {
			message: {
			handler: function(after,before){
				if (after.length > before.length) {
				setTimeout(function(){
					document.querySelector('.nice-input').classList.add('shake');
				setTimeout(function(){
					document.querySelector('.nice-input').classList.remove('shake'); 
				},300); 
				},200);
				}
			}
          }
  		},
	   computed: {
		  message2: function(){
			return this.message.split('');
		  }
	   }
    }
</script>

<style scoped>
.nice-input {
  position: absolute;
  margin-top:20px;
  margin-bottom: 20px;
}

.nice-input input {
  border:none;
  border-radius:4px;
  padding:7px 10px;
  font-family: 'Lato', sans-serif;
  font-size:14px;
  box-shadow: rgba(0,0,0,.05) 0 5px 20px;
  letter-spacing:0;
  width:165px;
  color: transparent;
  font-weight:900;
}

.nice-input input:focus {
  outline:none;
  box-shadow: rgba(0,0,0,.1) 0 5px 20px;
}

.nice-input label {
  position: absolute;
  top: 6px;
  left: 10px;
  letter-spacing:0;
  font-size:0;
}

.nice-input span {
  font-family: 'Lato', sans-serif;
  font-size:14px;
  font-weight:900;
}

.nice-input__animate {
  -webkit-animation: print .2s 1 ease-in-out;
          animation: print .2s 1 ease-in-out;
}

.shake {
  -webkit-animation: shake .2s 1 ease-in-out;
          animation: shake .2s 1 ease-in-out;
}

@-webkit-keyframes print {
  from{
    position:absolute;
    -webkit-transform: scale(50);
          transform: scale(50);
      /* uncomment for freeze */  
     /*   filter:blur(1px); */
   }
  99% {
    position:absolute;
  }
  to {
    position:relative;
  }
}

@keyframes print {
  from{
  position:absolute;
  -webkit-transform: scale(50);
          transform: scale(50);
  /* uncomment for freeze */  
  /*   filter:blur(1px); */
  }
  99% {
    position:absolute;
  }
  to {
    position:relative;
  }
}

@-webkit-keyframes shake {
  from,
  to {
  }
  50% {
    -webkit-transform:scale(0.97);
            transform:scale(0.97);
  }
}

@keyframes shake {
  from,
  to {
  }
  50% {
    -webkit-transform:scale(0.97);
            transform:scale(0.97);
  }
}


</style>
```

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />