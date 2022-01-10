---
title: vuejs中的模板/普通方法/计算属性computed与监听属性watch三者的比较
autoGroup-3: Vue基础
---

## vuejs中的普通方法/计算属性computed与监听属性watch三者的比较

## 快速导航

<TOC />

## 背景

在`vue`中,实现同一个功能需求,可以使用`普通方法`,也可以使用`computed`属性以及`watch`属性,对于它们的使用,刚开始时,存在着一些困惑,至于什么时候使用方法,什么时候使用计算`computed`属性,以及`watch`属性,往往令人很头疼

不同的方式适合对应的场景,以下是本篇的内容

## 需求场景

输入`A`,`B`两数并求和,当和结果满足指定的条件时,指定该结果属于哪个年龄阶段

```js
result <= 6 => 是个儿童
result > 6 && result <= 17  => "岁是个少年"
result > 17 && result  <=40 => "岁是个青年"
result > 40 && result <=65 => "岁是个中年人"
result > 65 && result <=100 =>"岁是个老年人"
isNaN(result))=> "你输入的信息有误"
 result > 100 "岁,已经超越了百岁,还是地球人么"
```

## 具体效果演示

<img src="https://static01.imgkr.com/temp/b07a314d7f9242feb3fbd1e61f0726ed.gif" class="medium-zoom lazy">

## 需求分析

1. 初始化值`A`,`B`两个数
2. 计算拿到两数之和的结果,并且做相对应的逻辑判断

## 方法1-使用模板方式实现

在`vue`模板中,插值表达式中可以做简单的逻辑判断

具体代码如下所示
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01-普通方法实现</title>
    <style>
        .box {
           margin-left: 35%;
           margin-top: 100px;
        }
    </style>
</head>
<body>
    
    <div id="root">
        <div class="box">
            A: <input type="number"  v-model:value="A" />
            <span>+</span>
            B: <input  type="number" v-model:value="B" />
            <button>=</button>
            <span>{{ parseInt(A)+parseInt(B) }}</span><br /><br />

            <div>
                结果: {{ A}} +{{B}} = {{parseInt(A)+parseInt(B)}} 
                <span v-if="(parseInt(A)+parseInt(B))<=6">岁是个儿童</span>
                <span v-else-if="(parseInt(A)+parseInt(B)) > 6 && (parseInt(A)+parseInt(B)) <= 17">岁是个少年</span>
                <span v-else-if="(parseInt(A)+parseInt(B)) > 17 && (parseInt(A)+parseInt(B)) <= 40">岁是个青年</span>
                <span v-else-if="(parseInt(A)+parseInt(B)) > 40 && (parseInt(A)+parseInt(B)) <= 65">岁是个中年人</span>
                <span v-else-if="(parseInt(A)+parseInt(B)) > 65 && (parseInt(A)+parseInt(B)) <= 100">岁是个老年人</span>
                <span v-else-if="(parseInt(A)+parseInt(B)) > 100">岁,已经超越了百岁,还是地球人么</span>
                <span v-else="isNaN(parseInt(A)+parseInt(B))">你输入的信息有误</span>
           </div>                                                
        </div>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        const vm = new Vue({
            el: "#root",
            data() {
                return {
                    A: "4",
                    B: '5',
                }
            }
        })
    </script>
</body>
</html>
```
在`vue模板`内使用表达式处理简单的逻辑,非常便利,但是它只适合于简单的运算,如果逻辑很复杂,那么维护模板就会变得很麻烦,不直观

::: tip 建议
对于复杂的逻辑,都应该使用方法或者计算`computed`属性
:::

**额外拓展**

为什么`data`的值写成一个函数,而非一个对象?

::: tip 简要 

当一个组件被定义,`data`必须声明为返回一个初始数据对象的函数,因为组件可能被用来创建多个实例

也就是说,在很多页面中,定义的组件可以复用在多个页面

如果`data`是一个纯碎的对象,则所有的实例将共享引用同一份`data`数据对象,无论在哪个组件实例中修改`data`,都会影响到所有的组件实例

如果`data`是函数,每次创建一个新实例后,调用data函数,从而返回初始数据的一个全新副本数据对象

这样每复用一次组件,会返回一份新的`data`数据,类似于给每个组件实例创建一个私有的数据空间,让各个组件的实例各自独立,互不影响
:::


## 方法2-使用普通方法实现

示例代码如下所示,在`methods`中定义方法(功能),在`vue模板`中直接方法的调用(函数名())
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01-使用普通方法实现</title>
    <style>
        .box {
           margin-left: 35%;
           margin-top: 100px;
        }
    </style>
</head>
<body>
    
    <div id="root">
        <div class="box">
            A: <input type="number"  v-model:value="A" />
            <span>+</span>
            B: <input  type="number" v-model:value="B" />
            <button>=</button>
            <span>{{ addResult() }}</span><br /><br />
            <div>
                结果: {{ A}} +{{B}} = {{addResult()}}  {{outPut()}}
            </div>  
        </div>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        const vm = new Vue({
            el: "#root",
            data() {
                return {
                    A: "4",
                    B: '5',
                }
            },

            methods: {
                addResult() {
                    return parseInt(this.A)+parseInt(this.B)
                },

                outPut() {
                    const result = parseInt(this.A)+parseInt(this.B);
                    if(result <= 6) {
                        return "岁是个儿童"
                    }else if(result > 6 && result <= 17) {
                        return "岁是个少年"
                    } else if(result > 17 && result  <=40) {
                        return "岁是个青年"
                    }else if(result > 40 && result <=65) {
                        return "岁是个中年人"
                    }else if(result > 65 && result <=100) {
                        return "岁是个老年人"
                    }else if(isNaN(result)) {
                        return "你输入的信息有误"
                    }else {
                        return "岁,已经超越了百岁,还是地球人么"
                    }
                }
            },
        })
    </script>
</body>
</html>
```
以上就是在`methods`中定义方法,去实现的

::: tip 注意事项
使用普通方法,实现时,每当触发方法,都会引起页面重新渲染，执行方法函数,它是没有缓存的

如果有一个性能开销比较大的计算属性,它需要遍历一个很大的数组,并做大量的计算,而这个计算属性又有其他依赖,如果没有缓存,不用计算属性,那么就会不断的执行收集属性的`getter`,如果不希望有缓存,就用方法来替代

:::

## 方法3-使用计算属性computed实现

在`vue`实例配置选项中,添加`computed`属性,值是一个对象,并且添加与之相对应的计算属性

计算属性得到的值是之前缓存的计算结果，不会多次执行

实例代码如下所示
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>02-使用计算属性computed实现</title>
    <style>
        .box {
           margin-left: 35%;
           margin-top: 100px;
        }
    </style>
</head>
<body>
    
    <div id="root">
        <div class="box">
            A: <input type="number"  v-model:value="A" />
            <span>+</span>
            B: <input  type="number" v-model:value="B" />
            <button>=</button>
            <span>{{ addResult }}</span><br /><br />
            <div>
                结果: {{ A}} +{{B}} = {{addResult}}  {{outPut}}
            </div>  
        </div>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        const vm = new Vue({
            el: "#root",
            data() {
                return {
                    A: "4",
                    B: '5',
                }
            },

            computed: {
                addResult: {  // 原始书写的方式
                    get() {
                      return parseInt(this.A)+parseInt(this.B)
                    }
                },

                outPut: {
                    get() {
                        const result = parseInt(this.A)+parseInt(this.B);
                        if(result <= 6) {
                            return "岁是个儿童"
                        }else if(result > 6 && result <= 17) {
                            return "岁是个少年"
                        } else if(result > 17 && result  <=40) {
                            return "岁是个青年"
                        }else if(result > 40 && result <=65) {
                            return "岁是个中年人"
                        }else if(result > 65 && result <=100) {
                            return "岁是个老年人"
                        }else if(isNaN(result)) {
                            return "你输入的信息有误"
                        }else {
                            return "岁,已经超越了百岁,还是地球人么"
                        }
                    }
                }
            }
        })
    </script>
</body>
</html>
```
::: tip 温馨提示
当一旦确定计算属性只读取(`get`),而不去修改`set`,确定了只读不改,可以使用简写形式,如下所示等价
:::
```js
// 其他省略,如上所示   
computed: {
    // 一旦确定计算属性只读取(get),而不去修改set,可以使用简写形式
    //确定了只读不改,那么就可以使用简写形式   
    addResult() {
        return parseInt(this.A)+parseInt(this.B)
    },

    outPut() {
        const result = parseInt(this.A)+parseInt(this.B);
        if(result <= 6) {
            return "岁是个儿童"
        }else if(result > 6 && result <= 17) {
            return "岁是个少年"
        } else if(result > 17 && result  <=40) {
            return "岁是个青年"
        }else if(result > 40 && result <=65) {
            return "岁是个中年人"
        }else if(result > 65 && result <=100) {
            return "岁是个老年人"
        }else if(isNaN(result)) {
            return "你输入的信息有误"
        }else {
            return "岁,已经超越了百岁,还是地球人么"
        }
    }
}
})
```
::: tip 注意事项
1. 计算属性的结果,不用挂载在`data`下面进行数据的初始化,在`vue`模板中可以直接使用,不用加圆括号`计算属性名()`,这点有别于普通方法的调用

2. 在模板中放入太多的逻辑会让模板过重且难以维护,也不直观(简单的逻辑可以放在模板中处理)

3. 对于复杂逻辑，可以使用计算属性(计算属性的 `getter` 函数是没有副作用, 但也可以使用方法,但是计算属性在计算数量量比较大,具有缓存计算结果的作用,性能更高,频繁调用方法,解析模板,渲染页面,是比较消耗性能的)

4. 计算属性是基于它们的响应式依赖进行缓存的,只在相关响应式依赖发生改变时它们才会重新求值,相比于普通方法的调用，每当触发重新渲染时，调用方法执行函数,会解析`vue模板`
:::

## 方法4-使用watch监听属性来实现

1. 通过`vm`对象的`$watch()`或`watch`配置来监视指定的属性
2. 当属性变化时,回调函数自动调用,在函数内部进行计算

具体实例代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>03-监听属性watch方法实现</title>
    <style>
        .box {
           margin-left: 35%;
           margin-top: 100px;
        }
    </style>
</head>
<body>
    
    <div id="root">
        <div class="box">
            A: <input type="number"  v-model:value="A" />
            <span>+</span>
            B: <input  type="number" v-model:value="B" />
            <button>=</button>
            <span>{{ addResult }}</span><br /><br />

            <div>
                结果: {{ A}} +{{B}} = {{addResult}}  {{outPut}}
            </div>  
        </div>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        const vm = new Vue({
            el: "#root",
            data() {
                return {
                    A: "4",
                    B: '5',
                    addResult: '',
                    outPut: ''
                }
            },

            watch: {
                A: {
                    immediate: true,   // 初始化时让handler调用一下,默认是false
                    handler(newVal,oldVal) {
                        console.log("A数据改变了","最新的:",newVal,"旧的:",oldVal);
                        this.addResult = parseInt(newVal)+parseInt(this.B)
                        const result = parseInt(this.addResult);
                        if(result <= 6) {
                            this.outPut = "岁是个儿童"
                        }else if(result > 6 && result <= 17) {
                            this.outPut = "岁是个少年"
                        } else if(result > 17 && result  <=40) {
                            this.outPut = "岁是个青年"
                        }else if(result > 40 && result <=65) {
                            this.outPut = "岁是个中年人"
                        }else if(result > 65 && result <=100) {
                            this.outPut = "岁是个老年人"
                        }else if(isNaN(result)) {
                            this.outPut= "你输入的信息有误"
                        }else {
                            this.outPut = "岁,已经超越了百岁,还是地球人么"
                        } 
                    }
                },

                B: {
                    immediate: true,
                    handler(newVal, oldVal) {
                        console.log("B数据变了","最新的",newVal,"旧的",oldVal);
                        this.addResult = parseInt(this.A)+parseInt(newVal);
                        const result = parseInt(this.addResult);
                        if(result <= 6) {
                            this.outPut = "岁是个儿童"
                        }else if(result > 6 && result <= 17) {
                            this.outPut = "岁是个少年"
                        } else if(result > 17 && result  <=40) {
                            this.outPut = "岁是个青年"
                        }else if(result > 40 && result <=65) {
                            this.outPut = "岁是个中年人"
                        }else if(result > 65 && result <=100) {
                            this.outPut = "岁是个老年人"
                        }else if(isNaN(result)) {
                            this.outPut= "你输入的信息有误"
                        }else {
                            this.outPut = "岁,已经超越了百岁,还是地球人么"
                        } 
                    }
                }
            },
        })

    </script>
</body>
</html>
```
当响应的数据不需要`immediate:true`,`deep: true`,就可以简写,上面的`watch`，如下是等价的

::: tip 注意
如果写成简写的方式,那么就无法写配置选项
:::
```js
// 其他部分省略,如上所示
    watch: {
        // 等价于如下
        A(newVal) {  // 这里的newVal参数,指的是当前监视属性,最新的值,可以写一个,也可以写两个(newVal,oldVal)
            this.addResult = parseInt(newVal)+parseInt(this.B)
            const result = parseInt(this.addResult);
            if(result <= 6) {
                this.outPut = "岁是个儿童"
            }else if(result > 6 && result <= 17) {
                this.outPut = "岁是个少年"
            } else if(result > 17 && result  <=40) {
                this.outPut = "岁是个青年"
            }else if(result > 40 && result <=65) {
                this.outPut = "岁是个中年人"
            }else if(result > 65 && result <=100) {
                this.outPut = "岁是个老年人"
            }else if(isNaN(result)) {
                this.outPut= "你输入的信息有误"
            }else {
                this.outPut = "岁,已经超越了百岁,还是地球人么"
            } 
        },

        B(newVal) {
            console.log("B数据变了","最新的",newVal,"旧的");
            this.addResult = parseInt(this.A)+parseInt(newVal);
            const result = parseInt(this.addResult);
            if(result <= 6) {
                this.outPut = "岁是个儿童"
            }else if(result > 6 && result <= 17) {
                this.outPut = "岁是个少年"
            } else if(result > 17 && result  <=40) {
                this.outPut = "岁是个青年"
            }else if(result > 40 && result <=65) {
                this.outPut = "岁是个中年人"
            }else if(result > 65 && result <=100) {
                this.outPut = "岁是个老年人"
            }else if(isNaN(result)) {
                this.outPut= "你输入的信息有误"
            }else {
                this.outPut = "岁,已经超越了百岁,还是地球人么"
            } 
        }
    },
})
```
当然,`Vue`提供了`$watch`实例方法,也可以这么写
```html
<script>
const vm = new Vue({
    el: "#root",
    data() {
        return {
            A: "4",
            B: '5',
            addResult: '',
            outPut: ''
        }
    },
        // 等价于如下方式
vm.$watch('A',{
    immediate: true,   // 初始化时让handler调用一下,默认是false,不写这个的话,第一次不会调用handler函数，会达不到自己的预期
    handler(newVal,oldVal) {
        console.log("A数据改变了","最新的:",newVal,"旧的:",oldVal);
        this.addResult = parseInt(newVal)+parseInt(this.B)
        const result = parseInt(this.addResult);
        if(result <= 6) {
            this.outPut = "岁是个儿童"
        }else if(result > 6 && result <= 17) {
            this.outPut = "岁是个少年"
        } else if(result > 17 && result  <=40) {
            this.outPut = "岁是个青年"
        }else if(result > 40 && result <=65) {
            this.outPut = "岁是个中年人"
        }else if(result > 65 && result <=100) {
            this.outPut = "岁是个老年人"
        }else if(isNaN(result)) {
            this.outPut= "你输入的信息有误"
        }else {
            this.outPut = "岁,已经超越了百岁,还是地球人么"
        } 
    }
})

// 等价于如下所示,监视B属性
vm.$watch('B', {
    immediate: true,  // 初始化时,调用一些handler函数,不写这个的话,第一次不会调用handler函数
    handler(newVal, oldVal) {
        console.log("B数据变了","最新的",newVal,"旧的",oldVal);
        this.addResult = parseInt(this.A)+parseInt(newVal);
        const result = parseInt(this.addResult);
        if(result <= 6) {
            this.outPut = "岁是个儿童"
        }else if(result > 6 && result <= 17) {
            this.outPut = "岁是个少年"
        } else if(result > 17 && result  <=40) {
            this.outPut = "岁是个青年"
        }else if(result > 40 && result <=65) {
            this.outPut = "岁是个中年人"
        }else if(result > 65 && result <=100) {
            this.outPut = "岁是个老年人"
        }else if(isNaN(result)) {
            this.outPut= "你输入的信息有误"
        }else {
            this.outPut = "岁,已经超越了百岁,还是地球人么"
        } 
    }
})

</script>
```
对于`watch`属性,是一个非常有用的属性,如果需要对一些数据做一些监测,新旧数据的对比,变换,达到某些条件时,做一些逻辑操作,那么`watch`可以监听`data`下面的属性,还可以监听计算结果属性

::: tip watch与$.watch写的时机
1. 如果很明确你要监视哪个数据,在传教概念实例的时候,就写`watch`

2. 如果在创建实例的时候,你不知道要监视哪个数据,后续会根据用户的一些行为,监测哪些数据,那么就可以使用`$watch`这个API

3. 当被监视的属性变化时,回调函数自动调用,进行相关操作

4. 监视的属性必须存在,才能进行监视

5. 监视数据有两种方式一种实例化`Vue`对象时,传入`watch`配置选项,另一种是`vm.$watch`
:::

## watch中的深度监视

上面都是直接的监听`data`下面直接挂载的属性,当我们想要监听某个对象下的单个属性时,那怎么办?如下所示

```js
const vm = new Vue({
    el: '#root',
    data() {
        return {
            info: {
              name: 'itclanCoder',  // 想要监听info对象下某单个属性
              age: 4
            }
        }
    },

    // 监听多级结构中某个属性的变化
    watch: {
        'info.name': {
            console.log("info下面的name属性改变了");
         }
    }
    
})
```
在`Vue`中,默认不监测对象内部值的改变,如果想要监测对象下的每个属性的变化(也就是监测多层级结构),可以设置开启`deep: true`配置,如下所示

```js
const vm = new Vue({
    el: '#root',
    data() {
        return {
            info: {
              name: 'itclanCoder', 
              age: 4
            }
        }
    },

    // 监听多级结构中某个属性的变化
    watch: {
         info: {
             immediate: true, // 初始化时,立即调用handler函数
             deep: true,  // 开启深度监测
             handler() {
                 console.log("name和age都改变触发了");
             }
         }
    }
    
})

// 等价于下面这种写法
vm.$watch('info',{
    immediate: true, // 初始化时,立即调用handler函数
    deep: true,  // 开启深度监测
    handler() {
        console.log("name和age都改变触发了");
    }
})
```
::: tip 注意
```js
 vm.$watch('info',function(newVal,oldVal) {   // 此处不能写箭头函数,要写普通函数,否则this的绑定就会出问题
            console.log("新值",newVal,"旧值",oldVal);
        },{
            immediate:true,
            deep: true
        })
```
在变更 (不是替换) 对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。`Vue` 不会保留变更之前值的副本
:::
::: warning 警告
1. 凡是vue管理的函数不要写箭头函数

2. 计算属性里面的`get`,`set`不能写成箭头函数
:::

## watch支持异步任务维持数据

**重点内容**:

当需要在数据变化时执行异步或开销较大的操作时，使用`watch`这个方式是最有用的,而`computed`是没有办法做到的(靠的是返回值)

```js
 watch: {
        // 等价于如下
        A(newVal) {  // 这里的newVal参数,指的是当前监视属性,最新的值,可以写一个,也可以写两个(newVal,oldVal)
           setTimeout(() => {  // 这里的回调函数不能写成普通函数,否则this就会指向window，会出问题
                this.addResult = parseInt(newVal)+parseInt(this.B)
                const result = parseInt(this.addResult);
                if(result <= 6) {
                    this.outPut = "岁是个儿童"
                }else if(result > 6 && result <= 17) {
                    this.outPut = "岁是个少年"
                } else if(result > 17 && result  <=40) {
                    this.outPut = "岁是个青年"
                }else if(result > 40 && result <=65) {
                    this.outPut = "岁是个中年人"
                }else if(result > 65 && result <=100) {
                    this.outPut = "岁是个老年人"
                }else if(isNaN(result)) {
                    this.outPut= "你输入的信息有误"
                }else {
                    this.outPut = "岁,已经超越了百岁,还是地球人么"
                } 
            },2000)
        },
    },
})
```
有时候,我们想要延迟多长时间在实现相对应的逻辑,那么`watch`就可以有效的去开启一个异步任务

<img src="https://static01.imgkr.com/temp/f48c1fac362c4028a05fe6cb9b9a204d.png" class="medium-zoom lazy">

从上面的图中总结出

1. `computed`:监测的是依赖值,当依赖值不变的情况下,会直接读取缓存进行复用,当依赖值有变化时,会重新计算

2. `watch`: 监测的是属性值,只要属性发生变化,都会触发执行回调函数来执行一系列的操作


但是`computed`不行,`computed`靠的是返回值,`watch`是靠你自己亲手写代码去修改

**计算属性里面是没有办法去开启异步任务,它必须同步执行,去维护数据的，但是watch却可以**

当使用`watch`和`computed`都可以实现时,那么推荐使用`computed`，但是当要处理实现一些异步任务时,那么就需要使用`watch`

`computed`和`watch`之间的区别

`computed`能完成的功能,`watch`都可以完成

`watch`能完成的功能,`computed`不一定能完成,例如:`watch`可以进行一部操作

**两个重要的小区别**

1. 所被`vue`管理的函数,最好写成普通函数,这样`this`的指向才是`vm`或组件实例对象

2. 所有不被`vue`所管理的函数(定时器的回调函数,`ajax`的回调函数等`Promise`的回调函数)最好写成箭头函数,这样`this`的指向才是vm或组件实例对象


## 总结

在`vue`中实现同一个功能,对于简单的逻辑功能,可以使用模板,其次是方法(但不具备数据缓存的能力),若逻辑很复杂,需要缓存数据,则使用计算属性,而watch属性,同样也能实现

在平时的开发中,优先使用计算属性,可以看出它更简单,方便,但是想要执行异步任务,那么就得使用watch,computed能做的,watch也能做,但反过来,却不行

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />








