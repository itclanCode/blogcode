---
title:PHP基本语法
---

## PHP基本语法

## 快速导航

<TOC />

## 基本的PHP语法

PHP 脚本可以放在文档中的任何位置。

PHP 脚本以 `<?php` 开始，以 `?>` 结束

```js
<?php
// PHP 代码
?>
```
`PHP`文件的默认文件扩展名是 "`.php`"。

`PHP` 文件通常包含 `HTML` 标签和一些 `PHP` 脚本代码

## phpinfo()

```html
<? 

phpinfo();

?>
```

`phpinfo`是一个函数（功能），这个函数（功能）会显示一个当前电脑（服务器）的详细的PHP信息

我们用分号（`;`）来告诉他代码写完了。因此，只要我们写完一段代码，就需要在后面加分号（`;`）

::: tip 注意事项

php的代码部份全部要用半角的英文、很多人容易写成全角的英文和符号造成PHP代码报错。

PHP代码的最后一行可以加也可不加分号。由于很多学习者特别是初学者经常犯一个毛病：写完一行代码不加分号。因此，容易报错。我们通常在公司里面规定：一行代码写完，就必须要加分号

:::

## PHP中的变量

在PHP中变量是用于储存信息的容器，我们命令服务器去干活的时候，往往需要产生一些数据，需要临时性存放起来，方便取用赋值方法与数学中的代数相类似

* 1、在PHP中变量是用于储存信息的容器，类似于数学中的集合
* 2、赋值方法与数学中的代数相类似

变量是用于存储值的，我们命令服务器去干活的时候，往往需要产生一些数据，需要临时性存放起来，方便取用。

我们也可以理解为，变量就像一个购物袋，我们可以用来装苹果、榴莲（当然也可以用来装玫瑰）

需要注意的是，一般情况下一个变量只能装一个（不要太贪心）值，除非是复合变量（后面变量类型时会介绍）

当我们放进去一个苹果后，再放进榴莲的时候，苹果就被替换掉，再放入香蕉，那么榴莲就被替换了

变量是用于存储信息的"容器

我们在PHP中的变量也是如此。有几个特点：

1. 必须要以`$`开始。后面跟着变量的名称,如变量`x`必须要写成$x

2. 变量的首字母不能以数字开始

3. 变量的名字区分大小写($y,和$Y是两个不同的变量),变量名不能包含空格

4. 变量不要用特殊符号、中文，`_`不算特殊符号

5. 变量命名要有意义（别写`xxx`，`aaa`，`ccc`这种 变量名）

6. 变量名只能包含字母数字字符以及下划线(A-A,0-9和_)

PHP没有声明变量的命令,变量在你第一次赋值给它的时候就被创建了的

错误举列：

错误：变量以数字开始

```js
<?php
 $123 = 345
?>

```
错误：变量当中有特殊字符,中文
```js
<?php

// $a*d = 345
//$中国=345

?>
```
错误:变量名没有意义`aaa`容易输错,也没有含义
```js
<?php
  $aaaa = 345;
?>

```
错误：变量严格区分大小写 `$dog` 和 `$Dog`是PHP学院的变量,尝试将`$dog`的值改为8.结果`D`写成了大写
```js
<?php
$dog = 5;
//重新修改$dog的值，将$dog改为8
$Dog = 8;
?>
```
正确举例

变量不能以数字开始,但是数字可以夹在变量名中间和结尾

## PHP是一门弱类型语言

不必向`PHP`声明该变量的数据类型,PHP会根据变量的值,自动把变量转换为正确的数据类型

在强类型的编程语言中,我们必须在使用变量前先声明(定义)变量的类型和名称

## PHP变量作用域

变量的作用域是脚本中的变量可被引用,使用的部门

PHP有四种不同的变量作用域

* local
* global
* static
* parameter

### 局部作用域与全局作用域

在所有函数外部定义的变量，拥有全局作用域。除了函数外，全局变量可以被脚本中的任何部分访问，要在一个函数中访问一个全局变量，需要使用 `global` 关键字。

在 `PHP` 函数内部声明的变量是局部变量，仅能在函数内部访问

```js

<?php 
  $x=5; // 全局变量 
  function myTest() 
  { 
    $y=10; // 局部变量 
    echo "<p>测试函数内变量:<p>"; 
    echo "变量 x 为: $x"; 
    echo "<br>"; 
    echo "变量 y 为: $y"; 
  }  

myTest(); 

echo "<p>测试函数外变量:<p>"; 
echo "变量 x 为: $x"; 
echo "<br>"; 
echo "变量 y 为: $y"; 
?>
```

在以上实例中 `myTest()` 函数定义了 `$x` 和 `$y` 变量。 `$x` 变量在函数外声明，所以它是全局变量 ， `$y` 变量在函数内声明所以它是局部变量。

当我们调用`myTest()`函数并输出两个变量的值, 函数将会输出局部变量 $y 的值，但是不能输出 `$x` 的值，因为 `$x` 变量在函数外定义，无法在函数内使用，如果要在一个函数中访问一个全局变量，需要使用 `global` 关键字。

然后我们在`myTest()`函数外输出两个变量的值，函数将会输出全局部变量 `$x` 的值，但是不能输出 `$y` 的值，因为 `$y` 变量在函数中定义，属于局部变量

可以在不同函数中使用相同的变量名称，因为这些函数内定义的变量名是局部变量，只作用于该函数内

### global 关键字

`global` 关键字用于函数内访问全局变量。

在函数内调用函数外定义的全局变量，我们需要在函数中的变量前加上 `global` 关键字

```js
<?php
  $x=5;
  $y=10;

function myTest()
{
  global $x,$y;
  $y=$x+$y;
}

myTest();
echo $y; 
?>
```
### static作用域

当一个函数完成时,它的所有变量通常都会被删除,然而,有时,你希望某个局部变量不要被删除

要做到这一点,在第一次声明变量时使用`static`关键字

```
<?php
   function myTest() {
    static $x = 0;
    echo $x;
    $x++;
   }
   myTest(); // 0
   myTest(); // 1
   myTest(); // 2
?>


```
每次调用该函数时，该变量将会保留着函数前一次被调用时的值,需要注意的是,该变量仍然是局部变量

如果变量`$x`去掉`static`,你会发现,每次都是0,0,0,并不会保留上一次的值


### 参数作用域

参数是通过调用代码将值传递给函数的局部变量，参数是在参数列表中声明的，作为函数声明的一部分

```

<?php

function myTest($x)
 {
   echo $x;
 }

  myTest(5);

?>
```


## echo显示命令

`echo` 是在`PHP`里面最常用的一个输出、显示功能的命令。

我们可以让他显示任何可见的字符

```js
echo 1234

$iphone = 134434366;
echo $iphone;

```

## PHP注释的学习


注释的功能有很多：

1.对重点进行标注

2.时间长了容易忘快速回忆，方便查找

3.让其他人看的时候快速看懂

4.还可以生成文档，代码写完相关的文档就写完了，提高工作效率

5.注释、空行、回车之后的代码看起来更优美

6.注释可用来排错。不确定代码中哪一块写错了，可以将一大段注释，确定错误区间

7.注释中间的部份的内容，电脑不会执行它

单行注释

```
//   表示单行注释
#    #号也表示单行注释，用的比较少
```
多行注释
```
/* 
多行注释 这里是注释区域代码
 */
```

## PHP整型就是整数

所谓整型，就是大家数学中所学的整数。

整型——整数也，英文称之:`integer`。英文简写：`int`

整型分为：

1. 10进制

2. 8进制 （了解，基本不用）

3. 16进制（了解，基本不用）

整型（整数）在计算机里面是有最大值和最小值范围的

### 10进制声明

```js
<?php
   //声明变量 整数，英文 int
   //$int = 1000;
   $zhengshu = 1000;
   echo $zhengshu;
?>
```
### 8进制声明

以0开始，后面跟0-7的整数

```js
<?php
//8进制的取值范围最大为0-7,即0,1,2,3,4,5,6,7

$bajingzhi =  033145;
echo $bajingzhi;

?>
```

### 16进制声明

 以`0x`开始，后面跟`0-f`的，`0x`的`abcdef`不区分大小写

 ```js
    <?php
    //16进制的取值范围最大为0-f,即0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f
    $shiliu =  0x6ff;
    echo $shiliu;
?>
 ```
 ## php数据类型之字符串

 文字，`HTML`标签、特殊字符和英文等等，我们都认为是字符串

 在`PHP`语言中声明字符串有三种方式：

1. 用单引号声明

2. 用双引号声明

3. 用字界符声明（需要输入非常大段的字符串时使用）

### 1.单引号声明 

用英文半脚的单引号，将字符串包起来

```js
<?php
//声明字符串变量$zhifu

$zhifu = '曾经有操蛋的爱情摆在我面前，我珍惜了。当我得到的时候才感到后悔莫及。如果非要在这段爱情前面加上一段三个字，我愿意说三个字：滚犊子';

//你可以放XAMPP指定的目录下，新建一个文件叫str.php。然后访问一下http://127.0.0.1/str.php试试。会不会显示这句话。

echo $zhifu;

?>

```

### 2.双引号声明字符串

在字符串两边加双引号

```js
<?php
//声明字符串变量$str
$str = "如果非要在滚犊子前面加上一个时间的话我愿意是马上。";

echo $str;
?>
```
### 3.字界符声明

1. 在变量后面的等号写三个小于号（`<<<`）
 
2. 然后在`<<<`后面写上字符（建议英文大写字符）。如下例中的：`ABC`

3. 然后换行写上任意想写的字符

4. 写完后，顶行。在行最开始处，再写上`<<<`后面的字符和分号。如下例中的：`ABC`

**双引号和单引号有什么区别呢**

1. 双引号解析变量，但是单引号不解析变量。

2. 在双引号里面插入变量，变量后面如果有英文或中文字符，它会把这个字符和变量拼接起来，视为一整个变量。一定要在变量后面接上特殊字符，例如空格等分开。

3. 如果在双引号里面插变量的时候，后面不想有空格，可以拿大括号将变量包起来

4. 双引号解析转义字符，单引号不解析转义字符。但，单引号能解析`\'` 和`\`

5. 单引号效率高于双引号，尽可能使用单引号

6. 双号和单引号可以互插,双引号当中插入单引号，单引号当中插入变量，这个变量会被解析。

7. 神奇的字符串拼接胶水——（`.`）点，用来拼接字符串。

8. 我们将定界符声明字符串视为双引号一样的功能来看待

### 1. 双引号解析变量,但是单引号不解析变量

```js
<?php
  // 声明变量
  $name = 'itclanCoder';
  $str = "$name,会不会显示呢";
  // 输入$str试试
  echo $str;
?>
```
在浏览器中会显示,itclanCoder,双引号内的变量会被执行显示

双引号中间的变量够执行显示，我们将`$str`这个字符串两边的双引号，改为单引号试试，再看一次执行结果

你会发现,$name会直接被当做字符串输出,而不是双引号的显示结果

双引号执行变量，而单引号不执行变量

双引号需要解析变量，因此双引号的效率没有单引号高。我们如果为了更高的效率，我们通常使用单引号

### 在双引号里面插入变量

在双引号里面插入变量，变量后面如果有英文或中文字符，它会把这个字符和变量拼接起来，视为一整个变量。可以在后面接上特殊字符，例如空格等分开

```js
<?php
  $php = 'itclanCoder';

  $str = "$phpaaaa";
  //你会发现输出$str，什么都没有在页面中显示
  echo $str;
?>
```
但是，我们在`$str `声明的这个字符串中将$php后面接个空格再接aaaa，代码如下
```js
 $php = 'itclanCoder';

  $str = "$php aaaa";
  //$php变量后是加了空格的
  echo $str;
```
你会发现执行显示的结果不再是空白页面，而是这个页面中有内容了

### 3. 如果在双引号里面插变量的时候，后面不想有空格，可以拿大括号将变量包起来

如果在双引号里面插变量的时候，后面不想有空格，可以拿大括号将变量包起来

如果我不想在后面有空格有，有特殊符号，就想直接显示变量`$php`呢？我们的解决办法是用大括号把变量包起来

```js
<?php
  
    $php = 'itclanCoder';
    // 中间加了空格
    $str = "{$php}川川";
    echo $str;
?>

```

### 4. 双引号解析转义字符，单引号不解析转义字符。但，单引号能解析\' 和\

第4个字符串的注意事项比较难以观察，转义字符有一些，但最常用的有：

\n 回车
\t 缩进

我们来通过实验先来理解`\n`和`\t`是什么

```js
<?php
  // 声明一个字符串,记住是双引号
  $string = "每天来itclanCoder\n,给梦想\t一个机会";
  echo $string;
?>
```
如果是双引号,那么会解析,换行,和缩进
同样执行一下上面的代码，但是`$string`双引号改为用单引号

```js
<?php
//声明一个字符串，记住是双引号
  $string = '每天来itclanCoder\n,给梦想\t一个机会';
  echo $string;
?>
```
如果是单引号,那么不会解析,单引号中间的`\t`和`\n`直接显示出来了，而没有变成按一次回车键和按一次`tab`键后的效果。
因此：

双引号执行转义字符而单引号不执行转义字符

### 5. 转义字符\（反斜线的使用）

如果我们声明一个变量`$beizi`，我们想要在`$beizi`声明的双引号中间加上一个双引号显示输出怎么办

```
<?php

   //要在$beizi的字符串中显示一个双引号怎么办？
   $beizi = "多于绝大多数的人出生就是杯具，但是"我们在不断的让人生变为喜剧";

   echo $beizi;
?>
```
如果真如上述所写代码，代码会报错。报错结果如下：

因为字符串：“多于绝大多数的人出生就是杯具，但是"我们在不断的让人生变为喜剧”必须写在双引号中间。

而双引号中间还有一个双引号。也就是意味着字符串声明提前结束了，在“但是”处结束了。后面"我们在不断的让人生变为喜剧"，电脑不认识。

这真是一个杯具！那么办？

答：我们需要将双引号原有的意义去掉。再双引号前面加上一个`\`（反斜线，计算机的专业名词叫转义字符），就可以了,如下所示
```js

<?php

  //要在$beizi的字符串中显示一个双引号怎么办？
  $beizi = "多于绝大多数的人出生就是杯具，但是\"我们在不断的让人生变为喜剧";

  echo $beizi;
?>
```
可以再执行一下上面的代码，发现不再报错了。同理可推，单引号当中要插入一个单引号显示出来的时候

也可以在单引号声明的字符串中的单引号前面加上(反斜线，转义字符)，将单引号的意义（限定字符区间）去掉
```js
<?php

//要在$beizi的字符串中显示一个双引号怎么办？
$name = 'i\'m itclancoder';

echo  $name;
?>
```
### 6. 双号和单引号可以互插

双号和单引号可以互插,双引号当中插入单引号，单引号当中插入变量，这个变量会被解析

```js
<?php

   $legend = '猛虎';

   $NoAlike = "心有'$legend',细嗅蔷薇";

   echo $NoAlike;

?>
```双引号中间的变量够执行显示，我们将$str这个字符串两边的双引号，改为单引号试试，再看一次执行结果：

### 7. 神奇的字符串拼接胶水——（.）点，用来拼接字符串

如下代码所示

```js
<?php
  $php = 'itclancoder';
  //中间加了空格哟
  $str = "{$php}aaaa";

  echo $str;
?>
```

双引号能够解析变量，有一个问题,效率没有纯单引号的高

那么问题1：我想改为效率最高的方式应该怎么办？

问题2：我有多个字符串，要拼接在一声怎么办？

那，我们需要使用到神奇的胶水：（`.`）点，用来拼接字符串

```js
<?php

  $shixi = '大学4年要好好学习<br />';

  $buran = '不然连实习的机会都没有<br />';

  $mimang = '把别人用来迷茫的时间拿到PHP<br />';

  $xuexi = '学习PHP<br />';

  //我们可以把字符串全部拼接起来。
  echo $shixi . $buran . $mimang . $xuexi;

?>
  因此，刚刚的问题一的代码我们可以改为：
    <?php
    $php = 'itclanCoder';
    //中间加了空格哟
    $str = $php . 'aaaa';
    echo $str;
?>

```
### 8. 我们将定界符声明字符串视为双引号一样的功能来看待

```js
<?php

$weilai = '努力才有未来';
$mimang = '迷茫的原因是没有目标';

$dingjie = <<<ABC
  如果
           $weilai
       非要\t在这"个滚"犊子
   前
           '$mimang'
       面<br />
      加上\n一段
   <i>距离的话</i>
   我想说：<h1>思想有多远，你就跟我滚多远</h1>
ABC;

echo $dingjie;
?>
```
可以执行发现`$weilai`,`$mimang`,`\t``\n`都可以执行，双引号单引号都能显示。这就是定界符的特点

不可见字符：主要是计算机规定的一些特殊符号。例如：回车（`\n`）、缩进(`\t`)等

## PHP整型就是整数

所谓整型，就是大家数学中所学的整数,整型就是整数

* 10进制
* 8进制(了解,基本不用)
* 16进制(了解,基本不用)

### 10进制声明

```js
<?php
$zhengshu = 1000;
echo $zhengshu;
?>
```

### 8进制声明

 以0开始，后面跟0-7的整数

 ```js
<?php
//8进制的取值范围最大为0-7,即0,1,2,3,4,5,6,7
  $bajingzhi =  033145;
  echo $bajingzhi;

?>
 ```

### 16进制声明

以0x开始，后面跟0-f的，0x的abcdef不区分大小写

```js
<?php
  //16进制的取值范围最大为0-f,即0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f
  $shiliu =  0x6ff;
  echo $shiliu;
?>
```
## php数据类型之布尔

布尔类型就是：真和假

## php数据类型-浮点型

所谓浮点类型,可以理解为小数

`var_dump()`是一个函数。向括号()中间插入变量。这个函数，会打印出来数据类型，还会对应显示变量的长度和值

声明方式分为两种：

* 普通声明

* 科学声明

普通声明浮点数

```js
<?php
  //声明变量fudian的值为12121.3132
  $fudian = 12121.3132;
  echo $fudian;
  //声明变量$fl 的值为0.8873
  $fl = 0.8873;
  var_dump($fl);

?>
```

## php流程控制之if-else语法

我们将`if`和`if...else`组合成了四种基本语法，每一种都必须背下来

```js
<?php
  if(布尔条件)
     布尔值为真(true)时执行，只能写一行代码;
?>
<?php
  if(布尔条件)
     布尔值为真(true)时执行，只能写一行代码;
  else
     布尔值为假(false)时执行，只能写一行代码;
  ?>

<?php
  if(布尔条件){
      布尔值为真(true)时执行，可写多行代码;
  }
 ?>
<?php
   if(布尔条件){
      布尔值为真(true)时执行，可写多行代码;
   }else{
      布尔值为假(false)时执行，可写多行代码;
   }
?>

<?php
//定义一下中奖变量，变量的值为true,表示中奖了
$zhongjiang = true;
//由于$zhongjiang 结果为true，所以显示了：“买个房子”
//可以改为false试试执行结果，如果为false的话，不会执行echo '买个房子';

if($zhongjiang){
   echo '买个房子';
}
//后续代码
echo '该干嘛干嘛';
?>

```
## php数据类型之Null类型

空在英文里面表示`null`,它代表是没有,空Null,不是false,不是0,也不是空格

主要有以下三种空情况会产生空(null)类型

1. 通过变量赋值明确指定为变量的值`null`

2. 一个变量没有给任何值

3. 使用函数`unset()`将变量销毁掉

```js
<?php
//声明变量为null
$n = null;
var_dump($n);
?>

<?php
//var_dump显示输出变量$meiyou，看看结果是什么？
var_dump($meiyou);
?>

<?php
//声明一个变量$iphone的值为字符串的手机
$iphone = '手机';
//unset销毁掉一个变量unset($iphone);
var_dump($iphone);
?>
```

`empty()`可以向括号中间传入一个变量。这个变量的值如果为`false`或者为`null`的话，返回`true`
```js
<?php

$apple = null;
if(empty($apple)){
    echo '执行了真区间，凤姐，我爱你';
}else{
   echo '行了假区间，你想凤姐了';
}
?>
```

上述实验证明，`$apple`为`null`。将`apple`放至`empty`中间。结果执行了真区间。

`isset()`可以向括号中间传入一个或者多个变量，变量与变量间用逗号分开。只要有有一个变量为`null`，则返回`false`。否则，则返回`true`

```js
<?php
//待会儿将变量$jia改为null再执行看看结果
$jia = false;

$result = isset($jia);

var_dump($result);

?>

<?php
  $one = 10;
  $two = false;
  $three = 0;
  $four = null;

  $result = isset($one , $two , $three , $four);
  //执行看看结果，是不是
  var_dump($result);

?>
```
`unset()`这个函数的功能是毁掉变量。`unset(变量)`括号中间插入想要毁掉的变量名，这个变量就会被毁掉

## php数据类型之数组

数组是一个复合类型

数组的英文叫`Array`,`var_dump`一个变量的时候看到的类型为`array`的,这个变量就是数组类型

会一个最简单,最基本的数组声明

```js
<?php
//定义$shu这个变量
//数组声明是向array里面插入一个或者多个值
//一个或者多个值用逗号分开
$shu = array(1,2,3);

?>
```
## php数据类型之资源类型

资源类型打印出来智能看到一个英文的`resource`,其他什么的电脑都不能显示出来,而它又客观存在

电脑里面的资源

1. `world`,`excel`等文件

2. 音乐,小电影,打开的网页,数据库等

我们打开一个图片,用`php`来操作它,我们就是操作的一个资源

打开数据库连接,我们需要连接数据库,数据库就是我们操作的资源

包括网络连接,连接后发送邮件,我们也可以认为是一个资源

## php数据类型之查看和判断数据类型

当自己知道一个数据的类型,才能进行下一步操作,后面的时候,可以学到更多的知识

### 查看数据类型

1. `gettype(传入一个变量)`:能够获得变量的类型

2. `var_dump(传入一个变量)`:输出类型和值

```js
<?php
  //声明一个变量88.8，你可以自己多做几次实验换成其他类型看看$type输出是多少
  $float = 88.8;
  $type = gettype($float);
  echo $type;

?>

<?php

//多换几个类型试试
$str = '你喜欢尊上还是喜欢杀仟陌？';

var_dump($str);
?>

```
### 判断数据类型

我们使用`is_*` 系列函数。 `is_types`这一系列的函数，来进行判断某个东西是不是某个类型。如果是这个类型返回真，不是这个类型返回假
* `is_int` 是否为整型
* `is_bool` 是否为布尔
* `is_float` 是否是浮点
* `is_string` 是否是字符串
* `is_array` 是否是数组
* `is_object` 是否是对象
* `is_null` 是否为空
* `is_resource` 是否为资源
* `is_scalar` 是否为标量
* `is_numeric` 是否为数值类型
* `is_callable` 是否为函数

```
<?php
//is_* 系列函数有个特点，就是如果是这个类型就返回的是真。不是这个数据类型就返回的是假
//声明类型为假
$fo = false;

if(is_bool($fo)){
    echo '执行真区间';
}else{
    echo '执行假区间';
}


//检查未声明的变量$p是否为空，为空就执行真区间
if(is_null($p)) {
    echo '执行真区间';
}else{
    echo '执行假区间';
}
echo "<br/>";

//字符串类型的数值，看看执行的是真还是假
$str = '18.8';
if(is_numeric($str)){
    echo '执行真区间';
}else{
    echo '执行假区间';
}
echo "<br/>";
//把sca的值换成整型、浮点、布尔和字符串试试
$sca = true;
//如果为标量，执行真区间
if(is_scalar($sca)){
    echo '执行真区间';
}else{
    echo '执行假区间';
}
echo "<br/>";
//换成echo,is_int试试，为什么echo执行假区间呢？
if(is_callable('var_dump')){
    echo '执行真区间';
}else{
    echo '执行假区间';
}

?>

```
注：`is_types` 很好记。`is_`在前后面跟类型即可。

变量：整型（`int`） 浮点（`float`）、布尔（`bool`）、字符串（`string`）

混合类型： 数组（`array`）、对象（`object`）

特殊类型：空（`null`）、 资源（`resouce`）、回调（`callback`）

为什么最后的实验中echo执行假区间呢？

答：因为`echo` 不是函数，是基本语法。大家眼前可以不用理解函数和基本语法的区别。了解和不了解在实际开发中没有影响。知道有这个知识点就行

## php数据类型之自动转换和强制转换

`php`是门弱类型的编程语言，所谓的弱类型,就是在声明变量的时候,不需要指定变量的类型,我要声明一个整型的变量

我不用在前面非得写上类型,在写变量

在`PHP`中,有些地方,我们可以强制指定类型,也可以不用强制指定类型来声明变量

### 布尔值的自动类型转换

自动类型转换,就是数据类型在某些情况下,自动会变为其他的类型参与运算,自动类型转换的发生时机是,运算和判断的时候,某些值会自动进行转换

下面的情况是,布尔值判断的时候自动类型转换

1. 整型的0为假,其他整型值全为真

2. 浮点的0.0,布尔值的假,小数点后面只要有一个非零的数值即为真

3. 空字符串为假,只要里面有一个空格都算真

4. 字符串的0,也将其看做是假,其他的都为真

5. 空数组也将其视为假,只要里面有一个值,就为真

6. 空也为假

7. 未声明成功的资源也为假

1，整型的0为假，其他整型值全为真

```js
<?php
  //整型的0，换成整型的其他值试试
  $bool = 0;
  if($bool){
     echo '美女美女我爱你';
  }else{
    echo '凤姐凤姐爱死我，执行假区间咯';
  }
?>
```
2, 浮点的0.0，布尔值的假。小数点后只要有一个非零的数值即为真

```js
<?php
  //浮点类型的的0，换成其他值试试
  $bool = 0.0;
  if($bool){
     echo '美女美女我爱你';
  }else{
     echo '凤姐凤姐爱死我，执行假区间咯';
  }
?>

```
3，空字符串为假，只要里面有一个空格都算真

```js
<?php
//空字符串，中间没有空格哟。实验完加个空格试试
$str = '';
if($str){
    echo '美女美女我爱你';
}else{
    echo '凤姐凤姐爱死我，执行假区间咯';
}
?>
```
4，字符串的0，也将其看作是假。其他的都为真

```js
<?php
  //0这个字符串哟，试试其他值看看
  $str = '0';
  if($str){
      echo '美女美女我爱你';
  }else{
      echo '凤姐凤姐爱死我，执行假区间咯';
  }
?>

```
5，空数组也将其视为假，只要里面有一个值，就为真

```js
<?php
 //这个数组当中啥也没放
 $arr = array();
 if($arr){
     echo '美女美女我爱你';
 }else{
     echo '凤姐凤姐爱死我，执行假区间咯';
 }
?>
```
6，空也为假

```js
<?php
//声明了一个空的变量$bool
$bool = null;
if($bool){
    echo '美女美女我爱你';
}else{
    echo '凤姐凤姐爱死我，执行假区间咯';
}
?>
```

7, 未声成功的资源也为假

```js
<?php
//下面这段代码会显示警告，可忽略。暂时只需要对着实验知道效果即可：未声成功的资源也为假
//下面这一块了解意思就行：打开adasfasfasfdsa.txt这个不存在的文件
$res = fopen('adasfasfasfdsa.txt','r');
if($res){
    echo '美女美女我爱你';
}else{
    echo '凤姐凤姐爱死我，执行假区间咯';
}
?>
```
### 其他类型的自动类型转换

自动类型转换在运算时也可以发生。跟所有我们总结的规律和观点一样：先总结、后实验。

只有标量在运算时会产生以下的自动类型转换

```js
<?php
//布尔变整型参与运算
$fo = true;
$result = $fo + 10;
//$result 结果为整型的11，因为$fo布尔的true变为了1
//如果$fo的值为0
var_dump($result);
//字符串类型
$str = '419不要爱';
$result = $str + 1;
//结果为420。因为将$str变为了整型的419参与运算
//将419放在字符串中间和结尾试试
var_dump($result);
?>
```
布尔值的`true`参与运算是会变成整型或者浮点的`1`布尔值的`false`参与运算是会变成整型或者浮点的`0`字符串开始处是整型或浮点类型的字符，会转成对应的类型参与运算

强制类型转换

强制类型转换有三种方式：

1. 用后面的三个函数可以完成类型转换，`intval()`、`floatval()`、`strval()`

2. 变量前加上()里面写上类型，将它转换后赋值给其他变量

3. `settype`(变量，类型) 直接改变量本身

我们来进行实验：

`intval()`、`floatval()`、`strval()`转换
```js
<?php
    $float = 1.23;
    $result = intval($float);
    //看看结果是不是变了？
    var_dump($result);
    //鸭脖子为整型的5
    $yabozi = 5;
    $re = floatval($yabozi);
    var_dump($re);
    //定义整型的变量
    $yabozi = 23;
    $bian = strval($yabozi);
    //强制变成字符串试试
    var_dump($bian);
?>

```
变量前加上()里面写上类型，将它转换后赋值给其他变量
```js
<?php
   //定义一个变量，我们来变化一下试试
   $transfer = 12.8;
   //把浮点变为整型
    $jieguo = (int)$transfer;
    var_dump($jieguo);
   //把浮点变为布尔
   $jieguo = (bool) $transfer;
   var_dump($jieguo);
   //把布尔变整型
   $bool = true;
   $jieguo = (int)$bool;
   var_dump($jieguo);
    //把浮点变数组
   $fo = 250;
   $jieguo = (array)$fo;
   var_dump($jieguo);
   //其他的操作方式，按照文字总结的规律你来试试
?>

```
`settype`(变量，类型) 直接改变量本身
```js
<?php
    //定义浮点变为整型
    $fo = 250.18;
   //settype第二个参数是int，你实验的时候要记得第二个参数要为字符串类型
    settype($fo,'int');
    //输出看看结果
    var_dump($fo);
?>
```
以下是强制类型转换时的特点，每一项你做实验看看对不对

  1. 空转为整型会为整型的`0`

  2. 空转为浮点会为浮点的`0`

  3. 空转为字符串会为空字符串`‘’`

  4. 浮点的`123.0`转为字符串会为字符串`123`

  5. 浮点的`123.2`转为字符串会为字符串的`123.2`

  6. 浮点即使小数点再大，它都会被干掉，会舍掉小数点后面的值

  7. 如果字符串转为整型的时候，如果数值在前面，会将前面的数值拿出来做为整型的转换值。

  8. `settype`(变量,'null'); 等价于 `unset()`一个变量

  9. `$`目标变量 = (类型)$操作变量 只会改变目标变量的类型，不会改变原变量的类型，`Settype`是改变原值

```js
<?php
      //小可爱，记得自己做实验，验证上面的9点哟
    $t=12.9;
    settype($t,'int');
    var_dump($t);
?>
```



<footer-FooterLink :isShareLink="false" :isDaShang="true" />
