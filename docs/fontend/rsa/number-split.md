---
title: 数字千分位分割
autoGroup-2: 数字
---

### 数字千分位分割

### 快速导航

<TOC />


### 方法1-使用toString结合正则表达式
```js
function commafy(num) {
  return (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

commafy(458934)  // 458,934
```

### 方法2-使用字符串提供的toLocaleString()方法处理

```js
var num = 1450068;
console.log(num.toLocaleString()) // 1,450,068
```

### 方法3-取末尾三个字符的功能可以通过字符串类型的`slice`、`substr`或`substring`方法做到

```js
/*
   slice() 方法可从已有的数组中返回选定的元素,截取数组的一个方法
*/
function toThousandsNum(num) {
       var num = (num || 0).toString(),
             result = '';

        while (num.length > 3) {
            //此处用数组的slice方法，如果是负数，那么它规定从数组尾部开始算起的位置
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        // 如果数字的开头为0,不需要逗号
        if (num){
          result = num + result
        }
        return result;
    }

    console.log(toThousandsNum(000123456789123)) // 123,456,789,123
```

### 方法4-通过把数字toString转换成字符串后-打散成数组

把数字通过`toString`，转换成字符串后，打散为数组，再从末尾开始，逐个把数组中的元素插入到新数组（result）的开头

每插入一个元素，`counter`就计一次数（加1），当`counter`为3的倍数时,利用取余的方式,就插入一个逗号，但是要注意开头（i为0时）不需要逗号。最后通过调用新数组的join方法得出结果

```js
function toThousands(num) {
    var result = [],
    counter = 0;
    num = (num || 0).toString().split('');
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) {
           result.unshift(',');
        }
    }
    return result.join('');
}
```

### 方法5-不把字符串打散为数组，始终对字符串操作,下面的这种操作字符串的方式是对上面的改良

```js
function toThousands(num) {
    var result = '',
    counter = 0;
    num = (num || 0).toString();
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result = num.charAt(i) + result;
        if (!(counter % 3) && i != 0) {
          result = ',' + result;
            
        }
    }
    return result;
}
console.log(toThousands(42371582378423))  // 42,371,582,378,423
```

### 方法6-正则表达式

```js
function toThousands(num) {
   var numStr = (num || 0).toString();
    return numStr.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
```


