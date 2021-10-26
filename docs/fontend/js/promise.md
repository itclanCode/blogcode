---
title: 详解 promise
---

## 详解 Promise

异步操作解决方案,异步操作与同步操作有什么差别

做任务

做一件事情,先做一件事情,然后在去做一件事情,顺序执行,这是同步

而异步是:在同一段时间可以做多件事情，多个任务

js 是单线程,在同一个时间,只能处理一个任务

```js
// event loop
setTimeout(() => {
  console.log(1);
}, 1000);

console.log(2);
```

有些操作需要依赖上面的操作,需要等待数据请求之后才能请求返回来的数据,在去执行下面的操作

第二个任务的完成需要依赖第一个任务完成后在做一些事情,才能做一些事情

第三个任务,需要依赖第二个任务做完成之后,在去做一些事情

```js
// 回调地域
setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
    }, 3000);
  }, 2000);
}, 1000);
```

这样的代码,层层回调,每个任务都有相对应的依赖关系

// promise,表示承诺,许诺的意思

- pending:初始化状态,既不是成功的也不是失败的
- fulfilled:表示成功的状态
- rejected:表示当前是一个失败的状态

我的女朋友快要生日了,想送给她一件礼物,女朋友不知道送啥,是具体要送还是不送,这是一个 peending 状态
如果生日当天确实送给了女朋友一些礼物,那么就是 fulfilled
如果没有兑现承诺,那么就是一个失败的状态,状态是不可逆的

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve(); // 成功
  }, 1000);
}).then((res) => {
  setTimeout(() => {
    console.log(2);
  }, 2000);
});
```

在 `promise` 中有两个非常重要的方法,`promise.all`,与 `promise.race`方法

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p1');
    resolve(); // 可以接收参数resolve("p1")
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p2');
    resolve(); // 可以接收参数resolve("p2");
  }, 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p3');
    resolve(); // 可以接受参数:resolve("p3");
  }, 3000);
});
```

这样有三个 promsie 任务,等待三个 promsie 任务都完成之后,我在执行相应的操作

接收一个数组,数组里面是具体的任务

这个时候,就可以使用`Promise.all([p1,p2,p3])`

```js
Promise.all([p1, p2, p3])
  .then((res) => {
    console.log('全部完成');
    console.log(res); // 会输出三个 undefined,因为没有传值
  })
  .catch((err) => {
    console.log('失败');
    console.log('err');
  });

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log('完成');
    console.log(res); // 会输出三个 undefined,因为没有传值
  })
  .catch((err) => {
    console.log('失败');
    console.log('err');
  });

// 只要有一个任务完成了,那么它就完成了的
```

## 另外一种解决方案
