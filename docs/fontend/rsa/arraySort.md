---
title: 数组排序
autoGroup-1: 数组
---

## 快速导航

<TOC />

## 数组的快速排序

**原理**:取出数组的中间项,然后把数组剩下的每一项与该项进行比较

如果小于该项就放在该项的左边,大于该项就放在该项的右边,再分别把左边的项和右边的项的中间项取出

重复上面的步骤到项数小于等于 1 为止,最后把所获得的项进行拼接

::: details 点击即可查看数组快排

```js
var ary = [21, 8, 4, 32, 5];
function quickSort(ary) {
  if (ary.length <= 1) {
    return ary;
  }

  var num = Math.floor(ary.length / 2);
  var numValue = ary.splice(num, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];
    if (cur < numValue) {
      left.push(cur);
    } else {
      right.push(cur);
    }
  }
  return quickSort(left).concat([numValue], quickSort(right));
}
console.log(quickSort(ary)); // [4, 5, 8, 21, 32]
```

:::

## 数组的插入排序

**原理**:取出数组的第一项放到新数组里,让剩余的每一项与新数组的每一项进行比较,小的放左边,大的放右边

::: details 点击即可查看数组插入排序

```js
var ary = [21, 8, 4, 32, 5];
function insertSort(ary) {
  var left = ary.splice(0, 1);
  for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];
    for (var j = left.length - 1; j >= 0; ) {
      var nex = left[j];
      if (cur < nex) {
        j--;
        if (j === -1) {
          left.unshift(cur);
        }
      } else {
        left.splice(j + 1, 0, cur);
        break;
      }
    }
  }
  return left;
}
console.log(insertSort(ary)); // [4, 5, 8, 21, 32]
```

:::

## 数组的冒泡排序

**原理**:从第一项开始,与它后面的每一项进行比较,如果大于后面的项,则交换位置
::: details 点击即可查看数组冒泡排序

```js
var ary = [43, 5, 82, 21];
function buddleSort(data) {
  var temp = '';
  for (var i = data.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (data[j] > data[j + 1]) {
        temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}
console.log(buddleSort(ary)); // [5, 21, 43, 82]
```

:::

## 数组的乱排

```js
function shuffle(arr) {
  let array = arr
  let index = array.length

  while (index) {
    index -= 1
    let randomInedx = Math.floor(Math.random() * index)
    let middleware = array[index]
    array[index] = array[randomInedx]
    array[randomInedx] = middleware
  }

  return array
}
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
