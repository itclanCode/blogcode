<!--
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product: 
 * @Mode Name: 
 * @Autor: vxPublic:itclanCoder
 * @Date: 2021-04-08 11:52:07
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2021-04-08 11:52:10
 * @Description: 
-->

## 第1题-说一说vuex是什么-每个属性是干嘛的以及如何使用

`Vue`是集中管理项目公共数据的,`Vuex`有`state`,`mutations`,`getters`,`actions`,`module`属性

`state`属性用来存储公共管理的数据

`mutaions`属性改变`state`中数据的方法

注意: 不要在`mutaions`中的方法中写异步方法`ajax`,那样数据就不可跟踪了

`getters`属性可以认为是定义`store`的计算属性,就像计算属性一样,`getter`的返回值会根据它的依赖被缓存起来,且只有当它的依赖值发生了改变

才会被重新计算

`action`:属性类似`mutaion`,不同于`Action`提交的是`mutaion`,而不是直接变更状态

`Action`可以包含任意异步操作,`module`属性时将`store`分割成模块,每个模块拥有自己的`state`,`mutaion`,`action`,`getter`甚至是嵌套子模块

从上至下进行方式的分割

使用方法：`state`:直接以对象方式添加属性:`mutations`，通过`store.commit`调用`action`,通过`store.dispatch`,方法触发`getters`,直接通过`store.getters`调用

可以使用`mapState`,`mapMutations`,`mapAction`,`mapGetters`一次性获取每个属性下对应的多个方法

`Vuex`在大型项目中比较常用,非关系组件传递数据通信比较方便